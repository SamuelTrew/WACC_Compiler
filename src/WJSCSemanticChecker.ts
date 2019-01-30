import { ParserRuleContext } from 'antlr4ts'
import { AbstractParseTreeVisitor } from 'antlr4ts/tree'
import {
  ArgListContext, ArrayElementContext,
  ArrayLiteralContext,
  ArrayTypeContext,
  AssignLhsContext, AssignmentContext,
  AssignRhsContext,
  BaseTypeContext,
  CommentContext,
  ConditionalBlocksContext, ExpressionContext,
  FuncContext, PairElementContext,
  PairElementTypeContext, PairTypeContext, ParamContext, ParamListContext,
  ProgramContext,
  StatementContext,
  TypeContext,
} from './grammar/WJSCParser'
import { WJSCParserVisitor } from './grammar/WJSCParserVisitor'
import { WJSCAst } from './WJSCAst'
import { WJSCSymbolTable } from './WJSCSymbolTable'
import {hasSameType, isBaseType} from './WJSCType'
import has = Reflect.has

class WJSCSemanticChecker extends AbstractParseTreeVisitor<WJSCAst> implements WJSCParserVisitor<WJSCAst> {

  private symbolTable = new WJSCSymbolTable(0, undefined)

  public visitArgList = (ctx: ArgListContext): WJSCAst => {
    const result = this.initWJSCAst(ctx)
    const expressions = ctx.expression()
    expressions.forEach(this.visitExpression)
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
    // not code: const result = this.initWJSCAst(ctx)
    return this.initWJSCAst(ctx) // result
  }

  public visitArrayType = (ctx: ArrayTypeContext): WJSCAst => {
    const result = this.initWJSCAst(ctx)
    const type = ctx.baseType()

    if (type === undefined) {
      result.error.push('Type is undefined at ' + result.line + ':' + result.column)
    } else {
      const typeNode = this.visitBaseType(type)

      if (hasSameType(result.type, typeNode.type)) {
        result.error.push('Not of correct type at ' + result.line + ':' + result.column)
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
    return this.initWJSCAst(ctx) // result
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
      result.error.push('Type is undefined at ' + result.line + ':' + result.column)
    } else if (!this.symbolTable.lookup(result.token, result.type)) {
      result.error.push('Different type from ST at ' + result.line + ':' + result.column)
    }

    return result
  }

  public visitComment = (ctx: CommentContext): WJSCAst => {
    // not code: const result = this.initWJSCAst(ctx)
    return this.initWJSCAst(ctx) // result
  }

  public visitConditionalBlocks = (ctx: ConditionalBlocksContext): WJSCAst => {
    // not code: const result = this.initWJSCAst(ctx)
    return this.initWJSCAst(ctx) // result
  }

  public visitExpression = (ctx: ExpressionContext): WJSCAst => {
    // not code: const result = this.initWJSCAst(ctx)
    return this.initWJSCAst(ctx) // result
  }

  public visitFunc = (ctx: FuncContext): WJSCAst => {
    // not code: const result = this.initWJSCAst(ctx)
    return this.initWJSCAst(ctx) // result
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
    return this.initWJSCAst(ctx) // result
  }

  public visitParam = (ctx: ParamContext): WJSCAst => {
    // not code: const result = this.initWJSCAst(ctx)
    return this.initWJSCAst(ctx) // result
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
    // not code: const result = this.initWJSCAst(ctx)
    return this.initWJSCAst(ctx) // result
  }

  public visitType = (ctx: TypeContext): WJSCAst => {
    // not code: const result = this.initWJSCAst(ctx)
    return this.initWJSCAst(ctx) // result
  }

  protected defaultResult(): WJSCAst {
    return {
      column: -1,
      error: [],
      line: -1,
      startIndex: -1,
      token: '',
    }
  }

  private initWJSCAst = (ctx: ParserRuleContext): WJSCAst => {
    return {
      column: ctx.start.charPositionInLine,
      error: [],
      line: ctx.start.line,
      startIndex: ctx.start.startIndex,
      token: ctx.start.text || '',
    }
  }
}

export { WJSCSemanticChecker }
