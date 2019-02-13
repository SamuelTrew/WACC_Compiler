import { WJSCAst } from './WJSCAst'
import { BaseType, Stdlib, TypeName } from './WJSCType'

enum SynError {
  BadToken = 'bad token',
  IllegalChar = 'illegal char',
  IllegalStr = 'illegal string',
  Overflow = 'overflow',
  Underflow = 'underflow',
  NoReturn = 'no return',
}

enum SemError {
  Undefined = 'undefined',
  Mismatch = 'mismatch',
  IncorrectArgNo = 'incorrect arg no',
  BadStdlibArgs = 'bad std lib args',
  BadReturn = 'bad return',
  DoubleDeclare = 'double declare',
  FunctionAsArray = 'function as array',
  BadFunctionUse = 'bad function use',
}

class WJSCErrorLog {
  private runtimeErrors: string[]
  private semanticErrors: string[]
  private syntaxErrors: string[]

  constructor() {
    this.runtimeErrors = []
    this.semanticErrors = []
    this.syntaxErrors = []
  }

  public semErr = (
    node: WJSCAst,
    error: SemError,
    additionalParam?: TypeName | TypeName[] | number[] | Stdlib,
  ) => {
    let errorMessage = ''
    const { line, column, token } = node
    errorMessage += `Semantic Error '${error}' at ${line}:${column}: `
    if (error === SemError.Undefined) {
      errorMessage += `Type of ${token} is undefined`
    } else if (error === SemError.Mismatch) {
      errorMessage +=
        `Type of ${token}: ${JSON.stringify(node.type)} ` +
        `does not match expected type ${JSON.stringify(additionalParam)}`
    } else if (error === SemError.BadStdlibArgs) {
      const stdlibfunc = additionalParam as Stdlib
      errorMessage +=
        `Type of ${token} does not match expected type for stdlib function ` +
        `${stdlibfunc}: got ${JSON.stringify(node.type)}, expected `
      switch (stdlibfunc) {
        case Stdlib.Exit:
          errorMessage += BaseType.Integer
          break
        case Stdlib.Free:
          errorMessage +=
            BaseType.Pair + ' or ' + JSON.stringify({ arrayType: BaseType.Any })
          break
        case Stdlib.Fst:
        case Stdlib.Snd:
          errorMessage += BaseType.Pair
          break
        case Stdlib.Print:
        case Stdlib.Println:
        default:
          this.runtimeError(new Error('Did not expect error.'))
          break
      }
    } else if (error === SemError.BadReturn) {
      errorMessage += 'return must be in body of non-main function.'
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
    } else if (error === SemError.DoubleDeclare) {
      errorMessage += `${token} has already been declared.`
    } else if (error === SemError.FunctionAsArray) {
      errorMessage += `${token} is a function being used as an array.`
    } else if (error === SemError.BadFunctionUse) {
      errorMessage += `${token} is a function being used as a variable.`
    }
    this.semanticErrors.push(errorMessage)
  }

  public synErr = (
    line: number,
    column: number,
    error: SynError,
    message: string,
  ) => {
    this.syntaxErrors.push(
      `Syntax Error '${error}' at ${line}:${column}: ` + message,
    )
  }

  public runtimeError = (error: Error) => {
    this.runtimeErrors.push(
      `Runtime error: ${error.message}.` + `Full stack trace: ${error.stack}`,
    )
  }

  public printErrors = (): string => {
    let errors = ''
    this.runtimeErrors.forEach((error) => (errors += error + '\n'))
    this.syntaxErrors.forEach((error) => (errors += error + '\n'))
    this.semanticErrors.forEach((error) => (errors += error + '\n'))
    return errors
  }

  public numErrors = (): number =>
    this.numSemanticErrors() + this.numSyntaxErrors()

  public numSyntaxErrors = (): number => this.syntaxErrors.length

  public numSemanticErrors = (): number => this.semanticErrors.length

  public clear = () => {
    this.semanticErrors = []
    this.syntaxErrors = []
    this.runtimeErrors = []
  }

  private isSemantic = (error: SemError | SynError): error is SemError =>
    error === SemError.IncorrectArgNo ||
    error === SemError.Mismatch ||
    error === SemError.Undefined
}

export { WJSCErrorLog, ErrType, SemError, SynError }
