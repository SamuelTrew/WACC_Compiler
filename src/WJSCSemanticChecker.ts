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

export class WJSCSemanticChecker extends AbstractParseTreeVisitor<WJSCAst> implements WJSCParserVisitor<WJSCAst> {

  public visitArgList = (ctx: ArgListContext): WJSCAst => {
    const result = this.initWJSCAst(ctx)
    const expressions = ctx.expression()
    expressions.forEach(this.visitExpression)
    return result
  }
  public visitArrayElement = (ctx: ArrayElementContext): WJSCAst => {
    const result = this.initWJSCAst(ctx)
    return result
  }
  public visitArrayLiteral = (ctx: ArrayLiteralContext): WJSCAst => {
    const result = this.initWJSCAst(ctx)
    return result
  }
  public visitArrayType = (ctx: ArrayTypeContext): WJSCAst => {
    const result = this.initWJSCAst(ctx)
    return result
  }
  public visitAssignLhs = (ctx: AssignLhsContext): WJSCAst => {
    const result = this.initWJSCAst(ctx)
    return result
  }
  public visitAssignRhs = (ctx: AssignRhsContext): WJSCAst => {
    const result = this.initWJSCAst(ctx)
    return result
  }
  public visitAssignment = (ctx: AssignmentContext): WJSCAst => {
    const result = this.initWJSCAst(ctx)
    return result
  }
  public visitBaseType = (ctx: BaseTypeContext): WJSCAst => {
    const result = this.initWJSCAst(ctx)
    return result
  }
  public visitComment = (ctx: CommentContext): WJSCAst => {
    const result = this.initWJSCAst(ctx)
    return result
  }
  public visitConditionalBlocks = (ctx: ConditionalBlocksContext): WJSCAst => {
    const result = this.initWJSCAst(ctx)
    return result
  }
  public visitExpression = (ctx: ExpressionContext): WJSCAst => {
    const result = this.initWJSCAst(ctx)
    return result
  }
  public visitFunc = (ctx: FuncContext): WJSCAst => {
    const result = this.initWJSCAst(ctx)
    return result
  }
  public visitPairElement = (ctx: PairElementContext): WJSCAst => {
    const result = this.initWJSCAst(ctx)
    return result
  }
  public visitPairElementType = (ctx: PairElementTypeContext): WJSCAst => {
    const result = this.initWJSCAst(ctx)
    return result
  }
  public visitPairType = (ctx: PairTypeContext): WJSCAst => {
    const result = this.initWJSCAst(ctx)
    return result
  }
  public visitParam = (ctx: ParamContext): WJSCAst => {
    const result = this.initWJSCAst(ctx)
    return result
  }
  public visitParamList = (ctx: ParamListContext): WJSCAst => {
    const result = this.initWJSCAst(ctx)
    return result
  }
  public visitProgram = (ctx: ProgramContext): WJSCAst => {
    const result = this.initWJSCAst(ctx)
    return result
  }
  public visitStatement = (ctx: StatementContext): WJSCAst => {
    const result = this.initWJSCAst(ctx)
    return result
  }
  public visitType = (ctx: TypeContext): WJSCAst => {
    const result = this.initWJSCAst(ctx)
    return result
  }

  protected defaultResult(): WJSCAst {
    return {}
  }

  private initWJSCAst = (ctx: ParserRuleContext): WJSCAst => {
    return {
      token: ctx.start.text,
      line: ctx.start.line,
      column: ctx.start.charPositionInLine,
      startIndex: ctx.start.startIndex,
    }
  }
}
