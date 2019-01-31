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
         | stdlib expression
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

expression: integerLiteral
          | expression binaryOperator expression
          | arrayElement
          | unaryOperator expression
          | LPAREN expression RPAREN
          | IDENTIFIER
          | BOOLEAN_LITERAL
          | CHARACTER_LITERAL
          | STRING_LITERAL
          | PAIR_LITERAL
          ;
integerLiteral: (PLUS | MINUS)? DIGIT+;
arrayElement: IDENTIFIER (LBRACK expression RBRACK)+;
arrayLiteral: LBRACK (expression (COMMA expression)*)? RBRACK;


binaryOperator: MULTIPLY
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

unaryOperator: LOGICAL_NEGATION
             | MINUS
             | LENGTH
             | ORDER_OF
             | CHARACTER_OF
             ;

stdlib: FREE
      | RETURN
      | EXIT
      | PRINT
      | PRINTLN
      ;