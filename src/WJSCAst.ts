import { Register } from './util/ARMv7-lib'
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

class WJSCChecker {
  // Checker for different types
  public isTerminal = (ast: WJSCAst): ast is WJSCTerminal => {
    return 'terminalIdent' in ast
  }

  public isFunction = (ast: WJSCAst): ast is WJSCFunction => {
    return 'functionIdent' in ast
  }

  public isOperator = (ast: WJSCAst): ast is WJSCOperators => {
    return 'opIdent' in ast
  }

  public isParam = (ast: WJSCAst): ast is WJSCParam => {
    return 'paramIdent' in ast
  }

  public isStatement = (ast: WJSCAst): ast is WJSCStatement => {
    return 'statIdent' in ast
  }

  public isIdent = (ast: WJSCAst): ast is WJSCIdentifier => {
    return 'identIdent' in ast
  }
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
