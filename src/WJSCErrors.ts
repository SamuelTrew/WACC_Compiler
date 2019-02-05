import { WJSCAst } from './WJSCAst'
import { TypeName } from './WJSCType'

enum ErrType {
  Semantic = 'semantic',
  Syntactic = 'syntactic',
}

enum SynError {
  BadToken = 'bad token',
  IllegalChar = 'illegal char',
  IllegalStr = 'illegal string',
  Overflow = 'overflow',
  Underflow = 'underflow',
}

enum SemError {
  Undefined = 'undefined',
  Mismatch = 'mismatch',
  IncorrectArgNo = 'incorrect arg no',
}

class WJSCErrorLog {

  private errorLog: string[]

  constructor() {
    this.errorLog = []
  }

  public log = (node: WJSCAst, error: SemError | SynError,
                additionalParam?: (TypeName | number[])) => {
    let errorMessage = ''
    const { line, column, token } = node
    if (this.isSemantic(error)) {
      errorMessage += `Semantic Error '${error}' at ${line}:${column}: `
      if (error === SemError.Undefined) {
        errorMessage += `Type of ${token} is undefined`
      } else if (error === SemError.Mismatch) {
        errorMessage += `Type of ${token} does not match expected type ${additionalParam}`
      } else if (error === SemError.IncorrectArgNo && additionalParam !== undefined &&
        additionalParam instanceof Array) {
        errorMessage +=
          `${token} does not have ${additionalParam[0]}
             ${additionalParam[1] === -1 ? 'or more' : (additionalParam[0] === additionalParam[1] ?
              '' : 'to ' + additionalParam[1].toString())} arguments`
      }
    } else {
      errorMessage += `Syntactic Error '${error} at ${line}:${column}: `
    }
    this.errorLog.push(errorMessage)
  }

  public pushError = (message: string) => {
    this.errorLog.push(message)
  }

  public printErrors = (): string => {
    let errors = ''
    this.errorLog.forEach((error) => errors += '\n' + error)
    return errors
  }

  private isSemantic = (error: SemError | SynError): error is SemError =>
    error === SemError.IncorrectArgNo
    || error === SemError.Mismatch
    || error === SemError.Undefined

}

export { WJSCErrorLog, ErrType, SemError, SynError }
