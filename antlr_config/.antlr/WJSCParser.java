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
		COMMENT=1, EOL=2, WHITESPACE=3, PROGRAM_KEYWORDS=4, BEGIN=5, END=6, IS=7, 
		STATEMENT_KEYWORDS=8, STDLIB_FUNCTIONS=9, WSKIP=10, READ=11, FREE=12, 
		RETURN=13, EXIT=14, PRINT=15, PRINTLN=16, CONDITIONAL_KEYWORDS=17, IF=18, 
		THEN=19, ELSE=20, FI=21, WHILE=22, DO=23, DONE=24, CALL=25, FIRST=26, 
		SECOND=27, UNARY_OPERATOR=28, LOGICAL_NEGATION=29, ARITHMETIC_NEGATION=30, 
		LENGTH=31, ORDER_OF=32, CHARACTER_OF=33, BINARY_OPERATOR=34, MULTIPLY=35, 
		DIVIDE=36, MODULO=37, PLUS=38, MINUS=39, GREATER_THAN=40, GREATER_EQUAL=41, 
		LESS_THAN=42, LESS_EQUAL=43, EQUALS=44, STRICT_EQUALS=45, NEQUALS=46, 
		NSTRICT_EQUALS=47, LOGICAL_AND=48, LOGICAL_OR=49, ASSIGNMENT=50, NEW_PAIR=51, 
		IDENTIFIER=52, INTEGER_LITERAL=53, DIGIT=54, INTEGER_SIGN=55, BOOLEAN_LITERAL=56, 
		TRUTH=57, FALSITY=58, CHARACTER_LITERAL=59, PAIR_LITERAL=60, STRING_LITERAL=61, 
		INTEGER=62, BOOLEAN=63, CHARACTER=64, STRING=65, PAIR=66, LPAREN=67, RPAREN=68, 
		LBRACK=69, RBRACK=70, COMMA=71, SEMICOLON=72, APOS=73, DBLQ=74;
	public static final int
		RULE_program = 0, RULE_func = 1, RULE_paramList = 2, RULE_param = 3, RULE_statement = 4, 
		RULE_conditionalBlocks = 5, RULE_assignment = 6, RULE_assignLhs = 7, RULE_assignRhs = 8, 
		RULE_argList = 9, RULE_pairElement = 10, RULE_type = 11, RULE_baseType = 12, 
		RULE_arrayType = 13, RULE_pairType = 14, RULE_pairElementType = 15, RULE_expression = 16, 
		RULE_arrayElement = 17, RULE_arrayLiteral = 18, RULE_comment = 19;
	public static final String[] ruleNames = {
		"program", "func", "paramList", "param", "statement", "conditionalBlocks", 
		"assignment", "assignLhs", "assignRhs", "argList", "pairElement", "type", 
		"baseType", "arrayType", "pairType", "pairElementType", "expression", 
		"arrayElement", "arrayLiteral", "comment"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'#'", null, null, null, "'begin'", "'end'", "'is'", null, null, 
		"'skip'", "'read'", "'free'", "'return'", "'exit'", "'print'", "'println'", 
		null, "'if'", "'then'", "'else'", "'fi'", "'while'", "'do'", "'done'", 
		"'call'", "'fst'", "'snd'", null, "'!'", null, "'len'", "'ord'", "'chr'", 
		null, "'*'", "'/'", "'%'", "'+'", "'-'", "'>'", "'>='", "'<'", "'<='", 
		"'=='", "'==='", "'!='", "'!=='", "'&&'", "'||'", "'='", "'newpair'", 
		null, null, null, null, null, "'true'", "'false'", null, "'null'", null, 
		"'int'", "'bool'", "'char'", "'string'", "'pair'", "'('", "')'", "'['", 
		"']'", "','", "';'", "'''", "'\"'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "COMMENT", "EOL", "WHITESPACE", "PROGRAM_KEYWORDS", "BEGIN", "END", 
		"IS", "STATEMENT_KEYWORDS", "STDLIB_FUNCTIONS", "WSKIP", "READ", "FREE", 
		"RETURN", "EXIT", "PRINT", "PRINTLN", "CONDITIONAL_KEYWORDS", "IF", "THEN", 
		"ELSE", "FI", "WHILE", "DO", "DONE", "CALL", "FIRST", "SECOND", "UNARY_OPERATOR", 
		"LOGICAL_NEGATION", "ARITHMETIC_NEGATION", "LENGTH", "ORDER_OF", "CHARACTER_OF", 
		"BINARY_OPERATOR", "MULTIPLY", "DIVIDE", "MODULO", "PLUS", "MINUS", "GREATER_THAN", 
		"GREATER_EQUAL", "LESS_THAN", "LESS_EQUAL", "EQUALS", "STRICT_EQUALS", 
		"NEQUALS", "NSTRICT_EQUALS", "LOGICAL_AND", "LOGICAL_OR", "ASSIGNMENT", 
		"NEW_PAIR", "IDENTIFIER", "INTEGER_LITERAL", "DIGIT", "INTEGER_SIGN", 
		"BOOLEAN_LITERAL", "TRUTH", "FALSITY", "CHARACTER_LITERAL", "PAIR_LITERAL", 
		"STRING_LITERAL", "INTEGER", "BOOLEAN", "CHARACTER", "STRING", "PAIR", 
		"LPAREN", "RPAREN", "LBRACK", "RBRACK", "COMMA", "SEMICOLON", "APOS", 
		"DBLQ"
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
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(40);
			match(BEGIN);
			setState(44);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 62)) & ~0x3f) == 0 && ((1L << (_la - 62)) & ((1L << (INTEGER - 62)) | (1L << (BOOLEAN - 62)) | (1L << (CHARACTER - 62)) | (1L << (STRING - 62)) | (1L << (PAIR - 62)))) != 0)) {
				{
				{
				setState(41);
				func();
				}
				}
				setState(46);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(47);
			statement(0);
			setState(48);
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
			setState(50);
			type();
			setState(51);
			match(IDENTIFIER);
			setState(52);
			match(LPAREN);
			setState(54);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 62)) & ~0x3f) == 0 && ((1L << (_la - 62)) & ((1L << (INTEGER - 62)) | (1L << (BOOLEAN - 62)) | (1L << (CHARACTER - 62)) | (1L << (STRING - 62)) | (1L << (PAIR - 62)))) != 0)) {
				{
				setState(53);
				paramList();
				}
			}

			setState(56);
			match(RPAREN);
			setState(57);
			match(IS);
			setState(58);
			statement(0);
			setState(59);
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
			setState(61);
			param();
			setState(66);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(62);
				match(COMMA);
				setState(63);
				param();
				}
				}
				setState(68);
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
			setState(69);
			type();
			setState(70);
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
		public TerminalNode READ() { return getToken(WJSCParser.READ, 0); }
		public AssignLhsContext assignLhs() {
			return getRuleContext(AssignLhsContext.class,0);
		}
		public TerminalNode STDLIB_FUNCTIONS() { return getToken(WJSCParser.STDLIB_FUNCTIONS, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ConditionalBlocksContext conditionalBlocks() {
			return getRuleContext(ConditionalBlocksContext.class,0);
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
			setState(83);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case WSKIP:
				{
				setState(73);
				match(WSKIP);
				}
				break;
			case READ:
				{
				setState(74);
				match(READ);
				setState(75);
				assignLhs();
				}
				break;
			case STDLIB_FUNCTIONS:
				{
				setState(76);
				match(STDLIB_FUNCTIONS);
				setState(77);
				expression(0);
				}
				break;
			case IF:
			case WHILE:
				{
				setState(78);
				conditionalBlocks();
				}
				break;
			case BEGIN:
				{
				setState(79);
				match(BEGIN);
				setState(80);
				statement(0);
				setState(81);
				match(END);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(90);
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
					setState(85);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(86);
					match(SEMICOLON);
					setState(87);
					statement(2);
					}
					} 
				}
				setState(92);
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
			setState(107);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IF:
				enterOuterAlt(_localctx, 1);
				{
				setState(93);
				match(IF);
				setState(94);
				expression(0);
				setState(95);
				match(THEN);
				setState(96);
				statement(0);
				setState(97);
				match(ELSE);
				setState(98);
				statement(0);
				setState(99);
				match(FI);
				}
				break;
			case WHILE:
				enterOuterAlt(_localctx, 2);
				{
				setState(101);
				match(WHILE);
				setState(102);
				expression(0);
				setState(103);
				match(DO);
				setState(104);
				statement(0);
				setState(105);
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
			setState(117);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case INTEGER:
			case BOOLEAN:
			case CHARACTER:
			case STRING:
			case PAIR:
				enterOuterAlt(_localctx, 1);
				{
				setState(109);
				type();
				setState(110);
				match(IDENTIFIER);
				setState(111);
				match(ASSIGNMENT);
				setState(112);
				assignRhs();
				}
				break;
			case FIRST:
			case SECOND:
			case IDENTIFIER:
				enterOuterAlt(_localctx, 2);
				{
				setState(114);
				assignLhs();
				setState(115);
				match(ASSIGNMENT);
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
			setState(122);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(119);
				match(IDENTIFIER);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(120);
				arrayElement();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(121);
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
			setState(141);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case UNARY_OPERATOR:
			case IDENTIFIER:
			case INTEGER_LITERAL:
			case BOOLEAN_LITERAL:
			case CHARACTER_LITERAL:
			case PAIR_LITERAL:
			case STRING_LITERAL:
			case LPAREN:
				enterOuterAlt(_localctx, 1);
				{
				setState(124);
				expression(0);
				}
				break;
			case LBRACK:
				enterOuterAlt(_localctx, 2);
				{
				setState(125);
				arrayLiteral();
				}
				break;
			case NEW_PAIR:
				enterOuterAlt(_localctx, 3);
				{
				setState(126);
				match(NEW_PAIR);
				setState(127);
				match(LPAREN);
				setState(128);
				expression(0);
				setState(129);
				match(COMMA);
				setState(130);
				expression(0);
				setState(131);
				match(RPAREN);
				}
				break;
			case FIRST:
			case SECOND:
				enterOuterAlt(_localctx, 4);
				{
				setState(133);
				pairElement();
				}
				break;
			case CALL:
				enterOuterAlt(_localctx, 5);
				{
				setState(134);
				match(CALL);
				setState(135);
				match(IDENTIFIER);
				setState(136);
				match(LPAREN);
				setState(138);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 28)) & ~0x3f) == 0 && ((1L << (_la - 28)) & ((1L << (UNARY_OPERATOR - 28)) | (1L << (IDENTIFIER - 28)) | (1L << (INTEGER_LITERAL - 28)) | (1L << (BOOLEAN_LITERAL - 28)) | (1L << (CHARACTER_LITERAL - 28)) | (1L << (PAIR_LITERAL - 28)) | (1L << (STRING_LITERAL - 28)) | (1L << (LPAREN - 28)))) != 0)) {
					{
					setState(137);
					argList();
					}
				}

				setState(140);
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
			setState(143);
			expression(0);
			setState(148);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(144);
				match(COMMA);
				setState(145);
				expression(0);
				}
				}
				setState(150);
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
			setState(155);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case FIRST:
				enterOuterAlt(_localctx, 1);
				{
				setState(151);
				match(FIRST);
				setState(152);
				expression(0);
				}
				break;
			case SECOND:
				enterOuterAlt(_localctx, 2);
				{
				setState(153);
				match(SECOND);
				setState(154);
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
			setState(160);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(157);
				baseType();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(158);
				arrayType(0);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(159);
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
			setState(162);
			_la = _input.LA(1);
			if ( !(((((_la - 62)) & ~0x3f) == 0 && ((1L << (_la - 62)) & ((1L << (INTEGER - 62)) | (1L << (BOOLEAN - 62)) | (1L << (CHARACTER - 62)) | (1L << (STRING - 62)))) != 0)) ) {
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
			setState(173);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case INTEGER:
			case BOOLEAN:
			case CHARACTER:
			case STRING:
				{
				setState(165);
				baseType();
				setState(166);
				match(LBRACK);
				setState(167);
				match(RBRACK);
				}
				break;
			case PAIR:
				{
				setState(169);
				pairType();
				setState(170);
				match(LBRACK);
				setState(171);
				match(RBRACK);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(180);
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
					setState(175);
					if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
					setState(176);
					match(LBRACK);
					setState(177);
					match(RBRACK);
					}
					} 
				}
				setState(182);
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
			setState(183);
			match(PAIR);
			setState(184);
			match(LPAREN);
			setState(185);
			pairElementType();
			setState(186);
			match(COMMA);
			setState(187);
			pairElementType();
			setState(188);
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
			setState(193);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(190);
				baseType();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(191);
				arrayType(0);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(192);
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
			setState(209);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,16,_ctx) ) {
			case 1:
				{
				setState(196);
				match(INTEGER_LITERAL);
				}
				break;
			case 2:
				{
				setState(197);
				match(BOOLEAN_LITERAL);
				}
				break;
			case 3:
				{
				setState(198);
				match(CHARACTER_LITERAL);
				}
				break;
			case 4:
				{
				setState(199);
				match(STRING_LITERAL);
				}
				break;
			case 5:
				{
				setState(200);
				match(PAIR_LITERAL);
				}
				break;
			case 6:
				{
				setState(201);
				match(IDENTIFIER);
				}
				break;
			case 7:
				{
				setState(202);
				arrayElement();
				}
				break;
			case 8:
				{
				setState(203);
				match(UNARY_OPERATOR);
				setState(204);
				expression(3);
				}
				break;
			case 9:
				{
				setState(205);
				match(LPAREN);
				setState(206);
				expression(0);
				setState(207);
				match(RPAREN);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(216);
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
					setState(211);
					if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
					setState(212);
					match(BINARY_OPERATOR);
					setState(213);
					expression(3);
					}
					} 
				}
				setState(218);
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
	}

	public final ArrayElementContext arrayElement() throws RecognitionException {
		ArrayElementContext _localctx = new ArrayElementContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_arrayElement);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(219);
			match(IDENTIFIER);
			setState(224); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(220);
					match(LBRACK);
					setState(221);
					expression(0);
					setState(222);
					match(RBRACK);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(226); 
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
	}

	public final ArrayLiteralContext arrayLiteral() throws RecognitionException {
		ArrayLiteralContext _localctx = new ArrayLiteralContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_arrayLiteral);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(228);
			match(LBRACK);
			setState(237);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 28)) & ~0x3f) == 0 && ((1L << (_la - 28)) & ((1L << (UNARY_OPERATOR - 28)) | (1L << (IDENTIFIER - 28)) | (1L << (INTEGER_LITERAL - 28)) | (1L << (BOOLEAN_LITERAL - 28)) | (1L << (CHARACTER_LITERAL - 28)) | (1L << (PAIR_LITERAL - 28)) | (1L << (STRING_LITERAL - 28)) | (1L << (LPAREN - 28)))) != 0)) {
				{
				setState(229);
				expression(0);
				setState(234);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(230);
					match(COMMA);
					setState(231);
					expression(0);
					}
					}
					setState(236);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(239);
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

	public static class CommentContext extends ParserRuleContext {
		public List<TerminalNode> EOL() { return getTokens(WJSCParser.EOL); }
		public TerminalNode EOL(int i) {
			return getToken(WJSCParser.EOL, i);
		}
		public CommentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comment; }
	}

	public final CommentContext comment() throws RecognitionException {
		CommentContext _localctx = new CommentContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_comment);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(241);
			match(COMMENT);
			setState(245);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << COMMENT) | (1L << WHITESPACE) | (1L << PROGRAM_KEYWORDS) | (1L << BEGIN) | (1L << END) | (1L << IS) | (1L << STATEMENT_KEYWORDS) | (1L << STDLIB_FUNCTIONS) | (1L << WSKIP) | (1L << READ) | (1L << FREE) | (1L << RETURN) | (1L << EXIT) | (1L << PRINT) | (1L << PRINTLN) | (1L << CONDITIONAL_KEYWORDS) | (1L << IF) | (1L << THEN) | (1L << ELSE) | (1L << FI) | (1L << WHILE) | (1L << DO) | (1L << DONE) | (1L << CALL) | (1L << FIRST) | (1L << SECOND) | (1L << UNARY_OPERATOR) | (1L << LOGICAL_NEGATION) | (1L << ARITHMETIC_NEGATION) | (1L << LENGTH) | (1L << ORDER_OF) | (1L << CHARACTER_OF) | (1L << BINARY_OPERATOR) | (1L << MULTIPLY) | (1L << DIVIDE) | (1L << MODULO) | (1L << PLUS) | (1L << MINUS) | (1L << GREATER_THAN) | (1L << GREATER_EQUAL) | (1L << LESS_THAN) | (1L << LESS_EQUAL) | (1L << EQUALS) | (1L << STRICT_EQUALS) | (1L << NEQUALS) | (1L << NSTRICT_EQUALS) | (1L << LOGICAL_AND) | (1L << LOGICAL_OR) | (1L << ASSIGNMENT) | (1L << NEW_PAIR) | (1L << IDENTIFIER) | (1L << INTEGER_LITERAL) | (1L << DIGIT) | (1L << INTEGER_SIGN) | (1L << BOOLEAN_LITERAL) | (1L << TRUTH) | (1L << FALSITY) | (1L << CHARACTER_LITERAL) | (1L << PAIR_LITERAL) | (1L << STRING_LITERAL) | (1L << INTEGER) | (1L << BOOLEAN))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (CHARACTER - 64)) | (1L << (STRING - 64)) | (1L << (PAIR - 64)) | (1L << (LPAREN - 64)) | (1L << (RPAREN - 64)) | (1L << (LBRACK - 64)) | (1L << (RBRACK - 64)) | (1L << (COMMA - 64)) | (1L << (SEMICOLON - 64)) | (1L << (APOS - 64)) | (1L << (DBLQ - 64)))) != 0)) {
				{
				{
				setState(242);
				_la = _input.LA(1);
				if ( _la <= 0 || (_la==EOL) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				}
				setState(247);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(248);
			match(EOL);
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3L\u00fd\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\3\2\3\2\7\2-\n\2\f\2\16\2\60\13\2\3\2\3"+
		"\2\3\2\3\3\3\3\3\3\3\3\5\39\n\3\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4\7\4C\n"+
		"\4\f\4\16\4F\13\4\3\5\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6"+
		"\3\6\5\6V\n\6\3\6\3\6\3\6\7\6[\n\6\f\6\16\6^\13\6\3\7\3\7\3\7\3\7\3\7"+
		"\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\5\7n\n\7\3\b\3\b\3\b\3\b\3\b\3\b"+
		"\3\b\3\b\5\bx\n\b\3\t\3\t\3\t\5\t}\n\t\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n"+
		"\3\n\3\n\3\n\3\n\3\n\3\n\5\n\u008d\n\n\3\n\5\n\u0090\n\n\3\13\3\13\3\13"+
		"\7\13\u0095\n\13\f\13\16\13\u0098\13\13\3\f\3\f\3\f\3\f\5\f\u009e\n\f"+
		"\3\r\3\r\3\r\5\r\u00a3\n\r\3\16\3\16\3\17\3\17\3\17\3\17\3\17\3\17\3\17"+
		"\3\17\3\17\5\17\u00b0\n\17\3\17\3\17\3\17\7\17\u00b5\n\17\f\17\16\17\u00b8"+
		"\13\17\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\21\3\21\3\21\5\21\u00c4\n"+
		"\21\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3"+
		"\22\5\22\u00d4\n\22\3\22\3\22\3\22\7\22\u00d9\n\22\f\22\16\22\u00dc\13"+
		"\22\3\23\3\23\3\23\3\23\3\23\6\23\u00e3\n\23\r\23\16\23\u00e4\3\24\3\24"+
		"\3\24\3\24\7\24\u00eb\n\24\f\24\16\24\u00ee\13\24\5\24\u00f0\n\24\3\24"+
		"\3\24\3\25\3\25\7\25\u00f6\n\25\f\25\16\25\u00f9\13\25\3\25\3\25\3\25"+
		"\2\5\n\34\"\26\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(\2\4\3\2@C"+
		"\3\2\4\4\2\u010e\2*\3\2\2\2\4\64\3\2\2\2\6?\3\2\2\2\bG\3\2\2\2\nU\3\2"+
		"\2\2\fm\3\2\2\2\16w\3\2\2\2\20|\3\2\2\2\22\u008f\3\2\2\2\24\u0091\3\2"+
		"\2\2\26\u009d\3\2\2\2\30\u00a2\3\2\2\2\32\u00a4\3\2\2\2\34\u00af\3\2\2"+
		"\2\36\u00b9\3\2\2\2 \u00c3\3\2\2\2\"\u00d3\3\2\2\2$\u00dd\3\2\2\2&\u00e6"+
		"\3\2\2\2(\u00f3\3\2\2\2*.\7\7\2\2+-\5\4\3\2,+\3\2\2\2-\60\3\2\2\2.,\3"+
		"\2\2\2./\3\2\2\2/\61\3\2\2\2\60.\3\2\2\2\61\62\5\n\6\2\62\63\7\b\2\2\63"+
		"\3\3\2\2\2\64\65\5\30\r\2\65\66\7\66\2\2\668\7E\2\2\679\5\6\4\28\67\3"+
		"\2\2\289\3\2\2\29:\3\2\2\2:;\7F\2\2;<\7\t\2\2<=\5\n\6\2=>\7\b\2\2>\5\3"+
		"\2\2\2?D\5\b\5\2@A\7I\2\2AC\5\b\5\2B@\3\2\2\2CF\3\2\2\2DB\3\2\2\2DE\3"+
		"\2\2\2E\7\3\2\2\2FD\3\2\2\2GH\5\30\r\2HI\7\66\2\2I\t\3\2\2\2JK\b\6\1\2"+
		"KV\7\f\2\2LM\7\r\2\2MV\5\20\t\2NO\7\13\2\2OV\5\"\22\2PV\5\f\7\2QR\7\7"+
		"\2\2RS\5\n\6\2ST\7\b\2\2TV\3\2\2\2UJ\3\2\2\2UL\3\2\2\2UN\3\2\2\2UP\3\2"+
		"\2\2UQ\3\2\2\2V\\\3\2\2\2WX\f\3\2\2XY\7J\2\2Y[\5\n\6\4ZW\3\2\2\2[^\3\2"+
		"\2\2\\Z\3\2\2\2\\]\3\2\2\2]\13\3\2\2\2^\\\3\2\2\2_`\7\24\2\2`a\5\"\22"+
		"\2ab\7\25\2\2bc\5\n\6\2cd\7\26\2\2de\5\n\6\2ef\7\27\2\2fn\3\2\2\2gh\7"+
		"\30\2\2hi\5\"\22\2ij\7\31\2\2jk\5\n\6\2kl\7\32\2\2ln\3\2\2\2m_\3\2\2\2"+
		"mg\3\2\2\2n\r\3\2\2\2op\5\30\r\2pq\7\66\2\2qr\7\64\2\2rs\5\22\n\2sx\3"+
		"\2\2\2tu\5\20\t\2uv\7\64\2\2vx\3\2\2\2wo\3\2\2\2wt\3\2\2\2x\17\3\2\2\2"+
		"y}\7\66\2\2z}\5$\23\2{}\5\26\f\2|y\3\2\2\2|z\3\2\2\2|{\3\2\2\2}\21\3\2"+
		"\2\2~\u0090\5\"\22\2\177\u0090\5&\24\2\u0080\u0081\7\65\2\2\u0081\u0082"+
		"\7E\2\2\u0082\u0083\5\"\22\2\u0083\u0084\7I\2\2\u0084\u0085\5\"\22\2\u0085"+
		"\u0086\7F\2\2\u0086\u0090\3\2\2\2\u0087\u0090\5\26\f\2\u0088\u0089\7\33"+
		"\2\2\u0089\u008a\7\66\2\2\u008a\u008c\7E\2\2\u008b\u008d\5\24\13\2\u008c"+
		"\u008b\3\2\2\2\u008c\u008d\3\2\2\2\u008d\u008e\3\2\2\2\u008e\u0090\7F"+
		"\2\2\u008f~\3\2\2\2\u008f\177\3\2\2\2\u008f\u0080\3\2\2\2\u008f\u0087"+
		"\3\2\2\2\u008f\u0088\3\2\2\2\u0090\23\3\2\2\2\u0091\u0096\5\"\22\2\u0092"+
		"\u0093\7I\2\2\u0093\u0095\5\"\22\2\u0094\u0092\3\2\2\2\u0095\u0098\3\2"+
		"\2\2\u0096\u0094\3\2\2\2\u0096\u0097\3\2\2\2\u0097\25\3\2\2\2\u0098\u0096"+
		"\3\2\2\2\u0099\u009a\7\34\2\2\u009a\u009e\5\"\22\2\u009b\u009c\7\35\2"+
		"\2\u009c\u009e\5\"\22\2\u009d\u0099\3\2\2\2\u009d\u009b\3\2\2\2\u009e"+
		"\27\3\2\2\2\u009f\u00a3\5\32\16\2\u00a0\u00a3\5\34\17\2\u00a1\u00a3\5"+
		"\36\20\2\u00a2\u009f\3\2\2\2\u00a2\u00a0\3\2\2\2\u00a2\u00a1\3\2\2\2\u00a3"+
		"\31\3\2\2\2\u00a4\u00a5\t\2\2\2\u00a5\33\3\2\2\2\u00a6\u00a7\b\17\1\2"+
		"\u00a7\u00a8\5\32\16\2\u00a8\u00a9\7G\2\2\u00a9\u00aa\7H\2\2\u00aa\u00b0"+
		"\3\2\2\2\u00ab\u00ac\5\36\20\2\u00ac\u00ad\7G\2\2\u00ad\u00ae\7H\2\2\u00ae"+
		"\u00b0\3\2\2\2\u00af\u00a6\3\2\2\2\u00af\u00ab\3\2\2\2\u00b0\u00b6\3\2"+
		"\2\2\u00b1\u00b2\f\4\2\2\u00b2\u00b3\7G\2\2\u00b3\u00b5\7H\2\2\u00b4\u00b1"+
		"\3\2\2\2\u00b5\u00b8\3\2\2\2\u00b6\u00b4\3\2\2\2\u00b6\u00b7\3\2\2\2\u00b7"+
		"\35\3\2\2\2\u00b8\u00b6\3\2\2\2\u00b9\u00ba\7D\2\2\u00ba\u00bb\7E\2\2"+
		"\u00bb\u00bc\5 \21\2\u00bc\u00bd\7I\2\2\u00bd\u00be\5 \21\2\u00be\u00bf"+
		"\7F\2\2\u00bf\37\3\2\2\2\u00c0\u00c4\5\32\16\2\u00c1\u00c4\5\34\17\2\u00c2"+
		"\u00c4\7D\2\2\u00c3\u00c0\3\2\2\2\u00c3\u00c1\3\2\2\2\u00c3\u00c2\3\2"+
		"\2\2\u00c4!\3\2\2\2\u00c5\u00c6\b\22\1\2\u00c6\u00d4\7\67\2\2\u00c7\u00d4"+
		"\7:\2\2\u00c8\u00d4\7=\2\2\u00c9\u00d4\7?\2\2\u00ca\u00d4\7>\2\2\u00cb"+
		"\u00d4\7\66\2\2\u00cc\u00d4\5$\23\2\u00cd\u00ce\7\36\2\2\u00ce\u00d4\5"+
		"\"\22\5\u00cf\u00d0\7E\2\2\u00d0\u00d1\5\"\22\2\u00d1\u00d2\7F\2\2\u00d2"+
		"\u00d4\3\2\2\2\u00d3\u00c5\3\2\2\2\u00d3\u00c7\3\2\2\2\u00d3\u00c8\3\2"+
		"\2\2\u00d3\u00c9\3\2\2\2\u00d3\u00ca\3\2\2\2\u00d3\u00cb\3\2\2\2\u00d3"+
		"\u00cc\3\2\2\2\u00d3\u00cd\3\2\2\2\u00d3\u00cf\3\2\2\2\u00d4\u00da\3\2"+
		"\2\2\u00d5\u00d6\f\4\2\2\u00d6\u00d7\7$\2\2\u00d7\u00d9\5\"\22\5\u00d8"+
		"\u00d5\3\2\2\2\u00d9\u00dc\3\2\2\2\u00da\u00d8\3\2\2\2\u00da\u00db\3\2"+
		"\2\2\u00db#\3\2\2\2\u00dc\u00da\3\2\2\2\u00dd\u00e2\7\66\2\2\u00de\u00df"+
		"\7G\2\2\u00df\u00e0\5\"\22\2\u00e0\u00e1\7H\2\2\u00e1\u00e3\3\2\2\2\u00e2"+
		"\u00de\3\2\2\2\u00e3\u00e4\3\2\2\2\u00e4\u00e2\3\2\2\2\u00e4\u00e5\3\2"+
		"\2\2\u00e5%\3\2\2\2\u00e6\u00ef\7G\2\2\u00e7\u00ec\5\"\22\2\u00e8\u00e9"+
		"\7I\2\2\u00e9\u00eb\5\"\22\2\u00ea\u00e8\3\2\2\2\u00eb\u00ee\3\2\2\2\u00ec"+
		"\u00ea\3\2\2\2\u00ec\u00ed\3\2\2\2\u00ed\u00f0\3\2\2\2\u00ee\u00ec\3\2"+
		"\2\2\u00ef\u00e7\3\2\2\2\u00ef\u00f0\3\2\2\2\u00f0\u00f1\3\2\2\2\u00f1"+
		"\u00f2\7H\2\2\u00f2\'\3\2\2\2\u00f3\u00f7\7\3\2\2\u00f4\u00f6\n\3\2\2"+
		"\u00f5\u00f4\3\2\2\2\u00f6\u00f9\3\2\2\2\u00f7\u00f5\3\2\2\2\u00f7\u00f8"+
		"\3\2\2\2\u00f8\u00fa\3\2\2\2\u00f9\u00f7\3\2\2\2\u00fa\u00fb\7\4\2\2\u00fb"+
		")\3\2\2\2\30.8DU\\mw|\u008c\u008f\u0096\u009d\u00a2\u00af\u00b6\u00c3"+
		"\u00d3\u00da\u00e4\u00ec\u00ef\u00f7";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}