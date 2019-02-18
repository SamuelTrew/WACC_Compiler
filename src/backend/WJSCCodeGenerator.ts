import { WJSCAst, WJSCStatement} from '../WJSCAst'

class WJSCCodeGenerator {
  public output: string[]

  constructor(output: string[]) {
    this.output = output
  }

  public genProgram = (atx: WJSCAst): string[] => {
    const result = []
    result.push(assemblyHeader)
    result.push(globalMain)
    result.push()
    return result
  }

  public genFunc = (atx: WJSCAst, freeRegs: Register[]): string[] => {
    const result = []
    return []
  }

  public genStat = (atx: WJSCAst, freeRegs: Register[]): string [] => {
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
