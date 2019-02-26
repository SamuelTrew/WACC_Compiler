import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts'
import { writeFile } from 'fs'
import { WJSCCodeGenerator } from './backend/WJSCCodeGenerator'
import { WJSCSemanticChecker } from './frontend/WJSCSemanticChecker'
import { WJSCLexer } from './grammar/WJSCLexer'
import { WJSCParser } from './grammar/WJSCParser'
import { WJSCAst } from './util/WJSCAst'
import { WJSCErrorListener } from './util/WJSCErrorListener'
import { WJSCErrorLog } from './util/WJSCErrors'

class WJSCCompiler {
  public readonly errorLog: WJSCErrorLog
  public readonly semanticChecker: WJSCSemanticChecker
  private readonly errorListener: WJSCErrorListener
  private readonly lexer: WJSCLexer
  private readonly parser: WJSCParser
  private readonly codeGenerator: WJSCCodeGenerator

  private ast?: WJSCAst
  private asm?: string

  constructor(data: string) {
    this.errorLog = new WJSCErrorLog()
    this.errorListener = new WJSCErrorListener(this.errorLog)
    this.semanticChecker = new WJSCSemanticChecker(this.errorLog)
    this.lexer = new WJSCLexer(new ANTLRInputStream(data))
    this.parser = new WJSCParser(new CommonTokenStream(this.lexer))
    this.codeGenerator = new WJSCCodeGenerator()
    this.parser.removeErrorListeners()
    this.parser.addErrorListener(this.errorListener)
  }

  public check = (): WJSCAst | undefined => {
    const ctx = this.parser.program()
    if (this.errorLog.numSyntaxErrors() === 0) {
      return this.ast = this.semanticChecker.visit(ctx)
    }
  }

  public generate = (): string => {
    if (!this.ast) { this.check() }
    if (this.errorLog.numErrors() > 0 || !this.ast) {
      throw new Error('Cannot generate code: encountered errors on parse')
    }
    return this.asm = WJSCCodeGenerator.stringifyAsm(this.codeGenerator.genProgram(this.ast as WJSCAst))
  }

  public write = (filename: string): Promise<boolean> => new Promise((resolve, reject) => {
    if (!this.asm) { this.generate() }
    if (this.errorLog.numErrors() > 0 || !this.asm) {
      reject(new Error('Cannot write code: encountered errors on generate'))
    } else {
      writeFile(filename, this.asm, (fserr) => {
        if (fserr) {
          reject(fserr)
        } else {
          resolve(true)
        }
      })
    }
  })

}

export default WJSCCompiler
