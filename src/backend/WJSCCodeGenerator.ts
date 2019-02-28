import * as _ from 'lodash'
import { EOL } from 'os'
import { WJSCSymbolTable } from '../frontend/WJSCSymbolTable'
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
} from '../util/WJSCAst'
import { getTypeSize } from '../util/WJSCType'
import {
  ARMAddress,
  ARMCondition,
  ARMOpcode,
  ARMOperand,
  construct,
  directive,
  Register,
  RuntimeError,
  tabSpace,
} from './ARMv7-lib'

class WJSCCodeGenerator {
  public static stringifyAsm = (asm: string[]) => asm.join(EOL) + '\n'
  public symbolTable: WJSCSymbolTable
  public output: string[] = []
  public data: string[] = [directive.data]
  public postFunc: string[] = []
  public errorPresent: boolean = false

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
  private msgCount = 0
  private labelCount = 0
  private totalStackSize = 0
  private decStackSize = 0
  private ltorgCheck = true
  private readonly PRINT_BOOL = 'p_print_bool'
  private readonly PRINT_STRING = 'p_print_string'
  private readonly PRINT_INT = 'p_print_int'
  private readonly PRINT_NEW_LINE = 'p_print_ln'
  private printLnCheck = true
  private printIntCheck = true
  private printStringCheck = true
  private printBoolCheck = true
  private printNewLnCheck = true

  /* ----------------------------------------------*/

  // TODO: Gen array elem for pair and arrays
  constructor(symbolTable: WJSCSymbolTable) {
    this.symbolTable = symbolTable
  }

  /* ------------- Print Management ---------------*/

  public printBool = (boolInput: boolean) => {
    if (this.printBoolCheck) {
      const bool = boolInput ? `true\0` : `false\0`
      const notBool = boolInput ? `false\0` : `true\0`
      this.stringDec(bool)
      this.postFunc.push(this.PRINT_BOOL + ':',
        construct.pushPop(ARMOpcode.push, [this.lr]),
        construct.compareTest(ARMOpcode.compare, this.resultReg, `#0`),
        construct.singleDataTransfer(ARMOpcode.load, this.resultReg, `=msg_${this.msgCount}`, ARMCondition.nequal),
      )
      this.stringDec(notBool)
      this.postFunc.push(construct.singleDataTransfer(ARMOpcode.load, this.resultReg, `=msg_${this.msgCount}`, ARMCondition.equal),
        construct.arithmetic(ARMOpcode.add, this.resultReg, this.resultReg, `#4`),
        construct.branch(`printf`, true),
        construct.move(ARMOpcode.move, this.resultReg, `#0`),
        construct.branch(`fflush`, true),
        construct.pushPop(ARMOpcode.pop, [this.pc]),
      )
      this.printBoolCheck = false
    }
  }

  public printString = (stringInput: string) => {
    if (this.printStringCheck) {
      this.stringDec(stringInput)
      this.postFunc.push(this.PRINT_STRING + ':',
        construct.pushPop(ARMOpcode.push, [this.lr]),
        construct.singleDataTransfer(ARMOpcode.load, Register.r1, `[${this.resultReg}]`),
        construct.arithmetic(ARMOpcode.add, Register.r2, this.resultReg, `#4`),
        construct.singleDataTransfer(ARMOpcode.load, this.resultReg, `=msg_${this.msgCount}`),
        construct.arithmetic(ARMOpcode.add, this.resultReg, this.resultReg, `#4`),
        construct.branch(`printf`, true),
        construct.move(ARMOpcode.move, this.resultReg, `#0`),
        construct.branch(`fflush`, true),
        construct.pushPop(ARMOpcode.pop, [this.pc]),
      )
      this.printStringCheck = false
    }
  }

  public printLine = () => {
    if (this.printNewLnCheck) {
      this.stringDec('\\0')
      this.postFunc.push(directive.label(this.PRINT_NEW_LINE),
        construct.pushPop(ARMOpcode.push, [this.lr]),
        construct.singleDataTransfer(ARMOpcode.load, this.resultReg, `=msg_${this.msgCount}`),
        construct.arithmetic(ARMOpcode.add, this.resultReg, this.resultReg, '#4'),
        construct.branch('puts', true),
        construct.move(ARMOpcode.move, this.resultReg, '#0'),
        construct.branch('fflush', true),
        construct.pushPop(ARMOpcode.pop, [this.pc]),
      )
      this.printNewLnCheck = false
    }
  }

