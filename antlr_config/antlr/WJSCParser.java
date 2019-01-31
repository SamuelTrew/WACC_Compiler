// Generated from WJSCParser.g4 by ANTLR 4.7
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class WJSCParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		EOL=1, WHITESPACE=2, BEGIN=3, END=4, IS=5, WSKIP=6, READ=7, FREE=8, RETURN=9, 
		EXIT=10, PRINT=11, PRINTLN=12, IF=13, THEN=14, ELSE=15, FI=16, WHILE=17, 
		DO=18, DONE=19, CALL=20, FIRST=21, SECOND=22, MULTIPLY=23, DIVIDE=24, 
		MODULO=25, PLUS=26, MINUS=27, GREATER_THAN=28, GREATER_EQUAL=29, LESS_THAN=30, 
		LESS_EQUAL=31, EQUALS=32, STRICT_EQUALS=33, NEQUALS=34, NSTRICT_EQUALS=35, 
		LOGICAL_AND=36, LOGICAL_OR=37, ASSIGNMENT=38, NEW_PAIR=39, LOGICAL_NEGATION=40, 
		LENGTH=41, ORDER_OF=42, CHARACTER_OF=43, DIGIT=44, BOOLEAN_LITERAL=45, 
		TRUTH=46, FALSITY=47, CHARACTER_LITERAL=48, PAIR_LITERAL=49, STRING_LITERAL=50, 
		INTEGER=51, BOOLEAN=52, CHARACTER=53, STRING=54, PAIR=55, LPAREN=56, RPAREN=57, 
		LBRACK=58, RBRACK=59, COMMA=60, SEMICOLON=61, APOS=62, DBLQ=63, COMMENT=64, 
		IDENTIFIER=65;
	public static final int
		RULE_program = 0, RULE_func = 1, RULE_paramList = 2, RULE_param = 3, RULE_statement = 4, 
		RULE_conditionalBlocks = 5, RULE_assignment = 6, RULE_assignLhs = 7, RULE_assignRhs = 8, 
		RULE_argList = 9, RULE_pairElement = 10, RULE_type = 11, RULE_baseType = 12, 
		RULE_arrayType = 13, RULE_pairType = 14, RULE_pairElementType = 15, RULE_expression = 16, 
		RULE_integerLiteral = 17, RULE_arrayElement = 18, RULE_arrayLiteral = 19, 
		RULE_binaryOperator = 20, RULE_unaryOperator = 21, RULE_stdlib = 22;
	public static final String[] ruleNames = {
		"program", "func", "paramList", "param", "statement", "conditionalBlocks", 
		"assignment", "assignLhs", "assignRhs", "argList", "pairElement", "type", 
		"baseType", "arrayType", "pairType", "pairElementType", "expression", 
		"integerLiteral", "arrayElement", "arrayLiteral", "binaryOperator", "unaryOperator", 
		"stdlib"
	};

	private static final String[] _LITERAL_NAMES = {
		null, null, null, "'begin'", "'end'", "'is'", "'skip'", "'read'", "'free'", 
		"'return'", "'exit'", "'print'", "'println'", "'if'", "'then'", "'else'", 
		"'fi'", "'while'", "'do'", "'done'", "'call'", "'fst'", "'snd'", "'*'", 
		"'/'", "'%'", "'+'", "'-'", "'>'", "'>='", "'<'", "'<='", "'=='", "'==='", 
		"'!='", "'!=='", "'&&'", "'||'", "'='", "'newpair'", "'!'", "'len'", "'ord'", 
		"'chr'", null, null, "'true'", "'false'", null, "'null'", null, "'int'", 
		"'bool'", "'char'", "'string'", "'pair'", "'('", "')'", "'['", "']'", 
		"','", "';'", "'''", "'\"'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "EOL", "WHITESPACE", "BEGIN", "END", "IS", "WSKIP", "READ", "FREE", 
		"RETURN", "EXIT", "PRINT", "PRINTLN", "IF", "THEN", "ELSE", "FI", "WHILE", 
		"DO", "DONE", "CALL", "FIRST", "SECOND", "MULTIPLY", "DIVIDE", "MODULO", 
		"PLUS", "MINUS", "GREATER_THAN", "GREATER_EQUAL", "LESS_THAN", "LESS_EQUAL", 
		"EQUALS", "STRICT_EQUALS", "NEQUALS", "NSTRICT_EQUALS", "LOGICAL_AND", 
		"LOGICAL_OR", "ASSIGNMENT", "NEW_PAIR", "LOGICAL_NEGATION", "LENGTH", 
		"ORDER_OF", "CHARACTER_OF", "DIGIT", "BOOLEAN_LITERAL", "TRUTH", "FALSITY", 
		"CHARACTER_LITERAL", "PAIR_LITERAL", "STRING_LITERAL", "INTEGER", "BOOLEAN", 
		"CHARACTER", "STRING", "PAIR", "LPAREN", "RPAREN", "LBRACK", "RBRACK", 
		"COMMA", "SEMICOLON", "APOS", "DBLQ", "COMMENT", "IDENTIFIER"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "WJSCParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public WJSCParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class ProgramContext extends ParserRuleContext {
		public TerminalNode BEGIN() { return getToken(WJSCParser.BEGIN, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public TerminalNode END() { return getToken(WJSCParser.END, 0); }
		public TerminalNode EOF() { return getToken(WJSCParser.EOF, 0); }
		public List<FuncContext> func() {
			return getRuleContexts(FuncContext.class);
		}
		public FuncContext func(int i) {
			return getRuleContext(FuncContext.class,i);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof WJSCParserListener ) ((WJSCParserListener)listener).enterProgram(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof WJSCParserListener ) ((WJSCParserListener)listener).exitProgram(this);
		}
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(46);
			match(BEGIN);
			setState(50);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,0,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(47);
					func();
					}
					} 
				}
				setState(52);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,0,_ctx);
			}
			setState(53);
			statement(0);
			setState(54);
			match(END);
			setState(55);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FuncContext extends ParserRuleContext {
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public TerminalNode IDENTIFIER() { return getToken(WJSCParser.IDENTIFIER, 0); }
		public TerminalNode LPAREN() { return getToken(WJSCParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(WJSCParser.RPAREN, 0); }
		public TerminalNode IS() { return getToken(WJSCParser.IS, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public TerminalNode END() { return getToken(WJSCParser.END, 0); }
		public ParamListContext paramList() {
			return getRuleContext(ParamListContext.class,0);
		}
		public FuncContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_func; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof WJSCParserListener ) ((WJSCParserListener)listener).enterFunc(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof WJSCParserListener ) ((WJSCParserListener)listener).exitFunc(this);
		}
	}

	public final FuncContext func() throws RecognitionException {
		FuncContext _localctx = new FuncContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_func);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(57);
			type();
			setState(58);
			match(IDENTIFIER);
			setState(59);
			match(LPAREN);
			setState(61);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << INTEGER) | (1L << BOOLEAN) | (1L << CHARACTER) | (1L << STRING) | (1L << PAIR))) != 0)) {
				{
				setState(60);
				paramList();
				}
			}

			setState(63);
			match(RPAREN);
			setState(64);
			match(IS);
			setState(65);
			statement(0);
			setState(66);
			match(END);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParamListContext extends ParserRuleContext {
		public List<ParamContext> param() {
			return getRuleContexts(ParamContext.class);
		}
		public ParamContext param(int i) {
			return getRuleContext(ParamContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(WJSCParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(WJSCParser.COMMA, i);
		}
		public ParamListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_paramList; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof WJSCParserListener ) ((WJSCParserListener)listener).enterParamList(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof WJSCParserListener ) ((WJSCParserListener)listener).exitParamList(this);
		}
	}

	public final ParamListContext paramList() throws RecognitionException {
		ParamListContext _localctx = new ParamListContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_paramList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(68);
			param();
			setState(73);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(69);
				match(COMMA);
				setState(70);
				param();
				}
				}
				setState(75);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParamContext extends ParserRuleContext {
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public TerminalNode IDENTIFIER() { return getToken(WJSCParser.IDENTIFIER, 0); }
		public ParamContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_param; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof WJSCParserListener ) ((WJSCParserListener)listener).enterParam(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof WJSCParserListener ) ((WJSCParserListener)listener).exitParam(this);
		}
	}

	public final ParamContext param() throws RecognitionException {
		ParamContext _localctx = new ParamContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_param);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(76);
			type();
			setState(77);
			match(IDENTIFIER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public TerminalNode WSKIP() { return getToken(WJSCParser.WSKIP, 0); }
		public ConditionalBlocksContext conditionalBlocks() {
			return getRuleContext(ConditionalBlocksContext.class,0);
		}
		public AssignmentContext assignment() {
			return getRuleContext(AssignmentContext.class,0);
		}
		public TerminalNode READ() { return getToken(WJSCParser.READ, 0); }
		public AssignLhsContext assignLhs() {
			return getRuleContext(AssignLhsContext.class,0);
		}
		public StdlibContext stdlib() {
			return getRuleContext(StdlibContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode BEGIN() { return getToken(WJSCParser.BEGIN, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public TerminalNode END() { return getToken(WJSCParser.END, 0); }
		public TerminalNode SEMICOLON() { return getToken(WJSCParser.SEMICOLON, 0); }
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof WJSCParserListener ) ((WJSCParserListener)listener).enterStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof WJSCParserListener ) ((WJSCParserListener)listener).exitStatement(this);
		}
	}

	public final StatementContext statement() throws RecognitionException {
		return statement(0);
	}

	private StatementContext statement(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		StatementContext _localctx = new StatementContext(_ctx, _parentState);
		StatementContext _prevctx = _localctx;
		int _startState = 8;
		enterRecursionRule(_localctx, 8, RULE_statement, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(93);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				{
				setState(80);
				match(WSKIP);
				}
				break;
			case 2:
				{
				setState(81);
				conditionalBlocks();
				}
				break;
			case 3:
				{
				setState(82);
				assignment();
				}
				break;
			case 4:
				{
				setState(83);
				match(READ);
				setState(84);
				assignLhs();
				}
				break;
			case 5:
				{
				setState(85);
				stdlib();
				setState(86);
				expression(0);
				}
				break;
			case 6:
				{
				setState(88);
				conditionalBlocks();
				}
				break;
			case 7:
				{
				setState(89);
				match(BEGIN);
				setState(90);
				statement(0);
				setState(91);
				match(END);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(100);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,4,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new StatementContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_statement);
					setState(95);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(96);
					match(SEMICOLON);
					setState(97);
					statement(2);
					}
					} 
				}
				setState(102);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,4,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class ConditionalBlocksContext extends ParserRuleContext {
		public TerminalNode IF() { return getToken(WJSCParser.IF, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode THEN() { return getToken(WJSCParser.THEN, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public TerminalNode ELSE() { return getToken(WJSCParser.ELSE, 0); }
		public TerminalNode FI() { return getToken(WJSCParser.FI, 0); }
		public TerminalNode WHILE() { return getToken(WJSCParser.WHILE, 0); }
		public TerminalNode DO() { return getToken(WJSCParser.DO, 0); }
		public TerminalNode DONE() { return getToken(WJSCParser.DONE, 0); }
		public ConditionalBlocksContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_conditionalBlocks; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof WJSCParserListener ) ((WJSCParserListener)listener).enterConditionalBlocks(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof WJSCParserListener ) ((WJSCParserListener)listener).exitConditionalBlocks(this);
		}
	}

	public final ConditionalBlocksContext conditionalBlocks() throws RecognitionException {
		ConditionalBlocksContext _localctx = new ConditionalBlocksContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_conditionalBlocks);
		try {
			setState(117);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IF:
				enterOuterAlt(_localctx, 1);
				{
				setState(103);
				match(IF);
				setState(104);
				expression(0);
				setState(105);
				match(THEN);
				setState(106);
				statement(0);
				setState(107);
				match(ELSE);
				setState(108);
				statement(0);
				setState(109);
				match(FI);
				}
				break;
			case WHILE:
				enterOuterAlt(_localctx, 2);
				{
				setState(111);
				match(WHILE);
				setState(112);
				expression(0);
				setState(113);
				match(DO);
				setState(114);
				statement(0);
				setState(115);
				match(DONE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssignmentContext extends ParserRuleContext {
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public TerminalNode IDENTIFIER() { return getToken(WJSCParser.IDENTIFIER, 0); }
		public TerminalNode ASSIGNMENT() { return getToken(WJSCParser.ASSIGNMENT, 0); }
		public AssignRhsContext assignRhs() {
			return getRuleContext(AssignRhsContext.class,0);
		}
		public AssignLhsContext assignLhs() {
			return getRuleContext(AssignLhsContext.class,0);
		}
		public AssignmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignment; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof WJSCParserListener ) ((WJSCParserListener)listener).enterAssignment(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof WJSCParserListener ) ((WJSCParserListener)listener).exitAssignment(this);
		}
	}

	public final AssignmentContext assignment() throws RecognitionException {
		AssignmentContext _localctx = new AssignmentContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_assignment);
		try {
			setState(128);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case INTEGER:
			case BOOLEAN:
			case CHARACTER:
			case STRING:
			case PAIR:
				enterOuterAlt(_localctx, 1);
				{
				setState(119);
				type();
				setState(120);
				match(IDENTIFIER);
				setState(121);
				match(ASSIGNMENT);
				setState(122);
				assignRhs();
				}
				break;
			case FIRST:
			case SECOND:
			case IDENTIFIER:
				enterOuterAlt(_localctx, 2);
				{
				setState(124);
				assignLhs();
				setState(125);
				match(ASSIGNMENT);
				setState(126);
				assignRhs();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssignLhsContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(WJSCParser.IDENTIFIER, 0); }
		public ArrayElementContext arrayElement() {
			return getRuleContext(ArrayElementContext.class,0);
		}
		public PairElementContext pairElement() {
			return getRuleContext(PairElementContext.class,0);
		}
		public AssignLhsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignLhs; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof WJSCParserListener ) ((WJSCParserListener)listener).enterAssignLhs(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof WJSCParserListener ) ((WJSCParserListener)listener).exitAssignLhs(this);
		}
	}

	public final AssignLhsContext assignLhs() throws RecognitionException {
		AssignLhsContext _localctx = new AssignLhsContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_assignLhs);
		try {
			setState(133);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(130);
				match(IDENTIFIER);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(131);
				arrayElement();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(132);
				pairElement();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssignRhsContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public ArrayLiteralContext arrayLiteral() {
			return getRuleContext(ArrayLiteralContext.class,0);
		}
		public TerminalNode NEW_PAIR() { return getToken(WJSCParser.NEW_PAIR, 0); }
		public TerminalNode LPAREN() { return getToken(WJSCParser.LPAREN, 0); }
		public TerminalNode COMMA() { return getToken(WJSCParser.COMMA, 0); }
		public TerminalNode RPAREN() { return getToken(WJSCParser.RPAREN, 0); }
		public PairElementContext pairElement() {
			return getRuleContext(PairElementContext.class,0);
		}
		public TerminalNode CALL() { return getToken(WJSCParser.CALL, 0); }
		public TerminalNode IDENTIFIER() { return getToken(WJSCParser.IDENTIFIER, 0); }
		public ArgListContext argList() {
			return getRuleContext(ArgListContext.class,0);
		}
		public AssignRhsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignRhs; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof WJSCParserListener ) ((WJSCParserListener)listener).enterAssignRhs(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof WJSCParserListener ) ((WJSCParserListener)listener).exitAssignRhs(this);
		}
	}

	public final AssignRhsContext assignRhs() throws RecognitionException {
		AssignRhsContext _localctx = new AssignRhsContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_assignRhs);
		int _la;
		try {
			setState(152);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PLUS:
			case MINUS:
			case LOGICAL_NEGATION:
			case LENGTH:
			case ORDER_OF:
			case CHARACTER_OF:
			case DIGIT:
			case BOOLEAN_LITERAL:
			case CHARACTER_LITERAL:
			case PAIR_LITERAL:
			case STRING_LITERAL:
			case LPAREN:
			case IDENTIFIER:
				enterOuterAlt(_localctx, 1);
				{
				setState(135);
				expression(0);
				}
				break;
			case LBRACK:
				enterOuterAlt(_localctx, 2);
				{
				setState(136);
				arrayLiteral();
				}
				break;
			case NEW_PAIR:
				enterOuterAlt(_localctx, 3);
				{
				setState(137);
				match(NEW_PAIR);
				setState(138);
				match(LPAREN);
				setState(139);
				expression(0);
				setState(140);
				match(COMMA);
				setState(141);
				expression(0);
				setState(142);
				match(RPAREN);
				}
				break;
			case FIRST:
			case SECOND:
				enterOuterAlt(_localctx, 4);
				{
				setState(144);
				pairElement();
				}
				break;
			case CALL:
				enterOuterAlt(_localctx, 5);
				{
				setState(145);
				match(CALL);
				setState(146);
				match(IDENTIFIER);
				setState(147);
				match(LPAREN);
				setState(149);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 26)) & ~0x3f) == 0 && ((1L << (_la - 26)) & ((1L << (PLUS - 26)) | (1L << (MINUS - 26)) | (1L << (LOGICAL_NEGATION - 26)) | (1L << (LENGTH - 26)) | (1L << (ORDER_OF - 26)) | (1L << (CHARACTER_OF - 26)) | (1L << (DIGIT - 26)) | (1L << (BOOLEAN_LITERAL - 26)) | (1L << (CHARACTER_LITERAL - 26)) | (1L << (PAIR_LITERAL - 26)) | (1L << (STRING_LITERAL - 26)) | (1L << (LPAREN - 26)) | (1L << (IDENTIFIER - 26)))) != 0)) {
					{
					setState(148);
					argList();
					}
				}

				setState(151);
				match(RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArgListContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(WJSCParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(WJSCParser.COMMA, i);
		}
		public ArgListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_argList; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof WJSCParserListener ) ((WJSCParserListener)listener).enterArgList(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof WJSCParserListener ) ((WJSCParserListener)listener).exitArgList(this);
		}
	}

	public final ArgListContext argList() throws RecognitionException {
		ArgListContext _localctx = new ArgListContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_argList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(154);
			expression(0);
			setState(159);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(155);
				match(COMMA);
				setState(156);
				expression(0);
				}
				}
				setState(161);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PairElementContext extends ParserRuleContext {
		public TerminalNode FIRST() { return getToken(WJSCParser.FIRST, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode SECOND() { return getToken(WJSCParser.SECOND, 0); }
		public PairElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pairElement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof WJSCParserListener ) ((WJSCParserListener)listener).enterPairElement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof WJSCParserListener ) ((WJSCParserListener)listener).exitPairElement(this);
		}
	}

	public final PairElementContext pairElement() throws RecognitionException {
		PairElementContext _localctx = new PairElementContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_pairElement);
		try {
			setState(166);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case FIRST:
				enterOuterAlt(_localctx, 1);
				{
				setState(162);
				match(FIRST);
				setState(163);
				expression(0);
				}
				break;
			case SECOND:
				enterOuterAlt(_localctx, 2);
				{
				setState(164);
				match(SECOND);
				setState(165);
				expression(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeContext extends ParserRuleContext {
		public BaseTypeContext baseType() {
			return getRuleContext(BaseTypeContext.class,0);
		}
		public ArrayTypeContext arrayType() {
			return getRuleContext(ArrayTypeContext.class,0);
		}
		public PairTypeContext pairType() {
			return getRuleContext(PairTypeContext.class,0);
		}
		public TypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof WJSCParserListener ) ((WJSCParserListener)listener).enterType(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof WJSCParserListener ) ((WJSCParserListener)listener).exitType(this);
		}
	}

	public final TypeContext type() throws RecognitionException {
		TypeContext _localctx = new TypeContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_type);
		try {
			setState(171);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(168);
				baseType();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(169);
				arrayType(0);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(170);
				pairType();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BaseTypeContext extends ParserRuleContext {
		public TerminalNode INTEGER() { return getToken(WJSCParser.INTEGER, 0); }
		public TerminalNode BOOLEAN() { return getToken(WJSCParser.BOOLEAN, 0); }
		public TerminalNode CHARACTER() { return getToken(WJSCParser.CHARACTER, 0); }
		public TerminalNode STRING() { return getToken(WJSCParser.STRING, 0); }
		public BaseTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_baseType; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof WJSCParserListener ) ((WJSCParserListener)listener).enterBaseType(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof WJSCParserListener ) ((WJSCParserListener)listener).exitBaseType(this);
		}
	}

	public final BaseTypeContext baseType() throws RecognitionException {
		BaseTypeContext _localctx = new BaseTypeContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_baseType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(173);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << INTEGER) | (1L << BOOLEAN) | (1L << CHARACTER) | (1L << STRING))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArrayTypeContext extends ParserRuleContext {
		public BaseTypeContext baseType() {
			return getRuleContext(BaseTypeContext.class,0);
		}
		public TerminalNode LBRACK() { return getToken(WJSCParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(WJSCParser.RBRACK, 0); }
		public PairTypeContext pairType() {
			return getRuleContext(PairTypeContext.class,0);
		}
		public ArrayTypeContext arrayType() {
			return getRuleContext(ArrayTypeContext.class,0);
		}
		public ArrayTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrayType; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof WJSCParserListener ) ((WJSCParserListener)listener).enterArrayType(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof WJSCParserListener ) ((WJSCParserListener)listener).exitArrayType(this);
		}
	}

	public final ArrayTypeContext arrayType() throws RecognitionException {
		return arrayType(0);
	}

	private ArrayTypeContext arrayType(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ArrayTypeContext _localctx = new ArrayTypeContext(_ctx, _parentState);
		ArrayTypeContext _prevctx = _localctx;
		int _startState = 26;
		enterRecursionRule(_localctx, 26, RULE_arrayType, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(184);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case INTEGER:
			case BOOLEAN:
			case CHARACTER:
			case STRING:
				{
				setState(176);
				baseType();
				setState(177);
				match(LBRACK);
				setState(178);
				match(RBRACK);
				}
				break;
			case PAIR:
				{
				setState(180);
				pairType();
				setState(181);
				match(LBRACK);
				setState(182);
				match(RBRACK);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(191);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,14,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new ArrayTypeContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_arrayType);
					setState(186);
					if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
					setState(187);
					match(LBRACK);
					setState(188);
					match(RBRACK);
					}
					} 
				}
				setState(193);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,14,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class PairTypeContext extends ParserRuleContext {
		public TerminalNode PAIR() { return getToken(WJSCParser.PAIR, 0); }
		public TerminalNode LPAREN() { return getToken(WJSCParser.LPAREN, 0); }
		public List<PairElementTypeContext> pairElementType() {
			return getRuleContexts(PairElementTypeContext.class);
		}
		public PairElementTypeContext pairElementType(int i) {
			return getRuleContext(PairElementTypeContext.class,i);
		}
		public TerminalNode COMMA() { return getToken(WJSCParser.COMMA, 0); }
		public TerminalNode RPAREN() { return getToken(WJSCParser.RPAREN, 0); }
		public PairTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pairType; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof WJSCParserListener ) ((WJSCParserListener)listener).enterPairType(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof WJSCParserListener ) ((WJSCParserListener)listener).exitPairType(this);
		}
	}

	public final PairTypeContext pairType() throws RecognitionException {
		PairTypeContext _localctx = new PairTypeContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_pairType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(194);
			match(PAIR);
			setState(195);
			match(LPAREN);
			setState(196);
			pairElementType();
			setState(197);
			match(COMMA);
			setState(198);
			pairElementType();
			setState(199);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PairElementTypeContext extends ParserRuleContext {
		public BaseTypeContext baseType() {
			return getRuleContext(BaseTypeContext.class,0);
		}
		public ArrayTypeContext arrayType() {
			return getRuleContext(ArrayTypeContext.class,0);
		}
		public TerminalNode PAIR() { return getToken(WJSCParser.PAIR, 0); }
		public PairElementTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pairElementType; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof WJSCParserListener ) ((WJSCParserListener)listener).enterPairElementType(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof WJSCParserListener ) ((WJSCParserListener)listener).exitPairElementType(this);
		}
	}

	public final PairElementTypeContext pairElementType() throws RecognitionException {
		PairElementTypeContext _localctx = new PairElementTypeContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_pairElementType);
		try {
			setState(204);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(201);
				baseType();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(202);
				arrayType(0);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(203);
				match(PAIR);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionContext extends ParserRuleContext {
		public IntegerLiteralContext integerLiteral() {
			return getRuleContext(IntegerLiteralContext.class,0);
		}
		public ArrayElementContext arrayElement() {
			return getRuleContext(ArrayElementContext.class,0);
		}
		public UnaryOperatorContext unaryOperator() {
			return getRuleContext(UnaryOperatorContext.class,0);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode LPAREN() { return getToken(WJSCParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(WJSCParser.RPAREN, 0); }
		public TerminalNode IDENTIFIER() { return getToken(WJSCParser.IDENTIFIER, 0); }
		public TerminalNode BOOLEAN_LITERAL() { return getToken(WJSCParser.BOOLEAN_LITERAL, 0); }
		public TerminalNode CHARACTER_LITERAL() { return getToken(WJSCParser.CHARACTER_LITERAL, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(WJSCParser.STRING_LITERAL, 0); }
		public TerminalNode PAIR_LITERAL() { return getToken(WJSCParser.PAIR_LITERAL, 0); }
		public BinaryOperatorContext binaryOperator() {
			return getRuleContext(BinaryOperatorContext.class,0);
		}
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof WJSCParserListener ) ((WJSCParserListener)listener).enterExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof WJSCParserListener ) ((WJSCParserListener)listener).exitExpression(this);
		}
	}

	public final ExpressionContext expression() throws RecognitionException {
		return expression(0);
	}

	private ExpressionContext expression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpressionContext _localctx = new ExpressionContext(_ctx, _parentState);
		ExpressionContext _prevctx = _localctx;
		int _startState = 32;
		enterRecursionRule(_localctx, 32, RULE_expression, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(221);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,16,_ctx) ) {
			case 1:
				{
				setState(207);
				integerLiteral();
				}
				break;
			case 2:
				{
				setState(208);
				arrayElement();
				}
				break;
			case 3:
				{
				setState(209);
				unaryOperator();
				setState(210);
				expression(7);
				}
				break;
			case 4:
				{
				setState(212);
				match(LPAREN);
				setState(213);
				expression(0);
				setState(214);
				match(RPAREN);
				}
				break;
			case 5:
				{
				setState(216);
				match(IDENTIFIER);
				}
				break;
			case 6:
				{
				setState(217);
				match(BOOLEAN_LITERAL);
				}
				break;
			case 7:
				{
				setState(218);
				match(CHARACTER_LITERAL);
				}
				break;
			case 8:
				{
				setState(219);
				match(STRING_LITERAL);
				}
				break;
			case 9:
				{
				setState(220);
				match(PAIR_LITERAL);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(229);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,17,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new ExpressionContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_expression);
					setState(223);
					if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
					setState(224);
					binaryOperator();
					setState(225);
					expression(10);
					}
					} 
				}
				setState(231);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,17,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class IntegerLiteralContext extends ParserRuleContext {
		public List<TerminalNode> DIGIT() { return getTokens(WJSCParser.DIGIT); }
		public TerminalNode DIGIT(int i) {
			return getToken(WJSCParser.DIGIT, i);
		}
		public TerminalNode PLUS() { return getToken(WJSCParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(WJSCParser.MINUS, 0); }
		public IntegerLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_integerLiteral; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof WJSCParserListener ) ((WJSCParserListener)listener).enterIntegerLiteral(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof WJSCParserListener ) ((WJSCParserListener)listener).exitIntegerLiteral(this);
		}
	}

	public final IntegerLiteralContext integerLiteral() throws RecognitionException {
		IntegerLiteralContext _localctx = new IntegerLiteralContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_integerLiteral);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(233);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==PLUS || _la==MINUS) {
				{
				setState(232);
				_la = _input.LA(1);
				if ( !(_la==PLUS || _la==MINUS) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			setState(236); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(235);
					match(DIGIT);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(238); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,19,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArrayElementContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(WJSCParser.IDENTIFIER, 0); }
		public List<TerminalNode> LBRACK() { return getTokens(WJSCParser.LBRACK); }
		public TerminalNode LBRACK(int i) {
			return getToken(WJSCParser.LBRACK, i);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<TerminalNode> RBRACK() { return getTokens(WJSCParser.RBRACK); }
		public TerminalNode RBRACK(int i) {
			return getToken(WJSCParser.RBRACK, i);
		}
		public ArrayElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrayElement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof WJSCParserListener ) ((WJSCParserListener)listener).enterArrayElement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof WJSCParserListener ) ((WJSCParserListener)listener).exitArrayElement(this);
		}
	}

	public final ArrayElementContext arrayElement() throws RecognitionException {
		ArrayElementContext _localctx = new ArrayElementContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_arrayElement);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(240);
			match(IDENTIFIER);
			setState(245); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(241);
					match(LBRACK);
					setState(242);
					expression(0);
					setState(243);
					match(RBRACK);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(247); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,20,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArrayLiteralContext extends ParserRuleContext {
		public TerminalNode LBRACK() { return getToken(WJSCParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(WJSCParser.RBRACK, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(WJSCParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(WJSCParser.COMMA, i);
		}
		public ArrayLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrayLiteral; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof WJSCParserListener ) ((WJSCParserListener)listener).enterArrayLiteral(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof WJSCParserListener ) ((WJSCParserListener)listener).exitArrayLiteral(this);
		}
	}

	public final ArrayLiteralContext arrayLiteral() throws RecognitionException {
		ArrayLiteralContext _localctx = new ArrayLiteralContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_arrayLiteral);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(249);
			match(LBRACK);
			setState(258);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 26)) & ~0x3f) == 0 && ((1L << (_la - 26)) & ((1L << (PLUS - 26)) | (1L << (MINUS - 26)) | (1L << (LOGICAL_NEGATION - 26)) | (1L << (LENGTH - 26)) | (1L << (ORDER_OF - 26)) | (1L << (CHARACTER_OF - 26)) | (1L << (DIGIT - 26)) | (1L << (BOOLEAN_LITERAL - 26)) | (1L << (CHARACTER_LITERAL - 26)) | (1L << (PAIR_LITERAL - 26)) | (1L << (STRING_LITERAL - 26)) | (1L << (LPAREN - 26)) | (1L << (IDENTIFIER - 26)))) != 0)) {
				{
				setState(250);
				expression(0);
				setState(255);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(251);
					match(COMMA);
					setState(252);
					expression(0);
					}
					}
					setState(257);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(260);
			match(RBRACK);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BinaryOperatorContext extends ParserRuleContext {
		public TerminalNode MULTIPLY() { return getToken(WJSCParser.MULTIPLY, 0); }
		public TerminalNode DIVIDE() { return getToken(WJSCParser.DIVIDE, 0); }
		public TerminalNode MODULO() { return getToken(WJSCParser.MODULO, 0); }
		public TerminalNode PLUS() { return getToken(WJSCParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(WJSCParser.MINUS, 0); }
		public TerminalNode GREATER_THAN() { return getToken(WJSCParser.GREATER_THAN, 0); }
		public TerminalNode GREATER_EQUAL() { return getToken(WJSCParser.GREATER_EQUAL, 0); }
		public TerminalNode LESS_THAN() { return getToken(WJSCParser.LESS_THAN, 0); }
		public TerminalNode LESS_EQUAL() { return getToken(WJSCParser.LESS_EQUAL, 0); }
		public TerminalNode EQUALS() { return getToken(WJSCParser.EQUALS, 0); }
		public TerminalNode STRICT_EQUALS() { return getToken(WJSCParser.STRICT_EQUALS, 0); }
		public TerminalNode NEQUALS() { return getToken(WJSCParser.NEQUALS, 0); }
		public TerminalNode NSTRICT_EQUALS() { return getToken(WJSCParser.NSTRICT_EQUALS, 0); }
		public TerminalNode LOGICAL_AND() { return getToken(WJSCParser.LOGICAL_AND, 0); }
		public TerminalNode LOGICAL_OR() { return getToken(WJSCParser.LOGICAL_OR, 0); }
		public BinaryOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_binaryOperator; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof WJSCParserListener ) ((WJSCParserListener)listener).enterBinaryOperator(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof WJSCParserListener ) ((WJSCParserListener)listener).exitBinaryOperator(this);
		}
	}

	public final BinaryOperatorContext binaryOperator() throws RecognitionException {
		BinaryOperatorContext _localctx = new BinaryOperatorContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_binaryOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(262);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << MULTIPLY) | (1L << DIVIDE) | (1L << MODULO) | (1L << PLUS) | (1L << MINUS) | (1L << GREATER_THAN) | (1L << GREATER_EQUAL) | (1L << LESS_THAN) | (1L << LESS_EQUAL) | (1L << EQUALS) | (1L << STRICT_EQUALS) | (1L << NEQUALS) | (1L << NSTRICT_EQUALS) | (1L << LOGICAL_AND) | (1L << LOGICAL_OR))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UnaryOperatorContext extends ParserRuleContext {
		public TerminalNode LOGICAL_NEGATION() { return getToken(WJSCParser.LOGICAL_NEGATION, 0); }
		public TerminalNode MINUS() { return getToken(WJSCParser.MINUS, 0); }
		public TerminalNode LENGTH() { return getToken(WJSCParser.LENGTH, 0); }
		public TerminalNode ORDER_OF() { return getToken(WJSCParser.ORDER_OF, 0); }
		public TerminalNode CHARACTER_OF() { return getToken(WJSCParser.CHARACTER_OF, 0); }
		public UnaryOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unaryOperator; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof WJSCParserListener ) ((WJSCParserListener)listener).enterUnaryOperator(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof WJSCParserListener ) ((WJSCParserListener)listener).exitUnaryOperator(this);
		}
	}

	public final UnaryOperatorContext unaryOperator() throws RecognitionException {
		UnaryOperatorContext _localctx = new UnaryOperatorContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_unaryOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(264);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << MINUS) | (1L << LOGICAL_NEGATION) | (1L << LENGTH) | (1L << ORDER_OF) | (1L << CHARACTER_OF))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StdlibContext extends ParserRuleContext {
		public TerminalNode FREE() { return getToken(WJSCParser.FREE, 0); }
		public TerminalNode RETURN() { return getToken(WJSCParser.RETURN, 0); }
		public TerminalNode EXIT() { return getToken(WJSCParser.EXIT, 0); }
		public TerminalNode PRINT() { return getToken(WJSCParser.PRINT, 0); }
		public TerminalNode PRINTLN() { return getToken(WJSCParser.PRINTLN, 0); }
		public StdlibContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stdlib; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof WJSCParserListener ) ((WJSCParserListener)listener).enterStdlib(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof WJSCParserListener ) ((WJSCParserListener)listener).exitStdlib(this);
		}
	}

	public final StdlibContext stdlib() throws RecognitionException {
		StdlibContext _localctx = new StdlibContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_stdlib);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(266);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << FREE) | (1L << RETURN) | (1L << EXIT) | (1L << PRINT) | (1L << PRINTLN))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 4:
			return statement_sempred((StatementContext)_localctx, predIndex);
		case 13:
			return arrayType_sempred((ArrayTypeContext)_localctx, predIndex);
		case 16:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean statement_sempred(StatementContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean arrayType_sempred(ArrayTypeContext _localctx, int predIndex) {
		switch (predIndex) {
		case 1:
			return precpred(_ctx, 2);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 2:
			return precpred(_ctx, 9);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3C\u010f\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\3\2\3\2\7"+
		"\2\63\n\2\f\2\16\2\66\13\2\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\3\5\3@\n\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4\7\4J\n\4\f\4\16\4M\13\4\3\5\3\5\3\5\3\6"+
		"\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\5\6`\n\6\3\6\3\6"+
		"\3\6\7\6e\n\6\f\6\16\6h\13\6\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3"+
		"\7\3\7\3\7\3\7\5\7x\n\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\5\b\u0083"+
		"\n\b\3\t\3\t\3\t\5\t\u0088\n\t\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n"+
		"\3\n\3\n\3\n\3\n\5\n\u0098\n\n\3\n\5\n\u009b\n\n\3\13\3\13\3\13\7\13\u00a0"+
		"\n\13\f\13\16\13\u00a3\13\13\3\f\3\f\3\f\3\f\5\f\u00a9\n\f\3\r\3\r\3\r"+
		"\5\r\u00ae\n\r\3\16\3\16\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17"+
		"\5\17\u00bb\n\17\3\17\3\17\3\17\7\17\u00c0\n\17\f\17\16\17\u00c3\13\17"+
		"\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\21\3\21\3\21\5\21\u00cf\n\21\3\22"+
		"\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22"+
		"\5\22\u00e0\n\22\3\22\3\22\3\22\3\22\7\22\u00e6\n\22\f\22\16\22\u00e9"+
		"\13\22\3\23\5\23\u00ec\n\23\3\23\6\23\u00ef\n\23\r\23\16\23\u00f0\3\24"+
		"\3\24\3\24\3\24\3\24\6\24\u00f8\n\24\r\24\16\24\u00f9\3\25\3\25\3\25\3"+
		"\25\7\25\u0100\n\25\f\25\16\25\u0103\13\25\5\25\u0105\n\25\3\25\3\25\3"+
		"\26\3\26\3\27\3\27\3\30\3\30\3\30\2\5\n\34\"\31\2\4\6\b\n\f\16\20\22\24"+
		"\26\30\32\34\36 \"$&(*,.\2\7\3\2\658\3\2\34\35\3\2\31\'\4\2\35\35*-\3"+
		"\2\n\16\2\u0120\2\60\3\2\2\2\4;\3\2\2\2\6F\3\2\2\2\bN\3\2\2\2\n_\3\2\2"+
		"\2\fw\3\2\2\2\16\u0082\3\2\2\2\20\u0087\3\2\2\2\22\u009a\3\2\2\2\24\u009c"+
		"\3\2\2\2\26\u00a8\3\2\2\2\30\u00ad\3\2\2\2\32\u00af\3\2\2\2\34\u00ba\3"+
		"\2\2\2\36\u00c4\3\2\2\2 \u00ce\3\2\2\2\"\u00df\3\2\2\2$\u00eb\3\2\2\2"+
		"&\u00f2\3\2\2\2(\u00fb\3\2\2\2*\u0108\3\2\2\2,\u010a\3\2\2\2.\u010c\3"+
		"\2\2\2\60\64\7\5\2\2\61\63\5\4\3\2\62\61\3\2\2\2\63\66\3\2\2\2\64\62\3"+
		"\2\2\2\64\65\3\2\2\2\65\67\3\2\2\2\66\64\3\2\2\2\678\5\n\6\289\7\6\2\2"+
		"9:\7\2\2\3:\3\3\2\2\2;<\5\30\r\2<=\7C\2\2=?\7:\2\2>@\5\6\4\2?>\3\2\2\2"+
		"?@\3\2\2\2@A\3\2\2\2AB\7;\2\2BC\7\7\2\2CD\5\n\6\2DE\7\6\2\2E\5\3\2\2\2"+
		"FK\5\b\5\2GH\7>\2\2HJ\5\b\5\2IG\3\2\2\2JM\3\2\2\2KI\3\2\2\2KL\3\2\2\2"+
		"L\7\3\2\2\2MK\3\2\2\2NO\5\30\r\2OP\7C\2\2P\t\3\2\2\2QR\b\6\1\2R`\7\b\2"+
		"\2S`\5\f\7\2T`\5\16\b\2UV\7\t\2\2V`\5\20\t\2WX\5.\30\2XY\5\"\22\2Y`\3"+
		"\2\2\2Z`\5\f\7\2[\\\7\5\2\2\\]\5\n\6\2]^\7\6\2\2^`\3\2\2\2_Q\3\2\2\2_"+
		"S\3\2\2\2_T\3\2\2\2_U\3\2\2\2_W\3\2\2\2_Z\3\2\2\2_[\3\2\2\2`f\3\2\2\2"+
		"ab\f\3\2\2bc\7?\2\2ce\5\n\6\4da\3\2\2\2eh\3\2\2\2fd\3\2\2\2fg\3\2\2\2"+
		"g\13\3\2\2\2hf\3\2\2\2ij\7\17\2\2jk\5\"\22\2kl\7\20\2\2lm\5\n\6\2mn\7"+
		"\21\2\2no\5\n\6\2op\7\22\2\2px\3\2\2\2qr\7\23\2\2rs\5\"\22\2st\7\24\2"+
		"\2tu\5\n\6\2uv\7\25\2\2vx\3\2\2\2wi\3\2\2\2wq\3\2\2\2x\r\3\2\2\2yz\5\30"+
		"\r\2z{\7C\2\2{|\7(\2\2|}\5\22\n\2}\u0083\3\2\2\2~\177\5\20\t\2\177\u0080"+
		"\7(\2\2\u0080\u0081\5\22\n\2\u0081\u0083\3\2\2\2\u0082y\3\2\2\2\u0082"+
		"~\3\2\2\2\u0083\17\3\2\2\2\u0084\u0088\7C\2\2\u0085\u0088\5&\24\2\u0086"+
		"\u0088\5\26\f\2\u0087\u0084\3\2\2\2\u0087\u0085\3\2\2\2\u0087\u0086\3"+
		"\2\2\2\u0088\21\3\2\2\2\u0089\u009b\5\"\22\2\u008a\u009b\5(\25\2\u008b"+
		"\u008c\7)\2\2\u008c\u008d\7:\2\2\u008d\u008e\5\"\22\2\u008e\u008f\7>\2"+
		"\2\u008f\u0090\5\"\22\2\u0090\u0091\7;\2\2\u0091\u009b\3\2\2\2\u0092\u009b"+
		"\5\26\f\2\u0093\u0094\7\26\2\2\u0094\u0095\7C\2\2\u0095\u0097\7:\2\2\u0096"+
		"\u0098\5\24\13\2\u0097\u0096\3\2\2\2\u0097\u0098\3\2\2\2\u0098\u0099\3"+
		"\2\2\2\u0099\u009b\7;\2\2\u009a\u0089\3\2\2\2\u009a\u008a\3\2\2\2\u009a"+
		"\u008b\3\2\2\2\u009a\u0092\3\2\2\2\u009a\u0093\3\2\2\2\u009b\23\3\2\2"+
		"\2\u009c\u00a1\5\"\22\2\u009d\u009e\7>\2\2\u009e\u00a0\5\"\22\2\u009f"+
		"\u009d\3\2\2\2\u00a0\u00a3\3\2\2\2\u00a1\u009f\3\2\2\2\u00a1\u00a2\3\2"+
		"\2\2\u00a2\25\3\2\2\2\u00a3\u00a1\3\2\2\2\u00a4\u00a5\7\27\2\2\u00a5\u00a9"+
		"\5\"\22\2\u00a6\u00a7\7\30\2\2\u00a7\u00a9\5\"\22\2\u00a8\u00a4\3\2\2"+
		"\2\u00a8\u00a6\3\2\2\2\u00a9\27\3\2\2\2\u00aa\u00ae\5\32\16\2\u00ab\u00ae"+
		"\5\34\17\2\u00ac\u00ae\5\36\20\2\u00ad\u00aa\3\2\2\2\u00ad\u00ab\3\2\2"+
		"\2\u00ad\u00ac\3\2\2\2\u00ae\31\3\2\2\2\u00af\u00b0\t\2\2\2\u00b0\33\3"+
		"\2\2\2\u00b1\u00b2\b\17\1\2\u00b2\u00b3\5\32\16\2\u00b3\u00b4\7<\2\2\u00b4"+
		"\u00b5\7=\2\2\u00b5\u00bb\3\2\2\2\u00b6\u00b7\5\36\20\2\u00b7\u00b8\7"+
		"<\2\2\u00b8\u00b9\7=\2\2\u00b9\u00bb\3\2\2\2\u00ba\u00b1\3\2\2\2\u00ba"+
		"\u00b6\3\2\2\2\u00bb\u00c1\3\2\2\2\u00bc\u00bd\f\4\2\2\u00bd\u00be\7<"+
		"\2\2\u00be\u00c0\7=\2\2\u00bf\u00bc\3\2\2\2\u00c0\u00c3\3\2\2\2\u00c1"+
		"\u00bf\3\2\2\2\u00c1\u00c2\3\2\2\2\u00c2\35\3\2\2\2\u00c3\u00c1\3\2\2"+
		"\2\u00c4\u00c5\79\2\2\u00c5\u00c6\7:\2\2\u00c6\u00c7\5 \21\2\u00c7\u00c8"+
		"\7>\2\2\u00c8\u00c9\5 \21\2\u00c9\u00ca\7;\2\2\u00ca\37\3\2\2\2\u00cb"+
		"\u00cf\5\32\16\2\u00cc\u00cf\5\34\17\2\u00cd\u00cf\79\2\2\u00ce\u00cb"+
		"\3\2\2\2\u00ce\u00cc\3\2\2\2\u00ce\u00cd\3\2\2\2\u00cf!\3\2\2\2\u00d0"+
		"\u00d1\b\22\1\2\u00d1\u00e0\5$\23\2\u00d2\u00e0\5&\24\2\u00d3\u00d4\5"+
		",\27\2\u00d4\u00d5\5\"\22\t\u00d5\u00e0\3\2\2\2\u00d6\u00d7\7:\2\2\u00d7"+
		"\u00d8\5\"\22\2\u00d8\u00d9\7;\2\2\u00d9\u00e0\3\2\2\2\u00da\u00e0\7C"+
		"\2\2\u00db\u00e0\7/\2\2\u00dc\u00e0\7\62\2\2\u00dd\u00e0\7\64\2\2\u00de"+
		"\u00e0\7\63\2\2\u00df\u00d0\3\2\2\2\u00df\u00d2\3\2\2\2\u00df\u00d3\3"+
		"\2\2\2\u00df\u00d6\3\2\2\2\u00df\u00da\3\2\2\2\u00df\u00db\3\2\2\2\u00df"+
		"\u00dc\3\2\2\2\u00df\u00dd\3\2\2\2\u00df\u00de\3\2\2\2\u00e0\u00e7\3\2"+
		"\2\2\u00e1\u00e2\f\13\2\2\u00e2\u00e3\5*\26\2\u00e3\u00e4\5\"\22\f\u00e4"+
		"\u00e6\3\2\2\2\u00e5\u00e1\3\2\2\2\u00e6\u00e9\3\2\2\2\u00e7\u00e5\3\2"+
		"\2\2\u00e7\u00e8\3\2\2\2\u00e8#\3\2\2\2\u00e9\u00e7\3\2\2\2\u00ea\u00ec"+
		"\t\3\2\2\u00eb\u00ea\3\2\2\2\u00eb\u00ec\3\2\2\2\u00ec\u00ee\3\2\2\2\u00ed"+
		"\u00ef\7.\2\2\u00ee\u00ed\3\2\2\2\u00ef\u00f0\3\2\2\2\u00f0\u00ee\3\2"+
		"\2\2\u00f0\u00f1\3\2\2\2\u00f1%\3\2\2\2\u00f2\u00f7\7C\2\2\u00f3\u00f4"+
		"\7<\2\2\u00f4\u00f5\5\"\22\2\u00f5\u00f6\7=\2\2\u00f6\u00f8\3\2\2\2\u00f7"+
		"\u00f3\3\2\2\2\u00f8\u00f9\3\2\2\2\u00f9\u00f7\3\2\2\2\u00f9\u00fa\3\2"+
		"\2\2\u00fa\'\3\2\2\2\u00fb\u0104\7<\2\2\u00fc\u0101\5\"\22\2\u00fd\u00fe"+
		"\7>\2\2\u00fe\u0100\5\"\22\2\u00ff\u00fd\3\2\2\2\u0100\u0103\3\2\2\2\u0101"+
		"\u00ff\3\2\2\2\u0101\u0102\3\2\2\2\u0102\u0105\3\2\2\2\u0103\u0101\3\2"+
		"\2\2\u0104\u00fc\3\2\2\2\u0104\u0105\3\2\2\2\u0105\u0106\3\2\2\2\u0106"+
		"\u0107\7=\2\2\u0107)\3\2\2\2\u0108\u0109\t\4\2\2\u0109+\3\2\2\2\u010a"+
		"\u010b\t\5\2\2\u010b-\3\2\2\2\u010c\u010d\t\6\2\2\u010d/\3\2\2\2\31\64"+
		"?K_fw\u0082\u0087\u0097\u009a\u00a1\u00a8\u00ad\u00ba\u00c1\u00ce\u00df"+
		"\u00e7\u00eb\u00f0\u00f9\u0101\u0104";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}