import { WJSCAst } from './WJSCAst'
import { TypeName } from './WJSCType'

type WJSCErrorType = 'semantic' | 'syntactic'
type WJSCSyntaxErrors = 'bad token fuck you'
type WJSCSemanticErrors = 'undefined' | 'mismatch' | 'incorrect arg no'

class WJSCErrorLog {

  private errorLog: string[]

  constructor() {
    this.errorLog = []
  }

  public log = (node: WJSCAst, error: WJSCSemanticErrors | WJSCSyntaxErrors,
                additionalParam?: (TypeName | number[])) => {
    let errorMessage = ''
    const { line, column, token } = node
    if (this.isSemantic(error)) {
      errorMessage += `Semantic Error '${error}' at ${line}:${column}: `
      if (error === 'undefined') {
        errorMessage += `Type of ${token} is undefined`
      } else if (error === 'mismatch') {
        errorMessage += `Type of ${token} does not match expected type ${additionalParam}`
      } else if (error === 'incorrect arg no' && additionalParam !== undefined && additionalParam instanceof Array) {
        errorMessage +=
            `${token} does not have ${additionalParam[0]}
             ${additionalParam[1] === -1 ? 'or more' : 'to ' + additionalParam[1].toString()} arguments`
      }
    } else {
      errorMessage += `Syntactic Error '${error} at ${line}:${column}: `
    }
    this.errorLog.push(errorMessage)
  }

  public pushError = (message: string) => {
    this.errorLog.push(message)
  }

  private isSemantic = (error: WJSCSemanticErrors | WJSCSyntaxErrors): error is WJSCSemanticErrors =>
    error === 'undefined' || error === 'mismatch' || error === 'incorrect arg no'

}

export { WJSCErrorLog }
