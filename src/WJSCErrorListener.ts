import { ParserErrorListener } from 'antlr4ts'
import { WJSCErrorLog } from './WJSCErrors'

class WJSCErrorListener implements ParserErrorListener {

  private errorLog: WJSCErrorLog

  constructor(errorLog: WJSCErrorLog) {
    this.errorLog = errorLog
  }

  public syntaxError = () => {

  }

  public reportAmbiguity = () => {

  }

  public reportAttemptingFullContext = () => {

  }

  public reportContextSensitivity = () => {

  }

}

export { WJSCErrorListener }
