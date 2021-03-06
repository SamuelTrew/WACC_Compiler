import { EOL } from 'os'
import { WJSCSymbolTable } from '../frontend/WJSCSymbolTable'
import {
  WJSCArrayElem,
  WJSCAssignLhs,
  WJSCAssignment,
  WJSCAssignRhs,
  WJSCAst,
  WJSCDeclare,
  WJSCExpr,
  WJSCFunction,
  WJSCIdentifier,
  WJSCPairElem,
  WJSCParserRules,
  WJSCStatement,
} from '../util/WJSCAst'
import {
  BaseType,
  getTypeSize,
  hasSameType,
  isArrayType,
  isPairType,
} from '../util/WJSCType'
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

  /* ---------------- MEMORY MANAGEMENT -------------- */
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
  private msgCount = 0
  private labelCount = 0
  private currSpOffset = 0
  private stackPointer = 0
  private ltorgCheck = true

  private outOfRegScope = 0
  private borrowReg: Register[] = []
  private borrowDestroy = true

  private returnOffsets: string[] = []

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
  // Other macros
  private readonly MAX_SP_OFFSET = 1024

  // Print info
  private printBoolTemp = undefined
  private checkingArray: number[] = []

  /* ---------------------------------------------- */

  constructor(symbolTable: WJSCSymbolTable) {
    this.symbolTable = symbolTable
  }

  /* ------------- Print Management ---------------*/

  // Checks whether or not the Check enum item is already in the array to avoid duplicates
  public pushCheck = (input: Check) => {
    if (!this.checkingArray.includes(input)) {
      this.checkingArray.push(input)
    }
  }

  // Generates the code for bool printing
  public printBool = () => {
    let bool = this.printBoolTemp ? 'true\\0' : 'false\\0'
    const notBool = this.printBoolTemp ? 'false\\0' : 'true\\0'
    this.postFunc.push(this.PRINT_BOOL + ':',
      construct.pushPop(ARMOpcode.push, [this.lr]),
      construct.compareTest(ARMOpcode.compare, this.resultReg, `#0`),
      construct.singleDataTransfer(ARMOpcode.load, this.resultReg, `=msg_${this.msgCount}`, ARMCondition.nequal),
    )
    if (this.printBoolTemp) {
      this.stringDec(bool)
      bool = notBool
    } else {
      this.stringDec(notBool)
    }
    this.postFunc.push(construct.singleDataTransfer(ARMOpcode.load, this.resultReg, `=msg_${this.msgCount}`, ARMCondition.equal),
      construct.arithmetic(ARMOpcode.add, this.resultReg, this.resultReg, `#4`),
      construct.branch(`printf`, true),
      construct.move(ARMOpcode.move, this.resultReg, `#0`),
      construct.branch(`fflush`, true),
      construct.pushPop(ARMOpcode.pop, [this.pc]),
    )
    this.stringDec(bool)
  }

  // Generates the code for string printing
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

  // Generates the code to print a new line
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

  // Generates the code for int printing
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

  // Generates the code for read int printing
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

  // Generates the code for read char printing
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

  // Generates the code for reference printing
  public printReference = () => {
    this.postFunc.push(directive.label(this.PRINT_REFERENCE),
      construct.pushPop(ARMOpcode.push, [this.lr]),
      construct.move(ARMOpcode.move, Register.r1, this.resultReg),
      construct.singleDataTransfer(ARMOpcode.load, this.resultReg, `=msg_${this.msgCount}`),
      construct.arithmetic(ARMOpcode.add, this.resultReg, this.resultReg, directive.immNum(4)),
      construct.branch('printf', true),
      construct.move(ARMOpcode.move, this.resultReg, directive.immNum(0)),
      construct.branch('fflush', true),
      construct.pushPop(ARMOpcode.pop, [this.pc]),
    )
  }

  public checkNullPointer = () => {
    this.errorPresent = true
    // Setting up the message if not already set up
    if (this.findTrueMessageIndex(RuntimeError.nullDeref) < 0) {
      this.stringDec(RuntimeError.nullDeref)
    }
    // instructions in body itself
    // appending function to postFunc
    this.postFunc = this.postFunc.concat(directive.label(this.CHECK_NULL_POINTER),
      construct.pushPop(ARMOpcode.push, [this.lr]),
      construct.compareTest(ARMOpcode.compare, this.resultReg, directive.immNum(0)),
      construct.singleDataTransfer(ARMOpcode.load, this.resultReg,
        `=msg_${this.findTrueMessageIndex(RuntimeError.nullDeref)}`, ARMCondition.equal),
      construct.branch(this.THROW_RUNTIME_ERROR, true, ARMCondition.equal),
      construct.pushPop(ARMOpcode.pop, [this.pc]))
  }
  /* ------------------------------------------- */
  /* -----------REGISTER MANAGEMENT------------- */

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

  // Obtains the next available register and if there isn't one it handles stack manipulation
  public nextRegister = (viableRegs: Register[], push: boolean): Register => {
    const regListWithoutR11andR12 = 2
    if (viableRegs.length > regListWithoutR11andR12) {
      return viableRegs[0]
    } else {
      if (push) {
        if (viableRegs[0]) {
          this.borrowReg.push(viableRegs[0])
        }
        this.output.push(construct.pushPop(ARMOpcode.push, [Register.r10]))
        this.outOfRegScope++
        return Register.r10
      } else {
        this.borrowDestroy = false
        this.output.push(construct.pushPop(ARMOpcode.pop, [Register.r11]))
        this.outOfRegScope--
        return Register.r11
      }
    }
  }

  // Handles moving of registers by setting the reg size
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
  /* ------------------------------------------- */

  // Generates code for Binary Operators
  public genBinOp = (atx: WJSCExpr, regList: Register[]) => {
    const [head, next, ...tail] = regList
    this.genExpr(atx.expr1, regList)
    this.genExpr(atx.expr2, [next, ...tail])
    const regToUse = this.nextRegister(regList, false)

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
        if (!this.borrowDestroy) {
          this.output.push(construct.arithmetic(ARMOpcode.add, Register.r10, regToUse, Register.r10, undefined, true))
        } else {
          if (this.outOfRegScope === 1) {
            this.output.push(construct.pushPop(ARMOpcode.pop, [Register.r11]))
            this.output.push(construct.arithmetic(ARMOpcode.add, Register.r10, Register.r11, Register.r10, undefined, true))
            this.outOfRegScope--
          } else {
            this.output.push(construct.arithmetic(ARMOpcode.add, head, regToUse, next, undefined, true))
          }
        }
        this.checkOverflow(ARMCondition.overflow)
        this.borrowDestroy = true
        break
      case '-':
        this.output.push(construct.arithmetic(ARMOpcode.subtract, head, head, next, undefined, true))
        this.checkOverflow(ARMCondition.overflow)
        break
      case '>':
        this.output.push(construct.compareTest(ARMOpcode.compare, head, next))
        this.move(getTypeSize(BaseType.Boolean), head, `#1`, ARMCondition.greaterThan)
        this.move(getTypeSize(BaseType.Boolean), head, `#0`, ARMCondition.lessEqual)
        break
      case '>=':
        this.output.push(construct.compareTest(ARMOpcode.compare, head, next))
        this.move(getTypeSize(BaseType.Boolean), head, `#1`, ARMCondition.greaterEqual)
        this.move(getTypeSize(BaseType.Boolean), head, `#0`, ARMCondition.lessThan)
        break
      case '<':
        this.output.push(construct.compareTest(ARMOpcode.compare, head, next))
        this.move(getTypeSize(BaseType.Boolean), head, `#1`, ARMCondition.lessThan)
        this.move(getTypeSize(BaseType.Boolean), head, `#0`, ARMCondition.greaterEqual)
        break
      case '<=':
        this.output.push(construct.compareTest(ARMOpcode.compare, head, next))
        this.move(getTypeSize(BaseType.Boolean), head, `#1`, ARMCondition.lessEqual)
        this.move(getTypeSize(BaseType.Boolean), head, `#0`, ARMCondition.greaterThan)
        break
      case '==':
        this.output.push(construct.compareTest(ARMOpcode.compare, head, next))
        this.move(getTypeSize(BaseType.Boolean), head, `#1`, ARMCondition.equal)
        this.move(getTypeSize(BaseType.Boolean), head, `#0`, ARMCondition.nequal)
        break
      case '!=':
        this.output.push(construct.compareTest(ARMOpcode.compare, head, next))
        this.move(getTypeSize(BaseType.Boolean), head, `#1`, ARMCondition.nequal)
        this.move(getTypeSize(BaseType.Boolean), head, `#0`, ARMCondition.equal)
        break
      case '&&':
        this.output.push(construct.logical(ARMOpcode.and, head, head, next))
        break
      case '||':
        this.output.push(construct.logical(ARMOpcode.or, head, head, next))
        break
    }
  }

  // Generates code for unary operators
  public genUnOp = (atx: WJSCExpr, regList: Register[]) => {
    const [head] = regList
    this.genExpr(atx.expr1, regList)
    switch (atx.operator.token) {
      case '!':
        this.output.push(construct.logical(ARMOpcode.exclusiveOr, head, head, '#1'))
        break
      case '-':
        this.output.push(construct.arithmetic(ARMOpcode.reverseSubtract, head, head, `#0`, undefined, true))
        this.checkOverflow(ARMCondition.overflow)
        break
      case 'len':
        this.output.push(construct.singleDataTransfer(ARMOpcode.load, head, `[${head}]`))
        break
      case 'ord':
        break
      case 'chr':
        break
    }
  }

  // Generates code for array literals
  public genArray = (atx: WJSCAst, list: Register[]) => {
    const children = atx.children
    const typeSize = (children.length !== 0) ? this.sizeGen(atx.children[0], true) : 0
    const size = (children.length * typeSize) + 4   // 4 being the array size
    // Setup for array
    const itemUsed = this.nextRegister(list, false)
    this.load(4, Register.r0, `=${size}`) // <- 4 refers to size of int type (for size)
    this.output = this.output.concat([directive.malloc(ARMOpcode.branchLink),
                                      construct.move(ARMOpcode.move, itemUsed, Register.r0)])
    let present: Register[] = []
    if (list.includes(itemUsed)) {
      present = list.slice(1)
    }
    // loading in elements
    const nextItem = this.nextRegister(present, false)
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
          params = `[${itemUsed}, ${directive.immNum(4 + typeSize * (index))}]`
          this.output.push(construct.singleDataTransfer(ARMOpcode.store, nextItem, params))
          break
        default:
          if (isArrayType(child.type) || isPairType(child.type)) {
            // Array and pair type
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

  // Generates code for array elems
  public genArrayElem = (atx: WJSCAst, list: Register[], isFromExpr: boolean) => {
    const arrElem = atx.children[0] as WJSCArrayElem
    const dimensions = (arrElem).specificInd
    const itemUsed = this.nextRegister(list, false)
    let future: Register[] = []
    if (list.includes(itemUsed)) {
      future = list.slice(1)
    }
    const nextItem = this.nextRegister(future, false)
    this.output.push(construct.arithmetic(ARMOpcode.add, itemUsed, this.sp, directive.immNum(this.symbolTable.getVarMemAddr(arrElem.ident, this.stackPointer))))
    dimensions.forEach((currDim, index) => {
      // index * size)
      // position = distance of variable from where you are
      this.genExpr(currDim, future)
      this.load(this.getRegSize(itemUsed), itemUsed, `[${itemUsed}]`)
      this.move(this.getRegSize(nextItem), Register.r0, nextItem)
      this.move(this.getRegSize(itemUsed), Register.r1, itemUsed)
      this.checkArrayOutOfBounds()
      this.output.push(construct.arithmetic(ARMOpcode.add, itemUsed, itemUsed, directive.immNum(4)))
      if (atx.type === BaseType.Character || atx.type === BaseType.Boolean) {
        this.output.push(construct.arithmetic(ARMOpcode.add, itemUsed, itemUsed, nextItem))
      } else {
        this.output.push(construct.arithmetic(ARMOpcode.add, itemUsed, itemUsed, nextItem, undefined, false,
          ARMShiftname.logicalShiftLeft, directive.immNum(2)))
      }
    })
    if (isFromExpr) {
      if (atx.type === BaseType.Character || atx.type === BaseType.Boolean) {
        this.load(this.getRegSize(itemUsed), itemUsed, `[${itemUsed}]`, undefined, 'SB')
      } else {
        this.load(this.getRegSize(itemUsed), itemUsed, `[${itemUsed}]`)
      }
    }
  }

  // Generates code for the whole program
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
    let thisStackSize = 0
    // Move sp for all declarations at once
    stats.forEach((stat) => {
      if (stat.parserRule === WJSCParserRules.Declare) {
        thisStackSize += getTypeSize(stat.declaration.type)
      } else if (stat.parserRule === WJSCParserRules.ConditionalFor) {
        thisStackSize += getTypeSize(stat.stat.type)
      }
    })
    this.currSpOffset = thisStackSize
    this.stackPointer += thisStackSize
    this.symbolTable.setSpOffset(this.stackPointer)
    const numStackOffsets = Math.ceil(thisStackSize / this.MAX_SP_OFFSET)
    const stackOffsets: string[] = Array(numStackOffsets).fill('#' + this.MAX_SP_OFFSET)
    stackOffsets[numStackOffsets - 1] = '#' + thisStackSize % this.MAX_SP_OFFSET
    this.symbolTable.setStackOffsets(stackOffsets)

    // Decrement sp
    // tslint:disable-next-line
    if (thisStackSize) {
      stackOffsets.forEach((operand) => {
        this.output.push(construct.arithmetic(ARMOpcode.subtract, this.sp, this.sp, operand))
        this.returnOffsets.push(construct.arithmetic(ARMOpcode.add, this.sp, this.sp, operand))
      })
    }
    // Traverse body
    this.traverseStat(statements, regList)

    // Increment sp
    // tslint:disable-next-line
    if (thisStackSize && stats[stats.length - 1].parserRule !== WJSCParserRules.Return) {
      stackOffsets.forEach((operand) => {
        this.output.push(construct.arithmetic(ARMOpcode.add, this.sp, this.sp, operand))
        this.returnOffsets.pop()
      })
    }
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
        this.move(this.getRegSize(head), this.resultReg, head)
        this.output.push(construct.branch('exit', true))
        break
      case WJSCParserRules.Declare:
        this.output.push()
        this.genDeclare(atx.declaration, reglist)
        break
      case WJSCParserRules.Assignment:
        this.genAssignment(atx.assignment, reglist)
        break
      case WJSCParserRules.ConditionalFor:
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
        this.genExpr(atx.stdlibExpr, reglist, true)
        this.printBaseType(atx.stdlibExpr, reglist)
        if (hasSameType(atx.stdlibExpr.type, BaseType.String)) {
          this.pushCheck(Check.printlnString)
        }
        break
      case WJSCParserRules.Println:
        this.genExpr(atx.stdlibExpr, reglist, true)
        this.printBaseType(atx.stdlibExpr, reglist)
        this.output.push(construct.branch(this.PRINT_NEW_LINE, true))
        if (hasSameType(atx.stdlibExpr.type, BaseType.String)) {
          this.pushCheck(Check.printlnString)
        }
        this.pushCheck(Check.printNewLn)
        break
      case WJSCParserRules.Scope:
        const oldCurrSP = this.currSpOffset
        const oldSP = this.stackPointer
        this.switchToChildTable(atx.stat.tableNumber)
        this.genStatBlock(atx.stat, reglist)
        this.switchToParentTable()
        this.currSpOffset = oldCurrSP
        this.stackPointer = oldSP
        break
      case WJSCParserRules.Read:
        // this.checkNullPointer()
        if (atx.children[1].parserRule === WJSCParserRules.PairElem) {
          const node = atx.children[1].children[0] as WJSCPairElem
          let params
          if (this.symbolTable.getVarMemAddr(node.ident, this.symbolTable.getSpOffset()) !== 0) {
            params = `[${[this.sp]}, ${directive.immNum(this.symbolTable.getVarMemAddr(node.ident, this.stackPointer))}]`
          } else {
            params = `[${[this.sp]}]`
          }
          this.load(8, head,
            params) // <- size 8 since we know its a pair
          this.move(this.getRegSize(head), this.resultReg, head)
          this.output.push(construct.branch(this.CHECK_NULL_POINTER, true))
          this.pushCheck(Check.printNullRef)
          this.load(this.getRegSize(head), head, `[${head}, ${directive.immNum(4)}]`)
        } else {
          this.output.push(construct.arithmetic(ARMOpcode.add, head, this.sp, directive.immNum(this.symbolTable.getVarMemAddr(atx.children[1].token, this.stackPointer))))
        }
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
        this.move(this.getRegSize(head), Register.r0, head)
        this.returnOffsets.forEach((operand) => {
          this.output.push(operand)
        })
        this.output.push(construct.pushPop(ARMOpcode.pop, [this.pc]))
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
          // Catch char[] as string
          if (hasSameType(atx.type, BaseType.String)) {
            this.output.push(construct.branch(this.PRINT_STRING, true))
            this.pushCheck(Check.printString)
            break
          } else {
            this.output.push(construct.branch(this.PRINT_REFERENCE, true))
            this.pushCheck(Check.printRef)
          }
      }
    }
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
        if (hasSameType(type, BaseType.String)) {
          this.output.push(construct.branch(this.PRINT_STRING, true))
          this.pushCheck(Check.printString)
          break
        } else if (isArrayType(type) || isPairType(type)) {
          this.output.push(construct.branch(this.PRINT_REFERENCE, true))
          this.pushCheck(Check.printRef)
          break
        }
    }
  }

  public genConditionalIf = (atx: WJSCStatement, regList: Register[]) => {
    const [head] = regList
    this.genExpr(atx.condition, regList)
    this.output.push(construct.compareTest(ARMOpcode.compare, head, '#0'))

    const label1 = `L${this.getLabelNo()}`
    const label2 = `L${this.getLabelNo()}`
    // Jump to label1 if false
    this.output.push(construct.branch(label1, false, ARMCondition.equal))
    // True body
    let oldStackPointer = this.stackPointer
    let oldCurrSpOffset = this.currSpOffset
    this.switchToChildTable(atx.trueBranch.tableNumber)
    this.genStatBlock(atx.trueBranch, regList)
    this.switchToParentTable()
    this.stackPointer = oldStackPointer
    this.currSpOffset = oldCurrSpOffset

    this.output.push(construct.branch(label2, false))
    this.output.push(directive.label(label1))
    // False body
    oldStackPointer = this.stackPointer
    oldCurrSpOffset = this.currSpOffset
    this.switchToChildTable(atx.falseBranch.tableNumber)
    this.genStatBlock(atx.falseBranch, regList)
    this.switchToParentTable()
    this.stackPointer = oldStackPointer
    this.currSpOffset = oldCurrSpOffset
    this.output.push(directive.label(label2))
  }

  public genCondWhile = (atx: WJSCStatement, regList: Register[]) => {
    const [head] = regList
    const label1 = `L${this.getLabelNo()}`
    const label2 = `L${this.getLabelNo()}`

    this.output.push(construct.branch(label1, false))
    this.output.push(directive.label(label2))
    // True branch
    this.switchToChildTable(atx.trueBranch.tableNumber)
    this.genStatBlock(atx.trueBranch, regList)
    this.switchToParentTable()

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

  // Generates code for the function
  public genFunc = (atx: WJSCFunction, regList: Register[]) => {
    if (atx.body) {
      this.returnOffsets = []
      this.output.push(directive.label(`f_${atx.identifier.replace(':', '_')}`),
        construct.pushPop(ARMOpcode.push, [this.lr]))
      this.switchToChildTable(atx.body.tableNumber)
      this.symbolTable.setVarMemAddr(atx.identifier, this.currSpOffset)
      let offsetctr = 4
      let lastoffset = 0
      atx.paramList.forEach((param) => {
        this.symbolTable.setVarMemAddr((param as WJSCIdentifier).identifier, offsetctr += lastoffset)
        lastoffset = getTypeSize(param.type)
      })
      this.genStatBlock(atx.body, regList)
      this.switchToParentTable()

      this.output.push(construct.pushPop(ARMOpcode.pop, [this.pc]))
      if (atx.body.parserRule === WJSCParserRules.ConditionalWhile || atx.body.parserRule === WJSCParserRules.ConditionalIf) {
        this.ltorgCheck = false
      } else {
        this.output.push(tabSpace + directive.ltorg)
      }
    } else {
      if (atx.funcType === 'define') {
        console.log('Function expected body but none found')
      }
    }
  }

  // Generates code for the assignments
  public genAssignment = (atx: WJSCAssignment, registers: Register[]) => {
    this.genAssignRhs(atx.rhs, registers)
    this.genAssignLhs(atx.lhs, registers)
  }

  // Generates code for the LHS of assignments
  public genAssignLhs = (atx: WJSCAssignLhs, [head, ...tail]: Register[]) => {
    switch (atx.parserRule) {
      case WJSCParserRules.Identifier: {
        const sizeIsByte = getTypeSize(atx.type) === 1
        const id = atx.token
        const offset = this.symbolTable.getAssignAddr(id, atx.line, this.symbolTable.getSpOffset())

        this.output.push(construct.singleDataTransfer(ARMOpcode.store, head, `[${this.sp}${offset ? `, #${offset}` : ''}]`, undefined, undefined, sizeIsByte))
        break
      }
      case WJSCParserRules.ArrayElem: {
        const itemUsed = this.nextRegister([head, ...tail], true)
        let present: Register[] = []
        if ([head, ...tail].includes(itemUsed)) {
          present = tail
        }
        const nextItem = this.nextRegister(present, true)
        this.genArrayElem(atx, [...tail], false)
        if (atx.type === BaseType.Character || atx.type === BaseType.Boolean) {
          this.output.push(construct.singleDataTransfer(ARMOpcode.store, itemUsed,
            `[${nextItem}]`, undefined, undefined, true))
        } else {
          this.output.push(construct.singleDataTransfer(ARMOpcode.store, itemUsed,
            `[${nextItem}]`))
        }
        break
      }
      case WJSCParserRules.PairElem: {
        const [next] = tail
        this.genPairElem(atx.pairElem, tail)
        if (atx.pairElem.type === BaseType.Boolean || atx.pairElem.type === BaseType.Character) {
          this.output.push(construct.singleDataTransfer(ARMOpcode.store, head, `[${next}]`, undefined, undefined, true))
        } else {
          this.output.push(construct.singleDataTransfer(ARMOpcode.store, head, `[${next}]`))
        }
        break
      }
    }
  }

  // Generates code for declaration of variables
  public genDeclare = (atx: WJSCDeclare, regList: Register[]) => {
    const head = this.nextRegister(regList, true)
    const type = atx.type
    const rhs = atx.rhs
    const id = atx.identifier

    const typeSize = getTypeSize(type)
    const sizeIsByte = typeSize === 1

    // Load rhs expression into 'head' register
    this.currSpOffset -= typeSize
    this.symbolTable.setVarMemAddr(id, this.currSpOffset)
    this.genAssignRhs(rhs, regList)
    if (hasSameType(type, BaseType.String)) {
      this.symbolTable.setMsgNum(id, this.msgCount - 1)
    }
    // Save content of 'head' to memory
    if (this.currSpOffset > 0) {
      this.output.push(construct.singleDataTransfer(ARMOpcode.store, head, `[${this.sp}, ${directive.immNum(this.currSpOffset)}]`, undefined, undefined, sizeIsByte))
    } else {
      this.output.push(construct.singleDataTransfer(ARMOpcode.store, head, `[${this.sp}]`, undefined, undefined, sizeIsByte))
    }
  }

  // Generates code for the RHS of assignments
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
        this.load(exprSize, this.resultReg, `=8`)
        this.output.push(directive.malloc(ARMOpcode.branchLink))
        this.move(this.getRegSize(this.resultReg), head, this.resultReg)
        this.genExpr(atx.expr, [next, ...tail])
        const sizeIsByte = exprSize === 1
        this.load(exprSize, this.resultReg, `=${exprSize}`)
        this.output.push(
          directive.malloc(ARMOpcode.branchLink),
          construct.singleDataTransfer(ARMOpcode.store, next, `[${this.resultReg}]`, undefined, undefined, sizeIsByte),
          construct.singleDataTransfer(ARMOpcode.store, this.resultReg, `[${head}]`))
        this.genExpr(atx.expr2, [next, ...tail])
        const size2IsByte = expr2Size === 1
        this.load(expr2Size, this.resultReg, `=${expr2Size}`)
        this.output.push(
          directive.malloc(ARMOpcode.branchLink),
          construct.singleDataTransfer(ARMOpcode.store, next, `[${this.resultReg}]`, undefined, undefined, size2IsByte),
          construct.singleDataTransfer(ARMOpcode.store, this.resultReg, `[${head}, #4]`))
        break
      case WJSCParserRules.PairElem:
        const pairElem = atx.pairElem
        this.genPairElem(pairElem, regList)
        if (pairElem.type === BaseType.Character || pairElem.type === BaseType.Boolean) {
          this.load(this.getRegSize(head), head, `[${head}]`, undefined, 'SB')
        } else {
          this.load(this.getRegSize(head), head, `[${head}]`)
        }
        break
      case WJSCParserRules.FunctionCall:
        /* Determine the number of arguments required for the function call */
        const argv = (atx.argList || [])
        const argc = argv.length
        let offsetctr = 0
        const oldStackPointer = this.stackPointer
        const oldCurrSpOffset = this.currSpOffset
        /* Setup the stack */
        // tslint:disable-next-line
        argv.reverse().forEach((arg: WJSCExpr) => {
          this.genExpr(arg, regList)
          const argsize = getTypeSize(arg.type)
          offsetctr += argsize
          this.output.push(construct.singleDataTransfer(ARMOpcode.store, head, ['pre', this.sp, directive.immNum(-argsize)], undefined, undefined, argsize === 1, undefined, true))
          this.stackPointer += argsize
        })
        const external = this.symbolTable.functionIsExternal(atx.ident)
        this.output.push(construct.branch(`${external ? '' : 'f_'}${atx.ident.replace(':', '_')}`, true))
        if (argc > 0) {
          this.output.push(construct.arithmetic(ARMOpcode.add, this.sp, this.sp, directive.immNum(offsetctr)))
        }
        this.stackPointer = oldStackPointer
        this.currSpOffset = oldCurrSpOffset
        this.move(this.getRegSize(Register.r0), head, Register.r0)
    }
  }

  // Generates code for individual Pair Elems
  public genPairElem(pairElem: WJSCPairElem, regList: Register[]) {
    const [head] = regList
    this.genExpr(pairElem.expr, regList)
    this.move(this.getRegSize(this.resultReg), this.resultReg, head)
    this.output.push(construct.branch(this.CHECK_NULL_POINTER, true))
    this.pushCheck(Check.printNullRef)
    if (pairElem.parserRule === WJSCParserRules.FirstElem) {
      this.load(this.getRegSize(head), head, `[${head}]`)
    } else {
      this.load(this.getRegSize(head), head, `[${head}, #4]`)
    }
  }

  // Generates code for Expressions
  public genExpr = (atx: WJSCExpr, regList: Register[], set: boolean = false) => {
    const [head] = regList
    let value = atx.value
    switch (atx.parserRule) {
      case WJSCParserRules.IntLiteral:
        const itemUsed = this.nextRegister(regList, true)
        this.load(getTypeSize(value), itemUsed, `=${value}`)
        break
      case WJSCParserRules.BoolLiter:
        value = atx.value ? 1 : 0
        this.move(1, head, directive.immNum(value))
        break
      case WJSCParserRules.CharLiter:
        if (value.toString()[0] === '\\') {
          value = value.toString()[1]
          if (set) {
            this.move(getTypeSize(value), head, `#'${value}'`)
          } else {
            this.move(getTypeSize(value), head, `#${value}`)
          }
        } else {
          this.move(getTypeSize(BaseType.Character), head, `#'${value}'`)
        }
        break
      case WJSCParserRules.StringLiter:
        this.load(this.getRegSize(head), head, `=msg_` + this.msgCount)
        this.stringDec(atx.value)
        break
      case WJSCParserRules.PairLiter:
        this.output.push(construct.singleDataTransfer(ARMOpcode.load, head, `=0`))
        break
      case WJSCParserRules.Identifier:
        const typeSize = getTypeSize(atx.type)
        const sizeIsByte = typeSize === 1
        const spOffset = this.symbolTable.getVarMemAddr(atx.value, this.stackPointer)
        const offsetString = spOffset ? `, #${spOffset}` : ''
        const identType = this.symbolTable.lookup(atx.value)
        if (identType === BaseType.Character || identType === BaseType.Boolean) {
          this.output.push(construct.singleDataTransfer(ARMOpcode.load, head, `[${this.sp}${offsetString}]`, undefined, 'SB', false))
        } else {
          this.output.push(construct.singleDataTransfer(ARMOpcode.load, head, `[${this.sp}${offsetString}]`, undefined, undefined, sizeIsByte))
        }
        break
      case WJSCParserRules.ArrayElem:
        this.genArrayElem(atx, regList, true)
        break
      case WJSCParserRules.BinOp:
        this.genBinOp(atx, regList)
        break
      case WJSCParserRules.Unop:
        this.genUnOp(atx, regList)
        break
      default:
        this.genExpr(atx.children[0] as WJSCExpr, regList)
        break
    }
  }

  /* ------------- ERROR MANAGEMENT --------------*/

  public checkArrayOutOfBounds = () => {
    // Setting up the messages if not already set up
    this.errorPresent = true
    if (this.findTrueMessageIndex(RuntimeError.negIndex) < 0) {
      this.stringDec(RuntimeError.negIndex)
    }
    if (this.findTrueMessageIndex(RuntimeError.largeIndex) < 0) {
      this.stringDec(RuntimeError.largeIndex)
    }
    // check in instruction body itself
    this.output.push(construct.branch('p_check_array_bounds', true))
    // appending function to postFunc, if not already set up
    if (!this.isInPostFunc('p_check_array_bounds')) {
      this.postFunc = this.postFunc.concat(directive.label('p_check_array_bounds'),
        construct.pushPop(ARMOpcode.push, [this.lr]),
        construct.compareTest(ARMOpcode.compare, this.resultReg, directive.immNum(0)),
        construct.singleDataTransfer(ARMOpcode.load, this.resultReg,
          `=msg_${this.findTrueMessageIndex(RuntimeError.negIndex)}`, ARMCondition.lessThan),
        construct.branch(this.THROW_RUNTIME_ERROR, true, ARMCondition.lessThan),
        construct.singleDataTransfer(ARMOpcode.load, Register.r1, `[${Register.r1}]`),
        construct.compareTest(ARMOpcode.compare, this.resultReg, Register.r1),
        construct.singleDataTransfer(ARMOpcode.load, this.resultReg,
          `=msg_${this.findTrueMessageIndex(RuntimeError.largeIndex)}`, ARMCondition.unsignedHigherSame),
        construct.branch(this.THROW_RUNTIME_ERROR, true, ARMCondition.unsignedHigherSame),
        construct.pushPop(ARMOpcode.pop, [this.pc]))

    }
  }

  public checkDivByZero = (mod: boolean) => {
    this.errorPresent = true
    // Setting up the message if not already set up
    if (this.findTrueMessageIndex(RuntimeError.divByZero) < 0) {
      this.stringDec(RuntimeError.divByZero)
    }
    // check in instruction body itself
    this.output.push(construct.branch(this.CHECK_DIVIDE_BY_ZERO, true))
    const divCheck = mod ? '__aeabi_idivmod' : '__aeabi_idiv'
    this.output.push(construct.branch(divCheck, true))
    // appending function to postFunc, if not already set up
    if (!this.isInPostFunc(this.CHECK_DIVIDE_BY_ZERO)) {
      this.postFunc = this.postFunc.concat(directive.label(this.CHECK_DIVIDE_BY_ZERO),
        construct.pushPop(ARMOpcode.push, [this.lr]),
        construct.compareTest(ARMOpcode.compare, Register.r1, directive.immNum(0)),
        construct.singleDataTransfer(ARMOpcode.load, this.resultReg,
          `=msg_${this.findTrueMessageIndex(RuntimeError.divByZero)}`, ARMCondition.equal),
        construct.branch(this.THROW_RUNTIME_ERROR, true, ARMCondition.equal),
        construct.pushPop(ARMOpcode.pop, [this.pc]))
    }
  }

  public checkOverflow = (condition: ARMCondition) => {
    this.errorPresent = true
    // Setting up the message if not already set up
    if (this.findTrueMessageIndex(RuntimeError.intOverFlow) < 0) {
      this.stringDec(RuntimeError.intOverFlow)
    }
    // check in instruction body itself
    this.output.push(construct.branch(this.THROW_OVERFLOW_ERROR, true, condition))

    // appending function to postFunc
    if (!this.isInPostFunc(this.THROW_OVERFLOW_ERROR)) {
      this.postFunc.push(directive.label(this.THROW_OVERFLOW_ERROR),
        construct.singleDataTransfer(ARMOpcode.load, this.resultReg,
          `=msg_${this.findTrueMessageIndex(RuntimeError.intOverFlow)}`),
        construct.branch(this.THROW_RUNTIME_ERROR, true))
    }
  }

  // Remember to have put the pair/ array into r0!
  public checkFreeNullPair = () => {
    this.errorPresent = true
    // Setting up the message if not already set up
    if (this.findTrueMessageIndex(RuntimeError.nullDeref) < 0) {
      this.stringDec(RuntimeError.nullDeref)
    }
    // check in instruction body itself
    this.output.push(construct.branch(this.CHECK_FREE_NULL_PAIR, true))
    // appending function to postFunc
    if (!this.isInPostFunc(this.CHECK_FREE_NULL_PAIR)) {
      this.postFunc = this.postFunc.concat(directive.label(this.CHECK_FREE_NULL_PAIR),
        construct.pushPop(ARMOpcode.push, [this.lr]),
        construct.compareTest(ARMOpcode.compare, this.resultReg, directive.immNum(0)),
        construct.singleDataTransfer(ARMOpcode.load, this.resultReg,
          `=msg_${this.findTrueMessageIndex(RuntimeError.nullDeref)}`, ARMCondition.equal),
        construct.branch(this.THROW_RUNTIME_ERROR, false, ARMCondition.equal),
        construct.pushPop(ARMOpcode.push, [this.resultReg]),
        construct.singleDataTransfer(ARMOpcode.load, this.resultReg, `[${this.resultReg}]`),
        construct.branch('free', true),
        construct.singleDataTransfer(ARMOpcode.load, this.resultReg, `[${this.sp}]`),
        construct.singleDataTransfer(ARMOpcode.load, this.resultReg,
          `[${this.resultReg}, ${directive.immNum(4)}]`),
        construct.branch('free', true),
        construct.pushPop(ARMOpcode.pop, [this.resultReg]),
        construct.branch('free', true),
        construct.pushPop(ARMOpcode.pop, [this.pc]))
    }
  }

  public checkFreeNullArray = () => {
    this.errorPresent = true
    // Setting up the message if not already set up
    if (this.findTrueMessageIndex(RuntimeError.nullDeref) < 0) {
      this.stringDec(RuntimeError.nullDeref)
    }
    // check in instruction body itself
    this.output.push(construct.branch(this.CHECK_FREE_NULL_ARRAY, true))
    // appending function to postFunc
    if (!this.isInPostFunc(this.CHECK_FREE_NULL_ARRAY)) {
      this.postFunc = this.postFunc.concat(directive.label(this.CHECK_FREE_NULL_ARRAY),
        construct.pushPop(ARMOpcode.push, [this.lr]),
        construct.compareTest(ARMOpcode.compare, this.resultReg, directive.immNum(0)),
        construct.singleDataTransfer(ARMOpcode.load, this.resultReg,
          `=msg_${this.findTrueMessageIndex(RuntimeError.nullDeref)}`, ARMCondition.equal),
        construct.branch(this.THROW_RUNTIME_ERROR, false, ARMCondition.equal),
        construct.branch('free', true),
        construct.pushPop(ARMOpcode.pop, [this.pc]))
    }
  }

  // Generate errors with appropriate message
  public throwError = () => {
    // Setting up the final message
    if (this.findTrueMessageIndex('%.*s\\0') < 0) {
      this.stringDec('%.*s\\0')
    }
    // Setting up the error message
    this.postFunc = this.postFunc.concat(directive.label(this.THROW_RUNTIME_ERROR),
      construct.branch('p_print_string', true),
      construct.move(ARMOpcode.move, this.resultReg, directive.immNum(-1)),
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
    let foundIndex = -10000 // <- In the event it wasnt in
    this.data.forEach((child, index) => {
      if (child.includes(searchTerm)) {
        foundIndex = index - 1 // <- Because .data is counted as an elem
      }
    })
    return foundIndex
  }

  public isInPostFunc = (searchTerm: string): boolean => {
    let isInFunc = false
    this.postFunc.forEach((child) => {
      if (child.includes(searchTerm)) {
        isInFunc = true
      }
    })
    return isInFunc
  }

  // Appends the string labels to the top of the assembly file
  private stringDec = (symbol: string | number): number => this.data.push(
    'msg_' + this.msgCount++ + ':\n' + tabSpace +
    `.word ${directive.messageCharCount(symbol.toString() || '')}` +
    '\n' + tabSpace + directive.ascii(symbol.toString() || ''),
  )

  private getLabelNo = (): number => this.labelCount++

  // Find child table with the given table number
  private switchToChildTable = (tableNumber: number) => {
    let result
    this.symbolTable.getChildrenTables().forEach((child) => {
      if (child.getTableNumber() === tableNumber) {
        result = child
      }
    })
    if (result) {
      this.symbolTable = result
    } else {
      console.log(`Can't enter symbol table`)
    }
  }

  private switchToParentTable = () => {
    this.symbolTable = this.symbolTable.exitScope()
    this.stackPointer = this.symbolTable.getSpOffset()
  }
}

export { WJSCCodeGenerator }
