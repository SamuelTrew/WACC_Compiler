// Generated from .\antlr_config\WJSCLexer.g4 by ANTLR 4.7
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
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"EOL", "WHITESPACE", "BEGIN", "END", "IS", "WSKIP", "READ", "FREE", "RETURN", 
		"EXIT", "PRINT", "PRINTLN", "IF", "THEN", "ELSE", "FI", "WHILE", "DO", 
		"DONE", "CALL", "FIRST", "SECOND", "MULTIPLY", "DIVIDE", "MODULO", "PLUS", 
		"MINUS", "GREATER_THAN", "GREATER_EQUAL", "LESS_THAN", "LESS_EQUAL", "EQUALS", 
		"STRICT_EQUALS", "NEQUALS", "NSTRICT_EQUALS", "LOGICAL_AND", "LOGICAL_OR", 
		"ASSIGNMENT", "NEW_PAIR", "LOGICAL_NEGATION", "LENGTH", "ORDER_OF", "CHARACTER_OF", 
		"DIGIT", "BOOLEAN_LITERAL", "TRUTH", "FALSITY", "BACKSLASH", "ESCAPED_CHAR", 
		"NON_ESCAPED", "CHAR", "CHARACTER_LITERAL", "PAIR_LITERAL", "STRING_LITERAL", 
		"INTEGER", "BOOLEAN", "CHARACTER", "STRING", "PAIR", "LPAREN", "RPAREN", 
		"LBRACK", "RBRACK", "COMMA", "SEMICOLON", "APOS", "DBLQ", "NL", "COMMENT", 
		"IDENTIFIER"
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2C\u01ac\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\3\2\3\2\3"+
		"\2\5\2\u0093\n\2\3\2\3\2\3\3\6\3\u0098\n\3\r\3\16\3\u0099\3\3\3\3\3\4"+
		"\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3"+
		"\b\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\13"+
		"\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\r\3"+
		"\r\3\r\3\16\3\16\3\16\3\17\3\17\3\17\3\17\3\17\3\20\3\20\3\20\3\20\3\20"+
		"\3\21\3\21\3\21\3\22\3\22\3\22\3\22\3\22\3\22\3\23\3\23\3\23\3\24\3\24"+
		"\3\24\3\24\3\24\3\25\3\25\3\25\3\25\3\25\3\26\3\26\3\26\3\26\3\27\3\27"+
		"\3\27\3\27\3\30\3\30\3\31\3\31\3\32\3\32\3\33\3\33\3\34\3\34\3\35\3\35"+
		"\3\36\3\36\3\36\3\37\3\37\3 \3 \3 \3!\3!\3!\3\"\3\"\3\"\3\"\3#\3#\3#\3"+
		"$\3$\3$\3$\3%\3%\3%\3&\3&\3&\3\'\3\'\3(\3(\3(\3(\3(\3(\3(\3(\3)\3)\3*"+
		"\3*\3*\3*\3+\3+\3+\3+\3,\3,\3,\3,\3-\3-\3.\3.\5.\u0143\n.\3/\3/\3/\3/"+
		"\3/\3\60\3\60\3\60\3\60\3\60\3\60\3\61\3\61\3\62\3\62\3\63\5\63\u0155"+
		"\n\63\3\64\3\64\3\64\3\64\5\64\u015b\n\64\3\65\3\65\3\65\3\65\3\66\3\66"+
		"\3\66\3\66\3\66\3\67\3\67\7\67\u0168\n\67\f\67\16\67\u016b\13\67\3\67"+
		"\3\67\38\38\38\38\39\39\39\39\39\3:\3:\3:\3:\3:\3;\3;\3;\3;\3;\3;\3;\3"+
		"<\3<\3<\3<\3<\3=\3=\3>\3>\3?\3?\3@\3@\3A\3A\3B\3B\3C\3C\3D\3D\3E\3E\3"+
		"F\3F\7F\u019d\nF\fF\16F\u01a0\13F\3F\3F\3G\5G\u01a5\nG\3G\7G\u01a8\nG"+
		"\fG\16G\u01ab\13G\2\2H\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27"+
		"\r\31\16\33\17\35\20\37\21!\22#\23%\24\'\25)\26+\27-\30/\31\61\32\63\33"+
		"\65\34\67\359\36;\37= ?!A\"C#E$G%I&K\'M(O)Q*S+U,W-Y.[/]\60_\61a\2c\2e"+
		"\2g\2i\62k\63m\64o\65q\66s\67u8w9y:{;}<\177=\u0081>\u0083?\u0085@\u0087"+
		"A\u0089\2\u008bB\u008dC\3\2\t\4\2\f\f\17\17\3\2\62;\n\2))\62\62^^ddhh"+
		"ppttvv\6\2\2#%(*]_\u0081\5\2\13\f\16\17\"\"\5\2C\\aac|\6\2\62;C\\aac|"+
		"\2\u01ad\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2"+
		"\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27"+
		"\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2"+
		"\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2"+
		"\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2"+
		"\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2\2\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2"+
		"\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2\2\2M\3\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S"+
		"\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2Y\3\2\2\2\2[\3\2\2\2\2]\3\2\2\2\2_\3\2"+
		"\2\2\2i\3\2\2\2\2k\3\2\2\2\2m\3\2\2\2\2o\3\2\2\2\2q\3\2\2\2\2s\3\2\2\2"+
		"\2u\3\2\2\2\2w\3\2\2\2\2y\3\2\2\2\2{\3\2\2\2\2}\3\2\2\2\2\177\3\2\2\2"+
		"\2\u0081\3\2\2\2\2\u0083\3\2\2\2\2\u0085\3\2\2\2\2\u0087\3\2\2\2\2\u008b"+
		"\3\2\2\2\2\u008d\3\2\2\2\3\u0092\3\2\2\2\5\u0097\3\2\2\2\7\u009d\3\2\2"+
		"\2\t\u00a3\3\2\2\2\13\u00a7\3\2\2\2\r\u00aa\3\2\2\2\17\u00af\3\2\2\2\21"+
		"\u00b4\3\2\2\2\23\u00b9\3\2\2\2\25\u00c0\3\2\2\2\27\u00c5\3\2\2\2\31\u00cb"+
		"\3\2\2\2\33\u00d3\3\2\2\2\35\u00d6\3\2\2\2\37\u00db\3\2\2\2!\u00e0\3\2"+
		"\2\2#\u00e3\3\2\2\2%\u00e9\3\2\2\2\'\u00ec\3\2\2\2)\u00f1\3\2\2\2+\u00f6"+
		"\3\2\2\2-\u00fa\3\2\2\2/\u00fe\3\2\2\2\61\u0100\3\2\2\2\63\u0102\3\2\2"+
		"\2\65\u0104\3\2\2\2\67\u0106\3\2\2\29\u0108\3\2\2\2;\u010a\3\2\2\2=\u010d"+
		"\3\2\2\2?\u010f\3\2\2\2A\u0112\3\2\2\2C\u0115\3\2\2\2E\u0119\3\2\2\2G"+
		"\u011c\3\2\2\2I\u0120\3\2\2\2K\u0123\3\2\2\2M\u0126\3\2\2\2O\u0128\3\2"+
		"\2\2Q\u0130\3\2\2\2S\u0132\3\2\2\2U\u0136\3\2\2\2W\u013a\3\2\2\2Y\u013e"+
		"\3\2\2\2[\u0142\3\2\2\2]\u0144\3\2\2\2_\u0149\3\2\2\2a\u014f\3\2\2\2c"+
		"\u0151\3\2\2\2e\u0154\3\2\2\2g\u015a\3\2\2\2i\u015c\3\2\2\2k\u0160\3\2"+
		"\2\2m\u0165\3\2\2\2o\u016e\3\2\2\2q\u0172\3\2\2\2s\u0177\3\2\2\2u\u017c"+
		"\3\2\2\2w\u0183\3\2\2\2y\u0188\3\2\2\2{\u018a\3\2\2\2}\u018c\3\2\2\2\177"+
		"\u018e\3\2\2\2\u0081\u0190\3\2\2\2\u0083\u0192\3\2\2\2\u0085\u0194\3\2"+
		"\2\2\u0087\u0196\3\2\2\2\u0089\u0198\3\2\2\2\u008b\u019a\3\2\2\2\u008d"+
		"\u01a4\3\2\2\2\u008f\u0093\t\2\2\2\u0090\u0091\7\17\2\2\u0091\u0093\7"+
		"\f\2\2\u0092\u008f\3\2\2\2\u0092\u0090\3\2\2\2\u0093\u0094\3\2\2\2\u0094"+
		"\u0095\b\2\2\2\u0095\4\3\2\2\2\u0096\u0098\5\u0089E\2\u0097\u0096\3\2"+
		"\2\2\u0098\u0099\3\2\2\2\u0099\u0097\3\2\2\2\u0099\u009a\3\2\2\2\u009a"+
		"\u009b\3\2\2\2\u009b\u009c\b\3\2\2\u009c\6\3\2\2\2\u009d\u009e\7d\2\2"+
		"\u009e\u009f\7g\2\2\u009f\u00a0\7i\2\2\u00a0\u00a1\7k\2\2\u00a1\u00a2"+
		"\7p\2\2\u00a2\b\3\2\2\2\u00a3\u00a4\7g\2\2\u00a4\u00a5\7p\2\2\u00a5\u00a6"+
		"\7f\2\2\u00a6\n\3\2\2\2\u00a7\u00a8\7k\2\2\u00a8\u00a9\7u\2\2\u00a9\f"+
		"\3\2\2\2\u00aa\u00ab\7u\2\2\u00ab\u00ac\7m\2\2\u00ac\u00ad\7k\2\2\u00ad"+
		"\u00ae\7r\2\2\u00ae\16\3\2\2\2\u00af\u00b0\7t\2\2\u00b0\u00b1\7g\2\2\u00b1"+
		"\u00b2\7c\2\2\u00b2\u00b3\7f\2\2\u00b3\20\3\2\2\2\u00b4\u00b5\7h\2\2\u00b5"+
		"\u00b6\7t\2\2\u00b6\u00b7\7g\2\2\u00b7\u00b8\7g\2\2\u00b8\22\3\2\2\2\u00b9"+
		"\u00ba\7t\2\2\u00ba\u00bb\7g\2\2\u00bb\u00bc\7v\2\2\u00bc\u00bd\7w\2\2"+
		"\u00bd\u00be\7t\2\2\u00be\u00bf\7p\2\2\u00bf\24\3\2\2\2\u00c0\u00c1\7"+
		"g\2\2\u00c1\u00c2\7z\2\2\u00c2\u00c3\7k\2\2\u00c3\u00c4\7v\2\2\u00c4\26"+
		"\3\2\2\2\u00c5\u00c6\7r\2\2\u00c6\u00c7\7t\2\2\u00c7\u00c8\7k\2\2\u00c8"+
		"\u00c9\7p\2\2\u00c9\u00ca\7v\2\2\u00ca\30\3\2\2\2\u00cb\u00cc\7r\2\2\u00cc"+
		"\u00cd\7t\2\2\u00cd\u00ce\7k\2\2\u00ce\u00cf\7p\2\2\u00cf\u00d0\7v\2\2"+
		"\u00d0\u00d1\7n\2\2\u00d1\u00d2\7p\2\2\u00d2\32\3\2\2\2\u00d3\u00d4\7"+
		"k\2\2\u00d4\u00d5\7h\2\2\u00d5\34\3\2\2\2\u00d6\u00d7\7v\2\2\u00d7\u00d8"+
		"\7j\2\2\u00d8\u00d9\7g\2\2\u00d9\u00da\7p\2\2\u00da\36\3\2\2\2\u00db\u00dc"+
		"\7g\2\2\u00dc\u00dd\7n\2\2\u00dd\u00de\7u\2\2\u00de\u00df\7g\2\2\u00df"+
		" \3\2\2\2\u00e0\u00e1\7h\2\2\u00e1\u00e2\7k\2\2\u00e2\"\3\2\2\2\u00e3"+
		"\u00e4\7y\2\2\u00e4\u00e5\7j\2\2\u00e5\u00e6\7k\2\2\u00e6\u00e7\7n\2\2"+
		"\u00e7\u00e8\7g\2\2\u00e8$\3\2\2\2\u00e9\u00ea\7f\2\2\u00ea\u00eb\7q\2"+
		"\2\u00eb&\3\2\2\2\u00ec\u00ed\7f\2\2\u00ed\u00ee\7q\2\2\u00ee\u00ef\7"+
		"p\2\2\u00ef\u00f0\7g\2\2\u00f0(\3\2\2\2\u00f1\u00f2\7e\2\2\u00f2\u00f3"+
		"\7c\2\2\u00f3\u00f4\7n\2\2\u00f4\u00f5\7n\2\2\u00f5*\3\2\2\2\u00f6\u00f7"+
		"\7h\2\2\u00f7\u00f8\7u\2\2\u00f8\u00f9\7v\2\2\u00f9,\3\2\2\2\u00fa\u00fb"+
		"\7u\2\2\u00fb\u00fc\7p\2\2\u00fc\u00fd\7f\2\2\u00fd.\3\2\2\2\u00fe\u00ff"+
		"\7,\2\2\u00ff\60\3\2\2\2\u0100\u0101\7\61\2\2\u0101\62\3\2\2\2\u0102\u0103"+
		"\7\'\2\2\u0103\64\3\2\2\2\u0104\u0105\7-\2\2\u0105\66\3\2\2\2\u0106\u0107"+
		"\7/\2\2\u01078\3\2\2\2\u0108\u0109\7@\2\2\u0109:\3\2\2\2\u010a\u010b\7"+
		"@\2\2\u010b\u010c\7?\2\2\u010c<\3\2\2\2\u010d\u010e\7>\2\2\u010e>\3\2"+
		"\2\2\u010f\u0110\7>\2\2\u0110\u0111\7?\2\2\u0111@\3\2\2\2\u0112\u0113"+
		"\7?\2\2\u0113\u0114\7?\2\2\u0114B\3\2\2\2\u0115\u0116\7?\2\2\u0116\u0117"+
		"\7?\2\2\u0117\u0118\7?\2\2\u0118D\3\2\2\2\u0119\u011a\7#\2\2\u011a\u011b"+
		"\7?\2\2\u011bF\3\2\2\2\u011c\u011d\7#\2\2\u011d\u011e\7?\2\2\u011e\u011f"+
		"\7?\2\2\u011fH\3\2\2\2\u0120\u0121\7(\2\2\u0121\u0122\7(\2\2\u0122J\3"+
		"\2\2\2\u0123\u0124\7~\2\2\u0124\u0125\7~\2\2\u0125L\3\2\2\2\u0126\u0127"+
		"\7?\2\2\u0127N\3\2\2\2\u0128\u0129\7p\2\2\u0129\u012a\7g\2\2\u012a\u012b"+
		"\7y\2\2\u012b\u012c\7r\2\2\u012c\u012d\7c\2\2\u012d\u012e\7k\2\2\u012e"+
		"\u012f\7t\2\2\u012fP\3\2\2\2\u0130\u0131\7#\2\2\u0131R\3\2\2\2\u0132\u0133"+
		"\7n\2\2\u0133\u0134\7g\2\2\u0134\u0135\7p\2\2\u0135T\3\2\2\2\u0136\u0137"+
		"\7q\2\2\u0137\u0138\7t\2\2\u0138\u0139\7f\2\2\u0139V\3\2\2\2\u013a\u013b"+
		"\7e\2\2\u013b\u013c\7j\2\2\u013c\u013d\7t\2\2\u013dX\3\2\2\2\u013e\u013f"+
		"\t\3\2\2\u013fZ\3\2\2\2\u0140\u0143\5]/\2\u0141\u0143\5_\60\2\u0142\u0140"+
		"\3\2\2\2\u0142\u0141\3\2\2\2\u0143\\\3\2\2\2\u0144\u0145\7v\2\2\u0145"+
		"\u0146\7t\2\2\u0146\u0147\7w\2\2\u0147\u0148\7g\2\2\u0148^\3\2\2\2\u0149"+
		"\u014a\7h\2\2\u014a\u014b\7c\2\2\u014b\u014c\7n\2\2\u014c\u014d\7u\2\2"+
		"\u014d\u014e\7g\2\2\u014e`\3\2\2\2\u014f\u0150\7^\2\2\u0150b\3\2\2\2\u0151"+
		"\u0152\t\4\2\2\u0152d\3\2\2\2\u0153\u0155\t\5\2\2\u0154\u0153\3\2\2\2"+
		"\u0155f\3\2\2\2\u0156\u015b\5e\63\2\u0157\u0158\5a\61\2\u0158\u0159\5"+
		"c\62\2\u0159\u015b\3\2\2\2\u015a\u0156\3\2\2\2\u015a\u0157\3\2\2\2\u015b"+
		"h\3\2\2\2\u015c\u015d\5\u0085C\2\u015d\u015e\5g\64\2\u015e\u015f\5\u0085"+
		"C\2\u015fj\3\2\2\2\u0160\u0161\7p\2\2\u0161\u0162\7w\2\2\u0162\u0163\7"+
		"n\2\2\u0163\u0164\7n\2\2\u0164l\3\2\2\2\u0165\u0169\5\u0087D\2\u0166\u0168"+
		"\5g\64\2\u0167\u0166\3\2\2\2\u0168\u016b\3\2\2\2\u0169\u0167\3\2\2\2\u0169"+
		"\u016a\3\2\2\2\u016a\u016c\3\2\2\2\u016b\u0169\3\2\2\2\u016c\u016d\5\u0087"+
		"D\2\u016dn\3\2\2\2\u016e\u016f\7k\2\2\u016f\u0170\7p\2\2\u0170\u0171\7"+
		"v\2\2\u0171p\3\2\2\2\u0172\u0173\7d\2\2\u0173\u0174\7q\2\2\u0174\u0175"+
		"\7q\2\2\u0175\u0176\7n\2\2\u0176r\3\2\2\2\u0177\u0178\7e\2\2\u0178\u0179"+
		"\7j\2\2\u0179\u017a\7c\2\2\u017a\u017b\7t\2\2\u017bt\3\2\2\2\u017c\u017d"+
		"\7u\2\2\u017d\u017e\7v\2\2\u017e\u017f\7t\2\2\u017f\u0180\7k\2\2\u0180"+
		"\u0181\7p\2\2\u0181\u0182\7i\2\2\u0182v\3\2\2\2\u0183\u0184\7r\2\2\u0184"+
		"\u0185\7c\2\2\u0185\u0186\7k\2\2\u0186\u0187\7t\2\2\u0187x\3\2\2\2\u0188"+
		"\u0189\7*\2\2\u0189z\3\2\2\2\u018a\u018b\7+\2\2\u018b|\3\2\2\2\u018c\u018d"+
		"\7]\2\2\u018d~\3\2\2\2\u018e\u018f\7_\2\2\u018f\u0080\3\2\2\2\u0190\u0191"+
		"\7.\2\2\u0191\u0082\3\2\2\2\u0192\u0193\7=\2\2\u0193\u0084\3\2\2\2\u0194"+
		"\u0195\7)\2\2\u0195\u0086\3\2\2\2\u0196\u0197\7$\2\2\u0197\u0088\3\2\2"+
		"\2\u0198\u0199\t\6\2\2\u0199\u008a\3\2\2\2\u019a\u019e\7%\2\2\u019b\u019d"+
		"\n\2\2\2\u019c\u019b\3\2\2\2\u019d\u01a0\3\2\2\2\u019e\u019c\3\2\2\2\u019e"+
		"\u019f\3\2\2\2\u019f\u01a1\3\2\2\2\u01a0\u019e\3\2\2\2\u01a1\u01a2\bF"+
		"\2\2\u01a2\u008c\3\2\2\2\u01a3\u01a5\t\7\2\2\u01a4\u01a3\3\2\2\2\u01a5"+
		"\u01a9\3\2\2\2\u01a6\u01a8\t\b\2\2\u01a7\u01a6\3\2\2\2\u01a8\u01ab\3\2"+
		"\2\2\u01a9\u01a7\3\2\2\2\u01a9\u01aa\3\2\2\2\u01aa\u008e\3\2\2\2\u01ab"+
		"\u01a9\3\2\2\2\r\2\u0092\u0099\u0142\u0154\u015a\u0169\u019e\u01a4\u01a7"+
		"\u01a9\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}