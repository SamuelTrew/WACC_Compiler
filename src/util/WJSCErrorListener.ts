import {
  ParserErrorListener,
  RecognitionException,
  Recognizer,
  Token,
} from 'antlr4ts'
import { SynError, WJSCErrorLog } from './WJSCErrors'

class WJSCErrorListener implements ParserErrorListener {
  private errorLog: WJSCErrorLog
  private fileContext: string

  constructor(errorLog: WJSCErrorLog, fileContext: string) {
    this.errorLog = errorLog
    this.fileContext = fileContext
  }

  public syntaxError = (
    recognizer: Recognizer<Token, any>,
    offendingSymbol: Token | undefined,
    line: number,
    charPositionInLine: number,
    msg: string,
    e: RecognitionException | undefined,
  ) => {
    this.errorLog.synErr(line, charPositionInLine, this.fileContext, SynError.BadToken, msg)
  }
}

export { WJSCErrorListener }
