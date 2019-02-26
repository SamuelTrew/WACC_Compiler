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
import { BaseType, getTypeSize } from '../util/WJSCType'
import {
  ARMOpcode,
  construct,
  directive,
  msgCount,
  Register,
  tabSpace,
} from './ARMv7-lib'

/* TODO: A function that maps base type to bits used
   TODO: A function that finds the total number of declarations
   TODO: complete "nextRegister" function
*/

class WJSCCodeGenerator {
  public static stringifyAsm = (asm: string[]) => asm.join('\n')
  public output: string[] = []

  private readonly resultReg = Register.r0
  private readonly sp = Register.r13
  private readonly lr = Register.r14
  private readonly pc = Register.r15

  constructor(output: string[]) {
    this.output = output
  }

  public sizeGen = (atx: WJSCAst): number => {
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
        // TODO: Determine size of pairLiter
        typeSize = 4
        break
      }
    }
    return typeSize
  }

  public genArray = (atx: WJSCAst, list: Register[]) => {
    const children = atx.children
    // TODO: As mentioned above for typeSize and nextReg
    // TODO: Extend move to do different thing if 'stack' is a parameter
    const typeSize = this.sizeGen(atx.children[0])
    const size = (children.length * typeSize) + 4   // 4 being the array size
    // Setup for array
    const itemUsed = directive.nextRegister(list)
    this.output = this.output.concat([construct.move(ARMOpcode.load, this.pc, directive.immNum(size)),
                                      directive.malloc(ARMOpcode.branchLink),
                                      construct.move(ARMOpcode.move, itemUsed, Register.r0)])
    if (itemUsed in Register) {
      list.shift()
    } else {
      // We received a stack reference, and such have conducted a modified move (to pop)
    }
    // loading in elements
    const nextItem = directive.nextRegister(list)
    if (nextItem in Register) {
      list.shift()
    }
    children.forEach((child, index) => {
      this.genArrayElem(child, list, nextItem, index)
    })
    this.output.push(construct.move(ARMOpcode.store, nextItem, itemUsed))
    this.output.push(construct.move(ARMOpcode.store, itemUsed, this.sp))
  }

  public genArrayElem = (atx: WJSCAst, list: Register[], nextReg: Register, index: number) => {
    const typeSize = this.sizeGen(atx)
    let childRep = ''
    switch (atx.parserRule) {
      case (WJSCParserRules.IntLiteral): {
        childRep = directive.immNum(atx.token)
        break
      }
      case (WJSCParserRules.ArrayElem): {
        this.genArray(atx, list)
        break
      }
      default: {
        childRep = atx.token
        break
      }
    }
    this.output.push(construct.move(ARMOpcode.load, nextReg, childRep))
    const params = `[${nextReg}, ${directive.immNum(typeSize * (index + 1))}]`
    this.output.push(construct.move(ARMOpcode.store, nextReg, params))
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
      this.traverseStat(atx.body, regList)
    }
    this.output.push(
        construct.singleDataTransfer(ARMOpcode.load, this.resultReg, '=0'),
        construct.pushPop(ARMOpcode.pop, [this.pc]),
        tabSpace + directive.ltorg + '\n',
    )
    return this.output
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

  public traverseStatements = (
    children: WJSCStatement[],
    instructions: string[], regList: Register[],
  ): string[] => {
    // WARNING: Do not concat the results of this function to prior results
    children.forEach((child) => {
      this.traverseStat(child, regList)
    })
    return instructions
  }

  public traverseStat = (atx: WJSCStatement, [head, ...tail]: Register[]) => {
    switch (atx.parserRule) {
      case WJSCParserRules.Skip:
        // Skip does nothing
        break
      case WJSCParserRules.Exit: {
        this.genExpr(atx.stdlibExpr, [head, ...tail])
        this.output = this.output.concat(
            construct.move(ARMOpcode.move, this.resultReg, head),
            construct.branch('exit', true),
        )
        break
      }
      case WJSCParserRules.Declare: {
        this.genDeclare(atx.declaration, [head, ...tail])
        break
      }
      case WJSCParserRules.Assignment: {
        this.output.push('HELLO\n')
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
        this.output.push()
        break
      }
    }
  }

  public genDeclare = (atx: WJSCDeclare, [head, next, ...tail]: Register[]) => {
    const type = atx.type
    const rhs = atx.rhs

    const typeSize = getTypeSize(type)
    const operand = `#${typeSize}`
    const sizeIsByte = typeSize === 1

    // TODO add cases for pairs and arrays

    // Write to output
    this.output.push(construct.arithmetic(ARMOpcode.subtract, this.sp, this.sp, operand))
    this.genAssignRhs(rhs, [head, next, ...tail])

    this.output.push(construct.singleDataTransfer(ARMOpcode.store, head, `[${this.sp}]`, undefined, undefined, sizeIsByte))

    this.output.push(construct.arithmetic(ARMOpcode.add, this.sp, this.sp, operand))
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

  public genExpr = (atx: WJSCExpr, [head, ...tail]: Register[]) => {
    let value = atx.value
    switch (atx.parserRule) {
      case WJSCParserRules.IntLiteral: {
        this.output.push(construct.singleDataTransfer(ARMOpcode.load, head, `=${value}`))
        this.output.push(construct.singleDataTransfer(ARMOpcode.load, this.resultReg, `=4`))
        break
      }
      case WJSCParserRules.BoolLiter: {
        value = atx.value ? 1 : 0
        this.output.push(construct.singleDataTransfer(ARMOpcode.load, head, `=${value}`))
        break
      }
      case WJSCParserRules.CharLiter: {
        this.output.push(construct.move(ARMOpcode.move, head, `#'${value}'`))
        this.output.push(construct.singleDataTransfer(ARMOpcode.load, this.resultReg, `=1`))
        break
      }
      case WJSCParserRules.StringLiter: {
        directive.stringDec(atx.value)
        this.output.push(construct.singleDataTransfer(ARMOpcode.load, head, `=msg_` + msgCount))
        this.output.push(construct.singleDataTransfer(ARMOpcode.load, this.resultReg, `=4`))
        this.output.push(construct.singleDataTransfer(ARMOpcode.store, head, `[${this.sp}]`))
        break
      }
      case WJSCParserRules.PairLiter: {
        this.output.push(construct.singleDataTransfer(ARMOpcode.load, head, `=0`))
        this.output.push(construct.singleDataTransfer(ARMOpcode.store, head, `[${this.sp}]`))
        this.output.push(construct.singleDataTransfer(ARMOpcode.load, head, `[${this.sp}]`))
        break
      }
    }
  }
}

export { WJSCCodeGenerator }
