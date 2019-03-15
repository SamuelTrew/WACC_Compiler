// Generated from WJSCLexer.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class WJSCLexer extends Lexer {
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
	public static readonly CHARACTER_LITERAL = 46;
	public static readonly PAIR_LITERAL = 47;
	public static readonly STRING_LITERAL = 48;
	public static readonly INTEGER = 49;
	public static readonly BOOLEAN = 50;
	public static readonly CHARACTER = 51;
	public static readonly STRING = 52;
	public static readonly PAIR = 53;
	public static readonly ANY = 54;
	public static readonly LPAREN = 55;
	public static readonly RPAREN = 56;
	public static readonly LBRACK = 57;
	public static readonly RBRACK = 58;
	public static readonly COMMA = 59;
	public static readonly SEMICOLON = 60;
	public static readonly APOS = 61;
	public static readonly DBLQ = 62;
	public static readonly COMMENT = 63;
	public static readonly IDENTIFIER = 64;
	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"EOL", "WHITESPACE", "BEGIN", "END", "IS", "WSKIP", "READ", "FREE", "RETURN", 
		"EXIT", "PRINT", "PRINTLN", "IF", "THEN", "ELSE", "FI", "WHILE", "DO", 
		"DONE", "CALL", "FIRST", "SECOND", "MULTIPLY", "DIVIDE", "MODULO", "PLUS", 
		"MINUS", "GREATER_THAN", "GREATER_EQUAL", "LESS_THAN", "LESS_EQUAL", "EQUALS", 
		"STRICT_EQUALS", "NEQUALS", "NSTRICT_EQUALS", "LOGICAL_AND", "LOGICAL_OR", 
		"ASSIGNMENT", "LOGICAL_NEGATION", "NEW_PAIR", "LENGTH", "ORDER_OF", "CHARACTER_OF", 
		"DIGIT", "BOOLEAN_LITERAL", "BACKSLASH", "ESCAPED_CHAR", "NON_ESCAPED", 
		"CHAR", "CHARACTER_LITERAL", "PAIR_LITERAL", "STRING_LITERAL", "INTEGER", 
		"BOOLEAN", "CHARACTER", "STRING", "PAIR", "ANY", "LPAREN", "RPAREN", "LBRACK", 
		"RBRACK", "COMMA", "SEMICOLON", "APOS", "DBLQ", "NL", "COMMENT", "IDENTIFIER",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'begin'", "'end'", "'is'", "'skip'", 
		"'read'", "'free'", "'return'", "'exit'", "'print'", "'println'", "'if'", 
		"'then'", "'else'", "'fi'", "'while'", "'do'", "'done'", "'call'", "'fst'", 
		"'snd'", "'*'", "'/'", "'%'", "'+'", "'-'", "'>'", "'>='", "'<'", "'<='", 
		"'=='", "'==='", "'!='", "'!=='", "'&&'", "'||'", "'='", "'!'", "'newpair'", 
		"'len'", "'ord'", "'chr'", undefined, undefined, undefined, "'null'", 
		undefined, "'int'", "'bool'", "'char'", "'string'", "'pair'", "'any'", 
		"'('", "')'", "'['", "']'", "','", "';'", "'''", "'\"'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "EOL", "WHITESPACE", "BEGIN", "END", "IS", "WSKIP", "READ", 
		"FREE", "RETURN", "EXIT", "PRINT", "PRINTLN", "IF", "THEN", "ELSE", "FI", 
		"WHILE", "DO", "DONE", "CALL", "FIRST", "SECOND", "MULTIPLY", "DIVIDE", 
		"MODULO", "PLUS", "MINUS", "GREATER_THAN", "GREATER_EQUAL", "LESS_THAN", 
		"LESS_EQUAL", "EQUALS", "STRICT_EQUALS", "NEQUALS", "NSTRICT_EQUALS", 
		"LOGICAL_AND", "LOGICAL_OR", "ASSIGNMENT", "LOGICAL_NEGATION", "NEW_PAIR", 
		"LENGTH", "ORDER_OF", "CHARACTER_OF", "DIGIT", "BOOLEAN_LITERAL", "CHARACTER_LITERAL", 
		"PAIR_LITERAL", "STRING_LITERAL", "INTEGER", "BOOLEAN", "CHARACTER", "STRING", 
		"PAIR", "ANY", "LPAREN", "RPAREN", "LBRACK", "RBRACK", "COMMA", "SEMICOLON", 
		"APOS", "DBLQ", "COMMENT", "IDENTIFIER",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(WJSCLexer._LITERAL_NAMES, WJSCLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return WJSCLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(WJSCLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "WJSCLexer.g4"; }

	// @Override
	public get ruleNames(): string[] { return WJSCLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return WJSCLexer._serializedATN; }

	// @Override
	public get modeNames(): string[] { return WJSCLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x02B\u01AA\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x03\x02\x03\x02\x03\x02\x05\x02\x91\n\x02\x03\x02\x03\x02\x03\x03" +
		"\x06\x03\x96\n\x03\r\x03\x0E\x03\x97\x03\x03\x03\x03\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b" +
		"\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19" +
		"\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03 \x03!\x03!\x03!\x03\"\x03" +
		"\"\x03\"\x03\"\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x03%\x03%\x03%\x03&" +
		"\x03&\x03&\x03\'\x03\'\x03(\x03(\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03" +
		")\x03*\x03*\x03*\x03*\x03+\x03+\x03+\x03+\x03,\x03,\x03,\x03,\x03-\x03" +
		"-\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x05.\u0148\n.\x03/\x03" +
		"/\x030\x030\x031\x051\u014F\n1\x032\x032\x032\x032\x052\u0155\n2\x033" +
		"\x033\x033\x033\x034\x034\x034\x034\x034\x035\x035\x075\u0162\n5\f5\x0E" +
		"5\u0165\v5\x035\x035\x036\x036\x036\x036\x037\x037\x037\x037\x037\x03" +
		"8\x038\x038\x038\x038\x039\x039\x039\x039\x039\x039\x039\x03:\x03:\x03" +
		":\x03:\x03:\x03;\x03;\x03;\x03;\x03<\x03<\x03=\x03=\x03>\x03>\x03?\x03" +
		"?\x03@\x03@\x03A\x03A\x03B\x03B\x03C\x03C\x03D\x03D\x03E\x03E\x07E\u019B" +
		"\nE\fE\x0EE\u019E\vE\x03E\x03E\x03F\x05F\u01A3\nF\x03F\x07F\u01A6\nF\f" +
		"F\x0EF\u01A9\vF\x02\x02\x02G\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02" +
		"\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02" +
		"\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%" +
		"\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02\x1B" +
		"5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 ?\x02!A\x02\"C\x02#E\x02$G\x02" +
		"%I\x02&K\x02\'M\x02(O\x02)Q\x02*S\x02+U\x02,W\x02-Y\x02.[\x02/]\x02\x02" +
		"_\x02\x02a\x02\x02c\x02\x02e\x020g\x021i\x022k\x023m\x024o\x025q\x026" +
		"s\x027u\x028w\x029y\x02:{\x02;}\x02<\x7F\x02=\x81\x02>\x83\x02?\x85\x02" +
		"@\x87\x02\x02\x89\x02A\x8B\x02B\x03\x02\t\x04\x02\f\f\x0F\x0F\x03\x02" +
		"2;\v\x02$$))22^^ddhhppttvv\x06\x02\x02#%(*]_\x81\x05\x02\v\f\x0E\x0F\"" +
		"\"\x05\x02C\\aac|\x06\x022;C\\aac|\u01AB\x02\x03\x03\x02\x02\x02\x02\x05" +
		"\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03" +
		"\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03" +
		"\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03" +
		"\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03" +
		"\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02" +
		"\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02" +
		"\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03" +
		"\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02" +
		"\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02" +
		"?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02" +
		"\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02K\x03\x02\x02\x02" +
		"\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02\x02\x02\x02S\x03" +
		"\x02\x02\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02\x02\x02Y\x03\x02\x02" +
		"\x02\x02[\x03\x02\x02\x02\x02e\x03\x02\x02\x02\x02g\x03\x02\x02\x02\x02" +
		"i\x03\x02\x02\x02\x02k\x03\x02\x02\x02\x02m\x03\x02\x02\x02\x02o\x03\x02" +
		"\x02\x02\x02q\x03\x02\x02\x02\x02s\x03\x02\x02\x02\x02u\x03\x02\x02\x02" +
		"\x02w\x03\x02\x02\x02\x02y\x03\x02\x02\x02\x02{\x03\x02\x02\x02\x02}\x03" +
		"\x02\x02\x02\x02\x7F\x03\x02\x02\x02\x02\x81\x03\x02\x02\x02\x02\x83\x03" +
		"\x02\x02\x02\x02\x85\x03\x02\x02\x02\x02\x89\x03\x02\x02\x02\x02\x8B\x03" +
		"\x02\x02\x02\x03\x90\x03\x02\x02\x02\x05\x95\x03\x02\x02\x02\x07\x9B\x03" +
		"\x02\x02\x02\t\xA1\x03\x02\x02\x02\v\xA5\x03\x02\x02\x02\r\xA8\x03\x02" +
		"\x02\x02\x0F\xAD\x03\x02\x02\x02\x11\xB2\x03\x02\x02\x02\x13\xB7\x03\x02" +
		"\x02\x02\x15\xBE\x03\x02\x02\x02\x17\xC3\x03\x02\x02\x02\x19\xC9\x03\x02" +
		"\x02\x02\x1B\xD1\x03\x02\x02\x02\x1D\xD4\x03\x02\x02\x02\x1F\xD9\x03\x02" +
		"\x02\x02!\xDE\x03\x02\x02\x02#\xE1\x03\x02\x02\x02%\xE7\x03\x02\x02\x02" +
		"\'\xEA\x03\x02\x02\x02)\xEF\x03\x02\x02\x02+\xF4\x03\x02\x02\x02-\xF8" +
		"\x03\x02\x02\x02/\xFC\x03\x02\x02\x021\xFE\x03\x02\x02\x023\u0100\x03" +
		"\x02\x02\x025\u0102\x03\x02\x02\x027\u0104\x03\x02\x02\x029\u0106\x03" +
		"\x02\x02\x02;\u0108\x03\x02\x02\x02=\u010B\x03\x02\x02\x02?\u010D\x03" +
		"\x02\x02\x02A\u0110\x03\x02\x02\x02C\u0113\x03\x02\x02\x02E\u0117\x03" +
		"\x02\x02\x02G\u011A\x03\x02\x02\x02I\u011E\x03\x02\x02\x02K\u0121\x03" +
		"\x02\x02\x02M\u0124\x03\x02\x02\x02O\u0126\x03\x02\x02\x02Q\u0128\x03" +
		"\x02\x02\x02S\u0130\x03\x02\x02\x02U\u0134\x03\x02\x02\x02W\u0138\x03" +
		"\x02\x02\x02Y\u013C\x03\x02\x02\x02[\u0147\x03\x02\x02\x02]\u0149\x03" +
		"\x02\x02\x02_\u014B\x03\x02\x02\x02a\u014E\x03\x02\x02\x02c\u0154\x03" +
		"\x02\x02\x02e\u0156\x03\x02\x02\x02g\u015A\x03\x02\x02\x02i\u015F\x03" +
		"\x02\x02\x02k\u0168\x03\x02\x02\x02m\u016C\x03\x02\x02\x02o\u0171\x03" +
		"\x02\x02\x02q\u0176\x03\x02\x02\x02s\u017D\x03\x02\x02\x02u\u0182\x03" +
		"\x02\x02\x02w\u0186\x03\x02\x02\x02y\u0188\x03\x02\x02\x02{\u018A\x03" +
		"\x02\x02\x02}\u018C\x03\x02\x02\x02\x7F\u018E\x03\x02\x02\x02\x81\u0190" +
		"\x03\x02\x02\x02\x83\u0192\x03\x02\x02\x02\x85\u0194\x03\x02\x02\x02\x87" +
		"\u0196\x03\x02\x02\x02\x89\u0198\x03\x02\x02\x02\x8B\u01A2\x03\x02\x02" +
		"\x02\x8D\x91\t\x02\x02\x02\x8E\x8F\x07\x0F\x02\x02\x8F\x91\x07\f\x02\x02" +
		"\x90\x8D\x03\x02\x02\x02\x90\x8E\x03\x02\x02\x02\x91\x92\x03\x02\x02\x02" +
		"\x92\x93\b\x02\x02\x02\x93\x04\x03\x02\x02\x02\x94\x96\x05\x87D\x02\x95" +
		"\x94\x03\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97\x95\x03\x02\x02\x02\x97" +
		"\x98\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99\x9A\b\x03\x02\x02\x9A" +
		"\x06\x03\x02\x02\x02\x9B\x9C\x07d\x02\x02\x9C\x9D\x07g\x02\x02\x9D\x9E" +
		"\x07i\x02\x02\x9E\x9F\x07k\x02\x02\x9F\xA0\x07p\x02\x02\xA0\b\x03\x02" +
		"\x02\x02\xA1\xA2\x07g\x02\x02\xA2\xA3\x07p\x02\x02\xA3\xA4\x07f\x02\x02" +
		"\xA4\n\x03\x02\x02\x02\xA5\xA6\x07k\x02\x02\xA6\xA7\x07u\x02\x02\xA7\f" +
		"\x03\x02\x02\x02\xA8\xA9\x07u\x02\x02\xA9\xAA\x07m\x02\x02\xAA\xAB\x07" +
		"k\x02\x02\xAB\xAC\x07r\x02\x02\xAC\x0E\x03\x02\x02\x02\xAD\xAE\x07t\x02" +
		"\x02\xAE\xAF\x07g\x02\x02\xAF\xB0\x07c\x02\x02\xB0\xB1\x07f\x02\x02\xB1" +
		"\x10\x03\x02\x02\x02\xB2\xB3\x07h\x02\x02\xB3\xB4\x07t\x02\x02\xB4\xB5" +
		"\x07g\x02\x02\xB5\xB6\x07g\x02\x02\xB6\x12\x03\x02\x02\x02\xB7\xB8\x07" +
		"t\x02\x02\xB8\xB9\x07g\x02\x02\xB9\xBA\x07v\x02\x02\xBA\xBB\x07w\x02\x02" +
		"\xBB\xBC\x07t\x02\x02\xBC\xBD\x07p\x02\x02\xBD\x14\x03\x02\x02\x02\xBE" +
		"\xBF\x07g\x02\x02\xBF\xC0\x07z\x02\x02\xC0\xC1\x07k\x02\x02\xC1\xC2\x07" +
		"v\x02\x02\xC2\x16\x03\x02\x02\x02\xC3\xC4\x07r\x02\x02\xC4\xC5\x07t\x02" +
		"\x02\xC5\xC6\x07k\x02\x02\xC6\xC7\x07p\x02\x02\xC7\xC8\x07v\x02\x02\xC8" +
		"\x18\x03\x02\x02\x02\xC9\xCA\x07r\x02\x02\xCA\xCB\x07t\x02\x02\xCB\xCC" +
		"\x07k\x02\x02\xCC\xCD\x07p\x02\x02\xCD\xCE\x07v\x02\x02\xCE\xCF\x07n\x02" +
		"\x02\xCF\xD0\x07p\x02\x02\xD0\x1A\x03\x02\x02\x02\xD1\xD2\x07k\x02\x02" +
		"\xD2\xD3\x07h\x02\x02\xD3\x1C\x03\x02\x02\x02\xD4\xD5\x07v\x02\x02\xD5" +
		"\xD6\x07j\x02\x02\xD6\xD7\x07g\x02\x02\xD7\xD8\x07p\x02\x02\xD8\x1E\x03" +
		"\x02\x02\x02\xD9\xDA\x07g\x02\x02\xDA\xDB\x07n\x02\x02\xDB\xDC\x07u\x02" +
		"\x02\xDC\xDD\x07g\x02\x02\xDD \x03\x02\x02\x02\xDE\xDF\x07h\x02\x02\xDF" +
		"\xE0\x07k\x02\x02\xE0\"\x03\x02\x02\x02\xE1\xE2\x07y\x02\x02\xE2\xE3\x07" +
		"j\x02\x02\xE3\xE4\x07k\x02\x02\xE4\xE5\x07n\x02\x02\xE5\xE6\x07g\x02\x02" +
		"\xE6$\x03\x02\x02\x02\xE7\xE8\x07f\x02\x02\xE8\xE9\x07q\x02\x02\xE9&\x03" +
		"\x02\x02\x02\xEA\xEB\x07f\x02\x02\xEB\xEC\x07q\x02\x02\xEC\xED\x07p\x02" +
		"\x02\xED\xEE\x07g\x02\x02\xEE(\x03\x02\x02\x02\xEF\xF0\x07e\x02\x02\xF0" +
		"\xF1\x07c\x02\x02\xF1\xF2\x07n\x02\x02\xF2\xF3\x07n\x02\x02\xF3*\x03\x02" +
		"\x02\x02\xF4\xF5\x07h\x02\x02\xF5\xF6\x07u\x02\x02\xF6\xF7\x07v\x02\x02" +
		"\xF7,\x03\x02\x02\x02\xF8\xF9\x07u\x02\x02\xF9\xFA\x07p\x02\x02\xFA\xFB" +
		"\x07f\x02\x02\xFB.\x03\x02\x02\x02\xFC\xFD\x07,\x02\x02\xFD0\x03\x02\x02" +
		"\x02\xFE\xFF\x071\x02\x02\xFF2\x03\x02\x02\x02\u0100\u0101\x07\'\x02\x02" +
		"\u01014\x03\x02\x02\x02\u0102\u0103\x07-\x02\x02\u01036\x03\x02\x02\x02" +
		"\u0104\u0105\x07/\x02\x02\u01058\x03\x02\x02\x02\u0106\u0107\x07@\x02" +
		"\x02\u0107:\x03\x02\x02\x02\u0108\u0109\x07@\x02\x02\u0109\u010A\x07?" +
		"\x02\x02\u010A<\x03\x02\x02\x02\u010B\u010C\x07>\x02\x02\u010C>\x03\x02" +
		"\x02\x02\u010D\u010E\x07>\x02\x02\u010E\u010F\x07?\x02\x02\u010F@\x03" +
		"\x02\x02\x02\u0110\u0111\x07?\x02\x02\u0111\u0112\x07?\x02\x02\u0112B" +
		"\x03\x02\x02\x02\u0113\u0114\x07?\x02\x02\u0114\u0115\x07?\x02\x02\u0115" +
		"\u0116\x07?\x02\x02\u0116D\x03\x02\x02\x02\u0117\u0118\x07#\x02\x02\u0118" +
		"\u0119\x07?\x02\x02\u0119F\x03\x02\x02\x02\u011A\u011B\x07#\x02\x02\u011B" +
		"\u011C\x07?\x02\x02\u011C\u011D\x07?\x02\x02\u011DH\x03\x02\x02\x02\u011E" +
		"\u011F\x07(\x02\x02\u011F\u0120\x07(\x02\x02\u0120J\x03\x02\x02\x02\u0121" +
		"\u0122\x07~\x02\x02\u0122\u0123\x07~\x02\x02\u0123L\x03\x02\x02\x02\u0124" +
		"\u0125\x07?\x02\x02\u0125N\x03\x02\x02\x02\u0126\u0127\x07#\x02\x02\u0127" +
		"P\x03\x02\x02\x02\u0128\u0129\x07p\x02\x02\u0129\u012A\x07g\x02\x02\u012A" +
		"\u012B\x07y\x02\x02\u012B\u012C\x07r\x02\x02\u012C\u012D\x07c\x02\x02" +
		"\u012D\u012E\x07k\x02\x02\u012E\u012F\x07t\x02\x02\u012FR\x03\x02\x02" +
		"\x02\u0130\u0131\x07n\x02\x02\u0131\u0132\x07g\x02\x02\u0132\u0133\x07" +
		"p\x02\x02\u0133T\x03\x02\x02\x02\u0134\u0135\x07q\x02\x02\u0135\u0136" +
		"\x07t\x02\x02\u0136\u0137\x07f\x02\x02\u0137V\x03\x02\x02\x02\u0138\u0139" +
		"\x07e\x02\x02\u0139\u013A\x07j\x02\x02\u013A\u013B\x07t\x02\x02\u013B" +
		"X\x03\x02\x02\x02\u013C\u013D\t\x03\x02\x02\u013DZ\x03\x02\x02\x02\u013E" +
		"\u013F\x07v\x02\x02\u013F\u0140\x07t\x02\x02\u0140\u0141\x07w\x02\x02" +
		"\u0141\u0148\x07g\x02\x02\u0142\u0143\x07h\x02\x02\u0143\u0144\x07c\x02" +
		"\x02\u0144\u0145\x07n\x02\x02\u0145\u0146\x07u\x02\x02\u0146\u0148\x07" +
		"g\x02\x02\u0147\u013E\x03\x02\x02\x02\u0147\u0142\x03\x02\x02\x02\u0148" +
		"\\\x03\x02\x02\x02\u0149\u014A\x07^\x02\x02\u014A^\x03\x02\x02\x02\u014B" +
		"\u014C\t\x04\x02\x02\u014C`\x03\x02\x02\x02\u014D\u014F\t\x05\x02\x02" +
		"\u014E\u014D\x03\x02\x02\x02\u014Fb\x03\x02\x02\x02\u0150\u0155\x05a1" +
		"\x02\u0151\u0152\x05]/\x02\u0152\u0153\x05_0\x02\u0153\u0155\x03\x02\x02" +
		"\x02\u0154\u0150\x03\x02\x02\x02\u0154\u0151\x03\x02\x02\x02\u0155d\x03" +
		"\x02\x02\x02\u0156\u0157\x05\x83B\x02\u0157\u0158\x05c2\x02\u0158\u0159" +
		"\x05\x83B\x02\u0159f\x03\x02\x02\x02\u015A\u015B\x07p\x02\x02\u015B\u015C" +
		"\x07w\x02\x02\u015C\u015D\x07n\x02\x02\u015D\u015E\x07n\x02\x02\u015E" +
		"h\x03\x02\x02\x02\u015F\u0163\x05\x85C\x02\u0160\u0162\x05c2\x02\u0161" +
		"\u0160\x03\x02\x02\x02\u0162\u0165\x03\x02\x02\x02\u0163\u0161\x03\x02" +
		"\x02\x02\u0163\u0164\x03\x02\x02\x02\u0164\u0166\x03\x02\x02\x02\u0165" +
		"\u0163\x03\x02\x02\x02\u0166\u0167\x05\x85C\x02\u0167j\x03\x02\x02\x02" +
		"\u0168\u0169\x07k\x02\x02\u0169\u016A\x07p\x02\x02\u016A\u016B\x07v\x02" +
		"\x02\u016Bl\x03\x02\x02\x02\u016C\u016D\x07d\x02\x02\u016D\u016E\x07q" +
		"\x02\x02\u016E\u016F\x07q\x02\x02\u016F\u0170\x07n\x02\x02\u0170n\x03" +
		"\x02\x02\x02\u0171\u0172\x07e\x02\x02\u0172\u0173\x07j\x02\x02\u0173\u0174" +
		"\x07c\x02\x02\u0174\u0175\x07t\x02\x02\u0175p\x03\x02\x02\x02\u0176\u0177" +
		"\x07u\x02\x02\u0177\u0178\x07v\x02\x02\u0178\u0179\x07t\x02\x02\u0179" +
		"\u017A\x07k\x02\x02\u017A\u017B\x07p\x02\x02\u017B\u017C\x07i\x02\x02" +
		"\u017Cr\x03\x02\x02\x02\u017D\u017E\x07r\x02\x02\u017E\u017F\x07c\x02" +
		"\x02\u017F\u0180\x07k\x02\x02\u0180\u0181\x07t\x02\x02\u0181t\x03\x02" +
		"\x02\x02\u0182\u0183\x07c\x02\x02\u0183\u0184\x07p\x02\x02\u0184\u0185" +
		"\x07{\x02\x02\u0185v\x03\x02\x02\x02\u0186\u0187\x07*\x02\x02\u0187x\x03" +
		"\x02\x02\x02\u0188\u0189\x07+\x02\x02\u0189z\x03\x02\x02\x02\u018A\u018B" +
		"\x07]\x02\x02\u018B|\x03\x02\x02\x02\u018C\u018D\x07_\x02\x02\u018D~\x03" +
		"\x02\x02\x02\u018E\u018F\x07.\x02\x02\u018F\x80\x03\x02\x02\x02\u0190" +
		"\u0191\x07=\x02\x02\u0191\x82\x03\x02\x02\x02\u0192\u0193\x07)\x02\x02" +
		"\u0193\x84\x03\x02\x02\x02\u0194\u0195\x07$\x02\x02\u0195\x86\x03\x02" +
		"\x02\x02\u0196\u0197\t\x06\x02\x02\u0197\x88\x03\x02\x02\x02\u0198\u019C" +
		"\x07%\x02\x02\u0199\u019B\n\x02\x02\x02\u019A\u0199\x03\x02\x02\x02\u019B" +
		"\u019E\x03\x02\x02\x02\u019C\u019A\x03\x02\x02\x02\u019C\u019D\x03\x02" +
		"\x02\x02\u019D\u019F\x03\x02\x02\x02\u019E\u019C\x03\x02\x02\x02\u019F" +
		"\u01A0\bE\x02\x02\u01A0\x8A\x03\x02\x02\x02\u01A1\u01A3\t\x07\x02\x02" +
		"\u01A2\u01A1\x03\x02\x02\x02\u01A3\u01A7\x03\x02\x02\x02\u01A4\u01A6\t" +
		"\b\x02\x02\u01A5\u01A4\x03\x02\x02\x02\u01A6\u01A9\x03\x02\x02\x02\u01A7" +
		"\u01A5\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8\x8C\x03\x02\x02" +
		"\x02\u01A9\u01A7\x03\x02\x02\x02\r\x02\x90\x97\u0147\u014E\u0154\u0163" +
		"\u019C\u01A2\u01A5\u01A7\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!WJSCLexer.__ATN) {
			WJSCLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(WJSCLexer._serializedATN));
		}

		return WJSCLexer.__ATN;
	}

}

