import { WJSCAst } from '../WJSCAst'

class WJSCCodeGenerator {
  public output: string[]

  constructor(output: string[]) {
    this.output = output
  }

  public genProgram = (atx: WJSCAst): Instr[] => {
    return []
  }

  public genFunc = (atx: WJSCAst, freeRegs: Register[]): Instr[] => {
    const result = []
    result.push({ operation: PushPop.Push })
    return result
  }

  public genStat = (atx: WJSCAst, freeRegs: Register[]): Instr[] => {
    return []
  }

  public genExit = (code: number, freeRegs: Register[]) => {

  }

  private saveRegs = (freeRegs: Register[]) => {

  }
}
