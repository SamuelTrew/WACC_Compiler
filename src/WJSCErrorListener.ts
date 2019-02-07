import {
  ParserErrorListener, RecognitionException, Recognizer, Token,
} from 'antlr4ts'
import { SynError, WJSCErrorLog } from './WJSCErrors'

class WJSCErrorListener implements ParserErrorListener {

  private errorLog: WJSCErrorLog

  constructor(errorLog: WJSCErrorLog) {
    this.errorLog = errorLog
  }

  public syntaxError = (recognizer: Recognizer<Token, any>,
    offendingSymbol: Token | undefined, line: number,
    charPositionInLine: number,
    msg: string, e: RecognitionException | undefined) => {
    this.errorLog.messageLog(line, charPositionInLine, SynError.BadToken, msg)
  }

}

export { WJSCErrorListener }
