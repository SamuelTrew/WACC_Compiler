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
import { typename, WJSCAst } from './WJSCAst'

export class WJSCSemanticChecker extends AbstractParseTreeVisitor<WJSCAst> implements WJSCParserVisitor<WJSCAst> {

  private identifierMap: Array<{ key: string, type: typename }> = []

  public visitArgList = (ctx: ArgListContext): WJSCAst => {
    const result = this.initWJSCAst(ctx)
    const expressions = ctx.expression()
    expressions.forEach(this.visitExpression)
    return result
  }

  public visitArrayElement = (ctx: ArrayElementContext): WJSCAst => {
    const result = this.initWJSCAst(ctx)
    const identifier = ctx.IDENTIFIER()
    const expressions = ctx.expression()
    const typeEntry = this.identifierMap.find((entry) => entry.key === identifier.toString())
    const children = expressions.map(this.visitExpression)
    if (typeEntry === undefined) {
      result.error.push('no type found')
    } else {
      children.forEach((child) => {
        if (child.type !== typeEntry.type) {
          result.error.push('expression has type: ' + child.type + ', expected: ' + typeEntry.type)
        }
      })
    }
    return result
  }

  public visitArrayLiteral = (ctx: ArrayLiteralContext): WJSCAst => {
    // not code: const result = this.initWJSCAst(ctx)
    return this.initWJSCAst(ctx) // result
  }

  public visitArrayType = (ctx: ArrayTypeContext): WJSCAst => {
    // not code: const result = this.initWJSCAst(ctx)
    return this.initWJSCAst(ctx) // result
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
    // not code: const result = this.initWJSCAst(ctx)
    return this.initWJSCAst(ctx) // result
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
