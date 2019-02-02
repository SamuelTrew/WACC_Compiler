import { TypeName } from './WJSCType'

type WJSCParserRules = 'arg-list'
export type WJSCTerminalType = Keywords
  | Operators
  | Literals
  | 'TYPE_IDENTIFIER'
  | 'IDENTIFIER'
type Keywords = 'PROGRAM_KEYWORD'
  | 'FUNCTION_DECL'
  | 'CONDITIONALS'
  | 'STDLIB'
  | 'PAIR_ACCESSOR'
type Operators = 'UNARY_OPERATOR' | 'BINARY_OPERATOR'
type Literals = 'INT_LITERAL'
  | 'CHAR_LITERAL'
  | 'BOOL_LITERAL'
  | 'STRING_LITERAL'
  | 'PAIR_LITERAL'

export interface WJSCAst {
  children: WJSCAst[]
  column: number
  line: number
  parserRule?: WJSCParserRules
  startIndex: number
  token: string
  type: TypeName
}

export interface WJSCTerminal extends WJSCAst {
  terminalType?: WJSCTerminalType
}
