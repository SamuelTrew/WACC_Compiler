// Generated from BasicLexer.g4 by ANTLR 4.6-SNAPSHOT


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


export class BasicLexer extends Lexer {
	public static readonly PLUS = 1;
	public static readonly MINUS = 2;
	public static readonly OPEN_PARENTHESES = 3;
	public static readonly CLOSE_PARENTHESES = 4;
	public static readonly INTEGER = 5;
	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"PLUS", "MINUS", "OPEN_PARENTHESES", "CLOSE_PARENTHESES", "DIGIT", "INTEGER",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'+'", "'-'", "'('", "')'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "PLUS", "MINUS", "OPEN_PARENTHESES", "CLOSE_PARENTHESES", "INTEGER",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(BasicLexer._LITERAL_NAMES, BasicLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return BasicLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(BasicLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "BasicLexer.g4"; }

	// @Override
	public get ruleNames(): string[] { return BasicLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return BasicLexer._serializedATN; }

	// @Override
	public get modeNames(): string[] { return BasicLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x02\x07\x1E\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05" +
		"\x03\x05\x03\x06\x03\x06\x03\x07\x06\x07\x1B\n\x07\r\x07\x0E\x07\x1C\x02" +
		"\x02\x02\b\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x02\r\x02" +
		"\x07\x03\x02\x02\x1D\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02" +
		"\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x03\x0F" +
		"\x03\x02\x02\x02\x05\x11\x03\x02\x02\x02\x07\x13\x03\x02\x02\x02\t\x15" +
		"\x03\x02\x02\x02\v\x17\x03\x02\x02\x02\r\x1A\x03\x02\x02\x02\x0F\x10\x07" +
		"-\x02\x02\x10\x04\x03\x02\x02\x02\x11\x12\x07/\x02\x02\x12\x06\x03\x02" +
		"\x02\x02\x13\x14\x07*\x02\x02\x14\b\x03\x02\x02\x02\x15\x16\x07+\x02\x02" +
		"\x16\n\x03\x02\x02\x02\x17\x18\x042;\x02\x18\f\x03\x02\x02\x02\x19\x1B" +
		"\x05\v\x06\x02\x1A\x19\x03\x02\x02\x02\x1B\x1C\x03\x02\x02\x02\x1C\x1A" +
		"\x03\x02\x02\x02\x1C\x1D\x03\x02\x02\x02\x1D\x0E\x03\x02\x02\x02\x04\x02" +
		"\x1C\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!BasicLexer.__ATN) {
			BasicLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(BasicLexer._serializedATN));
		}

		return BasicLexer.__ATN;
	}

}

