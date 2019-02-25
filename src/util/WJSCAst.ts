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
  Assignrhs = 'assignrhs',
  Declare = 'declare',
  Type = 'type',
  Operator = 'op',
  Conditional = 'conditional',
  ConditionalIf = 'condif',
  ConditionalWhile = 'condwhile',
  Expression = 'expr',
  Literal = 'literal',
  Pair = 'pair',
  Parameter = 'param',
  Stdlib = 'stdlib',
  Identifier = 'ident',
  Skip = 'skip',
  Read = 'read',
  Scope = 'scope',
  Sequential = 'sequential composition',
  Free = 'free',
  Return = 'return',
  Exit = 'exit',
  Print = 'print',
  Println = 'print line',
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
  functions: WJSCFunction[]
  body?: WJSCStatement
}

interface WJSCTerminal extends WJSCAst {
  parserRule: WJSCParserRules.Terminal
  terminalType?: TerminalType
  value: any
}

interface WJSCFunction extends WJSCAst {
  parserRule: WJSCParserRules.Function
  identifier: string
  paramList: WJSCAst[]
  body: WJSCStatement
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
  function: WJSCStandardLibrary
  stdlibExpr: WJSCExpr
}

interface WJSCIdentifier extends WJSCAst {
  parserRule: WJSCParserRules.Identifier
  identifier: string
}

interface WJSCAssignment extends WJSCAst {
  parserRule: WJSCParserRules.Assignment
  lhs: WJSCAst
  rhs: WJSCAst
}

interface WJSCDeclare extends WJSCAst {
  parserRule: WJSCParserRules.Declare
  type: TypeName
  identifier: string
  rhs: WJSCAst
}

interface WJSCExpr extends WJSCAst {
  value: any
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
  WJSCAssignment,
  WJSCDeclare,
  WJSCOperators,
  WJSCParam,
  WJSCChecker,
  WJSCExpr,
}
