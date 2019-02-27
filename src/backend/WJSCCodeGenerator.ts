import { EOL } from 'os'
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
import { getTypeSize } from '../util/WJSCType'
import {
  ARMAddress,
  ARMCondition,
  ARMOpcode,
  ARMOperand,
  construct,
  directive,
  msgCount,
  Register,
  tabSpace,
} from './ARMv7-lib'

class WJSCCodeGenerator {
  public static stringifyAsm = (asm: string[]) => asm.join(EOL)
  public output: string[] = []
  public data: string[] = [directive.data]

  /* ------------- MEMORY MANAGEMENT --------------*/
  public memIndex: number = 0
  public registerContentSize = new Map([
    [ Register.r0, 0 ], [ Register.r1, 0 ], [ Register.r2, 0 ],
    [Register.r3, 0], [Register.r4, 0], [Register.r5, 0],
    [Register.r6, 0], [Register.r7, 0], [Register.r8, 0],
    [Register.r9, 0], [Register.r10, 0], [Register.r11, 0],
    [Register.r12, 0], [Register.r13, 0], [Register.r14, 0],
    [Register.r15, 0],
  ])

  private readonly resultReg = Register.r0
  private readonly sp = Register.r13
  private readonly lr = Register.r14
  private readonly pc = Register.r15
  private totalStackSize = 0
  public setRegSize = (reg: Register, size: number) => {
    this.registerContentSize.set(reg, size)
  }
  public getRegSize = (reg: Register): number => {
    const value = this.registerContentSize.get(reg)
    if (typeof(value) === 'number') {
      return this.registerContentSize.get(reg) as number
    } else {
      // WARNING: This should never happen!
      return 0
    }
  }

  public nextRegister = (viableRegs: Register[]): Register => {
    if (viableRegs.length !== 0) {
      return viableRegs[0]
    } else {
      // Pushes contents of last reg to symbol table, returns result
      // First we store
      this.output.push(construct.singleDataTransfer(ARMOpcode.store, Register.r12, directive.immAddr(this.memIndex)))
      this.memIndex = this.memIndex + this.getRegSize(Register.r12)
      return Register.r12
    }
  }

  public move = (size: number, opcode: ARMOpcode, rd: Register, operand: ARMOperand, condition?: ARMCondition) => {
    this.setRegSize(rd, size)
    this.output.push(construct.move(ARMOpcode.load, this.pc, directive.immNum(size)))
  }

  // load
  public load = (size: number, opcode: ARMOpcode.load, rd: Register, address: ARMAddress,
                 condition?: ARMCondition, modifier?: 'H' | 'SB' | 'SH') => {
    this.setRegSize(rd, size)
    this.output.push(construct.singleDataTransfer(opcode, rd, address, condition, modifier))
  }

  /* ----------------------------------------------*/

  public sizeGen = (atx: WJSCAst, calledByArray: boolean): number => {
    let typeSize = 0
    switch (atx.parserRule) {
      case WJSCParserRules.BoolLiter:
      case WJSCParserRules.CharLiter: {
        typeSize = 1
        break
      }
      case WJSCParserRules.ArrayElem:
      case WJSCParserRules.IntLiteral: {
        typeSize = 4
        break
      }
      case WJSCParserRules.PairLiter: {
        typeSize = (calledByArray ? 4 : 8)
        break
      }
    }
    return typeSize
  }

  public genArray = (atx: WJSCAst, list: Register[]) => {
    const children = atx.children
    const typeSize = this.sizeGen(atx.children[0], true)
    const size = (children.length * typeSize) + 4   // 4 being the array size
    // Setup for array
    const itemUsed = this.nextRegister(list)
    this.load(4, ARMOpcode.load, this.pc, directive.immNum(size)) // <- 4 refers to size of int type (for size)
    this.output = this.output.concat([directive.malloc(ARMOpcode.branchLink),
                                      construct.move(ARMOpcode.move, itemUsed, Register.r0)])
    if (itemUsed in Register) {
      list.shift()
    } else {
      // We received a register whose contents have been put back on stack
    }
    // loading in elements
    const nextItem = this.nextRegister(list)
    if (nextItem in Register) {
      list.shift()
    }
    children.forEach((child, index) => {
      this.genArrayElem(child, list, nextItem, index)
    })
    this.output.push(construct.singleDataTransfer(ARMOpcode.store, nextItem, itemUsed))
    this.output.push(construct.singleDataTransfer(ARMOpcode.store, itemUsed, this.sp))
  }

