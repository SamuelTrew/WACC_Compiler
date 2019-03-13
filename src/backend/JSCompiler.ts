import { WJSCSymbolTable } from '../frontend/WJSCSymbolTable'
import { WJSCArrayElem, WJSCAssignLhs, WJSCAssignRhs, WJSCAst, WJSCExpr, WJSCFunction, WJSCIdentifier, WJSCParam, WJSCParserRules, WJSCStatement } from '../util/WJSCAst'
import * as JSLib from './JS-lib'

/**
 * Attempts to generate ECMAScript compliant code.
 */
export class JSCompiler {

  private polyfills: string[] = []
  private readonly statementMap: Map<WJSCParserRules, (statement: WJSCStatement) => JSLib.JSStat> = new Map([
    [WJSCParserRules.Skip, (): JSLib.JSStat => ({ type: JSLib.JSStatTypes.Empty })],
    [WJSCParserRules.Exit, ({ stdlibExpr }: WJSCStatement): JSLib.JSStat => {
      /* ECMAScript doesn't really have an exit call so return is used instead */
      const exitCode = this.generateExpression(stdlibExpr)
      return {
        expr: exitCode,
        type: JSLib.JSStatTypes.Return,
      }
    }],
    [WJSCParserRules.Declare, ({ declaration }: WJSCStatement): JSLib.JSStat => {
      const { rhs, identifier } = declaration
      return {
        decl: JSLib.JSDeclarationKeywords.let,
        expr: this.generateRhs(rhs),
        iden: this.declIdentName(identifier),
        type: JSLib.JSStatTypes.Declaration,
      }
    }],
    [WJSCParserRules.Sequential, (stat: WJSCStatement): JSLib.JSStat => {
      return {
        stat1: this.generateStatement(stat.stat),
        stat2: this.generateStatement(stat.nextStat),
        type: JSLib.JSStatTypes.Sequential,
      } as JSLib.JSSeqStat
    }],
    [WJSCParserRules.Return, (stat: WJSCStatement): JSLib.JSStat => {
      return {
        expr: this.generateExpression(stat.stdlibExpr),
        type: JSLib.JSStatTypes.Return,
      } as JSLib.JSReturn
    }],
    [WJSCParserRules.Println, (stat: WJSCStatement): JSLib.JSStat => {
      const args = [this.generateExpression(stat.stdlibExpr)]
      if (this.outUsed) {
        args.concat({
          type: JSLib.JSExprTypes.Terminal,
          value: '"\\n"',
        } as JSLib.JSTerminalExpr)
      }
      return {
        expr: {
          args,
          iden: (this.outUsed ? `_write` : 'console.log'),
          type: JSLib.JSExprTypes.Call,
        } as JSLib.JSFunctionCall,
        type: JSLib.JSStatTypes.Void,
      } as JSLib.JSVoidStatement
    }],
    [WJSCParserRules.Print, (stat: WJSCStatement): JSLib.JSStat => {
      this.outUsed = true
      return {
        expr: {
          args: [this.generateExpression(stat.stdlibExpr)],
          iden: `_write`,
          type: JSLib.JSExprTypes.Call,
        } as JSLib.JSFunctionCall,
        type: JSLib.JSStatTypes.Void,
      } as JSLib.JSVoidStatement
    }],
    [WJSCParserRules.ConditionalWhile, (stat: WJSCStatement): JSLib.JSStat => {
      this.enterScope()
      const body = this.generateStatement(stat.trueBranch)
      this.exitScope()
      return {
        body,
        cond: this.generateExpression(stat.condition),
        type: JSLib.JSStatTypes.While,
      } as JSLib.JSWhile
    }],
    [WJSCParserRules.Assignment, (stat: WJSCStatement): JSLib.JSStat => {
      if (stat.assignment.lhs.parserRule === WJSCParserRules.ArrayElem && stat.assignment.lhs.type === 'char') {
        this.polyfills.push('strrpl')
        return {
          expr: {
            lhs: {
              type: JSLib.JSExprTypes.Terminal,
              value: this.getIdentName((stat.assignment.lhs.children[0] as WJSCArrayElem).ident),
            },
            rhs: {
              args: [{
                type: JSLib.JSExprTypes.Terminal,
                value: this.getIdentName((stat.assignment.lhs.children[0] as WJSCArrayElem).ident),
              },     (stat.assignment.lhs.children[0] as WJSCArrayElem).specificInd.map(this.generateExpression)[0], this.generateRhs(stat.assignment.rhs)],
              iden: 'strrpl',
              type: JSLib.JSExprTypes.Call,
            } as JSLib.JSFunctionCall,
            type: JSLib.JSExprTypes.Assignment,
          } as JSLib.JSAssignment,
          type: JSLib.JSStatTypes.Void,
        } as JSLib.JSVoidStatement
      } else {
        return {
          expr: {
            lhs: this.generateLhs(stat.assignment.lhs),
            rhs: this.generateRhs(stat.assignment.rhs),
            type: JSLib.JSExprTypes.Assignment,
          } as JSLib.JSAssignment,
          type: JSLib.JSStatTypes.Void,
        } as JSLib.JSVoidStatement
      }
    }],
    [WJSCParserRules.ConditionalIf, (stat: WJSCStatement): JSLib.JSStat => {
      const [stat1, stat2] = [stat.trueBranch, stat.falseBranch].map((branch) => {
        this.enterScope()
        const result = this.generateStatement(branch)
        this.exitScope()
        return result
      })
      return {
        cond: this.generateExpression(stat.condition),
        stat1,
        stat2,
        type: JSLib.JSStatTypes.IfElse,
      } as JSLib.JSIfElse
    }],
    [WJSCParserRules.Free, (stat: WJSCStatement): JSLib.JSStat => ({
      expr: {
        lhs: this.generateExpression(stat.stdlibExpr),
        rhs: {
          type: JSLib.JSExprTypes.Terminal,
          value: null,
        } as JSLib.JSTerminalExpr,
        type: JSLib.JSExprTypes.Assignment,
      } as JSLib.JSAssignment,
      type: JSLib.JSStatTypes.Void,
    } as JSLib.JSVoidStatement)],
    [WJSCParserRules.Scope, (stat: WJSCStatement): JSLib.JSStat => {
      this.enterScope()
      const result = {
        blck: this.generateStatement(stat.stat),
        type: JSLib.JSStatTypes.Block,
      } as JSLib.JSBlock
      this.exitScope()
      return result
    }],
  ])

