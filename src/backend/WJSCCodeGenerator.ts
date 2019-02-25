import {
  WJSCAssignment,
  WJSCAssignRhs,
  WJSCAst,
  WJSCDeclare,
  WJSCExpr,
  WJSCFunction,
  WJSCIdentifier,
  WJSCOperators,
  WJSCParam,
  WJSCParserRules,
  WJSCStatement,
  WJSCTerminal,
} from '../util/WJSCAst'
import { BaseType } from '../util/WJSCType'
import {
  ARMOpcode,
  construct,
  directive,
  msgCount,
  Register,
  tabSpace,
} from './ARMv7-lib'

class WJSCCodeGenerator {
  public static stringifyAsm = (asm: string[]) => asm.join('\n')
  public output: string[]

  private readonly resultReg = Register.r0
  private readonly sp = Register.r13
  private readonly lr = Register.r14
  private readonly pc = Register.r15

  constructor(output: string[]) {
    this.output = output
  }

  public genIdent = (atx: WJSCIdentifier, [head, ...tail]: Register[]): string[] => {
    return []
  }

  public genOperator = (atx: WJSCOperators, [head, ...tail]: Register[]): string[] => {
    return []
  }

  public genParam = (atx: WJSCParam, [head, ...tail]: Register[]): string[] => {
    return []
  }

  public genProgram = (atx: WJSCAst): string[] => {
    const regList = [Register.r4, Register.r5, Register.r6,
                     Register.r7, Register.r8, Register.r9,
                     Register.r10, Register.r11, Register.r12]

    // TODO: Change result to take strings before .text only when needed
    // if (has string) {
    //   let result = [directive.stringDec()].concat(directive.text, directive.global('main'))
    // }

    let result = [directive.text].concat(directive.global('main'))

    // Generate code for function declarations
    const functions = atx.functions
    if (functions) {
      functions.forEach((func) => result.concat(this.genFunc(func, regList)))
    }

    // Generate code for the main function body
    result = result.concat(
        directive.label('main'),
        construct.pushPop(ARMOpcode.push, [this.lr]),
    )

    // Generate code for the function body statements
    if (atx.body) {
      result = result.concat(this.traverseStat(atx.body, regList))
    }
    result.push(
        construct.singleDataTransfer(ARMOpcode.load, this.resultReg, '=0'),
        construct.pushPop(ARMOpcode.pop, [this.pc]),
        tabSpace + directive.ltorg + '\n',
    )
    return result
  }

  public genTerminal = (atx: WJSCTerminal, [head, ...tail]: Register[]): string[] => {
    const val = atx.value
    let result: string[] = []
    if (head) {
      switch (atx.terminalType) {
        case 'bool': {
          result = [construct.move(ARMOpcode.move, head, `=${val}`)]
          break
        }
        case 'stdlib':
          result = []
      }
    }
    return result
  }

  public traverseStatements = (
    children: WJSCStatement[],
    instructions: string[], regList: Register[],
  ): string[] => {
    // WARNING: Do not concat the results of this function to prior results
    children.forEach((child) => {
      instructions.concat(this.traverseStat(child, regList))
    })
    return instructions
  }

  public traverseStat = (atx: WJSCStatement, [head, ...tail]: Register[]): string[] => {
    let result: string[] = []
    switch (atx.parserRule) {
      case WJSCParserRules.Skip:
        // Skip does nothing
        break
      case WJSCParserRules.Exit: {
        result = result.concat(this.genExpr(atx.stdlibExpr, tail))
        result = result.concat(
            construct.move(ARMOpcode.move, this.resultReg, head),
            construct.branch('exit', true),
        )
        break
      }
      case WJSCParserRules.Declare: {
        result = result.concat(this.genDeclare(atx.declaration, [head, ...tail]))
        break
      }
      case WJSCParserRules.Sequential: {
        result = result.concat(this.traverseStat(atx.stat, [head, ...tail]))
        result = result.concat(this.traverseStat(atx.nextStat, [head, ...tail]))
      }
    }
    return result
  }

  public genFunc = (atx: WJSCFunction, regList: Register[]): string[] => {
    let result = [directive.label(atx.identifier)]
    // We now deal with the children
    result = this.traverseStat(atx.body, regList)
    return result
  }

  public genExit = (exitCode: number, [head, ...tail]: Register[]): string[] => {
    return [
      construct.singleDataTransfer(ARMOpcode.load, head, `=${exitCode}`),
    ].concat(construct.move(ARMOpcode.move, this.resultReg, head))
  }

  public genAssignment = (atx: WJSCAssignment, [head, ...tail]: Register[]): string[] => {
    const result: string[] = []

    return result
  }

  public genDeclare = (atx: WJSCDeclare, [head, ...tail]: Register[]): string[] => {
    const result: string[] = []
    const type = atx.type
    const id = atx.identifier
    const rhs = atx.rhs
    let operand = '#-0'

    switch (type) {
      case BaseType.Character:
      case BaseType.Boolean: {
        operand = '#1'
        break
      }
      case BaseType.String:
      case BaseType.Integer: {
        operand = '#4'
        break
      }
    }
    // TODO add cases for pairs and arrays

    result.push(construct.arithmetic(ARMOpcode.subtract, this.sp, this.sp, operand))
    result.concat(this.genAssignRhs(rhs, tail))
    result.push(construct.arithmetic(ARMOpcode.add, this.sp, this.sp, operand))

    return result
  }

  public genAssignRhs = (atx: WJSCAssignRhs, [head, ...tail]: Register[]): string[] => {
    const result: string[] = []
    switch (atx.parserRule) {
      case WJSCParserRules.Expression: {
        result.concat(this.genExpr(atx.expr, [head, ...tail]))
        break
      }
      case WJSCParserRules.ArrayLiteral: {
        break
      }
      case WJSCParserRules.Newpair: {
        break
      }
      case WJSCParserRules.PairElem: {
        break
      }
      case WJSCParserRules.FunctionCall: {
        break
      }
    }
    return result
  }

  public genExpr = (atx: WJSCExpr, [head, ...tail]: Register[]): string[] => {
    const result: string[] = []
    let value = atx.value
    switch (atx.parserRule) {
        case WJSCParserRules.IntLiteral: {
          result.push(construct.singleDataTransfer(ARMOpcode.load, head, `=${value}`))
          break
        }
        case WJSCParserRules.BoolLiter: {
          value = atx.value ? 1 : 0
          result.push(construct.singleDataTransfer(ARMOpcode.load, head, `=${value}`))
          break
        }
        case WJSCParserRules.CharLiter: {
          result.push(construct.move(ARMOpcode.move, head, `#${value}`))
          break
        }
        case WJSCParserRules.StringLiter: {
          result.push(construct.singleDataTransfer(ARMOpcode.load, head, `=msg_` + msgCount))
          break
        }
        case WJSCParserRules.PairLiter: {
          result.push()
          break
        }
      }

    return result
  }
}

export { WJSCCodeGenerator }
