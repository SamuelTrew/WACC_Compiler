import { TypeName } from './WJSCType'

type WJSCParserRules = 'arg-list'

export interface WJSCAst {
  children?: WJSCAst[]
  column: number
  error: string[]
  line: number
  parserRule?: WJSCParserRules
  startIndex: number
  token: string
  type?: TypeName
}
