// Generated from BasicParser.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { BinaryOperContext } from "./BasicParser";
import { ExprContext } from "./BasicParser";
import { ProgContext } from "./BasicParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `BasicParser`.
 */
export interface BasicParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `BasicParser.binaryOper`.
	 * @param ctx the parse tree
	 */
	enterBinaryOper?: (ctx: BinaryOperContext) => void;
	/**
	 * Exit a parse tree produced by `BasicParser.binaryOper`.
	 * @param ctx the parse tree
	 */
	exitBinaryOper?: (ctx: BinaryOperContext) => void;

	/**
	 * Enter a parse tree produced by `BasicParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `BasicParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `BasicParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `BasicParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;
}

