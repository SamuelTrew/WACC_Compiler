// Generated from WJSCParser.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgramContext } from "./WJSCParser";
import { FuncContext } from "./WJSCParser";
import { ParamListContext } from "./WJSCParser";
import { ParamContext } from "./WJSCParser";
import { StatementContext } from "./WJSCParser";
import { ConditionalBlocksContext } from "./WJSCParser";
import { AssignmentContext } from "./WJSCParser";
import { AssignLhsContext } from "./WJSCParser";
import { AssignRhsContext } from "./WJSCParser";
import { ArgListContext } from "./WJSCParser";
import { PairElementContext } from "./WJSCParser";
import { TypeContext } from "./WJSCParser";
import { BaseTypeContext } from "./WJSCParser";
import { ArrayTypeContext } from "./WJSCParser";
import { PairTypeContext } from "./WJSCParser";
import { PairElementTypeContext } from "./WJSCParser";
import { ExpressionContext } from "./WJSCParser";
import { ArrayElementContext } from "./WJSCParser";
import { ArrayLiteralContext } from "./WJSCParser";
import { CommentContext } from "./WJSCParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `WJSCParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface WJSCParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `WJSCParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `WJSCParser.func`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc?: (ctx: FuncContext) => Result;

	/**
	 * Visit a parse tree produced by `WJSCParser.paramList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParamList?: (ctx: ParamListContext) => Result;

	/**
	 * Visit a parse tree produced by `WJSCParser.param`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParam?: (ctx: ParamContext) => Result;

	/**
	 * Visit a parse tree produced by `WJSCParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `WJSCParser.conditionalBlocks`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalBlocks?: (ctx: ConditionalBlocksContext) => Result;

	/**
	 * Visit a parse tree produced by `WJSCParser.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `WJSCParser.assignLhs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignLhs?: (ctx: AssignLhsContext) => Result;

	/**
	 * Visit a parse tree produced by `WJSCParser.assignRhs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignRhs?: (ctx: AssignRhsContext) => Result;

	/**
	 * Visit a parse tree produced by `WJSCParser.argList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgList?: (ctx: ArgListContext) => Result;

	/**
	 * Visit a parse tree produced by `WJSCParser.pairElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPairElement?: (ctx: PairElementContext) => Result;

	/**
	 * Visit a parse tree produced by `WJSCParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `WJSCParser.baseType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBaseType?: (ctx: BaseTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `WJSCParser.arrayType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayType?: (ctx: ArrayTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `WJSCParser.pairType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPairType?: (ctx: PairTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `WJSCParser.pairElementType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPairElementType?: (ctx: PairElementTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `WJSCParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `WJSCParser.arrayElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayElement?: (ctx: ArrayElementContext) => Result;

	/**
	 * Visit a parse tree produced by `WJSCParser.arrayLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayLiteral?: (ctx: ArrayLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `WJSCParser.comment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComment?: (ctx: CommentContext) => Result;
}
