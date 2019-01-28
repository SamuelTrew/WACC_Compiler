type WJSCParserRules = 'arg-list'

export type typename = baseType | { 'typename': typename[] } | { 'typename': [typename, typename] }
type baseType = 'int' | 'bool' | 'char' | 'string'

export interface WJSCAst {
  parserRule?: WJSCParserRules
  type?: typename
  token: string
  line: number
  column: number
  startIndex: number
  error: string[]
  children?: WJSCAst[]
}
