// Generated from c:\Users\vulga\Documents\wacc_06\antlr_config/WJSCLexer.g4 by ANTLR 4.7.1
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
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"EOL", "WHITESPACE", "BEGIN", "END", "IS", "STDLIB_FUNCTIONS", "WSKIP", 
		"READ", "FREE", "RETURN", "EXIT", "PRINT", "PRINTLN", "IF", "THEN", "ELSE", 
		"FI", "WHILE", "DO", "DONE", "CALL", "FIRST", "SECOND", "BINARY_OPERATOR", 
		"MULTIPLY", "DIVIDE", "MODULO", "PLUS", "MINUS", "GREATER_THAN", "GREATER_EQUAL", 
		"LESS_THAN", "LESS_EQUAL", "EQUALS", "STRICT_EQUALS", "NEQUALS", "NSTRICT_EQUALS", 
		"LOGICAL_AND", "LOGICAL_OR", "ASSIGNMENT", "NEW_PAIR", "UNARY_OPERATOR", 
		"LOGICAL_NEGATION", "ARITHMETIC_NEGATION", "LENGTH", "ORDER_OF", "CHARACTER_OF", 
		"DIGIT", "INTEGER_SIGN", "BOOLEAN_LITERAL", "TRUTH", "FALSITY", "BACKSLASH", 
		"ESCAPED_CHAR", "NON_ESCAPED", "CHAR", "CHARACTER_LITERAL", "PAIR_LITERAL", 
		"STRING_LITERAL", "INTEGER", "BOOLEAN", "CHARACTER", "STRING", "PAIR", 
		"LPAREN", "RPAREN", "LBRACK", "RBRACK", "COMMA", "SEMICOLON", "APOS", 
		"DBLQ", "NL", "COMMENT", "IDENTIFIER"
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2H\u01db\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I"+
		"\tI\4J\tJ\4K\tK\4L\tL\3\2\3\2\3\2\5\2\u009d\n\2\3\2\3\2\3\3\6\3\u00a2"+
		"\n\3\r\3\16\3\u00a3\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3"+
		"\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\5\7\u00ba\n\7\3\b\3\b\3\b\3\b\3\b\3\t\3"+
		"\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3\13\3\13"+
		"\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\16"+
		"\3\16\3\16\3\16\3\17\3\17\3\17\3\20\3\20\3\20\3\20\3\20\3\21\3\21\3\21"+
		"\3\21\3\21\3\22\3\22\3\22\3\23\3\23\3\23\3\23\3\23\3\23\3\24\3\24\3\24"+
		"\3\25\3\25\3\25\3\25\3\25\3\26\3\26\3\26\3\26\3\26\3\27\3\27\3\27\3\27"+
		"\3\30\3\30\3\30\3\30\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31"+
		"\3\31\3\31\3\31\3\31\3\31\5\31\u011f\n\31\3\32\3\32\3\33\3\33\3\34\3\34"+
		"\3\35\3\35\3\36\3\36\3\37\3\37\3 \3 \3 \3!\3!\3\"\3\"\3\"\3#\3#\3#\3$"+
		"\3$\3$\3$\3%\3%\3%\3&\3&\3&\3&\3\'\3\'\3\'\3(\3(\3(\3)\3)\3*\3*\3*\3*"+
		"\3*\3*\3*\3*\3+\3+\3+\3+\3+\5+\u0158\n+\3,\3,\3-\3-\3.\3.\3.\3.\3/\3/"+
		"\3/\3/\3\60\3\60\3\60\3\60\3\61\3\61\3\62\3\62\5\62\u016e\n\62\3\63\3"+
		"\63\5\63\u0172\n\63\3\64\3\64\3\64\3\64\3\64\3\65\3\65\3\65\3\65\3\65"+
		"\3\65\3\66\3\66\3\67\3\67\38\58\u0184\n8\39\39\39\39\59\u018a\n9\3:\3"+
		":\3:\3:\3;\3;\3;\3;\3;\3<\3<\7<\u0197\n<\f<\16<\u019a\13<\3<\3<\3=\3="+
		"\3=\3=\3>\3>\3>\3>\3>\3?\3?\3?\3?\3?\3@\3@\3@\3@\3@\3@\3@\3A\3A\3A\3A"+
		"\3A\3B\3B\3C\3C\3D\3D\3E\3E\3F\3F\3G\3G\3H\3H\3I\3I\3J\3J\3K\3K\7K\u01cc"+
		"\nK\fK\16K\u01cf\13K\3K\3K\3L\5L\u01d4\nL\3L\7L\u01d7\nL\fL\16L\u01da"+
		"\13L\2\2M\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33"+
		"\17\35\20\37\21!\22#\23%\24\'\25)\26+\27-\30/\31\61\32\63\33\65\34\67"+
		"\359\36;\37= ?!A\"C#E$G%I&K\'M(O)Q*S+U,W-Y.[/]\60_\61a\62c\63e\64g\65"+
		"i\66k\2m\2o\2q\2s\67u8w9y:{;}<\177=\u0081>\u0083?\u0085@\u0087A\u0089"+
		"B\u008bC\u008dD\u008fE\u0091F\u0093\2\u0095G\u0097H\3\2\t\4\2\f\f\17\17"+
		"\3\2\62;\n\2))\62\62^^ddhhppttvv\6\2\2#%(*]_\u0081\5\2\13\f\16\17\"\""+
		"\5\2C\\aac|\6\2\62;C\\aac|\2\u01f3\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2"+
		"\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3"+
		"\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2"+
		"\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2"+
		"\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2"+
		"\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2\2\2A\3\2\2"+
		"\2\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2\2\2M\3\2\2\2\2"+
		"O\3\2\2\2\2Q\3\2\2\2\2S\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2Y\3\2\2\2\2[\3"+
		"\2\2\2\2]\3\2\2\2\2_\3\2\2\2\2a\3\2\2\2\2c\3\2\2\2\2e\3\2\2\2\2g\3\2\2"+
		"\2\2i\3\2\2\2\2s\3\2\2\2\2u\3\2\2\2\2w\3\2\2\2\2y\3\2\2\2\2{\3\2\2\2\2"+
		"}\3\2\2\2\2\177\3\2\2\2\2\u0081\3\2\2\2\2\u0083\3\2\2\2\2\u0085\3\2\2"+
		"\2\2\u0087\3\2\2\2\2\u0089\3\2\2\2\2\u008b\3\2\2\2\2\u008d\3\2\2\2\2\u008f"+
		"\3\2\2\2\2\u0091\3\2\2\2\2\u0095\3\2\2\2\2\u0097\3\2\2\2\3\u009c\3\2\2"+
		"\2\5\u00a1\3\2\2\2\7\u00a7\3\2\2\2\t\u00ad\3\2\2\2\13\u00b1\3\2\2\2\r"+
		"\u00b9\3\2\2\2\17\u00bb\3\2\2\2\21\u00c0\3\2\2\2\23\u00c5\3\2\2\2\25\u00ca"+
		"\3\2\2\2\27\u00d1\3\2\2\2\31\u00d6\3\2\2\2\33\u00dc\3\2\2\2\35\u00e4\3"+
		"\2\2\2\37\u00e7\3\2\2\2!\u00ec\3\2\2\2#\u00f1\3\2\2\2%\u00f4\3\2\2\2\'"+
		"\u00fa\3\2\2\2)\u00fd\3\2\2\2+\u0102\3\2\2\2-\u0107\3\2\2\2/\u010b\3\2"+
		"\2\2\61\u011e\3\2\2\2\63\u0120\3\2\2\2\65\u0122\3\2\2\2\67\u0124\3\2\2"+
		"\29\u0126\3\2\2\2;\u0128\3\2\2\2=\u012a\3\2\2\2?\u012c\3\2\2\2A\u012f"+
		"\3\2\2\2C\u0131\3\2\2\2E\u0134\3\2\2\2G\u0137\3\2\2\2I\u013b\3\2\2\2K"+
		"\u013e\3\2\2\2M\u0142\3\2\2\2O\u0145\3\2\2\2Q\u0148\3\2\2\2S\u014a\3\2"+
		"\2\2U\u0157\3\2\2\2W\u0159\3\2\2\2Y\u015b\3\2\2\2[\u015d\3\2\2\2]\u0161"+
		"\3\2\2\2_\u0165\3\2\2\2a\u0169\3\2\2\2c\u016d\3\2\2\2e\u0171\3\2\2\2g"+
		"\u0173\3\2\2\2i\u0178\3\2\2\2k\u017e\3\2\2\2m\u0180\3\2\2\2o\u0183\3\2"+
		"\2\2q\u0189\3\2\2\2s\u018b\3\2\2\2u\u018f\3\2\2\2w\u0194\3\2\2\2y\u019d"+
		"\3\2\2\2{\u01a1\3\2\2\2}\u01a6\3\2\2\2\177\u01ab\3\2\2\2\u0081\u01b2\3"+
		"\2\2\2\u0083\u01b7\3\2\2\2\u0085\u01b9\3\2\2\2\u0087\u01bb\3\2\2\2\u0089"+
		"\u01bd\3\2\2\2\u008b\u01bf\3\2\2\2\u008d\u01c1\3\2\2\2\u008f\u01c3\3\2"+
		"\2\2\u0091\u01c5\3\2\2\2\u0093\u01c7\3\2\2\2\u0095\u01c9\3\2\2\2\u0097"+
		"\u01d3\3\2\2\2\u0099\u009d\t\2\2\2\u009a\u009b\7\17\2\2\u009b\u009d\7"+
		"\f\2\2\u009c\u0099\3\2\2\2\u009c\u009a\3\2\2\2\u009d\u009e\3\2\2\2\u009e"+
		"\u009f\b\2\2\2\u009f\4\3\2\2\2\u00a0\u00a2\5\u0093J\2\u00a1\u00a0\3\2"+
		"\2\2\u00a2\u00a3\3\2\2\2\u00a3\u00a1\3\2\2\2\u00a3\u00a4\3\2\2\2\u00a4"+
		"\u00a5\3\2\2\2\u00a5\u00a6\b\3\2\2\u00a6\6\3\2\2\2\u00a7\u00a8\7d\2\2"+
		"\u00a8\u00a9\7g\2\2\u00a9\u00aa\7i\2\2\u00aa\u00ab\7k\2\2\u00ab\u00ac"+
		"\7p\2\2\u00ac\b\3\2\2\2\u00ad\u00ae\7g\2\2\u00ae\u00af\7p\2\2\u00af\u00b0"+
		"\7f\2\2\u00b0\n\3\2\2\2\u00b1\u00b2\7k\2\2\u00b2\u00b3\7u\2\2\u00b3\f"+
		"\3\2\2\2\u00b4\u00ba\5\23\n\2\u00b5\u00ba\5\25\13\2\u00b6\u00ba\5\27\f"+
		"\2\u00b7\u00ba\5\31\r\2\u00b8\u00ba\5\33\16\2\u00b9\u00b4\3\2\2\2\u00b9"+
		"\u00b5\3\2\2\2\u00b9\u00b6\3\2\2\2\u00b9\u00b7\3\2\2\2\u00b9\u00b8\3\2"+
		"\2\2\u00ba\16\3\2\2\2\u00bb\u00bc\7u\2\2\u00bc\u00bd\7m\2\2\u00bd\u00be"+
		"\7k\2\2\u00be\u00bf\7r\2\2\u00bf\20\3\2\2\2\u00c0\u00c1\7t\2\2\u00c1\u00c2"+
		"\7g\2\2\u00c2\u00c3\7c\2\2\u00c3\u00c4\7f\2\2\u00c4\22\3\2\2\2\u00c5\u00c6"+
		"\7h\2\2\u00c6\u00c7\7t\2\2\u00c7\u00c8\7g\2\2\u00c8\u00c9\7g\2\2\u00c9"+
		"\24\3\2\2\2\u00ca\u00cb\7t\2\2\u00cb\u00cc\7g\2\2\u00cc\u00cd\7v\2\2\u00cd"+
		"\u00ce\7w\2\2\u00ce\u00cf\7t\2\2\u00cf\u00d0\7p\2\2\u00d0\26\3\2\2\2\u00d1"+
		"\u00d2\7g\2\2\u00d2\u00d3\7z\2\2\u00d3\u00d4\7k\2\2\u00d4\u00d5\7v\2\2"+
		"\u00d5\30\3\2\2\2\u00d6\u00d7\7r\2\2\u00d7\u00d8\7t\2\2\u00d8\u00d9\7"+
		"k\2\2\u00d9\u00da\7p\2\2\u00da\u00db\7v\2\2\u00db\32\3\2\2\2\u00dc\u00dd"+
		"\7r\2\2\u00dd\u00de\7t\2\2\u00de\u00df\7k\2\2\u00df\u00e0\7p\2\2\u00e0"+
		"\u00e1\7v\2\2\u00e1\u00e2\7n\2\2\u00e2\u00e3\7p\2\2\u00e3\34\3\2\2\2\u00e4"+
		"\u00e5\7k\2\2\u00e5\u00e6\7h\2\2\u00e6\36\3\2\2\2\u00e7\u00e8\7v\2\2\u00e8"+
		"\u00e9\7j\2\2\u00e9\u00ea\7g\2\2\u00ea\u00eb\7p\2\2\u00eb \3\2\2\2\u00ec"+
		"\u00ed\7g\2\2\u00ed\u00ee\7n\2\2\u00ee\u00ef\7u\2\2\u00ef\u00f0\7g\2\2"+
		"\u00f0\"\3\2\2\2\u00f1\u00f2\7h\2\2\u00f2\u00f3\7k\2\2\u00f3$\3\2\2\2"+
		"\u00f4\u00f5\7y\2\2\u00f5\u00f6\7j\2\2\u00f6\u00f7\7k\2\2\u00f7\u00f8"+
		"\7n\2\2\u00f8\u00f9\7g\2\2\u00f9&\3\2\2\2\u00fa\u00fb\7f\2\2\u00fb\u00fc"+
		"\7q\2\2\u00fc(\3\2\2\2\u00fd\u00fe\7f\2\2\u00fe\u00ff\7q\2\2\u00ff\u0100"+
		"\7p\2\2\u0100\u0101\7g\2\2\u0101*\3\2\2\2\u0102\u0103\7e\2\2\u0103\u0104"+
		"\7c\2\2\u0104\u0105\7n\2\2\u0105\u0106\7n\2\2\u0106,\3\2\2\2\u0107\u0108"+
		"\7h\2\2\u0108\u0109\7u\2\2\u0109\u010a\7v\2\2\u010a.\3\2\2\2\u010b\u010c"+
		"\7u\2\2\u010c\u010d\7p\2\2\u010d\u010e\7f\2\2\u010e\60\3\2\2\2\u010f\u011f"+
		"\5\63\32\2\u0110\u011f\5\65\33\2\u0111\u011f\5\67\34\2\u0112\u011f\59"+
		"\35\2\u0113\u011f\5;\36\2\u0114\u011f\5=\37\2\u0115\u011f\5? \2\u0116"+
		"\u011f\5A!\2\u0117\u011f\5C\"\2\u0118\u011f\5E#\2\u0119\u011f\5G$\2\u011a"+
		"\u011f\5I%\2\u011b\u011f\5K&\2\u011c\u011f\5M\'\2\u011d\u011f\5O(\2\u011e"+
		"\u010f\3\2\2\2\u011e\u0110\3\2\2\2\u011e\u0111\3\2\2\2\u011e\u0112\3\2"+
		"\2\2\u011e\u0113\3\2\2\2\u011e\u0114\3\2\2\2\u011e\u0115\3\2\2\2\u011e"+
		"\u0116\3\2\2\2\u011e\u0117\3\2\2\2\u011e\u0118\3\2\2\2\u011e\u0119\3\2"+
		"\2\2\u011e\u011a\3\2\2\2\u011e\u011b\3\2\2\2\u011e\u011c\3\2\2\2\u011e"+
		"\u011d\3\2\2\2\u011f\62\3\2\2\2\u0120\u0121\7,\2\2\u0121\64\3\2\2\2\u0122"+
		"\u0123\7\61\2\2\u0123\66\3\2\2\2\u0124\u0125\7\'\2\2\u01258\3\2\2\2\u0126"+
		"\u0127\7-\2\2\u0127:\3\2\2\2\u0128\u0129\7/\2\2\u0129<\3\2\2\2\u012a\u012b"+
		"\7@\2\2\u012b>\3\2\2\2\u012c\u012d\7@\2\2\u012d\u012e\7?\2\2\u012e@\3"+
		"\2\2\2\u012f\u0130\7>\2\2\u0130B\3\2\2\2\u0131\u0132\7>\2\2\u0132\u0133"+
		"\7?\2\2\u0133D\3\2\2\2\u0134\u0135\7?\2\2\u0135\u0136\7?\2\2\u0136F\3"+
		"\2\2\2\u0137\u0138\7?\2\2\u0138\u0139\7?\2\2\u0139\u013a\7?\2\2\u013a"+
		"H\3\2\2\2\u013b\u013c\7#\2\2\u013c\u013d\7?\2\2\u013dJ\3\2\2\2\u013e\u013f"+
		"\7#\2\2\u013f\u0140\7?\2\2\u0140\u0141\7?\2\2\u0141L\3\2\2\2\u0142\u0143"+
		"\7(\2\2\u0143\u0144\7(\2\2\u0144N\3\2\2\2\u0145\u0146\7~\2\2\u0146\u0147"+
		"\7~\2\2\u0147P\3\2\2\2\u0148\u0149\7?\2\2\u0149R\3\2\2\2\u014a\u014b\7"+
		"p\2\2\u014b\u014c\7g\2\2\u014c\u014d\7y\2\2\u014d\u014e\7r\2\2\u014e\u014f"+
		"\7c\2\2\u014f\u0150\7k\2\2\u0150\u0151\7t\2\2\u0151T\3\2\2\2\u0152\u0158"+
		"\5W,\2\u0153\u0158\5Y-\2\u0154\u0158\5[.\2\u0155\u0158\5]/\2\u0156\u0158"+
		"\5_\60\2\u0157\u0152\3\2\2\2\u0157\u0153\3\2\2\2\u0157\u0154\3\2\2\2\u0157"+
		"\u0155\3\2\2\2\u0157\u0156\3\2\2\2\u0158V\3\2\2\2\u0159\u015a\7#\2\2\u015a"+
		"X\3\2\2\2\u015b\u015c\5;\36\2\u015cZ\3\2\2\2\u015d\u015e\7n\2\2\u015e"+
		"\u015f\7g\2\2\u015f\u0160\7p\2\2\u0160\\\3\2\2\2\u0161\u0162\7q\2\2\u0162"+
		"\u0163\7t\2\2\u0163\u0164\7f\2\2\u0164^\3\2\2\2\u0165\u0166\7e\2\2\u0166"+
		"\u0167\7j\2\2\u0167\u0168\7t\2\2\u0168`\3\2\2\2\u0169\u016a\t\3\2\2\u016a"+
		"b\3\2\2\2\u016b\u016e\59\35\2\u016c\u016e\5;\36\2\u016d\u016b\3\2\2\2"+
		"\u016d\u016c\3\2\2\2\u016ed\3\2\2\2\u016f\u0172\5g\64\2\u0170\u0172\5"+
		"i\65\2\u0171\u016f\3\2\2\2\u0171\u0170\3\2\2\2\u0172f\3\2\2\2\u0173\u0174"+
		"\7v\2\2\u0174\u0175\7t\2\2\u0175\u0176\7w\2\2\u0176\u0177\7g\2\2\u0177"+
		"h\3\2\2\2\u0178\u0179\7h\2\2\u0179\u017a\7c\2\2\u017a\u017b\7n\2\2\u017b"+
		"\u017c\7u\2\2\u017c\u017d\7g\2\2\u017dj\3\2\2\2\u017e\u017f\7^\2\2\u017f"+
		"l\3\2\2\2\u0180\u0181\t\4\2\2\u0181n\3\2\2\2\u0182\u0184\t\5\2\2\u0183"+
		"\u0182\3\2\2\2\u0184p\3\2\2\2\u0185\u018a\5o8\2\u0186\u0187\5k\66\2\u0187"+
		"\u0188\5m\67\2\u0188\u018a\3\2\2\2\u0189\u0185\3\2\2\2\u0189\u0186\3\2"+
		"\2\2\u018ar\3\2\2\2\u018b\u018c\5\u008fH\2\u018c\u018d\5q9\2\u018d\u018e"+
		"\5\u008fH\2\u018et\3\2\2\2\u018f\u0190\7p\2\2\u0190\u0191\7w\2\2\u0191"+
		"\u0192\7n\2\2\u0192\u0193\7n\2\2\u0193v\3\2\2\2\u0194\u0198\5\u0091I\2"+
		"\u0195\u0197\5q9\2\u0196\u0195\3\2\2\2\u0197\u019a\3\2\2\2\u0198\u0196"+
		"\3\2\2\2\u0198\u0199\3\2\2\2\u0199\u019b\3\2\2\2\u019a\u0198\3\2\2\2\u019b"+
		"\u019c\5\u0091I\2\u019cx\3\2\2\2\u019d\u019e\7k\2\2\u019e\u019f\7p\2\2"+
		"\u019f\u01a0\7v\2\2\u01a0z\3\2\2\2\u01a1\u01a2\7d\2\2\u01a2\u01a3\7q\2"+
		"\2\u01a3\u01a4\7q\2\2\u01a4\u01a5\7n\2\2\u01a5|\3\2\2\2\u01a6\u01a7\7"+
		"e\2\2\u01a7\u01a8\7j\2\2\u01a8\u01a9\7c\2\2\u01a9\u01aa\7t\2\2\u01aa~"+
		"\3\2\2\2\u01ab\u01ac\7u\2\2\u01ac\u01ad\7v\2\2\u01ad\u01ae\7t\2\2\u01ae"+
		"\u01af\7k\2\2\u01af\u01b0\7p\2\2\u01b0\u01b1\7i\2\2\u01b1\u0080\3\2\2"+
		"\2\u01b2\u01b3\7r\2\2\u01b3\u01b4\7c\2\2\u01b4\u01b5\7k\2\2\u01b5\u01b6"+
		"\7t\2\2\u01b6\u0082\3\2\2\2\u01b7\u01b8\7*\2\2\u01b8\u0084\3\2\2\2\u01b9"+
		"\u01ba\7+\2\2\u01ba\u0086\3\2\2\2\u01bb\u01bc\7]\2\2\u01bc\u0088\3\2\2"+
		"\2\u01bd\u01be\7_\2\2\u01be\u008a\3\2\2\2\u01bf\u01c0\7.\2\2\u01c0\u008c"+
		"\3\2\2\2\u01c1\u01c2\7=\2\2\u01c2\u008e\3\2\2\2\u01c3\u01c4\7)\2\2\u01c4"+
		"\u0090\3\2\2\2\u01c5\u01c6\7$\2\2\u01c6\u0092\3\2\2\2\u01c7\u01c8\t\6"+
		"\2\2\u01c8\u0094\3\2\2\2\u01c9\u01cd\7%\2\2\u01ca\u01cc\n\2\2\2\u01cb"+
		"\u01ca\3\2\2\2\u01cc\u01cf\3\2\2\2\u01cd\u01cb\3\2\2\2\u01cd\u01ce\3\2"+
		"\2\2\u01ce\u01d0\3\2\2\2\u01cf\u01cd\3\2\2\2\u01d0\u01d1\bK\2\2\u01d1"+
		"\u0096\3\2\2\2\u01d2\u01d4\t\7\2\2\u01d3\u01d2\3\2\2\2\u01d4\u01d8\3\2"+
		"\2\2\u01d5\u01d7\t\b\2\2\u01d6\u01d5\3\2\2\2\u01d7\u01da\3\2\2\2\u01d8"+
		"\u01d6\3\2\2\2\u01d8\u01d9\3\2\2\2\u01d9\u0098\3\2\2\2\u01da\u01d8\3\2"+
		"\2\2\21\2\u009c\u00a3\u00b9\u011e\u0157\u016d\u0171\u0183\u0189\u0198"+
		"\u01cd\u01d3\u01d6\u01d8\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}