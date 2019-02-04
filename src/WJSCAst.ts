import { TerminalType, TypeName } from './WJSCType'

export enum WJSCParserRules {
  ArgList = 'arglist',
}

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
  terminalType?: TerminalType
  value: any
}