  public genArrayElem = (atx: WJSCAst, list: Register[], nextReg: Register, index: number) => {
    const typeSize = this.sizeGen(atx, true)
    let childRep = ''
    switch (atx.parserRule) {
      case (WJSCParserRules.IntLiteral): {
        childRep = directive.immNum(atx.token)
        break
      }
      case (WJSCParserRules.ArrayElem): {
        this.genArray(atx, list)
      }
      default: {
        childRep = atx.token
        break
      }
    }
    this.load(typeSize, ARMOpcode.load, nextReg, childRep)
    const params = `[${nextReg}, ${directive.immNum(typeSize * (index + 1))}]`
    this.output.push(construct.singleDataTransfer(ARMOpcode.store, nextReg, params))
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

    this.output = this.output.concat(
        [directive.text],
        directive.global('main'),
    )

    // Generate code for function declarations
    const functions = atx.functions
    if (functions) {
      functions.forEach((func) => this.genFunc(func, regList))
    }

    // Generate code for the main function body
    this.output = this.output.concat(
        directive.label('main'),
        construct.pushPop(ARMOpcode.push, [this.lr]),
    )

    // Generate code for the function body statements
    if (atx.body) {
      const stats = this.flattenSequential(atx.body)

      // Move sp for all declarations at once
      stats.forEach((stat) => {
        if (stat.parserRule === WJSCParserRules.Declare) {
          this.totalStackSize += getTypeSize(stat.declaration.type)
        }
      })
      const operand = `#${this.totalStackSize}`
      // Decrement sp
      if (this.totalStackSize) {
        this.output.push(construct.arithmetic(ARMOpcode.subtract, this.sp, this.sp, operand))
      }
      // Traverse body
      this.traverseStat(atx.body, regList)
      // Increment sp
      if (this.totalStackSize) {
        this.output.push(construct.arithmetic(ARMOpcode.add, this.sp, this.sp, operand))
      }
    }
    this.output.push(
        construct.singleDataTransfer(ARMOpcode.load, this.resultReg, '=0'),
        construct.pushPop(ARMOpcode.pop, [this.pc]),
        tabSpace + directive.ltorg + '\n',
    )

    // Add .data section if it is not empty
    let result = this.output
    if (msgCount > 0) {
      result = this.data.concat(this.output)
    }

    return result
  }

  public genTerminal = (atx: WJSCTerminal, [head, ...tail]: Register[]) => {
    const val = atx.value
    if (head) {
      switch (atx.terminalType) {
        case 'bool': {
          this.output.push(construct.move(ARMOpcode.move, head, `=${val}`))
          break
        }
        case 'stdlib':
          break
      }
    }
  }

  public traverseStat = (atx: WJSCStatement, [head, ...tail]: Register[]) => {
    switch (atx.parserRule) {
      case WJSCParserRules.Skip:
        // Skip does nothing
        break
      case WJSCParserRules.Exit: {
        // Load exit code then call exit
        this.genExpr(atx.stdlibExpr, [head, ...tail])
        this.output.push(construct.move(ARMOpcode.move, this.resultReg, head))
        this.output.push(construct.branch('exit', true))
        break
      }
      case WJSCParserRules.Declare: {
        this.genDeclare(atx.declaration, [head, ...tail])
        break
      }
      case WJSCParserRules.Assignment: {
        this.genAssignment(atx.assignment, [head, ...tail])
        break
      }
      case WJSCParserRules.Sequential: {
        this.traverseStat(atx.stat, [head, ...tail])
        this.traverseStat(atx.nextStat, [head, ...tail])
        break
      }
    }
  }

  public flattenSequential = (atx: WJSCStatement): WJSCStatement[] => {
    const stats = []
    let curr = atx
    while (curr.parserRule === WJSCParserRules.Sequential) {
      stats.push(curr.nextStat)
      curr = curr.stat
    }
    stats.push(curr)
    return stats.reverse()
  }

  public genFunc = (atx: WJSCFunction, regList: Register[]) => {
    this.output.push(directive.label(atx.identifier))
    // We now deal with the children
    this.traverseStat(atx.body, regList)
  }

  public genExit = (exitCode: number, [head, ...tail]: Register[]) => {
    return [
      construct.singleDataTransfer(ARMOpcode.load, head, `=${exitCode}`),
    ].concat(construct.move(ARMOpcode.move, this.resultReg, head))
  }

  public genAssignment = (atx: WJSCAssignment, [head, ...tail]: Register[]) => {
    this.genAssignLhs(atx.lhs, [head, ...tail])
    this.genAssignRhs(atx.rhs, [head, ...tail])
  }

  public genAssignLhs = (atx: WJSCAst, [head, ...tail]: Register[]) => {
    switch (atx.parserRule) {
      case WJSCParserRules.Identifier: {
        this.output.push()
        // TODO: this code won't work as genIdent need an IdentAst      this.genIdent(atx, [head, ...tail])
        break
      }
      case WJSCParserRules.ArrayElem: {
        this.genArrayElem(atx, tail, head, 0)
        break
      }
      case WJSCParserRules.Pair: {
        break
      }
    }
  }

