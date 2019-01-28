// Generated from BasicParser.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { BinaryOperContext } from "./BasicParser";
import { ExprContext } from "./BasicParser";
import { ProgContext } from "./BasicParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `BasicParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface BasicParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `BasicParser.binaryOper`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryOper?: (ctx: BinaryOperContext) => Result;

	/**
	 * Visit a parse tree produced by `BasicParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `BasicParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;
}

