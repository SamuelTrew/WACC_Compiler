parser grammar WJSCParser;

options {
	tokenVocab = WJSCLexer;
}

program: BEGIN imports* func* statement? END EOF;

imports: IMPORT STRING_LITERAL (AS IDENTIFIER)?
	|	IMPORT importList FROM STRING_LITERAL
	;

importList: IDENTIFIER (COMMA IDENTIFIER)*;

func: EXPORT? type IDENTIFIER LPAREN paramList? RPAREN IS statement END
	| EXPORT? DEFINE type IDENTIFIER LPAREN paramList? RPAREN
	| EXTERN type IDENTIFIER LPAREN paramList? RPAREN
	;

paramList: param (COMMA param)*;

param: type IDENTIFIER;

statement:
	WSKIP
	| conditionalBlocks
	| assignment
	| declare
	| READ assignLhs
	| stdlib expression
	| conditionalBlocks
	| BEGIN statement END
	| statement SEMICOLON statement;

conditionalBlocks:
	IF expression THEN statement ELSE statement FI
	| WHILE expression DO statement DONE;

assignment:
	assignLhs ASSIGNMENT assignRhs;

declare:
	type IDENTIFIER ASSIGNMENT assignRhs;

assignLhs: IDENTIFIER | arrayElement | pairElement;

assignRhs:
	expression
	| arrayLiteral
	| NEW_PAIR LPAREN expression COMMA expression RPAREN
	| pairElement
	| CALL (IDENTIFIER COLON)? IDENTIFIER LPAREN argList? RPAREN;

argList: expression (COMMA expression)*;

pairElement: FIRST expression | SECOND expression;

type: baseType | arrayType | pairType;

baseType: INTEGER | BOOLEAN | CHARACTER | STRING;

arrayType:
	baseType LBRACK RBRACK
	| arrayType LBRACK RBRACK
	| pairType LBRACK RBRACK;

pairType:
	PAIR LPAREN pairElementType COMMA pairElementType RPAREN;

pairElementType: baseType | arrayType | PAIR;

expression:
	integerLiteral
	| expression arithmeticOperator expression
	| expression arithmeticOperator2 expression
	| expression comparisonOperator expression
	| expression equalityOperator expression
	| expression booleanAndOperator expression
	| expression booleanOrOperator expression
	| arrayElement
	| unaryOperator expression
	| LPAREN expression RPAREN
	| IDENTIFIER
	| BOOLEAN_LITERAL
	| CHARACTER_LITERAL
	| STRING_LITERAL
	| PAIR_LITERAL;

integerLiteral: (PLUS | MINUS)? DIGIT+;
arrayElement: IDENTIFIER (LBRACK expression RBRACK)+;
arrayLiteral: LBRACK (expression (COMMA expression)*)? RBRACK;

arithmeticOperator: MULTIPLY | DIVIDE | MODULO;

arithmeticOperator2: PLUS | MINUS;

comparisonOperator:
	GREATER_THAN
	| GREATER_EQUAL
	| LESS_THAN
	| LESS_EQUAL;

equalityOperator: EQUALS | NEQUALS;

booleanAndOperator: LOGICAL_AND;
booleanOrOperator: LOGICAL_OR;

unaryOperator:
	LOGICAL_NEGATION
	| MINUS
	| LENGTH
	| ORDER_OF
	| CHARACTER_OF;

stdlib: FREE | RETURN | EXIT | PRINT | PRINTLN;