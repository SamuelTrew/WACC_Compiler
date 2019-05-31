import * as path from 'path'
import { WJSCAst, WJSCParserRules } from './WJSCAst'
import { BaseType, Stdlib, TypeName } from './WJSCType'

enum SynError {
  BadToken = 'bad token',
  IllegalChar = 'illegal char',
  IllegalStr = 'illegal string',
  Overflow = 'overflow',
  Underflow = 'underflow',
  NoReturn = 'no return',
  BadImport = 'can\'t find import file',
  NoFunction = 'can\'t find declared function',
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

type typeERR = TypeName | TypeName[] | number[] | Stdlib | WJSCParserRules

class WJSCErrorLog {
  private readonly errorLookup: Map<SemError, (node: WJSCAst, arg?: typeERR) => string>
    = new Map([
      [SemError.Undefined, ({ token }: WJSCAst): string =>
        `Type of ${token} is undefined`,
      ],
      [SemError.Mismatch, ({ token }: WJSCAst, expected?: typeERR) =>
        `Type of ${token} does not match expected type ${JSON.stringify(expected)}`,
      ],
      [SemError.BadStdlibArgs, ({ token, type }: WJSCAst, stdlib?: typeERR): string => {
        let errorMessage = `Type of ${token} does not match expected type for stdlib function ${stdlib}: got ${JSON.stringify(type)}, expected `
        switch (stdlib) {
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
        return errorMessage
      }],
      [SemError.BadReturn, () => 'Return must be in body of non-main function.'],
      [SemError.IncorrectArgNo, ({ token }: WJSCAst, additionalParam: typeERR) => {
        additionalParam = additionalParam as number[]
        return `${token} expects ${additionalParam[0]}` +
          `${
          additionalParam[1] === -1
            ? 'or more'
            : additionalParam[0] === additionalParam[1]
              ? ''
              : 'to ' + additionalParam[1]
          } arguments`
      }],
      [SemError.DoubleDeclare, ({ token }: WJSCAst) => `${token} has already been declared.`],
      [SemError.FunctionAsArray, ({ token }: WJSCAst) => `${token} is a function being used as an array.`],
      [SemError.BadFunctionUse, ({ token }: WJSCAst) => `${token} is a function being used as a variable.`],
    ])
  private runtimeErrors: string[]
  private semanticErrors: string[]
  private syntaxErrors: string[]
  private warnings: string[]

  constructor() {
    this.runtimeErrors = []
    this.semanticErrors = []
    this.syntaxErrors = []
    this.warnings = []
  }

  public semErr = (node: WJSCAst, file: string, error: SemError, additionalParam?: typeERR) => {
    let errorMessage = ''
    const { line, column } = node
    errorMessage += `Semantic Error '${error}' at ${path.basename(file)}:${line}:${column}: `
    errorMessage += (this.errorLookup.get(error) || (() => {
      throw new Error('Undefined error lookup')
    }))(node, additionalParam)
    this.semanticErrors.push(errorMessage)
  }

  public synErr = (
    line: number,
    column: number,
    file: string,
    error: SynError,
    message: string,
  ) => {
    this.syntaxErrors.push(
      `Syntax Error '${error}' at ${path.basename(file)}:${line}:${column}: ` + message,
    )
  }

  public runtimeError = (error: Error) => {
    this.runtimeErrors.push(
      `Runtime error: ${error.message}.` + `Full stack trace: ${error.stack}`,
    )
  }

  public warning = (warning: string) => this.warnings.push(warning)

  public printErrors = (): string => {
    let errors = ''
    errors += this.runtimeErrors.join('\n')
    errors += errors === '' ? '' : '\n'
    errors += this.syntaxErrors.join('\n')
    errors += errors === '' ? '' : '\n'
    errors += this.semanticErrors.join('\n')
    return errors
  }

  public printWarnings = (): string[] => this.warnings

  public numErrors = (): number =>
    this.numSemanticErrors() + this.numSyntaxErrors()

  public numSyntaxErrors = (): number => this.syntaxErrors.length

  public numSemanticErrors = (): number => this.semanticErrors.length

  public getRuntimeErrors = (): string[] => this.runtimeErrors

  public clear = () => {
    this.semanticErrors = []
    this.syntaxErrors = []
    this.runtimeErrors = []
    this.warnings = []
  }
}

export { WJSCErrorLog, SemError, SynError }