  public genDeclare = (atx: WJSCDeclare, [head, next, ...tail]: Register[]) => {
    const rhs = atx.rhs
    // TODO add cases for pairs and arrays

    // Write to output
    this.genAssignRhs(rhs, [head, next, ...tail])
    // TODO: NOT CORRECT NEED TO CHECK FOR REFERENCES TO PAIR
  }

  public genAssignRhs = (atx: WJSCAssignRhs, [head, next, ...tail]: Register[]) => {
    switch (atx.parserRule) {
      case WJSCParserRules.Expression: {
        this.genExpr(atx.expr, [head, next, ...tail])
        break
      }
      case WJSCParserRules.ArrayLiteral: {
        this.genArray(atx, [head, next, ...tail])
        break
      }
      case WJSCParserRules.Newpair: {
        const typeSize = getTypeSize(atx.type)
        const sizeIsByte = typeSize === 1

        this.output.push(construct.singleDataTransfer(ARMOpcode.load, this.resultReg, `=8`))
        this.output.push(directive.malloc(ARMOpcode.branchLink))
        this.output.push(construct.move(ARMOpcode.move, head, this.resultReg))

        this.genExpr(atx.expr, [head, next, ...tail])
        this.output.push(directive.malloc(ARMOpcode.branchLink))
        this.output.push(construct.singleDataTransfer(ARMOpcode.store, next, `[${this.resultReg}]`))
        this.output.push(construct.singleDataTransfer(ARMOpcode.store, this.resultReg, `[${head}]`))

        this.genExpr(atx.expr2, [head, next, ...tail])
        this.output.push(directive.malloc(ARMOpcode.branchLink))
        this.output.push(construct.singleDataTransfer(ARMOpcode.store, next, `[${this.resultReg}]`))
        this.output.push(construct.singleDataTransfer(ARMOpcode.store, this.resultReg, `[${head}, #4]`))

        if (this.totalStackSize > 4) {
          this.output.push(construct.singleDataTransfer(ARMOpcode.store, head, `[${this.sp}, #${this.totalStackSize - typeSize}]`, undefined, undefined, sizeIsByte))
        } else {
          this.output.push(construct.singleDataTransfer(ARMOpcode.store, head, `[${this.sp}]`, undefined, undefined, sizeIsByte))
        }
        break
      }
      case WJSCParserRules.PairElem: {
        break
      }
      case WJSCParserRules.FunctionCall: {
        break
      }
    }
  }

  public genExpr = (atx: WJSCExpr, [head, next, ...tail]: Register[]) => {
    let value = atx.value
    switch (atx.parserRule) {
      case WJSCParserRules.IntLiteral: {
        this.output.push(construct.singleDataTransfer(ARMOpcode.load, next, `=${value}`))
        this.output.push(construct.singleDataTransfer(ARMOpcode.load, this.resultReg, `=4`))
        break
      }
      case WJSCParserRules.BoolLiter: {
        value = atx.value ? 1 : 0
        this.output.push(construct.singleDataTransfer(ARMOpcode.load, next, `=${value}`))
        break
      }
      case WJSCParserRules.CharLiter: {
        this.output.push(construct.move(ARMOpcode.move, next, `#'${value}'`))
        this.output.push(construct.singleDataTransfer(ARMOpcode.load, this.resultReg, `=1`))
        break
      }
      case WJSCParserRules.StringLiter: {
        const msgNo = msgCount
        this.data.push(directive.stringDec(atx.value))
        this.output.push(construct.singleDataTransfer(ARMOpcode.load, next, `=msg_` + msgNo))
        break
      }
      case WJSCParserRules.PairLiter: {
        this.output.push(construct.singleDataTransfer(ARMOpcode.load, head, `=0`))
        this.output.push(construct.singleDataTransfer(ARMOpcode.store, head, `[${this.sp}]`))
        this.output.push(construct.singleDataTransfer(ARMOpcode.load, head, `[${this.sp}]`))
        break
      }
      // TODO: Check if this is allowed
      // This is to catch the case when assigning a new pair to an existing one (createRefPair.wacc)
      case WJSCParserRules.Identifier: {
        const typeSize = getTypeSize(atx.type)
        const sizeIsByte = typeSize === 1
        this.output.push(construct.singleDataTransfer(ARMOpcode.load, head, `[${this.sp}, #${typeSize}]`, undefined, undefined, sizeIsByte))
        this.output.push(construct.singleDataTransfer(ARMOpcode.store, head, `[${this.sp}]`, undefined, undefined, sizeIsByte))
        break
      }
    }
  }
}

export { WJSCCodeGenerator }
