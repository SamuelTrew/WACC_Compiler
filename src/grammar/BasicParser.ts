// Generated from BasicParser.g4 by ANTLR 4.6-SNAPSHOT


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

import { BasicParserListener } from "./BasicParserListener";
import { BasicParserVisitor } from "./BasicParserVisitor";


export class BasicParser extends Parser {
	public static readonly PLUS = 1;
	public static readonly MINUS = 2;
	public static readonly OPEN_PARENTHESES = 3;
	public static readonly CLOSE_PARENTHESES = 4;
	public static readonly INTEGER = 5;
	public static readonly RULE_binaryOper = 0;
	public static readonly RULE_expr = 1;
	public static readonly RULE_prog = 2;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"binaryOper", "expr", "prog",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'+'", "'-'", "'('", "')'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "PLUS", "MINUS", "OPEN_PARENTHESES", "CLOSE_PARENTHESES", "INTEGER",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(BasicParser._LITERAL_NAMES, BasicParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return BasicParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "BasicParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return BasicParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return BasicParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(BasicParser._ATN, this);
	}
	// @RuleVersion(0)
	public binaryOper(): BinaryOperContext {
		let _localctx: BinaryOperContext = new BinaryOperContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, BasicParser.RULE_binaryOper);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 6;
			_la = this._input.LA(1);
			if (!(_la === BasicParser.PLUS || _la === BasicParser.MINUS)) {
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

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 2;
		this.enterRecursionRule(_localctx, 2, BasicParser.RULE_expr, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 14;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BasicParser.INTEGER:
				{
				this.state = 9;
				this.match(BasicParser.INTEGER);
				}
				break;
			case BasicParser.OPEN_PARENTHESES:
				{
				this.state = 10;
				this.match(BasicParser.OPEN_PARENTHESES);
				this.state = 11;
				this.expr(0);
				this.state = 12;
				this.match(BasicParser.CLOSE_PARENTHESES);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 22;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ExprContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, BasicParser.RULE_expr);
					this.state = 16;
					if (!(this.precpred(this._ctx, 3))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
					}
					this.state = 17;
					this.binaryOper();
					this.state = 18;
					this.expr(4);
					}
					}
				}
				this.state = 24;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
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
	public prog(): ProgContext {
		let _localctx: ProgContext = new ProgContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, BasicParser.RULE_prog);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 28;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BasicParser.OPEN_PARENTHESES || _la === BasicParser.INTEGER) {
				{
				{
				this.state = 25;
				this.expr(0);
				}
				}
				this.state = 30;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 31;
			this.match(BasicParser.EOF);
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
		case 1:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\x07$\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x03\x02\x03\x02\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x05\x03\x11\n\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x07\x03\x17\n\x03\f\x03\x0E\x03\x1A\v\x03\x03\x04\x07\x04\x1D" +
		"\n\x04\f\x04\x0E\x04 \v\x04\x03\x04\x03\x04\x03\x04\x02\x02\x03\x04\x05" +
		"\x02\x02\x04\x02\x06\x02\x02\x03\x03\x02\x03\x04#\x02\b\x03\x02\x02\x02" +
		"\x04\x10\x03\x02\x02\x02\x06\x1E\x03\x02\x02\x02\b\t\t\x02\x02\x02\t\x03" +
		"\x03\x02\x02\x02\n\v\b\x03\x01\x02\v\x11\x07\x07\x02\x02\f\r\x07\x05\x02" +
		"\x02\r\x0E\x05\x04\x03\x02\x0E\x0F\x07\x06\x02\x02\x0F\x11\x03\x02\x02" +
		"\x02\x10\n\x03\x02\x02\x02\x10\f\x03\x02\x02\x02\x11\x18\x03\x02\x02\x02" +
		"\x12\x13\f\x05\x02\x02\x13\x14\x05\x02\x02\x02\x14\x15\x05\x04\x03\x06" +
		"\x15\x17\x03\x02\x02\x02\x16\x12\x03\x02\x02\x02\x17\x1A\x03\x02\x02\x02" +
		"\x18\x16\x03\x02\x02\x02\x18\x19\x03\x02\x02\x02\x19\x05\x03\x02\x02\x02" +
		"\x1A\x18\x03\x02\x02\x02\x1B\x1D\x05\x04\x03\x02\x1C\x1B\x03\x02\x02\x02" +
		"\x1D \x03\x02\x02\x02\x1E\x1C\x03\x02\x02\x02\x1E\x1F\x03\x02\x02\x02" +
		"\x1F!\x03\x02\x02\x02 \x1E\x03\x02\x02\x02!\"\x07\x02\x02\x03\"\x07\x03" +
		"\x02\x02\x02\x05\x10\x18\x1E";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!BasicParser.__ATN) {
			BasicParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(BasicParser._serializedATN));
		}

		return BasicParser.__ATN;
	}

}

export class BinaryOperContext extends ParserRuleContext {
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(BasicParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(BasicParser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BasicParser.RULE_binaryOper; }
	// @Override
	public enterRule(listener: BasicParserListener): void {
		if (listener.enterBinaryOper) {
			listener.enterBinaryOper(this);
		}
	}
	// @Override
	public exitRule(listener: BasicParserListener): void {
		if (listener.exitBinaryOper) {
			listener.exitBinaryOper(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BasicParserVisitor<Result>): Result {
		if (visitor.visitBinaryOper) {
			return visitor.visitBinaryOper(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public binaryOper(): BinaryOperContext | undefined {
		return this.tryGetRuleContext(0, BinaryOperContext);
	}
	public INTEGER(): TerminalNode | undefined { return this.tryGetToken(BasicParser.INTEGER, 0); }
	public OPEN_PARENTHESES(): TerminalNode | undefined { return this.tryGetToken(BasicParser.OPEN_PARENTHESES, 0); }
	public CLOSE_PARENTHESES(): TerminalNode | undefined { return this.tryGetToken(BasicParser.CLOSE_PARENTHESES, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BasicParser.RULE_expr; }
	// @Override
	public enterRule(listener: BasicParserListener): void {
		if (listener.enterExpr) {
			listener.enterExpr(this);
		}
	}
	// @Override
	public exitRule(listener: BasicParserListener): void {
		if (listener.exitExpr) {
			listener.exitExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BasicParserVisitor<Result>): Result {
		if (visitor.visitExpr) {
			return visitor.visitExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProgContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(BasicParser.EOF, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BasicParser.RULE_prog; }
	// @Override
	public enterRule(listener: BasicParserListener): void {
		if (listener.enterProg) {
			listener.enterProg(this);
		}
	}
	// @Override
	public exitRule(listener: BasicParserListener): void {
		if (listener.exitProg) {
			listener.exitProg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BasicParserVisitor<Result>): Result {
		if (visitor.visitProg) {
			return visitor.visitProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


