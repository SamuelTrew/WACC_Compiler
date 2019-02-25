import {
  WJSCAssignment,
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
  private allViableRegs = [Register.r4, Register.r5, Register.r6,
                           Register.r7, Register.r8, Register.r9,
                           Register.r10, Register.r11, Register.r12]

  constructor(output: string[]) {
    this.output = output
  }

  public genIdent = (atx: WJSCIdentifier): string[] => {
    return []
  }

  public genOperator = (atx: WJSCOperators): string[] => {
    return []
  }

  public genParam = (atx: WJSCParam): string[] => {
    return []
  }

  public genProgram = (atx: WJSCAst): string[] => {
    let result = [directive.text].concat(directive.global('main'))

    // Generate code for function declarations
    const functions = atx.functions
    if (functions) {
      functions.forEach((func) => result.concat(this.genFunc(func)))
    }

    // Generate code for the main function body
    result = result.concat(
      directive.label('main'),
      construct.pushPop(ARMOpcode.push, [this.lr]),
    )

    // Generate code for the function body statements
    if (atx.body) {
      result = result.concat(this.traverseStat(atx.body))
    }
    result.push(
      construct.singleDataTransfer(ARMOpcode.load, this.resultReg, '=0'),
      construct.pushPop(ARMOpcode.pop, [this.pc]),
      tabSpace + directive.ltorg + '\n',
    )
    return result
  }

  public genTerminal = (atx: WJSCTerminal): string[] => {
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

      }
    }
    return result
  }

  public traverseStatements = (
    children: WJSCStatement[],
    instructions: string[],
  ): string[] => {
    // WARNING: Do not concat the results of this function to prior results
    children.forEach((child, index) => {
      instructions.concat(this.traverseStat(child))
    })
    return instructions
  }

  public traverseStat = (atx: WJSCStatement): string[] => {
    // WARNING: Remember to concat onto instructions, not override it!
    // WARNING: All concatenations occur here!
    // WARNING: Do all LR pushing, PC popping or PC increments here!
    let result: string[] = []
    switch (atx.parserRule) {
      case WJSCParserRules.Skip:
        // Skip does nothing
        break
      case WJSCParserRules.Exit: {
        result = result.concat(this.genExpr(atx.stdlibExpr))
        result = result.concat(
            construct.move(ARMOpcode.move, this.resultReg, this.allViableRegs[0]),
            construct.branch('exit', true),
        )
        break
      }
      case WJSCParserRules.Declare:

    }
    return result
  }

  public genFunc = (atx: WJSCFunction): string[] => {
    let result = [directive.label(atx.identifier)]
    // We now deal with the children
    result = this.traverseStat(atx.body)
    return result
  }

  public genExit = (exitCode: number): string[] => {
    const exitReg = this.allViableRegs[0]
    return [
      construct.singleDataTransfer(ARMOpcode.load, exitReg, `=${exitCode}`),
    ].concat(construct.move(ARMOpcode.move, this.resultReg, exitReg))
  }

  public genAssignment = (atx: WJSCAssignment): string[] => {
    const result: string[] = []

    return result
  }

  public genDeclare = (atx: WJSCDeclare): string[] => {
    const result: string[] = []
    const type = atx.type
    const id = atx.identifier
    const rhs = atx.rhs
    const rd = this.allViableRegs.shift()

    if (rd) {
      switch (type) {
        case BaseType.Boolean:
          result.concat(construct.arithmetic(ARMOpcode.subtract, this.sp, this.sp, '#1'),
              this.genAssignRhs(rhs),
              construct.arithmetic(ARMOpcode.add, this.sp, this.sp, '#1'),
          )
          break
        case BaseType.Integer:
          result.concat(construct.arithmetic(ARMOpcode.subtract, this.sp, this.sp, '#4'),
              this.genAssignRhs(rhs),
              construct.arithmetic(ARMOpcode.add, this.sp, this.sp, '#4'),
          )
          break
      }
    }
    return result
  }

  public genAssignRhs = (atx: WJSCAst): string[] => {
    const result: string[] = []
    const child = atx.children[0]
    if (child.parserRule === WJSCParserRules.Expression) {

    }
    return result
  }

  public genExpr = (atx: WJSCExpr): string[] => {
    const result: string[] = []
    // TODO use parse rules to switch on expr type
    if (atx.parserRule === WJSCParserRules.Literal) {
      switch (atx.type) {
        case BaseType.Integer: {
          const value = atx.value
          const dst = this.allViableRegs[0]
          result.push(construct.singleDataTransfer(ARMOpcode.load, dst, `=${value}`))
        }
      }
    }

    return result
  }

  /* Prints 'Hello World in assembly */
  public testprog = () =>
    [directive.data].concat(
      directive.label('hello'),
      directive.ascii('Hello World'),
      directive.text,
      directive.global('main'),
      directive.label('main'),
      construct.pushPop(ARMOpcode.push, [Register.r7, this.lr]),
      construct.move(ARMOpcode.move, Register.r7, directive.immNum(4)),
      construct.move(ARMOpcode.move, Register.r0, directive.immNum(1)),
      construct.singleDataTransfer(ARMOpcode.load, Register.r1, '=hello'),
      construct.move(ARMOpcode.move, Register.r2, directive.immNum(11)),
      construct.softwareInterrupt(directive.immNum(0)),
      construct.move(ARMOpcode.move, Register.r0, directive.immNum(0)),
      construct.pushPop(ARMOpcode.pop, [Register.r7, this.pc]),
      directive.ltorg,
    )
}

export { WJSCCodeGenerator }
