import {
  ARMCondition,
  ARMOpcode,
  construct,
  constructInstruction,
  directive,
  Register,
} from '../util/ARMv7-lib'
import { WJSCAst, WJSCStatement } from '../WJSCAst'
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

  public genProgram = (atx: WJSCAst): string[] =>
    [directive.text].concat(
      directive.global('main'),
      directive.label('main'),
      construct.pushPop(ARMOpcode.push, [this.lr]),
      construct.move(ARMOpcode.move, Register.r0, '#1'),
      construct.singleDataTransfer(ARMOpcode.load, this.resultReg, '=0'),
      construct.pushPop(ARMOpcode.pop, [this.lr]),
      directive.ltorg,
    )

  public genFunc = (atx: WJSCAst, freeRegs: Register[]): string[] => {
    const result = []
    return []
  }

  public genStat = (atx: WJSCAst, freeRegs: Register[]): string[] => {
    const result = []
    if (atx.token === 'skip') {
      // Skip does nothing
    }
    return []
  }

  public genExit = (code: number, freeRegs: Register[]) => {
    return []
  }

  private saveRegs = (freeRegs: Register[]) => {
    return []
  }
}

export { WJSCCodeGenerator }
