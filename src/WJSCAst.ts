import { TerminalType, TypeName } from './WJSCType'

enum WJSCParserRules {
  Undefined = 'undefined',
  Program = 'program',
  Function = 'function',
  Statement = 'statement',
  Terminal = 'terminal',
  ArgList = 'arg-list',
  Array = 'array',
  Assignment = 'assign',
  Type = 'type',
  Operator = 'op',
  Conditional = 'cond',
  Expression = 'expr',
  Literal = 'literal',
  Pair = 'pair',
  Parameter = 'param',
}

enum WJSCStandardLibrary {
  Skip,
  Read,
  Free,
  Return,
  Exit,
  Print,
  Println,
}

interface WJSCAst {
  children: WJSCAst[]
  column: number
  line: number
  parserRule: WJSCParserRules
  startIndex: number
  token: string
  type: TypeName
}

interface WJSCTerminal extends WJSCAst {
  terminalType?: TerminalType
  value: any
}

interface WJSCFunction extends WJSCAst {
  arguments: string[]
  identifier: string
}

interface WJSCParam extends WJSCAst {
  paramTypes: TypeName[]
}

interface WJSCStatement extends WJSCAst {
  function: WJSCStandardLibrary
}

interface WJSCIdentifier extends WJSCAst {
  identifier: string
}

export {
  WJSCParserRules,
  WJSCAst,
  WJSCTerminal,
  WJSCFunction,
  WJSCStatement,
  WJSCIdentifier,
  WJSCParam,
}
