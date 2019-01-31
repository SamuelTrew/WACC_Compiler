// Generated from WJSCLexer.g4 by ANTLR 4.7.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class WJSCLexer extends Lexer {
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
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"EOL", "WHITESPACE", "BEGIN", "END", "IS", "STDLIB_FUNCTIONS", "WSKIP", 
			"READ", "FREE", "RETURN", "EXIT", "PRINT", "PRINTLN", "IF", "THEN", "ELSE", 
			"FI", "WHILE", "DO", "DONE", "CALL", "FIRST", "SECOND", "UNARY_OPERATOR", 
			"LOGICAL_NEGATION", "ARITHMETIC_NEGATION", "LENGTH", "ORDER_OF", "CHARACTER_OF", 
			"BINARY_OPERATOR", "MULTIPLY", "DIVIDE", "MODULO", "PLUS", "MINUS", "GREATER_THAN", 
			"GREATER_EQUAL", "LESS_THAN", "LESS_EQUAL", "EQUALS", "STRICT_EQUALS", 
			"NEQUALS", "NSTRICT_EQUALS", "LOGICAL_AND", "LOGICAL_OR", "ASSIGNMENT", 
			"NEW_PAIR", "INTEGER_LITERAL", "DIGIT", "INTEGER_SIGN", "BOOLEAN_LITERAL", 
			"TRUTH", "FALSITY", "BACKSLASH", "ESCAPED_CHAR", "NON_ESCAPED", "CHAR", 
			"CHARACTER_LITERAL", "PAIR_LITERAL", "STRING_LITERAL", "INTEGER", "BOOLEAN", 
			"CHARACTER", "STRING", "PAIR", "LPAREN", "RPAREN", "LBRACK", "RBRACK", 
			"COMMA", "SEMICOLON", "APOS", "DBLQ", "NL", "COMMENT", "IDENTIFIER"
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


	public WJSCLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "WJSCLexer.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2I\u01e5\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I"+
		"\tI\4J\tJ\4K\tK\4L\tL\4M\tM\3\2\3\2\3\2\5\2\u009f\n\2\3\2\3\2\3\3\6\3"+
		"\u00a4\n\3\r\3\16\3\u00a5\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5"+
		"\3\5\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\5\7\u00bc\n\7\3\b\3\b\3\b\3\b\3\b"+
		"\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3\13"+
		"\3\13\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16"+
		"\3\16\3\16\3\16\3\16\3\17\3\17\3\17\3\20\3\20\3\20\3\20\3\20\3\21\3\21"+
		"\3\21\3\21\3\21\3\22\3\22\3\22\3\23\3\23\3\23\3\23\3\23\3\23\3\24\3\24"+
		"\3\24\3\25\3\25\3\25\3\25\3\25\3\26\3\26\3\26\3\26\3\26\3\27\3\27\3\27"+
		"\3\27\3\30\3\30\3\30\3\30\3\31\3\31\3\31\3\31\3\31\5\31\u0117\n\31\3\32"+
		"\3\32\3\33\3\33\3\34\3\34\3\34\3\34\3\35\3\35\3\35\3\35\3\36\3\36\3\36"+
		"\3\36\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37"+
		"\3\37\3\37\5\37\u0138\n\37\3 \3 \3!\3!\3\"\3\"\3#\3#\3$\3$\3%\3%\3&\3"+
		"&\3&\3\'\3\'\3(\3(\3(\3)\3)\3)\3*\3*\3*\3*\3+\3+\3+\3,\3,\3,\3,\3-\3-"+
		"\3-\3.\3.\3.\3/\3/\3\60\3\60\3\60\3\60\3\60\3\60\3\60\3\60\3\61\5\61\u016d"+
		"\n\61\3\61\6\61\u0170\n\61\r\61\16\61\u0171\3\62\3\62\3\63\3\63\5\63\u0178"+
		"\n\63\3\64\3\64\5\64\u017c\n\64\3\65\3\65\3\65\3\65\3\65\3\66\3\66\3\66"+
		"\3\66\3\66\3\66\3\67\3\67\38\38\39\59\u018e\n9\3:\3:\3:\3:\5:\u0194\n"+
		":\3;\3;\3;\3;\3<\3<\3<\3<\3<\3=\3=\7=\u01a1\n=\f=\16=\u01a4\13=\3=\3="+
		"\3>\3>\3>\3>\3?\3?\3?\3?\3?\3@\3@\3@\3@\3@\3A\3A\3A\3A\3A\3A\3A\3B\3B"+
		"\3B\3B\3B\3C\3C\3D\3D\3E\3E\3F\3F\3G\3G\3H\3H\3I\3I\3J\3J\3K\3K\3L\3L"+
		"\7L\u01d6\nL\fL\16L\u01d9\13L\3L\3L\3M\5M\u01de\nM\3M\7M\u01e1\nM\fM\16"+
		"M\u01e4\13M\2\2N\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31"+
		"\16\33\17\35\20\37\21!\22#\23%\24\'\25)\26+\27-\30/\31\61\32\63\33\65"+
		"\34\67\359\36;\37= ?!A\"C#E$G%I&K\'M(O)Q*S+U,W-Y.[/]\60_\61a\62c\63e\64"+
		"g\65i\66k\67m\2o\2q\2s\2u8w9y:{;}<\177=\u0081>\u0083?\u0085@\u0087A\u0089"+
		"B\u008bC\u008dD\u008fE\u0091F\u0093G\u0095\2\u0097H\u0099I\3\2\t\4\2\f"+
		"\f\17\17\3\2\62;\n\2))\62\62^^ddhhppttvv\6\2\2#%(*]_\u0081\5\2\13\f\16"+
		"\17\"\"\5\2C\\aac|\6\2\62;C\\aac|\2\u01ff\2\3\3\2\2\2\2\5\3\2\2\2\2\7"+
		"\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2"+
		"\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2"+
		"\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2"+
		"\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2"+
		"\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2\2"+
		"\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2\2\2M"+
		"\3\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2Y\3\2"+
		"\2\2\2[\3\2\2\2\2]\3\2\2\2\2_\3\2\2\2\2a\3\2\2\2\2c\3\2\2\2\2e\3\2\2\2"+
		"\2g\3\2\2\2\2i\3\2\2\2\2k\3\2\2\2\2u\3\2\2\2\2w\3\2\2\2\2y\3\2\2\2\2{"+
		"\3\2\2\2\2}\3\2\2\2\2\177\3\2\2\2\2\u0081\3\2\2\2\2\u0083\3\2\2\2\2\u0085"+
		"\3\2\2\2\2\u0087\3\2\2\2\2\u0089\3\2\2\2\2\u008b\3\2\2\2\2\u008d\3\2\2"+
		"\2\2\u008f\3\2\2\2\2\u0091\3\2\2\2\2\u0093\3\2\2\2\2\u0097\3\2\2\2\2\u0099"+
		"\3\2\2\2\3\u009e\3\2\2\2\5\u00a3\3\2\2\2\7\u00a9\3\2\2\2\t\u00af\3\2\2"+
		"\2\13\u00b3\3\2\2\2\r\u00bb\3\2\2\2\17\u00bd\3\2\2\2\21\u00c2\3\2\2\2"+
		"\23\u00c7\3\2\2\2\25\u00cc\3\2\2\2\27\u00d3\3\2\2\2\31\u00d8\3\2\2\2\33"+
		"\u00de\3\2\2\2\35\u00e6\3\2\2\2\37\u00e9\3\2\2\2!\u00ee\3\2\2\2#\u00f3"+
		"\3\2\2\2%\u00f6\3\2\2\2\'\u00fc\3\2\2\2)\u00ff\3\2\2\2+\u0104\3\2\2\2"+
		"-\u0109\3\2\2\2/\u010d\3\2\2\2\61\u0116\3\2\2\2\63\u0118\3\2\2\2\65\u011a"+
		"\3\2\2\2\67\u011c\3\2\2\29\u0120\3\2\2\2;\u0124\3\2\2\2=\u0137\3\2\2\2"+
		"?\u0139\3\2\2\2A\u013b\3\2\2\2C\u013d\3\2\2\2E\u013f\3\2\2\2G\u0141\3"+
		"\2\2\2I\u0143\3\2\2\2K\u0145\3\2\2\2M\u0148\3\2\2\2O\u014a\3\2\2\2Q\u014d"+
		"\3\2\2\2S\u0150\3\2\2\2U\u0154\3\2\2\2W\u0157\3\2\2\2Y\u015b\3\2\2\2["+
		"\u015e\3\2\2\2]\u0161\3\2\2\2_\u0163\3\2\2\2a\u016c\3\2\2\2c\u0173\3\2"+
		"\2\2e\u0177\3\2\2\2g\u017b\3\2\2\2i\u017d\3\2\2\2k\u0182\3\2\2\2m\u0188"+
		"\3\2\2\2o\u018a\3\2\2\2q\u018d\3\2\2\2s\u0193\3\2\2\2u\u0195\3\2\2\2w"+
		"\u0199\3\2\2\2y\u019e\3\2\2\2{\u01a7\3\2\2\2}\u01ab\3\2\2\2\177\u01b0"+
		"\3\2\2\2\u0081\u01b5\3\2\2\2\u0083\u01bc\3\2\2\2\u0085\u01c1\3\2\2\2\u0087"+
		"\u01c3\3\2\2\2\u0089\u01c5\3\2\2\2\u008b\u01c7\3\2\2\2\u008d\u01c9\3\2"+
		"\2\2\u008f\u01cb\3\2\2\2\u0091\u01cd\3\2\2\2\u0093\u01cf\3\2\2\2\u0095"+
		"\u01d1\3\2\2\2\u0097\u01d3\3\2\2\2\u0099\u01dd\3\2\2\2\u009b\u009f\t\2"+
		"\2\2\u009c\u009d\7\17\2\2\u009d\u009f\7\f\2\2\u009e\u009b\3\2\2\2\u009e"+
		"\u009c\3\2\2\2\u009f\u00a0\3\2\2\2\u00a0\u00a1\b\2\2\2\u00a1\4\3\2\2\2"+
		"\u00a2\u00a4\5\u0095K\2\u00a3\u00a2\3\2\2\2\u00a4\u00a5\3\2\2\2\u00a5"+
		"\u00a3\3\2\2\2\u00a5\u00a6\3\2\2\2\u00a6\u00a7\3\2\2\2\u00a7\u00a8\b\3"+
		"\2\2\u00a8\6\3\2\2\2\u00a9\u00aa\7d\2\2\u00aa\u00ab\7g\2\2\u00ab\u00ac"+
		"\7i\2\2\u00ac\u00ad\7k\2\2\u00ad\u00ae\7p\2\2\u00ae\b\3\2\2\2\u00af\u00b0"+
		"\7g\2\2\u00b0\u00b1\7p\2\2\u00b1\u00b2\7f\2\2\u00b2\n\3\2\2\2\u00b3\u00b4"+
		"\7k\2\2\u00b4\u00b5\7u\2\2\u00b5\f\3\2\2\2\u00b6\u00bc\5\23\n\2\u00b7"+
		"\u00bc\5\25\13\2\u00b8\u00bc\5\27\f\2\u00b9\u00bc\5\31\r\2\u00ba\u00bc"+
		"\5\33\16\2\u00bb\u00b6\3\2\2\2\u00bb\u00b7\3\2\2\2\u00bb\u00b8\3\2\2\2"+
		"\u00bb\u00b9\3\2\2\2\u00bb\u00ba\3\2\2\2\u00bc\16\3\2\2\2\u00bd\u00be"+
		"\7u\2\2\u00be\u00bf\7m\2\2\u00bf\u00c0\7k\2\2\u00c0\u00c1\7r\2\2\u00c1"+
		"\20\3\2\2\2\u00c2\u00c3\7t\2\2\u00c3\u00c4\7g\2\2\u00c4\u00c5\7c\2\2\u00c5"+
		"\u00c6\7f\2\2\u00c6\22\3\2\2\2\u00c7\u00c8\7h\2\2\u00c8\u00c9\7t\2\2\u00c9"+
		"\u00ca\7g\2\2\u00ca\u00cb\7g\2\2\u00cb\24\3\2\2\2\u00cc\u00cd\7t\2\2\u00cd"+
		"\u00ce\7g\2\2\u00ce\u00cf\7v\2\2\u00cf\u00d0\7w\2\2\u00d0\u00d1\7t\2\2"+
		"\u00d1\u00d2\7p\2\2\u00d2\26\3\2\2\2\u00d3\u00d4\7g\2\2\u00d4\u00d5\7"+
		"z\2\2\u00d5\u00d6\7k\2\2\u00d6\u00d7\7v\2\2\u00d7\30\3\2\2\2\u00d8\u00d9"+
		"\7r\2\2\u00d9\u00da\7t\2\2\u00da\u00db\7k\2\2\u00db\u00dc\7p\2\2\u00dc"+
		"\u00dd\7v\2\2\u00dd\32\3\2\2\2\u00de\u00df\7r\2\2\u00df\u00e0\7t\2\2\u00e0"+
		"\u00e1\7k\2\2\u00e1\u00e2\7p\2\2\u00e2\u00e3\7v\2\2\u00e3\u00e4\7n\2\2"+
		"\u00e4\u00e5\7p\2\2\u00e5\34\3\2\2\2\u00e6\u00e7\7k\2\2\u00e7\u00e8\7"+
		"h\2\2\u00e8\36\3\2\2\2\u00e9\u00ea\7v\2\2\u00ea\u00eb\7j\2\2\u00eb\u00ec"+
		"\7g\2\2\u00ec\u00ed\7p\2\2\u00ed \3\2\2\2\u00ee\u00ef\7g\2\2\u00ef\u00f0"+
		"\7n\2\2\u00f0\u00f1\7u\2\2\u00f1\u00f2\7g\2\2\u00f2\"\3\2\2\2\u00f3\u00f4"+
		"\7h\2\2\u00f4\u00f5\7k\2\2\u00f5$\3\2\2\2\u00f6\u00f7\7y\2\2\u00f7\u00f8"+
		"\7j\2\2\u00f8\u00f9\7k\2\2\u00f9\u00fa\7n\2\2\u00fa\u00fb\7g\2\2\u00fb"+
		"&\3\2\2\2\u00fc\u00fd\7f\2\2\u00fd\u00fe\7q\2\2\u00fe(\3\2\2\2\u00ff\u0100"+
		"\7f\2\2\u0100\u0101\7q\2\2\u0101\u0102\7p\2\2\u0102\u0103\7g\2\2\u0103"+
		"*\3\2\2\2\u0104\u0105\7e\2\2\u0105\u0106\7c\2\2\u0106\u0107\7n\2\2\u0107"+
		"\u0108\7n\2\2\u0108,\3\2\2\2\u0109\u010a\7h\2\2\u010a\u010b\7u\2\2\u010b"+
		"\u010c\7v\2\2\u010c.\3\2\2\2\u010d\u010e\7u\2\2\u010e\u010f\7p\2\2\u010f"+
		"\u0110\7f\2\2\u0110\60\3\2\2\2\u0111\u0117\5\63\32\2\u0112\u0117\5\65"+
		"\33\2\u0113\u0117\5\67\34\2\u0114\u0117\59\35\2\u0115\u0117\5;\36\2\u0116"+
		"\u0111\3\2\2\2\u0116\u0112\3\2\2\2\u0116\u0113\3\2\2\2\u0116\u0114\3\2"+
		"\2\2\u0116\u0115\3\2\2\2\u0117\62\3\2\2\2\u0118\u0119\7#\2\2\u0119\64"+
		"\3\2\2\2\u011a\u011b\5G$\2\u011b\66\3\2\2\2\u011c\u011d\7n\2\2\u011d\u011e"+
		"\7g\2\2\u011e\u011f\7p\2\2\u011f8\3\2\2\2\u0120\u0121\7q\2\2\u0121\u0122"+
		"\7t\2\2\u0122\u0123\7f\2\2\u0123:\3\2\2\2\u0124\u0125\7e\2\2\u0125\u0126"+
		"\7j\2\2\u0126\u0127\7t\2\2\u0127<\3\2\2\2\u0128\u0138\5? \2\u0129\u0138"+
		"\5A!\2\u012a\u0138\5C\"\2\u012b\u0138\5E#\2\u012c\u0138\5G$\2\u012d\u0138"+
		"\5I%\2\u012e\u0138\5K&\2\u012f\u0138\5M\'\2\u0130\u0138\5O(\2\u0131\u0138"+
		"\5Q)\2\u0132\u0138\5S*\2\u0133\u0138\5U+\2\u0134\u0138\5W,\2\u0135\u0138"+
		"\5Y-\2\u0136\u0138\5[.\2\u0137\u0128\3\2\2\2\u0137\u0129\3\2\2\2\u0137"+
		"\u012a\3\2\2\2\u0137\u012b\3\2\2\2\u0137\u012c\3\2\2\2\u0137\u012d\3\2"+
		"\2\2\u0137\u012e\3\2\2\2\u0137\u012f\3\2\2\2\u0137\u0130\3\2\2\2\u0137"+
		"\u0131\3\2\2\2\u0137\u0132\3\2\2\2\u0137\u0133\3\2\2\2\u0137\u0134\3\2"+
		"\2\2\u0137\u0135\3\2\2\2\u0137\u0136\3\2\2\2\u0138>\3\2\2\2\u0139\u013a"+
		"\7,\2\2\u013a@\3\2\2\2\u013b\u013c\7\61\2\2\u013cB\3\2\2\2\u013d\u013e"+
		"\7\'\2\2\u013eD\3\2\2\2\u013f\u0140\7-\2\2\u0140F\3\2\2\2\u0141\u0142"+
		"\7/\2\2\u0142H\3\2\2\2\u0143\u0144\7@\2\2\u0144J\3\2\2\2\u0145\u0146\7"+
		"@\2\2\u0146\u0147\7?\2\2\u0147L\3\2\2\2\u0148\u0149\7>\2\2\u0149N\3\2"+
		"\2\2\u014a\u014b\7>\2\2\u014b\u014c\7?\2\2\u014cP\3\2\2\2\u014d\u014e"+
		"\7?\2\2\u014e\u014f\7?\2\2\u014fR\3\2\2\2\u0150\u0151\7?\2\2\u0151\u0152"+
		"\7?\2\2\u0152\u0153\7?\2\2\u0153T\3\2\2\2\u0154\u0155\7#\2\2\u0155\u0156"+
		"\7?\2\2\u0156V\3\2\2\2\u0157\u0158\7#\2\2\u0158\u0159\7?\2\2\u0159\u015a"+
		"\7?\2\2\u015aX\3\2\2\2\u015b\u015c\7(\2\2\u015c\u015d\7(\2\2\u015dZ\3"+
		"\2\2\2\u015e\u015f\7~\2\2\u015f\u0160\7~\2\2\u0160\\\3\2\2\2\u0161\u0162"+
		"\7?\2\2\u0162^\3\2\2\2\u0163\u0164\7p\2\2\u0164\u0165\7g\2\2\u0165\u0166"+
		"\7y\2\2\u0166\u0167\7r\2\2\u0167\u0168\7c\2\2\u0168\u0169\7k\2\2\u0169"+
		"\u016a\7t\2\2\u016a`\3\2\2\2\u016b\u016d\5e\63\2\u016c\u016b\3\2\2\2\u016c"+
		"\u016d\3\2\2\2\u016d\u016f\3\2\2\2\u016e\u0170\5c\62\2\u016f\u016e\3\2"+
		"\2\2\u0170\u0171\3\2\2\2\u0171\u016f\3\2\2\2\u0171\u0172\3\2\2\2\u0172"+
		"b\3\2\2\2\u0173\u0174\t\3\2\2\u0174d\3\2\2\2\u0175\u0178\5E#\2\u0176\u0178"+
		"\5G$\2\u0177\u0175\3\2\2\2\u0177\u0176\3\2\2\2\u0178f\3\2\2\2\u0179\u017c"+
		"\5i\65\2\u017a\u017c\5k\66\2\u017b\u0179\3\2\2\2\u017b\u017a\3\2\2\2\u017c"+
		"h\3\2\2\2\u017d\u017e\7v\2\2\u017e\u017f\7t\2\2\u017f\u0180\7w\2\2\u0180"+
		"\u0181\7g\2\2\u0181j\3\2\2\2\u0182\u0183\7h\2\2\u0183\u0184\7c\2\2\u0184"+
		"\u0185\7n\2\2\u0185\u0186\7u\2\2\u0186\u0187\7g\2\2\u0187l\3\2\2\2\u0188"+
		"\u0189\7^\2\2\u0189n\3\2\2\2\u018a\u018b\t\4\2\2\u018bp\3\2\2\2\u018c"+
		"\u018e\t\5\2\2\u018d\u018c\3\2\2\2\u018er\3\2\2\2\u018f\u0194\5q9\2\u0190"+
		"\u0191\5m\67\2\u0191\u0192\5o8\2\u0192\u0194\3\2\2\2\u0193\u018f\3\2\2"+
		"\2\u0193\u0190\3\2\2\2\u0194t\3\2\2\2\u0195\u0196\5\u0091I\2\u0196\u0197"+
		"\5s:\2\u0197\u0198\5\u0091I\2\u0198v\3\2\2\2\u0199\u019a\7p\2\2\u019a"+
		"\u019b\7w\2\2\u019b\u019c\7n\2\2\u019c\u019d\7n\2\2\u019dx\3\2\2\2\u019e"+
		"\u01a2\5\u0093J\2\u019f\u01a1\5s:\2\u01a0\u019f\3\2\2\2\u01a1\u01a4\3"+
		"\2\2\2\u01a2\u01a0\3\2\2\2\u01a2\u01a3\3\2\2\2\u01a3\u01a5\3\2\2\2\u01a4"+
		"\u01a2\3\2\2\2\u01a5\u01a6\5\u0093J\2\u01a6z\3\2\2\2\u01a7\u01a8\7k\2"+
		"\2\u01a8\u01a9\7p\2\2\u01a9\u01aa\7v\2\2\u01aa|\3\2\2\2\u01ab\u01ac\7"+
		"d\2\2\u01ac\u01ad\7q\2\2\u01ad\u01ae\7q\2\2\u01ae\u01af\7n\2\2\u01af~"+
		"\3\2\2\2\u01b0\u01b1\7e\2\2\u01b1\u01b2\7j\2\2\u01b2\u01b3\7c\2\2\u01b3"+
		"\u01b4\7t\2\2\u01b4\u0080\3\2\2\2\u01b5\u01b6\7u\2\2\u01b6\u01b7\7v\2"+
		"\2\u01b7\u01b8\7t\2\2\u01b8\u01b9\7k\2\2\u01b9\u01ba\7p\2\2\u01ba\u01bb"+
		"\7i\2\2\u01bb\u0082\3\2\2\2\u01bc\u01bd\7r\2\2\u01bd\u01be\7c\2\2\u01be"+
		"\u01bf\7k\2\2\u01bf\u01c0\7t\2\2\u01c0\u0084\3\2\2\2\u01c1\u01c2\7*\2"+
		"\2\u01c2\u0086\3\2\2\2\u01c3\u01c4\7+\2\2\u01c4\u0088\3\2\2\2\u01c5\u01c6"+
		"\7]\2\2\u01c6\u008a\3\2\2\2\u01c7\u01c8\7_\2\2\u01c8\u008c\3\2\2\2\u01c9"+
		"\u01ca\7.\2\2\u01ca\u008e\3\2\2\2\u01cb\u01cc\7=\2\2\u01cc\u0090\3\2\2"+
		"\2\u01cd\u01ce\7)\2\2\u01ce\u0092\3\2\2\2\u01cf\u01d0\7$\2\2\u01d0\u0094"+
		"\3\2\2\2\u01d1\u01d2\t\6\2\2\u01d2\u0096\3\2\2\2\u01d3\u01d7\7%\2\2\u01d4"+
		"\u01d6\n\2\2\2\u01d5\u01d4\3\2\2\2\u01d6\u01d9\3\2\2\2\u01d7\u01d5\3\2"+
		"\2\2\u01d7\u01d8\3\2\2\2\u01d8\u01da\3\2\2\2\u01d9\u01d7\3\2\2\2\u01da"+
		"\u01db\bL\2\2\u01db\u0098\3\2\2\2\u01dc\u01de\t\7\2\2\u01dd\u01dc\3\2"+
		"\2\2\u01de\u01e2\3\2\2\2\u01df\u01e1\t\b\2\2\u01e0\u01df\3\2\2\2\u01e1"+
		"\u01e4\3\2\2\2\u01e2\u01e0\3\2\2\2\u01e2\u01e3\3\2\2\2\u01e3\u009a\3\2"+
		"\2\2\u01e4\u01e2\3\2\2\2\23\2\u009e\u00a5\u00bb\u0116\u0137\u016c\u0171"+
		"\u0177\u017b\u018d\u0193\u01a2\u01d7\u01dd\u01e0\u01e2\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}