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
	public static readonly EXTERN = 6;
	public static readonly FROM = 7;
	public static readonly AS = 8;
	public static readonly COLON = 9;
	public static readonly BEGIN = 10;
	public static readonly END = 11;
	public static readonly IS = 12;
	public static readonly WSKIP = 13;
	public static readonly READ = 14;
	public static readonly FREE = 15;
	public static readonly RETURN = 16;
	public static readonly EXIT = 17;
	public static readonly PRINT = 18;
	public static readonly PRINTLN = 19;
	public static readonly IF = 20;
	public static readonly THEN = 21;
	public static readonly ELSE = 22;
	public static readonly FI = 23;
	public static readonly WHILE = 24;
	public static readonly DO = 25;
	public static readonly DONE = 26;
	public static readonly CALL = 27;
	public static readonly FIRST = 28;
	public static readonly SECOND = 29;
	public static readonly MULTIPLY = 30;
	public static readonly DIVIDE = 31;
	public static readonly MODULO = 32;
	public static readonly PLUS = 33;
	public static readonly MINUS = 34;
	public static readonly GREATER_THAN = 35;
	public static readonly GREATER_EQUAL = 36;
	public static readonly LESS_THAN = 37;
	public static readonly LESS_EQUAL = 38;
	public static readonly EQUALS = 39;
	public static readonly STRICT_EQUALS = 40;
	public static readonly NEQUALS = 41;
	public static readonly NSTRICT_EQUALS = 42;
	public static readonly LOGICAL_AND = 43;
	public static readonly LOGICAL_OR = 44;
	public static readonly ASSIGNMENT = 45;
	public static readonly LOGICAL_NEGATION = 46;
	public static readonly NEW_PAIR = 47;
	public static readonly LENGTH = 48;
	public static readonly ORDER_OF = 49;
	public static readonly CHARACTER_OF = 50;
	public static readonly DIGIT = 51;
	public static readonly BOOLEAN_LITERAL = 52;
	public static readonly CHARACTER_LITERAL = 53;
	public static readonly PAIR_LITERAL = 54;
	public static readonly STRING_LITERAL = 55;
	public static readonly INTEGER = 56;
	public static readonly BOOLEAN = 57;
	public static readonly CHARACTER = 58;
	public static readonly STRING = 59;
	public static readonly PAIR = 60;
	public static readonly VOID = 61;
	public static readonly LPAREN = 62;
	public static readonly RPAREN = 63;
	public static readonly LBRACK = 64;
	public static readonly RBRACK = 65;
	public static readonly COMMA = 66;
	public static readonly SEMICOLON = 67;
	public static readonly APOS = 68;
	public static readonly DBLQ = 69;
	public static readonly COMMENT = 70;
	public static readonly IDENTIFIER = 71;
	public static readonly RULE_program = 0;
	public static readonly RULE_imports = 1;
	public static readonly RULE_importList = 2;
	public static readonly RULE_func = 3;
	public static readonly RULE_paramList = 4;
	public static readonly RULE_param = 5;
	public static readonly RULE_statement = 6;
	public static readonly RULE_conditionalBlocks = 7;
	public static readonly RULE_assignment = 8;
	public static readonly RULE_declare = 9;
	public static readonly RULE_assignLhs = 10;
	public static readonly RULE_assignRhs = 11;
	public static readonly RULE_argList = 12;
	public static readonly RULE_pairElement = 13;
	public static readonly RULE_type = 14;
	public static readonly RULE_baseType = 15;
	public static readonly RULE_arrayType = 16;
	public static readonly RULE_pairType = 17;
	public static readonly RULE_pairElementType = 18;
	public static readonly RULE_expression = 19;
	public static readonly RULE_integerLiteral = 20;
	public static readonly RULE_arrayElement = 21;
	public static readonly RULE_arrayLiteral = 22;
	public static readonly RULE_arithmeticOperator = 23;
	public static readonly RULE_arithmeticOperator2 = 24;
	public static readonly RULE_comparisonOperator = 25;
	public static readonly RULE_equalityOperator = 26;
	public static readonly RULE_booleanAndOperator = 27;
	public static readonly RULE_booleanOrOperator = 28;
	public static readonly RULE_unaryOperator = 29;
	public static readonly RULE_stdlib = 30;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "imports", "importList", "func", "paramList", "param", "statement", 
		"conditionalBlocks", "assignment", "declare", "assignLhs", "assignRhs", 
		"argList", "pairElement", "type", "baseType", "arrayType", "pairType", 
		"pairElementType", "expression", "integerLiteral", "arrayElement", "arrayLiteral", 
		"arithmeticOperator", "arithmeticOperator2", "comparisonOperator", "equalityOperator", 
		"booleanAndOperator", "booleanOrOperator", "unaryOperator", "stdlib",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'export'", "'import'", "'define'", "'extern'", 
		"'from'", "'as'", "':'", "'begin'", "'end'", "'is'", "'skip'", "'read'", 
		"'free'", "'return'", "'exit'", "'print'", "'println'", "'if'", "'then'", 
		"'else'", "'fi'", "'while'", "'do'", "'done'", "'call'", "'fst'", "'snd'", 
		"'*'", "'/'", "'%'", "'+'", "'-'", "'>'", "'>='", "'<'", "'<='", "'=='", 
		"'==='", "'!='", "'!=='", "'&&'", "'||'", "'='", "'!'", "'newpair'", "'len'", 
		"'ord'", "'chr'", undefined, undefined, undefined, "'null'", undefined, 
		"'int'", "'bool'", "'char'", "'string'", "'pair'", "'void'", "'('", "')'", 
		"'['", "']'", "','", "';'", "'''", "'\"'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "EOL", "WHITESPACE", "EXPORT", "IMPORT", "DEFINE", "EXTERN", 
		"FROM", "AS", "COLON", "BEGIN", "END", "IS", "WSKIP", "READ", "FREE", 
		"RETURN", "EXIT", "PRINT", "PRINTLN", "IF", "THEN", "ELSE", "FI", "WHILE", 
		"DO", "DONE", "CALL", "FIRST", "SECOND", "MULTIPLY", "DIVIDE", "MODULO", 
		"PLUS", "MINUS", "GREATER_THAN", "GREATER_EQUAL", "LESS_THAN", "LESS_EQUAL", 
		"EQUALS", "STRICT_EQUALS", "NEQUALS", "NSTRICT_EQUALS", "LOGICAL_AND", 
		"LOGICAL_OR", "ASSIGNMENT", "LOGICAL_NEGATION", "NEW_PAIR", "LENGTH", 
		"ORDER_OF", "CHARACTER_OF", "DIGIT", "BOOLEAN_LITERAL", "CHARACTER_LITERAL", 
		"PAIR_LITERAL", "STRING_LITERAL", "INTEGER", "BOOLEAN", "CHARACTER", "STRING", 
		"PAIR", "VOID", "LPAREN", "RPAREN", "LBRACK", "RBRACK", "COMMA", "SEMICOLON", 
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
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 62;
			this.match(WJSCParser.BEGIN);
			this.state = 66;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === WJSCParser.IMPORT) {
				{
				{
				this.state = 63;
				this.imports();
				}
				}
				this.state = 68;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 72;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 69;
					this.func();
					}
					}
				}
				this.state = 74;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
			this.state = 76;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << WJSCParser.BEGIN) | (1 << WJSCParser.WSKIP) | (1 << WJSCParser.READ) | (1 << WJSCParser.FREE) | (1 << WJSCParser.RETURN) | (1 << WJSCParser.EXIT) | (1 << WJSCParser.PRINT) | (1 << WJSCParser.PRINTLN) | (1 << WJSCParser.IF) | (1 << WJSCParser.WHILE) | (1 << WJSCParser.FIRST) | (1 << WJSCParser.SECOND))) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (WJSCParser.INTEGER - 56)) | (1 << (WJSCParser.BOOLEAN - 56)) | (1 << (WJSCParser.CHARACTER - 56)) | (1 << (WJSCParser.STRING - 56)) | (1 << (WJSCParser.PAIR - 56)) | (1 << (WJSCParser.IDENTIFIER - 56)))) !== 0)) {
				{
				this.state = 75;
				this.statement(0);
				}
			}

			this.state = 78;
			this.match(WJSCParser.END);
			this.state = 79;
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
	public imports(): ImportsContext {
		let _localctx: ImportsContext = new ImportsContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, WJSCParser.RULE_imports);
		let _la: number;
		try {
			this.state = 92;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 81;
				this.match(WJSCParser.IMPORT);
				this.state = 82;
				this.match(WJSCParser.STRING_LITERAL);
				this.state = 85;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === WJSCParser.AS) {
					{
					this.state = 83;
					this.match(WJSCParser.AS);
					this.state = 84;
					this.match(WJSCParser.IDENTIFIER);
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 87;
				this.match(WJSCParser.IMPORT);
				this.state = 88;
				this.importList();
				this.state = 89;
				this.match(WJSCParser.FROM);
				this.state = 90;
				this.match(WJSCParser.STRING_LITERAL);
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
	public importList(): ImportListContext {
		let _localctx: ImportListContext = new ImportListContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, WJSCParser.RULE_importList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 94;
			this.match(WJSCParser.IDENTIFIER);
			this.state = 99;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === WJSCParser.COMMA) {
				{
				{
				this.state = 95;
				this.match(WJSCParser.COMMA);
				this.state = 96;
				this.match(WJSCParser.IDENTIFIER);
				}
				}
				this.state = 101;
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
	public func(): FuncContext {
		let _localctx: FuncContext = new FuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, WJSCParser.RULE_func);
		let _la: number;
		try {
			this.state = 137;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 103;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === WJSCParser.EXPORT) {
					{
					this.state = 102;
					this.match(WJSCParser.EXPORT);
					}
				}

				this.state = 105;
				this.type();
				this.state = 106;
				this.match(WJSCParser.IDENTIFIER);
				this.state = 107;
				this.match(WJSCParser.LPAREN);
				this.state = 109;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (WJSCParser.INTEGER - 56)) | (1 << (WJSCParser.BOOLEAN - 56)) | (1 << (WJSCParser.CHARACTER - 56)) | (1 << (WJSCParser.STRING - 56)) | (1 << (WJSCParser.PAIR - 56)))) !== 0)) {
					{
					this.state = 108;
					this.paramList();
					}
				}

				this.state = 111;
				this.match(WJSCParser.RPAREN);
				this.state = 112;
				this.match(WJSCParser.IS);
				this.state = 113;
				this.statement(0);
				this.state = 114;
				this.match(WJSCParser.END);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === WJSCParser.EXPORT) {
					{
					this.state = 116;
					this.match(WJSCParser.EXPORT);
					}
				}

				this.state = 119;
				this.match(WJSCParser.DEFINE);
				this.state = 120;
				this.type();
				this.state = 121;
				this.match(WJSCParser.IDENTIFIER);
				this.state = 122;
				this.match(WJSCParser.LPAREN);
				this.state = 124;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (WJSCParser.INTEGER - 56)) | (1 << (WJSCParser.BOOLEAN - 56)) | (1 << (WJSCParser.CHARACTER - 56)) | (1 << (WJSCParser.STRING - 56)) | (1 << (WJSCParser.PAIR - 56)))) !== 0)) {
					{
					this.state = 123;
					this.paramList();
					}
				}

				this.state = 126;
				this.match(WJSCParser.RPAREN);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 128;
				this.match(WJSCParser.EXTERN);
				this.state = 129;
				this.type();
				this.state = 130;
				this.match(WJSCParser.IDENTIFIER);
				this.state = 131;
				this.match(WJSCParser.LPAREN);
				this.state = 133;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (WJSCParser.INTEGER - 56)) | (1 << (WJSCParser.BOOLEAN - 56)) | (1 << (WJSCParser.CHARACTER - 56)) | (1 << (WJSCParser.STRING - 56)) | (1 << (WJSCParser.PAIR - 56)))) !== 0)) {
					{
					this.state = 132;
					this.paramList();
					}
				}

				this.state = 135;
				this.match(WJSCParser.RPAREN);
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
	public paramList(): ParamListContext {
		let _localctx: ParamListContext = new ParamListContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, WJSCParser.RULE_paramList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 139;
			this.param();
			this.state = 144;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === WJSCParser.COMMA) {
				{
				{
				this.state = 140;
				this.match(WJSCParser.COMMA);
				this.state = 141;
				this.param();
				}
				}
				this.state = 146;
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
		this.enterRule(_localctx, 10, WJSCParser.RULE_param);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 147;
			this.type();
			this.state = 148;
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
		let _startState: number = 12;
		this.enterRecursionRule(_localctx, 12, WJSCParser.RULE_statement, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 165;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				this.state = 151;
				this.match(WJSCParser.WSKIP);
				}
				break;

			case 2:
				{
				this.state = 152;
				this.conditionalBlocks();
				}
				break;

			case 3:
				{
				this.state = 153;
				this.assignment();
				}
				break;

			case 4:
				{
				this.state = 154;
				this.declare();
				}
				break;

			case 5:
				{
				this.state = 155;
				this.match(WJSCParser.READ);
				this.state = 156;
				this.assignLhs();
				}
				break;

			case 6:
				{
				this.state = 157;
				this.stdlib();
				this.state = 158;
				this.expression(0);
				}
				break;

			case 7:
				{
				this.state = 160;
				this.conditionalBlocks();
				}
				break;

			case 8:
				{
				this.state = 161;
				this.match(WJSCParser.BEGIN);
				this.state = 162;
				this.statement(0);
				this.state = 163;
				this.match(WJSCParser.END);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 172;
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
					_localctx = new StatementContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, WJSCParser.RULE_statement);
					this.state = 167;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 168;
					this.match(WJSCParser.SEMICOLON);
					this.state = 169;
					this.statement(2);
					}
					}
				}
				this.state = 174;
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
	public conditionalBlocks(): ConditionalBlocksContext {
		let _localctx: ConditionalBlocksContext = new ConditionalBlocksContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, WJSCParser.RULE_conditionalBlocks);
		try {
			this.state = 189;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WJSCParser.IF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 175;
				this.match(WJSCParser.IF);
				this.state = 176;
				this.expression(0);
				this.state = 177;
				this.match(WJSCParser.THEN);
				this.state = 178;
				this.statement(0);
				this.state = 179;
				this.match(WJSCParser.ELSE);
				this.state = 180;
				this.statement(0);
				this.state = 181;
				this.match(WJSCParser.FI);
				}
				break;
			case WJSCParser.WHILE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 183;
				this.match(WJSCParser.WHILE);
				this.state = 184;
				this.expression(0);
				this.state = 185;
				this.match(WJSCParser.DO);
				this.state = 186;
				this.statement(0);
				this.state = 187;
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
		this.enterRule(_localctx, 16, WJSCParser.RULE_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 191;
			this.assignLhs();
			this.state = 192;
			this.match(WJSCParser.ASSIGNMENT);
			this.state = 193;
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
		this.enterRule(_localctx, 18, WJSCParser.RULE_declare);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 195;
			this.type();
			this.state = 196;
			this.match(WJSCParser.IDENTIFIER);
			this.state = 197;
			this.match(WJSCParser.ASSIGNMENT);
			this.state = 198;
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
		this.enterRule(_localctx, 20, WJSCParser.RULE_assignLhs);
		try {
			this.state = 203;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 200;
				this.match(WJSCParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 201;
				this.arrayElement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 202;
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
		this.enterRule(_localctx, 22, WJSCParser.RULE_assignRhs);
		let _la: number;
		try {
			this.state = 226;
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
				this.state = 205;
				this.expression(0);
				}
				break;
			case WJSCParser.LBRACK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 206;
				this.arrayLiteral();
				}
				break;
			case WJSCParser.NEW_PAIR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 207;
				this.match(WJSCParser.NEW_PAIR);
				this.state = 208;
				this.match(WJSCParser.LPAREN);
				this.state = 209;
				this.expression(0);
				this.state = 210;
				this.match(WJSCParser.COMMA);
				this.state = 211;
				this.expression(0);
				this.state = 212;
				this.match(WJSCParser.RPAREN);
				}
				break;
			case WJSCParser.FIRST:
			case WJSCParser.SECOND:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 214;
				this.pairElement();
				}
				break;
			case WJSCParser.CALL:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 215;
				this.match(WJSCParser.CALL);
				this.state = 218;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
				case 1:
					{
					this.state = 216;
					this.match(WJSCParser.IDENTIFIER);
					this.state = 217;
					this.match(WJSCParser.COLON);
					}
					break;
				}
				this.state = 220;
				this.match(WJSCParser.IDENTIFIER);
				this.state = 221;
				this.match(WJSCParser.LPAREN);
				this.state = 223;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (WJSCParser.PLUS - 33)) | (1 << (WJSCParser.MINUS - 33)) | (1 << (WJSCParser.LOGICAL_NEGATION - 33)) | (1 << (WJSCParser.LENGTH - 33)) | (1 << (WJSCParser.ORDER_OF - 33)) | (1 << (WJSCParser.CHARACTER_OF - 33)) | (1 << (WJSCParser.DIGIT - 33)) | (1 << (WJSCParser.BOOLEAN_LITERAL - 33)) | (1 << (WJSCParser.CHARACTER_LITERAL - 33)) | (1 << (WJSCParser.PAIR_LITERAL - 33)) | (1 << (WJSCParser.STRING_LITERAL - 33)) | (1 << (WJSCParser.LPAREN - 33)))) !== 0) || _la === WJSCParser.IDENTIFIER) {
					{
					this.state = 222;
					this.argList();
					}
				}

				this.state = 225;
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
		this.enterRule(_localctx, 24, WJSCParser.RULE_argList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 228;
			this.expression(0);
			this.state = 233;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === WJSCParser.COMMA) {
				{
				{
				this.state = 229;
				this.match(WJSCParser.COMMA);
				this.state = 230;
				this.expression(0);
				}
				}
				this.state = 235;
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
		this.enterRule(_localctx, 26, WJSCParser.RULE_pairElement);
		try {
			this.state = 240;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WJSCParser.FIRST:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 236;
				this.match(WJSCParser.FIRST);
				this.state = 237;
				this.expression(0);
				}
				break;
			case WJSCParser.SECOND:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 238;
				this.match(WJSCParser.SECOND);
				this.state = 239;
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
		this.enterRule(_localctx, 28, WJSCParser.RULE_type);
		try {
			this.state = 245;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 242;
				this.baseType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 243;
				this.arrayType(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 244;
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
		this.enterRule(_localctx, 30, WJSCParser.RULE_baseType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 247;
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
		let _startState: number = 32;
		this.enterRecursionRule(_localctx, 32, WJSCParser.RULE_arrayType, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 258;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WJSCParser.INTEGER:
			case WJSCParser.BOOLEAN:
			case WJSCParser.CHARACTER:
			case WJSCParser.STRING:
				{
				this.state = 250;
				this.baseType();
				this.state = 251;
				this.match(WJSCParser.LBRACK);
				this.state = 252;
				this.match(WJSCParser.RBRACK);
				}
				break;
			case WJSCParser.PAIR:
				{
				this.state = 254;
				this.pairType();
				this.state = 255;
				this.match(WJSCParser.LBRACK);
				this.state = 256;
				this.match(WJSCParser.RBRACK);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 265;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
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
					this.state = 260;
					if (!(this.precpred(this._ctx, 2))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
					}
					this.state = 261;
					this.match(WJSCParser.LBRACK);
					this.state = 262;
					this.match(WJSCParser.RBRACK);
					}
					}
				}
				this.state = 267;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
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
		this.enterRule(_localctx, 34, WJSCParser.RULE_pairType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 268;
			this.match(WJSCParser.PAIR);
			this.state = 269;
			this.match(WJSCParser.LPAREN);
			this.state = 270;
			this.pairElementType();
			this.state = 271;
			this.match(WJSCParser.COMMA);
			this.state = 272;
			this.pairElementType();
			this.state = 273;
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
		this.enterRule(_localctx, 36, WJSCParser.RULE_pairElementType);
		try {
			this.state = 278;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 275;
				this.baseType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 276;
				this.arrayType(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 277;
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
		let _startState: number = 38;
		this.enterRecursionRule(_localctx, 38, WJSCParser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 295;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				{
				this.state = 281;
				this.integerLiteral();
				}
				break;

			case 2:
				{
				this.state = 282;
				this.arrayElement();
				}
				break;

			case 3:
				{
				this.state = 283;
				this.unaryOperator();
				this.state = 284;
				this.expression(7);
				}
				break;

			case 4:
				{
				this.state = 286;
				this.match(WJSCParser.LPAREN);
				this.state = 287;
				this.expression(0);
				this.state = 288;
				this.match(WJSCParser.RPAREN);
				}
				break;

			case 5:
				{
				this.state = 290;
				this.match(WJSCParser.IDENTIFIER);
				}
				break;

			case 6:
				{
				this.state = 291;
				this.match(WJSCParser.BOOLEAN_LITERAL);
				}
				break;

			case 7:
				{
				this.state = 292;
				this.match(WJSCParser.CHARACTER_LITERAL);
				}
				break;

			case 8:
				{
				this.state = 293;
				this.match(WJSCParser.STRING_LITERAL);
				}
				break;

			case 9:
				{
				this.state = 294;
				this.match(WJSCParser.PAIR_LITERAL);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 323;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 321;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, WJSCParser.RULE_expression);
						this.state = 297;
						if (!(this.precpred(this._ctx, 14))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
						}
						this.state = 298;
						this.arithmeticOperator();
						this.state = 299;
						this.expression(15);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, WJSCParser.RULE_expression);
						this.state = 301;
						if (!(this.precpred(this._ctx, 13))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						}
						this.state = 302;
						this.arithmeticOperator2();
						this.state = 303;
						this.expression(14);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, WJSCParser.RULE_expression);
						this.state = 305;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 306;
						this.comparisonOperator();
						this.state = 307;
						this.expression(13);
						}
						break;

					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, WJSCParser.RULE_expression);
						this.state = 309;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 310;
						this.equalityOperator();
						this.state = 311;
						this.expression(12);
						}
						break;

					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, WJSCParser.RULE_expression);
						this.state = 313;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 314;
						this.booleanAndOperator();
						this.state = 315;
						this.expression(11);
						}
						break;

					case 6:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, WJSCParser.RULE_expression);
						this.state = 317;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 318;
						this.booleanOrOperator();
						this.state = 319;
						this.expression(10);
						}
						break;
					}
					}
				}
				this.state = 325;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
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
		this.enterRule(_localctx, 40, WJSCParser.RULE_integerLiteral);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 327;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === WJSCParser.PLUS || _la === WJSCParser.MINUS) {
				{
				this.state = 326;
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

			this.state = 330;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 329;
					this.match(WJSCParser.DIGIT);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 332;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
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
		this.enterRule(_localctx, 42, WJSCParser.RULE_arrayElement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 334;
			this.match(WJSCParser.IDENTIFIER);
			this.state = 339;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 335;
					this.match(WJSCParser.LBRACK);
					this.state = 336;
					this.expression(0);
					this.state = 337;
					this.match(WJSCParser.RBRACK);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 341;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
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
		this.enterRule(_localctx, 44, WJSCParser.RULE_arrayLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 343;
			this.match(WJSCParser.LBRACK);
			this.state = 352;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (WJSCParser.PLUS - 33)) | (1 << (WJSCParser.MINUS - 33)) | (1 << (WJSCParser.LOGICAL_NEGATION - 33)) | (1 << (WJSCParser.LENGTH - 33)) | (1 << (WJSCParser.ORDER_OF - 33)) | (1 << (WJSCParser.CHARACTER_OF - 33)) | (1 << (WJSCParser.DIGIT - 33)) | (1 << (WJSCParser.BOOLEAN_LITERAL - 33)) | (1 << (WJSCParser.CHARACTER_LITERAL - 33)) | (1 << (WJSCParser.PAIR_LITERAL - 33)) | (1 << (WJSCParser.STRING_LITERAL - 33)) | (1 << (WJSCParser.LPAREN - 33)))) !== 0) || _la === WJSCParser.IDENTIFIER) {
				{
				this.state = 344;
				this.expression(0);
				this.state = 349;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === WJSCParser.COMMA) {
					{
					{
					this.state = 345;
					this.match(WJSCParser.COMMA);
					this.state = 346;
					this.expression(0);
					}
					}
					this.state = 351;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 354;
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
		this.enterRule(_localctx, 46, WJSCParser.RULE_arithmeticOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 356;
			_la = this._input.LA(1);
			if (!(((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (WJSCParser.MULTIPLY - 30)) | (1 << (WJSCParser.DIVIDE - 30)) | (1 << (WJSCParser.MODULO - 30)))) !== 0))) {
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
		this.enterRule(_localctx, 48, WJSCParser.RULE_arithmeticOperator2);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 358;
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
		this.enterRule(_localctx, 50, WJSCParser.RULE_comparisonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 360;
			_la = this._input.LA(1);
			if (!(((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (WJSCParser.GREATER_THAN - 35)) | (1 << (WJSCParser.GREATER_EQUAL - 35)) | (1 << (WJSCParser.LESS_THAN - 35)) | (1 << (WJSCParser.LESS_EQUAL - 35)))) !== 0))) {
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
		this.enterRule(_localctx, 52, WJSCParser.RULE_equalityOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 362;
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
		this.enterRule(_localctx, 54, WJSCParser.RULE_booleanAndOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 364;
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
		this.enterRule(_localctx, 56, WJSCParser.RULE_booleanOrOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 366;
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
		this.enterRule(_localctx, 58, WJSCParser.RULE_unaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 368;
			_la = this._input.LA(1);
			if (!(((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (WJSCParser.MINUS - 34)) | (1 << (WJSCParser.LOGICAL_NEGATION - 34)) | (1 << (WJSCParser.LENGTH - 34)) | (1 << (WJSCParser.ORDER_OF - 34)) | (1 << (WJSCParser.CHARACTER_OF - 34)))) !== 0))) {
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
		this.enterRule(_localctx, 60, WJSCParser.RULE_stdlib);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 370;
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
		case 6:
			return this.statement_sempred(_localctx as StatementContext, predIndex);

		case 16:
			return this.arrayType_sempred(_localctx as ArrayTypeContext, predIndex);

		case 19:
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
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03I\u0177\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x03\x02\x03\x02\x07\x02" +
		"C\n\x02\f\x02\x0E\x02F\v\x02\x03\x02\x07\x02I\n\x02\f\x02\x0E\x02L\v\x02" +
		"\x03\x02\x05\x02O\n\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x05\x03X\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03" +
		"_\n\x03\x03\x04\x03\x04\x03\x04\x07\x04d\n\x04\f\x04\x0E\x04g\v\x04\x03" +
		"\x05\x05\x05j\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05p\n\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05x\n\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x05\x05\x7F\n\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\x88\n\x05\x03\x05\x03\x05\x05" +
		"\x05\x8C\n\x05\x03\x06\x03\x06\x03\x06\x07\x06\x91\n\x06\f\x06\x0E\x06" +
		"\x94\v\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b" +
		"\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\xA8\n\b\x03" +
		"\b\x03\b\x03\b\x07\b\xAD\n\b\f\b\x0E\b\xB0\v\b\x03\t\x03\t\x03\t\x03\t" +
		"\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\xC0" +
		"\n\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f" +
		"\x03\f\x05\f\xCE\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x05\r\xDD\n\r\x03\r\x03\r\x03\r\x05\r\xE2\n" +
		"\r\x03\r\x05\r\xE5\n\r\x03\x0E\x03\x0E\x03\x0E\x07\x0E\xEA\n\x0E\f\x0E" +
		"\x0E\x0E\xED\v\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xF3\n\x0F\x03" +
		"\x10\x03\x10\x03\x10\x05\x10\xF8\n\x10\x03\x11\x03\x11\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0105" +
		"\n\x12\x03\x12\x03\x12\x03\x12\x07\x12\u010A\n\x12\f\x12\x0E\x12\u010D" +
		"\v\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14" +
		"\x03\x14\x03\x14\x05\x14\u0119\n\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x05\x15\u012A\n\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x07\x15\u0144\n\x15\f\x15\x0E\x15\u0147\v\x15\x03\x16\x05\x16" +
		"\u014A\n\x16\x03\x16\x06\x16\u014D\n\x16\r\x16\x0E\x16\u014E\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x06\x17\u0156\n\x17\r\x17\x0E\x17\u0157\x03" +
		"\x18\x03\x18\x03\x18\x03\x18\x07\x18\u015E\n\x18\f\x18\x0E\x18\u0161\v" +
		"\x18\x05\x18\u0163\n\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A" +
		"\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F" +
		"\x03\x1F\x03 \x03 \x03 \x02\x02\x05\x0E\"(!\x02\x02\x04\x02\x06\x02\b" +
		"\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02" +
		"\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x02" +
		"6\x028\x02:\x02<\x02>\x02\x02\t\x03\x02:=\x03\x02#$\x03\x02 \"\x03\x02" +
		"%(\x04\x02))++\x05\x02$$0024\x03\x02\x11\x15\u0191\x02@\x03\x02\x02\x02" +
		"\x04^\x03\x02\x02\x02\x06`\x03\x02\x02\x02\b\x8B\x03\x02\x02\x02\n\x8D" +
		"\x03\x02\x02\x02\f\x95\x03\x02\x02\x02\x0E\xA7\x03\x02\x02\x02\x10\xBF" +
		"\x03\x02\x02\x02\x12\xC1\x03\x02\x02\x02\x14\xC5\x03\x02\x02\x02\x16\xCD" +
		"\x03\x02\x02\x02\x18\xE4\x03\x02\x02\x02\x1A\xE6\x03\x02\x02\x02\x1C\xF2" +
		"\x03\x02\x02\x02\x1E\xF7\x03\x02\x02\x02 \xF9\x03\x02\x02\x02\"\u0104" +
		"\x03\x02\x02\x02$\u010E\x03\x02\x02\x02&\u0118\x03\x02\x02\x02(\u0129" +
		"\x03\x02\x02\x02*\u0149\x03\x02\x02\x02,\u0150\x03\x02\x02\x02.\u0159" +
		"\x03\x02\x02\x020\u0166\x03\x02\x02\x022\u0168\x03\x02\x02\x024\u016A" +
		"\x03\x02\x02\x026\u016C\x03\x02\x02\x028\u016E\x03\x02\x02\x02:\u0170" +
		"\x03\x02\x02\x02<\u0172\x03\x02\x02\x02>\u0174\x03\x02\x02\x02@D\x07\f" +
		"\x02\x02AC\x05\x04\x03\x02BA\x03\x02\x02\x02CF\x03\x02\x02\x02DB\x03\x02" +
		"\x02\x02DE\x03\x02\x02\x02EJ\x03\x02\x02\x02FD\x03\x02\x02\x02GI\x05\b" +
		"\x05\x02HG\x03\x02\x02\x02IL\x03\x02\x02\x02JH\x03\x02\x02\x02JK\x03\x02" +
		"\x02\x02KN\x03\x02\x02\x02LJ\x03\x02\x02\x02MO\x05\x0E\b\x02NM\x03\x02" +
		"\x02\x02NO\x03\x02\x02\x02OP\x03\x02\x02\x02PQ\x07\r\x02\x02QR\x07\x02" +
		"\x02\x03R\x03\x03\x02\x02\x02ST\x07\x06\x02\x02TW\x079\x02\x02UV\x07\n" +
		"\x02\x02VX\x07I\x02\x02WU\x03\x02\x02\x02WX\x03\x02\x02\x02X_\x03\x02" +
		"\x02\x02YZ\x07\x06\x02\x02Z[\x05\x06\x04\x02[\\\x07\t\x02\x02\\]\x079" +
		"\x02\x02]_\x03\x02\x02\x02^S\x03\x02\x02\x02^Y\x03\x02\x02\x02_\x05\x03" +
		"\x02\x02\x02`e\x07I\x02\x02ab\x07D\x02\x02bd\x07I\x02\x02ca\x03\x02\x02" +
		"\x02dg\x03\x02\x02\x02ec\x03\x02\x02\x02ef\x03\x02\x02\x02f\x07\x03\x02" +
		"\x02\x02ge\x03\x02\x02\x02hj\x07\x05\x02\x02ih\x03\x02\x02\x02ij\x03\x02" +
		"\x02\x02jk\x03\x02\x02\x02kl\x05\x1E\x10\x02lm\x07I\x02\x02mo\x07@\x02" +
		"\x02np\x05\n\x06\x02on\x03\x02\x02\x02op\x03\x02\x02\x02pq\x03\x02\x02" +
		"\x02qr\x07A\x02\x02rs\x07\x0E\x02\x02st\x05\x0E\b\x02tu\x07\r\x02\x02" +
		"u\x8C\x03\x02\x02\x02vx\x07\x05\x02\x02wv\x03\x02\x02\x02wx\x03\x02\x02" +
		"\x02xy\x03\x02\x02\x02yz\x07\x07\x02\x02z{\x05\x1E\x10\x02{|\x07I\x02" +
		"\x02|~\x07@\x02\x02}\x7F\x05\n\x06\x02~}\x03\x02\x02\x02~\x7F\x03\x02" +
		"\x02\x02\x7F\x80\x03\x02\x02\x02\x80\x81\x07A\x02\x02\x81\x8C\x03\x02" +
		"\x02\x02\x82\x83\x07\b\x02\x02\x83\x84\x05\x1E\x10\x02\x84\x85\x07I\x02" +
		"\x02\x85\x87\x07@\x02\x02\x86\x88\x05\n\x06\x02\x87\x86\x03\x02\x02\x02" +
		"\x87\x88\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89\x8A\x07A\x02\x02" +
		"\x8A\x8C\x03\x02\x02\x02\x8Bi\x03\x02\x02\x02\x8Bw\x03\x02\x02\x02\x8B" +
		"\x82\x03\x02\x02\x02\x8C\t\x03\x02\x02\x02\x8D\x92\x05\f\x07\x02\x8E\x8F" +
		"\x07D\x02\x02\x8F\x91\x05\f\x07\x02\x90\x8E\x03\x02\x02\x02\x91\x94\x03" +
		"\x02\x02\x02\x92\x90\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\v\x03" +
		"\x02\x02\x02\x94\x92\x03\x02\x02\x02\x95\x96\x05\x1E\x10\x02\x96\x97\x07" +
		"I\x02\x02\x97\r\x03\x02\x02\x02\x98\x99\b\b\x01\x02\x99\xA8\x07\x0F\x02" +
		"\x02\x9A\xA8\x05\x10\t\x02\x9B\xA8\x05\x12\n\x02\x9C\xA8\x05\x14\v\x02" +
		"\x9D\x9E\x07\x10\x02\x02\x9E\xA8\x05\x16\f\x02\x9F\xA0\x05> \x02\xA0\xA1" +
		"\x05(\x15\x02\xA1\xA8\x03\x02\x02\x02\xA2\xA8\x05\x10\t\x02\xA3\xA4\x07" +
		"\f\x02\x02\xA4\xA5\x05\x0E\b\x02\xA5\xA6\x07\r\x02\x02\xA6\xA8\x03\x02" +
		"\x02\x02\xA7\x98\x03\x02\x02\x02\xA7\x9A\x03\x02\x02\x02\xA7\x9B\x03\x02" +
		"\x02\x02\xA7\x9C\x03\x02\x02\x02\xA7\x9D\x03\x02\x02\x02\xA7\x9F\x03\x02" +
		"\x02\x02\xA7\xA2\x03\x02\x02\x02\xA7\xA3\x03\x02\x02\x02\xA8\xAE\x03\x02" +
		"\x02\x02\xA9\xAA\f\x03\x02\x02\xAA\xAB\x07E\x02\x02\xAB\xAD\x05\x0E\b" +
		"\x04\xAC\xA9\x03\x02\x02\x02\xAD\xB0\x03\x02\x02\x02\xAE\xAC\x03\x02\x02" +
		"\x02\xAE\xAF\x03\x02\x02\x02\xAF\x0F\x03\x02\x02\x02\xB0\xAE\x03\x02\x02" +
		"\x02\xB1\xB2\x07\x16\x02\x02\xB2\xB3\x05(\x15\x02\xB3\xB4\x07\x17\x02" +
		"\x02\xB4\xB5\x05\x0E\b\x02\xB5\xB6\x07\x18\x02\x02\xB6\xB7\x05\x0E\b\x02" +
		"\xB7\xB8\x07\x19\x02\x02\xB8\xC0\x03\x02\x02\x02\xB9\xBA\x07\x1A\x02\x02" +
		"\xBA\xBB\x05(\x15\x02\xBB\xBC\x07\x1B\x02\x02\xBC\xBD\x05\x0E\b\x02\xBD" +
		"\xBE\x07\x1C\x02\x02\xBE\xC0\x03\x02\x02\x02\xBF\xB1\x03\x02\x02\x02\xBF" +
		"\xB9\x03\x02\x02\x02\xC0\x11\x03\x02\x02\x02\xC1\xC2\x05\x16\f\x02\xC2" +
		"\xC3\x07/\x02\x02\xC3\xC4\x05\x18\r\x02\xC4\x13\x03\x02\x02\x02\xC5\xC6" +
		"\x05\x1E\x10\x02\xC6\xC7\x07I\x02\x02\xC7\xC8\x07/\x02\x02\xC8\xC9\x05" +
		"\x18\r\x02\xC9\x15\x03\x02\x02\x02\xCA\xCE\x07I\x02\x02\xCB\xCE\x05,\x17" +
		"\x02\xCC\xCE\x05\x1C\x0F\x02\xCD\xCA\x03\x02\x02\x02\xCD\xCB\x03\x02\x02" +
		"\x02\xCD\xCC\x03\x02\x02\x02\xCE\x17\x03\x02\x02\x02\xCF\xE5\x05(\x15" +
		"\x02\xD0\xE5\x05.\x18\x02\xD1\xD2\x071\x02\x02\xD2\xD3\x07@\x02\x02\xD3" +
		"\xD4\x05(\x15\x02\xD4\xD5\x07D\x02\x02\xD5\xD6\x05(\x15\x02\xD6\xD7\x07" +
		"A\x02\x02\xD7\xE5\x03\x02\x02\x02\xD8\xE5\x05\x1C\x0F\x02\xD9\xDC\x07" +
		"\x1D\x02\x02\xDA\xDB\x07I\x02\x02\xDB\xDD\x07\v\x02\x02\xDC\xDA\x03\x02" +
		"\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\xDF\x07I" +
		"\x02\x02\xDF\xE1\x07@\x02\x02\xE0\xE2\x05\x1A\x0E\x02\xE1\xE0\x03\x02" +
		"\x02\x02\xE1\xE2\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\xE5\x07A" +
		"\x02\x02\xE4\xCF\x03\x02\x02\x02\xE4\xD0\x03\x02\x02\x02\xE4\xD1\x03\x02" +
		"\x02\x02\xE4\xD8\x03\x02\x02\x02\xE4\xD9\x03\x02\x02\x02\xE5\x19\x03\x02" +
		"\x02\x02\xE6\xEB\x05(\x15\x02\xE7\xE8\x07D\x02\x02\xE8\xEA\x05(\x15\x02" +
		"\xE9\xE7\x03\x02\x02\x02\xEA\xED\x03\x02\x02\x02\xEB\xE9\x03\x02\x02\x02" +
		"\xEB\xEC\x03\x02\x02\x02\xEC\x1B\x03\x02\x02\x02\xED\xEB\x03\x02\x02\x02" +
		"\xEE\xEF\x07\x1E\x02\x02\xEF\xF3\x05(\x15\x02\xF0\xF1\x07\x1F\x02\x02" +
		"\xF1\xF3\x05(\x15\x02\xF2\xEE\x03\x02\x02\x02\xF2\xF0\x03\x02\x02\x02" +
		"\xF3\x1D\x03\x02\x02\x02\xF4\xF8\x05 \x11\x02\xF5\xF8\x05\"\x12\x02\xF6" +
		"\xF8\x05$\x13\x02\xF7\xF4\x03\x02\x02\x02\xF7\xF5\x03\x02\x02\x02\xF7" +
		"\xF6\x03\x02\x02\x02\xF8\x1F\x03\x02\x02\x02\xF9\xFA\t\x02\x02\x02\xFA" +
		"!\x03\x02\x02\x02\xFB\xFC\b\x12\x01\x02\xFC\xFD\x05 \x11\x02\xFD\xFE\x07" +
		"B\x02\x02\xFE\xFF\x07C\x02\x02\xFF\u0105\x03\x02\x02\x02\u0100\u0101\x05" +
		"$\x13\x02\u0101\u0102\x07B\x02\x02\u0102\u0103\x07C\x02\x02\u0103\u0105" +
		"\x03\x02\x02\x02\u0104\xFB\x03\x02\x02\x02\u0104\u0100\x03\x02\x02\x02" +
		"\u0105\u010B\x03\x02\x02\x02\u0106\u0107\f\x04\x02\x02\u0107\u0108\x07" +
		"B\x02\x02\u0108\u010A\x07C\x02\x02\u0109\u0106\x03\x02\x02\x02\u010A\u010D" +
		"\x03\x02\x02\x02\u010B\u0109\x03\x02\x02\x02\u010B\u010C\x03\x02\x02\x02" +
		"\u010C#\x03\x02\x02\x02\u010D\u010B\x03\x02\x02\x02\u010E\u010F\x07>\x02" +
		"\x02\u010F\u0110\x07@\x02\x02\u0110\u0111\x05&\x14\x02\u0111\u0112\x07" +
		"D\x02\x02\u0112\u0113\x05&\x14\x02\u0113\u0114\x07A\x02\x02\u0114%\x03" +
		"\x02\x02\x02\u0115\u0119\x05 \x11\x02\u0116\u0119\x05\"\x12\x02\u0117" +
		"\u0119\x07>\x02\x02\u0118\u0115\x03\x02\x02\x02\u0118\u0116\x03\x02\x02" +
		"\x02\u0118\u0117\x03\x02\x02\x02\u0119\'\x03\x02\x02\x02\u011A\u011B\b" +
		"\x15\x01\x02\u011B\u012A\x05*\x16\x02\u011C\u012A\x05,\x17\x02\u011D\u011E" +
		"\x05<\x1F\x02\u011E\u011F\x05(\x15\t\u011F\u012A\x03\x02\x02\x02\u0120" +
		"\u0121\x07@\x02\x02\u0121\u0122\x05(\x15\x02\u0122\u0123\x07A\x02\x02" +
		"\u0123\u012A\x03\x02\x02\x02\u0124\u012A\x07I\x02\x02\u0125\u012A\x07" +
		"6\x02\x02\u0126\u012A\x077\x02\x02\u0127\u012A\x079\x02\x02\u0128\u012A" +
		"\x078\x02\x02\u0129\u011A\x03\x02\x02\x02\u0129\u011C\x03\x02\x02\x02" +
		"\u0129\u011D\x03\x02\x02\x02\u0129\u0120\x03\x02\x02\x02\u0129\u0124\x03" +
		"\x02\x02\x02\u0129\u0125\x03\x02\x02\x02\u0129\u0126\x03\x02\x02\x02\u0129" +
		"\u0127\x03\x02\x02\x02\u0129\u0128\x03\x02\x02\x02\u012A\u0145\x03\x02" +
		"\x02\x02\u012B\u012C\f\x10\x02\x02\u012C\u012D\x050\x19\x02\u012D\u012E" +
		"\x05(\x15\x11\u012E\u0144\x03\x02\x02\x02\u012F\u0130\f\x0F\x02\x02\u0130" +
		"\u0131\x052\x1A\x02\u0131\u0132\x05(\x15\x10\u0132\u0144\x03\x02\x02\x02" +
		"\u0133\u0134\f\x0E\x02\x02\u0134\u0135\x054\x1B\x02\u0135\u0136\x05(\x15" +
		"\x0F\u0136\u0144\x03\x02\x02\x02\u0137\u0138\f\r\x02\x02\u0138\u0139\x05" +
		"6\x1C\x02\u0139\u013A\x05(\x15\x0E\u013A\u0144\x03\x02\x02\x02\u013B\u013C" +
		"\f\f\x02\x02\u013C\u013D\x058\x1D\x02\u013D\u013E\x05(\x15\r\u013E\u0144" +
		"\x03\x02\x02\x02\u013F\u0140\f\v\x02\x02\u0140\u0141\x05:\x1E\x02\u0141" +
		"\u0142\x05(\x15\f\u0142\u0144\x03\x02\x02\x02\u0143\u012B\x03\x02\x02" +
		"\x02\u0143\u012F\x03\x02\x02\x02\u0143\u0133\x03\x02\x02\x02\u0143\u0137" +
		"\x03\x02\x02\x02\u0143\u013B\x03\x02\x02\x02\u0143\u013F\x03\x02\x02\x02" +
		"\u0144\u0147\x03\x02\x02\x02\u0145\u0143\x03\x02\x02\x02\u0145\u0146\x03" +
		"\x02\x02\x02\u0146)\x03\x02\x02\x02\u0147\u0145\x03\x02\x02\x02\u0148" +
		"\u014A\t\x03\x02\x02\u0149\u0148\x03\x02\x02\x02\u0149\u014A\x03\x02\x02" +
		"\x02\u014A\u014C\x03\x02\x02\x02\u014B\u014D\x075\x02\x02\u014C\u014B" +
		"\x03\x02\x02\x02\u014D\u014E\x03\x02\x02\x02\u014E\u014C\x03\x02\x02\x02" +
		"\u014E\u014F\x03\x02\x02\x02\u014F+\x03\x02\x02\x02\u0150\u0155\x07I\x02" +
		"\x02\u0151\u0152\x07B\x02\x02\u0152\u0153\x05(\x15\x02\u0153\u0154\x07" +
		"C\x02\x02\u0154\u0156\x03\x02\x02\x02\u0155\u0151\x03\x02\x02\x02\u0156" +
		"\u0157\x03\x02\x02\x02\u0157\u0155\x03\x02\x02\x02\u0157\u0158\x03\x02" +
		"\x02\x02\u0158-\x03\x02\x02\x02\u0159\u0162\x07B\x02\x02\u015A\u015F\x05" +
		"(\x15\x02\u015B\u015C\x07D\x02\x02\u015C\u015E\x05(\x15\x02\u015D\u015B" +
		"\x03\x02\x02\x02\u015E\u0161\x03\x02\x02\x02\u015F\u015D\x03\x02\x02\x02" +
		"\u015F\u0160\x03\x02\x02\x02\u0160\u0163\x03\x02\x02\x02\u0161\u015F\x03" +
		"\x02\x02\x02\u0162\u015A\x03\x02\x02\x02\u0162\u0163\x03\x02\x02\x02\u0163" +
		"\u0164\x03\x02\x02\x02\u0164\u0165\x07C\x02\x02\u0165/\x03\x02\x02\x02" +
		"\u0166\u0167\t\x04\x02\x02\u01671\x03\x02\x02\x02\u0168\u0169\t\x03\x02" +
		"\x02\u01693\x03\x02\x02\x02\u016A\u016B\t\x05\x02\x02\u016B5\x03\x02\x02" +
		"\x02\u016C\u016D\t\x06\x02\x02\u016D7\x03\x02\x02\x02\u016E\u016F\x07" +
		"-\x02\x02\u016F9\x03\x02\x02\x02\u0170\u0171\x07.\x02\x02\u0171;\x03\x02" +
		"\x02\x02\u0172\u0173\t\x07\x02\x02\u0173=\x03\x02\x02\x02\u0174\u0175" +
		"\t\b\x02\x02\u0175?\x03\x02\x02\x02$DJNW^eiow~\x87\x8B\x92\xA7\xAE\xBF" +
		"\xCD\xDC\xE1\xE4\xEB\xF2\xF7\u0104\u010B\u0118\u0129\u0143\u0145\u0149" +
		"\u014E\u0157\u015F\u0162";
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
	public END(): TerminalNode { return this.getToken(WJSCParser.END, 0); }
	public EOF(): TerminalNode { return this.getToken(WJSCParser.EOF, 0); }
	public imports(): ImportsContext[];
	public imports(i: number): ImportsContext;
	public imports(i?: number): ImportsContext | ImportsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportsContext);
		} else {
			return this.getRuleContext(i, ImportsContext);
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
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
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


export class ImportsContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(WJSCParser.IMPORT, 0); }
	public STRING_LITERAL(): TerminalNode { return this.getToken(WJSCParser.STRING_LITERAL, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.AS, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.IDENTIFIER, 0); }
	public importList(): ImportListContext | undefined {
		return this.tryGetRuleContext(0, ImportListContext);
	}
	public FROM(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.FROM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WJSCParser.RULE_imports; }
	// @Override
	public enterRule(listener: WJSCParserListener): void {
		if (listener.enterImports) {
			listener.enterImports(this);
		}
	}
	// @Override
	public exitRule(listener: WJSCParserListener): void {
		if (listener.exitImports) {
			listener.exitImports(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WJSCParserVisitor<Result>): Result {
		if (visitor.visitImports) {
			return visitor.visitImports(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportListContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WJSCParser.IDENTIFIER);
		} else {
			return this.getToken(WJSCParser.IDENTIFIER, i);
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
	public get ruleIndex(): number { return WJSCParser.RULE_importList; }
	// @Override
	public enterRule(listener: WJSCParserListener): void {
		if (listener.enterImportList) {
			listener.enterImportList(this);
		}
	}
	// @Override
	public exitRule(listener: WJSCParserListener): void {
		if (listener.exitImportList) {
			listener.exitImportList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WJSCParserVisitor<Result>): Result {
		if (visitor.visitImportList) {
			return visitor.visitImportList(this);
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
	public EXTERN(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.EXTERN, 0); }
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
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WJSCParser.IDENTIFIER);
		} else {
			return this.getToken(WJSCParser.IDENTIFIER, i);
		}
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(WJSCParser.COLON, 0); }
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


