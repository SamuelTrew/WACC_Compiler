import { BaseType, TerminalType, TypeName } from './WJSCType'

enum WJSCParserRules {
  Undefined = 'undefined',
  Program = 'program',
  Function = 'function',
  Statement = 'statement',
  Terminal = 'terminal',
  ArgList = 'arg-list',
  Array = 'array',
  ArrayElem = 'arrayElem',
  Assignment = 'assign',
  Assignrhs = 'assignrhs',
  BinOp = 'binOp',
  BoolLiter = 'boolLiter',
  CharLiter = 'charLiter',
  Declare = 'declare',
  Type = 'type',
  Operator = 'op',
  Conditional = 'conditional',
  ConditionalIf = 'condif',
  ConditionalWhile = 'condwhile',
  Expression = 'expr',
  Literal = 'literal',
  ArrayLiteral = 'array literal',
  Pair = 'pair',
  PairLiter = 'pairLiter',
  Parameter = 'param',
  Stdlib = 'stdlib',
  StringLiter = 'stringLiter',
  Identifier = 'ident',
  Skip = 'skip',
  Read = 'read',
  Scope = 'scope',
  Sequential = 'sequential composition',
  Unop = 'unop',
  Free = 'free',
  Return = 'return',
  Exit = 'exit',
  Print = 'print',
  Println = 'print line',
  Newpair = 'new pair',
  PairElem = 'pair elem',
  FunctionCall = 'function call',
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
  rhs: WJSCAssignRhs
}

interface WJSCDeclare extends WJSCAst {
  parserRule: WJSCParserRules.Declare
  type: TypeName
  identifier: string
  rhs: WJSCAssignRhs
}

interface WJSCAssignRhs extends WJSCAst {
  expr: WJSCExpr
  expr2: WJSCExpr
  arrayLiter: WJSCAst
  pairElem: WJSCAst
  ident: string
  argList: WJSCExpr[]
}

interface WJSCExpr extends WJSCAst {
  value: any
}

const WJSCChecker = {
  isExpr: (ast: WJSCAst): ast is WJSCExpr =>
      ast.parserRule === WJSCParserRules.Expression,
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
  WJSCAssignRhs,
}
