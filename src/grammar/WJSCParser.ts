// Generated from WJSCParser.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { WJSCParserListener } from "./WJSCParserListener";
import { WJSCParserVisitor } from "./WJSCParserVisitor";


export class WJSCParser extends Parser {
	public static readonly EOL = 1;
	public static readonly WHITESPACE = 2;
	public static readonly EXPORT = 3;
	public static readonly IMPORT = 4;
	public static readonly DEFINE = 5;
	public static readonly BEGIN = 6;
	public static readonly END = 7;
	public static readonly IS = 8;
	public static readonly WSKIP = 9;
	public static readonly READ = 10;
	public static readonly FREE = 11;
	public static readonly RETURN = 12;
	public static readonly EXIT = 13;
	public static readonly PRINT = 14;
	public static readonly PRINTLN = 15;
	public static readonly IF = 16;
	public static readonly THEN = 17;
	public static readonly ELSE = 18;
	public static readonly FI = 19;
	public static readonly WHILE = 20;
	public static readonly DO = 21;
	public static readonly DONE = 22;
	public static readonly CALL = 23;
	public static readonly FIRST = 24;
	public static readonly SECOND = 25;
	public static readonly MULTIPLY = 26;
	public static readonly DIVIDE = 27;
	public static readonly MODULO = 28;
	public static readonly PLUS = 29;
	public static readonly MINUS = 30;
	public static readonly GREATER_THAN = 31;
	public static readonly GREATER_EQUAL = 32;
	public static readonly LESS_THAN = 33;
	public static readonly LESS_EQUAL = 34;
	public static readonly EQUALS = 35;
	public static readonly STRICT_EQUALS = 36;
	public static readonly NEQUALS = 37;
	public static readonly NSTRICT_EQUALS = 38;
	public static readonly LOGICAL_AND = 39;
	public static readonly LOGICAL_OR = 40;
	public static readonly ASSIGNMENT = 41;
	public static readonly LOGICAL_NEGATION = 42;
	public static readonly NEW_PAIR = 43;
	public static readonly LENGTH = 44;
	public static readonly ORDER_OF = 45;
	public static readonly CHARACTER_OF = 46;
	public static readonly DIGIT = 47;
	public static readonly BOOLEAN_LITERAL = 48;
	public static readonly CHARACTER_LITERAL = 49;
	public static readonly PAIR_LITERAL = 50;
	public static readonly STRING_LITERAL = 51;
	public static readonly INTEGER = 52;
	public static readonly BOOLEAN = 53;
	public static readonly CHARACTER = 54;
	public static readonly STRING = 55;
	public static readonly PAIR = 56;
	public static readonly LPAREN = 57;
	public static readonly RPAREN = 58;
	public static readonly LBRACK = 59;
	public static readonly RBRACK = 60;
	public static readonly COMMA = 61;
	public static readonly SEMICOLON = 62;
	public static readonly APOS = 63;
	public static readonly DBLQ = 64;
	public static readonly COMMENT = 65;
	public static readonly IDENTIFIER = 66;
	public static readonly FILENAME = 67;
	public static readonly RULE_program = 0;
	public static readonly RULE_imp = 1;
	public static readonly RULE_func = 2;
	public static readonly RULE_paramList = 3;
	public static readonly RULE_param = 4;
	public static readonly RULE_statement = 5;
	public static readonly RULE_conditionalBlocks = 6;
	public static readonly RULE_assignment = 7;
	public static readonly RULE_declare = 8;
	public static readonly RULE_assignLhs = 9;
	public static readonly RULE_assignRhs = 10;
	public static readonly RULE_argList = 11;
	public static readonly RULE_pairElement = 12;
	public static readonly RULE_type = 13;
	public static readonly RULE_baseType = 14;
	public static readonly RULE_arrayType = 15;
	public static readonly RULE_pairType = 16;
	public static readonly RULE_pairElementType = 17;
	public static readonly RULE_expression = 18;
	public static readonly RULE_integerLiteral = 19;
	public static readonly RULE_arrayElement = 20;
	public static readonly RULE_arrayLiteral = 21;
	public static readonly RULE_arithmeticOperator = 22;
	public static readonly RULE_arithmeticOperator2 = 23;
	public static readonly RULE_comparisonOperator = 24;
	public static readonly RULE_equalityOperator = 25;
	public static readonly RULE_booleanAndOperator = 26;
	public static readonly RULE_booleanOrOperator = 27;
	public static readonly RULE_unaryOperator = 28;
	public static readonly RULE_stdlib = 29;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "imp", "func", "paramList", "param", "statement", "conditionalBlocks", 
		"assignment", "declare", "assignLhs", "assignRhs", "argList", "pairElement", 
		"type", "baseType", "arrayType", "pairType", "pairElementType", "expression", 
		"integerLiteral", "arrayElement", "arrayLiteral", "arithmeticOperator", 
		"arithmeticOperator2", "comparisonOperator", "equalityOperator", "booleanAndOperator", 
		"booleanOrOperator", "unaryOperator", "stdlib",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'export'", "'import'", "'define'", "'begin'", 
		"'end'", "'is'", "'skip'", "'read'", "'free'", "'return'", "'exit'", "'print'", 
		"'println'", "'if'", "'then'", "'else'", "'fi'", "'while'", "'do'", "'done'", 
		"'call'", "'fst'", "'snd'", "'*'", "'/'", "'%'", "'+'", "'-'", "'>'", 
		"'>='", "'<'", "'<='", "'=='", "'==='", "'!='", "'!=='", "'&&'", "'||'", 
		"'='", "'!'", "'newpair'", "'len'", "'ord'", "'chr'", undefined, undefined, 
		undefined, "'null'", undefined, "'int'", "'bool'", "'char'", "'string'", 
		"'pair'", "'('", "')'", "'['", "']'", "','", "';'", "'''", "'\"'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "EOL", "WHITESPACE", "EXPORT", "IMPORT", "DEFINE", "BEGIN", 
		"END", "IS", "WSKIP", "READ", "FREE", "RETURN", "EXIT", "PRINT", "PRINTLN", 
		"IF", "THEN", "ELSE", "FI", "WHILE", "DO", "DONE", "CALL", "FIRST", "SECOND", 
		"MULTIPLY", "DIVIDE", "MODULO", "PLUS", "MINUS", "GREATER_THAN", "GREATER_EQUAL", 
		"LESS_THAN", "LESS_EQUAL", "EQUALS", "STRICT_EQUALS", "NEQUALS", "NSTRICT_EQUALS", 
		"LOGICAL_AND", "LOGICAL_OR", "ASSIGNMENT", "LOGICAL_NEGATION", "NEW_PAIR", 
		"LENGTH", "ORDER_OF", "CHARACTER_OF", "DIGIT", "BOOLEAN_LITERAL", "CHARACTER_LITERAL", 
		"PAIR_LITERAL", "STRING_LITERAL", "INTEGER", "BOOLEAN", "CHARACTER", "STRING", 
		"PAIR", "LPAREN", "RPAREN", "LBRACK", "RBRACK", "COMMA", "SEMICOLON", 
		"APOS", "DBLQ", "COMMENT", "IDENTIFIER", "FILENAME",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(WJSCParser._LITERAL_NAMES, WJSCParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return WJSCParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "WJSCParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return WJSCParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return WJSCParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(WJSCParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, WJSCParser.RULE_program);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 60;
			this.match(WJSCParser.BEGIN);
			this.state = 64;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === WJSCParser.IMPORT) {
				{
				{
				this.state = 61;
				this.imp();
				}
				}
				this.state = 66;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 70;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 67;
					this.func();
					}
					}
				}
				this.state = 72;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
			this.state = 73;
			this.statement(0);
			this.state = 74;
			this.match(WJSCParser.END);
			this.state = 75;
			this.match(WJSCParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public imp(): ImpContext {
		let _localctx: ImpContext = new ImpContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, WJSCParser.RULE_imp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 77;
			this.match(WJSCParser.IMPORT);
			this.state = 78;
			this.match(WJSCParser.FILENAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public func(): FuncContext {
		let _localctx: FuncContext = new FuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, WJSCParser.RULE_func);
		let _la: number;
		try {
			this.state = 103;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WJSCParser.EXPORT:
			case WJSCParser.INTEGER:
			case WJSCParser.BOOLEAN:
			case WJSCParser.CHARACTER:
			case WJSCParser.STRING:
			case WJSCParser.PAIR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 81;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === WJSCParser.EXPORT) {
					{
					this.state = 80;
					this.match(WJSCParser.EXPORT);
					}
				}

				this.state = 83;
				this.type();
				this.state = 84;
				this.match(WJSCParser.IDENTIFIER);
				this.state = 85;
				this.match(WJSCParser.LPAREN);
				this.state = 87;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (WJSCParser.INTEGER - 52)) | (1 << (WJSCParser.BOOLEAN - 52)) | (1 << (WJSCParser.CHARACTER - 52)) | (1 << (WJSCParser.STRING - 52)) | (1 << (WJSCParser.PAIR - 52)))) !== 0)) {
					{
					this.state = 86;
					this.paramList();
					}
				}

				this.state = 89;
				this.match(WJSCParser.RPAREN);
				this.state = 90;
				this.match(WJSCParser.IS);
				this.state = 91;
				this.statement(0);
				this.state = 92;
				this.match(WJSCParser.END);
				}
				break;
			case WJSCParser.DEFINE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 94;
				this.match(WJSCParser.DEFINE);
				this.state = 95;
				this.type();
				this.state = 96;
				this.match(WJSCParser.IDENTIFIER);
				this.state = 97;
				this.match(WJSCParser.LPAREN);
				this.state = 99;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (WJSCParser.INTEGER - 52)) | (1 << (WJSCParser.BOOLEAN - 52)) | (1 << (WJSCParser.CHARACTER - 52)) | (1 << (WJSCParser.STRING - 52)) | (1 << (WJSCParser.PAIR - 52)))) !== 0)) {
					{
					this.state = 98;
					this.paramList();
					}
				}

				this.state = 101;
				this.match(WJSCParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public paramList(): ParamListContext {
		let _localctx: ParamListContext = new ParamListContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, WJSCParser.RULE_paramList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 105;
			this.param();
			this.state = 110;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === WJSCParser.COMMA) {
				{
				{
				this.state = 106;
				this.match(WJSCParser.COMMA);
				this.state = 107;
				this.param();
				}
				}
				this.state = 112;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public param(): ParamContext {
		let _localctx: ParamContext = new ParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, WJSCParser.RULE_param);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 113;
			this.type();
			this.state = 114;
			this.match(WJSCParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public statement(): StatementContext;
	public statement(_p: number): StatementContext;
	// @RuleVersion(0)
	public statement(_p?: number): StatementContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: StatementContext = new StatementContext(this._ctx, _parentState);
		let _prevctx: StatementContext = _localctx;
		let _startState: number = 10;
		this.enterRecursionRule(_localctx, 10, WJSCParser.RULE_statement, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 131;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 117;
				this.match(WJSCParser.WSKIP);
				}
				break;

			case 2:
				{
				this.state = 118;
				this.conditionalBlocks();
				}
				break;

			case 3:
				{
				this.state = 119;
				this.assignment();
				}
				break;

			case 4:
				{
				this.state = 120;
				this.declare();
				}
				break;

			case 5:
				{
				this.state = 121;
				this.match(WJSCParser.READ);
				this.state = 122;
				this.assignLhs();
				}
				break;

			case 6:
				{
				this.state = 123;
				this.stdlib();
				this.state = 124;
				this.expression(0);
				}
				break;

			case 7:
				{
				this.state = 126;
				this.conditionalBlocks();
				}
				break;

			case 8:
				{
				this.state = 127;
				this.match(WJSCParser.BEGIN);
				this.state = 128;
				this.statement(0);
				this.state = 129;
				this.match(WJSCParser.END);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 138;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new StatementContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, WJSCParser.RULE_statement);
					this.state = 133;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 134;
					this.match(WJSCParser.SEMICOLON);
					this.state = 135;
					this.statement(2);
					}
					}
				}
				this.state = 140;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionalBlocks(): ConditionalBlocksContext {
		let _localctx: ConditionalBlocksContext = new ConditionalBlocksContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, WJSCParser.RULE_conditionalBlocks);
		try {
			this.state = 155;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WJSCParser.IF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 141;
				this.match(WJSCParser.IF);
				this.state = 142;
				this.expression(0);
				this.state = 143;
				this.match(WJSCParser.THEN);
				this.state = 144;
				this.statement(0);
				this.state = 145;
				this.match(WJSCParser.ELSE);
				this.state = 146;
				this.statement(0);
				this.state = 147;
				this.match(WJSCParser.FI);
				}
				break;
			case WJSCParser.WHILE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 149;
				this.match(WJSCParser.WHILE);
				this.state = 150;
				this.expression(0);
				this.state = 151;
				this.match(WJSCParser.DO);
				this.state = 152;
				this.statement(0);
				this.state = 153;
				this.match(WJSCParser.DONE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, WJSCParser.RULE_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 157;
			this.assignLhs();
			this.state = 158;
			this.match(WJSCParser.ASSIGNMENT);
			this.state = 159;
			this.assignRhs();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declare(): DeclareContext {
		let _localctx: DeclareContext = new DeclareContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, WJSCParser.RULE_declare);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 161;
			this.type();
			this.state = 162;
			this.match(WJSCParser.IDENTIFIER);
			this.state = 163;
			this.match(WJSCParser.ASSIGNMENT);
			this.state = 164;
			this.assignRhs();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignLhs(): AssignLhsContext {
		let _localctx: AssignLhsContext = new AssignLhsContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, WJSCParser.RULE_assignLhs);
		try {
			this.state = 169;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 166;
				this.match(WJSCParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 167;
				this.arrayElement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 168;
				this.pairElement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignRhs(): AssignRhsContext {
		let _localctx: AssignRhsContext = new AssignRhsContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, WJSCParser.RULE_assignRhs);
		let _la: number;
		try {
			this.state = 188;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WJSCParser.PLUS:
			case WJSCParser.MINUS:
			case WJSCParser.LOGICAL_NEGATION:
			case WJSCParser.LENGTH:
			case WJSCParser.ORDER_OF:
			case WJSCParser.CHARACTER_OF:
			case WJSCParser.DIGIT:
			case WJSCParser.BOOLEAN_LITERAL:
			case WJSCParser.CHARACTER_LITERAL:
			case WJSCParser.PAIR_LITERAL:
			case WJSCParser.STRING_LITERAL:
			case WJSCParser.LPAREN:
			case WJSCParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 171;
				this.expression(0);
				}
				break;
			case WJSCParser.LBRACK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 172;
				this.arrayLiteral();
				}
				break;
			case WJSCParser.NEW_PAIR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 173;
				this.match(WJSCParser.NEW_PAIR);
				this.state = 174;
				this.match(WJSCParser.LPAREN);
				this.state = 175;
				this.expression(0);
				this.state = 176;
				this.match(WJSCParser.COMMA);
				this.state = 177;
				this.expression(0);
				this.state = 178;
				this.match(WJSCParser.RPAREN);
				}
				break;
			case WJSCParser.FIRST:
			case WJSCParser.SECOND:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 180;
				this.pairElement();
				}
				break;
			case WJSCParser.CALL:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 181;
				this.match(WJSCParser.CALL);
				this.state = 182;
				this.match(WJSCParser.IDENTIFIER);
				this.state = 183;
				this.match(WJSCParser.LPAREN);
				this.state = 185;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === WJSCParser.PLUS || _la === WJSCParser.MINUS || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (WJSCParser.LOGICAL_NEGATION - 42)) | (1 << (WJSCParser.LENGTH - 42)) | (1 << (WJSCParser.ORDER_OF - 42)) | (1 << (WJSCParser.CHARACTER_OF - 42)) | (1 << (WJSCParser.DIGIT - 42)) | (1 << (WJSCParser.BOOLEAN_LITERAL - 42)) | (1 << (WJSCParser.CHARACTER_LITERAL - 42)) | (1 << (WJSCParser.PAIR_LITERAL - 42)) | (1 << (WJSCParser.STRING_LITERAL - 42)) | (1 << (WJSCParser.LPAREN - 42)) | (1 << (WJSCParser.IDENTIFIER - 42)))) !== 0)) {
					{
					this.state = 184;
					this.argList();
					}
				}

				this.state = 187;
				this.match(WJSCParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argList(): ArgListContext {
		let _localctx: ArgListContext = new ArgListContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, WJSCParser.RULE_argList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 190;
			this.expression(0);
			this.state = 195;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === WJSCParser.COMMA) {
				{
				{
				this.state = 191;
				this.match(WJSCParser.COMMA);
				this.state = 192;
				this.expression(0);
				}
				}
				this.state = 197;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pairElement(): PairElementContext {
		let _localctx: PairElementContext = new PairElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, WJSCParser.RULE_pairElement);
		try {
			this.state = 202;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WJSCParser.FIRST:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 198;
				this.match(WJSCParser.FIRST);
				this.state = 199;
				this.expression(0);
				}
				break;
			case WJSCParser.SECOND:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 200;
				this.match(WJSCParser.SECOND);
				this.state = 201;
				this.expression(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, WJSCParser.RULE_type);
		try {
			this.state = 207;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 204;
				this.baseType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 205;
				this.arrayType(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 206;
				this.pairType();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public baseType(): BaseTypeContext {
		let _localctx: BaseTypeContext = new BaseTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, WJSCParser.RULE_baseType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 209;
			_la = this._input.LA(1);
			if (!(((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (WJSCParser.INTEGER - 52)) | (1 << (WJSCParser.BOOLEAN - 52)) | (1 << (WJSCParser.CHARACTER - 52)) | (1 << (WJSCParser.STRING - 52)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public arrayType(): ArrayTypeContext;
	public arrayType(_p: number): ArrayTypeContext;
	// @RuleVersion(0)
	public arrayType(_p?: number): ArrayTypeContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ArrayTypeContext = new ArrayTypeContext(this._ctx, _parentState);
		let _prevctx: ArrayTypeContext = _localctx;
		let _startState: number = 30;
		this.enterRecursionRule(_localctx, 30, WJSCParser.RULE_arrayType, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 220;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WJSCParser.INTEGER:
			case WJSCParser.BOOLEAN:
			case WJSCParser.CHARACTER:
			case WJSCParser.STRING:
				{
				this.state = 212;
				this.baseType();
				this.state = 213;
				this.match(WJSCParser.LBRACK);
				this.state = 214;
				this.match(WJSCParser.RBRACK);
				}
				break;
			case WJSCParser.PAIR:
				{
				this.state = 216;
				this.pairType();
				this.state = 217;
				this.match(WJSCParser.LBRACK);
				this.state = 218;
				this.match(WJSCParser.RBRACK);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 227;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ArrayTypeContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, WJSCParser.RULE_arrayType);
					this.state = 222;
					if (!(this.precpred(this._ctx, 2))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
					}
					this.state = 223;
					this.match(WJSCParser.LBRACK);
					this.state = 224;
					this.match(WJSCParser.RBRACK);
					}
					}
				}
				this.state = 229;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pairType(): PairTypeContext {
		let _localctx: PairTypeContext = new PairTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, WJSCParser.RULE_pairType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 230;
			this.match(WJSCParser.PAIR);
			this.state = 231;
			this.match(WJSCParser.LPAREN);
			this.state = 232;
			this.pairElementType();
			this.state = 233;
			this.match(WJSCParser.COMMA);
			this.state = 234;
			this.pairElementType();
			this.state = 235;
			this.match(WJSCParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pairElementType(): PairElementTypeContext {
		let _localctx: PairElementTypeContext = new PairElementTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, WJSCParser.RULE_pairElementType);
		try {
			this.state = 240;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 237;
				this.baseType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 238;
				this.arrayType(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 239;
				this.match(WJSCParser.PAIR);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 36;
		this.enterRecursionRule(_localctx, 36, WJSCParser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 257;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 243;
				this.integerLiteral();
				}
				break;

			case 2:
				{
				this.state = 244;
				this.arrayElement();
				}
				break;

			case 3:
				{
				this.state = 245;
				this.unaryOperator();
				this.state = 246;
				this.expression(7);
				}
				break;

			case 4:
				{
				this.state = 248;
				this.match(WJSCParser.LPAREN);
				this.state = 249;
				this.expression(0);
				this.state = 250;
				this.match(WJSCParser.RPAREN);
				}
				break;

			case 5:
				{
				this.state = 252;
				this.match(WJSCParser.IDENTIFIER);
				}
				break;

			case 6:
				{
				this.state = 253;
				this.match(WJSCParser.BOOLEAN_LITERAL);
				}
				break;

			case 7:
				{
				this.state = 254;
				this.match(WJSCParser.CHARACTER_LITERAL);
				}
				break;

			case 8:
				{
				this.state = 255;
				this.match(WJSCParser.STRING_LITERAL);
				}
				break;

			case 9:
				{
				this.state = 256;
				this.match(WJSCParser.PAIR_LITERAL);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 285;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 283;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, WJSCParser.RULE_expression);
						this.state = 259;
						if (!(this.precpred(this._ctx, 14))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
						}
						this.state = 260;
						this.arithmeticOperator();
						this.state = 261;
						this.expression(15);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, WJSCParser.RULE_expression);
						this.state = 263;
						if (!(this.precpred(this._ctx, 13))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						}
						this.state = 264;
						this.arithmeticOperator2();
						this.state = 265;
						this.expression(14);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, WJSCParser.RULE_expression);
						this.state = 267;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 268;
						this.comparisonOperator();
						this.state = 269;
						this.expression(13);
						}
						break;

					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, WJSCParser.RULE_expression);
						this.state = 271;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 272;
						this.equalityOperator();
						this.state = 273;
						this.expression(12);
						}
						break;

					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, WJSCParser.RULE_expression);
						this.state = 275;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 276;
						this.booleanAndOperator();
						this.state = 277;
						this.expression(11);
						}
						break;

					case 6:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, WJSCParser.RULE_expression);
						this.state = 279;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 280;
						this.booleanOrOperator();
						this.state = 281;
						this.expression(10);
						}
						break;
					}
					}
				}
				this.state = 287;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public integerLiteral(): IntegerLiteralContext {
		let _localctx: IntegerLiteralContext = new IntegerLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, WJSCParser.RULE_integerLiteral);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 289;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === WJSCParser.PLUS || _la === WJSCParser.MINUS) {
				{
				this.state = 288;
				_la = this._input.LA(1);
				if (!(_la === WJSCParser.PLUS || _la === WJSCParser.MINUS)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 292;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 291;
					this.match(WJSCParser.DIGIT);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 294;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayElement(): ArrayElementContext {
		let _localctx: ArrayElementContext = new ArrayElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, WJSCParser.RULE_arrayElement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 296;
			this.match(WJSCParser.IDENTIFIER);
			this.state = 301;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 297;
					this.match(WJSCParser.LBRACK);
					this.state = 298;
					this.expression(0);
					this.state = 299;
					this.match(WJSCParser.RBRACK);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 303;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayLiteral(): ArrayLiteralContext {
		let _localctx: ArrayLiteralContext = new ArrayLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, WJSCParser.RULE_arrayLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 305;
			this.match(WJSCParser.LBRACK);
			this.state = 314;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === WJSCParser.PLUS || _la === WJSCParser.MINUS || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (WJSCParser.LOGICAL_NEGATION - 42)) | (1 << (WJSCParser.LENGTH - 42)) | (1 << (WJSCParser.ORDER_OF - 42)) | (1 << (WJSCParser.CHARACTER_OF - 42)) | (1 << (WJSCParser.DIGIT - 42)) | (1 << (WJSCParser.BOOLEAN_LITERAL - 42)) | (1 << (WJSCParser.CHARACTER_LITERAL - 42)) | (1 << (WJSCParser.PAIR_LITERAL - 42)) | (1 << (WJSCParser.STRING_LITERAL - 42)) | (1 << (WJSCParser.LPAREN - 42)) | (1 << (WJSCParser.IDENTIFIER - 42)))) !== 0)) {
				{
				this.state = 306;
				this.expression(0);
				this.state = 311;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === WJSCParser.COMMA) {
					{
					{
					this.state = 307;
					this.match(WJSCParser.COMMA);
					this.state = 308;
					this.expression(0);
					}
					}
					this.state = 313;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 316;
			this.match(WJSCParser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arithmeticOperator(): ArithmeticOperatorContext {
		let _localctx: ArithmeticOperatorContext = new ArithmeticOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, WJSCParser.RULE_arithmeticOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 318;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << WJSCParser.MULTIPLY) | (1 << WJSCParser.DIVIDE) | (1 << WJSCParser.MODULO))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arithmeticOperator2(): ArithmeticOperator2Context {
		let _localctx: ArithmeticOperator2Context = new ArithmeticOperator2Context(this._ctx, this.state);
		this.enterRule(_localctx, 46, WJSCParser.RULE_arithmeticOperator2);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 320;
			_la = this._input.LA(1);
			if (!(_la === WJSCParser.PLUS || _la === WJSCParser.MINUS)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comparisonOperator(): ComparisonOperatorContext {
		let _localctx: ComparisonOperatorContext = new ComparisonOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, WJSCParser.RULE_comparisonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 322;
			_la = this._input.LA(1);
			if (!(((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & ((1 << (WJSCParser.GREATER_THAN - 31)) | (1 << (WJSCParser.GREATER_EQUAL - 31)) | (1 << (WJSCParser.LESS_THAN - 31)) | (1 << (WJSCParser.LESS_EQUAL - 31)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public equalityOperator(): EqualityOperatorContext {
		let _localctx: EqualityOperatorContext = new EqualityOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, WJSCParser.RULE_equalityOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 324;
			_la = this._input.LA(1);
			if (!(_la === WJSCParser.EQUALS || _la === WJSCParser.NEQUALS)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public booleanAndOperator(): BooleanAndOperatorContext {
		let _localctx: BooleanAndOperatorContext = new BooleanAndOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, WJSCParser.RULE_booleanAndOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 326;
			this.match(WJSCParser.LOGICAL_AND);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public booleanOrOperator(): BooleanOrOperatorContext {
		let _localctx: BooleanOrOperatorContext = new BooleanOrOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, WJSCParser.RULE_booleanOrOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 328;
			this.match(WJSCParser.LOGICAL_OR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryOperator(): UnaryOperatorContext {
		let _localctx: UnaryOperatorContext = new UnaryOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, WJSCParser.RULE_unaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 330;
			_la = this._input.LA(1);
			if (!(((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (WJSCParser.MINUS - 30)) | (1 << (WJSCParser.LOGICAL_NEGATION - 30)) | (1 << (WJSCParser.LENGTH - 30)) | (1 << (WJSCParser.ORDER_OF - 30)) | (1 << (WJSCParser.CHARACTER_OF - 30)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stdlib(): StdlibContext {
		let _localctx: StdlibContext = new StdlibContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, WJSCParser.RULE_stdlib);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 332;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << WJSCParser.FREE) | (1 << WJSCParser.RETURN) | (1 << WJSCParser.EXIT) | (1 << WJSCParser.PRINT) | (1 << WJSCParser.PRINTLN))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 5:
			return this.statement_sempred(_localctx as StatementContext, predIndex);

		case 15:
			return this.arrayType_sempred(_localctx as ArrayTypeContext, predIndex);

		case 18:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private statement_sempred(_localctx: StatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private arrayType_sempred(_localctx: ArrayTypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 14);

		case 3:
			return this.precpred(this._ctx, 13);

		case 4:
			return this.precpred(this._ctx, 12);

		case 5:
			return this.precpred(this._ctx, 11);

		case 6:
			return this.precpred(this._ctx, 10);

		case 7:
			return this.precpred(this._ctx, 9);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03E\u0151\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x03\x02\x03\x02\x07\x02A\n\x02" +
		"\f\x02\x0E\x02D\v\x02\x03\x02\x07\x02G\n\x02\f\x02\x0E\x02J\v\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x04\x05\x04T" +
		"\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04Z\n\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04" +
		"f\n\x04\x03\x04\x03\x04\x05\x04j\n\x04\x03\x05\x03\x05\x03\x05\x07\x05" +
		"o\n\x05\f\x05\x0E\x05r\v\x05\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x05\x07\x86\n\x07\x03\x07\x03\x07\x03\x07" +
		"\x07\x07\x8B\n\x07\f\x07\x0E\x07\x8E\v\x07\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\x9E\n\b" +
		"\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03" +
		"\v\x05\v\xAC\n\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f" +
		"\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\xBC\n\f\x03\f\x05\f\xBF\n\f\x03\r" +
		"\x03\r\x03\r\x07\r\xC4\n\r\f\r\x0E\r\xC7\v\r\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x05\x0E\xCD\n\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xD2\n\x0F\x03\x10" +
		"\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x05\x11\xDF\n\x11\x03\x11\x03\x11\x03\x11\x07\x11\xE4\n\x11\f" +
		"\x11\x0E\x11\xE7\v\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x13\x03\x13\x03\x13\x05\x13\xF3\n\x13\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x05\x14\u0104\n\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x07\x14\u011E\n\x14\f\x14\x0E\x14\u0121\v\x14" +
		"\x03\x15\x05\x15\u0124\n\x15\x03\x15\x06\x15\u0127\n\x15\r\x15\x0E\x15" +
		"\u0128\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x06\x16\u0130\n\x16\r\x16" +
		"\x0E\x16\u0131\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\u0138\n\x17\f\x17" +
		"\x0E\x17\u013B\v\x17\x05\x17\u013D\n\x17\x03\x17\x03\x17\x03\x18\x03\x18" +
		"\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D" +
		"\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x02\x02\x05\f & \x02" +
		"\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
		"\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02" +
		",\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02\x02\t\x03\x0269\x03\x02" +
		"\x1F \x03\x02\x1C\x1E\x03\x02!$\x04\x02%%\'\'\x05\x02  ,,.0\x03\x02\r" +
		"\x11\u0164\x02>\x03\x02\x02\x02\x04O\x03\x02\x02\x02\x06i\x03\x02\x02" +
		"\x02\bk\x03\x02\x02\x02\ns\x03\x02\x02\x02\f\x85\x03\x02\x02\x02\x0E\x9D" +
		"\x03\x02\x02\x02\x10\x9F\x03\x02\x02\x02\x12\xA3\x03\x02\x02\x02\x14\xAB" +
		"\x03\x02\x02\x02\x16\xBE\x03\x02\x02\x02\x18\xC0\x03\x02\x02\x02\x1A\xCC" +
		"\x03\x02\x02\x02\x1C\xD1\x03\x02\x02\x02\x1E\xD3\x03\x02\x02\x02 \xDE" +
		"\x03\x02\x02\x02\"\xE8\x03\x02\x02\x02$\xF2\x03\x02\x02\x02&\u0103\x03" +
		"\x02\x02\x02(\u0123\x03\x02\x02\x02*\u012A\x03\x02\x02\x02,\u0133\x03" +
		"\x02\x02\x02.\u0140\x03\x02\x02\x020\u0142\x03\x02\x02\x022\u0144\x03" +
		"\x02\x02\x024\u0146\x03\x02\x02\x026\u0148\x03\x02\x02\x028\u014A\x03" +
		"\x02\x02\x02:\u014C\x03\x02\x02\x02<\u014E\x03\x02\x02\x02>B\x07\b\x02" +
		"\x02?A\x05\x04\x03\x02@?\x03\x02\x02\x02AD\x03\x02\x02\x02B@\x03\x02\x02" +
		"\x02BC\x03\x02\x02\x02CH\x03\x02\x02\x02DB\x03\x02\x02\x02EG\x05\x06\x04" +
		"\x02FE\x03\x02\x02\x02GJ\x03\x02\x02\x02HF\x03\x02\x02\x02HI\x03\x02\x02" +
		"\x02IK\x03\x02\x02\x02JH\x03\x02\x02\x02KL\x05\f\x07\x02LM\x07\t\x02\x02" +
		"MN\x07\x02\x02\x03N\x03\x03\x02\x02\x02OP\x07\x06\x02\x02PQ\x07E\x02\x02" +
		"Q\x05\x03\x02\x02\x02RT\x07\x05\x02\x02SR\x03\x02\x02\x02ST\x03\x02\x02" +
		"\x02TU\x03\x02\x02\x02UV\x05\x1C\x0F\x02VW\x07D\x02\x02WY\x07;\x02\x02" +
		"XZ\x05\b\x05\x02YX\x03\x02\x02\x02YZ\x03\x02\x02\x02Z[\x03\x02\x02\x02" +
		"[\\\x07<\x02\x02\\]\x07\n\x02\x02]^\x05\f\x07\x02^_\x07\t\x02\x02_j\x03" +
		"\x02\x02\x02`a\x07\x07\x02\x02ab\x05\x1C\x0F\x02bc\x07D\x02\x02ce\x07" +
		";\x02\x02df\x05\b\x05\x02ed\x03\x02\x02\x02ef\x03\x02\x02\x02fg\x03\x02" +
		"\x02\x02gh\x07<\x02\x02hj\x03\x02\x02\x02iS\x03\x02\x02\x02i`\x03\x02" +
		"\x02\x02j\x07\x03\x02\x02\x02kp\x05\n\x06\x02lm\x07?\x02\x02mo\x05\n\x06" +
		"\x02nl\x03\x02\x02\x02or\x03\x02\x02\x02pn\x03\x02\x02\x02pq\x03\x02\x02" +
		"\x02q\t\x03\x02\x02\x02rp\x03\x02\x02\x02st\x05\x1C\x0F\x02tu\x07D\x02" +
		"\x02u\v\x03\x02\x02\x02vw\b\x07\x01\x02w\x86\x07\v\x02\x02x\x86\x05\x0E" +
		"\b\x02y\x86\x05\x10\t\x02z\x86\x05\x12\n\x02{|\x07\f\x02\x02|\x86\x05" +
		"\x14\v\x02}~\x05<\x1F\x02~\x7F\x05&\x14\x02\x7F\x86\x03\x02\x02\x02\x80" +
		"\x86\x05\x0E\b\x02\x81\x82\x07\b\x02\x02\x82\x83\x05\f\x07\x02\x83\x84" +
		"\x07\t\x02\x02\x84\x86\x03\x02\x02\x02\x85v\x03\x02\x02\x02\x85x\x03\x02" +
		"\x02\x02\x85y\x03\x02\x02\x02\x85z\x03\x02\x02\x02\x85{\x03\x02\x02\x02" +
		"\x85}\x03\x02\x02\x02\x85\x80\x03\x02\x02\x02\x85\x81\x03\x02\x02\x02" +
		"\x86\x8C\x03\x02\x02\x02\x87\x88\f\x03\x02\x02\x88\x89\x07@\x02\x02\x89" +
		"\x8B\x05\f\x07\x04\x8A\x87\x03\x02\x02\x02\x8B\x8E\x03\x02\x02\x02\x8C" +
		"\x8A\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\r\x03\x02\x02\x02\x8E" +
		"\x8C\x03\x02\x02\x02\x8F\x90\x07\x12\x02\x02\x90\x91\x05&\x14\x02\x91" +
		"\x92\x07\x13\x02\x02\x92\x93\x05\f\x07\x02\x93\x94\x07\x14\x02\x02\x94" +
		"\x95\x05\f\x07\x02\x95\x96\x07\x15\x02\x02\x96\x9E\x03\x02\x02\x02\x97" +
		"\x98\x07\x16\x02\x02\x98\x99\x05&\x14\x02\x99\x9A\x07\x17\x02\x02\x9A" +
		"\x9B\x05\f\x07\x02\x9B\x9C\x07\x18\x02\x02\x9C\x9E\x03\x02\x02\x02\x9D" +
		"\x8F\x03\x02\x02\x02\x9D\x97\x03\x02\x02\x02\x9E\x0F\x03\x02\x02\x02\x9F" +
		"\xA0\x05\x14\v\x02\xA0\xA1\x07+\x02\x02\xA1\xA2\x05\x16\f\x02\xA2\x11" +
		"\x03\x02\x02\x02\xA3\xA4\x05\x1C\x0F\x02\xA4\xA5\x07D\x02\x02\xA5\xA6" +
		"\x07+\x02\x02\xA6\xA7\x05\x16\f\x02\xA7\x13\x03\x02\x02\x02\xA8\xAC\x07" +
		"D\x02\x02\xA9\xAC\x05*\x16\x02\xAA\xAC\x05\x1A\x0E\x02\xAB\xA8\x03\x02" +
		"\x02\x02\xAB\xA9\x03\x02\x02\x02\xAB\xAA\x03\x02\x02\x02\xAC\x15\x03\x02" +
		"\x02\x02\xAD\xBF\x05&\x14\x02\xAE\xBF\x05,\x17\x02\xAF\xB0\x07-\x02\x02" +
		"\xB0\xB1\x07;\x02\x02\xB1\xB2\x05&\x14\x02\xB2\xB3\x07?\x02\x02\xB3\xB4" +
		"\x05&\x14\x02\xB4\xB5\x07<\x02\x02\xB5\xBF\x03\x02\x02\x02\xB6\xBF\x05" +
		"\x1A\x0E\x02\xB7\xB8\x07\x19\x02\x02\xB8\xB9\x07D\x02\x02\xB9\xBB\x07" +
		";\x02\x02\xBA\xBC\x05\x18\r\x02\xBB\xBA\x03\x02\x02\x02\xBB\xBC\x03\x02" +
		"\x02\x02\xBC\xBD\x03\x02\x02\x02\xBD\xBF\x07<\x02\x02\xBE\xAD\x03\x02" +
		"\x02\x02\xBE\xAE\x03\x02\x02\x02\xBE\xAF\x03\x02\x02\x02\xBE\xB6\x03\x02" +
		"\x02\x02\xBE\xB7\x03\x02\x02\x02\xBF\x17\x03\x02\x02\x02\xC0\xC5\x05&" +
		"\x14\x02\xC1\xC2\x07?\x02\x02\xC2\xC4\x05&\x14\x02\xC3\xC1\x03\x02\x02" +
		"\x02\xC4\xC7\x03\x02\x02\x02\xC5\xC3\x03\x02\x02\x02\xC5\xC6\x03\x02\x02" +
		"\x02\xC6\x19\x03\x02\x02\x02\xC7\xC5\x03\x02\x02\x02\xC8\xC9\x07\x1A\x02" +
		"\x02\xC9\xCD\x05&\x14\x02\xCA\xCB\x07\x1B\x02\x02\xCB\xCD\x05&\x14\x02" +
		"\xCC\xC8\x03\x02\x02\x02\xCC\xCA\x03\x02\x02\x02\xCD\x1B\x03\x02\x02\x02" +
		"\xCE\xD2\x05\x1E\x10\x02\xCF\xD2\x05 \x11\x02\xD0\xD2\x05\"\x12\x02\xD1" +
		"\xCE\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD1\xD0\x03\x02\x02\x02\xD2" +
		"\x1D\x03\x02\x02\x02\xD3\xD4\t\x02\x02\x02\xD4\x1F\x03\x02\x02\x02\xD5" +
		"\xD6\b\x11\x01\x02\xD6\xD7\x05\x1E\x10\x02\xD7\xD8\x07=\x02\x02\xD8\xD9" +
		"\x07>\x02\x02\xD9\xDF\x03\x02\x02\x02\xDA\xDB\x05\"\x12\x02\xDB\xDC\x07" +
		"=\x02\x02\xDC\xDD\x07>\x02\x02\xDD\xDF\x03\x02\x02\x02\xDE\xD5\x03\x02" +
		"\x02\x02\xDE\xDA\x03\x02\x02\x02\xDF\xE5\x03\x02\x02\x02\xE0\xE1\f\x04" +
		"\x02\x02\xE1\xE2\x07=\x02\x02\xE2\xE4\x07>\x02\x02\xE3\xE0\x03\x02\x02" +
		"\x02\xE4\xE7\x03\x02\x02\x02\xE5\xE3\x03\x02\x02\x02\xE5\xE6\x03\x02\x02" +
		"\x02\xE6!\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02\xE8\xE9\x07:\x02\x02" +
		"\xE9\xEA\x07;\x02\x02\xEA\xEB\x05$\x13\x02\xEB\xEC\x07?\x02\x02\xEC\xED" +
		"\x05$\x13\x02\xED\xEE\x07<\x02\x02\xEE#\x03\x02\x02\x02\xEF\xF3\x05\x1E" +
		"\x10\x02\xF0\xF3\x05 \x11\x02\xF1\xF3\x07:\x02\x02\xF2\xEF\x03\x02\x02" +
		"\x02\xF2\xF0\x03\x02\x02\x02\xF2\xF1\x03\x02\x02\x02\xF3%\x03\x02\x02" +
		"\x02\xF4\xF5\b\x14\x01\x02\xF5\u0104\x05(\x15\x02\xF6\u0104\x05*\x16\x02" +
		"\xF7\xF8\x05:\x1E\x02\xF8\xF9\x05&\x14\t\xF9\u0104\x03\x02\x02\x02\xFA" +
		"\xFB\x07;\x02\x02\xFB\xFC\x05&\x14\x02\xFC\xFD\x07<\x02\x02\xFD\u0104" +
		"\x03\x02\x02\x02\xFE\u0104\x07D\x02\x02\xFF\u0104\x072\x02\x02\u0100\u0104" +
		"\x073\x02\x02\u0101\u0104\x075\x02\x02\u0102\u0104\x074\x02\x02\u0103" +
		"\xF4\x03\x02\x02\x02\u0103\xF6\x03\x02\x02\x02\u0103\xF7\x03\x02\x02\x02" +
		"\u0103\xFA\x03\x02\x02\x02\u0103\xFE\x03\x02\x02\x02\u0103\xFF\x03\x02" +
		"\x02\x02\u0103\u0100\x03\x02\x02\x02\u0103\u0101\x03\x02\x02\x02\u0103" +
		"\u0102\x03\x02\x02\x02\u0104\u011F\x03\x02\x02\x02\u0105\u0106\f\x10\x02" +
		"\x02\u0106\u0107\x05.\x18\x02\u0107\u0108\x05&\x14\x11\u0108\u011E\x03" +
		"\x02\x02\x02\u0109\u010A\f\x0F\x02\x02\u010A\u010B\x050\x19\x02\u010B" +
		"\u010C\x05&\x14\x10\u010C\u011E\x03\x02\x02\x02\u010D\u010E\f\x0E\x02" +
		"\x02\u010E\u010F\x052\x1A\x02\u010F\u0110\x05&\x14\x0F\u0110\u011E\x03" +
		"\x02\x02\x02\u0111\u0112\f\r\x02\x02\u0112\u0113\x054\x1B\x02\u0113\u0114" +
		"\x05&\x14\x0E\u0114\u011E\x03\x02\x02\x02\u0115\u0116\f\f\x02\x02\u0116" +
		"\u0117\x056\x1C\x02\u0117\u0118\x05&\x14\r\u0118\u011E\x03\x02\x02\x02" +
		"\u0119\u011A\f\v\x02\x02\u011A\u011B\x058\x1D\x02\u011B\u011C\x05&\x14" +
		"\f\u011C\u011E\x03\x02\x02\x02\u011D\u0105\x03\x02\x02\x02\u011D\u0109" +
		"\x03\x02\x02\x02\u011D\u010D\x03\x02\x02\x02\u011D\u0111\x03\x02\x02\x02" +
		"\u011D\u0115\x03\x02\x02\x02\u011D\u0119\x03\x02\x02\x02\u011E\u0121\x03" +
		"\x02\x02\x02\u011F\u011D\x03\x02\x02\x02\u011F\u0120\x03\x02\x02\x02\u0120" +
		"\'\x03\x02\x02\x02\u0121\u011F\x03\x02\x02\x02\u0122\u0124\t\x03\x02\x02" +
		"\u0123\u0122\x03\x02\x02\x02\u0123\u0124\x03\x02\x02\x02\u0124\u0126\x03" +
		"\x02\x02\x02\u0125\u0127\x071\x02\x02\u0126\u0125\x03\x02\x02\x02\u0127" +
		"\u0128\x03\x02\x02\x02\u0128\u0126\x03\x02\x02\x02\u0128\u0129\x03\x02" +
		"\x02\x02\u0129)\x03\x02\x02\x02\u012A\u012F\x07D\x02\x02\u012B\u012C\x07" +
		"=\x02\x02\u012C\u012D\x05&\x14\x02\u012D\u012E\x07>\x02\x02\u012E\u0130" +
		"\x03\x02\x02\x02\u012F\u012B\x03\x02\x02\x02\u0130\u0131\x03\x02\x02\x02" +
		"\u0131\u012F\x03\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132+\x03\x02" +
		"\x02\x02\u0133\u013C\x07=\x02\x02\u0134\u0139\x05&\x14\x02\u0135\u0136" +
		"\x07?\x02\x02\u0136\u0138\x05&\x14\x02\u0137\u0135\x03\x02\x02\x02\u0138" +
		"\u013B\x03\x02\x02\x02\u0139\u0137\x03\x02\x02\x02\u0139\u013A\x03\x02" +
		"\x02\x02\u013A\u013D\x03\x02\x02\x02\u013B\u0139\x03\x02\x02\x02\u013C" +
		"\u0134\x03\x02\x02\x02\u013C\u013D\x03\x02\x02\x02\u013D\u013E\x03\x02" +
		"\x02\x02\u013E\u013F\x07>\x02\x02\u013F-\x03\x02\x02\x02\u0140\u0141\t" +
		"\x04\x02\x02\u0141/\x03\x02\x02\x02\u0142\u0143\t\x03\x02\x02\u01431\x03" +
		"\x02\x02\x02\u0144\u0145\t\x05\x02\x02\u01453\x03\x02\x02\x02\u0146\u0147" +
		"\t\x06\x02\x02\u01475\x03\x02\x02\x02\u0148\u0149\x07)\x02\x02\u01497" +
		"\x03\x02\x02\x02\u014A\u014B\x07*\x02\x02\u014B9\x03\x02\x02\x02\u014C" +
		"\u014D\t\x07\x02\x02\u014D;\x03\x02\x02\x02\u014E\u014F\t\b\x02\x02\u014F" +
		"=\x03\x02\x02\x02\x1DBHSYeip\x85\x8C\x9D\xAB\xBB\xBE\xC5\xCC\xD1\xDE\xE5" +
		"\xF2\u0103\u011D\u011F\u0123\u0128\u0131\u0139\u013C";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!WJSCParser.__ATN) {
			WJSCParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(WJSCParser._serializedATN));
		}

		return WJSCParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public BEGIN(): TerminalNode { return this.getToken(WJSCParser.BEGIN, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public END(): TerminalNode { return this.getToken(WJSCParser.END, 0); }
	public EOF(): TerminalNode { return this.getToken(WJSCParser.EOF, 0); }
	public imp(): ImpContext[];
	public imp(i: number): ImpContext;
	public imp(i?: number): ImpContext | ImpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImpContext);
		} else {
			return this.getRuleContext(i, ImpContext);
		}
	}
	public func(): FuncContext[];
	public func(i: number): FuncContext;
	public func(i?: number): FuncContext | FuncContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FuncContext);
		} else {
			return this.getRuleContext(i, FuncContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WJSCParser.RULE_program; }
	// @Override
	public enterRule(listener: WJSCParserListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: WJSCParserListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WJSCParserVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImpContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(WJSCParser.IMPORT, 0); }
	public FILENAME(): TerminalNode { return this.getToken(WJSCParser.FILENAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WJSCParser.RULE_imp; }
	// @Override
	public enterRule(listener: WJSCParserListener): void {
		if (listener.enterImp) {
			listener.enterImp(this);
		}
	}
	// @Override
	public exitRule(listener: WJSCParserListener): void {
		if (listener.exitImp) {
			listener.exitImp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WJSCParserVisitor<Result>): Result {
		if (visitor.visitImp) {
			return visitor.visitImp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(WJSCParser.IDENTIFIER, 0); }
	public LPAREN(): TerminalNode { return this.getToken(WJSCParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(WJSCParser.RPAREN, 0); }
	public IS(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.IS, 0); }
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	public END(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.END, 0); }
	public EXPORT(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.EXPORT, 0); }
	public paramList(): ParamListContext | undefined {
		return this.tryGetRuleContext(0, ParamListContext);
	}
	public DEFINE(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.DEFINE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WJSCParser.RULE_func; }
	// @Override
	public enterRule(listener: WJSCParserListener): void {
		if (listener.enterFunc) {
			listener.enterFunc(this);
		}
	}
	// @Override
	public exitRule(listener: WJSCParserListener): void {
		if (listener.exitFunc) {
			listener.exitFunc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WJSCParserVisitor<Result>): Result {
		if (visitor.visitFunc) {
			return visitor.visitFunc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamListContext extends ParserRuleContext {
	public param(): ParamContext[];
	public param(i: number): ParamContext;
	public param(i?: number): ParamContext | ParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParamContext);
		} else {
			return this.getRuleContext(i, ParamContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WJSCParser.COMMA);
		} else {
			return this.getToken(WJSCParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WJSCParser.RULE_paramList; }
	// @Override
	public enterRule(listener: WJSCParserListener): void {
		if (listener.enterParamList) {
			listener.enterParamList(this);
		}
	}
	// @Override
	public exitRule(listener: WJSCParserListener): void {
		if (listener.exitParamList) {
			listener.exitParamList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WJSCParserVisitor<Result>): Result {
		if (visitor.visitParamList) {
			return visitor.visitParamList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(WJSCParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WJSCParser.RULE_param; }
	// @Override
	public enterRule(listener: WJSCParserListener): void {
		if (listener.enterParam) {
			listener.enterParam(this);
		}
	}
	// @Override
	public exitRule(listener: WJSCParserListener): void {
		if (listener.exitParam) {
			listener.exitParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WJSCParserVisitor<Result>): Result {
		if (visitor.visitParam) {
			return visitor.visitParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public WSKIP(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.WSKIP, 0); }
	public conditionalBlocks(): ConditionalBlocksContext | undefined {
		return this.tryGetRuleContext(0, ConditionalBlocksContext);
	}
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	public declare(): DeclareContext | undefined {
		return this.tryGetRuleContext(0, DeclareContext);
	}
	public READ(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.READ, 0); }
	public assignLhs(): AssignLhsContext | undefined {
		return this.tryGetRuleContext(0, AssignLhsContext);
	}
	public stdlib(): StdlibContext | undefined {
		return this.tryGetRuleContext(0, StdlibContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public BEGIN(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.BEGIN, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public END(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.END, 0); }
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WJSCParser.RULE_statement; }
	// @Override
	public enterRule(listener: WJSCParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: WJSCParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WJSCParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalBlocksContext extends ParserRuleContext {
	public IF(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.IF, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public THEN(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.THEN, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.ELSE, 0); }
	public FI(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.FI, 0); }
	public WHILE(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.WHILE, 0); }
	public DO(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.DO, 0); }
	public DONE(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.DONE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WJSCParser.RULE_conditionalBlocks; }
	// @Override
	public enterRule(listener: WJSCParserListener): void {
		if (listener.enterConditionalBlocks) {
			listener.enterConditionalBlocks(this);
		}
	}
	// @Override
	public exitRule(listener: WJSCParserListener): void {
		if (listener.exitConditionalBlocks) {
			listener.exitConditionalBlocks(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WJSCParserVisitor<Result>): Result {
		if (visitor.visitConditionalBlocks) {
			return visitor.visitConditionalBlocks(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public assignLhs(): AssignLhsContext {
		return this.getRuleContext(0, AssignLhsContext);
	}
	public ASSIGNMENT(): TerminalNode { return this.getToken(WJSCParser.ASSIGNMENT, 0); }
	public assignRhs(): AssignRhsContext {
		return this.getRuleContext(0, AssignRhsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WJSCParser.RULE_assignment; }
	// @Override
	public enterRule(listener: WJSCParserListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: WJSCParserListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WJSCParserVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclareContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(WJSCParser.IDENTIFIER, 0); }
	public ASSIGNMENT(): TerminalNode { return this.getToken(WJSCParser.ASSIGNMENT, 0); }
	public assignRhs(): AssignRhsContext {
		return this.getRuleContext(0, AssignRhsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WJSCParser.RULE_declare; }
	// @Override
	public enterRule(listener: WJSCParserListener): void {
		if (listener.enterDeclare) {
			listener.enterDeclare(this);
		}
	}
	// @Override
	public exitRule(listener: WJSCParserListener): void {
		if (listener.exitDeclare) {
			listener.exitDeclare(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WJSCParserVisitor<Result>): Result {
		if (visitor.visitDeclare) {
			return visitor.visitDeclare(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignLhsContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.IDENTIFIER, 0); }
	public arrayElement(): ArrayElementContext | undefined {
		return this.tryGetRuleContext(0, ArrayElementContext);
	}
	public pairElement(): PairElementContext | undefined {
		return this.tryGetRuleContext(0, PairElementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WJSCParser.RULE_assignLhs; }
	// @Override
	public enterRule(listener: WJSCParserListener): void {
		if (listener.enterAssignLhs) {
			listener.enterAssignLhs(this);
		}
	}
	// @Override
	public exitRule(listener: WJSCParserListener): void {
		if (listener.exitAssignLhs) {
			listener.exitAssignLhs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WJSCParserVisitor<Result>): Result {
		if (visitor.visitAssignLhs) {
			return visitor.visitAssignLhs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignRhsContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public arrayLiteral(): ArrayLiteralContext | undefined {
		return this.tryGetRuleContext(0, ArrayLiteralContext);
	}
	public NEW_PAIR(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.NEW_PAIR, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.LPAREN, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.COMMA, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.RPAREN, 0); }
	public pairElement(): PairElementContext | undefined {
		return this.tryGetRuleContext(0, PairElementContext);
	}
	public CALL(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.CALL, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.IDENTIFIER, 0); }
	public argList(): ArgListContext | undefined {
		return this.tryGetRuleContext(0, ArgListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WJSCParser.RULE_assignRhs; }
	// @Override
	public enterRule(listener: WJSCParserListener): void {
		if (listener.enterAssignRhs) {
			listener.enterAssignRhs(this);
		}
	}
	// @Override
	public exitRule(listener: WJSCParserListener): void {
		if (listener.exitAssignRhs) {
			listener.exitAssignRhs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WJSCParserVisitor<Result>): Result {
		if (visitor.visitAssignRhs) {
			return visitor.visitAssignRhs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WJSCParser.COMMA);
		} else {
			return this.getToken(WJSCParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WJSCParser.RULE_argList; }
	// @Override
	public enterRule(listener: WJSCParserListener): void {
		if (listener.enterArgList) {
			listener.enterArgList(this);
		}
	}
	// @Override
	public exitRule(listener: WJSCParserListener): void {
		if (listener.exitArgList) {
			listener.exitArgList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WJSCParserVisitor<Result>): Result {
		if (visitor.visitArgList) {
			return visitor.visitArgList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PairElementContext extends ParserRuleContext {
	public FIRST(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.FIRST, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SECOND(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.SECOND, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WJSCParser.RULE_pairElement; }
	// @Override
	public enterRule(listener: WJSCParserListener): void {
		if (listener.enterPairElement) {
			listener.enterPairElement(this);
		}
	}
	// @Override
	public exitRule(listener: WJSCParserListener): void {
		if (listener.exitPairElement) {
			listener.exitPairElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WJSCParserVisitor<Result>): Result {
		if (visitor.visitPairElement) {
			return visitor.visitPairElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public baseType(): BaseTypeContext | undefined {
		return this.tryGetRuleContext(0, BaseTypeContext);
	}
	public arrayType(): ArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, ArrayTypeContext);
	}
	public pairType(): PairTypeContext | undefined {
		return this.tryGetRuleContext(0, PairTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WJSCParser.RULE_type; }
	// @Override
	public enterRule(listener: WJSCParserListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: WJSCParserListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WJSCParserVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BaseTypeContext extends ParserRuleContext {
	public INTEGER(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.INTEGER, 0); }
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.BOOLEAN, 0); }
	public CHARACTER(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.CHARACTER, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WJSCParser.RULE_baseType; }
	// @Override
	public enterRule(listener: WJSCParserListener): void {
		if (listener.enterBaseType) {
			listener.enterBaseType(this);
		}
	}
	// @Override
	public exitRule(listener: WJSCParserListener): void {
		if (listener.exitBaseType) {
			listener.exitBaseType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WJSCParserVisitor<Result>): Result {
		if (visitor.visitBaseType) {
			return visitor.visitBaseType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayTypeContext extends ParserRuleContext {
	public baseType(): BaseTypeContext | undefined {
		return this.tryGetRuleContext(0, BaseTypeContext);
	}
	public LBRACK(): TerminalNode { return this.getToken(WJSCParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(WJSCParser.RBRACK, 0); }
	public arrayType(): ArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, ArrayTypeContext);
	}
	public pairType(): PairTypeContext | undefined {
		return this.tryGetRuleContext(0, PairTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WJSCParser.RULE_arrayType; }
	// @Override
	public enterRule(listener: WJSCParserListener): void {
		if (listener.enterArrayType) {
			listener.enterArrayType(this);
		}
	}
	// @Override
	public exitRule(listener: WJSCParserListener): void {
		if (listener.exitArrayType) {
			listener.exitArrayType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WJSCParserVisitor<Result>): Result {
		if (visitor.visitArrayType) {
			return visitor.visitArrayType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PairTypeContext extends ParserRuleContext {
	public PAIR(): TerminalNode { return this.getToken(WJSCParser.PAIR, 0); }
	public LPAREN(): TerminalNode { return this.getToken(WJSCParser.LPAREN, 0); }
	public pairElementType(): PairElementTypeContext[];
	public pairElementType(i: number): PairElementTypeContext;
	public pairElementType(i?: number): PairElementTypeContext | PairElementTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PairElementTypeContext);
		} else {
			return this.getRuleContext(i, PairElementTypeContext);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(WJSCParser.COMMA, 0); }
	public RPAREN(): TerminalNode { return this.getToken(WJSCParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WJSCParser.RULE_pairType; }
	// @Override
	public enterRule(listener: WJSCParserListener): void {
		if (listener.enterPairType) {
			listener.enterPairType(this);
		}
	}
	// @Override
	public exitRule(listener: WJSCParserListener): void {
		if (listener.exitPairType) {
			listener.exitPairType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WJSCParserVisitor<Result>): Result {
		if (visitor.visitPairType) {
			return visitor.visitPairType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PairElementTypeContext extends ParserRuleContext {
	public baseType(): BaseTypeContext | undefined {
		return this.tryGetRuleContext(0, BaseTypeContext);
	}
	public arrayType(): ArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, ArrayTypeContext);
	}
	public PAIR(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.PAIR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WJSCParser.RULE_pairElementType; }
	// @Override
	public enterRule(listener: WJSCParserListener): void {
		if (listener.enterPairElementType) {
			listener.enterPairElementType(this);
		}
	}
	// @Override
	public exitRule(listener: WJSCParserListener): void {
		if (listener.exitPairElementType) {
			listener.exitPairElementType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WJSCParserVisitor<Result>): Result {
		if (visitor.visitPairElementType) {
			return visitor.visitPairElementType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public integerLiteral(): IntegerLiteralContext | undefined {
		return this.tryGetRuleContext(0, IntegerLiteralContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public arithmeticOperator(): ArithmeticOperatorContext | undefined {
		return this.tryGetRuleContext(0, ArithmeticOperatorContext);
	}
	public arithmeticOperator2(): ArithmeticOperator2Context | undefined {
		return this.tryGetRuleContext(0, ArithmeticOperator2Context);
	}
	public comparisonOperator(): ComparisonOperatorContext | undefined {
		return this.tryGetRuleContext(0, ComparisonOperatorContext);
	}
	public equalityOperator(): EqualityOperatorContext | undefined {
		return this.tryGetRuleContext(0, EqualityOperatorContext);
	}
	public booleanAndOperator(): BooleanAndOperatorContext | undefined {
		return this.tryGetRuleContext(0, BooleanAndOperatorContext);
	}
	public booleanOrOperator(): BooleanOrOperatorContext | undefined {
		return this.tryGetRuleContext(0, BooleanOrOperatorContext);
	}
	public arrayElement(): ArrayElementContext | undefined {
		return this.tryGetRuleContext(0, ArrayElementContext);
	}
	public unaryOperator(): UnaryOperatorContext | undefined {
		return this.tryGetRuleContext(0, UnaryOperatorContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.RPAREN, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.IDENTIFIER, 0); }
	public BOOLEAN_LITERAL(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.BOOLEAN_LITERAL, 0); }
	public CHARACTER_LITERAL(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.CHARACTER_LITERAL, 0); }
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.STRING_LITERAL, 0); }
	public PAIR_LITERAL(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.PAIR_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WJSCParser.RULE_expression; }
	// @Override
	public enterRule(listener: WJSCParserListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: WJSCParserListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WJSCParserVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntegerLiteralContext extends ParserRuleContext {
	public DIGIT(): TerminalNode[];
	public DIGIT(i: number): TerminalNode;
	public DIGIT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WJSCParser.DIGIT);
		} else {
			return this.getToken(WJSCParser.DIGIT, i);
		}
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WJSCParser.RULE_integerLiteral; }
	// @Override
	public enterRule(listener: WJSCParserListener): void {
		if (listener.enterIntegerLiteral) {
			listener.enterIntegerLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: WJSCParserListener): void {
		if (listener.exitIntegerLiteral) {
			listener.exitIntegerLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WJSCParserVisitor<Result>): Result {
		if (visitor.visitIntegerLiteral) {
			return visitor.visitIntegerLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayElementContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(WJSCParser.IDENTIFIER, 0); }
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WJSCParser.LBRACK);
		} else {
			return this.getToken(WJSCParser.LBRACK, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WJSCParser.RBRACK);
		} else {
			return this.getToken(WJSCParser.RBRACK, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WJSCParser.RULE_arrayElement; }
	// @Override
	public enterRule(listener: WJSCParserListener): void {
		if (listener.enterArrayElement) {
			listener.enterArrayElement(this);
		}
	}
	// @Override
	public exitRule(listener: WJSCParserListener): void {
		if (listener.exitArrayElement) {
			listener.exitArrayElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WJSCParserVisitor<Result>): Result {
		if (visitor.visitArrayElement) {
			return visitor.visitArrayElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayLiteralContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(WJSCParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(WJSCParser.RBRACK, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WJSCParser.COMMA);
		} else {
			return this.getToken(WJSCParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WJSCParser.RULE_arrayLiteral; }
	// @Override
	public enterRule(listener: WJSCParserListener): void {
		if (listener.enterArrayLiteral) {
			listener.enterArrayLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: WJSCParserListener): void {
		if (listener.exitArrayLiteral) {
			listener.exitArrayLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WJSCParserVisitor<Result>): Result {
		if (visitor.visitArrayLiteral) {
			return visitor.visitArrayLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArithmeticOperatorContext extends ParserRuleContext {
	public MULTIPLY(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.MULTIPLY, 0); }
	public DIVIDE(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.DIVIDE, 0); }
	public MODULO(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.MODULO, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WJSCParser.RULE_arithmeticOperator; }
	// @Override
	public enterRule(listener: WJSCParserListener): void {
		if (listener.enterArithmeticOperator) {
			listener.enterArithmeticOperator(this);
		}
	}
	// @Override
	public exitRule(listener: WJSCParserListener): void {
		if (listener.exitArithmeticOperator) {
			listener.exitArithmeticOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WJSCParserVisitor<Result>): Result {
		if (visitor.visitArithmeticOperator) {
			return visitor.visitArithmeticOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArithmeticOperator2Context extends ParserRuleContext {
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WJSCParser.RULE_arithmeticOperator2; }
	// @Override
	public enterRule(listener: WJSCParserListener): void {
		if (listener.enterArithmeticOperator2) {
			listener.enterArithmeticOperator2(this);
		}
	}
	// @Override
	public exitRule(listener: WJSCParserListener): void {
		if (listener.exitArithmeticOperator2) {
			listener.exitArithmeticOperator2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WJSCParserVisitor<Result>): Result {
		if (visitor.visitArithmeticOperator2) {
			return visitor.visitArithmeticOperator2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonOperatorContext extends ParserRuleContext {
	public GREATER_THAN(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.GREATER_THAN, 0); }
	public GREATER_EQUAL(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.GREATER_EQUAL, 0); }
	public LESS_THAN(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.LESS_THAN, 0); }
	public LESS_EQUAL(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.LESS_EQUAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WJSCParser.RULE_comparisonOperator; }
	// @Override
	public enterRule(listener: WJSCParserListener): void {
		if (listener.enterComparisonOperator) {
			listener.enterComparisonOperator(this);
		}
	}
	// @Override
	public exitRule(listener: WJSCParserListener): void {
		if (listener.exitComparisonOperator) {
			listener.exitComparisonOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WJSCParserVisitor<Result>): Result {
		if (visitor.visitComparisonOperator) {
			return visitor.visitComparisonOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EqualityOperatorContext extends ParserRuleContext {
	public EQUALS(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.EQUALS, 0); }
	public NEQUALS(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.NEQUALS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WJSCParser.RULE_equalityOperator; }
	// @Override
	public enterRule(listener: WJSCParserListener): void {
		if (listener.enterEqualityOperator) {
			listener.enterEqualityOperator(this);
		}
	}
	// @Override
	public exitRule(listener: WJSCParserListener): void {
		if (listener.exitEqualityOperator) {
			listener.exitEqualityOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WJSCParserVisitor<Result>): Result {
		if (visitor.visitEqualityOperator) {
			return visitor.visitEqualityOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanAndOperatorContext extends ParserRuleContext {
	public LOGICAL_AND(): TerminalNode { return this.getToken(WJSCParser.LOGICAL_AND, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WJSCParser.RULE_booleanAndOperator; }
	// @Override
	public enterRule(listener: WJSCParserListener): void {
		if (listener.enterBooleanAndOperator) {
			listener.enterBooleanAndOperator(this);
		}
	}
	// @Override
	public exitRule(listener: WJSCParserListener): void {
		if (listener.exitBooleanAndOperator) {
			listener.exitBooleanAndOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WJSCParserVisitor<Result>): Result {
		if (visitor.visitBooleanAndOperator) {
			return visitor.visitBooleanAndOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanOrOperatorContext extends ParserRuleContext {
	public LOGICAL_OR(): TerminalNode { return this.getToken(WJSCParser.LOGICAL_OR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WJSCParser.RULE_booleanOrOperator; }
	// @Override
	public enterRule(listener: WJSCParserListener): void {
		if (listener.enterBooleanOrOperator) {
			listener.enterBooleanOrOperator(this);
		}
	}
	// @Override
	public exitRule(listener: WJSCParserListener): void {
		if (listener.exitBooleanOrOperator) {
			listener.exitBooleanOrOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WJSCParserVisitor<Result>): Result {
		if (visitor.visitBooleanOrOperator) {
			return visitor.visitBooleanOrOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryOperatorContext extends ParserRuleContext {
	public LOGICAL_NEGATION(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.LOGICAL_NEGATION, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.MINUS, 0); }
	public LENGTH(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.LENGTH, 0); }
	public ORDER_OF(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.ORDER_OF, 0); }
	public CHARACTER_OF(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.CHARACTER_OF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WJSCParser.RULE_unaryOperator; }
	// @Override
	public enterRule(listener: WJSCParserListener): void {
		if (listener.enterUnaryOperator) {
			listener.enterUnaryOperator(this);
		}
	}
	// @Override
	public exitRule(listener: WJSCParserListener): void {
		if (listener.exitUnaryOperator) {
			listener.exitUnaryOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WJSCParserVisitor<Result>): Result {
		if (visitor.visitUnaryOperator) {
			return visitor.visitUnaryOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StdlibContext extends ParserRuleContext {
	public FREE(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.FREE, 0); }
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.RETURN, 0); }
	public EXIT(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.EXIT, 0); }
	public PRINT(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.PRINT, 0); }
	public PRINTLN(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.PRINTLN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WJSCParser.RULE_stdlib; }
	// @Override
	public enterRule(listener: WJSCParserListener): void {
		if (listener.enterStdlib) {
			listener.enterStdlib(this);
		}
	}
	// @Override
	public exitRule(listener: WJSCParserListener): void {
		if (listener.exitStdlib) {
			listener.exitStdlib(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WJSCParserVisitor<Result>): Result {
		if (visitor.visitStdlib) {
			return visitor.visitStdlib(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


