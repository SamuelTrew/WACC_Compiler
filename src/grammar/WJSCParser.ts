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
	public static readonly COMMENT = 1;
	public static readonly EOL = 2;
	public static readonly WHITESPACE = 3;
	public static readonly PROGRAM_KEYWORDS = 4;
	public static readonly BEGIN = 5;
	public static readonly END = 6;
	public static readonly IS = 7;
	public static readonly STATEMENT_KEYWORDS = 8;
	public static readonly STDLIB_FUNCTIONS = 9;
	public static readonly WSKIP = 10;
	public static readonly READ = 11;
	public static readonly FREE = 12;
	public static readonly RETURN = 13;
	public static readonly EXIT = 14;
	public static readonly PRINT = 15;
	public static readonly PRINTLN = 16;
	public static readonly CONDITIONAL_KEYWORDS = 17;
	public static readonly IF = 18;
	public static readonly THEN = 19;
	public static readonly ELSE = 20;
	public static readonly FI = 21;
	public static readonly WHILE = 22;
	public static readonly DO = 23;
	public static readonly DONE = 24;
	public static readonly CALL = 25;
	public static readonly FIRST = 26;
	public static readonly SECOND = 27;
	public static readonly UNARY_OPERATOR = 28;
	public static readonly LOGICAL_NEGATION = 29;
	public static readonly ARITHMETIC_NEGATION = 30;
	public static readonly LENGTH = 31;
	public static readonly ORDER_OF = 32;
	public static readonly CHARACTER_OF = 33;
	public static readonly BINARY_OPERATOR = 34;
	public static readonly MULTIPLY = 35;
	public static readonly DIVIDE = 36;
	public static readonly MODULO = 37;
	public static readonly PLUS = 38;
	public static readonly MINUS = 39;
	public static readonly GREATER_THAN = 40;
	public static readonly GREATER_EQUAL = 41;
	public static readonly LESS_THAN = 42;
	public static readonly LESS_EQUAL = 43;
	public static readonly EQUALS = 44;
	public static readonly STRICT_EQUALS = 45;
	public static readonly NEQUALS = 46;
	public static readonly NSTRICT_EQUALS = 47;
	public static readonly LOGICAL_AND = 48;
	public static readonly LOGICAL_OR = 49;
	public static readonly ASSIGNMENT = 50;
	public static readonly NEW_PAIR = 51;
	public static readonly IDENTIFIER = 52;
	public static readonly INTEGER_LITERAL = 53;
	public static readonly DIGIT = 54;
	public static readonly INTEGER_SIGN = 55;
	public static readonly BOOLEAN_LITERAL = 56;
	public static readonly TRUTH = 57;
	public static readonly FALSITY = 58;
	public static readonly CHARACTER_LITERAL = 59;
	public static readonly PAIR_LITERAL = 60;
	public static readonly STRING_LITERAL = 61;
	public static readonly INTEGER = 62;
	public static readonly BOOLEAN = 63;
	public static readonly CHARACTER = 64;
	public static readonly STRING = 65;
	public static readonly PAIR = 66;
	public static readonly LPAREN = 67;
	public static readonly RPAREN = 68;
	public static readonly LBRACK = 69;
	public static readonly RBRACK = 70;
	public static readonly COMMA = 71;
	public static readonly SEMICOLON = 72;
	public static readonly APOS = 73;
	public static readonly DBLQ = 74;
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
	public static readonly RULE_arrayElement = 17;
	public static readonly RULE_arrayLiteral = 18;
	public static readonly RULE_comment = 19;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "func", "paramList", "param", "statement", "conditionalBlocks", 
		"assignment", "assignLhs", "assignRhs", "argList", "pairElement", "type", 
		"baseType", "arrayType", "pairType", "pairElementType", "expression", 
		"arrayElement", "arrayLiteral", "comment",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'#'", undefined, undefined, undefined, "'begin'", "'end'", 
		"'is'", undefined, undefined, "'skip'", "'read'", "'free'", "'return'", 
		"'exit'", "'print'", "'println'", undefined, "'if'", "'then'", "'else'", 
		"'fi'", "'while'", "'do'", "'done'", "'call'", "'fst'", "'snd'", undefined, 
		"'!'", undefined, "'len'", "'ord'", "'chr'", undefined, "'*'", "'/'", 
		"'%'", "'+'", "'-'", "'>'", "'>='", "'<'", "'<='", "'=='", "'==='", "'!='", 
		"'!=='", "'&&'", "'||'", "'='", "'newpair'", undefined, undefined, undefined, 
		undefined, undefined, "'true'", "'false'", undefined, "'null'", undefined, 
		"'int'", "'bool'", "'char'", "'string'", "'pair'", "'('", "')'", "'['", 
		"']'", "','", "';'", "'''", "'\"'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "COMMENT", "EOL", "WHITESPACE", "PROGRAM_KEYWORDS", "BEGIN", 
		"END", "IS", "STATEMENT_KEYWORDS", "STDLIB_FUNCTIONS", "WSKIP", "READ", 
		"FREE", "RETURN", "EXIT", "PRINT", "PRINTLN", "CONDITIONAL_KEYWORDS", 
		"IF", "THEN", "ELSE", "FI", "WHILE", "DO", "DONE", "CALL", "FIRST", "SECOND", 
		"UNARY_OPERATOR", "LOGICAL_NEGATION", "ARITHMETIC_NEGATION", "LENGTH", 
		"ORDER_OF", "CHARACTER_OF", "BINARY_OPERATOR", "MULTIPLY", "DIVIDE", "MODULO", 
		"PLUS", "MINUS", "GREATER_THAN", "GREATER_EQUAL", "LESS_THAN", "LESS_EQUAL", 
		"EQUALS", "STRICT_EQUALS", "NEQUALS", "NSTRICT_EQUALS", "LOGICAL_AND", 
		"LOGICAL_OR", "ASSIGNMENT", "NEW_PAIR", "IDENTIFIER", "INTEGER_LITERAL", 
		"DIGIT", "INTEGER_SIGN", "BOOLEAN_LITERAL", "TRUTH", "FALSITY", "CHARACTER_LITERAL", 
		"PAIR_LITERAL", "STRING_LITERAL", "INTEGER", "BOOLEAN", "CHARACTER", "STRING", 
		"PAIR", "LPAREN", "RPAREN", "LBRACK", "RBRACK", "COMMA", "SEMICOLON", 
		"APOS", "DBLQ",
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
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 40;
			this.match(WJSCParser.BEGIN);
			this.state = 44;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (WJSCParser.INTEGER - 62)) | (1 << (WJSCParser.BOOLEAN - 62)) | (1 << (WJSCParser.CHARACTER - 62)) | (1 << (WJSCParser.STRING - 62)) | (1 << (WJSCParser.PAIR - 62)))) !== 0)) {
				{
				{
				this.state = 41;
				this.func();
				}
				}
				this.state = 46;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 47;
			this.statement(0);
			this.state = 48;
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
	public func(): FuncContext {
		let _localctx: FuncContext = new FuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, WJSCParser.RULE_func);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 50;
			this.type();
			this.state = 51;
			this.match(WJSCParser.IDENTIFIER);
			this.state = 52;
			this.match(WJSCParser.LPAREN);
			this.state = 54;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (WJSCParser.INTEGER - 62)) | (1 << (WJSCParser.BOOLEAN - 62)) | (1 << (WJSCParser.CHARACTER - 62)) | (1 << (WJSCParser.STRING - 62)) | (1 << (WJSCParser.PAIR - 62)))) !== 0)) {
				{
				this.state = 53;
				this.paramList();
				}
			}

			this.state = 56;
			this.match(WJSCParser.RPAREN);
			this.state = 57;
			this.match(WJSCParser.IS);
			this.state = 58;
			this.statement(0);
			this.state = 59;
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
			this.state = 61;
			this.param();
			this.state = 66;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === WJSCParser.COMMA) {
				{
				{
				this.state = 62;
				this.match(WJSCParser.COMMA);
				this.state = 63;
				this.param();
				}
				}
				this.state = 68;
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
			this.state = 69;
			this.type();
			this.state = 70;
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
			this.state = 83;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WJSCParser.WSKIP:
				{
				this.state = 73;
				this.match(WJSCParser.WSKIP);
				}
				break;
			case WJSCParser.READ:
				{
				this.state = 74;
				this.match(WJSCParser.READ);
				this.state = 75;
				this.assignLhs();
				}
				break;
			case WJSCParser.STDLIB_FUNCTIONS:
				{
				this.state = 76;
				this.match(WJSCParser.STDLIB_FUNCTIONS);
				this.state = 77;
				this.expression(0);
				}
				break;
			case WJSCParser.IF:
			case WJSCParser.WHILE:
				{
				this.state = 78;
				this.conditionalBlocks();
				}
				break;
			case WJSCParser.BEGIN:
				{
				this.state = 79;
				this.match(WJSCParser.BEGIN);
				this.state = 80;
				this.statement(0);
				this.state = 81;
				this.match(WJSCParser.END);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 90;
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
					this.state = 85;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 86;
					this.match(WJSCParser.SEMICOLON);
					this.state = 87;
					this.statement(2);
					}
					}
				}
				this.state = 92;
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
			this.state = 107;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WJSCParser.IF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 93;
				this.match(WJSCParser.IF);
				this.state = 94;
				this.expression(0);
				this.state = 95;
				this.match(WJSCParser.THEN);
				this.state = 96;
				this.statement(0);
				this.state = 97;
				this.match(WJSCParser.ELSE);
				this.state = 98;
				this.statement(0);
				this.state = 99;
				this.match(WJSCParser.FI);
				}
				break;
			case WJSCParser.WHILE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 101;
				this.match(WJSCParser.WHILE);
				this.state = 102;
				this.expression(0);
				this.state = 103;
				this.match(WJSCParser.DO);
				this.state = 104;
				this.statement(0);
				this.state = 105;
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
			this.state = 117;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WJSCParser.INTEGER:
			case WJSCParser.BOOLEAN:
			case WJSCParser.CHARACTER:
			case WJSCParser.STRING:
			case WJSCParser.PAIR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 109;
				this.type();
				this.state = 110;
				this.match(WJSCParser.IDENTIFIER);
				this.state = 111;
				this.match(WJSCParser.ASSIGNMENT);
				this.state = 112;
				this.assignRhs();
				}
				break;
			case WJSCParser.FIRST:
			case WJSCParser.SECOND:
			case WJSCParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 114;
				this.assignLhs();
				this.state = 115;
				this.match(WJSCParser.ASSIGNMENT);
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
			this.state = 122;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 119;
				this.match(WJSCParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 120;
				this.arrayElement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 121;
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
			this.state = 141;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WJSCParser.UNARY_OPERATOR:
			case WJSCParser.IDENTIFIER:
			case WJSCParser.INTEGER_LITERAL:
			case WJSCParser.BOOLEAN_LITERAL:
			case WJSCParser.CHARACTER_LITERAL:
			case WJSCParser.PAIR_LITERAL:
			case WJSCParser.STRING_LITERAL:
			case WJSCParser.LPAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 124;
				this.expression(0);
				}
				break;
			case WJSCParser.LBRACK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 125;
				this.arrayLiteral();
				}
				break;
			case WJSCParser.NEW_PAIR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 126;
				this.match(WJSCParser.NEW_PAIR);
				this.state = 127;
				this.match(WJSCParser.LPAREN);
				this.state = 128;
				this.expression(0);
				this.state = 129;
				this.match(WJSCParser.COMMA);
				this.state = 130;
				this.expression(0);
				this.state = 131;
				this.match(WJSCParser.RPAREN);
				}
				break;
			case WJSCParser.FIRST:
			case WJSCParser.SECOND:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 133;
				this.pairElement();
				}
				break;
			case WJSCParser.CALL:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 134;
				this.match(WJSCParser.CALL);
				this.state = 135;
				this.match(WJSCParser.IDENTIFIER);
				this.state = 136;
				this.match(WJSCParser.LPAREN);
				this.state = 138;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === WJSCParser.UNARY_OPERATOR || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (WJSCParser.IDENTIFIER - 52)) | (1 << (WJSCParser.INTEGER_LITERAL - 52)) | (1 << (WJSCParser.BOOLEAN_LITERAL - 52)) | (1 << (WJSCParser.CHARACTER_LITERAL - 52)) | (1 << (WJSCParser.PAIR_LITERAL - 52)) | (1 << (WJSCParser.STRING_LITERAL - 52)) | (1 << (WJSCParser.LPAREN - 52)))) !== 0)) {
					{
					this.state = 137;
					this.argList();
					}
				}

				this.state = 140;
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
			this.state = 143;
			this.expression(0);
			this.state = 148;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === WJSCParser.COMMA) {
				{
				{
				this.state = 144;
				this.match(WJSCParser.COMMA);
				this.state = 145;
				this.expression(0);
				}
				}
				this.state = 150;
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
			this.state = 155;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WJSCParser.FIRST:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 151;
				this.match(WJSCParser.FIRST);
				this.state = 152;
				this.expression(0);
				}
				break;
			case WJSCParser.SECOND:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 153;
				this.match(WJSCParser.SECOND);
				this.state = 154;
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
			this.state = 160;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 157;
				this.baseType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 158;
				this.arrayType(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 159;
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
			this.state = 162;
			_la = this._input.LA(1);
			if (!(((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (WJSCParser.INTEGER - 62)) | (1 << (WJSCParser.BOOLEAN - 62)) | (1 << (WJSCParser.CHARACTER - 62)) | (1 << (WJSCParser.STRING - 62)))) !== 0))) {
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
			this.state = 173;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WJSCParser.INTEGER:
			case WJSCParser.BOOLEAN:
			case WJSCParser.CHARACTER:
			case WJSCParser.STRING:
				{
				this.state = 165;
				this.baseType();
				this.state = 166;
				this.match(WJSCParser.LBRACK);
				this.state = 167;
				this.match(WJSCParser.RBRACK);
				}
				break;
			case WJSCParser.PAIR:
				{
				this.state = 169;
				this.pairType();
				this.state = 170;
				this.match(WJSCParser.LBRACK);
				this.state = 171;
				this.match(WJSCParser.RBRACK);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 180;
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
					this.state = 175;
					if (!(this.precpred(this._ctx, 2))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
					}
					this.state = 176;
					this.match(WJSCParser.LBRACK);
					this.state = 177;
					this.match(WJSCParser.RBRACK);
					}
					}
				}
				this.state = 182;
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
			this.state = 183;
			this.match(WJSCParser.PAIR);
			this.state = 184;
			this.match(WJSCParser.LPAREN);
			this.state = 185;
			this.pairElementType();
			this.state = 186;
			this.match(WJSCParser.COMMA);
			this.state = 187;
			this.pairElementType();
			this.state = 188;
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
			this.state = 193;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 190;
				this.baseType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 191;
				this.arrayType(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 192;
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
			this.state = 209;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 196;
				this.match(WJSCParser.INTEGER_LITERAL);
				}
				break;

			case 2:
				{
				this.state = 197;
				this.match(WJSCParser.BOOLEAN_LITERAL);
				}
				break;

			case 3:
				{
				this.state = 198;
				this.match(WJSCParser.CHARACTER_LITERAL);
				}
				break;

			case 4:
				{
				this.state = 199;
				this.match(WJSCParser.STRING_LITERAL);
				}
				break;

			case 5:
				{
				this.state = 200;
				this.match(WJSCParser.PAIR_LITERAL);
				}
				break;

			case 6:
				{
				this.state = 201;
				this.match(WJSCParser.IDENTIFIER);
				}
				break;

			case 7:
				{
				this.state = 202;
				this.arrayElement();
				}
				break;

			case 8:
				{
				this.state = 203;
				this.match(WJSCParser.UNARY_OPERATOR);
				this.state = 204;
				this.expression(3);
				}
				break;

			case 9:
				{
				this.state = 205;
				this.match(WJSCParser.LPAREN);
				this.state = 206;
				this.expression(0);
				this.state = 207;
				this.match(WJSCParser.RPAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 216;
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
					this.state = 211;
					if (!(this.precpred(this._ctx, 2))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
					}
					this.state = 212;
					this.match(WJSCParser.BINARY_OPERATOR);
					this.state = 213;
					this.expression(3);
					}
					}
				}
				this.state = 218;
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
	public arrayElement(): ArrayElementContext {
		let _localctx: ArrayElementContext = new ArrayElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, WJSCParser.RULE_arrayElement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 219;
			this.match(WJSCParser.IDENTIFIER);
			this.state = 224;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 220;
					this.match(WJSCParser.LBRACK);
					this.state = 221;
					this.expression(0);
					this.state = 222;
					this.match(WJSCParser.RBRACK);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 226;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
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
		this.enterRule(_localctx, 36, WJSCParser.RULE_arrayLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 228;
			this.match(WJSCParser.LBRACK);
			this.state = 237;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === WJSCParser.UNARY_OPERATOR || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (WJSCParser.IDENTIFIER - 52)) | (1 << (WJSCParser.INTEGER_LITERAL - 52)) | (1 << (WJSCParser.BOOLEAN_LITERAL - 52)) | (1 << (WJSCParser.CHARACTER_LITERAL - 52)) | (1 << (WJSCParser.PAIR_LITERAL - 52)) | (1 << (WJSCParser.STRING_LITERAL - 52)) | (1 << (WJSCParser.LPAREN - 52)))) !== 0)) {
				{
				this.state = 229;
				this.expression(0);
				this.state = 234;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === WJSCParser.COMMA) {
					{
					{
					this.state = 230;
					this.match(WJSCParser.COMMA);
					this.state = 231;
					this.expression(0);
					}
					}
					this.state = 236;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 239;
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
	public comment(): CommentContext {
		let _localctx: CommentContext = new CommentContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, WJSCParser.RULE_comment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 241;
			this.match(WJSCParser.COMMENT);
			this.state = 245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << WJSCParser.COMMENT) | (1 << WJSCParser.WHITESPACE) | (1 << WJSCParser.PROGRAM_KEYWORDS) | (1 << WJSCParser.BEGIN) | (1 << WJSCParser.END) | (1 << WJSCParser.IS) | (1 << WJSCParser.STATEMENT_KEYWORDS) | (1 << WJSCParser.STDLIB_FUNCTIONS) | (1 << WJSCParser.WSKIP) | (1 << WJSCParser.READ) | (1 << WJSCParser.FREE) | (1 << WJSCParser.RETURN) | (1 << WJSCParser.EXIT) | (1 << WJSCParser.PRINT) | (1 << WJSCParser.PRINTLN) | (1 << WJSCParser.CONDITIONAL_KEYWORDS) | (1 << WJSCParser.IF) | (1 << WJSCParser.THEN) | (1 << WJSCParser.ELSE) | (1 << WJSCParser.FI) | (1 << WJSCParser.WHILE) | (1 << WJSCParser.DO) | (1 << WJSCParser.DONE) | (1 << WJSCParser.CALL) | (1 << WJSCParser.FIRST) | (1 << WJSCParser.SECOND) | (1 << WJSCParser.UNARY_OPERATOR) | (1 << WJSCParser.LOGICAL_NEGATION) | (1 << WJSCParser.ARITHMETIC_NEGATION) | (1 << WJSCParser.LENGTH))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (WJSCParser.ORDER_OF - 32)) | (1 << (WJSCParser.CHARACTER_OF - 32)) | (1 << (WJSCParser.BINARY_OPERATOR - 32)) | (1 << (WJSCParser.MULTIPLY - 32)) | (1 << (WJSCParser.DIVIDE - 32)) | (1 << (WJSCParser.MODULO - 32)) | (1 << (WJSCParser.PLUS - 32)) | (1 << (WJSCParser.MINUS - 32)) | (1 << (WJSCParser.GREATER_THAN - 32)) | (1 << (WJSCParser.GREATER_EQUAL - 32)) | (1 << (WJSCParser.LESS_THAN - 32)) | (1 << (WJSCParser.LESS_EQUAL - 32)) | (1 << (WJSCParser.EQUALS - 32)) | (1 << (WJSCParser.STRICT_EQUALS - 32)) | (1 << (WJSCParser.NEQUALS - 32)) | (1 << (WJSCParser.NSTRICT_EQUALS - 32)) | (1 << (WJSCParser.LOGICAL_AND - 32)) | (1 << (WJSCParser.LOGICAL_OR - 32)) | (1 << (WJSCParser.ASSIGNMENT - 32)) | (1 << (WJSCParser.NEW_PAIR - 32)) | (1 << (WJSCParser.IDENTIFIER - 32)) | (1 << (WJSCParser.INTEGER_LITERAL - 32)) | (1 << (WJSCParser.DIGIT - 32)) | (1 << (WJSCParser.INTEGER_SIGN - 32)) | (1 << (WJSCParser.BOOLEAN_LITERAL - 32)) | (1 << (WJSCParser.TRUTH - 32)) | (1 << (WJSCParser.FALSITY - 32)) | (1 << (WJSCParser.CHARACTER_LITERAL - 32)) | (1 << (WJSCParser.PAIR_LITERAL - 32)) | (1 << (WJSCParser.STRING_LITERAL - 32)) | (1 << (WJSCParser.INTEGER - 32)) | (1 << (WJSCParser.BOOLEAN - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (WJSCParser.CHARACTER - 64)) | (1 << (WJSCParser.STRING - 64)) | (1 << (WJSCParser.PAIR - 64)) | (1 << (WJSCParser.LPAREN - 64)) | (1 << (WJSCParser.RPAREN - 64)) | (1 << (WJSCParser.LBRACK - 64)) | (1 << (WJSCParser.RBRACK - 64)) | (1 << (WJSCParser.COMMA - 64)) | (1 << (WJSCParser.SEMICOLON - 64)) | (1 << (WJSCParser.APOS - 64)) | (1 << (WJSCParser.DBLQ - 64)))) !== 0)) {
				{
				{
				this.state = 242;
				_la = this._input.LA(1);
				if (_la <= 0 || (_la === WJSCParser.EOL)) {
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
				this.state = 247;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 248;
			this.match(WJSCParser.EOL);
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
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03L\xFD\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x03\x02\x03\x02\x07\x02-\n\x02" +
		"\f\x02\x0E\x020\v\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x05\x039\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04" +
		"\x03\x04\x03\x04\x07\x04C\n\x04\f\x04\x0E\x04F\v\x04\x03\x05\x03\x05\x03" +
		"\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x05\x06V\n\x06\x03\x06\x03\x06\x03\x06\x07\x06[\n" +
		"\x06\f\x06\x0E\x06^\v\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05" +
		"\x07n\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\bx\n\b" +
		"\x03\t\x03\t\x03\t\x05\t}\n\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\x8D\n\n\x03\n\x05\n" +
		"\x90\n\n\x03\v\x03\v\x03\v\x07\v\x95\n\v\f\v\x0E\v\x98\v\v\x03\f\x03\f" +
		"\x03\f\x03\f\x05\f\x9E\n\f\x03\r\x03\r\x03\r\x05\r\xA3\n\r\x03\x0E\x03" +
		"\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x05\x0F\xB0\n\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\xB5\n\x0F\f\x0F" +
		"\x0E\x0F\xB8\v\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x11\x03\x11\x03\x11\x05\x11\xC4\n\x11\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x05\x12\xD4\n\x12\x03\x12\x03\x12\x03\x12\x07\x12\xD9" +
		"\n\x12\f\x12\x0E\x12\xDC\v\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x06\x13\xE3\n\x13\r\x13\x0E\x13\xE4\x03\x14\x03\x14\x03\x14\x03\x14\x07" +
		"\x14\xEB\n\x14\f\x14\x0E\x14\xEE\v\x14\x05\x14\xF0\n\x14\x03\x14\x03\x14" +
		"\x03\x15\x03\x15\x07\x15\xF6\n\x15\f\x15\x0E\x15\xF9\v\x15\x03\x15\x03" +
		"\x15\x03\x15\x02\x02\x05\n\x1C\"\x16\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
		"\x1E\x02 \x02\"\x02$\x02&\x02(\x02\x02\x04\x03\x02@C\x03\x02\x04\x04\u010E" +
		"\x02*\x03\x02\x02\x02\x044\x03\x02\x02\x02\x06?\x03\x02\x02\x02\bG\x03" +
		"\x02\x02\x02\nU\x03\x02\x02\x02\fm\x03\x02\x02\x02\x0Ew\x03\x02\x02\x02" +
		"\x10|\x03\x02\x02\x02\x12\x8F\x03\x02\x02\x02\x14\x91\x03\x02\x02\x02" +
		"\x16\x9D\x03\x02\x02\x02\x18\xA2\x03\x02\x02\x02\x1A\xA4\x03\x02\x02\x02" +
		"\x1C\xAF\x03\x02\x02\x02\x1E\xB9\x03\x02\x02\x02 \xC3\x03\x02\x02\x02" +
		"\"\xD3\x03\x02\x02\x02$\xDD\x03\x02\x02\x02&\xE6\x03\x02\x02\x02(\xF3" +
		"\x03\x02\x02\x02*.\x07\x07\x02\x02+-\x05\x04\x03\x02,+\x03\x02\x02\x02" +
		"-0\x03\x02\x02\x02.,\x03\x02\x02\x02./\x03\x02\x02\x02/1\x03\x02\x02\x02" +
		"0.\x03\x02\x02\x0212\x05\n\x06\x0223\x07\b\x02\x023\x03\x03\x02\x02\x02" +
		"45\x05\x18\r\x0256\x076\x02\x0268\x07E\x02\x0279\x05\x06\x04\x0287\x03" +
		"\x02\x02\x0289\x03\x02\x02\x029:\x03\x02\x02\x02:;\x07F\x02\x02;<\x07" +
		"\t\x02\x02<=\x05\n\x06\x02=>\x07\b\x02\x02>\x05\x03\x02\x02\x02?D\x05" +
		"\b\x05\x02@A\x07I\x02\x02AC\x05\b\x05\x02B@\x03\x02\x02\x02CF\x03\x02" +
		"\x02\x02DB\x03\x02\x02\x02DE\x03\x02\x02\x02E\x07\x03\x02\x02\x02FD\x03" +
		"\x02\x02\x02GH\x05\x18\r\x02HI\x076\x02\x02I\t\x03\x02\x02\x02JK\b\x06" +
		"\x01\x02KV\x07\f\x02\x02LM\x07\r\x02\x02MV\x05\x10\t\x02NO\x07\v\x02\x02" +
		"OV\x05\"\x12\x02PV\x05\f\x07\x02QR\x07\x07\x02\x02RS\x05\n\x06\x02ST\x07" +
		"\b\x02\x02TV\x03\x02\x02\x02UJ\x03\x02\x02\x02UL\x03\x02\x02\x02UN\x03" +
		"\x02\x02\x02UP\x03\x02\x02\x02UQ\x03\x02\x02\x02V\\\x03\x02\x02\x02WX" +
		"\f\x03\x02\x02XY\x07J\x02\x02Y[\x05\n\x06\x04ZW\x03\x02\x02\x02[^\x03" +
		"\x02\x02\x02\\Z\x03\x02\x02\x02\\]\x03\x02\x02\x02]\v\x03\x02\x02\x02" +
		"^\\\x03\x02\x02\x02_`\x07\x14\x02\x02`a\x05\"\x12\x02ab\x07\x15\x02\x02" +
		"bc\x05\n\x06\x02cd\x07\x16\x02\x02de\x05\n\x06\x02ef\x07\x17\x02\x02f" +
		"n\x03\x02\x02\x02gh\x07\x18\x02\x02hi\x05\"\x12\x02ij\x07\x19\x02\x02" +
		"jk\x05\n\x06\x02kl\x07\x1A\x02\x02ln\x03\x02\x02\x02m_\x03\x02\x02\x02" +
		"mg\x03\x02\x02\x02n\r\x03\x02\x02\x02op\x05\x18\r\x02pq\x076\x02\x02q" +
		"r\x074\x02\x02rs\x05\x12\n\x02sx\x03\x02\x02\x02tu\x05\x10\t\x02uv\x07" +
		"4\x02\x02vx\x03\x02\x02\x02wo\x03\x02\x02\x02wt\x03\x02\x02\x02x\x0F\x03" +
		"\x02\x02\x02y}\x076\x02\x02z}\x05$\x13\x02{}\x05\x16\f\x02|y\x03\x02\x02" +
		"\x02|z\x03\x02\x02\x02|{\x03\x02\x02\x02}\x11\x03\x02\x02\x02~\x90\x05" +
		"\"\x12\x02\x7F\x90\x05&\x14\x02\x80\x81\x075\x02\x02\x81\x82\x07E\x02" +
		"\x02\x82\x83\x05\"\x12\x02\x83\x84\x07I\x02\x02\x84\x85\x05\"\x12\x02" +
		"\x85\x86\x07F\x02\x02\x86\x90\x03\x02\x02\x02\x87\x90\x05\x16\f\x02\x88" +
		"\x89\x07\x1B\x02\x02\x89\x8A\x076\x02\x02\x8A\x8C\x07E\x02\x02\x8B\x8D" +
		"\x05\x14\v\x02\x8C\x8B\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x8E" +
		"\x03\x02\x02\x02\x8E\x90\x07F\x02\x02\x8F~\x03\x02\x02\x02\x8F\x7F\x03" +
		"\x02\x02\x02\x8F\x80\x03\x02\x02\x02\x8F\x87\x03\x02\x02\x02\x8F\x88\x03" +
		"\x02\x02\x02\x90\x13\x03\x02\x02\x02\x91\x96\x05\"\x12\x02\x92\x93\x07" +
		"I\x02\x02\x93\x95\x05\"\x12\x02\x94\x92\x03\x02\x02\x02\x95\x98\x03\x02" +
		"\x02\x02\x96\x94\x03\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97\x15\x03\x02" +
		"\x02\x02\x98\x96\x03\x02\x02\x02\x99\x9A\x07\x1C\x02\x02\x9A\x9E\x05\"" +
		"\x12\x02\x9B\x9C\x07\x1D\x02\x02\x9C\x9E\x05\"\x12\x02\x9D\x99\x03\x02" +
		"\x02\x02\x9D\x9B\x03\x02\x02\x02\x9E\x17\x03\x02\x02\x02\x9F\xA3\x05\x1A" +
		"\x0E\x02\xA0\xA3\x05\x1C\x0F\x02\xA1\xA3\x05\x1E\x10\x02\xA2\x9F\x03\x02" +
		"\x02\x02\xA2\xA0\x03\x02\x02\x02\xA2\xA1\x03\x02\x02\x02\xA3\x19\x03\x02" +
		"\x02\x02\xA4\xA5\t\x02\x02\x02\xA5\x1B\x03\x02\x02\x02\xA6\xA7\b\x0F\x01" +
		"\x02\xA7\xA8\x05\x1A\x0E\x02\xA8\xA9\x07G\x02\x02\xA9\xAA\x07H\x02\x02" +
		"\xAA\xB0\x03\x02\x02\x02\xAB\xAC\x05\x1E\x10\x02\xAC\xAD\x07G\x02\x02" +
		"\xAD\xAE\x07H\x02\x02\xAE\xB0\x03\x02\x02\x02\xAF\xA6\x03\x02\x02\x02" +
		"\xAF\xAB\x03\x02\x02\x02\xB0\xB6\x03\x02\x02\x02\xB1\xB2\f\x04\x02\x02" +
		"\xB2\xB3\x07G\x02\x02\xB3\xB5\x07H\x02\x02\xB4\xB1\x03\x02\x02\x02\xB5" +
		"\xB8\x03\x02\x02\x02\xB6\xB4\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7" +
		"\x1D\x03\x02\x02\x02\xB8\xB6\x03\x02\x02\x02\xB9\xBA\x07D\x02\x02\xBA" +
		"\xBB\x07E\x02\x02\xBB\xBC\x05 \x11\x02\xBC\xBD\x07I\x02\x02\xBD\xBE\x05" +
		" \x11\x02\xBE\xBF\x07F\x02\x02\xBF\x1F\x03\x02\x02\x02\xC0\xC4\x05\x1A" +
		"\x0E\x02\xC1\xC4\x05\x1C\x0F\x02\xC2\xC4\x07D\x02\x02\xC3\xC0\x03\x02" +
		"\x02\x02\xC3\xC1\x03\x02\x02\x02\xC3\xC2\x03\x02\x02\x02\xC4!\x03\x02" +
		"\x02\x02\xC5\xC6\b\x12\x01\x02\xC6\xD4\x077\x02\x02\xC7\xD4\x07:\x02\x02" +
		"\xC8\xD4\x07=\x02\x02\xC9\xD4\x07?\x02\x02\xCA\xD4\x07>\x02\x02\xCB\xD4" +
		"\x076\x02\x02\xCC\xD4\x05$\x13\x02\xCD\xCE\x07\x1E\x02\x02\xCE\xD4\x05" +
		"\"\x12\x05\xCF\xD0\x07E\x02\x02\xD0\xD1\x05\"\x12\x02\xD1\xD2\x07F\x02" +
		"\x02\xD2\xD4\x03\x02\x02\x02\xD3\xC5\x03\x02\x02\x02\xD3\xC7\x03\x02\x02" +
		"\x02\xD3\xC8\x03\x02\x02\x02\xD3\xC9\x03\x02\x02\x02\xD3\xCA\x03\x02\x02" +
		"\x02\xD3\xCB\x03\x02\x02\x02\xD3\xCC\x03\x02\x02\x02\xD3\xCD\x03\x02\x02" +
		"\x02\xD3\xCF\x03\x02\x02\x02\xD4\xDA\x03\x02\x02\x02\xD5\xD6\f\x04\x02" +
		"\x02\xD6\xD7\x07$\x02\x02\xD7\xD9\x05\"\x12\x05\xD8\xD5\x03\x02\x02\x02" +
		"\xD9\xDC\x03\x02\x02\x02\xDA\xD8\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02" +
		"\xDB#\x03\x02\x02\x02\xDC\xDA\x03\x02\x02\x02\xDD\xE2\x076\x02\x02\xDE" +
		"\xDF\x07G\x02\x02\xDF\xE0\x05\"\x12\x02\xE0\xE1\x07H\x02\x02\xE1\xE3\x03" +
		"\x02\x02\x02\xE2\xDE\x03\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xE2\x03" +
		"\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5%\x03\x02\x02\x02\xE6\xEF\x07" +
		"G\x02\x02\xE7\xEC\x05\"\x12\x02\xE8\xE9\x07I\x02\x02\xE9\xEB\x05\"\x12" +
		"\x02\xEA\xE8\x03\x02\x02\x02\xEB\xEE\x03\x02\x02\x02\xEC\xEA\x03\x02\x02" +
		"\x02\xEC\xED\x03\x02\x02\x02\xED\xF0\x03\x02\x02\x02\xEE\xEC\x03\x02\x02" +
		"\x02\xEF\xE7\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\xF1\x03\x02\x02" +
		"\x02\xF1\xF2\x07H\x02\x02\xF2\'\x03\x02\x02\x02\xF3\xF7\x07\x03\x02\x02" +
		"\xF4\xF6\n\x03\x02\x02\xF5\xF4\x03\x02\x02\x02\xF6\xF9\x03\x02\x02\x02" +
		"\xF7\xF5\x03\x02\x02\x02\xF7\xF8\x03\x02\x02\x02\xF8\xFA\x03\x02\x02\x02" +
		"\xF9\xF7\x03\x02\x02\x02\xFA\xFB\x07\x04\x02\x02\xFB)\x03\x02\x02\x02" +
		"\x18.8DU\\mw|\x8C\x8F\x96\x9D\xA2\xAF\xB6\xC3\xD3\xDA\xE4\xEC\xEF\xF7";
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
	public READ(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.READ, 0); }
	public assignLhs(): AssignLhsContext | undefined {
		return this.tryGetRuleContext(0, AssignLhsContext);
	}
	public STDLIB_FUNCTIONS(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.STDLIB_FUNCTIONS, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public conditionalBlocks(): ConditionalBlocksContext | undefined {
		return this.tryGetRuleContext(0, ConditionalBlocksContext);
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
	public assignRhs(): AssignRhsContext | undefined {
		return this.tryGetRuleContext(0, AssignRhsContext);
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
	public INTEGER_LITERAL(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.INTEGER_LITERAL, 0); }
	public BOOLEAN_LITERAL(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.BOOLEAN_LITERAL, 0); }
	public CHARACTER_LITERAL(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.CHARACTER_LITERAL, 0); }
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.STRING_LITERAL, 0); }
	public PAIR_LITERAL(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.PAIR_LITERAL, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.IDENTIFIER, 0); }
	public arrayElement(): ArrayElementContext | undefined {
		return this.tryGetRuleContext(0, ArrayElementContext);
	}
	public UNARY_OPERATOR(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.UNARY_OPERATOR, 0); }
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
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.RPAREN, 0); }
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


export class CommentContext extends ParserRuleContext {
	public EOL(): TerminalNode[];
	public EOL(i: number): TerminalNode;
	public EOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WJSCParser.EOL);
		} else {
			return this.getToken(WJSCParser.EOL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WJSCParser.RULE_comment; }
	// @Override
	public enterRule(listener: WJSCParserListener): void {
		if (listener.enterComment) {
			listener.enterComment(this);
		}
	}
	// @Override
	public exitRule(listener: WJSCParserListener): void {
		if (listener.exitComment) {
			listener.exitComment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WJSCParserVisitor<Result>): Result {
		if (visitor.visitComment) {
			return visitor.visitComment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


