import {
  WJSCAst,
  WJSCChecker as checker,
  WJSCFunction,
  WJSCStatement,
} from '../util/WJSCAst'
import { ARMOpcode, construct, directive, Register } from './ARMv7-lib'

class WJSCCodeGenerator {
  public static stringifyAsm = (asm: string[]) => asm.join('\n')
  public output: string[]

  private readonly resultReg = Register.r0
  private readonly sp = Register.r13
  private readonly lr = Register.r14
  private readonly pc = Register.r15
  private readonly allViableRegs = [Register.r4, Register.r5]

  constructor(output: string[]) {
    this.output = output
  }

  public genProgram = (atx: WJSCAst): string[] => {
    let result = [directive.text].concat(
      directive.global('main'),
      directive.label('main'),
      construct.pushPop(ARMOpcode.push, [this.lr]),
    )
    // After pushing the lr, we start visiting the children
    result = this.dealWithChildren(atx.children, result)
    result.push(
      construct.move(ARMOpcode.move, Register.r0, '#1'),
      construct.singleDataTransfer(ARMOpcode.load, this.resultReg, '=0'),
      construct.pushPop(ARMOpcode.pop, [this.pc]),
      directive.ltorg,
    )
    return result
  }

  public dealWithChildren = (
    atx: WJSCAst[],
    instructions: string[],
  ): string[] => {
    // WARNING: Do not concat the results of this function to prior results
    atx.forEach((child, index) => {
      instructions = this.dealWithChild(child, instructions)
    })
    return instructions
  }

  public dealWithChild = (atx: WJSCAst, instructions: string[]): string[] => {
    // WARNING: Remember to concat onto instructions, not override it!
    // WARNING: All concatenations occur here!
    // WARNING: Do all LR pushing, PC popping or PC increments here!
    if (checker.isTerminal(atx)) {
      // Terminal case
    } else if (checker.isFunction(atx)) {
      // Function case
      instructions = instructions.concat(
        construct.pushPop(ARMOpcode.push, [this.lr]),
        this.genFunc(atx, this.allViableRegs),
        construct.pushPop(ARMOpcode.pop, [this.pc]),
      )
    } else if (checker.isOperator(atx)) {
      // Operator case
    } else if (checker.isParam(atx)) {
      // Param case
    } else if (checker.isStatement(atx)) {
      instructions = instructions.concat(
        construct.arithmetic(
          ARMOpcode.add,
          this.pc,
          this.pc,
          directive.immNum(1),
        ),
        this.genStat(atx, this.allViableRegs),
      )
      // Statement case
    } else if (checker.isIdent(atx)) {
      // Ident case
    } else {
      console.log('Checker failed to match')
      // instructions = instructions.concat(this.genStat(atx, this.allViableRegs))
    }

    return instructions
  }

  public genFunc = (atx: WJSCFunction, freeRegs: Register[]): string[] => {
    let result = [directive.label(atx.identifier)]
    // We now deal with the children
    result = this.dealWithChildren(atx.children, result)
    return result
  }

  public genStat = (atx: WJSCStatement, freeRegs: Register[]): string[] => {
    let result: string[] = []
    console.log(JSON.stringify(atx.children[0]))
    if (atx.token === 'skip') {
      // Skip does nothing
    } else if (atx.children[0] && atx.children[0].token === 'exit') {
      const exitCode = parseInt(atx.children[1].token, 10)
      result = result.concat(
        this.genExit(exitCode, freeRegs).concat(construct.branch('exit', true)),
      )
    }
    return result
  }

  public genExit = (exitCode: number, freeRegs: Register[]): string[] => {
    const exitReg = freeRegs[0]
    return [
      construct.singleDataTransfer(ARMOpcode.load, exitReg, `=${exitCode}`),
    ].concat(construct.move(ARMOpcode.move, this.resultReg, exitReg))
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

  private saveRegs = (freeRegs: Register[]) => {
    return []
  }
}

export { WJSCCodeGenerator }
