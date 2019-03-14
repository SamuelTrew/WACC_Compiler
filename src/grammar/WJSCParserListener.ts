// Generated from WJSCParser.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./WJSCParser";
import { ImpContext } from "./WJSCParser";
import { FuncContext } from "./WJSCParser";
import { ParamListContext } from "./WJSCParser";
import { ParamContext } from "./WJSCParser";
import { StatementContext } from "./WJSCParser";
import { ConditionalBlocksContext } from "./WJSCParser";
import { AssignmentContext } from "./WJSCParser";
import { DeclareContext } from "./WJSCParser";
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
import { IntegerLiteralContext } from "./WJSCParser";
import { ArrayElementContext } from "./WJSCParser";
import { ArrayLiteralContext } from "./WJSCParser";
import { ArithmeticOperatorContext } from "./WJSCParser";
import { ArithmeticOperator2Context } from "./WJSCParser";
import { ComparisonOperatorContext } from "./WJSCParser";
import { EqualityOperatorContext } from "./WJSCParser";
import { BooleanAndOperatorContext } from "./WJSCParser";
import { BooleanOrOperatorContext } from "./WJSCParser";
import { UnaryOperatorContext } from "./WJSCParser";
import { StdlibContext } from "./WJSCParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `WJSCParser`.
 */
