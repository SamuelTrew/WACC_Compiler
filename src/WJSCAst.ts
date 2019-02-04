import { TerminalType, TypeName } from './WJSCType'

enum WJSCParserRules {
  Undefined = 'undefined',
  Program = 'program',
  Function = 'function',
  Statement = 'statement',
  Terminal = 'terminal',
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
  parserRule: string
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
}

interface WJSCStatement extends WJSCAst {
  function: WJSCStandardLibrary
}

interface WJSCParameter extends WJSCAst {
  identifier: string
}

export {
  WJSCParserRules, WJSCAst, WJSCTerminal, WJSCFunction, WJSCStatement,
  WJSCParameter,
}
