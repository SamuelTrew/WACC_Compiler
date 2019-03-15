import { ANTLRInputStream, CommonToken, CommonTokenStream } from 'antlr4ts'
import { TerminalNode } from 'antlr4ts/tree'
import * as fs from 'fs'
import * as path from 'path'
import { WJSCLexer } from '../grammar/WJSCLexer'
import { ProgramContext, WJSCParser } from '../grammar/WJSCParser'
import { WJSCFunction } from '../util/WJSCAst'
import { WJSCErrorListener } from '../util/WJSCErrorListener'
import { SynError, WJSCErrorLog } from '../util/WJSCErrors'
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
  private functionNames?: Array<{ name: string, context: TerminalNode }>
  private filename: string
  private readonly lexer: WJSCLexer
  private readonly parser: WJSCParser
  private readonly parseTree: ProgramContext
  private readonly semanticChecker: WJSCSemanticChecker
  private readonly errorListener: WJSCErrorListener

  constructor(filename: string, fileContext: string, errorLog: WJSCErrorLog, symbolTable: WJSCSymbolTable, namespace?: string, functionNames?: Array<{ name: string, context: TerminalNode }>) {
    this.errorLog = errorLog
    this.symbolTable = symbolTable
    this.namespace = namespace
    this.functionNames = functionNames
    this.filename = filename
    const data = fs.readFileSync(path.resolve(path.dirname(fileContext), filename), 'utf8')
    this.lexer = new WJSCLexer(new ANTLRInputStream(data))
    this.parser = new WJSCParser(new CommonTokenStream(this.lexer))
    this.semanticChecker = new WJSCSemanticChecker(this.errorLog, this.symbolTable, filename, (functionNames ? functionNames.map((name) => name.name) : undefined) || 'all')
    this.errorListener = new WJSCErrorListener(this.errorLog, filename)
    this.parser.removeErrorListeners()
    this.parser.addErrorListener(this.errorListener)
    this.parseTree = this.parser.program()
  }

  public declare = (): void => this.semanticChecker.visitAllFuncDecs(this.parseTree)

  public generate = (): WJSCFunction[] => {
    if (this.errorLog.numSyntaxErrors() === 0) {
      const functions = this.semanticChecker.visitAllFuncs(this.parseTree)
      if (this.namespace) {
        functions.forEach((func) => {
          const newIdent = `${this.namespace}:${func.identifier}`
          this.symbolTable.rename(func.identifier, newIdent)
          func.identifier = newIdent
        })
      }
      if (this.functionNames) {
        /* Check that all delcared function names have been compiled, otherwise throw an error */
        this.functionNames.forEach((name) => {
          let found = false
          functions.forEach((func) => {
            found = found || (func.identifier === name.name)
          })
          if (!found) {
            this.errorLog.synErr(name.context.symbol.line, name.context.symbol.charPositionInLine, this.filename, SynError.NoFunction, 'Could not find function ' + name.name)
          }
        })
      }
      return functions
    } else {
      return []
    }
  }

}

export { WJSCPreprocessor }
