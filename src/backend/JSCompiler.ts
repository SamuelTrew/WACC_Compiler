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
      const { rhs } = declaration
      let { identifier } = declaration
      if (JSLib.reservedKeywords.includes(identifier)) { identifier += '_' }
      return {
        decl: JSLib.JSDeclarationKeywords.let,
        expr: this.generateRhs(rhs),
        iden: identifier,
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
      return {
        expr: {
          args: [this.generateExpression(stat.stdlibExpr), {
            type: JSLib.JSExprTypes.Terminal,
            value: '"\\n"',
          } as JSLib.JSTerminalExpr],
          iden: (this.outUsed ? `__write` : 'console.log'),
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
          iden: `__write`,
          type: JSLib.JSExprTypes.Call,
        } as JSLib.JSFunctionCall,
        type: JSLib.JSStatTypes.Void,
      } as JSLib.JSVoidStatement
    }],
    [WJSCParserRules.ConditionalWhile, (stat: WJSCStatement): JSLib.JSStat => ({
      body: this.generateStatement(stat.trueBranch),
      cond: this.generateExpression(stat.condition),
      type: JSLib.JSStatTypes.While,
    } as JSLib.JSWhile)],
    [WJSCParserRules.Assignment, (stat: WJSCStatement): JSLib.JSStat => ({
      expr: {
        lhs: this.generateLhs(stat.assignment.lhs),
        rhs: this.generateRhs(stat.assignment.rhs),
        type: JSLib.JSExprTypes.Assignment,
      } as JSLib.JSAssignment,
      type: JSLib.JSStatTypes.Void,
    } as JSLib.JSVoidStatement)],
    [WJSCParserRules.ConditionalIf, (stat: WJSCStatement): JSLib.JSStat => ({
      cond: this.generateExpression(stat.condition),
      stat1: this.generateStatement(stat.trueBranch),
      stat2: this.generateStatement(stat.falseBranch),
      type: JSLib.JSStatTypes.IfElse,
    } as JSLib.JSIfElse)],
  ])

  private readonly exprMap: Map<WJSCParserRules, (expr: WJSCExpr) => JSLib.JSExpr> = new Map([
    [WJSCParserRules.IntLiteral, ({ value }: WJSCExpr): JSLib.JSExpr => ({ value, type: JSLib.JSExprTypes.Terminal })],
    [WJSCParserRules.BoolLiter, ({ value }: WJSCExpr): JSLib.JSExpr => ({ value, type: JSLib.JSExprTypes.Terminal })],
    [WJSCParserRules.CharLiter, ({ value }: WJSCExpr): JSLib.JSExpr => ({ value: `"${value}"`, type: JSLib.JSExprTypes.Terminal })],
    [WJSCParserRules.StringLiter, ({ value }: WJSCExpr): JSLib.JSExpr => ({ value: `"${value}"`, type: JSLib.JSExprTypes.Terminal })],
    [WJSCParserRules.PairLiter, (): JSLib.JSExpr => ({ value: [undefined, undefined], type: JSLib.JSExprTypes.Terminal })],
    [WJSCParserRules.Identifier, ({ value }: WJSCExpr): JSLib.JSExpr => ({ value: JSLib.reservedKeywords.includes(value) ? value + '_' : value, type: JSLib.JSExprTypes.Terminal })],
    [WJSCParserRules.BinOp, (expr: WJSCExpr): JSLib.JSExpr => ({
      expr1: this.generateExpression(expr.expr1),
      expr2: this.generateExpression(expr.expr2),
      operator: expr.operator.token,
      type: JSLib.JSExprTypes.Binary,
    } as JSLib.JSBinaryExpr)],
    [WJSCParserRules.Unop, (expr: WJSCExpr): JSLib.JSExpr => {
      if (expr.operator.token === 'chr' || expr.operator.token === 'ord') {
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
      arr: (expr.children[0] as WJSCArrayElem).ident,
      indx: (expr.children[0] as WJSCArrayElem).specificInd.map(this.generateExpression),
      type: JSLib.JSExprTypes.ArrayElem,
    }) as JSLib.JSArrayElem],
    [WJSCParserRules.Expression, (expr: WJSCExpr): JSLib.JSExpr => ({
      expr: this.generateExpression(expr.children[0] as WJSCExpr),
      type: JSLib.JSExprTypes.Nested,
    }) as JSLib.JSNestedExpr],
  ])

  private presetPolyfill = {
    stdout: `var __buf="";function __write(){for(var _=[],f=0;f<arguments.length;f++)_[f]=arguments[f];0===_.length&&(console.log(__buf),__buf=""),_.forEach(function(_){String(_).split("").forEach(function(_){"\\n"===_?(console.log(__buf),__buf=""):__buf+=_})})}`,
  }

  private readonly main = '__main'
  private outUsed = false

  public generateProgram = (ast: WJSCAst) => {
    const { functions, body } = ast
    const generatedFunctions = this.generateFunctions(functions)
    const generatedStatements = body ? this.generateStatement(body) : undefined
    return `"use strict";` + (this.outUsed ? `${this.presetPolyfill.stdout}` : '')
      + `${generatedFunctions.map(JSLib.stringify.func).join(';')}`
      + (generatedStatements ? `function ${this.main}(){${JSLib.stringify.stat(generatedStatements)}}` : '')
      + (this.polyfills.length > 0 ? `;${this.generatePolyfills()}` : '')
      + `;var __exit=${this.main}()` + (this.outUsed ? `;if(__buf.length>0){__write()}` : '')
      + ';__exit'
  }

  private generatePolyfills = (): string => {
    const output: string[] = []
    if (this.polyfills.includes('ord')) {
      output.push('function ord(c){return(c.charCodeAt(0))}')
    }
    if (this.polyfills.includes('chr')) {
      output.push('function chr(n){return(String.fromCharCode(n))}')
    }
    return output.join(';')
  }

  private generateFunctions = (functions: WJSCFunction[]): JSLib.JSFunction[] => functions.map((func: WJSCFunction) => {
    const { paramList, body } = func
    let identifier = func.identifier
    if (JSLib.reservedKeywords.includes(identifier)) { identifier += '_' }
    return {
      body: this.generateStatement(body),
      name: identifier,
      params: paramList.map((param): string => (param as any).identifier),
    } as JSLib.JSFunction
  })

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
        arr: (lhs.children[0] as WJSCArrayElem).ident,
        indx: (lhs.children[0] as WJSCArrayElem).specificInd.map(this.generateExpression),
        type: JSLib.JSExprTypes.ArrayElem,
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
        console.log('fuckat')
        return {

        } as JSLib.JSPairExpr
      case WJSCParserRules.FunctionCall:
        let identifier = rhs.ident
        if (JSLib.reservedKeywords.includes(identifier)) { identifier += '_' }
        return {
          args: (rhs.argList || []).map(this.generateExpression),
          iden: identifier,
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
