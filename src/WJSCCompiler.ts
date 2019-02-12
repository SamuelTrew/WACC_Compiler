import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts'
import { WJSCLexer } from './grammar/WJSCLexer'
import { WJSCParser } from './grammar/WJSCParser'
import { WJSCAst } from './WJSCAst'
import { WJSCErrorListener } from './WJSCErrorListener'
import { WJSCErrorLog } from './WJSCErrors'
import { WJSCSemanticChecker } from './WJSCSemanticChecker'

class WJSCCompiler {
  public readonly errorLog: WJSCErrorLog
  public readonly semanticChecker: WJSCSemanticChecker
  private readonly errorListener: WJSCErrorListener
  private readonly lexer: WJSCLexer
  private readonly parser: WJSCParser

  constructor(data: string) {
    this.errorLog = new WJSCErrorLog()
    this.errorListener = new WJSCErrorListener(this.errorLog)
    this.semanticChecker = new WJSCSemanticChecker(this.errorLog)
    this.lexer = new WJSCLexer(new ANTLRInputStream(data))
    this.parser = new WJSCParser(new CommonTokenStream(this.lexer))
    this.parser.removeErrorListeners()
    this.parser.addErrorListener(this.errorListener)
  }

  public check = (): WJSCAst | undefined => {
    const ctx = this.parser.program()
    if (this.errorLog.numSyntaxErrors() === 0) {
      return this.semanticChecker.visit(ctx)
    }
  }

}

export default WJSCCompiler