  private readonly exprMap: Map<WJSCParserRules, (expr: WJSCExpr) => JSLib.JSExpr> = new Map([
    [WJSCParserRules.IntLiteral, ({ value }: WJSCExpr): JSLib.JSExpr => ({ value, type: JSLib.JSExprTypes.Terminal })],
    [WJSCParserRules.BoolLiter, ({ value }: WJSCExpr): JSLib.JSExpr => ({ value, type: JSLib.JSExprTypes.Terminal })],
    [WJSCParserRules.CharLiter, ({ value }: WJSCExpr): JSLib.JSExpr => ({ value: `"${value}"`, type: JSLib.JSExprTypes.Terminal })],
    [WJSCParserRules.StringLiter, ({ value }: WJSCExpr): JSLib.JSExpr => ({ value: `"${value}"`, type: JSLib.JSExprTypes.Terminal })],
    [WJSCParserRules.PairLiter, (): JSLib.JSExpr => ({ value: null, type: JSLib.JSExprTypes.Terminal })],
    [WJSCParserRules.Identifier, ({ value }: WJSCExpr): JSLib.JSExpr => ({ value: this.getIdentName(value), type: JSLib.JSExprTypes.Terminal })],
    [WJSCParserRules.BinOp, (expr: WJSCExpr): JSLib.JSExpr => ({
      expr1: this.generateExpression(expr.expr1),
      expr2: this.generateExpression(expr.expr2),
      operator: expr.operator.token,
      type: JSLib.JSExprTypes.Binary,
    } as JSLib.JSBinaryExpr)],
    [WJSCParserRules.Unop, (expr: WJSCExpr): JSLib.JSExpr => {
      if (expr.operator.token === 'chr' || expr.operator.token === 'ord' || expr.operator.token === 'len') {
        this.polyfills.push(expr.operator.token)
        return {
          args: [this.generateExpression(expr.expr1)],
          iden: expr.operator.token,
          type: JSLib.JSExprTypes.Call,
        } as JSLib.JSFunctionCall
      } else {
        return {
          expr: this.generateExpression(expr.expr1),
          operator: expr.operator.token,
          type: JSLib.JSExprTypes.Unary,
        } as JSLib.JSUnaryExpr
      }
    }],
    [WJSCParserRules.ArrayElem, (expr: WJSCExpr): JSLib.JSExpr => ({
      arr: this.getIdentName((expr.children[0] as WJSCArrayElem).ident),
      indx: (expr.children[0] as WJSCArrayElem).specificInd.map(this.generateExpression),
      type: JSLib.JSExprTypes.ArrayElem,
    }) as JSLib.JSArrayElem],
    [WJSCParserRules.Expression, (expr: WJSCExpr): JSLib.JSExpr => ({
      expr: this.generateExpression(expr.children[0] as WJSCExpr),
      type: JSLib.JSExprTypes.Nested,
    }) as JSLib.JSNestedExpr],
  ])

