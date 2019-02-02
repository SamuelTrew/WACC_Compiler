import { TypeName, WJSCTerminalType } from './WJSCType'

type WJSCParserRules = 'arg-list'

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
  value: any
}
