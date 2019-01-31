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
	public static readonly BEGIN = 3;
	public static readonly END = 4;
	public static readonly IS = 5;
	public static readonly STDLIB_FUNCTIONS = 6;
	public static readonly WSKIP = 7;
	public static readonly READ = 8;
	public static readonly FREE = 9;
	public static readonly RETURN = 10;
	public static readonly EXIT = 11;
	public static readonly PRINT = 12;
	public static readonly PRINTLN = 13;
	public static readonly IF = 14;
	public static readonly THEN = 15;
	public static readonly ELSE = 16;
	public static readonly FI = 17;
	public static readonly WHILE = 18;
	public static readonly DO = 19;
	public static readonly DONE = 20;
	public static readonly CALL = 21;
	public static readonly FIRST = 22;
	public static readonly SECOND = 23;
	public static readonly BINARY_OPERATOR = 24;
	public static readonly MULTIPLY = 25;
	public static readonly DIVIDE = 26;
	public static readonly MODULO = 27;
	public static readonly PLUS = 28;
	public static readonly MINUS = 29;
	public static readonly GREATER_THAN = 30;
	public static readonly GREATER_EQUAL = 31;
	public static readonly LESS_THAN = 32;
	public static readonly LESS_EQUAL = 33;
	public static readonly EQUALS = 34;
	public static readonly STRICT_EQUALS = 35;
	public static readonly NEQUALS = 36;
	public static readonly NSTRICT_EQUALS = 37;
	public static readonly LOGICAL_AND = 38;
	public static readonly LOGICAL_OR = 39;
	public static readonly ASSIGNMENT = 40;
	public static readonly NEW_PAIR = 41;
	public static readonly UNARY_OPERATOR = 42;
	public static readonly LOGICAL_NEGATION = 43;
	public static readonly ARITHMETIC_NEGATION = 44;
	public static readonly LENGTH = 45;
	public static readonly ORDER_OF = 46;
	public static readonly CHARACTER_OF = 47;
	public static readonly DIGIT = 48;
	public static readonly INTEGER_SIGN = 49;
	public static readonly BOOLEAN_LITERAL = 50;
	public static readonly TRUTH = 51;
	public static readonly FALSITY = 52;
	public static readonly CHARACTER_LITERAL = 53;
	public static readonly PAIR_LITERAL = 54;
	public static readonly STRING_LITERAL = 55;
	public static readonly INTEGER = 56;
	public static readonly BOOLEAN = 57;
	public static readonly CHARACTER = 58;
	public static readonly STRING = 59;
	public static readonly PAIR = 60;
	public static readonly LPAREN = 61;
	public static readonly RPAREN = 62;
	public static readonly LBRACK = 63;
	public static readonly RBRACK = 64;
	public static readonly COMMA = 65;
	public static readonly SEMICOLON = 66;
	public static readonly APOS = 67;
	public static readonly DBLQ = 68;
	public static readonly COMMENT = 69;
	public static readonly IDENTIFIER = 70;
	public static readonly RULE_program = 0;
	public static readonly RULE_func = 1;
	public static readonly RULE_paramList = 2;
	public static readonly RULE_param = 3;
	public static readonly RULE_statement = 4;
	public static readonly RULE_conditionalBlocks = 5;
	public static readonly RULE_assignment = 6;
	public static readonly RULE_assignLhs = 7;
	public static readonly RULE_assignRhs = 8;
	public static readonly RULE_argList = 9;
	public static readonly RULE_pairElement = 10;
	public static readonly RULE_type = 11;
	public static readonly RULE_baseType = 12;
	public static readonly RULE_arrayType = 13;
	public static readonly RULE_pairType = 14;
	public static readonly RULE_pairElementType = 15;
	public static readonly RULE_expression = 16;
	public static readonly RULE_integerLiteral = 17;
	public static readonly RULE_arrayElement = 18;
	public static readonly RULE_arrayLiteral = 19;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "func", "paramList", "param", "statement", "conditionalBlocks", 
		"assignment", "assignLhs", "assignRhs", "argList", "pairElement", "type", 
		"baseType", "arrayType", "pairType", "pairElementType", "expression", 
		"integerLiteral", "arrayElement", "arrayLiteral",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'begin'", "'end'", "'is'", undefined, 
		"'skip'", "'read'", "'free'", "'return'", "'exit'", "'print'", "'println'", 
		"'if'", "'then'", "'else'", "'fi'", "'while'", "'do'", "'done'", "'call'", 
		"'fst'", "'snd'", undefined, "'*'", "'/'", "'%'", "'+'", "'-'", "'>'", 
		"'>='", "'<'", "'<='", "'=='", "'==='", "'!='", "'!=='", "'&&'", "'||'", 
		"'='", "'newpair'", undefined, "'!'", undefined, "'len'", "'ord'", "'chr'", 
		undefined, undefined, undefined, "'true'", "'false'", undefined, "'null'", 
		undefined, "'int'", "'bool'", "'char'", "'string'", "'pair'", "'('", "')'", 
		"'['", "']'", "','", "';'", "'''", "'\"'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "EOL", "WHITESPACE", "BEGIN", "END", "IS", "STDLIB_FUNCTIONS", 
		"WSKIP", "READ", "FREE", "RETURN", "EXIT", "PRINT", "PRINTLN", "IF", "THEN", 
		"ELSE", "FI", "WHILE", "DO", "DONE", "CALL", "FIRST", "SECOND", "BINARY_OPERATOR", 
		"MULTIPLY", "DIVIDE", "MODULO", "PLUS", "MINUS", "GREATER_THAN", "GREATER_EQUAL", 
		"LESS_THAN", "LESS_EQUAL", "EQUALS", "STRICT_EQUALS", "NEQUALS", "NSTRICT_EQUALS", 
		"LOGICAL_AND", "LOGICAL_OR", "ASSIGNMENT", "NEW_PAIR", "UNARY_OPERATOR", 
		"LOGICAL_NEGATION", "ARITHMETIC_NEGATION", "LENGTH", "ORDER_OF", "CHARACTER_OF", 
		"DIGIT", "INTEGER_SIGN", "BOOLEAN_LITERAL", "TRUTH", "FALSITY", "CHARACTER_LITERAL", 
		"PAIR_LITERAL", "STRING_LITERAL", "INTEGER", "BOOLEAN", "CHARACTER", "STRING", 
		"PAIR", "LPAREN", "RPAREN", "LBRACK", "RBRACK", "COMMA", "SEMICOLON", 
		"APOS", "DBLQ", "COMMENT", "IDENTIFIER",
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
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 40;
			this.match(WJSCParser.BEGIN);
			this.state = 44;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 41;
					this.func();
					}
					}
				}
				this.state = 46;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 47;
			this.statement(0);
			this.state = 48;
			this.match(WJSCParser.END);
			this.state = 49;
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
	public func(): FuncContext {
		let _localctx: FuncContext = new FuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, WJSCParser.RULE_func);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 51;
			this.type();
			this.state = 52;
			this.match(WJSCParser.IDENTIFIER);
			this.state = 53;
			this.match(WJSCParser.LPAREN);
			this.state = 55;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (WJSCParser.INTEGER - 56)) | (1 << (WJSCParser.BOOLEAN - 56)) | (1 << (WJSCParser.CHARACTER - 56)) | (1 << (WJSCParser.STRING - 56)) | (1 << (WJSCParser.PAIR - 56)))) !== 0)) {
				{
				this.state = 54;
				this.paramList();
				}
			}

			this.state = 57;
			this.match(WJSCParser.RPAREN);
			this.state = 58;
			this.match(WJSCParser.IS);
			this.state = 59;
			this.statement(0);
			this.state = 60;
			this.match(WJSCParser.END);
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
		this.enterRule(_localctx, 4, WJSCParser.RULE_paramList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 62;
			this.param();
			this.state = 67;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === WJSCParser.COMMA) {
				{
				{
				this.state = 63;
				this.match(WJSCParser.COMMA);
				this.state = 64;
				this.param();
				}
				}
				this.state = 69;
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
		this.enterRule(_localctx, 6, WJSCParser.RULE_param);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 70;
			this.type();
			this.state = 71;
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
		let _startState: number = 8;
		this.enterRecursionRule(_localctx, 8, WJSCParser.RULE_statement, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 86;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 74;
				this.match(WJSCParser.WSKIP);
				}
				break;

			case 2:
				{
				this.state = 75;
				this.conditionalBlocks();
				}
				break;

			case 3:
				{
				this.state = 76;
				this.assignment();
				}
				break;

			case 4:
				{
				this.state = 77;
				this.match(WJSCParser.READ);
				this.state = 78;
				this.assignLhs();
				}
				break;

			case 5:
				{
				this.state = 79;
				this.match(WJSCParser.STDLIB_FUNCTIONS);
				this.state = 80;
				this.expression(0);
				}
				break;

			case 6:
				{
				this.state = 81;
				this.conditionalBlocks();
				}
				break;

			case 7:
				{
				this.state = 82;
				this.match(WJSCParser.BEGIN);
				this.state = 83;
				this.statement(0);
				this.state = 84;
				this.match(WJSCParser.END);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 93;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
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
					this.state = 88;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 89;
					this.match(WJSCParser.SEMICOLON);
					this.state = 90;
					this.statement(2);
					}
					}
				}
				this.state = 95;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
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
		this.enterRule(_localctx, 10, WJSCParser.RULE_conditionalBlocks);
		try {
			this.state = 110;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WJSCParser.IF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 96;
				this.match(WJSCParser.IF);
				this.state = 97;
				this.expression(0);
				this.state = 98;
				this.match(WJSCParser.THEN);
				this.state = 99;
				this.statement(0);
				this.state = 100;
				this.match(WJSCParser.ELSE);
				this.state = 101;
				this.statement(0);
				this.state = 102;
				this.match(WJSCParser.FI);
				}
				break;
			case WJSCParser.WHILE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 104;
				this.match(WJSCParser.WHILE);
				this.state = 105;
				this.expression(0);
				this.state = 106;
				this.match(WJSCParser.DO);
				this.state = 107;
				this.statement(0);
				this.state = 108;
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
		this.enterRule(_localctx, 12, WJSCParser.RULE_assignment);
		try {
			this.state = 121;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WJSCParser.INTEGER:
			case WJSCParser.BOOLEAN:
			case WJSCParser.CHARACTER:
			case WJSCParser.STRING:
			case WJSCParser.PAIR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 112;
				this.type();
				this.state = 113;
				this.match(WJSCParser.IDENTIFIER);
				this.state = 114;
				this.match(WJSCParser.ASSIGNMENT);
				this.state = 115;
				this.assignRhs();
				}
				break;
			case WJSCParser.FIRST:
			case WJSCParser.SECOND:
			case WJSCParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 117;
				this.assignLhs();
				this.state = 118;
				this.match(WJSCParser.ASSIGNMENT);
				this.state = 119;
				this.assignRhs();
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
	public assignLhs(): AssignLhsContext {
		let _localctx: AssignLhsContext = new AssignLhsContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, WJSCParser.RULE_assignLhs);
		try {
			this.state = 126;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 123;
				this.match(WJSCParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 124;
				this.arrayElement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 125;
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
		this.enterRule(_localctx, 16, WJSCParser.RULE_assignRhs);
		let _la: number;
		try {
			this.state = 145;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WJSCParser.UNARY_OPERATOR:
			case WJSCParser.DIGIT:
			case WJSCParser.INTEGER_SIGN:
			case WJSCParser.BOOLEAN_LITERAL:
			case WJSCParser.CHARACTER_LITERAL:
			case WJSCParser.PAIR_LITERAL:
			case WJSCParser.STRING_LITERAL:
			case WJSCParser.LPAREN:
			case WJSCParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 128;
				this.expression(0);
				}
				break;
			case WJSCParser.LBRACK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 129;
				this.arrayLiteral();
				}
				break;
			case WJSCParser.NEW_PAIR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 130;
				this.match(WJSCParser.NEW_PAIR);
				this.state = 131;
				this.match(WJSCParser.LPAREN);
				this.state = 132;
				this.expression(0);
				this.state = 133;
				this.match(WJSCParser.COMMA);
				this.state = 134;
				this.expression(0);
				this.state = 135;
				this.match(WJSCParser.RPAREN);
				}
				break;
			case WJSCParser.FIRST:
			case WJSCParser.SECOND:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 137;
				this.pairElement();
				}
				break;
			case WJSCParser.CALL:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 138;
				this.match(WJSCParser.CALL);
				this.state = 139;
				this.match(WJSCParser.IDENTIFIER);
				this.state = 140;
				this.match(WJSCParser.LPAREN);
				this.state = 142;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (WJSCParser.UNARY_OPERATOR - 42)) | (1 << (WJSCParser.DIGIT - 42)) | (1 << (WJSCParser.INTEGER_SIGN - 42)) | (1 << (WJSCParser.BOOLEAN_LITERAL - 42)) | (1 << (WJSCParser.CHARACTER_LITERAL - 42)) | (1 << (WJSCParser.PAIR_LITERAL - 42)) | (1 << (WJSCParser.STRING_LITERAL - 42)) | (1 << (WJSCParser.LPAREN - 42)) | (1 << (WJSCParser.IDENTIFIER - 42)))) !== 0)) {
					{
					this.state = 141;
					this.argList();
					}
				}

				this.state = 144;
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
		this.enterRule(_localctx, 18, WJSCParser.RULE_argList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 147;
			this.expression(0);
			this.state = 152;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === WJSCParser.COMMA) {
				{
				{
				this.state = 148;
				this.match(WJSCParser.COMMA);
				this.state = 149;
				this.expression(0);
				}
				}
				this.state = 154;
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
		this.enterRule(_localctx, 20, WJSCParser.RULE_pairElement);
		try {
			this.state = 159;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WJSCParser.FIRST:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 155;
				this.match(WJSCParser.FIRST);
				this.state = 156;
				this.expression(0);
				}
				break;
			case WJSCParser.SECOND:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 157;
				this.match(WJSCParser.SECOND);
				this.state = 158;
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
		this.enterRule(_localctx, 22, WJSCParser.RULE_type);
		try {
			this.state = 164;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 161;
				this.baseType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 162;
				this.arrayType(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 163;
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
		this.enterRule(_localctx, 24, WJSCParser.RULE_baseType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 166;
			_la = this._input.LA(1);
			if (!(((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (WJSCParser.INTEGER - 56)) | (1 << (WJSCParser.BOOLEAN - 56)) | (1 << (WJSCParser.CHARACTER - 56)) | (1 << (WJSCParser.STRING - 56)))) !== 0))) {
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
		let _startState: number = 26;
		this.enterRecursionRule(_localctx, 26, WJSCParser.RULE_arrayType, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 177;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WJSCParser.INTEGER:
			case WJSCParser.BOOLEAN:
			case WJSCParser.CHARACTER:
			case WJSCParser.STRING:
				{
				this.state = 169;
				this.baseType();
				this.state = 170;
				this.match(WJSCParser.LBRACK);
				this.state = 171;
				this.match(WJSCParser.RBRACK);
				}
				break;
			case WJSCParser.PAIR:
				{
				this.state = 173;
				this.pairType();
				this.state = 174;
				this.match(WJSCParser.LBRACK);
				this.state = 175;
				this.match(WJSCParser.RBRACK);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 184;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
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
					this.state = 179;
					if (!(this.precpred(this._ctx, 2))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
					}
					this.state = 180;
					this.match(WJSCParser.LBRACK);
					this.state = 181;
					this.match(WJSCParser.RBRACK);
					}
					}
				}
				this.state = 186;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
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
		this.enterRule(_localctx, 28, WJSCParser.RULE_pairType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 187;
			this.match(WJSCParser.PAIR);
			this.state = 188;
			this.match(WJSCParser.LPAREN);
			this.state = 189;
			this.pairElementType();
			this.state = 190;
			this.match(WJSCParser.COMMA);
			this.state = 191;
			this.pairElementType();
			this.state = 192;
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
		this.enterRule(_localctx, 30, WJSCParser.RULE_pairElementType);
		try {
			this.state = 197;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 194;
				this.baseType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 195;
				this.arrayType(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 196;
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
		let _startState: number = 32;
		this.enterRecursionRule(_localctx, 32, WJSCParser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 213;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 200;
				this.arrayElement();
				}
				break;

			case 2:
				{
				this.state = 201;
				this.match(WJSCParser.UNARY_OPERATOR);
				this.state = 202;
				this.expression(8);
				}
				break;

			case 3:
				{
				this.state = 203;
				this.match(WJSCParser.LPAREN);
				this.state = 204;
				this.expression(0);
				this.state = 205;
				this.match(WJSCParser.RPAREN);
				}
				break;

			case 4:
				{
				this.state = 207;
				this.match(WJSCParser.IDENTIFIER);
				}
				break;

			case 5:
				{
				this.state = 208;
				this.integerLiteral();
				}
				break;

			case 6:
				{
				this.state = 209;
				this.match(WJSCParser.BOOLEAN_LITERAL);
				}
				break;

			case 7:
				{
				this.state = 210;
				this.match(WJSCParser.CHARACTER_LITERAL);
				}
				break;

			case 8:
				{
				this.state = 211;
				this.match(WJSCParser.STRING_LITERAL);
				}
				break;

			case 9:
				{
				this.state = 212;
				this.match(WJSCParser.PAIR_LITERAL);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 220;
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
					_localctx = new ExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, WJSCParser.RULE_expression);
					this.state = 215;
					if (!(this.precpred(this._ctx, 10))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
					}
					this.state = 216;
					this.match(WJSCParser.BINARY_OPERATOR);
					this.state = 217;
					this.expression(11);
					}
					}
				}
				this.state = 222;
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
	public integerLiteral(): IntegerLiteralContext {
		let _localctx: IntegerLiteralContext = new IntegerLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, WJSCParser.RULE_integerLiteral);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 224;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === WJSCParser.INTEGER_SIGN) {
				{
				this.state = 223;
				this.match(WJSCParser.INTEGER_SIGN);
				}
			}

			this.state = 227;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 226;
					this.match(WJSCParser.DIGIT);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 229;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
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
		this.enterRule(_localctx, 36, WJSCParser.RULE_arrayElement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 231;
			this.match(WJSCParser.IDENTIFIER);
			this.state = 236;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 232;
					this.match(WJSCParser.LBRACK);
					this.state = 233;
					this.expression(0);
					this.state = 234;
					this.match(WJSCParser.RBRACK);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 238;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
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
		this.enterRule(_localctx, 38, WJSCParser.RULE_arrayLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 240;
			this.match(WJSCParser.LBRACK);
			this.state = 249;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (WJSCParser.UNARY_OPERATOR - 42)) | (1 << (WJSCParser.DIGIT - 42)) | (1 << (WJSCParser.INTEGER_SIGN - 42)) | (1 << (WJSCParser.BOOLEAN_LITERAL - 42)) | (1 << (WJSCParser.CHARACTER_LITERAL - 42)) | (1 << (WJSCParser.PAIR_LITERAL - 42)) | (1 << (WJSCParser.STRING_LITERAL - 42)) | (1 << (WJSCParser.LPAREN - 42)) | (1 << (WJSCParser.IDENTIFIER - 42)))) !== 0)) {
				{
				this.state = 241;
				this.expression(0);
				this.state = 246;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === WJSCParser.COMMA) {
					{
					{
					this.state = 242;
					this.match(WJSCParser.COMMA);
					this.state = 243;
					this.expression(0);
					}
					}
					this.state = 248;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 251;
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 4:
			return this.statement_sempred(_localctx as StatementContext, predIndex);

		case 13:
			return this.arrayType_sempred(_localctx as ArrayTypeContext, predIndex);

		case 16:
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
			return this.precpred(this._ctx, 10);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03H\u0100\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x03\x02\x03\x02\x07\x02-\n\x02" +
		"\f\x02\x0E\x020\v\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x05\x03:\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x04\x03\x04\x03\x04\x07\x04D\n\x04\f\x04\x0E\x04G\v\x04\x03\x05\x03" +
		"\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06Y\n\x06\x03\x06\x03" +
		"\x06\x03\x06\x07\x06^\n\x06\f\x06\x0E\x06a\v\x06\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x05\x07q\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x05\b|\n\b\x03\t\x03\t\x03\t\x05\t\x81\n\t\x03\n\x03\n" +
		"\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x05\n\x91\n\n\x03\n\x05\n\x94\n\n\x03\v\x03\v\x03\v\x07\v\x99\n\v\f" +
		"\v\x0E\v\x9C\v\v\x03\f\x03\f\x03\f\x03\f\x05\f\xA2\n\f\x03\r\x03\r\x03" +
		"\r\x05\r\xA7\n\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xB4\n\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x07\x0F\xB9\n\x0F\f\x0F\x0E\x0F\xBC\v\x0F\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x05\x11\xC8\n" +
		"\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\xD8\n\x12\x03\x12" +
		"\x03\x12\x03\x12\x07\x12\xDD\n\x12\f\x12\x0E\x12\xE0\v\x12\x03\x13\x05" +
		"\x13\xE3\n\x13\x03\x13\x06\x13\xE6\n\x13\r\x13\x0E\x13\xE7\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x06\x14\xEF\n\x14\r\x14\x0E\x14\xF0\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x07\x15\xF7\n\x15\f\x15\x0E\x15\xFA\v\x15\x05" +
		"\x15\xFC\n\x15\x03\x15\x03\x15\x03\x15\x02\x02\x05\n\x1C\"\x16\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16" +
		"\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02\x02\x03" +
		"\x03\x02:=\u0114\x02*\x03\x02\x02\x02\x045\x03\x02\x02\x02\x06@\x03\x02" +
		"\x02\x02\bH\x03\x02\x02\x02\nX\x03\x02\x02\x02\fp\x03\x02\x02\x02\x0E" +
		"{\x03\x02\x02\x02\x10\x80\x03\x02\x02\x02\x12\x93\x03\x02\x02\x02\x14" +
		"\x95\x03\x02\x02\x02\x16\xA1\x03\x02\x02\x02\x18\xA6\x03\x02\x02\x02\x1A" +
		"\xA8\x03\x02\x02\x02\x1C\xB3\x03\x02\x02\x02\x1E\xBD\x03\x02\x02\x02 " +
		"\xC7\x03\x02\x02\x02\"\xD7\x03\x02\x02\x02$\xE2\x03\x02\x02\x02&\xE9\x03" +
		"\x02\x02\x02(\xF2\x03\x02\x02\x02*.\x07\x05\x02\x02+-\x05\x04\x03\x02" +
		",+\x03\x02\x02\x02-0\x03\x02\x02\x02.,\x03\x02\x02\x02./\x03\x02\x02\x02" +
		"/1\x03\x02\x02\x020.\x03\x02\x02\x0212\x05\n\x06\x0223\x07\x06\x02\x02" +
		"34\x07\x02\x02\x034\x03\x03\x02\x02\x0256\x05\x18\r\x0267\x07H\x02\x02" +
		"79\x07?\x02\x028:\x05\x06\x04\x0298\x03\x02\x02\x029:\x03\x02\x02\x02" +
		":;\x03\x02\x02\x02;<\x07@\x02\x02<=\x07\x07\x02\x02=>\x05\n\x06\x02>?" +
		"\x07\x06\x02\x02?\x05\x03\x02\x02\x02@E\x05\b\x05\x02AB\x07C\x02\x02B" +
		"D\x05\b\x05\x02CA\x03\x02\x02\x02DG\x03\x02\x02\x02EC\x03\x02\x02\x02" +
		"EF\x03\x02\x02\x02F\x07\x03\x02\x02\x02GE\x03\x02\x02\x02HI\x05\x18\r" +
		"\x02IJ\x07H\x02\x02J\t\x03\x02\x02\x02KL\b\x06\x01\x02LY\x07\t\x02\x02" +
		"MY\x05\f\x07\x02NY\x05\x0E\b\x02OP\x07\n\x02\x02PY\x05\x10\t\x02QR\x07" +
		"\b\x02\x02RY\x05\"\x12\x02SY\x05\f\x07\x02TU\x07\x05\x02\x02UV\x05\n\x06" +
		"\x02VW\x07\x06\x02\x02WY\x03\x02\x02\x02XK\x03\x02\x02\x02XM\x03\x02\x02" +
		"\x02XN\x03\x02\x02\x02XO\x03\x02\x02\x02XQ\x03\x02\x02\x02XS\x03\x02\x02" +
		"\x02XT\x03\x02\x02\x02Y_\x03\x02\x02\x02Z[\f\x03\x02\x02[\\\x07D\x02\x02" +
		"\\^\x05\n\x06\x04]Z\x03\x02\x02\x02^a\x03\x02\x02\x02_]\x03\x02\x02\x02" +
		"_`\x03\x02\x02\x02`\v\x03\x02\x02\x02a_\x03\x02\x02\x02bc\x07\x10\x02" +
		"\x02cd\x05\"\x12\x02de\x07\x11\x02\x02ef\x05\n\x06\x02fg\x07\x12\x02\x02" +
		"gh\x05\n\x06\x02hi\x07\x13\x02\x02iq\x03\x02\x02\x02jk\x07\x14\x02\x02" +
		"kl\x05\"\x12\x02lm\x07\x15\x02\x02mn\x05\n\x06\x02no\x07\x16\x02\x02o" +
		"q\x03\x02\x02\x02pb\x03\x02\x02\x02pj\x03\x02\x02\x02q\r\x03\x02\x02\x02" +
		"rs\x05\x18\r\x02st\x07H\x02\x02tu\x07*\x02\x02uv\x05\x12\n\x02v|\x03\x02" +
		"\x02\x02wx\x05\x10\t\x02xy\x07*\x02\x02yz\x05\x12\n\x02z|\x03\x02\x02" +
		"\x02{r\x03\x02\x02\x02{w\x03\x02\x02\x02|\x0F\x03\x02\x02\x02}\x81\x07" +
		"H\x02\x02~\x81\x05&\x14\x02\x7F\x81\x05\x16\f\x02\x80}\x03\x02\x02\x02" +
		"\x80~\x03\x02\x02\x02\x80\x7F\x03\x02\x02\x02\x81\x11\x03\x02\x02\x02" +
		"\x82\x94\x05\"\x12\x02\x83\x94\x05(\x15\x02\x84\x85\x07+\x02\x02\x85\x86" +
		"\x07?\x02\x02\x86\x87\x05\"\x12\x02\x87\x88\x07C\x02\x02\x88\x89\x05\"" +
		"\x12\x02\x89\x8A\x07@\x02\x02\x8A\x94\x03\x02\x02\x02\x8B\x94\x05\x16" +
		"\f\x02\x8C\x8D\x07\x17\x02\x02\x8D\x8E\x07H\x02\x02\x8E\x90\x07?\x02\x02" +
		"\x8F\x91\x05\x14\v\x02\x90\x8F\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02" +
		"\x91\x92\x03\x02\x02\x02\x92\x94\x07@\x02\x02\x93\x82\x03\x02\x02\x02" +
		"\x93\x83\x03\x02\x02\x02\x93\x84\x03\x02\x02\x02\x93\x8B\x03\x02\x02\x02" +
		"\x93\x8C\x03\x02\x02\x02\x94\x13\x03\x02\x02\x02\x95\x9A\x05\"\x12\x02" +
		"\x96\x97\x07C\x02\x02\x97\x99\x05\"\x12\x02\x98\x96\x03\x02\x02\x02\x99" +
		"\x9C\x03\x02\x02\x02\x9A\x98\x03\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B" +
		"\x15\x03\x02\x02\x02\x9C\x9A\x03\x02\x02\x02\x9D\x9E\x07\x18\x02\x02\x9E" +
		"\xA2\x05\"\x12\x02\x9F\xA0\x07\x19\x02\x02\xA0\xA2\x05\"\x12\x02\xA1\x9D" +
		"\x03\x02\x02\x02\xA1\x9F\x03\x02\x02\x02\xA2\x17\x03\x02\x02\x02\xA3\xA7" +
		"\x05\x1A\x0E\x02\xA4\xA7\x05\x1C\x0F\x02\xA5\xA7\x05\x1E\x10\x02\xA6\xA3" +
		"\x03\x02\x02\x02\xA6\xA4\x03\x02\x02\x02\xA6\xA5\x03\x02\x02\x02\xA7\x19" +
		"\x03\x02\x02\x02\xA8\xA9\t\x02\x02\x02\xA9\x1B\x03\x02\x02\x02\xAA\xAB" +
		"\b\x0F\x01\x02\xAB\xAC\x05\x1A\x0E\x02\xAC\xAD\x07A\x02\x02\xAD\xAE\x07" +
		"B\x02\x02\xAE\xB4\x03\x02\x02\x02\xAF\xB0\x05\x1E\x10\x02\xB0\xB1\x07" +
		"A\x02\x02\xB1\xB2\x07B\x02\x02\xB2\xB4\x03\x02\x02\x02\xB3\xAA\x03\x02" +
		"\x02\x02\xB3\xAF\x03\x02\x02\x02\xB4\xBA\x03\x02\x02\x02\xB5\xB6\f\x04" +
		"\x02\x02\xB6\xB7\x07A\x02\x02\xB7\xB9\x07B\x02\x02\xB8\xB5\x03\x02\x02" +
		"\x02\xB9\xBC\x03\x02\x02\x02\xBA\xB8\x03\x02\x02\x02\xBA\xBB\x03\x02\x02" +
		"\x02\xBB\x1D\x03\x02\x02\x02\xBC\xBA\x03\x02\x02\x02\xBD\xBE\x07>\x02" +
		"\x02\xBE\xBF\x07?\x02\x02\xBF\xC0\x05 \x11\x02\xC0\xC1\x07C\x02\x02\xC1" +
		"\xC2\x05 \x11\x02\xC2\xC3\x07@\x02\x02\xC3\x1F\x03\x02\x02\x02\xC4\xC8" +
		"\x05\x1A\x0E\x02\xC5\xC8\x05\x1C\x0F\x02\xC6\xC8\x07>\x02\x02\xC7\xC4" +
		"\x03\x02\x02\x02\xC7\xC5\x03\x02\x02\x02\xC7\xC6\x03\x02\x02\x02\xC8!" +
		"\x03\x02\x02\x02\xC9\xCA\b\x12\x01\x02\xCA\xD8\x05&\x14\x02\xCB\xCC\x07" +
		",\x02\x02\xCC\xD8\x05\"\x12\n\xCD\xCE\x07?\x02\x02\xCE\xCF\x05\"\x12\x02" +
		"\xCF\xD0\x07@\x02\x02\xD0\xD8\x03\x02\x02\x02\xD1\xD8\x07H\x02\x02\xD2" +
		"\xD8\x05$\x13\x02\xD3\xD8\x074\x02\x02\xD4\xD8\x077\x02\x02\xD5\xD8\x07" +
		"9\x02\x02\xD6\xD8\x078\x02\x02\xD7\xC9\x03\x02\x02\x02\xD7\xCB\x03\x02" +
		"\x02\x02\xD7\xCD\x03\x02\x02\x02\xD7\xD1\x03\x02\x02\x02\xD7\xD2\x03\x02" +
		"\x02\x02\xD7\xD3\x03\x02\x02\x02\xD7\xD4\x03\x02\x02\x02\xD7\xD5\x03\x02" +
		"\x02\x02\xD7\xD6\x03\x02\x02\x02\xD8\xDE\x03\x02\x02\x02\xD9\xDA\f\f\x02" +
		"\x02\xDA\xDB\x07\x1A\x02\x02\xDB\xDD\x05\"\x12\r\xDC\xD9\x03\x02\x02\x02" +
		"\xDD\xE0\x03\x02\x02\x02\xDE\xDC\x03\x02\x02\x02\xDE\xDF\x03\x02\x02\x02" +
		"\xDF#\x03\x02\x02\x02\xE0\xDE\x03\x02\x02\x02\xE1\xE3\x073\x02\x02\xE2" +
		"\xE1\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\xE5\x03\x02\x02\x02\xE4" +
		"\xE6\x072\x02\x02\xE5\xE4\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7" +
		"\xE5\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8%\x03\x02\x02\x02\xE9" +
		"\xEE\x07H\x02\x02\xEA\xEB\x07A\x02\x02\xEB\xEC\x05\"\x12\x02\xEC\xED\x07" +
		"B\x02\x02\xED\xEF\x03\x02\x02\x02\xEE\xEA\x03\x02\x02\x02\xEF\xF0\x03" +
		"\x02\x02\x02\xF0\xEE\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1\'\x03" +
		"\x02\x02\x02\xF2\xFB\x07A\x02\x02\xF3\xF8\x05\"\x12\x02\xF4\xF5\x07C\x02" +
		"\x02\xF5\xF7\x05\"\x12\x02\xF6\xF4\x03\x02\x02\x02\xF7\xFA\x03\x02\x02" +
		"\x02\xF8\xF6\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\xFC\x03\x02\x02" +
		"\x02\xFA\xF8\x03\x02\x02\x02\xFB\xF3\x03\x02\x02\x02\xFB\xFC\x03\x02\x02" +
		"\x02\xFC\xFD\x03\x02\x02\x02\xFD\xFE\x07B\x02\x02\xFE)\x03\x02\x02\x02" +
		"\x19.9EX_p{\x80\x90\x93\x9A\xA1\xA6\xB3\xBA\xC7\xD7\xDE\xE2\xE7\xF0\xF8" +
		"\xFB";
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


export class FuncContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(WJSCParser.IDENTIFIER, 0); }
	public LPAREN(): TerminalNode { return this.getToken(WJSCParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(WJSCParser.RPAREN, 0); }
	public IS(): TerminalNode { return this.getToken(WJSCParser.IS, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public END(): TerminalNode { return this.getToken(WJSCParser.END, 0); }
	public paramList(): ParamListContext | undefined {
		return this.tryGetRuleContext(0, ParamListContext);
	}
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
	public READ(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.READ, 0); }
	public assignLhs(): AssignLhsContext | undefined {
		return this.tryGetRuleContext(0, AssignLhsContext);
	}
	public STDLIB_FUNCTIONS(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.STDLIB_FUNCTIONS, 0); }
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
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.IDENTIFIER, 0); }
	public ASSIGNMENT(): TerminalNode { return this.getToken(WJSCParser.ASSIGNMENT, 0); }
	public assignRhs(): AssignRhsContext {
		return this.getRuleContext(0, AssignRhsContext);
	}
	public assignLhs(): AssignLhsContext | undefined {
		return this.tryGetRuleContext(0, AssignLhsContext);
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
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public BINARY_OPERATOR(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.BINARY_OPERATOR, 0); }
	public arrayElement(): ArrayElementContext | undefined {
		return this.tryGetRuleContext(0, ArrayElementContext);
	}
	public UNARY_OPERATOR(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.UNARY_OPERATOR, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.RPAREN, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.IDENTIFIER, 0); }
	public integerLiteral(): IntegerLiteralContext | undefined {
		return this.tryGetRuleContext(0, IntegerLiteralContext);
	}
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
	public INTEGER_SIGN(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.INTEGER_SIGN, 0); }
	public DIGIT(): TerminalNode[];
	public DIGIT(i: number): TerminalNode;
	public DIGIT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WJSCParser.DIGIT);
		} else {
			return this.getToken(WJSCParser.DIGIT, i);
		}
	}
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


