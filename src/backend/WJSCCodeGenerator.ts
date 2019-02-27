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

import { WJSCSymbolTable } from '../frontend/WJSCSymbolTable'
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
  public symbolTable: WJSCSymbolTable
  public output: string[] = []
  public data: string[] = [directive.data]

  /* ------------- MEMORY MANAGEMENT --------------*/
  public memIndex: number = 0
  public registerContentSize = new Map([
    [Register.r0, 0], [Register.r1, 0], [Register.r2, 0],
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
  private readonly switchFault = 'No Matching Parser Rule'
  private totalStackSize = 0
  private decStackSize = 0
  private ltorgCheck = true

  /* ----------------------------------------------*/

  constructor(symbolTable: WJSCSymbolTable) {
    this.symbolTable = symbolTable
  }

  public setRegSize = (reg: Register, size: number) => {
    this.registerContentSize.set(reg, size)
  }
  public getRegSize = (reg: Register): number => {
    const value = this.registerContentSize.get(reg)
    if (typeof (value) === 'number') {
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
    this.output.push(construct.move(opcode, rd, operand, condition))
  }

  // load
  public load = (size: number, opcode: ARMOpcode.load, rd: Register, address: ARMAddress,
    condition?: ARMCondition, modifier?: 'H' | 'SB' | 'SH') => {
    this.setRegSize(rd, size)
    this.output.push(construct.singleDataTransfer(opcode, rd, address, condition, modifier))
  }

  public sizeGen = (atx: WJSCAst, calledByArray: boolean): number => {
    let typeSize = 0
    switch (atx.parserRule) {
      case WJSCParserRules.BoolLiter:
      case WJSCParserRules.CharLiter:
        typeSize = 1
        break
      case WJSCParserRules.ArrayElem:
      case WJSCParserRules.IntLiteral:
        typeSize = 4
        break
      case WJSCParserRules.PairLiter:
        typeSize = (calledByArray ? 4 : 8)
        break
      default:
        break
    }
    return typeSize
  }

  public genBinOp = (atx: WJSCExpr, regList: Register[]) => {
    this.genExpr(atx.expr1, regList)
    switch (atx.operator.token) {
      case '*':
        break
      case '/':
        break
      case '%':
        break
      case '+':
        this.output.push()
        break
      case '-':
        break
      case '>':
        break
      case '>=':
        break
      case '<':
        break
      case '<=':
        break
      case '==':
        break
      case '!=':
        break
      case '&&':
        break
      case '||':
        break
    }
    this.genExpr(atx.expr2, regList)
  }

  public genUnOp = (atx: WJSCExpr, regList: Register[]) => {
    switch (atx.operator.token) {
      case '!':
        break
      case '-':
        break
      case 'len':
        break
      case 'ord':
        break
      case 'chr':
        break
    }
    this.genExpr(atx.expr1, regList)
  }

  // For genArray Literal
  public genArray = (atx: WJSCAst, list: Register[]) => {
    const children = atx.children
    let typeSize
    if (children.length !== 0) {
      typeSize = this.sizeGen(atx.children[0], true)
    } else {
      typeSize = 0
    }
    const size = (children.length * typeSize) + 4   // 4 being the array size
    // Setup for array
    const itemUsed = this.nextRegister(list)
    this.load(4, ARMOpcode.load, Register.r0, `=${size}`) // <- 4 refers to size of int type (for size)
    this.output = this.output.concat([directive.malloc(ARMOpcode.branchLink),
                                      construct.move(ARMOpcode.move, itemUsed, Register.r0)])
    if (list.includes(itemUsed)) {
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
      this.genArrayElem(child, list, nextItem, index, itemUsed)
    })
    // Load argument size
    this.load(4, ARMOpcode.load, nextItem, `=${children.length}`)
    // Store r+1 to r
    this.output.push(construct.singleDataTransfer(ARMOpcode.store, nextItem, `[${itemUsed}]`))
  }

  public genArrayElem = (atx: WJSCAst, list: Register[], nextReg: Register, index: number, prevReg?: Register) => {
    const typeSize = this.sizeGen(atx, true)
    let childRep = ''
    switch (atx.parserRule) {
      case (WJSCParserRules.IntLiteral):
        childRep = `=${atx.token}`
        break
      case (WJSCParserRules.ArrayElem):
        this.genArray(atx, list)
      default:
        childRep = atx.token
        break
    }
    this.load(typeSize, ARMOpcode.load, nextReg, childRep)
    let params
    if (!prevReg) {
      params = `[${nextReg}, ${directive.immNum(typeSize * (index + 1))}]`
    } else {
      params = `[${prevReg}, ${directive.immNum(typeSize * (index + 1))}]`
    }
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
      this.decStackSize = this.totalStackSize
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
    )
    if (this.ltorgCheck) {
      this.output.push(tabSpace + directive.ltorg + '\n')
    }

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
        case 'bool':
          this.output.push(construct.move(ARMOpcode.move, head, `=${val}`))
          break
        case 'stdlib':
          break
      }
    }
  }

  public traverseStat = (atx: WJSCStatement, [head, ...tail]: Register[]) => {
    // console.log(atx.parserRule)
    switch (atx.parserRule) {
      case WJSCParserRules.Skip:
        // Skip does nothing
        break
      case WJSCParserRules.Exit:
        // Load exit code then call exit
        this.genExpr(atx.stdlibExpr, [head, ...tail])
        this.output.push(construct.move(ARMOpcode.move, this.resultReg, head),
          construct.branch('exit', true))
        break
      case WJSCParserRules.Declare:
        this.genDeclare(atx.declaration, [head, ...tail])
        break
      case WJSCParserRules.Assignment:
        this.genAssignment(atx.assignment, [head, ...tail])
        break
      case WJSCParserRules.Sequential:
        this.traverseStat(atx.stat, [head, ...tail])
        this.traverseStat(atx.nextStat, [head, ...tail])
        break
      case WJSCParserRules.ConditionalIf:
        this.output.push('HELLOOOOOOOO')
        this.genExpr(atx.stdlibExpr, [head, ...tail])
        this.output.push(construct.singleDataTransfer(ARMOpcode.store, head, `[${this.sp}]`),
          construct.singleDataTransfer(ARMOpcode.load, head, `[${this.sp}]`))
        this.traverseStat(atx.stat, [head, ...tail])
        this.traverseStat(atx.nextStat, [head, ...tail])
        break
      case WJSCParserRules.ConditionalWhile:
        this.genExpr(atx.stdlibExpr, [head, ...tail])
        this.traverseStat(atx.stat, [head, ...tail])
        break
    }
  }

  // public genConditionalIf = (atx: WJSCStatement, [head, next, ...tail]: Register[]) => {
  //   // Literally no clue how to change things for conditional branches
  //   this.output.push(construct.singleDataTransfer(ARMOpcode.load, next, atx))
  // }

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
    this.output.push(directive.label(`f_${atx.identifier}`))
    this.output.push(construct.pushPop(ARMOpcode.push, [this.lr]))
    // We now deal with the children
    this.traverseStat(atx.body, regList)
    if (atx.body.parserRule === WJSCParserRules.ConditionalWhile || WJSCParserRules.ConditionalIf) {
      this.ltorgCheck = false
    } else {
      this.output.push(tabSpace + directive.ltorg + '\n')
    }
  }

  public genExit = (exitCode: number, [head, ..._]: Register[]) => {
    return [
      construct.singleDataTransfer(ARMOpcode.load, head, `=${exitCode}`),
    ].concat(construct.move(ARMOpcode.move, this.resultReg, head))
  }

  public genAssignment = (atx: WJSCAssignment, [head, ...tail]: Register[]) => {
    this.genAssignRhs(atx.rhs, [head, ...tail])
    this.genAssignLhs(atx.lhs, [head, ...tail])
  }

  public genAssignLhs = (atx: WJSCAst, [head, ...tail]: Register[]) => {
    switch (atx.parserRule) {
      case WJSCParserRules.Identifier: {
        const sizeIsByte = getTypeSize(atx.type) === 1

        // TODO get address of ident and store it there instead of sp
        this.output.push(construct.singleDataTransfer(ARMOpcode.store, head, `[${this.sp}]`, undefined, undefined, sizeIsByte))
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
    const type = atx.type
    const rhs = atx.rhs
    const id = atx.identifier

    const typeSize = getTypeSize(type)
    const sizeIsByte = typeSize === 1

    // TODO add cases for pairs and arrays

    // Load rhs expression into 'head' register
    this.genAssignRhs(rhs, [head, next, ...tail])
    this.decStackSize -= typeSize
    this.symbolTable.setVarMemAddr(id, this.decStackSize)
    // Save content of 'head' to memory
    if (this.decStackSize > 4) {
      this.output.push(construct.singleDataTransfer(ARMOpcode.store, head, `[${this.sp}, ${directive.immNum(this.decStackSize)}]`, undefined, undefined, sizeIsByte))
    } else {
      this.output.push(construct.singleDataTransfer(ARMOpcode.store, head, `[${this.sp}]`, undefined, undefined, sizeIsByte))
    }
  }

  public genAssignRhs = (atx: WJSCAssignRhs, [head, next, ...tail]: Register[]) => {
    switch (atx.parserRule) {
      case WJSCParserRules.Expression:
        this.genExpr(atx.expr, [head, next, ...tail])
        break
      case WJSCParserRules.ArrayLiteral:
        this.genArray(atx.arrayLiter, [head, next, ...tail])
        break
      case WJSCParserRules.Newpair:
        const typeSize = getTypeSize(atx.type)
        const sizeIsByte = typeSize === 1
        const exprSize = getTypeSize(atx.expr.type)
        const expr2Size = getTypeSize(atx.expr2.type)
        this.output.push(construct.singleDataTransfer(ARMOpcode.load, this.resultReg, `=8`),
          directive.malloc(ARMOpcode.branchLink),
          construct.move(ARMOpcode.move, head, this.resultReg))
        this.genExpr(atx.expr, [next, ...tail])
        this.output.push(
            construct.singleDataTransfer(ARMOpcode.load, this.resultReg, `=${exprSize}`),
            directive.malloc(ARMOpcode.branchLink),
            construct.singleDataTransfer(ARMOpcode.store, next, `[${this.resultReg}]`),
            construct.singleDataTransfer(ARMOpcode.store, this.resultReg, `[${head}]`))
        this.genExpr(atx.expr2, [next, ...tail])
        this.output.push(
            construct.singleDataTransfer(ARMOpcode.load, this.resultReg, `=${expr2Size}`),
            directive.malloc(ARMOpcode.branchLink),
            // TODO check if is byte and use SERB
            construct.singleDataTransfer(ARMOpcode.store, next, `[${this.resultReg}]`),
            construct.singleDataTransfer(ARMOpcode.store, this.resultReg, `[${head}, #4]`))
        // if (this.totalStackSize > 4) {
        //   this.output.push(construct.singleDataTransfer(ARMOpcode.store, head, `[${this.sp}, #${this.decStackSize}]`, undefined, undefined, sizeIsByte))
        // } else {
        //   this.output.push(construct.singleDataTransfer(ARMOpcode.store, head, `[${this.sp}]`, undefined, undefined, sizeIsByte))
        // }
        break
      case WJSCParserRules.PairElem:
      case WJSCParserRules.FunctionCall:
      default:
        break
    }
  }

  public genExpr = (atx: WJSCExpr, [head, next, ...tail]: Register[]) => {
    let value = atx.value
    switch (atx.parserRule) {
      case WJSCParserRules.IntLiteral:
        this.output.push(construct.singleDataTransfer(ARMOpcode.load, head, `=${value}`))
        // this.output.push(construct.singleDataTransfer(ARMOpcode.load, this.resultReg, `=4`))
        break
      case WJSCParserRules.BoolLiter:
        value = atx.value ? 1 : 0
        this.move(1, ARMOpcode.move, head, directive.immNum(value))
        break
      case WJSCParserRules.CharLiter:
        this.output.push(construct.move(ARMOpcode.move, head, `#'${value}'`))
        break
      case WJSCParserRules.StringLiter:
        const msgNo = msgCount
        this.data.push(directive.stringDec(atx.value))
        this.output.push(construct.singleDataTransfer(ARMOpcode.load, head, `=msg_` + msgNo))
        break
      case WJSCParserRules.PairLiter:
        this.output.push(construct.singleDataTransfer(ARMOpcode.load, head, `=0`))
        break
      // TODO: Check if this is allowed
      // This is to catch the case when assigning a new pair to an existing one (createRefPair.wacc)
      case WJSCParserRules.Identifier:
        const typeSize = getTypeSize(atx.type)
        const sizeIsByte = typeSize === 1
        // TODO Lookup identifier from symbol table and find entry and address

        // TODO load from storage address of the identifier
        const spOffset = this.symbolTable.getVarMemAddr(atx.value)
        this.output.push(construct.singleDataTransfer(ARMOpcode.load, next, `[${this.sp}, #${spOffset}]`, undefined, undefined, sizeIsByte))
        break
    }
  }
}

export { WJSCCodeGenerator }
