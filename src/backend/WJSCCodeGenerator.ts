import {
  WJSCAssignment, WJSCAssignRhs,
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
import { ARMOpcode, construct, directive, Register, tabSpace } from './ARMv7-lib'

class WJSCCodeGenerator {
  public static stringifyAsm = (asm: string[]) => asm.join('\n')
  public output: string[]

  private readonly resultReg = Register.r0
  private readonly sp = Register.r13
  private readonly lr = Register.r14
  private readonly pc = Register.r15
  private allViableRegs = [Register.r4, Register.r5, Register.r6,
                           Register.r7, Register.r8, Register.r9,
                           Register.r10, Register.r11, Register.r12]

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
    const regList = this.allViableRegs
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
    const reg = this.allViableRegs.shift()
    const val = atx.value
    let result: string[] = []
    if (reg) {
      switch (atx.terminalType) {
        case 'bool': {
          result = [construct.move(ARMOpcode.move, reg, `=${val}`)]
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
      case WJSCParserRules.Declare:

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

    if (head) {
      switch (type) {
        case BaseType.Boolean:
          result.concat(construct.arithmetic(ARMOpcode.subtract, this.sp, this.sp, '#1'),
              this.genAssignRhs(rhs, tail),
              construct.arithmetic(ARMOpcode.add, this.sp, this.sp, '#1'),
          )
          break
        case BaseType.Integer:
          result.concat(construct.arithmetic(ARMOpcode.subtract, this.sp, this.sp, '#4'),
              this.genAssignRhs(rhs, tail),
              construct.arithmetic(ARMOpcode.add, this.sp, this.sp, '#4'),
          )
          break
      }
    }
    return result
  }

  public genAssignRhs = (atx: WJSCAssignRhs, [head, ...tail]: Register[]): string[] => {
    const result: string[] = []
    const child = atx.children[0]
    if (child.parserRule === WJSCParserRules.Expression) {
      this.genExpr(atx.expr, [head, ...tail])
    }
    return result
  }

  public genExpr = (atx: WJSCExpr, [head, ...tail]: Register[]): string[] => {
    const result: string[] = []
    // TODO use parse rules to switch on expr type
    if (atx.parserRule === WJSCParserRules.Literal) {
      switch (atx.type) {
        case BaseType.Integer: {
          const value = atx.value
          result.push(construct.singleDataTransfer(ARMOpcode.load, head, `=${value}`))
        }
        case BaseType.Boolean: {
          const value = atx.value ? 1 : 0
        }
        case BaseType.Character: {
          result.push()
        }
        case BaseType.String: {
          result.push()
        }
        case BaseType.Pair: {
          result.push()
        }
        default: {
          result.push()
        }
      }
    }

    return result
  }
}

export { WJSCCodeGenerator }
