import { ParserRuleContext } from 'antlr4ts'
import { AbstractParseTreeVisitor } from 'antlr4ts/tree'
import {
  ArgListContext, ArrayElementContext,
  ArrayLiteralContext,
  ArrayTypeContext,
  AssignLhsContext, AssignmentContext,
  AssignRhsContext,
  BaseTypeContext,
  ConditionalBlocksContext, ExpressionContext,
  FuncContext, PairElementContext,
  PairElementTypeContext, PairTypeContext, ParamContext, ParamListContext,
  ProgramContext,
  StatementContext,
  TypeContext,
} from './grammar/WJSCParser'
import { WJSCParserVisitor } from './grammar/WJSCParserVisitor'
import { WJSCAst } from './WJSCAst'
import { WJSCErrorLog } from './WJSCErrors'
import { WJSCSymbolTable } from './WJSCSymbolTable'
import { hasSameType, isBaseType } from './WJSCType'

class WJSCSemanticChecker extends AbstractParseTreeVisitor<WJSCAst> implements WJSCParserVisitor<WJSCAst> {

  private errorLog = new WJSCErrorLog()
  private symbolTable = new WJSCSymbolTable(0, undefined, this.errorLog)

  public visitArgList = (ctx: ArgListContext): WJSCAst => {
    const result = this.initWJSCAst(ctx)
    const expressions = ctx.expression()
    result.children = expressions.map(this.visitExpression)
    return result
  }

  public visitArrayElement = (ctx: ArrayElementContext): WJSCAst => {
    // co const result = this.initWJSCAst(ctx)
    // co const identifier = ctx.IDENTIFIER()
    const expressions = ctx.expression()
    const children = expressions.map(this.visitExpression)
    // co const identName = this.visitTerminal(identifier).token
    children.forEach((child, index) => {
      return true
    })
    return this.initWJSCAst(ctx)
  }

  public visitArrayLiteral = (ctx: ArrayLiteralContext): WJSCAst => {
    const result = this.initWJSCAst(ctx)
    const expressions = ctx.expression()
    const children = expressions.map(this.visitExpression)
    if (children.length !== 0) {
      const firstChild = children[1]
      children.forEach((child, index) => {
        if (child.type === undefined || firstChild.type === undefined) {
          this.errorLog.log(result, 'undefined')
        } else if (!hasSameType(child.type, firstChild.type)) {
          // TODO add new error for array type inconsistency
          this.errorLog.log(result, 'mismatch', firstChild.type)
        } else {
          this.symbolTable.checkType(child)
        }
        // We also need to check that the child type matches what's stored
      })
    }
    return result
  }

  public visitArrayType = (ctx: ArrayTypeContext): WJSCAst => {
    const result = this.initWJSCAst(ctx)
    const type = ctx.baseType() || ctx.arrayType() || ctx.pairType()
    if (type === undefined) {
      this.errorLog.log(result, 'undefined')
    } else {
      const typeNode =
        (type instanceof BaseTypeContext) ? this.visitBaseType(type) :
          (type instanceof ArrayTypeContext) ? this.visitArrayType(type) :
            this.visitPairType(type)
      result.children.push(typeNode)
      result.type = {
        arrayType: typeNode.type,
      }
    }
    return result
  }

  public visitAssignLhs = (ctx: AssignLhsContext): WJSCAst => {
    // not code: const result = this.initWJSCAst(ctx)
    return this.initWJSCAst(ctx) // result
  }

  public visitAssignRhs = (ctx: AssignRhsContext): WJSCAst => {
    // not code: const result = this.initWJSCAst(ctx)
    return this.initWJSCAst(ctx) // result
  }

  public visitAssignment = (ctx: AssignmentContext): WJSCAst => {
    // not code: const result = this.initWJSCAst(ctx)
    const result = this.initWJSCAst(ctx)
    const lhs = ctx.assignLhs()
    const rhs = ctx.assignRhs()
    if (lhs === undefined || rhs === undefined) {
      result.error.push('Assignment is invalid at ' + result.line + ':' + result.column)
    } else {
      this.visitAssignLhs(lhs)
      this.visitAssignRhs(rhs)
    }
    return result // result
  }

