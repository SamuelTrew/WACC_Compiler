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
  ConditionalIf = 'condif',
  ConditionalWhile = 'condwhile',
  Expression = 'expr',
  Literal = 'literal',
  Pair = 'pair',
  Parameter = 'param',
  Stdlib = 'stdlib',
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
  terminalIdent: 'terminal'
}

interface WJSCFunction extends WJSCAst {
  arguments: string[]
  identifier: string
  functionIdent: 'function'
}

interface WJSCOperators extends WJSCAst {
  inputs: TypeName[]
  arrayInput: boolean
  outputs: TypeName
  opIdent: 'operator'
}

interface WJSCParam extends WJSCAst {
  paramTypes: TypeName[]
  paramIdent: 'param'
}

interface WJSCStatement extends WJSCAst {
  function: WJSCStandardLibrary
  statIdent: 'statement'
}

interface WJSCIdentifier extends WJSCAst {
  identifier: string
  identIdent: 'ident'
}

const WJSCChecker = {
  isFunction: (ast: WJSCAst): ast is WJSCFunction => 'functionIdent' in ast,
  isIdent: (ast: WJSCAst): ast is WJSCIdentifier => 'identIdent' in ast,
  isOperator: (ast: WJSCAst): ast is WJSCOperators => 'opIdent' in ast,
  isParam: (ast: WJSCAst): ast is WJSCParam => 'paramIdent' in ast,
  isStatement: (ast: WJSCAst): ast is WJSCStatement => 'statIdent' in ast,
  isTerminal: (ast: WJSCAst): ast is WJSCTerminal => 'terminalIdent' in ast,
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
