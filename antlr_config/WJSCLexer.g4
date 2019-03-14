lexer grammar WJSCLexer;

// WHITESPACE
EOL: ('\n' | '\r' | '\r\n') -> skip;
WHITESPACE: NL+ -> skip;

// Modules Extension
EXPORT: 'export';	// Export a function
IMPORT: 'import';	// Import exported functions from a file
DEFINE: 'define'; // Define an external function (eg. from C stdlib)

// Keywords
BEGIN: 'begin';
END: 'end';
IS: 'is';
WSKIP: 'skip';
READ: 'read';
FREE: 'free';
RETURN: 'return';
EXIT: 'exit';
PRINT: 'print';
PRINTLN: 'println';
IF: 'if';
THEN: 'then';
ELSE: 'else';
FI: 'fi';
WHILE: 'while';
DO: 'do';
DONE: 'done';
CALL: 'call';
FIRST: 'fst';
SECOND: 'snd';

// Operators
MULTIPLY: '*';
DIVIDE: '/';
MODULO: '%';
PLUS: '+';
MINUS: '-';
GREATER_THAN: '>';
GREATER_EQUAL: '>=';
LESS_THAN: '<';
LESS_EQUAL: '<=';
EQUALS: '==';
STRICT_EQUALS: '===';
NEQUALS: '!=';
NSTRICT_EQUALS: '!==';
LOGICAL_AND: '&&';
LOGICAL_OR: '||';
ASSIGNMENT: '=';
LOGICAL_NEGATION: '!';
NEW_PAIR: 'newpair';
LENGTH: 'len';
ORDER_OF: 'ord';
CHARACTER_OF: 'chr';

// Identifiers & literals
DIGIT: [0-9];
BOOLEAN_LITERAL: 'true' | 'false';
fragment BACKSLASH: '\\';
fragment ESCAPED_CHAR:
	'0'
	| 'b'
	| 't'
	| 'n'
	| 'f'
	| 'r'
	| '\''
	| '\\'
	| '"';
fragment NON_ESCAPED:
	[\u0000-\u0021]
	| [\u0023-\u0026]
	| [\u0028-\u005b]
	| [\u005d-\u007f];
fragment CHAR: NON_ESCAPED | (BACKSLASH ESCAPED_CHAR);
CHARACTER_LITERAL: APOS CHAR APOS;
PAIR_LITERAL: 'null';
STRING_LITERAL: DBLQ CHAR* DBLQ;

// Type Identifiers
INTEGER: 'int';
BOOLEAN: 'bool';
CHARACTER: 'char';
STRING: 'string';
PAIR: 'pair';

// Separators
LPAREN: '(';
RPAREN: ')';
LBRACK: '[';
RBRACK: ']';
COMMA: ',';
SEMICOLON: ';';
APOS: '\'';
DBLQ: '"';

fragment NL: [ \t\u000C\r\n];

// COMMENTS
COMMENT: '#' ~[\r\n]* -> skip;
IDENTIFIER: ('_' | [a-z] | [A-Z]) ('_' | [a-z] | [A-Z] | [0-9])*;