import { BaseType, TerminalType, TypeName } from './WJSCType'

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
  ConditionalIf = 'condif',
  ConditionalWhile = 'condwhile',
  Expression = 'expr',
  Literal = 'literal',
  Pair = 'pair',
  Parameter = 'param',
  Stdlib = 'stdlib',
  Identifier = 'ident',
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
  parserRule: WJSCParserRules.Terminal
  terminalType?: TerminalType
  value: any
}

interface WJSCFunction extends WJSCAst {
  parserRule: WJSCParserRules.Function
  arguments: string[]
  identifier: string
}

interface WJSCOperators extends WJSCAst {
  parserRule: WJSCParserRules.Operator
  inputs: TypeName[]
  arrayInput: boolean
  outputs: TypeName
}

interface WJSCParam extends WJSCAst {
  parserRule: WJSCParserRules.Parameter
  paramTypes: TypeName[]
}

interface WJSCStatement extends WJSCAst {
  parserRule: WJSCParserRules.Statement
  function: WJSCStandardLibrary
}

interface WJSCIdentifier extends WJSCAst {
  parserRule: WJSCParserRules.Identifier
  identifier: string
}

const WJSCChecker = {
  isFunction: (ast: WJSCAst): ast is WJSCFunction =>
    ast.parserRule === WJSCParserRules.Function,
  isIdent: (ast: WJSCAst): ast is WJSCIdentifier =>
    ast.parserRule === WJSCParserRules.Identifier,
  isOperator: (ast: WJSCAst): ast is WJSCOperators =>
    ast.parserRule === WJSCParserRules.Operator,
  isParam: (ast: WJSCAst): ast is WJSCParam =>
    ast.parserRule === WJSCParserRules.Parameter,
  isStatement: (ast: WJSCAst): ast is WJSCStatement =>
    ast.parserRule === WJSCParserRules.Statement,
  isTerminal: (ast: WJSCAst): ast is WJSCTerminal =>
    ast.parserRule === WJSCParserRules.Terminal,
}

export {
  WJSCParserRules,
  WJSCAst,
  WJSCTerminal,
  WJSCFunction,
  WJSCStatement,
  WJSCIdentifier,
  WJSCOperators,
  WJSCParam,
  WJSCChecker,
}