  private readonly presetPolyfill = {
    stdout: `var _buf="";function _write(){for(var _=[],f=0;f<arguments.length;f++)_[f]=arguments[f];0===_.length&&(console.log(_buf),_buf=""),_.forEach(function(_){String(_).split("").forEach(function(_){"\\n"===_?(console.log(_buf),_buf=""):_buf+=_})})}`,
  }
  private readonly main = '_main'
  private outUsed = false
  private symboltable: Array<Map<string, string>> = []

  public generateProgram = (ast: WJSCAst) => {
    this.symboltable.unshift(new Map())
    const { functions, body } = ast
    const generatedFunctions = this.generateFunctions(functions)
    const generatedStatements = body ? this.generateStatement(body) : undefined
    return `"use strict";` + (this.outUsed ? `${this.presetPolyfill.stdout}` : '')
      + `${generatedFunctions.map(JSLib.stringify.func).join(';')}`
      + (generatedStatements ? `function ${this.main}(){${JSLib.stringify.stat(generatedStatements)}}` : '')
      + (this.polyfills.length > 0 ? `;${this.generatePolyfills()}` : '')
      + `;var _exit=${this.main}()` + (this.outUsed ? `;if(_buf.length>0){_write()}` : '')
      + ';_exit'
  }

  /** Declare an identifier and assign it a name if clashing */
  private declIdentName = (ident: string): string => {
    let modifiedIdent = ident
    while (JSLib.reservedKeywords.includes(modifiedIdent)) { modifiedIdent += '_' }
    const numberlessIdent = modifiedIdent
    let count = 0
    /* Iterate through tables to build up array of taken names */
    const nameArray = []
    for (const curtable of this.symboltable) { nameArray.push(curtable.get(ident)) }
    while (nameArray.includes(modifiedIdent)) { modifiedIdent = numberlessIdent + ++count }
    this.symboltable[0].set(ident, modifiedIdent)
    return modifiedIdent
  }

  /** Search the symbol table for the most local occurrence of `ident` */
  private getIdentName = (ident: string): string => {
    for (const curtable of this.symboltable) {
      const found = curtable.get(ident)
      if (found) { return found }
    }
    console.log(this.symboltable)
    throw new Error('Undeclared symbol ' + ident)
  }

  private enterScope = () => this.symboltable.unshift(new Map())

  private exitScope = () => this.symboltable.shift()

  private generatePolyfills = (): string => {
    const output: string[] = []
    if (this.polyfills.includes('ord')) {
      output.push('function ord(c){return(c.charCodeAt(0))}')
    }
    if (this.polyfills.includes('chr')) {
      output.push('function chr(n){return(String.fromCharCode(n))}')
    }
    if (this.polyfills.includes('len')) {
      output.push('function len(n){return(n.length)}')
    }
    if (this.polyfills.includes('strrpl')) {
      output.push('function strrpl(s,i,v){var a=s.split("");a[i]=v;return a.join("")}')
    }
    return output.join(';')
  }

