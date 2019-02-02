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
	public static readonly WSKIP = 6;
	public static readonly READ = 7;
	public static readonly FREE = 8;
	public static readonly RETURN = 9;
	public static readonly EXIT = 10;
	public static readonly PRINT = 11;
	public static readonly PRINTLN = 12;
	public static readonly IF = 13;
	public static readonly THEN = 14;
	public static readonly ELSE = 15;
	public static readonly FI = 16;
	public static readonly WHILE = 17;
	public static readonly DO = 18;
	public static readonly DONE = 19;
	public static readonly CALL = 20;
	public static readonly FIRST = 21;
	public static readonly SECOND = 22;
	public static readonly MULTIPLY = 23;
	public static readonly DIVIDE = 24;
	public static readonly MODULO = 25;
	public static readonly PLUS = 26;
	public static readonly MINUS = 27;
	public static readonly GREATER_THAN = 28;
	public static readonly GREATER_EQUAL = 29;
	public static readonly LESS_THAN = 30;
	public static readonly LESS_EQUAL = 31;
	public static readonly EQUALS = 32;
	public static readonly STRICT_EQUALS = 33;
	public static readonly NEQUALS = 34;
	public static readonly NSTRICT_EQUALS = 35;
	public static readonly LOGICAL_AND = 36;
	public static readonly LOGICAL_OR = 37;
	public static readonly ASSIGNMENT = 38;
	public static readonly LOGICAL_NEGATION = 39;
	public static readonly NEW_PAIR = 40;
	public static readonly LENGTH = 41;
	public static readonly ORDER_OF = 42;
	public static readonly CHARACTER_OF = 43;
	public static readonly DIGIT = 44;
	public static readonly BOOLEAN_LITERAL = 45;
	public static readonly TRUTH = 46;
	public static readonly FALSITY = 47;
	public static readonly CHARACTER_LITERAL = 48;
	public static readonly PAIR_LITERAL = 49;
	public static readonly STRING_LITERAL = 50;
	public static readonly INTEGER = 51;
	public static readonly BOOLEAN = 52;
	public static readonly CHARACTER = 53;
	public static readonly STRING = 54;
	public static readonly PAIR = 55;
	public static readonly LPAREN = 56;
	public static readonly RPAREN = 57;
	public static readonly LBRACK = 58;
	public static readonly RBRACK = 59;
	public static readonly COMMA = 60;
	public static readonly SEMICOLON = 61;
	public static readonly APOS = 62;
	public static readonly DBLQ = 63;
	public static readonly COMMENT = 64;
	public static readonly IDENTIFIER = 65;
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
	public static readonly RULE_binaryOperator = 20;
	public static readonly RULE_unaryOperator = 21;
	public static readonly RULE_stdlib = 22;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "func", "paramList", "param", "statement", "conditionalBlocks", 
		"assignment", "assignLhs", "assignRhs", "argList", "pairElement", "type", 
		"baseType", "arrayType", "pairType", "pairElementType", "expression", 
		"integerLiteral", "arrayElement", "arrayLiteral", "binaryOperator", "unaryOperator", 
		"stdlib",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'begin'", "'end'", "'is'", "'skip'", 
		"'read'", "'free'", "'return'", "'exit'", "'print'", "'println'", "'if'", 
		"'then'", "'else'", "'fi'", "'while'", "'do'", "'done'", "'call'", "'fst'", 
		"'snd'", "'*'", "'/'", "'%'", "'+'", "'-'", "'>'", "'>='", "'<'", "'<='", 
		"'=='", "'==='", "'!='", "'!=='", "'&&'", "'||'", "'='", "'!'", "'newpair'", 
		"'len'", "'ord'", "'chr'", undefined, undefined, "'true'", "'false'", 
		undefined, "'null'", undefined, "'int'", "'bool'", "'char'", "'string'", 
		"'pair'", "'('", "')'", "'['", "']'", "','", "';'", "'''", "'\"'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "EOL", "WHITESPACE", "BEGIN", "END", "IS", "WSKIP", "READ", 
		"FREE", "RETURN", "EXIT", "PRINT", "PRINTLN", "IF", "THEN", "ELSE", "FI", 
		"WHILE", "DO", "DONE", "CALL", "FIRST", "SECOND", "MULTIPLY", "DIVIDE", 
		"MODULO", "PLUS", "MINUS", "GREATER_THAN", "GREATER_EQUAL", "LESS_THAN", 
		"LESS_EQUAL", "EQUALS", "STRICT_EQUALS", "NEQUALS", "NSTRICT_EQUALS", 
		"LOGICAL_AND", "LOGICAL_OR", "ASSIGNMENT", "LOGICAL_NEGATION", "NEW_PAIR", 
		"LENGTH", "ORDER_OF", "CHARACTER_OF", "DIGIT", "BOOLEAN_LITERAL", "TRUTH", 
		"FALSITY", "CHARACTER_LITERAL", "PAIR_LITERAL", "STRING_LITERAL", "INTEGER", 
		"BOOLEAN", "CHARACTER", "STRING", "PAIR", "LPAREN", "RPAREN", "LBRACK", 
		"RBRACK", "COMMA", "SEMICOLON", "APOS", "DBLQ", "COMMENT", "IDENTIFIER",
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
			this.state = 46;
			this.match(WJSCParser.BEGIN);
			this.state = 50;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 47;
					this.func();
					}
					}
				}
				this.state = 52;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 53;
			this.statement(0);
			this.state = 54;
			this.match(WJSCParser.END);
			this.state = 55;
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
			this.state = 57;
			this.type();
			this.state = 58;
			this.match(WJSCParser.IDENTIFIER);
			this.state = 59;
			this.match(WJSCParser.LPAREN);
			this.state = 61;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (WJSCParser.INTEGER - 51)) | (1 << (WJSCParser.BOOLEAN - 51)) | (1 << (WJSCParser.CHARACTER - 51)) | (1 << (WJSCParser.STRING - 51)) | (1 << (WJSCParser.PAIR - 51)))) !== 0)) {
				{
				this.state = 60;
				this.paramList();
				}
			}

			this.state = 63;
			this.match(WJSCParser.RPAREN);
			this.state = 64;
			this.match(WJSCParser.IS);
			this.state = 65;
			this.statement(0);
			this.state = 66;
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
			this.state = 68;
			this.param();
			this.state = 73;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === WJSCParser.COMMA) {
				{
				{
				this.state = 69;
				this.match(WJSCParser.COMMA);
				this.state = 70;
				this.param();
				}
				}
				this.state = 75;
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
			this.state = 76;
			this.type();
			this.state = 77;
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
			this.state = 93;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 80;
				this.match(WJSCParser.WSKIP);
				}
				break;

			case 2:
				{
				this.state = 81;
				this.conditionalBlocks();
				}
				break;

			case 3:
				{
				this.state = 82;
				this.assignment();
				}
				break;

			case 4:
				{
				this.state = 83;
				this.match(WJSCParser.READ);
				this.state = 84;
				this.assignLhs();
				}
				break;

			case 5:
				{
				this.state = 85;
				this.stdlib();
				this.state = 86;
				this.expression(0);
				}
				break;

			case 6:
				{
				this.state = 88;
				this.conditionalBlocks();
				}
				break;

			case 7:
				{
				this.state = 89;
				this.match(WJSCParser.BEGIN);
				this.state = 90;
				this.statement(0);
				this.state = 91;
				this.match(WJSCParser.END);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 100;
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
					this.state = 95;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 96;
					this.match(WJSCParser.SEMICOLON);
					this.state = 97;
					this.statement(2);
					}
					}
				}
				this.state = 102;
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
			this.state = 117;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WJSCParser.IF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 103;
				this.match(WJSCParser.IF);
				this.state = 104;
				this.expression(0);
				this.state = 105;
				this.match(WJSCParser.THEN);
				this.state = 106;
				this.statement(0);
				this.state = 107;
				this.match(WJSCParser.ELSE);
				this.state = 108;
				this.statement(0);
				this.state = 109;
				this.match(WJSCParser.FI);
				}
				break;
			case WJSCParser.WHILE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 111;
				this.match(WJSCParser.WHILE);
				this.state = 112;
				this.expression(0);
				this.state = 113;
				this.match(WJSCParser.DO);
				this.state = 114;
				this.statement(0);
				this.state = 115;
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
			this.state = 128;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WJSCParser.INTEGER:
			case WJSCParser.BOOLEAN:
			case WJSCParser.CHARACTER:
			case WJSCParser.STRING:
			case WJSCParser.PAIR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 119;
				this.type();
				this.state = 120;
				this.match(WJSCParser.IDENTIFIER);
				this.state = 121;
				this.match(WJSCParser.ASSIGNMENT);
				this.state = 122;
				this.assignRhs();
				}
				break;
			case WJSCParser.FIRST:
			case WJSCParser.SECOND:
			case WJSCParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 124;
				this.assignLhs();
				this.state = 125;
				this.match(WJSCParser.ASSIGNMENT);
				this.state = 126;
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
			this.state = 133;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 130;
				this.match(WJSCParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 131;
				this.arrayElement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 132;
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
			this.state = 152;
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
				this.state = 135;
				this.expression(0);
				}
				break;
			case WJSCParser.LBRACK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 136;
				this.arrayLiteral();
				}
				break;
			case WJSCParser.NEW_PAIR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 137;
				this.match(WJSCParser.NEW_PAIR);
				this.state = 138;
				this.match(WJSCParser.LPAREN);
				this.state = 139;
				this.expression(0);
				this.state = 140;
				this.match(WJSCParser.COMMA);
				this.state = 141;
				this.expression(0);
				this.state = 142;
				this.match(WJSCParser.RPAREN);
				}
				break;
			case WJSCParser.FIRST:
			case WJSCParser.SECOND:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 144;
				this.pairElement();
				}
				break;
			case WJSCParser.CALL:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 145;
				this.match(WJSCParser.CALL);
				this.state = 146;
				this.match(WJSCParser.IDENTIFIER);
				this.state = 147;
				this.match(WJSCParser.LPAREN);
				this.state = 149;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === WJSCParser.PLUS || _la === WJSCParser.MINUS || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (WJSCParser.LOGICAL_NEGATION - 39)) | (1 << (WJSCParser.LENGTH - 39)) | (1 << (WJSCParser.ORDER_OF - 39)) | (1 << (WJSCParser.CHARACTER_OF - 39)) | (1 << (WJSCParser.DIGIT - 39)) | (1 << (WJSCParser.BOOLEAN_LITERAL - 39)) | (1 << (WJSCParser.CHARACTER_LITERAL - 39)) | (1 << (WJSCParser.PAIR_LITERAL - 39)) | (1 << (WJSCParser.STRING_LITERAL - 39)) | (1 << (WJSCParser.LPAREN - 39)) | (1 << (WJSCParser.IDENTIFIER - 39)))) !== 0)) {
					{
					this.state = 148;
					this.argList();
					}
				}

				this.state = 151;
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
			this.state = 154;
			this.expression(0);
			this.state = 159;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === WJSCParser.COMMA) {
				{
				{
				this.state = 155;
				this.match(WJSCParser.COMMA);
				this.state = 156;
				this.expression(0);
				}
				}
				this.state = 161;
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
			this.state = 166;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WJSCParser.FIRST:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 162;
				this.match(WJSCParser.FIRST);
				this.state = 163;
				this.expression(0);
				}
				break;
			case WJSCParser.SECOND:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 164;
				this.match(WJSCParser.SECOND);
				this.state = 165;
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
			this.state = 171;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 168;
				this.baseType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 169;
				this.arrayType(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 170;
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
			this.state = 173;
			_la = this._input.LA(1);
			if (!(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (WJSCParser.INTEGER - 51)) | (1 << (WJSCParser.BOOLEAN - 51)) | (1 << (WJSCParser.CHARACTER - 51)) | (1 << (WJSCParser.STRING - 51)))) !== 0))) {
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
			this.state = 184;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WJSCParser.INTEGER:
			case WJSCParser.BOOLEAN:
			case WJSCParser.CHARACTER:
			case WJSCParser.STRING:
				{
				this.state = 176;
				this.baseType();
				this.state = 177;
				this.match(WJSCParser.LBRACK);
				this.state = 178;
				this.match(WJSCParser.RBRACK);
				}
				break;
			case WJSCParser.PAIR:
				{
				this.state = 180;
				this.pairType();
				this.state = 181;
				this.match(WJSCParser.LBRACK);
				this.state = 182;
				this.match(WJSCParser.RBRACK);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 191;
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
					this.state = 186;
					if (!(this.precpred(this._ctx, 2))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
					}
					this.state = 187;
					this.match(WJSCParser.LBRACK);
					this.state = 188;
					this.match(WJSCParser.RBRACK);
					}
					}
				}
				this.state = 193;
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
			this.state = 194;
			this.match(WJSCParser.PAIR);
			this.state = 195;
			this.match(WJSCParser.LPAREN);
			this.state = 196;
			this.pairElementType();
			this.state = 197;
			this.match(WJSCParser.COMMA);
			this.state = 198;
			this.pairElementType();
			this.state = 199;
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
			this.state = 204;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 201;
				this.baseType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 202;
				this.arrayType(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 203;
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
			this.state = 221;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 207;
				this.integerLiteral();
				}
				break;

			case 2:
				{
				this.state = 208;
				this.arrayElement();
				}
				break;

			case 3:
				{
				this.state = 209;
				this.unaryOperator();
				this.state = 210;
				this.expression(7);
				}
				break;

			case 4:
				{
				this.state = 212;
				this.match(WJSCParser.LPAREN);
				this.state = 213;
				this.expression(0);
				this.state = 214;
				this.match(WJSCParser.RPAREN);
				}
				break;

			case 5:
				{
				this.state = 216;
				this.match(WJSCParser.IDENTIFIER);
				}
				break;

			case 6:
				{
				this.state = 217;
				this.match(WJSCParser.BOOLEAN_LITERAL);
				}
				break;

			case 7:
				{
				this.state = 218;
				this.match(WJSCParser.CHARACTER_LITERAL);
				}
				break;

			case 8:
				{
				this.state = 219;
				this.match(WJSCParser.STRING_LITERAL);
				}
				break;

			case 9:
				{
				this.state = 220;
				this.match(WJSCParser.PAIR_LITERAL);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 229;
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
					this.state = 223;
					if (!(this.precpred(this._ctx, 9))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
					}
					this.state = 224;
					this.binaryOperator();
					this.state = 225;
					this.expression(10);
					}
					}
				}
				this.state = 231;
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
			this.state = 233;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === WJSCParser.PLUS || _la === WJSCParser.MINUS) {
				{
				this.state = 232;
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

			this.state = 236;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 235;
					this.match(WJSCParser.DIGIT);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 238;
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
			this.state = 240;
			this.match(WJSCParser.IDENTIFIER);
			this.state = 245;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 241;
					this.match(WJSCParser.LBRACK);
					this.state = 242;
					this.expression(0);
					this.state = 243;
					this.match(WJSCParser.RBRACK);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 247;
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
			this.state = 249;
			this.match(WJSCParser.LBRACK);
			this.state = 258;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === WJSCParser.PLUS || _la === WJSCParser.MINUS || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (WJSCParser.LOGICAL_NEGATION - 39)) | (1 << (WJSCParser.LENGTH - 39)) | (1 << (WJSCParser.ORDER_OF - 39)) | (1 << (WJSCParser.CHARACTER_OF - 39)) | (1 << (WJSCParser.DIGIT - 39)) | (1 << (WJSCParser.BOOLEAN_LITERAL - 39)) | (1 << (WJSCParser.CHARACTER_LITERAL - 39)) | (1 << (WJSCParser.PAIR_LITERAL - 39)) | (1 << (WJSCParser.STRING_LITERAL - 39)) | (1 << (WJSCParser.LPAREN - 39)) | (1 << (WJSCParser.IDENTIFIER - 39)))) !== 0)) {
				{
				this.state = 250;
				this.expression(0);
				this.state = 255;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === WJSCParser.COMMA) {
					{
					{
					this.state = 251;
					this.match(WJSCParser.COMMA);
					this.state = 252;
					this.expression(0);
					}
					}
					this.state = 257;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 260;
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
	public binaryOperator(): BinaryOperatorContext {
		let _localctx: BinaryOperatorContext = new BinaryOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, WJSCParser.RULE_binaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 262;
			_la = this._input.LA(1);
			if (!(((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & ((1 << (WJSCParser.MULTIPLY - 23)) | (1 << (WJSCParser.DIVIDE - 23)) | (1 << (WJSCParser.MODULO - 23)) | (1 << (WJSCParser.PLUS - 23)) | (1 << (WJSCParser.MINUS - 23)) | (1 << (WJSCParser.GREATER_THAN - 23)) | (1 << (WJSCParser.GREATER_EQUAL - 23)) | (1 << (WJSCParser.LESS_THAN - 23)) | (1 << (WJSCParser.LESS_EQUAL - 23)) | (1 << (WJSCParser.EQUALS - 23)) | (1 << (WJSCParser.STRICT_EQUALS - 23)) | (1 << (WJSCParser.NEQUALS - 23)) | (1 << (WJSCParser.NSTRICT_EQUALS - 23)) | (1 << (WJSCParser.LOGICAL_AND - 23)) | (1 << (WJSCParser.LOGICAL_OR - 23)))) !== 0))) {
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
	public unaryOperator(): UnaryOperatorContext {
		let _localctx: UnaryOperatorContext = new UnaryOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, WJSCParser.RULE_unaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 264;
			_la = this._input.LA(1);
			if (!(((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (WJSCParser.MINUS - 27)) | (1 << (WJSCParser.LOGICAL_NEGATION - 27)) | (1 << (WJSCParser.LENGTH - 27)) | (1 << (WJSCParser.ORDER_OF - 27)) | (1 << (WJSCParser.CHARACTER_OF - 27)))) !== 0))) {
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
		this.enterRule(_localctx, 44, WJSCParser.RULE_stdlib);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 266;
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
			return this.precpred(this._ctx, 9);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03C\u010F\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x03\x02\x03\x02\x07\x023\n\x02\f\x02\x0E\x026\v\x02\x03\x02" +
		"\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03@\n\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x07\x04" +
		"J\n\x04\f\x04\x0E\x04M\v\x04\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x05\x06`\n\x06\x03\x06\x03\x06\x03\x06\x07\x06e\n" +
		"\x06\f\x06\x0E\x06h\v\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05" +
		"\x07x\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05" +
		"\b\x83\n\b\x03\t\x03\t\x03\t\x05\t\x88\n\t\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\x98\n\n" +
		"\x03\n\x05\n\x9B\n\n\x03\v\x03\v\x03\v\x07\v\xA0\n\v\f\v\x0E\v\xA3\v\v" +
		"\x03\f\x03\f\x03\f\x03\f\x05\f\xA9\n\f\x03\r\x03\r\x03\r\x05\r\xAE\n\r" +
		"\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x05\x0F\xBB\n\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\xC0" +
		"\n\x0F\f\x0F\x0E\x0F\xC3\v\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x05\x11\xCF\n\x11\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\xE0\n\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x07\x12\xE6\n\x12\f\x12\x0E\x12\xE9\v\x12\x03\x13\x05" +
		"\x13\xEC\n\x13\x03\x13\x06\x13\xEF\n\x13\r\x13\x0E\x13\xF0\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x06\x14\xF8\n\x14\r\x14\x0E\x14\xF9\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x07\x15\u0100\n\x15\f\x15\x0E\x15\u0103\v\x15" +
		"\x05\x15\u0105\n\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03" +
		"\x18\x03\x18\x03\x18\x02\x02\x05\n\x1C\"\x19\x02\x02\x04\x02\x06\x02\b" +
		"\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02" +
		"\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x02\x02\x07\x03" +
		"\x0258\x03\x02\x1C\x1D\x03\x02\x19\'\x05\x02\x1D\x1D))+-\x03\x02\n\x0E" +
		"\u0120\x020\x03\x02\x02\x02\x04;\x03\x02\x02\x02\x06F\x03\x02\x02\x02" +
		"\bN\x03\x02\x02\x02\n_\x03\x02\x02\x02\fw\x03\x02\x02\x02\x0E\x82\x03" +
		"\x02\x02\x02\x10\x87\x03\x02\x02\x02\x12\x9A\x03\x02\x02\x02\x14\x9C\x03" +
		"\x02\x02\x02\x16\xA8\x03\x02\x02\x02\x18\xAD\x03\x02\x02\x02\x1A\xAF\x03" +
		"\x02\x02\x02\x1C\xBA\x03\x02\x02\x02\x1E\xC4\x03\x02\x02\x02 \xCE\x03" +
		"\x02\x02\x02\"\xDF\x03\x02\x02\x02$\xEB\x03\x02\x02\x02&\xF2\x03\x02\x02" +
		"\x02(\xFB\x03\x02\x02\x02*\u0108\x03\x02\x02\x02,\u010A\x03\x02\x02\x02" +
		".\u010C\x03\x02\x02\x0204\x07\x05\x02\x0213\x05\x04\x03\x0221\x03\x02" +
		"\x02\x0236\x03\x02\x02\x0242\x03\x02\x02\x0245\x03\x02\x02\x0257\x03\x02" +
		"\x02\x0264\x03\x02\x02\x0278\x05\n\x06\x0289\x07\x06\x02\x029:\x07\x02" +
		"\x02\x03:\x03\x03\x02\x02\x02;<\x05\x18\r\x02<=\x07C\x02\x02=?\x07:\x02" +
		"\x02>@\x05\x06\x04\x02?>\x03\x02\x02\x02?@\x03\x02\x02\x02@A\x03\x02\x02" +
		"\x02AB\x07;\x02\x02BC\x07\x07\x02\x02CD\x05\n\x06\x02DE\x07\x06\x02\x02" +
		"E\x05\x03\x02\x02\x02FK\x05\b\x05\x02GH\x07>\x02\x02HJ\x05\b\x05\x02I" +
		"G\x03\x02\x02\x02JM\x03\x02\x02\x02KI\x03\x02\x02\x02KL\x03\x02\x02\x02" +
		"L\x07\x03\x02\x02\x02MK\x03\x02\x02\x02NO\x05\x18\r\x02OP\x07C\x02\x02" +
		"P\t\x03\x02\x02\x02QR\b\x06\x01\x02R`\x07\b\x02\x02S`\x05\f\x07\x02T`" +
		"\x05\x0E\b\x02UV\x07\t\x02\x02V`\x05\x10\t\x02WX\x05.\x18\x02XY\x05\"" +
		"\x12\x02Y`\x03\x02\x02\x02Z`\x05\f\x07\x02[\\\x07\x05\x02\x02\\]\x05\n" +
		"\x06\x02]^\x07\x06\x02\x02^`\x03\x02\x02\x02_Q\x03\x02\x02\x02_S\x03\x02" +
		"\x02\x02_T\x03\x02\x02\x02_U\x03\x02\x02\x02_W\x03\x02\x02\x02_Z\x03\x02" +
		"\x02\x02_[\x03\x02\x02\x02`f\x03\x02\x02\x02ab\f\x03\x02\x02bc\x07?\x02" +
		"\x02ce\x05\n\x06\x04da\x03\x02\x02\x02eh\x03\x02\x02\x02fd\x03\x02\x02" +
		"\x02fg\x03\x02\x02\x02g\v\x03\x02\x02\x02hf\x03\x02\x02\x02ij\x07\x0F" +
		"\x02\x02jk\x05\"\x12\x02kl\x07\x10\x02\x02lm\x05\n\x06\x02mn\x07\x11\x02" +
		"\x02no\x05\n\x06\x02op\x07\x12\x02\x02px\x03\x02\x02\x02qr\x07\x13\x02" +
		"\x02rs\x05\"\x12\x02st\x07\x14\x02\x02tu\x05\n\x06\x02uv\x07\x15\x02\x02" +
		"vx\x03\x02\x02\x02wi\x03\x02\x02\x02wq\x03\x02\x02\x02x\r\x03\x02\x02" +
		"\x02yz\x05\x18\r\x02z{\x07C\x02\x02{|\x07(\x02\x02|}\x05\x12\n\x02}\x83" +
		"\x03\x02\x02\x02~\x7F\x05\x10\t\x02\x7F\x80\x07(\x02\x02\x80\x81\x05\x12" +
		"\n\x02\x81\x83\x03\x02\x02\x02\x82y\x03\x02\x02\x02\x82~\x03\x02\x02\x02" +
		"\x83\x0F\x03\x02\x02\x02\x84\x88\x07C\x02\x02\x85\x88\x05&\x14\x02\x86" +
		"\x88\x05\x16\f\x02\x87\x84\x03\x02\x02\x02\x87\x85\x03\x02\x02\x02\x87" +
		"\x86\x03\x02\x02\x02\x88\x11\x03\x02\x02\x02\x89\x9B\x05\"\x12\x02\x8A" +
		"\x9B\x05(\x15\x02\x8B\x8C\x07*\x02\x02\x8C\x8D\x07:\x02\x02\x8D\x8E\x05" +
		"\"\x12\x02\x8E\x8F\x07>\x02\x02\x8F\x90\x05\"\x12\x02\x90\x91\x07;\x02" +
		"\x02\x91\x9B\x03\x02\x02\x02\x92\x9B\x05\x16\f\x02\x93\x94\x07\x16\x02" +
		"\x02\x94\x95\x07C\x02\x02\x95\x97\x07:\x02\x02\x96\x98\x05\x14\v\x02\x97" +
		"\x96\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99" +
		"\x9B\x07;\x02\x02\x9A\x89\x03\x02\x02\x02\x9A\x8A\x03\x02\x02\x02\x9A" +
		"\x8B\x03\x02\x02\x02\x9A\x92\x03\x02\x02\x02\x9A\x93\x03\x02\x02\x02\x9B" +
		"\x13\x03\x02\x02\x02\x9C\xA1\x05\"\x12\x02\x9D\x9E\x07>\x02\x02\x9E\xA0" +
		"\x05\"\x12\x02\x9F\x9D\x03\x02\x02\x02\xA0\xA3\x03\x02\x02\x02\xA1\x9F" +
		"\x03\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\x15\x03\x02\x02\x02\xA3\xA1" +
		"\x03\x02\x02\x02\xA4\xA5\x07\x17\x02\x02\xA5\xA9\x05\"\x12\x02\xA6\xA7" +
		"\x07\x18\x02\x02\xA7\xA9\x05\"\x12\x02\xA8\xA4\x03\x02\x02\x02\xA8\xA6" +
		"\x03\x02\x02\x02\xA9\x17\x03\x02\x02\x02\xAA\xAE\x05\x1A\x0E\x02\xAB\xAE" +
		"\x05\x1C\x0F\x02\xAC\xAE\x05\x1E\x10\x02\xAD\xAA\x03\x02\x02\x02\xAD\xAB" +
		"\x03\x02\x02\x02\xAD\xAC\x03\x02\x02\x02\xAE\x19\x03\x02\x02\x02\xAF\xB0" +
		"\t\x02\x02\x02\xB0\x1B\x03\x02\x02\x02\xB1\xB2\b\x0F\x01\x02\xB2\xB3\x05" +
		"\x1A\x0E\x02\xB3\xB4\x07<\x02\x02\xB4\xB5\x07=\x02\x02\xB5\xBB\x03\x02" +
		"\x02\x02\xB6\xB7\x05\x1E\x10\x02\xB7\xB8\x07<\x02\x02\xB8\xB9\x07=\x02" +
		"\x02\xB9\xBB\x03\x02\x02\x02\xBA\xB1\x03\x02\x02\x02\xBA\xB6\x03\x02\x02" +
		"\x02\xBB\xC1\x03\x02\x02\x02\xBC\xBD\f\x04\x02\x02\xBD\xBE\x07<\x02\x02" +
		"\xBE\xC0\x07=\x02\x02\xBF\xBC\x03\x02\x02\x02\xC0\xC3\x03\x02\x02\x02" +
		"\xC1\xBF\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2\x1D\x03\x02\x02\x02" +
		"\xC3\xC1\x03\x02\x02\x02\xC4\xC5\x079\x02\x02\xC5\xC6\x07:\x02\x02\xC6" +
		"\xC7\x05 \x11\x02\xC7\xC8\x07>\x02\x02\xC8\xC9\x05 \x11\x02\xC9\xCA\x07" +
		";\x02\x02\xCA\x1F\x03\x02\x02\x02\xCB\xCF\x05\x1A\x0E\x02\xCC\xCF\x05" +
		"\x1C\x0F\x02\xCD\xCF\x079\x02\x02\xCE\xCB\x03\x02\x02\x02\xCE\xCC\x03" +
		"\x02\x02\x02\xCE\xCD\x03\x02\x02\x02\xCF!\x03\x02\x02\x02\xD0\xD1\b\x12" +
		"\x01\x02\xD1\xE0\x05$\x13\x02\xD2\xE0\x05&\x14\x02\xD3\xD4\x05,\x17\x02" +
		"\xD4\xD5\x05\"\x12\t\xD5\xE0\x03\x02\x02\x02\xD6\xD7\x07:\x02\x02\xD7" +
		"\xD8\x05\"\x12\x02\xD8\xD9\x07;\x02\x02\xD9\xE0\x03\x02\x02\x02\xDA\xE0" +
		"\x07C\x02\x02\xDB\xE0\x07/\x02\x02\xDC\xE0\x072\x02\x02\xDD\xE0\x074\x02" +
		"\x02\xDE\xE0\x073\x02\x02\xDF\xD0\x03\x02\x02\x02\xDF\xD2\x03\x02\x02" +
		"\x02\xDF\xD3\x03\x02\x02\x02\xDF\xD6\x03\x02\x02\x02\xDF\xDA\x03\x02\x02" +
		"\x02\xDF\xDB\x03\x02\x02\x02\xDF\xDC\x03\x02\x02\x02\xDF\xDD\x03\x02\x02" +
		"\x02\xDF\xDE\x03\x02\x02\x02\xE0\xE7\x03\x02\x02\x02\xE1\xE2\f\v\x02\x02" +
		"\xE2\xE3\x05*\x16\x02\xE3\xE4\x05\"\x12\f\xE4\xE6\x03\x02\x02\x02\xE5" +
		"\xE1\x03\x02\x02\x02\xE6\xE9\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02\xE7" +
		"\xE8\x03\x02\x02\x02\xE8#\x03\x02\x02\x02\xE9\xE7\x03\x02\x02\x02\xEA" +
		"\xEC\t\x03\x02\x02\xEB\xEA\x03\x02\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC" +
		"\xEE\x03\x02\x02\x02\xED\xEF\x07.\x02\x02\xEE\xED\x03\x02\x02\x02\xEF" +
		"\xF0\x03\x02\x02\x02\xF0\xEE\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1" +
		"%\x03\x02\x02\x02\xF2\xF7\x07C\x02\x02\xF3\xF4\x07<\x02\x02\xF4\xF5\x05" +
		"\"\x12\x02\xF5\xF6\x07=\x02\x02\xF6\xF8\x03\x02\x02\x02\xF7\xF3\x03\x02" +
		"\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\xF7\x03\x02\x02\x02\xF9\xFA\x03\x02" +
		"\x02\x02\xFA\'\x03\x02\x02\x02\xFB\u0104\x07<\x02\x02\xFC\u0101\x05\"" +
		"\x12\x02\xFD\xFE\x07>\x02\x02\xFE\u0100\x05\"\x12\x02\xFF\xFD\x03\x02" +
		"\x02\x02\u0100\u0103\x03\x02\x02\x02\u0101\xFF\x03\x02\x02\x02\u0101\u0102" +
		"\x03\x02\x02\x02\u0102\u0105\x03\x02\x02\x02\u0103\u0101\x03\x02\x02\x02" +
		"\u0104\xFC\x03\x02\x02\x02\u0104\u0105\x03\x02\x02\x02\u0105\u0106\x03" +
		"\x02\x02\x02\u0106\u0107\x07=\x02\x02\u0107)\x03\x02\x02\x02\u0108\u0109" +
		"\t\x04\x02\x02\u0109+\x03\x02\x02\x02\u010A\u010B\t\x05\x02\x02\u010B" +
		"-\x03\x02\x02\x02\u010C\u010D\t\x06\x02\x02\u010D/\x03\x02\x02\x02\x19" +
		"4?K_fw\x82\x87\x97\x9A\xA1\xA8\xAD\xBA\xC1\xCE\xDF\xE7\xEB\xF0\xF9\u0101" +
		"\u0104";
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
	public binaryOperator(): BinaryOperatorContext | undefined {
		return this.tryGetRuleContext(0, BinaryOperatorContext);
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


export class BinaryOperatorContext extends ParserRuleContext {
	public MULTIPLY(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.MULTIPLY, 0); }
	public DIVIDE(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.DIVIDE, 0); }
	public MODULO(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.MODULO, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.MINUS, 0); }
	public GREATER_THAN(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.GREATER_THAN, 0); }
	public GREATER_EQUAL(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.GREATER_EQUAL, 0); }
	public LESS_THAN(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.LESS_THAN, 0); }
	public LESS_EQUAL(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.LESS_EQUAL, 0); }
	public EQUALS(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.EQUALS, 0); }
	public STRICT_EQUALS(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.STRICT_EQUALS, 0); }
	public NEQUALS(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.NEQUALS, 0); }
	public NSTRICT_EQUALS(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.NSTRICT_EQUALS, 0); }
	public LOGICAL_AND(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.LOGICAL_AND, 0); }
	public LOGICAL_OR(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.LOGICAL_OR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WJSCParser.RULE_binaryOperator; }
	// @Override
	public enterRule(listener: WJSCParserListener): void {
		if (listener.enterBinaryOperator) {
			listener.enterBinaryOperator(this);
		}
	}
	// @Override
	public exitRule(listener: WJSCParserListener): void {
		if (listener.exitBinaryOperator) {
			listener.exitBinaryOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WJSCParserVisitor<Result>): Result {
		if (visitor.visitBinaryOperator) {
			return visitor.visitBinaryOperator(this);
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


