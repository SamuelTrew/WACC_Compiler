// Generated from c:\Users\vulga\Documents\wacc_06\antlr_config\WJSCParser.g4 by ANTLR 4.7.1
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
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		EOL=1, WHITESPACE=2, BEGIN=3, END=4, IS=5, STDLIB_FUNCTIONS=6, WSKIP=7, 
		READ=8, FREE=9, RETURN=10, EXIT=11, PRINT=12, PRINTLN=13, IF=14, THEN=15, 
		ELSE=16, FI=17, WHILE=18, DO=19, DONE=20, CALL=21, FIRST=22, SECOND=23, 
		BINARY_OPERATOR=24, MULTIPLY=25, DIVIDE=26, MODULO=27, PLUS=28, MINUS=29, 
		GREATER_THAN=30, GREATER_EQUAL=31, LESS_THAN=32, LESS_EQUAL=33, EQUALS=34, 
		STRICT_EQUALS=35, NEQUALS=36, NSTRICT_EQUALS=37, LOGICAL_AND=38, LOGICAL_OR=39, 
		ASSIGNMENT=40, NEW_PAIR=41, UNARY_OPERATOR=42, LOGICAL_NEGATION=43, ARITHMETIC_NEGATION=44, 
		LENGTH=45, ORDER_OF=46, CHARACTER_OF=47, DIGIT=48, INTEGER_SIGN=49, BOOLEAN_LITERAL=50, 
		TRUTH=51, FALSITY=52, CHARACTER_LITERAL=53, PAIR_LITERAL=54, STRING_LITERAL=55, 
		INTEGER=56, BOOLEAN=57, CHARACTER=58, STRING=59, PAIR=60, LPAREN=61, RPAREN=62, 
		LBRACK=63, RBRACK=64, COMMA=65, SEMICOLON=66, APOS=67, DBLQ=68, COMMENT=69, 
		IDENTIFIER=70;
	public static final int
		RULE_program = 0, RULE_func = 1, RULE_paramList = 2, RULE_param = 3, RULE_statement = 4, 
		RULE_conditionalBlocks = 5, RULE_assignment = 6, RULE_assignLhs = 7, RULE_assignRhs = 8, 
		RULE_argList = 9, RULE_pairElement = 10, RULE_type = 11, RULE_baseType = 12, 
		RULE_arrayType = 13, RULE_pairType = 14, RULE_pairElementType = 15, RULE_expression = 16, 
		RULE_integerLiteral = 17, RULE_arrayElement = 18, RULE_arrayLiteral = 19;
	public static final String[] ruleNames = {
		"program", "func", "paramList", "param", "statement", "conditionalBlocks", 
		"assignment", "assignLhs", "assignRhs", "argList", "pairElement", "type", 
		"baseType", "arrayType", "pairType", "pairElementType", "expression", 
		"integerLiteral", "arrayElement", "arrayLiteral"
	};

	private static final String[] _LITERAL_NAMES = {
		null, null, null, "'begin'", "'end'", "'is'", null, "'skip'", "'read'", 
		"'free'", "'return'", "'exit'", "'print'", "'println'", "'if'", "'then'", 
		"'else'", "'fi'", "'while'", "'do'", "'done'", "'call'", "'fst'", "'snd'", 
		null, "'*'", "'/'", "'%'", "'+'", "'-'", "'>'", "'>='", "'<'", "'<='", 
		"'=='", "'==='", "'!='", "'!=='", "'&&'", "'||'", "'='", "'newpair'", 
		null, "'!'", null, "'len'", "'ord'", "'chr'", null, null, null, "'true'", 
		"'false'", null, "'null'", null, "'int'", "'bool'", "'char'", "'string'", 
		"'pair'", "'('", "')'", "'['", "']'", "','", "';'", "'''", "'\"'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "EOL", "WHITESPACE", "BEGIN", "END", "IS", "STDLIB_FUNCTIONS", "WSKIP", 
		"READ", "FREE", "RETURN", "EXIT", "PRINT", "PRINTLN", "IF", "THEN", "ELSE", 
		"FI", "WHILE", "DO", "DONE", "CALL", "FIRST", "SECOND", "BINARY_OPERATOR", 
		"MULTIPLY", "DIVIDE", "MODULO", "PLUS", "MINUS", "GREATER_THAN", "GREATER_EQUAL", 
		"LESS_THAN", "LESS_EQUAL", "EQUALS", "STRICT_EQUALS", "NEQUALS", "NSTRICT_EQUALS", 
		"LOGICAL_AND", "LOGICAL_OR", "ASSIGNMENT", "NEW_PAIR", "UNARY_OPERATOR", 
		"LOGICAL_NEGATION", "ARITHMETIC_NEGATION", "LENGTH", "ORDER_OF", "CHARACTER_OF", 
		"DIGIT", "INTEGER_SIGN", "BOOLEAN_LITERAL", "TRUTH", "FALSITY", "CHARACTER_LITERAL", 
		"PAIR_LITERAL", "STRING_LITERAL", "INTEGER", "BOOLEAN", "CHARACTER", "STRING", 
		"PAIR", "LPAREN", "RPAREN", "LBRACK", "RBRACK", "COMMA", "SEMICOLON", 
		"APOS", "DBLQ", "COMMENT", "IDENTIFIER"
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
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(40);
			match(BEGIN);
			setState(44);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,0,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(41);
					func();
					}
					} 
				}
				setState(46);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,0,_ctx);
			}
			setState(47);
			statement(0);
			setState(48);
			match(END);
			setState(49);
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
	}

	public final FuncContext func() throws RecognitionException {
		FuncContext _localctx = new FuncContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_func);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(51);
			type();
			setState(52);
			match(IDENTIFIER);
			setState(53);
			match(LPAREN);
			setState(55);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << INTEGER) | (1L << BOOLEAN) | (1L << CHARACTER) | (1L << STRING) | (1L << PAIR))) != 0)) {
				{
				setState(54);
				paramList();
				}
			}

			setState(57);
			match(RPAREN);
			setState(58);
			match(IS);
			setState(59);
			statement(0);
			setState(60);
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
	}

	public final ParamListContext paramList() throws RecognitionException {
		ParamListContext _localctx = new ParamListContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_paramList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(62);
			param();
			setState(67);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(63);
				match(COMMA);
				setState(64);
				param();
				}
				}
				setState(69);
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
	}

	public final ParamContext param() throws RecognitionException {
		ParamContext _localctx = new ParamContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_param);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(70);
			type();
			setState(71);
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
			setState(86);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				{
				setState(74);
				match(WSKIP);
				}
				break;
			case 2:
				{
				setState(75);
				conditionalBlocks();
				}
				break;
			case 3:
				{
				setState(76);
				assignment();
				}
				break;
			case 4:
				{
				setState(77);
				match(READ);
				setState(78);
				assignLhs();
				}
				break;
			case 5:
				{
				setState(79);
				match(STDLIB_FUNCTIONS);
				setState(80);
				expression(0);
				}
				break;
			case 6:
				{
				setState(81);
				conditionalBlocks();
				}
				break;
			case 7:
				{
				setState(82);
				match(BEGIN);
				setState(83);
				statement(0);
				setState(84);
				match(END);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(93);
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
					setState(88);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(89);
					match(SEMICOLON);
					setState(90);
					statement(2);
					}
					} 
				}
				setState(95);
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
	}

	public final ConditionalBlocksContext conditionalBlocks() throws RecognitionException {
		ConditionalBlocksContext _localctx = new ConditionalBlocksContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_conditionalBlocks);
		try {
			setState(110);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IF:
				enterOuterAlt(_localctx, 1);
				{
				setState(96);
				match(IF);
				setState(97);
				expression(0);
				setState(98);
				match(THEN);
				setState(99);
				statement(0);
				setState(100);
				match(ELSE);
				setState(101);
				statement(0);
				setState(102);
				match(FI);
				}
				break;
			case WHILE:
				enterOuterAlt(_localctx, 2);
				{
				setState(104);
				match(WHILE);
				setState(105);
				expression(0);
				setState(106);
				match(DO);
				setState(107);
				statement(0);
				setState(108);
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
	}

	public final AssignmentContext assignment() throws RecognitionException {
		AssignmentContext _localctx = new AssignmentContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_assignment);
		try {
			setState(121);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case INTEGER:
			case BOOLEAN:
			case CHARACTER:
			case STRING:
			case PAIR:
				enterOuterAlt(_localctx, 1);
				{
				setState(112);
				type();
				setState(113);
				match(IDENTIFIER);
				setState(114);
				match(ASSIGNMENT);
				setState(115);
				assignRhs();
				}
				break;
			case FIRST:
			case SECOND:
			case IDENTIFIER:
				enterOuterAlt(_localctx, 2);
				{
				setState(117);
				assignLhs();
				setState(118);
				match(ASSIGNMENT);
				setState(119);
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
	}

	public final AssignLhsContext assignLhs() throws RecognitionException {
		AssignLhsContext _localctx = new AssignLhsContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_assignLhs);
		try {
			setState(126);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(123);
				match(IDENTIFIER);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(124);
				arrayElement();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(125);
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
	}

	public final AssignRhsContext assignRhs() throws RecognitionException {
		AssignRhsContext _localctx = new AssignRhsContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_assignRhs);
		int _la;
		try {
			setState(145);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case UNARY_OPERATOR:
			case DIGIT:
			case INTEGER_SIGN:
			case BOOLEAN_LITERAL:
			case CHARACTER_LITERAL:
			case PAIR_LITERAL:
			case STRING_LITERAL:
			case LPAREN:
			case IDENTIFIER:
				enterOuterAlt(_localctx, 1);
				{
				setState(128);
				expression(0);
				}
				break;
			case LBRACK:
				enterOuterAlt(_localctx, 2);
				{
				setState(129);
				arrayLiteral();
				}
				break;
			case NEW_PAIR:
				enterOuterAlt(_localctx, 3);
				{
				setState(130);
				match(NEW_PAIR);
				setState(131);
				match(LPAREN);
				setState(132);
				expression(0);
				setState(133);
				match(COMMA);
				setState(134);
				expression(0);
				setState(135);
				match(RPAREN);
				}
				break;
			case FIRST:
			case SECOND:
				enterOuterAlt(_localctx, 4);
				{
				setState(137);
				pairElement();
				}
				break;
			case CALL:
				enterOuterAlt(_localctx, 5);
				{
				setState(138);
				match(CALL);
				setState(139);
				match(IDENTIFIER);
				setState(140);
				match(LPAREN);
				setState(142);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 42)) & ~0x3f) == 0 && ((1L << (_la - 42)) & ((1L << (UNARY_OPERATOR - 42)) | (1L << (DIGIT - 42)) | (1L << (INTEGER_SIGN - 42)) | (1L << (BOOLEAN_LITERAL - 42)) | (1L << (CHARACTER_LITERAL - 42)) | (1L << (PAIR_LITERAL - 42)) | (1L << (STRING_LITERAL - 42)) | (1L << (LPAREN - 42)) | (1L << (IDENTIFIER - 42)))) != 0)) {
					{
					setState(141);
					argList();
					}
				}

				setState(144);
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
	}

	public final ArgListContext argList() throws RecognitionException {
		ArgListContext _localctx = new ArgListContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_argList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(147);
			expression(0);
			setState(152);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(148);
				match(COMMA);
				setState(149);
				expression(0);
				}
				}
				setState(154);
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
	}

	public final PairElementContext pairElement() throws RecognitionException {
		PairElementContext _localctx = new PairElementContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_pairElement);
		try {
			setState(159);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case FIRST:
				enterOuterAlt(_localctx, 1);
				{
				setState(155);
				match(FIRST);
				setState(156);
				expression(0);
				}
				break;
			case SECOND:
				enterOuterAlt(_localctx, 2);
				{
				setState(157);
				match(SECOND);
				setState(158);
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
	}

	public final TypeContext type() throws RecognitionException {
		TypeContext _localctx = new TypeContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_type);
		try {
			setState(164);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(161);
				baseType();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(162);
				arrayType(0);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(163);
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
	}

	public final BaseTypeContext baseType() throws RecognitionException {
		BaseTypeContext _localctx = new BaseTypeContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_baseType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(166);
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
			setState(177);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case INTEGER:
			case BOOLEAN:
			case CHARACTER:
			case STRING:
				{
				setState(169);
				baseType();
				setState(170);
				match(LBRACK);
				setState(171);
				match(RBRACK);
				}
				break;
			case PAIR:
				{
				setState(173);
				pairType();
				setState(174);
				match(LBRACK);
				setState(175);
				match(RBRACK);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(184);
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
					setState(179);
					if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
					setState(180);
					match(LBRACK);
					setState(181);
					match(RBRACK);
					}
					} 
				}
				setState(186);
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
	}

	public final PairTypeContext pairType() throws RecognitionException {
		PairTypeContext _localctx = new PairTypeContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_pairType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(187);
			match(PAIR);
			setState(188);
			match(LPAREN);
			setState(189);
			pairElementType();
			setState(190);
			match(COMMA);
			setState(191);
			pairElementType();
			setState(192);
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
	}

	public final PairElementTypeContext pairElementType() throws RecognitionException {
		PairElementTypeContext _localctx = new PairElementTypeContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_pairElementType);
		try {
			setState(197);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(194);
				baseType();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(195);
				arrayType(0);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(196);
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
		public TerminalNode IDENTIFIER() { return getToken(WJSCParser.IDENTIFIER, 0); }
		public IntegerLiteralContext integerLiteral() {
			return getRuleContext(IntegerLiteralContext.class,0);
		}
		public TerminalNode BOOLEAN_LITERAL() { return getToken(WJSCParser.BOOLEAN_LITERAL, 0); }
		public TerminalNode CHARACTER_LITERAL() { return getToken(WJSCParser.CHARACTER_LITERAL, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(WJSCParser.STRING_LITERAL, 0); }
		public TerminalNode PAIR_LITERAL() { return getToken(WJSCParser.PAIR_LITERAL, 0); }
		public TerminalNode BINARY_OPERATOR() { return getToken(WJSCParser.BINARY_OPERATOR, 0); }
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
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
			setState(213);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,16,_ctx) ) {
			case 1:
				{
				setState(200);
				arrayElement();
				}
				break;
			case 2:
				{
				setState(201);
				match(UNARY_OPERATOR);
				setState(202);
				expression(8);
				}
				break;
			case 3:
				{
				setState(203);
				match(LPAREN);
				setState(204);
				expression(0);
				setState(205);
				match(RPAREN);
				}
				break;
			case 4:
				{
				setState(207);
				match(IDENTIFIER);
				}
				break;
			case 5:
				{
				setState(208);
				integerLiteral();
				}
				break;
			case 6:
				{
				setState(209);
				match(BOOLEAN_LITERAL);
				}
				break;
			case 7:
				{
				setState(210);
				match(CHARACTER_LITERAL);
				}
				break;
			case 8:
				{
				setState(211);
				match(STRING_LITERAL);
				}
				break;
			case 9:
				{
				setState(212);
				match(PAIR_LITERAL);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(220);
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
					setState(215);
					if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
					setState(216);
					match(BINARY_OPERATOR);
					setState(217);
					expression(11);
					}
					} 
				}
				setState(222);
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
		public TerminalNode INTEGER_SIGN() { return getToken(WJSCParser.INTEGER_SIGN, 0); }
		public List<TerminalNode> DIGIT() { return getTokens(WJSCParser.DIGIT); }
		public TerminalNode DIGIT(int i) {
			return getToken(WJSCParser.DIGIT, i);
		}
		public IntegerLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_integerLiteral; }
	}

	public final IntegerLiteralContext integerLiteral() throws RecognitionException {
		IntegerLiteralContext _localctx = new IntegerLiteralContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_integerLiteral);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(224);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==INTEGER_SIGN) {
				{
				setState(223);
				match(INTEGER_SIGN);
				}
			}

			setState(227); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(226);
					match(DIGIT);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(229); 
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
	}

	public final ArrayElementContext arrayElement() throws RecognitionException {
		ArrayElementContext _localctx = new ArrayElementContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_arrayElement);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(231);
			match(IDENTIFIER);
			setState(236); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(232);
					match(LBRACK);
					setState(233);
					expression(0);
					setState(234);
					match(RBRACK);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(238); 
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
	}

	public final ArrayLiteralContext arrayLiteral() throws RecognitionException {
		ArrayLiteralContext _localctx = new ArrayLiteralContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_arrayLiteral);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(240);
			match(LBRACK);
			setState(249);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 42)) & ~0x3f) == 0 && ((1L << (_la - 42)) & ((1L << (UNARY_OPERATOR - 42)) | (1L << (DIGIT - 42)) | (1L << (INTEGER_SIGN - 42)) | (1L << (BOOLEAN_LITERAL - 42)) | (1L << (CHARACTER_LITERAL - 42)) | (1L << (PAIR_LITERAL - 42)) | (1L << (STRING_LITERAL - 42)) | (1L << (LPAREN - 42)) | (1L << (IDENTIFIER - 42)))) != 0)) {
				{
				setState(241);
				expression(0);
				setState(246);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(242);
					match(COMMA);
					setState(243);
					expression(0);
					}
					}
					setState(248);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(251);
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
			return precpred(_ctx, 10);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3H\u0100\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\3\2\3\2\7\2-\n\2\f\2\16\2\60\13\2\3\2\3"+
		"\2\3\2\3\2\3\3\3\3\3\3\3\3\5\3:\n\3\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4\7"+
		"\4D\n\4\f\4\16\4G\13\4\3\5\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6"+
		"\3\6\3\6\3\6\3\6\5\6Y\n\6\3\6\3\6\3\6\7\6^\n\6\f\6\16\6a\13\6\3\7\3\7"+
		"\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\5\7q\n\7\3\b\3\b\3\b"+
		"\3\b\3\b\3\b\3\b\3\b\3\b\5\b|\n\b\3\t\3\t\3\t\5\t\u0081\n\t\3\n\3\n\3"+
		"\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\5\n\u0091\n\n\3\n\5\n\u0094"+
		"\n\n\3\13\3\13\3\13\7\13\u0099\n\13\f\13\16\13\u009c\13\13\3\f\3\f\3\f"+
		"\3\f\5\f\u00a2\n\f\3\r\3\r\3\r\5\r\u00a7\n\r\3\16\3\16\3\17\3\17\3\17"+
		"\3\17\3\17\3\17\3\17\3\17\3\17\5\17\u00b4\n\17\3\17\3\17\3\17\7\17\u00b9"+
		"\n\17\f\17\16\17\u00bc\13\17\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\21\3"+
		"\21\3\21\5\21\u00c8\n\21\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22"+
		"\3\22\3\22\3\22\3\22\3\22\5\22\u00d8\n\22\3\22\3\22\3\22\7\22\u00dd\n"+
		"\22\f\22\16\22\u00e0\13\22\3\23\5\23\u00e3\n\23\3\23\6\23\u00e6\n\23\r"+
		"\23\16\23\u00e7\3\24\3\24\3\24\3\24\3\24\6\24\u00ef\n\24\r\24\16\24\u00f0"+
		"\3\25\3\25\3\25\3\25\7\25\u00f7\n\25\f\25\16\25\u00fa\13\25\5\25\u00fc"+
		"\n\25\3\25\3\25\3\25\2\5\n\34\"\26\2\4\6\b\n\f\16\20\22\24\26\30\32\34"+
		"\36 \"$&(\2\3\3\2:=\2\u0114\2*\3\2\2\2\4\65\3\2\2\2\6@\3\2\2\2\bH\3\2"+
		"\2\2\nX\3\2\2\2\fp\3\2\2\2\16{\3\2\2\2\20\u0080\3\2\2\2\22\u0093\3\2\2"+
		"\2\24\u0095\3\2\2\2\26\u00a1\3\2\2\2\30\u00a6\3\2\2\2\32\u00a8\3\2\2\2"+
		"\34\u00b3\3\2\2\2\36\u00bd\3\2\2\2 \u00c7\3\2\2\2\"\u00d7\3\2\2\2$\u00e2"+
		"\3\2\2\2&\u00e9\3\2\2\2(\u00f2\3\2\2\2*.\7\5\2\2+-\5\4\3\2,+\3\2\2\2-"+
		"\60\3\2\2\2.,\3\2\2\2./\3\2\2\2/\61\3\2\2\2\60.\3\2\2\2\61\62\5\n\6\2"+
		"\62\63\7\6\2\2\63\64\7\2\2\3\64\3\3\2\2\2\65\66\5\30\r\2\66\67\7H\2\2"+
		"\679\7?\2\28:\5\6\4\298\3\2\2\29:\3\2\2\2:;\3\2\2\2;<\7@\2\2<=\7\7\2\2"+
		"=>\5\n\6\2>?\7\6\2\2?\5\3\2\2\2@E\5\b\5\2AB\7C\2\2BD\5\b\5\2CA\3\2\2\2"+
		"DG\3\2\2\2EC\3\2\2\2EF\3\2\2\2F\7\3\2\2\2GE\3\2\2\2HI\5\30\r\2IJ\7H\2"+
		"\2J\t\3\2\2\2KL\b\6\1\2LY\7\t\2\2MY\5\f\7\2NY\5\16\b\2OP\7\n\2\2PY\5\20"+
		"\t\2QR\7\b\2\2RY\5\"\22\2SY\5\f\7\2TU\7\5\2\2UV\5\n\6\2VW\7\6\2\2WY\3"+
		"\2\2\2XK\3\2\2\2XM\3\2\2\2XN\3\2\2\2XO\3\2\2\2XQ\3\2\2\2XS\3\2\2\2XT\3"+
		"\2\2\2Y_\3\2\2\2Z[\f\3\2\2[\\\7D\2\2\\^\5\n\6\4]Z\3\2\2\2^a\3\2\2\2_]"+
		"\3\2\2\2_`\3\2\2\2`\13\3\2\2\2a_\3\2\2\2bc\7\20\2\2cd\5\"\22\2de\7\21"+
		"\2\2ef\5\n\6\2fg\7\22\2\2gh\5\n\6\2hi\7\23\2\2iq\3\2\2\2jk\7\24\2\2kl"+
		"\5\"\22\2lm\7\25\2\2mn\5\n\6\2no\7\26\2\2oq\3\2\2\2pb\3\2\2\2pj\3\2\2"+
		"\2q\r\3\2\2\2rs\5\30\r\2st\7H\2\2tu\7*\2\2uv\5\22\n\2v|\3\2\2\2wx\5\20"+
		"\t\2xy\7*\2\2yz\5\22\n\2z|\3\2\2\2{r\3\2\2\2{w\3\2\2\2|\17\3\2\2\2}\u0081"+
		"\7H\2\2~\u0081\5&\24\2\177\u0081\5\26\f\2\u0080}\3\2\2\2\u0080~\3\2\2"+
		"\2\u0080\177\3\2\2\2\u0081\21\3\2\2\2\u0082\u0094\5\"\22\2\u0083\u0094"+
		"\5(\25\2\u0084\u0085\7+\2\2\u0085\u0086\7?\2\2\u0086\u0087\5\"\22\2\u0087"+
		"\u0088\7C\2\2\u0088\u0089\5\"\22\2\u0089\u008a\7@\2\2\u008a\u0094\3\2"+
		"\2\2\u008b\u0094\5\26\f\2\u008c\u008d\7\27\2\2\u008d\u008e\7H\2\2\u008e"+
		"\u0090\7?\2\2\u008f\u0091\5\24\13\2\u0090\u008f\3\2\2\2\u0090\u0091\3"+
		"\2\2\2\u0091\u0092\3\2\2\2\u0092\u0094\7@\2\2\u0093\u0082\3\2\2\2\u0093"+
		"\u0083\3\2\2\2\u0093\u0084\3\2\2\2\u0093\u008b\3\2\2\2\u0093\u008c\3\2"+
		"\2\2\u0094\23\3\2\2\2\u0095\u009a\5\"\22\2\u0096\u0097\7C\2\2\u0097\u0099"+
		"\5\"\22\2\u0098\u0096\3\2\2\2\u0099\u009c\3\2\2\2\u009a\u0098\3\2\2\2"+
		"\u009a\u009b\3\2\2\2\u009b\25\3\2\2\2\u009c\u009a\3\2\2\2\u009d\u009e"+
		"\7\30\2\2\u009e\u00a2\5\"\22\2\u009f\u00a0\7\31\2\2\u00a0\u00a2\5\"\22"+
		"\2\u00a1\u009d\3\2\2\2\u00a1\u009f\3\2\2\2\u00a2\27\3\2\2\2\u00a3\u00a7"+
		"\5\32\16\2\u00a4\u00a7\5\34\17\2\u00a5\u00a7\5\36\20\2\u00a6\u00a3\3\2"+
		"\2\2\u00a6\u00a4\3\2\2\2\u00a6\u00a5\3\2\2\2\u00a7\31\3\2\2\2\u00a8\u00a9"+
		"\t\2\2\2\u00a9\33\3\2\2\2\u00aa\u00ab\b\17\1\2\u00ab\u00ac\5\32\16\2\u00ac"+
		"\u00ad\7A\2\2\u00ad\u00ae\7B\2\2\u00ae\u00b4\3\2\2\2\u00af\u00b0\5\36"+
		"\20\2\u00b0\u00b1\7A\2\2\u00b1\u00b2\7B\2\2\u00b2\u00b4\3\2\2\2\u00b3"+
		"\u00aa\3\2\2\2\u00b3\u00af\3\2\2\2\u00b4\u00ba\3\2\2\2\u00b5\u00b6\f\4"+
		"\2\2\u00b6\u00b7\7A\2\2\u00b7\u00b9\7B\2\2\u00b8\u00b5\3\2\2\2\u00b9\u00bc"+
		"\3\2\2\2\u00ba\u00b8\3\2\2\2\u00ba\u00bb\3\2\2\2\u00bb\35\3\2\2\2\u00bc"+
		"\u00ba\3\2\2\2\u00bd\u00be\7>\2\2\u00be\u00bf\7?\2\2\u00bf\u00c0\5 \21"+
		"\2\u00c0\u00c1\7C\2\2\u00c1\u00c2\5 \21\2\u00c2\u00c3\7@\2\2\u00c3\37"+
		"\3\2\2\2\u00c4\u00c8\5\32\16\2\u00c5\u00c8\5\34\17\2\u00c6\u00c8\7>\2"+
		"\2\u00c7\u00c4\3\2\2\2\u00c7\u00c5\3\2\2\2\u00c7\u00c6\3\2\2\2\u00c8!"+
		"\3\2\2\2\u00c9\u00ca\b\22\1\2\u00ca\u00d8\5&\24\2\u00cb\u00cc\7,\2\2\u00cc"+
		"\u00d8\5\"\22\n\u00cd\u00ce\7?\2\2\u00ce\u00cf\5\"\22\2\u00cf\u00d0\7"+
		"@\2\2\u00d0\u00d8\3\2\2\2\u00d1\u00d8\7H\2\2\u00d2\u00d8\5$\23\2\u00d3"+
		"\u00d8\7\64\2\2\u00d4\u00d8\7\67\2\2\u00d5\u00d8\79\2\2\u00d6\u00d8\7"+
		"8\2\2\u00d7\u00c9\3\2\2\2\u00d7\u00cb\3\2\2\2\u00d7\u00cd\3\2\2\2\u00d7"+
		"\u00d1\3\2\2\2\u00d7\u00d2\3\2\2\2\u00d7\u00d3\3\2\2\2\u00d7\u00d4\3\2"+
		"\2\2\u00d7\u00d5\3\2\2\2\u00d7\u00d6\3\2\2\2\u00d8\u00de\3\2\2\2\u00d9"+
		"\u00da\f\f\2\2\u00da\u00db\7\32\2\2\u00db\u00dd\5\"\22\r\u00dc\u00d9\3"+
		"\2\2\2\u00dd\u00e0\3\2\2\2\u00de\u00dc\3\2\2\2\u00de\u00df\3\2\2\2\u00df"+
		"#\3\2\2\2\u00e0\u00de\3\2\2\2\u00e1\u00e3\7\63\2\2\u00e2\u00e1\3\2\2\2"+
		"\u00e2\u00e3\3\2\2\2\u00e3\u00e5\3\2\2\2\u00e4\u00e6\7\62\2\2\u00e5\u00e4"+
		"\3\2\2\2\u00e6\u00e7\3\2\2\2\u00e7\u00e5\3\2\2\2\u00e7\u00e8\3\2\2\2\u00e8"+
		"%\3\2\2\2\u00e9\u00ee\7H\2\2\u00ea\u00eb\7A\2\2\u00eb\u00ec\5\"\22\2\u00ec"+
		"\u00ed\7B\2\2\u00ed\u00ef\3\2\2\2\u00ee\u00ea\3\2\2\2\u00ef\u00f0\3\2"+
		"\2\2\u00f0\u00ee\3\2\2\2\u00f0\u00f1\3\2\2\2\u00f1\'\3\2\2\2\u00f2\u00fb"+
		"\7A\2\2\u00f3\u00f8\5\"\22\2\u00f4\u00f5\7C\2\2\u00f5\u00f7\5\"\22\2\u00f6"+
		"\u00f4\3\2\2\2\u00f7\u00fa\3\2\2\2\u00f8\u00f6\3\2\2\2\u00f8\u00f9\3\2"+
		"\2\2\u00f9\u00fc\3\2\2\2\u00fa\u00f8\3\2\2\2\u00fb\u00f3\3\2\2\2\u00fb"+
		"\u00fc\3\2\2\2\u00fc\u00fd\3\2\2\2\u00fd\u00fe\7B\2\2\u00fe)\3\2\2\2\31"+
		".9EX_p{\u0080\u0090\u0093\u009a\u00a1\u00a6\u00b3\u00ba\u00c7\u00d7\u00de"+
		"\u00e2\u00e7\u00f0\u00f8\u00fb";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}