  public visitBaseType = (ctx: BaseTypeContext): WJSCAst => {
    const result = this.initWJSCAst(ctx)
    const stringType = ctx.STRING()
    const intType = ctx.INTEGER()
    const boolType = ctx.BOOLEAN()
    const charType = ctx.CHARACTER()

    if (!(isBaseType(result.type) || isBaseType(stringType) || isBaseType(intType)
      || isBaseType(boolType) || isBaseType(charType) || hasSameType(result.type, 'string')
      || hasSameType(result.type, 'int') || hasSameType('char', result.type) ||
      hasSameType('bool', result.type))) {
      result.error.push('Incorrect type at ' + result.line + ':' + result.column)
    } else if (result.type === undefined) {
      this.errorLog.log(result, 'undefined')
    } else {
      this.symbolTable.checkType(result)
    }

    return result
  }

  public visitConditionalBlocks = (ctx: ConditionalBlocksContext): WJSCAst => {
    // not code: const result = this.initWJSCAst(ctx)
    return this.initWJSCAst(ctx) // result
  }

  public visitExpression = (ctx: ExpressionContext): WJSCAst => {
    // not code: const result = this.initWJSCAst(ctx)
    const result = this.initWJSCAst(ctx)
    const literals = ctx.integerLiteral() || ctx.BOOLEAN_LITERAL() || ctx.CHARACTER_LITERAL()
                     || ctx.STRING_LITERAL() || ctx.PAIR_LITERAL()
    const ident = ctx.IDENTIFIER()
    const arrayElem = ctx.arrayElement()
    const operators = ctx.unaryOperator() || ctx.binaryOperator()
    const bracket = ctx.LPAREN()
    if (literals === undefined && ident === undefined && arrayElem === undefined &&
    operators === undefined && bracket === undefined) {
      result.error.push('Expressions are invalid ' + result.line + ':' + result.column)
    } else {
      if (operators !== undefined || bracket !== undefined) {
        if (bracket !== undefined && ctx.RPAREN() === undefined) {
          // Scenario in which there is no ending bracket
          result.error.push('Expression bracketing is invalid ' + result.line + ':' + result.column)
        } else {
          const expressions = ctx.expression()
          expressions.forEach((child, index) => {
            this.visitExpression(child)
          })
        }
      }
      if (arrayElem !== undefined) {
        this.visitArrayElement(arrayElem)
      }
    }
    return result// result
  }

  public visitFunc = (ctx: FuncContext): WJSCAst => {
    const result = this.initWJSCAst(ctx)

    const type = ctx.type()
    // WARNING: I think you need to check if a function has no undefined parts
    // const ident = ctx.IDENTIFIER()
    const paramList = ctx.paramList()
    const stat = ctx.statement()

    const typeNode = this.visitType(type)
    const statNode = this.visitStatement(stat)
    if (paramList !== undefined) {
      const paramNode = this.visitParamList(paramList)
      if (result.type === undefined || type === undefined) {
        this.errorLog.log(result, 'undefined')
      } else {
        this.symbolTable.checkType(result)
        this.symbolTable.checkType(typeNode)
        this.symbolTable.checkType(statNode)
        this.symbolTable.checkType(paramNode)
      }
    } else {
      result.error.push('Your paramList is undefined at ' + result.line + ':' + result.column)
    }
    return result
  }

  public visitPairElement = (ctx: PairElementContext): WJSCAst => {
    // not code: const result = this.initWJSCAst(ctx)
    return this.initWJSCAst(ctx) // result
  }

  public visitPairElementType = (ctx: PairElementTypeContext): WJSCAst => {
    // not code: const result = this.initWJSCAst(ctx)
    return this.initWJSCAst(ctx) // result
  }

  public visitPairType = (ctx: PairTypeContext): WJSCAst => {
    // not code: const result = this.initWJSCAst(ctx)
    const pairs = ctx.pairElementType()
    pairs.forEach((pair, index) => {
      this.visitPairElementType(pair)
    })
    return this.initWJSCAst(ctx)// result
  }

  public visitParam = (ctx: ParamContext): WJSCAst => {
    const result = this.initWJSCAst(ctx)
    // WARNING: I think you need to check if a function has no undefined parts
    // const ident = ctx.IDENTIFIER()
    const type = ctx.type()
    const typeNode = this.visitType(type)

    // comment: if (type === undefined || result.type === undefined) {
    //   result.error.push('Type is undefined at ' + result.line + ':' + result.column)
    // } else if (!this.symbolTable.checkType(typeNode.token, typeNode.type)) {
    //   result.error.push('Different type from ST at ' + result.line + ':' + result.column)
    // } else if (!hasSameType(typeNode.type, result.type)) {
    //   result.error.push('Incorrect type at ' + result.line + ':' + result.column)
    // }
    return result
  }

