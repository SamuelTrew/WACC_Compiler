import {
  WJSCAssignment,
  WJSCAst,
  WJSCChecker as checker,
  WJSCDeclare,
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
  private readonly allViableRegs = [Register.r4, Register.r5, Register.r6, Register.r7,
                                    Register.r8, Register.r9, Register.r10, Register.r11, Register.r12]

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
    result.concat(
      directive.label('main'),
      construct.pushPop(ARMOpcode.push, [this.lr]),
    )
    // After pushing the lr, we start visiting the children
    // TODO change to genStatement
    const stat = atx.children[0]
    result = this.traverseChildren(atx.children, result)
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
        case 'bool':
          result = [construct.move(ARMOpcode.move, reg, `=${val}`)]
          break
        case 'stdlib':

      }
    }
    return result
  }

  public traverseChildren = (
    children: WJSCAst[],
    instructions: string[],
  ): string[] => {
    // WARNING: Do not concat the results of this function to prior results
    children.forEach((child, index) => {
      instructions = this.traverseChild(child, instructions)
    })
    return instructions
  }

  public traverseChild = (atx: WJSCAst, instructions: string[]): string[] => {
    // WARNING: Remember to concat onto instructions, not override it!
    // WARNING: All concatenations occur here!
    // WARNING: Do all LR pushing, PC popping or PC increments here!
    if (checker.isTerminal(atx)) {
      instructions = instructions.concat(
        this.genTerminal(atx),
      )
    } else if (checker.isFunction(atx)) {
      // Function case
      instructions = instructions.concat(
        construct.pushPop(ARMOpcode.push, [this.lr]),
        this.genFunc(atx),
        construct.pushPop(ARMOpcode.pop, [this.pc]),
      )
    } else if (checker.isOperator(atx)) {
      // Operator case
      instructions = instructions.concat(
        this.genOperator(atx),
      )
    } else if (checker.isParam(atx)) {
      // Param case
      instructions = instructions.concat(
        this.genParam(atx),
      )
    } else if (checker.isStatement(atx)) {
      // Statement case
      instructions = instructions.concat(
        this.genStat(atx),
      )
    } else if (checker.isIdent(atx)) {
      // Ident case
      instructions = instructions.concat(
        this.genIdent(atx),
      )
    } else {
      console.log('Checker failed to match')
      // instructions = instructions.concat(this.genStat(atx, this.allViableRegs))
    }

    return instructions
  }

  public genFunc = (atx: WJSCFunction): string[] => {
    let result = [directive.label(atx.identifier)]
    // We now deal with the children
    result = this.traverseChildren(atx.children, result)
    return result
  }

  public genStat = (atx: WJSCStatement): string[] => {
    let result: string[] = []
    console.log(JSON.stringify(atx.children[0]))
    if (atx.token === 'skip') {
      // Skip does nothing
    } else if (atx.children[0] && atx.children[0].token === 'exit') {
      const exitCode = parseInt(atx.children[1].token, 10)
      result = result.concat(
        this.genExit(exitCode).concat(construct.branch('exit', true)),
      )
    }
    return result
  }

  public genExit = (exitCode: number): string[] => {
    const exitReg = this.allViableRegs[0]
    return [
      construct.singleDataTransfer(ARMOpcode.load, exitReg, `=${exitCode}`),
    ].concat(construct.move(ARMOpcode.move, this.resultReg, exitReg))
  }

  public genAssignment = (atx: WJSCAssignment): string[] => {
    let result: string[] = []

    return result
  }

  public genDeclare = (atx: WJSCDeclare): string[] => {
    let result: string[] = []
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
      }
    }
    return result
  }

  public genAssignRhs = (atx: WJSCAst): string[] => {
    let result: string[] = []
    const child = atx.children[0]
    if (child.parserRule === WJSCParserRules.Expression) {
      return this.genExpr(child)
    }
    return result
  }

  public genExpr = (atx: WJSCAst): string[] => {
    let result: string[] = []

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