  public printInt = () => {
    if (this.printIntCheck) {
      this.stringDec('%d\\0')
      this.postFunc.push(directive.label(this.PRINT_INT),
        construct.pushPop(ARMOpcode.push, [this.lr]),
        construct.move(ARMOpcode.move, Register.r1, this.resultReg),
        construct.singleDataTransfer(ARMOpcode.load, this.resultReg, `=msg_${this.msgCount}`),
        construct.arithmetic(ARMOpcode.add, this.resultReg, this.resultReg, `#4`),
        construct.branch(`printf`, true),
        construct.move(ARMOpcode.move, this.resultReg, `#0`),
        construct.branch(`fflush`, true),
        construct.pushPop(ARMOpcode.pop, [this.pc]),
      )
      this.printIntCheck = false
    }
  }
  /* ------------------------------------------- */

  public setRegSize = (reg: Register, size: number) => {
    this.registerContentSize.set(reg, size)
  }
  public getRegSize = (reg: Register): number => {
    const value = this.registerContentSize.get(reg)
    if (typeof (value) === 'number') {
      return this.registerContentSize.get(reg) as number
    } else {
      // WARNING: This should never happen!
      return -10000
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

  public genBinOp = (atx: WJSCExpr, [head, next, ...tail]: Register[]) => {
    this.genExpr(atx.expr1, [head, next, ...tail])
    switch (atx.operator.token) {
      case '*':
        this.output.push(construct.multiply(head, next, head))
        this.output.push(construct.compareTest(ARMOpcode.compare, next, head, undefined, `ASR #31`))
        this.output.push(construct.branch(ARMOpcode.branchLink, false, ARMCondition.overflow))
        break
      case '/':
        this.move(getTypeSize(atx.type), ARMOpcode.move, this.resultReg, head)
        this.move(getTypeSize(atx.type), ARMOpcode.move, Register.r1, next)
        this.output.push(construct.branch(`__aeabi_idiv`, true))
        this.move(getTypeSize(atx.type), ARMOpcode.move, head, this.resultReg)
        this.move(getTypeSize(atx.type), ARMOpcode.move, this.resultReg, head)
        break
      case '%':
        this.move(getTypeSize(atx.type), ARMOpcode.move, this.resultReg, head)
        this.move(getTypeSize(atx.type), ARMOpcode.move, Register.r1, next)
        this.output.push(construct.branch(`__aeabi_idivmod`, true))
        this.move(getTypeSize(atx.type), ARMOpcode.move, head, Register.r1)
        this.move(getTypeSize(atx.type), ARMOpcode.move, this.resultReg, head)
        break
      case '+':
        this.output.push(construct.arithmetic(ARMOpcode.add, head, head, next))
        this.output.push(construct.branch(ARMOpcode.branchLink, true, ARMCondition.nequal))
        break
      case '-':
        this.output.push(construct.arithmetic(ARMOpcode.subtract, head, head, next))
        this.output.push(construct.branch(ARMOpcode.branchLink, true, ARMCondition.overflow))
        break
      case '>':
        this.output.push(construct.compareTest(ARMOpcode.compare, next, head),
          construct.move(ARMOpcode.move, head, `#1`, ARMCondition.greaterThan),
          construct.move(ARMOpcode.move, head, `#0`, ARMCondition.lessEqual),
        )
        break
      case '>=':
        this.output.push(construct.compareTest(ARMOpcode.compare, next, head),
          construct.move(ARMOpcode.move, head, `#1`, ARMCondition.greaterEqual),
          construct.move(ARMOpcode.move, head, `#0`, ARMCondition.lessThan),
        )
        break
      case '<':
        this.output.push(construct.compareTest(ARMOpcode.compare, next, head),
          construct.move(ARMOpcode.move, head, `#1`, ARMCondition.lessThan),
          construct.move(ARMOpcode.move, head, `#0`, ARMCondition.greaterEqual),
        )
        break
      case '<=':
        this.output.push(construct.compareTest(ARMOpcode.compare, next, head),
          construct.move(ARMOpcode.move, head, `#1`, ARMCondition.lessEqual),
          construct.move(ARMOpcode.move, head, `#0`, ARMCondition.greaterThan),
        )
        break
      case '==':
        this.output.push(construct.compareTest(ARMOpcode.compare, next, head),
          construct.move(ARMOpcode.move, head, `#1`, ARMCondition.equal),
          construct.move(ARMOpcode.move, head, `#0`, ARMCondition.nequal),
        )
        break
      case '!=':
        this.output.push(construct.compareTest(ARMOpcode.compare, next, head),
          construct.move(ARMOpcode.move, head, `#1`, ARMCondition.nequal),
          construct.move(ARMOpcode.move, head, `#0`, ARMCondition.equal),
        )
        break
      case '&&':
        this.output.push(construct.boolCalc(ARMOpcode.and, head, head, next))
        // TODO: the subsequent STR and LDR should be STRB and LDRB in this case
        break
      case '||':
        this.output.push(construct.boolCalc(ARMOpcode.or, head, head, next),
          construct.boolCalc(ARMOpcode.exclusiveOr, head, head, undefined, `#1`),
        )
        break
    }
    this.genExpr(atx.expr2, [head, next, ...tail])
  }

  public genUnOp = (atx: WJSCExpr, [head, next, ...tail]: Register[]) => {
    switch (atx.operator.token) {
      case '!':
        this.output.push(construct.branch(`p_print_bool`, true))
        this.printBool(atx.value)
        this.printLine()
        break
      case '-':
        this.output.push(construct.arithmetic(ARMOpcode.reverseSubtract, head, head, `#0`))
        break
      case 'len':
        this.symbolTable.lookup(atx.value)
        // TODO: divide the pointer count by 4
        break
      case 'ord':
        break
      case 'chr':
        break
    }
    this.genExpr(atx.expr1, [head, next, ...tail])
  }

  // For genArray Literal
  public genArray = (atx: WJSCAst, list: Register[]) => {
    const children = atx.children
    const typeSize = (children.length !== 0) ? this.sizeGen(atx.children[0], true) : 0
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
    let params
    switch (atx.parserRule) {
      case (WJSCParserRules.IntLiteral):
        this.load(typeSize, ARMOpcode.load, nextReg, `=${atx.token}`)
        if (!prevReg) {
          params = `[${nextReg}, ${directive.immNum(typeSize * (index + 1))}]`
        } else {
          params = `[${prevReg}, ${directive.immNum(typeSize * (index + 1))}]`
        }
        this.output.push(construct.singleDataTransfer(ARMOpcode.store, nextReg, params))
        break
      case (WJSCParserRules.CharLiter):
      case (WJSCParserRules.BoolLiter):
        const value = (atx.parserRule === WJSCParserRules.CharLiter ? `#${atx.token}` :
          (atx.token === 'true' ? directive.immNum(1) : directive.immNum(0)))
        this.move(typeSize, ARMOpcode.move, nextReg, value)
        if (!prevReg) {
          params = `[${nextReg}, ${directive.immNum(4 + typeSize * (index))}]`
        } else {
          params = `[${prevReg}, ${directive.immNum(4 + typeSize * (index))}]`
        }
        this.output.push(construct.singleDataTransfer(ARMOpcode.store, nextReg, params, undefined, undefined, true))
        break
      case (WJSCParserRules.ArrayLiteral):
        this.genArray(atx, list)
        this.load(typeSize, ARMOpcode.load, nextReg, `${atx.token}`)
        break
      default:
        this.load(typeSize, ARMOpcode.load, nextReg, `${atx.token}`)
        if (!prevReg) {
          params = `[${nextReg}, ${directive.immNum(typeSize * (index + 1))}]`
        } else {
          params = `[${prevReg}, ${directive.immNum(typeSize * (index + 1))}]`
        }
        this.output.push(construct.singleDataTransfer(ARMOpcode.store, nextReg, params))
        break
    }
  }

  public genProgram = (atx: WJSCAst): string[] => {
    const regList = [Register.r4, Register.r5, Register.r6,
                     Register.r7, Register.r8, Register.r9,
                     Register.r10, Register.r11, Register.r12]

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
    // this.checkDivByZero()
    // Generate code for the function body statements
    if (atx.body) {
      this.genStatBlock(atx.body, regList)
    }
    this.output.push(
      construct.singleDataTransfer(ARMOpcode.load, this.resultReg, '=0'),
      construct.pushPop(ARMOpcode.pop, [this.pc]),
    )
    if (this.ltorgCheck) {
      this.output.push(tabSpace + directive.ltorg)
    }

    // Add .data section if it is not empty
    let result = this.output
    if (this.msgCount > 0) {
      // Add error warning if there is potential for RE
      if (this.errorPresent) {
        this.throwError()
      }
      result = this.data.concat('', this.output, this.postFunc)
    }
    return result
  }

  public genStatBlock(statements: WJSCStatement, regList: Register[]) {
    const stats = this.flattenSequential(statements)
    // Save stack size from parent scope
    const prevStackSize = this.totalStackSize
    this.totalStackSize = 0

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
    this.traverseStat(statements, regList)

    // Increment sp
    if (this.totalStackSize) {
      this.output.push(construct.arithmetic(ARMOpcode.add, this.sp, this.sp, operand))
    }

    // Restore parent stack size
    this.totalStackSize = prevStackSize
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
        this.genConditionalIf(atx, [head, ...tail])
        break
      case WJSCParserRules.ConditionalWhile:
        this.genCondWhile(atx, [head, ...tail])
        break
      case WJSCParserRules.Print:
        this.genExpr(atx.stdlibExpr, [head, ...tail])
        this.printBaseType(atx.stdlibExpr, [head, ...tail])
        if (this.printLnCheck) {
          this.stringDec('%.*s\\0')
          this.printLnCheck = false
        }
        break
      case WJSCParserRules.Println:
        this.genExpr(atx.stdlibExpr, [head, ...tail])
        this.printBaseType(atx.stdlibExpr, [head, ...tail])
        this.output.push(construct.branch(this.PRINT_NEW_LINE, true))
        if (this.printLnCheck) {
          this.stringDec('%.*s\\0')
          this.printLnCheck = false
        }
        this.printLine()
        break
      case WJSCParserRules.Scope:
        this.switchToChildTable(atx.tableNumber)
        this.traverseStat(atx.stat, [head, ...tail])
        this.switchToParentTable()
        break
      case WJSCParserRules.Read:
        break
      case WJSCParserRules.Free:
        break
    }
  }

  public printBaseType = (atx: WJSCExpr, [head, ..._]: Register[]) => {
    this.move(getTypeSize(atx.type), ARMOpcode.move, this.resultReg, head)
    switch (atx.parserRule) {
      case WJSCParserRules.IntLiteral:
        this.output.push(construct.branch(this.PRINT_INT, true))
        this.printInt()
        break
      case WJSCParserRules.StringLiter:
        this.output.push(construct.branch(this.PRINT_STRING, true))
        this.printString(atx.value)
        break
      case WJSCParserRules.BoolLiter:
        this.output.push(construct.branch(this.PRINT_BOOL, true))
        this.printBool(atx.value)
        break
      case WJSCParserRules.CharLiter:
        this.output.push(construct.branch(`putchar`, true))
        break
      case WJSCParserRules.Identifier:
        const type = this.symbolTable.lookup(atx.value)
        this.printFromIdent(atx)
        break
    }
  }

  public printFromIdent = (atx: WJSCExpr) => {
    const type = this.symbolTable.lookup(atx.value)
    switch (type) {
      case BaseType.Integer:
        this.output.push(construct.branch(this.PRINT_INT, true))
        break
      case BaseType.String:
        this.output.push(construct.branch(this.PRINT_STRING, true))
        this.printString(atx.value)
        break
      case BaseType.Character:
        this.output.push(construct.branch(`putchar`, true))
        break
      case BaseType.Boolean:
        this.output.push(construct.branch(this.PRINT_BOOL, true))
        this.printBool(atx.value)
        break
    }
  }

  public genConditionalIf = (atx: WJSCStatement, [head, ...tail]: Register[]) => {
    this.genExpr(atx.condition, [head, ...tail])
    this.output.push(construct.compareTest(ARMOpcode.compare, head, '#0'))

    const label1 = `L${this.getLabelNo()}`
    const label2 = `L${this.getLabelNo()}`
    // TODO change symbol table with scope
    // Jump to label1 if false
    this.output.push(construct.branch(label1, false, ARMCondition.equal))
    // True body
    this.genStatBlock(atx.trueBranch, [head, ...tail])
    this.output.push(construct.branch(label2, false))
    this.output.push(directive.label(label1))
    // False body
    this.genStatBlock(atx.falseBranch, [head, ...tail])
    this.output.push(directive.label(label2))
  }

  public genCondWhile = (atx: WJSCStatement, [head, ...tail]: Register[]) => {
    const label1 = `L${this.getLabelNo()}`
    const label2 = `L${this.getLabelNo()}`

    this.output.push(construct.branch(label1, false))
    this.output.push(directive.label(label2))
    // True branch
    this.genStatBlock(atx.trueBranch, [head, ...tail])
    this.output.push(directive.label(label1))

    // Check condition
    this.genExpr(atx.condition, [head, ...tail])
    this.output.push(construct.compareTest(ARMOpcode.compare, head, '#1'))
    this.output.push(construct.branch(label2, false, ARMCondition.equal))
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
    this.output.push(directive.label(`f_${atx.identifier}`))
    this.output.push(construct.pushPop(ARMOpcode.push, [this.lr]))
    // We now deal with the children
    this.genStatBlock(atx.body, regList)
    if (atx.body.parserRule === WJSCParserRules.ConditionalWhile || WJSCParserRules.ConditionalIf) {
      this.ltorgCheck = false
    } else {
      this.output.push(tabSpace + directive.ltorg + '\n')
    }
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
        // TODO get declaration of parent and its parent's length
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
    if (this.decStackSize > 0) {
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
        const exprSize = getTypeSize(atx.expr.type)
        const expr2Size = getTypeSize(atx.expr2.type)
        this.output.push(construct.singleDataTransfer(ARMOpcode.load, this.resultReg, `=8`),
          directive.malloc(ARMOpcode.branchLink),
          construct.move(ARMOpcode.move, head, this.resultReg))
        this.genExpr(atx.expr, [next, ...tail])
        const sizeIsByte = exprSize === 1
        this.output.push(
          construct.singleDataTransfer(ARMOpcode.load, this.resultReg, `=${exprSize}`),
          directive.malloc(ARMOpcode.branchLink),
          construct.singleDataTransfer(ARMOpcode.store, next, `[${this.resultReg}]`, undefined, undefined, sizeIsByte),
          construct.singleDataTransfer(ARMOpcode.store, this.resultReg, `[${head}]`))
        this.genExpr(atx.expr2, [next, ...tail])
        const size2IsByte = expr2Size === 1
        this.output.push(
          construct.singleDataTransfer(ARMOpcode.load, this.resultReg, `=${expr2Size}`),
          directive.malloc(ARMOpcode.branchLink),
          construct.singleDataTransfer(ARMOpcode.store, next, `[${this.resultReg}]`, undefined, undefined, size2IsByte),
          construct.singleDataTransfer(ARMOpcode.store, this.resultReg, `[${head}, #4]`))
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
        const msgNo = this.msgCount
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
        const spOffset = this.symbolTable.getVarMemAddr(atx.value)
        const offsetString = spOffset ? `, #${spOffset}` : ''

        this.output.push(construct.singleDataTransfer(ARMOpcode.load, head, `[${this.sp}${offsetString}]`, undefined, undefined, sizeIsByte))
        break
      case WJSCParserRules.BinOp:
        this.genBinOp(atx, [head, next, ...tail])
        break
      case WJSCParserRules.Unop:
        this.genUnOp(atx, [head, next, ...tail])
        break
    }
  }

  public checkArrayOutOfBounds = () => {
    // Setting up the messages if not already set up
    this.errorPresent = true
    if (!this.data.includes(RuntimeError.negIndex)) {
      this.stringDec(RuntimeError.negIndex)
    }
    if (!this.data.includes(RuntimeError.largeIndex)) {
      this.stringDec(RuntimeError.largeIndex)
    }
    // check in instruction body itself
    this.output.push(construct.branch('p_check_array_bounds', true))
    // appending function to postFunc, if not already set up
    if (!this.postFunc.includes('p_check_array_bounds')) {
      // TODO: Actually call these functions?
      // TODO: Free pair and Free Array
      this.postFunc = this.postFunc.concat(directive.label('p_check_array_bounds'),
        construct.pushPop(ARMOpcode.push, [this.lr]),
        construct.compareTest(ARMOpcode.compare, Register.r0, directive.immNum(0)),
        construct.singleDataTransfer(ARMOpcode.load, Register.r0,
          `=msg_${this.findTrueMessageIndex(RuntimeError.negIndex)}`, ARMCondition.lessThan),
        construct.branch('p_throw_runtime_error', true, ARMCondition.lessThan),
        construct.singleDataTransfer(ARMOpcode.load, Register.r1, `[${Register.r1}]`),
        construct.compareTest(ARMOpcode.compare, Register.r0, Register.r1),
        construct.singleDataTransfer(ARMOpcode.load, Register.r0,
          `=msg_${this.findTrueMessageIndex(RuntimeError.largeIndex)}`, ARMCondition.unsignedHigherSame),
        construct.branch('p_throw_runtime_error', true, ARMCondition.unsignedHigherSame),
        construct.pushPop(ARMOpcode.pop, [this.pc]))

    }
  }

  public checkDivByZero = () => {
    this.errorPresent = true
    // Setting up the message if not already set up
    if (!this.data.includes(RuntimeError.divByZero)) {
      this.stringDec(RuntimeError.divByZero)
    }
    // check in instruction body itself
    this.output.push(construct.branch('p_check_divide_by_zero', true))
    this.output.push(construct.branch('__aeabi_idiv', true))
    // appending function to postFunc, if not already set up
    if (!this.postFunc.includes('p_check_divide_by_zero')) {
      this.postFunc = this.postFunc.concat(directive.label('p_check_divide_by_zero'),
        construct.pushPop(ARMOpcode.push, [this.lr]),
        construct.compareTest(ARMOpcode.compare, Register.r1, directive.immNum(0)),
        construct.singleDataTransfer(ARMOpcode.load, Register.r0,
          `=msg_${this.findTrueMessageIndex(RuntimeError.divByZero)}`, ARMCondition.equal),
        construct.branch('p_throw_runtime_error', true, ARMCondition.equal),
        construct.pushPop(ARMOpcode.pop, [this.pc]))
    }
  }

  public checkOverflow = () => {
    this.errorPresent = true
    // Setting up the message if not already set up
    if (!this.data.includes(RuntimeError.intOverFlow)) {
      this.stringDec(RuntimeError.intOverFlow)
    }
    // check in instruction body itself
    this.output.push(construct.branch('p_throw_overflow_error', true, ARMCondition.overflow))
    // appending function to postFunc
    if (!this.postFunc.includes('p_throw_overflow_error')) {
      this.postFunc = this.postFunc.concat(directive.label('p_throw_overflow_error'),
        construct.singleDataTransfer(ARMOpcode.load, Register.r0,
          `=msg_${this.findTrueMessageIndex(RuntimeError.intOverFlow)}`),
        construct.branch('p_throw_runtime_error', true))
    }
  }

  public checkNullPointer = () => {
    this.errorPresent = true
    // Setting up the message if not already set up
    if (!this.data.includes(RuntimeError.nullDeref)) {
      this.stringDec(RuntimeError.nullDeref)
    }
    // check in instruction body itself
    this.output.push(construct.branch('p_check_null_pointer', true))
    // appending function to postFunc
    if (!this.postFunc.includes('p_check_null_pointer')) {
      this.postFunc = this.postFunc.concat(directive.label('p_check_null_pointer'),
        construct.compareTest(ARMOpcode.compare, Register.r0, directive.immNum(0)),
        construct.singleDataTransfer(ARMOpcode.load, Register.r0,
          `=msg_${this.findTrueMessageIndex(RuntimeError.nullDeref)}`, ARMCondition.equal),
        construct.branch('p_throw_runtime_error', true, ARMCondition.equal),
        construct.pushPop(ARMOpcode.pop, [this.pc]))
    }
  }
  // Remember to have put the pair/ array into r0!
  public checkFreeNullPair = () => {
    this.errorPresent = true
    // Setting up the message if not already set up
    if (!this.data.includes(RuntimeError.nullDeref)) {
      this.stringDec(RuntimeError.nullDeref)
    }
    // check in instruction body itself
    this.output.push(construct.branch('p_free_pair', true))
    // appending function to postFunc
    if (!this.postFunc.includes('p_free_pair')) {
      this.postFunc = this.postFunc.concat(directive.label('p_free_pair'),
          construct.compareTest(ARMOpcode.compare, Register.r0, directive.immNum(0)),
          construct.singleDataTransfer(ARMOpcode.load, Register.r0,
              `=msg_${this.findTrueMessageIndex(RuntimeError.nullDeref)}`, ARMCondition.equal),
          construct.branch('p_throw_runtime_error', false, ARMCondition.equal),
          construct.pushPop(ARMOpcode.push, [Register.r0]),
          construct.singleDataTransfer(ARMOpcode.load, Register.r0, [Register.r0]),
          construct.branch('free', true),
          construct.singleDataTransfer(ARMOpcode.load, Register.r0, [this.sp]),
          construct.singleDataTransfer(ARMOpcode.load, Register.r0,
              `[${Register.r0}, ${directive.immNum(4)}]`),
          construct.branch('free', true),
          construct.pushPop(ARMOpcode.pop, [Register.r0]),
          construct.branch('free', true),
          construct.pushPop(ARMOpcode.pop, [this.pc]))
    }
  }
  // Remember to put the array to r0!
  public checkFreeNullArray = () => {
    this.errorPresent = true
    // Setting up the message if not already set up
    if (!this.data.includes(RuntimeError.nullDeref)) {
      this.stringDec(RuntimeError.nullDeref)
    }
    // check in instruction body itself
    this.output.push(construct.branch('p_free_array', true))
    // appending function to postFunc
    if (!this.postFunc.includes('p_free')) {
      this.postFunc = this.postFunc.concat(directive.label('p_free_array'),
          construct.pushPop(ARMOpcode.push, [this.lr]),
          construct.compareTest(ARMOpcode.compare, Register.r0, directive.immNum(0)),
          construct.singleDataTransfer(ARMOpcode.load, Register.r0,
              `=msg_${this.findTrueMessageIndex(RuntimeError.nullDeref)}`, ARMCondition.equal),
          construct.branch('p_throw_runtime_error', false, ARMCondition.equal),
          construct.branch('free', true),
          construct.pushPop(ARMOpcode.pop, [this.pc]))
    }
  }

  // Generate errors with appropriate message
  public throwError = () => {
    // Setting up the final message
    this.stringDec('%.*s\\0')
    // Setting up the error message
    this.postFunc = this.postFunc.concat(directive.label('p_throw_runtime_error'),
      construct.branch('p_print_string', true),
      construct.move(ARMOpcode.move, Register.r0, directive.immNum(-1)),
      construct.branch('exit', true),
      directive.label('p_print_string'),
      construct.pushPop(ARMOpcode.push, [this.lr]),
      construct.singleDataTransfer(ARMOpcode.load, Register.r1, `[${Register.r0}]`),
      construct.arithmetic(ARMOpcode.add, Register.r2, Register.r0, directive.immNum(4)),
      construct.singleDataTransfer(ARMOpcode.load, Register.r0,
        `=msg_${this.findTrueMessageIndex('%.*s\\0')}`),
      construct.arithmetic(ARMOpcode.add, Register.r0, Register.r0, directive.immNum(4)),
      construct.branch('printf', true),
      construct.move(ARMOpcode.move, Register.r0, directive.immNum(0)),
      construct.branch('fflush', true),
      construct.pushPop(ARMOpcode.pop, [this.pc]),
    )
  }

  // Helper function to get the position of a message in the data
  public findTrueMessageIndex = (searchTerm: string): number => {
    let foundIndex = 0
    this.data.forEach((child, index) => {
      if (child.includes(searchTerm)) {
        foundIndex = index - 1 // <- Because .data is counted as an elem
      }
    })
    return foundIndex
  }

  private stringDec = (symbol: string | number): number => this.data.push(
    'msg_' + this.msgCount++ + ':\n' + tabSpace +
    `.word ${directive.messageCharCount(symbol.toString() || '')}` +
    '\n' + tabSpace + directive.ascii(symbol.toString() || ''),
  )

  private getLabelNo = (): number => this.labelCount++

  // Find child table with the given table number
  private switchToChildTable = (tableNumber: number) => {
    const childTable = _.find(this.symbolTable.getChildrenTables(), (child) => child.getTableNumber() === tableNumber)
    if (childTable) {
      this.symbolTable = childTable
    } else {
      console.log(`Can't enter symbol table`)
    }
  }

  private switchToParentTable = () => {
    this.symbolTable = this.symbolTable.exitScope()
  }
}

export { WJSCCodeGenerator }
