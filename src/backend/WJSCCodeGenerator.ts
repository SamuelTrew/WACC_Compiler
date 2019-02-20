import { ARMOpcode, construct, directive, Register } from '../util/ARMv7-lib'
import { WJSCAst, WJSCChecker } from '../WJSCAst'

class WJSCCodeGenerator {
  public static stringifyAsm = (asm: string[]) => asm.join('\n')
  public output: string[]

  private readonly resultReg = Register.r0
  private readonly sp = Register.r13
  private readonly lr = Register.r14
  private readonly pc = Register.r15
  private readonly allViableRegs = []

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
    atx.children.forEach((child, index) => {
      result = this.dealWithChildren(child, result)
    })
    result.push(
      construct.move(ARMOpcode.move, Register.r0, '#1'),
      construct.singleDataTransfer(ARMOpcode.load, this.resultReg, '=0'),
      construct.pushPop(ARMOpcode.pop, [this.lr]),
      directive.ltorg,
    )
    return result
  }

  public dealWithChildren = (
    atx: WJSCAst,
    instructions: string[],
  ): string[] => {
    const checker = new WJSCChecker()
    // WARNING: Remember to concat onto instructions, not override it!
    if (checker.isTerminal(atx)) {
      // Terminal case
    } else if (checker.isFunction(atx)) {
      // Function case
      instructions = instructions.concat(this.genFunc(atx, this.allViableRegs))
    } else if (checker.isOperator(atx)) {
      // Operator case
    } else if (checker.isParam(atx)) {
      // Param case
    } else if (checker.isStatement(atx)) {
      instructions = instructions.concat(this.genStat(atx, this.allViableRegs))
      // Statement case
    } else if (checker.isIdent(atx)) {
      // Ident case
    }
    return instructions
  }

  public genFunc = (atx: WJSCAst, freeRegs: Register[]): string[] => {
    // atx.type
    // ! const result = []
    return []
  }

  public genStat = (atx: WJSCAst, freeRegs: Register[]): string[] => {
    // First we increment the PC
   /* const result = [
      construct.arithmetic(
        ARMOpcode.add,
        this.pc,
        this.pc,
        directive.immNum(1),
      ),
    ] */
    if (atx.token === 'skip') {
      // Skip does nothing
    }
    return []
  }

  public genExit = (code: number, freeRegs: Register[]) => {
    return []
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
