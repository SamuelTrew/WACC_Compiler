import { WJSCAst } from './WJSCAst'
import { TypeName } from './WJSCType'

type WJSCErrorType = 'semantic' | 'syntactic'
type WJSCSyntaxErrors = 'bad token fuck you'
type WJSCSemanticErrors = 'undefined' | 'mismatch'

class WJSCErrorLog {

  private errorLog: string[]

  constructor() {
    this.errorLog = []
  }

  public log = (node: WJSCAst, error: WJSCSemanticErrors | WJSCSyntaxErrors, expectedType?: TypeName) => {
    let errorMessage = ''
    const { line, column, token } = node
    if (this.isSemantic(error)) {
      errorMessage += `Semantic Error '${error}' at ${line}:${column}: `
      if (error === 'undefined') {
        errorMessage += `Type of ${token} is undefined`
      } else if (error === 'mismatch') {
        errorMessage += `Type of ${token} does not match expected type ${expectedType}`
      }
    } else {
      errorMessage += `Syntactic Error '${error} at ${line}:${column}: `
    }
    this.errorLog.push(errorMessage)
  }

  private isSemantic = (error: WJSCSemanticErrors | WJSCSyntaxErrors): error is WJSCSemanticErrors =>
    error === 'undefined' || error === 'mismatch'

}

export { WJSCErrorLog }
