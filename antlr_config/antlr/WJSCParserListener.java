// Generated from WJSCParser.g4 by ANTLR 4.7.2
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link WJSCParser}.
 */
public interface WJSCParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link WJSCParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(WJSCParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link WJSCParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(WJSCParser.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link WJSCParser#func}.
	 * @param ctx the parse tree
	 */
	void enterFunc(WJSCParser.FuncContext ctx);
	/**
	 * Exit a parse tree produced by {@link WJSCParser#func}.
	 * @param ctx the parse tree
	 */
	void exitFunc(WJSCParser.FuncContext ctx);
	/**
	 * Enter a parse tree produced by {@link WJSCParser#paramList}.
	 * @param ctx the parse tree
	 */
	void enterParamList(WJSCParser.ParamListContext ctx);
	/**
	 * Exit a parse tree produced by {@link WJSCParser#paramList}.
	 * @param ctx the parse tree
	 */
	void exitParamList(WJSCParser.ParamListContext ctx);
	/**
	 * Enter a parse tree produced by {@link WJSCParser#param}.
	 * @param ctx the parse tree
	 */
	void enterParam(WJSCParser.ParamContext ctx);
	/**
	 * Exit a parse tree produced by {@link WJSCParser#param}.
	 * @param ctx the parse tree
	 */
	void exitParam(WJSCParser.ParamContext ctx);
	/**
	 * Enter a parse tree produced by {@link WJSCParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(WJSCParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link WJSCParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(WJSCParser.StatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link WJSCParser#conditionalBlocks}.
	 * @param ctx the parse tree
	 */
	void enterConditionalBlocks(WJSCParser.ConditionalBlocksContext ctx);
	/**
	 * Exit a parse tree produced by {@link WJSCParser#conditionalBlocks}.
	 * @param ctx the parse tree
	 */
	void exitConditionalBlocks(WJSCParser.ConditionalBlocksContext ctx);
	/**
	 * Enter a parse tree produced by {@link WJSCParser#assignment}.
	 * @param ctx the parse tree
	 */
	void enterAssignment(WJSCParser.AssignmentContext ctx);
	/**
	 * Exit a parse tree produced by {@link WJSCParser#assignment}.
	 * @param ctx the parse tree
	 */
	void exitAssignment(WJSCParser.AssignmentContext ctx);
	/**
	 * Enter a parse tree produced by {@link WJSCParser#assignLhs}.
	 * @param ctx the parse tree
	 */
	void enterAssignLhs(WJSCParser.AssignLhsContext ctx);
	/**
	 * Exit a parse tree produced by {@link WJSCParser#assignLhs}.
	 * @param ctx the parse tree
	 */
	void exitAssignLhs(WJSCParser.AssignLhsContext ctx);
	/**
	 * Enter a parse tree produced by {@link WJSCParser#assignRhs}.
	 * @param ctx the parse tree
	 */
	void enterAssignRhs(WJSCParser.AssignRhsContext ctx);
	/**
	 * Exit a parse tree produced by {@link WJSCParser#assignRhs}.
	 * @param ctx the parse tree
	 */
	void exitAssignRhs(WJSCParser.AssignRhsContext ctx);
	/**
	 * Enter a parse tree produced by {@link WJSCParser#argList}.
	 * @param ctx the parse tree
	 */
	void enterArgList(WJSCParser.ArgListContext ctx);
	/**
	 * Exit a parse tree produced by {@link WJSCParser#argList}.
	 * @param ctx the parse tree
	 */
	void exitArgList(WJSCParser.ArgListContext ctx);
	/**
	 * Enter a parse tree produced by {@link WJSCParser#pairElement}.
	 * @param ctx the parse tree
	 */
	void enterPairElement(WJSCParser.PairElementContext ctx);
	/**
	 * Exit a parse tree produced by {@link WJSCParser#pairElement}.
	 * @param ctx the parse tree
	 */
	void exitPairElement(WJSCParser.PairElementContext ctx);
	/**
	 * Enter a parse tree produced by {@link WJSCParser#type}.
	 * @param ctx the parse tree
	 */
	void enterType(WJSCParser.TypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link WJSCParser#type}.
	 * @param ctx the parse tree
	 */
	void exitType(WJSCParser.TypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link WJSCParser#baseType}.
	 * @param ctx the parse tree
	 */
	void enterBaseType(WJSCParser.BaseTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link WJSCParser#baseType}.
	 * @param ctx the parse tree
	 */
	void exitBaseType(WJSCParser.BaseTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link WJSCParser#arrayType}.
	 * @param ctx the parse tree
	 */
	void enterArrayType(WJSCParser.ArrayTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link WJSCParser#arrayType}.
	 * @param ctx the parse tree
	 */
	void exitArrayType(WJSCParser.ArrayTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link WJSCParser#pairType}.
	 * @param ctx the parse tree
	 */
	void enterPairType(WJSCParser.PairTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link WJSCParser#pairType}.
	 * @param ctx the parse tree
	 */
	void exitPairType(WJSCParser.PairTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link WJSCParser#pairElementType}.
	 * @param ctx the parse tree
	 */
	void enterPairElementType(WJSCParser.PairElementTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link WJSCParser#pairElementType}.
	 * @param ctx the parse tree
	 */
	void exitPairElementType(WJSCParser.PairElementTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link WJSCParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterExpression(WJSCParser.ExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link WJSCParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitExpression(WJSCParser.ExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link WJSCParser#arrayElement}.
	 * @param ctx the parse tree
	 */
	void enterArrayElement(WJSCParser.ArrayElementContext ctx);
	/**
	 * Exit a parse tree produced by {@link WJSCParser#arrayElement}.
	 * @param ctx the parse tree
	 */
	void exitArrayElement(WJSCParser.ArrayElementContext ctx);
	/**
	 * Enter a parse tree produced by {@link WJSCParser#arrayLiteral}.
	 * @param ctx the parse tree
	 */
	void enterArrayLiteral(WJSCParser.ArrayLiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link WJSCParser#arrayLiteral}.
	 * @param ctx the parse tree
	 */
	void exitArrayLiteral(WJSCParser.ArrayLiteralContext ctx);
}