// Generated from WJSCParser.g4 by ANTLR 4.7.2
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
	static { RuntimeMetaData.checkVersion("4.7.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		EOL=1, WHITESPACE=2, BEGIN=3, END=4, IS=5, STDLIB_FUNCTIONS=6, WSKIP=7, 
		READ=8, FREE=9, RETURN=10, EXIT=11, PRINT=12, PRINTLN=13, IF=14, THEN=15, 
		ELSE=16, FI=17, WHILE=18, DO=19, DONE=20, CALL=21, FIRST=22, SECOND=23, 
		UNARY_OPERATOR=24, LOGICAL_NEGATION=25, ARITHMETIC_NEGATION=26, LENGTH=27, 
		ORDER_OF=28, CHARACTER_OF=29, BINARY_OPERATOR=30, MULTIPLY=31, DIVIDE=32, 
		MODULO=33, PLUS=34, MINUS=35, GREATER_THAN=36, GREATER_EQUAL=37, LESS_THAN=38, 
		LESS_EQUAL=39, EQUALS=40, STRICT_EQUALS=41, NEQUALS=42, NSTRICT_EQUALS=43, 
		LOGICAL_AND=44, LOGICAL_OR=45, ASSIGNMENT=46, NEW_PAIR=47, INTEGER_LITERAL=48, 
		DIGIT=49, INTEGER_SIGN=50, BOOLEAN_LITERAL=51, TRUTH=52, FALSITY=53, CHARACTER_LITERAL=54, 
		PAIR_LITERAL=55, STRING_LITERAL=56, INTEGER=57, BOOLEAN=58, CHARACTER=59, 
		STRING=60, PAIR=61, LPAREN=62, RPAREN=63, LBRACK=64, RBRACK=65, COMMA=66, 
		SEMICOLON=67, APOS=68, DBLQ=69, COMMENT=70, IDENTIFIER=71;
	public static final int
		RULE_program = 0, RULE_func = 1, RULE_paramList = 2, RULE_param = 3, RULE_statement = 4, 
		RULE_conditionalBlocks = 5, RULE_assignment = 6, RULE_assignLhs = 7, RULE_assignRhs = 8, 
		RULE_argList = 9, RULE_pairElement = 10, RULE_type = 11, RULE_baseType = 12, 
		RULE_arrayType = 13, RULE_pairType = 14, RULE_pairElementType = 15, RULE_expression = 16, 
		RULE_arrayElement = 17, RULE_arrayLiteral = 18;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "func", "paramList", "param", "statement", "conditionalBlocks", 
			"assignment", "assignLhs", "assignRhs", "argList", "pairElement", "type", 
			"baseType", "arrayType", "pairType", "pairElementType", "expression", 
			"arrayElement", "arrayLiteral"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, "'begin'", "'end'", "'is'", null, "'skip'", "'read'", 
			"'free'", "'return'", "'exit'", "'print'", "'println'", "'if'", "'then'", 
			"'else'", "'fi'", "'while'", "'do'", "'done'", "'call'", "'fst'", "'snd'", 
			null, "'!'", null, "'len'", "'ord'", "'chr'", null, "'*'", "'/'", "'%'", 
			"'+'", "'-'", "'>'", "'>='", "'<'", "'<='", "'=='", "'==='", "'!='", 
			"'!=='", "'&&'", "'||'", "'='", "'newpair'", null, null, null, null, 
			"'true'", "'false'", null, "'null'", null, "'int'", "'bool'", "'char'", 
			"'string'", "'pair'", "'('", "')'", "'['", "']'", "','", "';'", "'''", 
			"'\"'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "EOL", "WHITESPACE", "BEGIN", "END", "IS", "STDLIB_FUNCTIONS", 
			"WSKIP", "READ", "FREE", "RETURN", "EXIT", "PRINT", "PRINTLN", "IF", 
			"THEN", "ELSE", "FI", "WHILE", "DO", "DONE", "CALL", "FIRST", "SECOND", 
			"UNARY_OPERATOR", "LOGICAL_NEGATION", "ARITHMETIC_NEGATION", "LENGTH", 
			"ORDER_OF", "CHARACTER_OF", "BINARY_OPERATOR", "MULTIPLY", "DIVIDE", 
			"MODULO", "PLUS", "MINUS", "GREATER_THAN", "GREATER_EQUAL", "LESS_THAN", 
			"LESS_EQUAL", "EQUALS", "STRICT_EQUALS", "NEQUALS", "NSTRICT_EQUALS", 
			"LOGICAL_AND", "LOGICAL_OR", "ASSIGNMENT", "NEW_PAIR", "INTEGER_LITERAL", 
			"DIGIT", "INTEGER_SIGN", "BOOLEAN_LITERAL", "TRUTH", "FALSITY", "CHARACTER_LITERAL", 
			"PAIR_LITERAL", "STRING_LITERAL", "INTEGER", "BOOLEAN", "CHARACTER", 
			"STRING", "PAIR", "LPAREN", "RPAREN", "LBRACK", "RBRACK", "COMMA", "SEMICOLON", 
			"APOS", "DBLQ", "COMMENT", "IDENTIFIER"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
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
			setState(38);
			match(BEGIN);
			setState(42);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,0,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(39);
					func();
					}
					} 
				}
				setState(44);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,0,_ctx);
			}
			setState(45);
			statement(0);
			setState(46);
			match(END);
			setState(47);
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
			setState(49);
			type();
			setState(50);
			match(IDENTIFIER);
			setState(51);
			match(LPAREN);
			setState(53);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << INTEGER) | (1L << BOOLEAN) | (1L << CHARACTER) | (1L << STRING) | (1L << PAIR))) != 0)) {
				{
				setState(52);
				paramList();
				}
			}

			setState(55);
			match(RPAREN);
			setState(56);
			match(IS);
			setState(57);
			statement(0);
			setState(58);
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
			setState(60);
			param();
			setState(65);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(61);
				match(COMMA);
				setState(62);
				param();
				}
				}
				setState(67);
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
			setState(68);
			type();
			setState(69);
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
		public TerminalNode STDLIB_FUNCTIONS() { return getToken(WJSCParser.STDLIB_FUNCTIONS, 0); }
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
			setState(84);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				{
				setState(72);
				match(WSKIP);
				}
				break;
			case 2:
				{
				setState(73);
				conditionalBlocks();
				}
				break;
			case 3:
				{
				setState(74);
				assignment();
				}
				break;
			case 4:
				{
				setState(75);
				match(READ);
				setState(76);
				assignLhs();
				}
				break;
			case 5:
				{
				setState(77);
				match(STDLIB_FUNCTIONS);
				setState(78);
				expression(0);
				}
				break;
			case 6:
				{
				setState(79);
				conditionalBlocks();
				}
				break;
			case 7:
				{
				setState(80);
				match(BEGIN);
				setState(81);
				statement(0);
				setState(82);
				match(END);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(91);
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
					setState(86);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(87);
					match(SEMICOLON);
					setState(88);
					statement(2);
					}
					} 
				}
				setState(93);
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
			setState(108);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IF:
				enterOuterAlt(_localctx, 1);
				{
				setState(94);
				match(IF);
				setState(95);
				expression(0);
				setState(96);
				match(THEN);
				setState(97);
				statement(0);
				setState(98);
				match(ELSE);
				setState(99);
				statement(0);
				setState(100);
				match(FI);
				}
				break;
			case WHILE:
				enterOuterAlt(_localctx, 2);
				{
				setState(102);
				match(WHILE);
				setState(103);
				expression(0);
				setState(104);
				match(DO);
				setState(105);
				statement(0);
				setState(106);
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
			setState(119);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case INTEGER:
			case BOOLEAN:
			case CHARACTER:
			case STRING:
			case PAIR:
				enterOuterAlt(_localctx, 1);
				{
				setState(110);
				type();
				setState(111);
				match(IDENTIFIER);
				setState(112);
				match(ASSIGNMENT);
				setState(113);
				assignRhs();
				}
				break;
			case FIRST:
			case SECOND:
			case IDENTIFIER:
				enterOuterAlt(_localctx, 2);
				{
				setState(115);
				assignLhs();
				setState(116);
				match(ASSIGNMENT);
				setState(117);
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
			setState(124);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(121);
				match(IDENTIFIER);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(122);
				arrayElement();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(123);
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
			setState(143);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case UNARY_OPERATOR:
			case INTEGER_LITERAL:
			case BOOLEAN_LITERAL:
			case CHARACTER_LITERAL:
			case PAIR_LITERAL:
			case STRING_LITERAL:
			case LPAREN:
			case IDENTIFIER:
				enterOuterAlt(_localctx, 1);
				{
				setState(126);
				expression(0);
				}
				break;
			case LBRACK:
				enterOuterAlt(_localctx, 2);
				{
				setState(127);
				arrayLiteral();
				}
				break;
			case NEW_PAIR:
				enterOuterAlt(_localctx, 3);
				{
				setState(128);
				match(NEW_PAIR);
				setState(129);
				match(LPAREN);
				setState(130);
				expression(0);
				setState(131);
				match(COMMA);
				setState(132);
				expression(0);
				setState(133);
				match(RPAREN);
				}
				break;
			case FIRST:
			case SECOND:
				enterOuterAlt(_localctx, 4);
				{
				setState(135);
				pairElement();
				}
				break;
			case CALL:
				enterOuterAlt(_localctx, 5);
				{
				setState(136);
				match(CALL);
				setState(137);
				match(IDENTIFIER);
				setState(138);
				match(LPAREN);
				setState(140);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 24)) & ~0x3f) == 0 && ((1L << (_la - 24)) & ((1L << (UNARY_OPERATOR - 24)) | (1L << (INTEGER_LITERAL - 24)) | (1L << (BOOLEAN_LITERAL - 24)) | (1L << (CHARACTER_LITERAL - 24)) | (1L << (PAIR_LITERAL - 24)) | (1L << (STRING_LITERAL - 24)) | (1L << (LPAREN - 24)) | (1L << (IDENTIFIER - 24)))) != 0)) {
					{
					setState(139);
					argList();
					}
				}

				setState(142);
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
			setState(145);
			expression(0);
			setState(150);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(146);
				match(COMMA);
				setState(147);
				expression(0);
				}
				}
				setState(152);
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
			setState(157);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case FIRST:
				enterOuterAlt(_localctx, 1);
				{
				setState(153);
				match(FIRST);
				setState(154);
				expression(0);
				}
				break;
			case SECOND:
				enterOuterAlt(_localctx, 2);
				{
				setState(155);
				match(SECOND);
				setState(156);
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
			setState(162);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(159);
				baseType();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(160);
				arrayType(0);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(161);
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
			setState(164);
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
			setState(175);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case INTEGER:
			case BOOLEAN:
			case CHARACTER:
			case STRING:
				{
				setState(167);
				baseType();
				setState(168);
				match(LBRACK);
				setState(169);
				match(RBRACK);
				}
				break;
			case PAIR:
				{
				setState(171);
				pairType();
				setState(172);
				match(LBRACK);
				setState(173);
				match(RBRACK);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(182);
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
					setState(177);
					if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
					setState(178);
					match(LBRACK);
					setState(179);
					match(RBRACK);
					}
					} 
				}
				setState(184);
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
			setState(185);
			match(PAIR);
			setState(186);
			match(LPAREN);
			setState(187);
			pairElementType();
			setState(188);
			match(COMMA);
			setState(189);
			pairElementType();
			setState(190);
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
			setState(195);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(192);
				baseType();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(193);
				arrayType(0);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(194);
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
		public TerminalNode INTEGER_LITERAL() { return getToken(WJSCParser.INTEGER_LITERAL, 0); }
		public TerminalNode BOOLEAN_LITERAL() { return getToken(WJSCParser.BOOLEAN_LITERAL, 0); }
		public TerminalNode CHARACTER_LITERAL() { return getToken(WJSCParser.CHARACTER_LITERAL, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(WJSCParser.STRING_LITERAL, 0); }
		public TerminalNode PAIR_LITERAL() { return getToken(WJSCParser.PAIR_LITERAL, 0); }
		public TerminalNode IDENTIFIER() { return getToken(WJSCParser.IDENTIFIER, 0); }
		public ArrayElementContext arrayElement() {
			return getRuleContext(ArrayElementContext.class,0);
		}
		public TerminalNode UNARY_OPERATOR() { return getToken(WJSCParser.UNARY_OPERATOR, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode LPAREN() { return getToken(WJSCParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(WJSCParser.RPAREN, 0); }
		public TerminalNode BINARY_OPERATOR() { return getToken(WJSCParser.BINARY_OPERATOR, 0); }
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
			setState(211);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,16,_ctx) ) {
			case 1:
				{
				setState(198);
				match(INTEGER_LITERAL);
				}
				break;
			case 2:
				{
				setState(199);
				match(BOOLEAN_LITERAL);
				}
				break;
			case 3:
				{
				setState(200);
				match(CHARACTER_LITERAL);
				}
				break;
			case 4:
				{
				setState(201);
				match(STRING_LITERAL);
				}
				break;
			case 5:
				{
				setState(202);
				match(PAIR_LITERAL);
				}
				break;
			case 6:
				{
				setState(203);
				match(IDENTIFIER);
				}
				break;
			case 7:
				{
				setState(204);
				arrayElement();
				}
				break;
			case 8:
				{
				setState(205);
				match(UNARY_OPERATOR);
				setState(206);
				expression(3);
				}
				break;
			case 9:
				{
				setState(207);
				match(LPAREN);
				setState(208);
				expression(0);
				setState(209);
				match(RPAREN);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(218);
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
					setState(213);
					if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
					setState(214);
					match(BINARY_OPERATOR);
					setState(215);
					expression(3);
					}
					} 
				}
				setState(220);
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
		enterRule(_localctx, 34, RULE_arrayElement);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(221);
			match(IDENTIFIER);
			setState(226); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(222);
					match(LBRACK);
					setState(223);
					expression(0);
					setState(224);
					match(RBRACK);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(228); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
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
		enterRule(_localctx, 36, RULE_arrayLiteral);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(230);
			match(LBRACK);
			setState(239);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 24)) & ~0x3f) == 0 && ((1L << (_la - 24)) & ((1L << (UNARY_OPERATOR - 24)) | (1L << (INTEGER_LITERAL - 24)) | (1L << (BOOLEAN_LITERAL - 24)) | (1L << (CHARACTER_LITERAL - 24)) | (1L << (PAIR_LITERAL - 24)) | (1L << (STRING_LITERAL - 24)) | (1L << (LPAREN - 24)) | (1L << (IDENTIFIER - 24)))) != 0)) {
				{
				setState(231);
				expression(0);
				setState(236);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(232);
					match(COMMA);
					setState(233);
					expression(0);
					}
					}
					setState(238);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(241);
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
			return precpred(_ctx, 2);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3I\u00f6\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\3\2\3\2\7\2+\n\2\f\2\16\2.\13\2\3\2\3\2\3\2\3\2\3"+
		"\3\3\3\3\3\3\3\5\38\n\3\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4\7\4B\n\4\f\4\16"+
		"\4E\13\4\3\5\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3"+
		"\6\5\6W\n\6\3\6\3\6\3\6\7\6\\\n\6\f\6\16\6_\13\6\3\7\3\7\3\7\3\7\3\7\3"+
		"\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\5\7o\n\7\3\b\3\b\3\b\3\b\3\b\3\b\3"+
		"\b\3\b\3\b\5\bz\n\b\3\t\3\t\3\t\5\t\177\n\t\3\n\3\n\3\n\3\n\3\n\3\n\3"+
		"\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\5\n\u008f\n\n\3\n\5\n\u0092\n\n\3\13\3"+
		"\13\3\13\7\13\u0097\n\13\f\13\16\13\u009a\13\13\3\f\3\f\3\f\3\f\5\f\u00a0"+
		"\n\f\3\r\3\r\3\r\5\r\u00a5\n\r\3\16\3\16\3\17\3\17\3\17\3\17\3\17\3\17"+
		"\3\17\3\17\3\17\5\17\u00b2\n\17\3\17\3\17\3\17\7\17\u00b7\n\17\f\17\16"+
		"\17\u00ba\13\17\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\21\3\21\3\21\5\21"+
		"\u00c6\n\21\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22"+
		"\3\22\3\22\5\22\u00d6\n\22\3\22\3\22\3\22\7\22\u00db\n\22\f\22\16\22\u00de"+
		"\13\22\3\23\3\23\3\23\3\23\3\23\6\23\u00e5\n\23\r\23\16\23\u00e6\3\24"+
		"\3\24\3\24\3\24\7\24\u00ed\n\24\f\24\16\24\u00f0\13\24\5\24\u00f2\n\24"+
		"\3\24\3\24\3\24\2\5\n\34\"\25\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 "+
		"\"$&\2\3\3\2;>\2\u0109\2(\3\2\2\2\4\63\3\2\2\2\6>\3\2\2\2\bF\3\2\2\2\n"+
		"V\3\2\2\2\fn\3\2\2\2\16y\3\2\2\2\20~\3\2\2\2\22\u0091\3\2\2\2\24\u0093"+
		"\3\2\2\2\26\u009f\3\2\2\2\30\u00a4\3\2\2\2\32\u00a6\3\2\2\2\34\u00b1\3"+
		"\2\2\2\36\u00bb\3\2\2\2 \u00c5\3\2\2\2\"\u00d5\3\2\2\2$\u00df\3\2\2\2"+
		"&\u00e8\3\2\2\2(,\7\5\2\2)+\5\4\3\2*)\3\2\2\2+.\3\2\2\2,*\3\2\2\2,-\3"+
		"\2\2\2-/\3\2\2\2.,\3\2\2\2/\60\5\n\6\2\60\61\7\6\2\2\61\62\7\2\2\3\62"+
		"\3\3\2\2\2\63\64\5\30\r\2\64\65\7I\2\2\65\67\7@\2\2\668\5\6\4\2\67\66"+
		"\3\2\2\2\678\3\2\2\289\3\2\2\29:\7A\2\2:;\7\7\2\2;<\5\n\6\2<=\7\6\2\2"+
		"=\5\3\2\2\2>C\5\b\5\2?@\7D\2\2@B\5\b\5\2A?\3\2\2\2BE\3\2\2\2CA\3\2\2\2"+
		"CD\3\2\2\2D\7\3\2\2\2EC\3\2\2\2FG\5\30\r\2GH\7I\2\2H\t\3\2\2\2IJ\b\6\1"+
		"\2JW\7\t\2\2KW\5\f\7\2LW\5\16\b\2MN\7\n\2\2NW\5\20\t\2OP\7\b\2\2PW\5\""+
		"\22\2QW\5\f\7\2RS\7\5\2\2ST\5\n\6\2TU\7\6\2\2UW\3\2\2\2VI\3\2\2\2VK\3"+
		"\2\2\2VL\3\2\2\2VM\3\2\2\2VO\3\2\2\2VQ\3\2\2\2VR\3\2\2\2W]\3\2\2\2XY\f"+
		"\3\2\2YZ\7E\2\2Z\\\5\n\6\4[X\3\2\2\2\\_\3\2\2\2][\3\2\2\2]^\3\2\2\2^\13"+
		"\3\2\2\2_]\3\2\2\2`a\7\20\2\2ab\5\"\22\2bc\7\21\2\2cd\5\n\6\2de\7\22\2"+
		"\2ef\5\n\6\2fg\7\23\2\2go\3\2\2\2hi\7\24\2\2ij\5\"\22\2jk\7\25\2\2kl\5"+
		"\n\6\2lm\7\26\2\2mo\3\2\2\2n`\3\2\2\2nh\3\2\2\2o\r\3\2\2\2pq\5\30\r\2"+
		"qr\7I\2\2rs\7\60\2\2st\5\22\n\2tz\3\2\2\2uv\5\20\t\2vw\7\60\2\2wx\5\22"+
		"\n\2xz\3\2\2\2yp\3\2\2\2yu\3\2\2\2z\17\3\2\2\2{\177\7I\2\2|\177\5$\23"+
		"\2}\177\5\26\f\2~{\3\2\2\2~|\3\2\2\2~}\3\2\2\2\177\21\3\2\2\2\u0080\u0092"+
		"\5\"\22\2\u0081\u0092\5&\24\2\u0082\u0083\7\61\2\2\u0083\u0084\7@\2\2"+
		"\u0084\u0085\5\"\22\2\u0085\u0086\7D\2\2\u0086\u0087\5\"\22\2\u0087\u0088"+
		"\7A\2\2\u0088\u0092\3\2\2\2\u0089\u0092\5\26\f\2\u008a\u008b\7\27\2\2"+
		"\u008b\u008c\7I\2\2\u008c\u008e\7@\2\2\u008d\u008f\5\24\13\2\u008e\u008d"+
		"\3\2\2\2\u008e\u008f\3\2\2\2\u008f\u0090\3\2\2\2\u0090\u0092\7A\2\2\u0091"+
		"\u0080\3\2\2\2\u0091\u0081\3\2\2\2\u0091\u0082\3\2\2\2\u0091\u0089\3\2"+
		"\2\2\u0091\u008a\3\2\2\2\u0092\23\3\2\2\2\u0093\u0098\5\"\22\2\u0094\u0095"+
		"\7D\2\2\u0095\u0097\5\"\22\2\u0096\u0094\3\2\2\2\u0097\u009a\3\2\2\2\u0098"+
		"\u0096\3\2\2\2\u0098\u0099\3\2\2\2\u0099\25\3\2\2\2\u009a\u0098\3\2\2"+
		"\2\u009b\u009c\7\30\2\2\u009c\u00a0\5\"\22\2\u009d\u009e\7\31\2\2\u009e"+
		"\u00a0\5\"\22\2\u009f\u009b\3\2\2\2\u009f\u009d\3\2\2\2\u00a0\27\3\2\2"+
		"\2\u00a1\u00a5\5\32\16\2\u00a2\u00a5\5\34\17\2\u00a3\u00a5\5\36\20\2\u00a4"+
		"\u00a1\3\2\2\2\u00a4\u00a2\3\2\2\2\u00a4\u00a3\3\2\2\2\u00a5\31\3\2\2"+
		"\2\u00a6\u00a7\t\2\2\2\u00a7\33\3\2\2\2\u00a8\u00a9\b\17\1\2\u00a9\u00aa"+
		"\5\32\16\2\u00aa\u00ab\7B\2\2\u00ab\u00ac\7C\2\2\u00ac\u00b2\3\2\2\2\u00ad"+
		"\u00ae\5\36\20\2\u00ae\u00af\7B\2\2\u00af\u00b0\7C\2\2\u00b0\u00b2\3\2"+
		"\2\2\u00b1\u00a8\3\2\2\2\u00b1\u00ad\3\2\2\2\u00b2\u00b8\3\2\2\2\u00b3"+
		"\u00b4\f\4\2\2\u00b4\u00b5\7B\2\2\u00b5\u00b7\7C\2\2\u00b6\u00b3\3\2\2"+
		"\2\u00b7\u00ba\3\2\2\2\u00b8\u00b6\3\2\2\2\u00b8\u00b9\3\2\2\2\u00b9\35"+
		"\3\2\2\2\u00ba\u00b8\3\2\2\2\u00bb\u00bc\7?\2\2\u00bc\u00bd\7@\2\2\u00bd"+
		"\u00be\5 \21\2\u00be\u00bf\7D\2\2\u00bf\u00c0\5 \21\2\u00c0\u00c1\7A\2"+
		"\2\u00c1\37\3\2\2\2\u00c2\u00c6\5\32\16\2\u00c3\u00c6\5\34\17\2\u00c4"+
		"\u00c6\7?\2\2\u00c5\u00c2\3\2\2\2\u00c5\u00c3\3\2\2\2\u00c5\u00c4\3\2"+
		"\2\2\u00c6!\3\2\2\2\u00c7\u00c8\b\22\1\2\u00c8\u00d6\7\62\2\2\u00c9\u00d6"+
		"\7\65\2\2\u00ca\u00d6\78\2\2\u00cb\u00d6\7:\2\2\u00cc\u00d6\79\2\2\u00cd"+
		"\u00d6\7I\2\2\u00ce\u00d6\5$\23\2\u00cf\u00d0\7\32\2\2\u00d0\u00d6\5\""+
		"\22\5\u00d1\u00d2\7@\2\2\u00d2\u00d3\5\"\22\2\u00d3\u00d4\7A\2\2\u00d4"+
		"\u00d6\3\2\2\2\u00d5\u00c7\3\2\2\2\u00d5\u00c9\3\2\2\2\u00d5\u00ca\3\2"+
		"\2\2\u00d5\u00cb\3\2\2\2\u00d5\u00cc\3\2\2\2\u00d5\u00cd\3\2\2\2\u00d5"+
		"\u00ce\3\2\2\2\u00d5\u00cf\3\2\2\2\u00d5\u00d1\3\2\2\2\u00d6\u00dc\3\2"+
		"\2\2\u00d7\u00d8\f\4\2\2\u00d8\u00d9\7 \2\2\u00d9\u00db\5\"\22\5\u00da"+
		"\u00d7\3\2\2\2\u00db\u00de\3\2\2\2\u00dc\u00da\3\2\2\2\u00dc\u00dd\3\2"+
		"\2\2\u00dd#\3\2\2\2\u00de\u00dc\3\2\2\2\u00df\u00e4\7I\2\2\u00e0\u00e1"+
		"\7B\2\2\u00e1\u00e2\5\"\22\2\u00e2\u00e3\7C\2\2\u00e3\u00e5\3\2\2\2\u00e4"+
		"\u00e0\3\2\2\2\u00e5\u00e6\3\2\2\2\u00e6\u00e4\3\2\2\2\u00e6\u00e7\3\2"+
		"\2\2\u00e7%\3\2\2\2\u00e8\u00f1\7B\2\2\u00e9\u00ee\5\"\22\2\u00ea\u00eb"+
		"\7D\2\2\u00eb\u00ed\5\"\22\2\u00ec\u00ea\3\2\2\2\u00ed\u00f0\3\2\2\2\u00ee"+
		"\u00ec\3\2\2\2\u00ee\u00ef\3\2\2\2\u00ef\u00f2\3\2\2\2\u00f0\u00ee\3\2"+
		"\2\2\u00f1\u00e9\3\2\2\2\u00f1\u00f2\3\2\2\2\u00f2\u00f3\3\2\2\2\u00f3"+
		"\u00f4\7C\2\2\u00f4\'\3\2\2\2\27,\67CV]ny~\u008e\u0091\u0098\u009f\u00a4"+
		"\u00b1\u00b8\u00c5\u00d5\u00dc\u00e6\u00ee\u00f1";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}