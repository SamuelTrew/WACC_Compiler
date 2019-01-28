type WJSCParserRules = 'arg-list'

export interface WJSCAst  {
  parserRule?: WJSCParserRules
  token?: string
  line?: number
  column?: number
  startIndex?: number
  error?: string
  children?: WJSCAst
}
