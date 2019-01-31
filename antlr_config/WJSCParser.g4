parser grammar WJSCParser;

options { tokenVocab = WJSCLexer; }

program: BEGIN func* statement END EOF;

func: type IDENTIFIER LPAREN paramList? RPAREN IS statement END;

paramList: param (COMMA param)*;

param: type IDENTIFIER;

statement: WSKIP
         | conditionalBlocks
         | assignment
         | READ assignLhs
         | STDLIB_FUNCTIONS expression
         | conditionalBlocks
         | BEGIN statement END
         | statement SEMICOLON statement
         ;

conditionalBlocks: IF expression THEN statement ELSE statement FI
                 | WHILE expression DO statement DONE
                 ;

assignment: type IDENTIFIER ASSIGNMENT assignRhs
          | assignLhs ASSIGNMENT assignRhs
          ;
    
assignLhs: IDENTIFIER
          | arrayElement
          | pairElement
          ;

assignRhs: expression
         | arrayLiteral
         | NEW_PAIR LPAREN expression COMMA expression RPAREN
         | pairElement
         | CALL IDENTIFIER LPAREN argList? RPAREN
         ;
    
argList: expression (COMMA expression)*;

pairElement: FIRST expression
            | SECOND expression
            ;
    
type: baseType
    | arrayType
    | pairType
    ;

baseType: INTEGER
         | BOOLEAN
         | CHARACTER
         | STRING
         ;

arrayType: baseType LBRACK RBRACK
          | arrayType LBRACK RBRACK
          | pairType LBRACK RBRACK
          ;

pairType: PAIR LPAREN pairElementType COMMA pairElementType RPAREN;

pairElementType: baseType
                 | arrayType
                 | PAIR
                 ;

expression: INTEGER_LITERAL
          | BOOLEAN_LITERAL
          | CHARACTER_LITERAL
          | STRING_LITERAL
          | PAIR_LITERAL
          | IDENTIFIER
          | arrayElement
          | UNARY_OPERATOR expression
          | expression BINARY_OPERATOR expression
          | LPAREN expression RPAREN
          ;

arrayElement: IDENTIFIER (LBRACK expression RBRACK)+;
arrayLiteral: LBRACK (expression (COMMA expression)*)? RBRACK;


