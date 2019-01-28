lexer grammar WJSCLexer;

// COMMENTS
COMMENT: '#';

// WHITESPACE
EOL: ('\n' | '\r\n') -> skip;
WHITESPACE: NL+ -> skip;

// Keywords
PROGRAM_KEYWORDS: BEGIN 
                | END
                ;
BEGIN: 'begin';
END: 'end';
IS: 'is';
STATEMENT_KEYWORDS: WSKIP 
                  | READ 
                  | STDLIB_FUNCTIONS
                  | CONDITIONAL_KEYWORDS
                  ;
STDLIB_FUNCTIONS: FREE
                | RETURN
                | EXIT
                | PRINT
                | PRINTLN
                ;
WSKIP: 'skip';
READ: 'read';
FREE: 'free';
RETURN: 'return';
EXIT: 'exit';
PRINT: 'print';
PRINTLN: 'println';
CONDITIONAL_KEYWORDS: IF
                    | THEN
                    | ELSE
                    | FI
                    | WHILE
                    | DO
                    | DONE
                    ;
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
UNARY_OPERATOR: LOGICAL_NEGATION
              | ARITHMETIC_NEGATION
              | LENGTH
              | ORDER_OF
              | CHARACTER_OF
              ;
LOGICAL_NEGATION: '!';
ARITHMETIC_NEGATION: MINUS;
LENGTH: 'len';
ORDER_OF: 'ord';
CHARACTER_OF: 'chr';

BINARY_OPERATOR: MULTIPLY
               | DIVIDE
               | MODULO
               | PLUS
               | MINUS
               | GREATER_THAN
               | GREATER_EQUAL
               | LESS_THAN
               | LESS_EQUAL
               | EQUALS
               | STRICT_EQUALS
               | NEQUALS
               | NSTRICT_EQUALS
               | LOGICAL_AND
               | LOGICAL_OR
               ;
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
NEW_PAIR: 'newpair';

// Identifiers & literals
IDENTIFIER: ('_'|[a-z]|[A-Z])('_'|[a-z]|[A-Z]|[0-9])*;
INTEGER_LITERAL: INTEGER_SIGN? DIGIT+;
DIGIT: [0-9];
INTEGER_SIGN: PLUS 
            | MINUS;
BOOLEAN_LITERAL: TRUTH
               | FALSITY
               ;
TRUTH: 'true';
FALSITY: 'false';
fragment BACKSLASH: '\\';
fragment ESCAPED_CHAR: '0'
                     | 'b'
                     | 't'
                     | 'n'
                     | 'f'
                     | 'r'
                     | '\''
                     | '\\'
                     ;
fragment NON_ESCAPED: [\u0000-\u0021] 
                    | [\u0023-\u0026] 
                    | [\u0028-\u005b] 
                    | [\u005d-\u007f]
                    ;
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