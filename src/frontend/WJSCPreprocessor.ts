import { ANTLRInputStream, CommonToken, CommonTokenStream } from 'antlr4ts'
import * as fs from 'fs'
import * as path from 'path'
import { WJSCLexer } from '../grammar/WJSCLexer'
import { WJSCParser } from '../grammar/WJSCParser'
import { WJSCFunction } from '../util/WJSCAst'
import { WJSCErrorListener } from '../util/WJSCErrorListener'
import { WJSCErrorLog } from '../util/WJSCErrors'
import { WJSCSemanticChecker } from './WJSCSemanticChecker'
import { WJSCSymbolTable } from './WJSCSymbolTable'

/**
 * The class representing the preprocessor for including different files. It
 * takes a list of files to find and generates a WJSCAst containing all the
 * exported functions of those files.
 */

class WJSCPreprocessor {

  private errorLog: WJSCErrorLog
  private symbolTable: WJSCSymbolTable
  private namespace?: string
  private functionNames?: string[]
  private readonly lexer: WJSCLexer
  private readonly parser: WJSCParser
  private readonly semanticChecker: WJSCSemanticChecker
  private readonly errorListener: WJSCErrorListener

  constructor(filename: string, fileContext: string, errorLog: WJSCErrorLog, symbolTable: WJSCSymbolTable, namespace?: string, functionNames?: string[]) {
    this.errorLog = errorLog
    this.symbolTable = symbolTable
    this.namespace = namespace
    this.functionNames = functionNames
    const data = fs.readFileSync(path.resolve(fileContext, filename), 'utf8')
    this.lexer = new WJSCLexer(new ANTLRInputStream(data))
    this.parser = new WJSCParser(new CommonTokenStream(this.lexer))
    this.semanticChecker = new WJSCSemanticChecker(this.errorLog, this.symbolTable, fileContext, true)
    this.errorListener = new WJSCErrorListener(this.errorLog)
    this.parser.removeErrorListeners()
    this.parser.addErrorListener(this.errorListener)
    console.log('Preprocessor loaded.')
  }

  public generate = (): WJSCFunction[] => {
    const context = this.parser.program()
    if (this.errorLog.numSyntaxErrors() === 0) {
      let { functions } = this.semanticChecker.visit(context)
      functions.forEach(({ identifier }) => console.log('Found function: ' + identifier))
      if (this.namespace) {
        functions.forEach((func) => {
          const newIdent = `${this.namespace}:${func.identifier}`
          console.log(`Renaming ${func.identifier} to ${newIdent}`)
          this.symbolTable.rename(func.identifier, newIdent)
          console.log(this.symbolTable.lookup(newIdent))
          func.identifier = newIdent
        })
      }
      if (this.functionNames) {
        functions = functions.filter((func) => (this.functionNames as string[]).includes(func.identifier))
      }
      return functions
    } else {
      return []
    }
  }

}

export { WJSCPreprocessor }
