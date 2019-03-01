import * as lodash from 'lodash'
import { EOL } from 'os'
import { WJSCSymbolTable } from '../frontend/WJSCSymbolTable'
import {
  WJSCArrayElem,
  WJSCAssignment,
  WJSCAssignRhs,
  WJSCAst,
  WJSCDeclare,
  WJSCExpr,
  WJSCFunction,
  WJSCParserRules,
  WJSCStatement,
} from '../util/WJSCAst'
import { BaseType, getTypeSize, hasSameType, isArrayType, isPairType } from '../util/WJSCType'
import {
  ARMAddress,
  ARMCondition,
  ARMOpcode,
  ARMOperand,
  ARMShiftname,
  Check,
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

  /* uwuwuwuwuwuwuwu MEMORY MANAGEMENT uwuwuwuwuwuwuwu */
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

  // Print functions
  private readonly PRINT_BOOL = 'p_print_bool'
  private readonly PRINT_STRING = 'p_print_string'
  private readonly PRINT_INT = 'p_print_int'
  private readonly PRINT_NEW_LINE = 'p_print_ln'
  private readonly PRINT_READ_INT = 'p_read_int'
  private readonly PRINT_READ_CHAR = 'p_read_char'
  private readonly PRINT_REFERENCE = 'p_print_reference'
  // Error functions
  private readonly THROW_RUNTIME_ERROR = 'p_throw_runtime_error'
  private readonly CHECK_DIVIDE_BY_ZERO = 'p_check_divide_by_zero'
  private readonly THROW_OVERFLOW_ERROR = 'p_throw_overflow_error'
  private readonly CHECK_NULL_POINTER = 'p_check_null_pointer'
  private readonly CHECK_FREE_NULL_PAIR = 'p_free_pair'
  private readonly CHECK_FREE_NULL_ARRAY = 'p_free_array'

  // Print info
  private printBoolTemp = undefined
  private checkingArray: number[] = []

  /* owowowowowowowowowowowowowowowowowowowowowowowowo */

  // TODO: Gen array elem for pair and arrays
  constructor(symbolTable: WJSCSymbolTable) {
    this.symbolTable = symbolTable
  }

  /* ------------- Print Management ---------------*/

  public pushCheck = (input: Check) => {
    if (!this.checkingArray.includes(input)) {
      this.checkingArray.push(input)
    }
  }

  public printBool = () => {
    const bool = this.printBoolTemp ? 'true\\0' : 'false\\0'
    const notBool = this.printBoolTemp ? 'false\\0' : 'true\\0'
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
    this.stringDec(bool)
  }

  public printString = () => {
    this.postFunc.push(directive.label(this.PRINT_STRING),
      construct.pushPop(ARMOpcode.push, [this.lr]),
      construct.singleDataTransfer(ARMOpcode.load, Register.r1, `[${this.resultReg}]`),
      construct.arithmetic(ARMOpcode.add, Register.r2, this.resultReg, directive.immNum(4)),
      construct.singleDataTransfer(ARMOpcode.load, this.resultReg, `=msg_${this.msgCount}`),
      construct.arithmetic(ARMOpcode.add, this.resultReg, this.resultReg, directive.immNum(4)),
      construct.branch(`printf`, true),
      construct.move(ARMOpcode.move, this.resultReg, directive.immNum(0)),
      construct.branch(`fflush`, true),
      construct.pushPop(ARMOpcode.pop, [this.pc]),
    )
  }

  public printLine = () => {
    this.postFunc.push(directive.label(this.PRINT_NEW_LINE),
      construct.pushPop(ARMOpcode.push, [this.lr]),
      construct.singleDataTransfer(ARMOpcode.load, this.resultReg, `=msg_${this.msgCount}`),
      construct.arithmetic(ARMOpcode.add, this.resultReg, this.resultReg, '#4'),
      construct.branch('puts', true),
      construct.move(ARMOpcode.move, this.resultReg, '#0'),
      construct.branch('fflush', true),
      construct.pushPop(ARMOpcode.pop, [this.pc]),
    )
  }

  public printInt = () => {
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
  }

  public printReadInt = () => {
    this.postFunc.push(directive.label(this.PRINT_READ_INT),
      construct.pushPop(ARMOpcode.push, [this.lr]),
      construct.move(ARMOpcode.move, Register.r1, this.resultReg),
      construct.singleDataTransfer(ARMOpcode.load, this.resultReg, `=msg_${this.msgCount}`),
      construct.arithmetic(ARMOpcode.add, this.resultReg, this.resultReg, `#4`),
      construct.branch(`scanf`, true),
      construct.pushPop(ARMOpcode.pop, [this.pc]),
    )
  }

  public printReadChar = () => {
    this.postFunc.push(directive.label(this.PRINT_READ_CHAR),
      construct.pushPop(ARMOpcode.push, [this.lr]),
      construct.move(ARMOpcode.move, Register.r1, this.resultReg),
      construct.singleDataTransfer(ARMOpcode.load, this.resultReg, `=msg_${this.msgCount}`),
      construct.arithmetic(ARMOpcode.add, this.resultReg, this.resultReg, `#4`),
      construct.branch(`scanf`, true),
      construct.pushPop(ARMOpcode.pop, [this.pc]),
    )
  }

  public printReference = () => {
    this.postFunc.push(directive.label(this.PRINT_REFERENCE),
        construct.pushPop(ARMOpcode.push, [this.lr]),
        construct.move(ARMOpcode.move, Register.r1, Register.r0),
        construct.singleDataTransfer(ARMOpcode.load, Register.r0, `=msg_${this.msgCount}`),
        construct.arithmetic(ARMOpcode.add, Register.r0, Register.r0, directive.immNum(4)),
        construct.branch('printf', true),
        construct.move(ARMOpcode.move, Register.r0, directive.immNum(0)),
        construct.branch('fflush', true),
        construct.pushPop(ARMOpcode.pop, [this.pc]),
        )
  }

  public checkNullPointer = () => {
    this.errorPresent = true
    // Setting up the message if not already set up
    if (!this.data.includes(RuntimeError.nullDeref)) {
      this.stringDec(RuntimeError.nullDeref)
    }
    // appending function to postFunc
    this.postFunc = this.postFunc.concat(directive.label(this.CHECK_NULL_POINTER),
      construct.pushPop(ARMOpcode.push, [this.lr]),
      construct.compareTest(ARMOpcode.compare, Register.r0, directive.immNum(0)),
      construct.singleDataTransfer(ARMOpcode.load, Register.r0,
        `=msg_${this.findTrueMessageIndex(RuntimeError.nullDeref)}`, ARMCondition.equal),
      construct.branch(this.THROW_RUNTIME_ERROR, true, ARMCondition.equal),
      construct.pushPop(ARMOpcode.pop, [this.pc]))
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

  public move = (size: number, rd: Register, operand: ARMOperand, condition?: ARMCondition) => {
    this.setRegSize(rd, size)
    this.output.push(construct.move(ARMOpcode.move, rd, operand, condition))
  }

  // load
  public load = (size: number, rd: Register, address: ARMAddress,
    condition?: ARMCondition, modifier?: 'H' | 'SB' | 'SH') => {
    this.setRegSize(rd, size)
    this.output.push(construct.singleDataTransfer(ARMOpcode.load, rd, address, condition, modifier))
  }

  public sizeGen = (atx: WJSCAst, calledByArray: boolean): number => {
    let typeSize = 0
    switch (atx.type) {
      case BaseType.Boolean:
      case BaseType.Character:
        typeSize = 1
        break
      case BaseType.Integer:
      case BaseType.String:
        typeSize = 4
        break
      default:
        if (isPairType(atx.type)) {
          typeSize = (calledByArray ? 4 : 8)
        } else if (isArrayType(atx.type)) {
          typeSize = 4
        }
    }
    return typeSize
  }

  public genBinOp = (atx: WJSCExpr, regList: Register[]) => {
    const [head, next, ...tail] = regList
    // TODO check for running out of registers for expr 2
    this.genExpr(atx.expr1, regList)
    this.genExpr(atx.expr2, [next, ...tail])

    switch (atx.operator.token) {
      case '*':
        this.output.push(construct.multiplyLong(true, head, next, head, next))
        const operand: ARMOperand = [head, [ARMShiftname.arithmeticShiftRight, '#31']]
        this.output.push(construct.compareTest(ARMOpcode.compare, next, operand))
        this.checkOverflow(ARMCondition.nequal)
        break
      case '/':
        this.move(getTypeSize(atx.type), this.resultReg, head)
        this.move(getTypeSize(atx.type), Register.r1, next)
        this.checkDivByZero(false)
        this.move(getTypeSize(atx.type), head, this.resultReg)
        break
      case '%':
        this.move(getTypeSize(atx.type), this.resultReg, head)
        this.move(getTypeSize(atx.type), Register.r1, next)
        this.checkDivByZero(true)
        this.move(getTypeSize(atx.type), head, Register.r1)
        break
      case '+':
        this.output.push(construct.arithmetic(ARMOpcode.add, head, head, next, undefined, true))
        this.checkOverflow(ARMCondition.overflow)
        break
      case '-':
        this.output.push(construct.arithmetic(ARMOpcode.subtract, head, head, next, undefined, true))
        this.checkOverflow(ARMCondition.overflow)
        break
      case '>':
        this.output.push(construct.compareTest(ARMOpcode.compare, head, next),
          construct.move(ARMOpcode.move, head, `#1`, ARMCondition.greaterThan),
          construct.move(ARMOpcode.move, head, `#0`, ARMCondition.lessEqual),
        )
        break
      case '>=':
        this.output.push(construct.compareTest(ARMOpcode.compare, head, next),
          construct.move(ARMOpcode.move, head, `#1`, ARMCondition.greaterEqual),
          construct.move(ARMOpcode.move, head, `#0`, ARMCondition.lessThan),
        )
        break
      case '<':
        this.output.push(construct.compareTest(ARMOpcode.compare, head, next),
          construct.move(ARMOpcode.move, head, `#1`, ARMCondition.lessThan),
          construct.move(ARMOpcode.move, head, `#0`, ARMCondition.greaterEqual),
        )
        break
      case '<=':
        this.output.push(construct.compareTest(ARMOpcode.compare, head, next),
          construct.move(ARMOpcode.move, head, `#1`, ARMCondition.lessEqual),
          construct.move(ARMOpcode.move, head, `#0`, ARMCondition.greaterThan),
        )
        break
      case '==':
        this.output.push(construct.compareTest(ARMOpcode.compare, head, next),
          construct.move(ARMOpcode.move, head, `#1`, ARMCondition.equal),
          construct.move(ARMOpcode.move, head, `#0`, ARMCondition.nequal),
        )
        break
      case '!=':
        this.output.push(construct.compareTest(ARMOpcode.compare, head, next),
          construct.move(ARMOpcode.move, head, `#1`, ARMCondition.nequal),
          construct.move(ARMOpcode.move, head, `#0`, ARMCondition.equal),
        )
        break
      case '&&':
        this.output.push(construct.logical(ARMOpcode.and, head, head, next))
        break
      case '||':
        this.output.push(construct.logical(ARMOpcode.or, head, head, next))
        break
    }
  }

  public genUnOp = (atx: WJSCExpr, regList: Register[]) => {
    const [head, next] = regList
    this.genExpr(atx.expr1, regList)
    switch (atx.operator.token) {
      case '!':
        this.output.push(construct.logical(ARMOpcode.exclusiveOr, head, head, '#1'))
        break
      case '-':
        this.output.push(construct.arithmetic(ARMOpcode.reverseSubtract, head, head, `#0`))
        break
      case 'len':
        let offset: any = 0
        if (isArrayType(atx.expr1.type)) {
          offset = this.symbolTable.getVarMemAddr(atx.expr1.token)
        } else if (hasSameType(atx.expr1.type, BaseType.String)) {
          offset = `=msg_${this.symbolTable.getMsgNum(atx.value)}`
        }
        this.output.push(construct.singleDataTransfer(ARMOpcode.load, head, `[${head}]`))
        break
      case 'ord':
        break
      case 'chr':
        break
    }
  }

  // For genArray Literal
  public genArray = (atx: WJSCAst, list: Register[]) => {
    const children = atx.children
    const typeSize = (children.length !== 0) ? this.sizeGen(atx.children[0], true) : 0
    const size = (children.length * typeSize) + 4   // 4 being the array size
    // Setup for array
    const itemUsed = this.nextRegister(list)
    this.load(4, Register.r0, `=${size}`) // <- 4 refers to size of int type (for size)
    this.output = this.output.concat([directive.malloc(ARMOpcode.branchLink),
                                      construct.move(ARMOpcode.move, itemUsed, Register.r0)])
    let present: Register[] = []
    if (list.includes(itemUsed)) {
      const [head, ...tail] = list
      present = tail
    }
    // loading in elements
    const nextItem = this.nextRegister(present)
    let future: Register[] = []
    if (present.includes(nextItem)) {
      const [head, ...tail] = present
      future = tail
    }
    children.forEach((child, index) => {
      this.genExpr(child as WJSCExpr, present)
      // Then we need to store the values
      let params
      switch (child.type) {
        case BaseType.Integer:
          params = `[${itemUsed}, ${directive.immNum(typeSize * (index + 1))}]`
          this.output.push(construct.singleDataTransfer(ARMOpcode.store, nextItem, params))
          break
        case BaseType.Boolean:
        case BaseType.Character:
          params = `[${itemUsed}, ${directive.immNum(4 + typeSize * (index))}]`
          this.output.push(construct.singleDataTransfer(ARMOpcode.store, nextItem, params, undefined, undefined, true))
          break
        case BaseType.String:
          break
        default:
          if (isArrayType(child.type)) {
            // Array type
            params = `[${itemUsed}, ${directive.immNum(4 + typeSize * (index))}]`
            this.output.push(construct.singleDataTransfer(ARMOpcode.store, nextItem, params))
          } else if (isPairType(child.type)) {
            // Pair type
            params = `[${itemUsed}, ${directive.immNum(4 + typeSize * (index))}]`
            this.output.push(construct.singleDataTransfer(ARMOpcode.store, nextItem, params))
          }
          break
      }
    })
    // Load argument size
    this.load(4, nextItem, `=${children.length}`)
    // Store r+1 to r
    this.output.push(construct.singleDataTransfer(ARMOpcode.store, nextItem, `[${itemUsed}]`))
  }

  public genArrayElem = (atx: WJSCAst , list: Register[]) => {
    const size = this.sizeGen(atx, false)
    const dimensions = (atx.children[0] as WJSCArrayElem).specificInd
    const itemUsed = this.nextRegister(list)
    let future: Register[] = []
    if (list.includes(itemUsed)) {
      const [head, ...tail] = list
      future = tail
    }
    const nextItem = this.nextRegister(future)
    /* :(
    if (list.includes(nextItem)) {
      list.shift()
    }*/
    dimensions.forEach((currDim, index) => {
      this.output.push(construct.arithmetic(ARMOpcode.add, itemUsed, this.sp, directive.immNum(index * size)))
      this.genExpr(currDim, future)
      this.load(this.getRegSize(itemUsed), itemUsed, `[${itemUsed}]`)
      this.move(this.getRegSize(nextItem), Register.r0, nextItem)
      this.move(this.getRegSize(itemUsed), Register.r1, itemUsed)
    })
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
    // Add error warning if there is potential for RE

    this.postFuncEnumCheck()
    if (this.errorPresent) {
      this.throwError()
    }

    if (this.msgCount > 0) {
      result = this.data.concat('', this.output)
    }

    return result.concat(this.postFunc)
  }

  public postFuncEnumCheck = () => {
    this.checkingArray.forEach((item) => {
      this.enumSwitch(item)
    })
    console.log(this.checkingArray)
  }

  public enumSwitch = (check: Check) => {
    switch (check) {
      case Check.printlnString:
        this.stringDec('%.*s\\0')
        break
      case Check.printBool:
        this.printBool()
        break
      case Check.printInt:
        this.printInt()
        this.stringDec('%d\\0')
        break
      case Check.printReadChar:
        this.printReadChar()
        this.stringDec(' %c\\0')
        break
      case Check.printReadInt:
        this.printReadInt()
        this.stringDec('%d\\0')
        break
      case Check.printNewLn:
        this.printLine()
        this.stringDec('\\0')
        break
      case Check.printString:
        this.printString()
        break
      case Check.printRef:
        this.printReference()
        this.stringDec('%p\\0')
        break
      case Check.printNullRef:
        this.checkNullPointer()
        break
    }
  }

  public genStatBlock = (statements: WJSCStatement, regList: Register[]) => {
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

  public traverseStat = (atx: WJSCStatement, reglist: Register[]) => {
    const [head] = reglist
    switch (atx.parserRule) {
      case WJSCParserRules.Skip:
        // Skip does nothing
        break
      case WJSCParserRules.Exit:
        // Load exit code then call exit
        this.genExpr(atx.stdlibExpr, reglist)
        this.output.push(construct.move(ARMOpcode.move, this.resultReg, head),
          construct.branch('exit', true))
        break
      case WJSCParserRules.Declare:
        this.genDeclare(atx.declaration, reglist)
        break
      case WJSCParserRules.Assignment:
        this.genAssignment(atx.assignment, reglist)
        break
      case WJSCParserRules.Sequential:
        this.traverseStat(atx.stat, reglist)
        this.traverseStat(atx.nextStat, reglist)
        break
      case WJSCParserRules.ConditionalIf:
        this.genConditionalIf(atx, reglist)
        break
      case WJSCParserRules.ConditionalWhile:
        this.genCondWhile(atx, reglist)
        break
      case WJSCParserRules.Print:
        this.genExpr(atx.stdlibExpr, reglist)
        this.printBaseType(atx.stdlibExpr, reglist)
        if (hasSameType(atx.stdlibExpr.type, BaseType.String)) {
          this.pushCheck(Check.printlnString)
        }
        break
      case WJSCParserRules.Println:
        this.genExpr(atx.stdlibExpr, reglist)
        this.printBaseType(atx.stdlibExpr, reglist)
        this.output.push(construct.branch(this.PRINT_NEW_LINE, true))
        if (hasSameType(atx.stdlibExpr.type, BaseType.String)) {
          this.pushCheck(Check.printlnString)
        }
        this.pushCheck(Check.printNewLn)
        break
      case WJSCParserRules.Scope:
        this.switchToChildTable(atx.tableNumber)
        this.traverseStat(atx.stat, reglist)
        this.switchToParentTable()
        break
      case WJSCParserRules.Read:
        this.output.push(construct.arithmetic(ARMOpcode.add, head, this.sp, '#0'))
        this.move(this.getRegSize(head), this.resultReg, head)
        if (atx.readType === BaseType.Integer) {
          this.output.push(construct.branch(this.PRINT_READ_INT, true))
          this.pushCheck(Check.printReadInt)
        } else {
          this.output.push(construct.branch(this.PRINT_READ_CHAR, true))
          this.pushCheck(Check.printReadChar)
        }
        break
      case WJSCParserRules.Free:
        // Push result to r0 and call appropriate free
        this.load(this.getRegSize(this.lr), head, `[${this.sp}]`)
        this.move(this.getRegSize(head), this.resultReg, head)
        if (isArrayType(atx.children[1].type)) {
          this.checkFreeNullArray()
        } else if (isPairType(atx.children[1].type)) {
          this.checkFreeNullPair()
        }
        break
      case WJSCParserRules.Return:
        this.genExpr(atx.stdlibExpr, reglist)
        this.output.push(construct.move(ARMOpcode.move, Register.r0, head))
        break
    }
  }

  public printBaseType = (atx: WJSCExpr, [head]: Register[]) => {
    this.move(getTypeSize(atx.type), this.resultReg, head)
    if (atx.parserRule === WJSCParserRules.Identifier) {
      this.printFromIdent(atx)
    } else {
      switch (atx.type) {
        case BaseType.Integer:
          this.output.push(construct.branch(this.PRINT_INT, true))
          this.pushCheck(Check.printInt)
          break
        case BaseType.String:
          this.output.push(construct.branch(this.PRINT_STRING, true))
          this.pushCheck(Check.printString)
          break
        case BaseType.Boolean:
          this.output.push(construct.branch(this.PRINT_BOOL, true))
          this.pushCheck(Check.printBool)
          this.printBoolTemp = atx.value
          break
        case BaseType.Character:
          this.output.push(construct.branch(`putchar`, true))
          break
        default:
          if (isArrayType(atx.type) || isPairType(atx.type)) {
            this.output.push(construct.branch(this.PRINT_REFERENCE, true))
            this.pushCheck(Check.printRef)
          }
      }
    }
    // TODO printing of array and pairs
  }

  public printFromIdent = (atx: WJSCExpr) => {
    const type = this.symbolTable.lookup(atx.value)
    switch (type) {
      case BaseType.Integer:
        this.output.push(construct.branch(this.PRINT_INT, true))
        this.pushCheck(Check.printInt)
        break
      case BaseType.String:
        this.output.push(construct.branch(this.PRINT_STRING, true))
        this.pushCheck(Check.printString)
        break
      case BaseType.Character:
        this.output.push(construct.branch(`putchar`, true))
        break
      case BaseType.Boolean:
        this.output.push(construct.branch(this.PRINT_BOOL, true))
        this.printBoolTemp = atx.value
        this.pushCheck(Check.printBool)
        break
      default:
        if (isArrayType(type) || isPairType(type)) {
          this.output.push(construct.branch(this.PRINT_REFERENCE, true))
          this.pushCheck(Check.printRef)
        }
    }
  }

  public genConditionalIf = (atx: WJSCStatement, regList: Register[]) => {
    const [head] = regList
    this.genExpr(atx.condition, regList)
    this.output.push(construct.compareTest(ARMOpcode.compare, head, '#0'))

    const label1 = `L${this.getLabelNo()}`
    const label2 = `L${this.getLabelNo()}`
    // TODO change symbol table with scope
    // Jump to label1 if false
    this.output.push(construct.branch(label1, false, ARMCondition.equal))
    // True body
    this.genStatBlock(atx.trueBranch, regList)
    this.output.push(construct.branch(label2, false))
    this.output.push(directive.label(label1))
    // False body
    this.genStatBlock(atx.falseBranch, regList)
    this.output.push(directive.label(label2))
  }

  public genCondWhile = (atx: WJSCStatement, regList: Register[]) => {
    const [head] = regList
    const label1 = `L${this.getLabelNo()}`
    const label2 = `L${this.getLabelNo()}`

    this.output.push(construct.branch(label1, false))
    this.output.push(directive.label(label2))
    // True branch
    this.genStatBlock(atx.trueBranch, regList)
    this.output.push(directive.label(label1))

    // Check condition
    this.genExpr(atx.condition, regList)
    this.output.push(construct.compareTest(ARMOpcode.compare, head, '#1'))
    this.output.push(construct.branch(label2, false, ARMCondition.equal))
  }

  public flattenSequential = (atx: WJSCStatement): WJSCStatement[] => {
    const stats = []
    let curr = atx
    while (curr.parserRule === WJSCParserRules.Sequential) {
      stats.unshift(curr.nextStat)
      curr = curr.stat
    }
    stats.unshift(curr)
    return stats
  }

  public genFunc = (atx: WJSCFunction, regList: Register[]) => {
    this.output.push(directive.label(`f_${atx.identifier}`),
      construct.pushPop(ARMOpcode.push, [this.lr]))
    // We now deal with the children
    this.genStatBlock(atx.body, regList)
    this.output.push(construct.pushPop(ARMOpcode.pop, [this.pc]),
      construct.pushPop(ARMOpcode.pop, [this.pc]))
    if (atx.body.parserRule === WJSCParserRules.ConditionalWhile || atx.body.parserRule === WJSCParserRules.ConditionalIf) {
      this.ltorgCheck = false
    } else {
      this.output.push(tabSpace + directive.ltorg)
    }
  }

  public genAssignment = (atx: WJSCAssignment, registers: Register[]) => {
    this.genAssignRhs(atx.rhs, registers)
    this.genAssignLhs(atx.lhs, registers)
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
        this.genArrayElem(atx, [head, ...tail])
        break
      }
      case WJSCParserRules.Pair: {
        break
      }
    }
  }

  public genDeclare = (atx: WJSCDeclare, regList: Register[]) => {
    const [head, tail] = regList
    const type = atx.type
    const rhs = atx.rhs
    const id = atx.identifier

    const typeSize = getTypeSize(type)
    const sizeIsByte = typeSize === 1

    // TODO add cases for pairs and arrays

    // Load rhs expression into 'head' register
    this.genAssignRhs(rhs, regList)
    this.decStackSize -= typeSize
    this.symbolTable.setVarMemAddr(id, this.decStackSize)
    if (hasSameType(type, BaseType.String)) {
      this.symbolTable.setMsgNum(id, this.msgCount - 1)
    }
    // Save content of 'head' to memory
    if (this.decStackSize > 0) {
      this.output.push(construct.singleDataTransfer(ARMOpcode.store, head, `[${this.sp}, ${directive.immNum(this.decStackSize)}]`, undefined, undefined, sizeIsByte))
    } else {
      this.output.push(construct.singleDataTransfer(ARMOpcode.store, head, `[${this.sp}]`, undefined, undefined, sizeIsByte))
    }
  }

  public genAssignRhs = (atx: WJSCAssignRhs, regList: Register[]) => {
    const [head, next, ...tail] = regList
    switch (atx.parserRule) {
      case WJSCParserRules.Expression:
        this.genExpr(atx.expr, regList)
        break
      case WJSCParserRules.ArrayLiteral:
        this.genArray(atx.arrayLiter, regList)
        break
      case WJSCParserRules.Newpair:
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
        // this is code this.load(this.getRegSize(head), head, `[${this.sp}, #${this.totalStackSize - 4}]`)
        // this.move(this.getRegSize(this.resultReg), this.resultReg, head)
        this.output.push(construct.branch(this.CHECK_NULL_POINTER, true))
        this.pushCheck(Check.printNullRef)
        // this is code this.load(this.getRegSize(head), head, `[${this.sp}, #${atx.pointer}]`)
        // this.output.push(construct.singleDataTransfer(ARMOpcode.storeBoolean, head, `[${head}]`, undefined, 'SB'))
        break
      case WJSCParserRules.FunctionCall:
        /* Determine the number of arguments required for the function call */
        const argv = (atx.argList || [])
        const argc = argv.length
        /* Setup the stack */
        argv.reverse().forEach((arg: WJSCExpr) => {
          this.genExpr(arg, regList)
          this.output.push(construct.singleDataTransfer(ARMOpcode.store, head, ['pre', this.sp, directive.immNum(-4)], undefined, undefined, undefined, undefined, true))
        })
        this.output.push(construct.branch(`f_${atx.ident}`, true))
        if (argc > 0) {
          this.output.push(construct.arithmetic(ARMOpcode.add, this.sp, this.sp, directive.immNum(argc * 4)))
        }
        this.move(this.getRegSize(Register.r0), head, Register.r0)
    }
  }

  public genExpr = (atx: WJSCExpr, regList: Register[], set: boolean = false) => {
    const [head, next] = regList
    let value = atx.value
    switch (atx.parserRule) {
      case WJSCParserRules.IntLiteral:
        this.output.push(construct.singleDataTransfer(ARMOpcode.load, head, `=${value}`))
        break
      case WJSCParserRules.BoolLiter:
        value = atx.value ? 1 : 0
        this.move(1, head, directive.immNum(value))
        break
      case WJSCParserRules.CharLiter:
        if (value.toString()[0] === '\\') {
          value = value.toString()[1]
          this.output.push(construct.move(ARMOpcode.move, head, `#${value}`))
        } else {
          this.output.push(construct.move(ARMOpcode.move, head, `#'${value}'`))
        }
        break
      case WJSCParserRules.StringLiter:
        this.output.push(construct.singleDataTransfer(ARMOpcode.load, head, `=msg_` + this.msgCount))
        this.stringDec(atx.value)
        break
      case WJSCParserRules.PairLiter:
        this.output.push(construct.singleDataTransfer(ARMOpcode.load, head, `=0`))
        break
      case WJSCParserRules.Identifier:
        const typeSize = getTypeSize(atx.type)
        const sizeIsByte = typeSize === 1
        const spOffset = this.symbolTable.getVarMemAddr(atx.value)
        const offsetString = spOffset ? `, #${spOffset}` : ''
        const identType = this.symbolTable.lookup(atx.value)
        if (identType === BaseType.Character || identType === BaseType.Boolean) {
          this.output.push(construct.singleDataTransfer(ARMOpcode.load, head, `[${this.sp}${offsetString}]`, undefined, 'SB', false))
        } else {
          this.output.push(construct.singleDataTransfer(ARMOpcode.load, head, `[${this.sp}${offsetString}]`, undefined, undefined, sizeIsByte))
        }
        break
      case WJSCParserRules.ArrayElem:
        this.genArrayElem(atx, regList)
        this.checkArrayOutOfBounds()
        this.output.push(construct.arithmetic(ARMOpcode.add, head, head, directive.immNum(4)))
        if (atx.type === BaseType.Character || atx.type === BaseType.Boolean) {
          this.output.push(construct.arithmetic(ARMOpcode.add, head, head, next))
          this.load(this.getRegSize(head), head, `[${head}]`, undefined, 'SB')
        } else {
          this.output.push(construct.arithmetic(ARMOpcode.add, head, head, next, undefined, false,
              ARMShiftname.logicalShiftLeft, directive.immNum(2)))
          this.load(this.getRegSize(head), head, `[${head}]`)
        }
        break
      case WJSCParserRules.BinOp:
        this.genBinOp(atx, regList)
        break
      case WJSCParserRules.Unop:
        this.genUnOp(atx, regList)
        break
    }
  }

  /* ------------- ERROR MANAGEMENT --------------*/

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
      this.postFunc = this.postFunc.concat(directive.label('p_check_array_bounds'),
        construct.pushPop(ARMOpcode.push, [this.lr]),
        construct.compareTest(ARMOpcode.compare, Register.r0, directive.immNum(0)),
        construct.singleDataTransfer(ARMOpcode.load, Register.r0,
          `=msg_${this.findTrueMessageIndex(RuntimeError.negIndex)}`, ARMCondition.lessThan),
        construct.branch(this.THROW_RUNTIME_ERROR, true, ARMCondition.lessThan),
        construct.singleDataTransfer(ARMOpcode.load, Register.r1, `[${Register.r1}]`),
        construct.compareTest(ARMOpcode.compare, Register.r0, Register.r1),
        construct.singleDataTransfer(ARMOpcode.load, Register.r0,
          `=msg_${this.findTrueMessageIndex(RuntimeError.largeIndex)}`, ARMCondition.unsignedHigherSame),
        construct.branch(this.THROW_RUNTIME_ERROR, true, ARMCondition.unsignedHigherSame),
        construct.pushPop(ARMOpcode.pop, [this.pc]))

    }
  }

  public checkDivByZero = (mod: boolean) => {
    this.errorPresent = true
    // Setting up the message if not already set up
    if (!this.data.includes(RuntimeError.divByZero)) {
      this.stringDec(RuntimeError.divByZero)
    }
    // check in instruction body itself
    this.output.push(construct.branch(this.CHECK_DIVIDE_BY_ZERO, true))
    const divCheck = mod ? '__aeabi_idivmod' : '__aeabi_idiv'
    this.output.push(construct.branch(divCheck, true))
    // appending function to postFunc, if not already set up
    if (!this.postFunc.includes(this.CHECK_DIVIDE_BY_ZERO)) {
      this.postFunc = this.postFunc.concat(directive.label(this.CHECK_DIVIDE_BY_ZERO),
        construct.pushPop(ARMOpcode.push, [this.lr]),
        construct.compareTest(ARMOpcode.compare, Register.r1, directive.immNum(0)),
        construct.singleDataTransfer(ARMOpcode.load, Register.r0,
          `=msg_${this.findTrueMessageIndex(RuntimeError.divByZero)}`, ARMCondition.equal),
        construct.branch(this.THROW_RUNTIME_ERROR, true, ARMCondition.equal),
        construct.pushPop(ARMOpcode.pop, [this.pc]))
    }
  }

  public checkOverflow = (condition: ARMCondition) => {
    this.errorPresent = true
    // Setting up the message if not already set up
    if (!this.data.includes(RuntimeError.intOverFlow)) {
      this.stringDec(RuntimeError.intOverFlow)
    }
    // check in instruction body itself
    this.output.push(construct.branch(this.THROW_OVERFLOW_ERROR, true, condition))
    // appending function to postFunc
    if (!this.postFunc.includes(this.THROW_OVERFLOW_ERROR)) {
      this.postFunc.push(directive.label(this.THROW_OVERFLOW_ERROR),
        construct.singleDataTransfer(ARMOpcode.load, Register.r0,
          `=msg_${this.findTrueMessageIndex(RuntimeError.intOverFlow)}`),
        construct.branch(this.THROW_RUNTIME_ERROR, true))
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
    this.output.push(construct.branch(this.CHECK_FREE_NULL_PAIR, true))
    // appending function to postFunc
    if (!this.postFunc.includes(this.CHECK_FREE_NULL_PAIR)) {
      this.postFunc = this.postFunc.concat(directive.label(this.CHECK_FREE_NULL_PAIR),
          construct.pushPop(ARMOpcode.push, [this.lr]),
          construct.compareTest(ARMOpcode.compare, Register.r0, directive.immNum(0)),
          construct.singleDataTransfer(ARMOpcode.load, Register.r0,
              `=msg_${this.findTrueMessageIndex(RuntimeError.nullDeref)}`, ARMCondition.equal),
          construct.branch(this.THROW_RUNTIME_ERROR, false, ARMCondition.equal),
          construct.pushPop(ARMOpcode.push, [Register.r0]),
          construct.singleDataTransfer(ARMOpcode.load, Register.r0, `[${Register.r0}]`),
          construct.branch('free', true),
          construct.singleDataTransfer(ARMOpcode.load, Register.r0, `[${this.sp}]`),
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
    this.output.push(construct.branch(this.CHECK_FREE_NULL_ARRAY, true))
    // appending function to postFunc
    if (!this.postFunc.includes(this.CHECK_FREE_NULL_ARRAY)) {
      this.postFunc = this.postFunc.concat(directive.label(this.CHECK_FREE_NULL_ARRAY),
          construct.pushPop(ARMOpcode.push, [this.lr]),
          construct.compareTest(ARMOpcode.compare, Register.r0, directive.immNum(0)),
          construct.singleDataTransfer(ARMOpcode.load, Register.r0,
              `=msg_${this.findTrueMessageIndex(RuntimeError.nullDeref)}`, ARMCondition.equal),
          construct.branch(this.THROW_RUNTIME_ERROR, false, ARMCondition.equal),
          construct.branch('free', true),
          construct.pushPop(ARMOpcode.pop, [this.pc]))
    }
  }

  // Generate errors with appropriate message
  public throwError = () => {
    // Setting up the final message
    // I don't think that you need this :       this.stringDec('%.*s\\0')
    // Setting up the error message
    this.postFunc = this.postFunc.concat(directive.label(this.THROW_RUNTIME_ERROR),
      construct.branch('p_print_string', true),
      construct.move(ARMOpcode.move, Register.r0, directive.immNum(-1)),
      construct.branch('exit', true),
    )
    if (!this.checkingArray.includes(Check.printString)) {
      this.msgCount--
      this.printString()
    }
  }

  /* -----------------------------------------*/

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
    const childTable = lodash.find(this.symbolTable.getChildrenTables(), (child) => child.getTableNumber() === tableNumber)
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