export interface WJSCParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `WJSCParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `WJSCParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `WJSCParser.imp`.
	 * @param ctx the parse tree
	 */
	enterImp?: (ctx: ImpContext) => void;
	/**
	 * Exit a parse tree produced by `WJSCParser.imp`.
	 * @param ctx the parse tree
	 */
	exitImp?: (ctx: ImpContext) => void;

	/**
	 * Enter a parse tree produced by `WJSCParser.func`.
	 * @param ctx the parse tree
	 */
	enterFunc?: (ctx: FuncContext) => void;
	/**
	 * Exit a parse tree produced by `WJSCParser.func`.
	 * @param ctx the parse tree
	 */
	exitFunc?: (ctx: FuncContext) => void;

	/**
	 * Enter a parse tree produced by `WJSCParser.paramList`.
	 * @param ctx the parse tree
	 */
	enterParamList?: (ctx: ParamListContext) => void;
	/**
	 * Exit a parse tree produced by `WJSCParser.paramList`.
	 * @param ctx the parse tree
	 */
	exitParamList?: (ctx: ParamListContext) => void;

	/**
	 * Enter a parse tree produced by `WJSCParser.param`.
	 * @param ctx the parse tree
	 */
	enterParam?: (ctx: ParamContext) => void;
	/**
	 * Exit a parse tree produced by `WJSCParser.param`.
	 * @param ctx the parse tree
	 */
	exitParam?: (ctx: ParamContext) => void;

	/**
	 * Enter a parse tree produced by `WJSCParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `WJSCParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `WJSCParser.conditionalBlocks`.
	 * @param ctx the parse tree
	 */
	enterConditionalBlocks?: (ctx: ConditionalBlocksContext) => void;
	/**
	 * Exit a parse tree produced by `WJSCParser.conditionalBlocks`.
	 * @param ctx the parse tree
	 */
	exitConditionalBlocks?: (ctx: ConditionalBlocksContext) => void;

	/**
	 * Enter a parse tree produced by `WJSCParser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `WJSCParser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `WJSCParser.declare`.
	 * @param ctx the parse tree
	 */
	enterDeclare?: (ctx: DeclareContext) => void;
	/**
	 * Exit a parse tree produced by `WJSCParser.declare`.
	 * @param ctx the parse tree
	 */
	exitDeclare?: (ctx: DeclareContext) => void;

	/**
	 * Enter a parse tree produced by `WJSCParser.assignLhs`.
	 * @param ctx the parse tree
	 */
	enterAssignLhs?: (ctx: AssignLhsContext) => void;
	/**
	 * Exit a parse tree produced by `WJSCParser.assignLhs`.
	 * @param ctx the parse tree
	 */
	exitAssignLhs?: (ctx: AssignLhsContext) => void;

	/**
	 * Enter a parse tree produced by `WJSCParser.assignRhs`.
	 * @param ctx the parse tree
	 */
	enterAssignRhs?: (ctx: AssignRhsContext) => void;
	/**
	 * Exit a parse tree produced by `WJSCParser.assignRhs`.
	 * @param ctx the parse tree
	 */
	exitAssignRhs?: (ctx: AssignRhsContext) => void;

	/**
	 * Enter a parse tree produced by `WJSCParser.argList`.
	 * @param ctx the parse tree
	 */
	enterArgList?: (ctx: ArgListContext) => void;
	/**
	 * Exit a parse tree produced by `WJSCParser.argList`.
	 * @param ctx the parse tree
	 */
	exitArgList?: (ctx: ArgListContext) => void;

	/**
	 * Enter a parse tree produced by `WJSCParser.pairElement`.
	 * @param ctx the parse tree
	 */
	enterPairElement?: (ctx: PairElementContext) => void;
	/**
	 * Exit a parse tree produced by `WJSCParser.pairElement`.
	 * @param ctx the parse tree
	 */
	exitPairElement?: (ctx: PairElementContext) => void;

	/**
	 * Enter a parse tree produced by `WJSCParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `WJSCParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `WJSCParser.baseType`.
	 * @param ctx the parse tree
	 */
	enterBaseType?: (ctx: BaseTypeContext) => void;
	/**
	 * Exit a parse tree produced by `WJSCParser.baseType`.
	 * @param ctx the parse tree
	 */
	exitBaseType?: (ctx: BaseTypeContext) => void;

	/**
	 * Enter a parse tree produced by `WJSCParser.arrayType`.
	 * @param ctx the parse tree
	 */
	enterArrayType?: (ctx: ArrayTypeContext) => void;
	/**
	 * Exit a parse tree produced by `WJSCParser.arrayType`.
	 * @param ctx the parse tree
	 */
	exitArrayType?: (ctx: ArrayTypeContext) => void;

	/**
	 * Enter a parse tree produced by `WJSCParser.pairType`.
	 * @param ctx the parse tree
	 */
	enterPairType?: (ctx: PairTypeContext) => void;
	/**
	 * Exit a parse tree produced by `WJSCParser.pairType`.
	 * @param ctx the parse tree
	 */
	exitPairType?: (ctx: PairTypeContext) => void;

	/**
	 * Enter a parse tree produced by `WJSCParser.pairElementType`.
	 * @param ctx the parse tree
	 */
	enterPairElementType?: (ctx: PairElementTypeContext) => void;
	/**
	 * Exit a parse tree produced by `WJSCParser.pairElementType`.
	 * @param ctx the parse tree
	 */
	exitPairElementType?: (ctx: PairElementTypeContext) => void;

	/**
	 * Enter a parse tree produced by `WJSCParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `WJSCParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `WJSCParser.integerLiteral`.
	 * @param ctx the parse tree
	 */
	enterIntegerLiteral?: (ctx: IntegerLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `WJSCParser.integerLiteral`.
	 * @param ctx the parse tree
	 */
	exitIntegerLiteral?: (ctx: IntegerLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `WJSCParser.arrayElement`.
	 * @param ctx the parse tree
	 */
	enterArrayElement?: (ctx: ArrayElementContext) => void;
	/**
	 * Exit a parse tree produced by `WJSCParser.arrayElement`.
	 * @param ctx the parse tree
	 */
	exitArrayElement?: (ctx: ArrayElementContext) => void;

	/**
	 * Enter a parse tree produced by `WJSCParser.arrayLiteral`.
	 * @param ctx the parse tree
	 */
	enterArrayLiteral?: (ctx: ArrayLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `WJSCParser.arrayLiteral`.
	 * @param ctx the parse tree
	 */
	exitArrayLiteral?: (ctx: ArrayLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `WJSCParser.arithmeticOperator`.
	 * @param ctx the parse tree
	 */
	enterArithmeticOperator?: (ctx: ArithmeticOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `WJSCParser.arithmeticOperator`.
	 * @param ctx the parse tree
	 */
	exitArithmeticOperator?: (ctx: ArithmeticOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `WJSCParser.arithmeticOperator2`.
	 * @param ctx the parse tree
	 */
	enterArithmeticOperator2?: (ctx: ArithmeticOperator2Context) => void;
	/**
	 * Exit a parse tree produced by `WJSCParser.arithmeticOperator2`.
	 * @param ctx the parse tree
	 */
	exitArithmeticOperator2?: (ctx: ArithmeticOperator2Context) => void;

	/**
	 * Enter a parse tree produced by `WJSCParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	enterComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `WJSCParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	exitComparisonOperator?: (ctx: ComparisonOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `WJSCParser.equalityOperator`.
	 * @param ctx the parse tree
	 */
	enterEqualityOperator?: (ctx: EqualityOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `WJSCParser.equalityOperator`.
	 * @param ctx the parse tree
	 */
	exitEqualityOperator?: (ctx: EqualityOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `WJSCParser.booleanAndOperator`.
	 * @param ctx the parse tree
	 */
	enterBooleanAndOperator?: (ctx: BooleanAndOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `WJSCParser.booleanAndOperator`.
	 * @param ctx the parse tree
	 */
	exitBooleanAndOperator?: (ctx: BooleanAndOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `WJSCParser.booleanOrOperator`.
	 * @param ctx the parse tree
	 */
	enterBooleanOrOperator?: (ctx: BooleanOrOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `WJSCParser.booleanOrOperator`.
	 * @param ctx the parse tree
	 */
	exitBooleanOrOperator?: (ctx: BooleanOrOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `WJSCParser.unaryOperator`.
	 * @param ctx the parse tree
	 */
	enterUnaryOperator?: (ctx: UnaryOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `WJSCParser.unaryOperator`.
	 * @param ctx the parse tree
	 */
	exitUnaryOperator?: (ctx: UnaryOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `WJSCParser.stdlib`.
	 * @param ctx the parse tree
	 */
	enterStdlib?: (ctx: StdlibContext) => void;
	/**
	 * Exit a parse tree produced by `WJSCParser.stdlib`.
	 * @param ctx the parse tree
	 */
	exitStdlib?: (ctx: StdlibContext) => void;
}

