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

  public nodeLog = (
    node: WJSCAst,
    error: SemError | SynError,
    additionalParam?: TypeName | TypeName[] | number[],
  ) => {
    let errorMessage = ''
    const { line, column, token } = node
    if (this.isSemantic(error)) {
      errorMessage += `Semantic Error '${error}' at ${line}:${column}: `
      if (error === SemError.Undefined) {
        errorMessage += `Type of ${token} is undefined`
      } else if (error === SemError.Mismatch) {
        errorMessage +=
          `Type of ${token}: ${JSON.stringify(node.type)}` +
          ` does not match expected type ${JSON.stringify(additionalParam)}`
      } else if (
        error === SemError.IncorrectArgNo &&
        additionalParam !== undefined &&
        additionalParam instanceof Array
      ) {
        const secondParam = additionalParam[1]
        errorMessage +=
          `${token} does not have ${additionalParam[0]}` +
          `${
          additionalParam[1] === -1
            ? 'or more'
            : additionalParam[0] === additionalParam[1]
              ? ''
              : 'to ' + secondParam
          } arguments`
      }
    } else {
      errorMessage += `Syntactic Error '${error} at ${line}:${column}: `
    }
    this.errorLog.push(errorMessage)
  }

  public messageLog = (
    line: number,
    column: number,
    error: SynError,
    message: string,
  ) => {
    this.errorLog.push(
      `Syntax Error '${error}' at ${line}:${column}: ` + message,
    )
  }

  public runtimeError = (message: string, stack: string) => {
    this.errorLog.push(`Runtime error: ${message}. Full stack trace:
${stack}`)
  }

  public pushError = (message: string) => {
    this.errorLog.push(message)
  }

  public printErrors = (): string => {
    let errors = ''
    this.errorLog.forEach((error) => (errors += '\n' + error))
    return errors
  }

  public numErrors = (): number => this.errorLog.length

  public clear = () => {
    this.errorLog = []
  }

  private isSemantic = (error: SemError | SynError): error is SemError =>
    error === SemError.IncorrectArgNo ||
    error === SemError.Mismatch ||
    error === SemError.Undefined
}

export { WJSCErrorLog, ErrType, SemError, SynError }