  public visitParamList = (ctx: ParamListContext): WJSCAst => {
    // not code: const result = this.initWJSCAst(ctx)
    return this.initWJSCAst(ctx) // result
  }

  public visitProgram = (ctx: ProgramContext): WJSCAst => {
    // not code: const result = this.initWJSCAst(ctx)
    return this.initWJSCAst(ctx) // result
  }

  public visitStatement = (ctx: StatementContext): WJSCAst => {
    const result = this.initWJSCAst(ctx)
    const skip = ctx.WSKIP()
    // WARNING Missing: FREE, RETURN, EXIT, PRINT, PRINTLN <- Are these STDLIBs?
    const statWithSingleExp = ctx.stdlib()
    // The other assignment format? (<type><ident> = <assign rhs>)
    const assignment = ctx.assignment() || ctx.READ()
    const conditionals = ctx.conditionalBlocks()
    const begin = ctx.BEGIN()
    const semicolon = ctx.SEMICOLON()
    if (skip === undefined && statWithSingleExp === undefined && assignment === undefined
    && conditionals === undefined && begin === undefined && semicolon === undefined) {
      result.error.push('Statement is invalid at ' + result.line + ':' + result.column)
    } else {
      if (statWithSingleExp !== undefined ) {
        const singleExp = ctx.expression()
        if (singleExp === undefined) {
          result.error.push('Statement with single Exp has invalid Exp at ' + result.line + ':' + result.column)
        } else {
          this.visitExpression(singleExp)
        }
      }
      if (assignment !== undefined) {
        if (ctx.READ() !== undefined) {
          const lhs = ctx.assignLhs()
          if (lhs === undefined) {
            result.error.push('Invalid Lhs for READ statement at  ' + result.line + ':' + result.column)
          } else {
            this.visitAssignLhs(lhs)
          }
        }
        if (ctx.assignment() !== undefined) {
          const assignments = ctx.assignment()
          if (assignments === undefined) {
            result.error.push('Invalid Assignment in statement at  ' + result.line + ':' + result.column)
          } else {
            this.visitAssignment(assignments)
          }
        }
      }
      if (conditionals !== undefined) {
        const condExp = ctx.expression()
        const childStats = ctx.statement()
        if (condExp === undefined) {
          result.error.push('Statement with cond Exp has invalid Exp at ' + result.line + ':' + result.column)
        } else {
          this.visitExpression(condExp)
        }
        childStats.forEach((child, index) => {
          this.visitStatement(child)
        })
      }
      if (begin !== undefined) {
        // We check to make sure end is there
        if (ctx.END() === undefined) {
          result.error.push('Statement with begin has no end at ' + result.line + ':' + result.column)
        } else {
          const childStats = ctx.statement()
          childStats.forEach((child, index) => {
            this.visitStatement(child)
          })
        }
      }
      if (semicolon !== undefined) {
        const childStats = ctx.statement()
        childStats.forEach((child, index) => {
          this.visitStatement(child)
        })
      }
    }
    return result // result
  }

  public visitType = (ctx: TypeContext): WJSCAst => {
    const result = this.initWJSCAst(ctx)

    let visited
    const type = ctx.baseType() || ctx.arrayType() || ctx.pairType()
    if (type instanceof BaseTypeContext) {
      visited = this.visitBaseType(type)
    } else if (type instanceof ArrayTypeContext) {
      visited = this.visitArrayType(type)
    } else if (type instanceof PairTypeContext) {
      visited = this.visitPairType(type)
    }

    if (visited) {
      result.children.push(visited)
      result.type = visited.type
    } else {
      this.errorLog.log(result, 'undefined')
    }

    return result
  }

  protected defaultResult(): WJSCAst {
    return {
      children: [],
      column: -1,
      error: [],
      line: -1,
      startIndex: -1,
      token: '',
    }
  }

  private initWJSCAst = (ctx: ParserRuleContext): WJSCAst => {
    return {
      children: [],
      column: ctx.start.charPositionInLine,
      error: [],
      line: ctx.start.line,
      startIndex: ctx.start.startIndex,
      token: ctx.start.text || '',
    }
  }
}

export { WJSCSemanticChecker }
