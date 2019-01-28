type WJSCParserRules = 'arg-list'

export type typename = baseType | { 'typename': typename[] } | { 'typename': [typename, typename] }
type baseType = 'int' | 'bool' | 'char' | 'string'

export interface WJSCAst {
  children?: WJSCAst[]
  column: number
  error: string[]
  line: number
  parserRule?: WJSCParserRules
  startIndex: number
  token: string
  type?: typename
}