  private generateFunctions = (functions: WJSCFunction[]): JSLib.JSFunction[] => (functions.forEach((func: WJSCFunction) => {
    /* Build the function prototypes first */
    this.declIdentName(func.identifier)
  }), functions.map((func: WJSCFunction) => {
    const { paramList, body, identifier } = func
    const name = this.getIdentName(identifier)
    this.enterScope()
    const params = paramList.map((param): string => this.declIdentName((param as any).identifier))
    const result = {
      body: this.generateStatement(body),
      name,
      params,
    } as JSLib.JSFunction
    this.exitScope()
    return result
  }))

  private generateStatement = (statement: WJSCStatement): JSLib.JSStat => {
    const { parserRule } = statement
    const generator = this.statementMap.get(parserRule)
    if (generator) {
      return generator(statement)
    } else {
      throw new TypeError(`generateStatement: undefined parser rule ${parserRule}`)
    }
  }

  private generateExpression = (expr: WJSCExpr): JSLib.JSExpr => {
    const { parserRule } = expr
    const generator = this.exprMap.get(parserRule)
    if (generator) {
      return generator(expr)
    } else {
      throw new TypeError(`generateExpression: undefined parser rule ${parserRule}`)
    }
  }

  private generateLhs = (lhs: WJSCAssignLhs): JSLib.JSExpr => {
    const { parserRule } = lhs
    if (parserRule === WJSCParserRules.Identifier) {
      return {
        type: JSLib.JSExprTypes.Terminal,
        value: lhs.token,
      } as JSLib.JSTerminalExpr
    } else if (parserRule === WJSCParserRules.ArrayElem) {
      return {
        arr: this.getIdentName((lhs.children[0] as WJSCArrayElem).ident),
        indx: (lhs.children[0] as WJSCArrayElem).specificInd.map(this.generateExpression),
        type: JSLib.JSExprTypes.ArrayElem,
        typeName: 'array',
      } as JSLib.JSArrayElem
    } else {
      return {
        indx: (lhs.pairElem.parserRule === WJSCParserRules.FirstElem) ? 0 : 1,
        pair: this.generateExpression(lhs.pairElem.expr),
        type: JSLib.JSExprTypes.PairElem,
      } as JSLib.JSPairElem
    }
  }

  private generateRhs = (rhs: WJSCAssignRhs): JSLib.JSExpr => {
    switch (rhs.parserRule) {
      case WJSCParserRules.Expression:
        return this.generateExpression(rhs.expr)
      case WJSCParserRules.ArrayLiteral:
        return this.generateArrayLiteral(rhs.arrayLiter)
      case WJSCParserRules.Newpair:
        return {
          pairValues: [
            this.generateExpression(rhs.expr),
            this.generateExpression(rhs.expr2),
          ],
          type: JSLib.JSExprTypes.Pair,
        } as JSLib.JSPairExpr
      case WJSCParserRules.PairElem:
        return {
          indx: (rhs.pairElem.parserRule === WJSCParserRules.FirstElem) ? 0 : 1,
          pair: { value: this.getIdentName(rhs.pairElem.ident), type: JSLib.JSExprTypes.Terminal },
          type: JSLib.JSExprTypes.PairElem,
        } as JSLib.JSPairElem
      case WJSCParserRules.FunctionCall:
        return {
          args: (rhs.argList || []).map(this.generateExpression),
          iden: this.getIdentName(rhs.ident),
          type: JSLib.JSExprTypes.Call,
        } as JSLib.JSFunctionCall
      default:
        throw new TypeError('Unknown RHS Rule' + rhs.parserRule)
    }
  }

  private generateArrayLiteral = ({ children }: WJSCAst): JSLib.JSExpr => ({
    type: JSLib.JSExprTypes.Array,
    values: children.map((child) => this.generateExpression(child as WJSCExpr)),
  })

}
