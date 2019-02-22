enum ARMCondition {
  always = 'AL',
  equal = 'EQ',
  greaterEqual = 'GE',
  greaterThan = 'GT',
  lessEqual = 'LE',
  lessThan = 'LT',
  negative = 'MI',
  nequal = 'NQ',
  noOverflow = 'VC',
  overflow = 'VS',
  positiveZero = 'PL',
  unsignedHigher = 'HI',
  unsignedHigherSame = 'CS',
  unsignedLower = 'CC',
  unsignedLowerOrSame = 'LS',
}

enum ARMOpcode {
  add = 'ADD',
  addCarry = 'ADC',
  and = 'AND',
  bitClear = 'BIC',
  branch = 'B',
  branchExchange = 'BX',
  branchLink = 'BL',
  compare = 'CMP',
  compareNegative = 'CMN',
  coprocessorDataProcessing = 'CDP',
  exclusiveOr = 'EOR',
  loadCoprocessorMemory = 'LDC',
  loadMultiple = 'LDM',
  load = 'LDR',
  move = 'MOV',
  moveFlagsRegister = 'MRS',
  moveNegative = 'MVN',
  moveRegisterFlags = 'MSR',
  moveToCoprocessor = 'MCR',
  moveToCpu = 'MRC',
  multiply = 'MUL',
  multiplyAccumulate = 'MLA',
  or = 'ORR',
  pop = 'POP',
  push = 'PUSH',
  reverseSubtract = 'RSB',
  reverseSubtractCarry = 'RSC',
  softwareInterrupt = 'SWI',
  storeCoprocessorMemory = 'STC',
  storeMultiple = 'STM',
  store = 'STR',
  subtract = 'SUB',
  subtractCarry = 'SBC',
  swapRegMem = 'SWP',
  test = 'TST',
  testBitwise = 'TEQ',
}

enum ARMShiftname {
  arithmeticShiftLeft = 'ASL',
  logicalShiftLeft = 'LSL',
  logicalShiftRight = 'LSR',
  arithmeticShiftRight = 'ASR',
  rotateRight = 'ROR',
}

enum Register {
  r0 = 'R0',
  r1 = 'R1',
  r2 = 'R2',
  r3 = 'R3',
  r4 = 'R4',
  r5 = 'R5',
  r6 = 'R6',
  r7 = 'R7',
  r8 = 'R8',
  r9 = 'R9',
  r10 = 'R10',
  r11 = 'R11',
  r12 = 'R12',
  r13 = 'SP',
  r14 = 'LR',
  r15 = 'PC',
  cpsr = 'CPSR',
  spsr = 'SPSR',
}

type ARMAddress = ARMExpression | ARMAddressPreIndex | ARMAddressPostIndex
type ARMAddressPreIndex =
  | [Register]
  | ['pre', Register, ARMExpression]
  | ['pre', Register, ARMShiftType, Register, ARMShift]
type ARMAddressPostIndex =
  | ['post', Register, ARMExpression]
  | ['post', Register, ARMShiftType, Register, ARMShift]
type ARMExpression = string
type ARMOperand = [Register, ARMShift] | ARMExpression | string
type ARMShift = [ARMShiftname, Register | ARMExpression] | 'RRX'
type ARMShiftType = '+' | '-'
type ARMBDTAddressingModes =
  | 'FD'
  | 'ED'
  | 'FA'
  | 'EA'
  | 'IA'
  | 'IB'
  | 'DA'
  | 'DB'

export const tabSpace = '\t'

const constructInstruction = (
  mnemonic: ARMOpcode,
  condition: ARMCondition,
  ...operands: ARMOperand[]
) => 'hello'

const construct = {
  arithmetic: (
    opcode: ARMOpcode,
    rd: Register,
    rn: Register,
    operand: ARMOperand,
    condition?: ARMCondition,
    set = false,
  ) =>
    tabSpace +
    `${opcode}${condition || ''}${
      set ? 'S' : ''
    } ${rd}, ${rn}, ${stringify.operand(operand)}`,
  blockDataTransfer: (
    opcode: ARMOpcode.loadMultiple | ARMOpcode.storeMultiple,
    addrMode: ARMBDTAddressingModes,
    rn: Register,
    rlist: Register[],
    condition?: ARMCondition,
    writeBack = false,
    sbit = false,
  ): string =>
    `${opcode}${condition || ''}${addrMode} ${rn}${
      writeBack ? '!' : ''
    } {${rlist.join(', ')}}${sbit ? '^' : ''}`,
  branch: (
    expression: ARMExpression,
    link = false,
    condition?: ARMCondition,
  ): string =>
    tabSpace + `B${link ? 'L' : ''}${condition ? condition : ''} ${expression}`,
  branchExchange: (rn: Register, condition?: ARMCondition): string =>
    tabSpace + `BX${condition} ${rn}`,
  compareTest: (
    opcode: ARMOpcode,
    rn: Register,
    operand: ARMOperand,
    condition?: ARMCondition,
  ): string =>
    tabSpace +
    `${opcode}${condition || ''} ${rn}, ${stringify.operand(operand)}`,
  move: (
    opcode: ARMOpcode,
    rd: Register,
    operand: ARMOperand,
    condition?: ARMCondition,
    set = false,
  ): string =>
    tabSpace +
    `${opcode}${condition || ''}${set ? 'S' : ''} ${rd}, ${stringify.operand(
      operand,
    )}`,
  moveFlags: (
    opcode: ARMOpcode,
    psr: Register.spsr | Register.cpsr,
    operand: Register | ARMExpression,
    condition?: ARMCondition,
    option?: 'all' | 'flg',
  ): string =>
    tabSpace +
    `${opcode}${condition || ''} ${
      opcode === ARMOpcode.moveFlagsRegister
        ? `${operand}, ${psr}`
        : `${psr}${option ? '_' + option : ''}, ${operand}`
    }`,
  multiply: (
    rd: Register,
    rm: Register,
    rs: Register,
    condition?: ARMCondition,
    set = false,
    acc = false,
    rn?: Register,
  ): string =>
    tabSpace +
    `${acc ? 'MLA' : 'MUL'}${condition || ''}${
      set ? 'S' : ''
    } ${rd}, ${rm}, ${rs}` +
    (acc ? `, ${rn}` : ''),
  pushPop: (
    opcode: ARMOpcode.push | ARMOpcode.pop,
    regList: Register[],
    lrPc?: Register,
    condition?: ARMCondition,
  ): string => tabSpace + `${opcode}${condition || ''} {${regList.join(', ')}}`,
  singleDataTransfer: (
    opcode: ARMOpcode.load | ARMOpcode.store,
    rd: Register,
    address: ARMAddress,
    condition?: ARMCondition,
    modifier?: 'H' | 'SB' | 'SH',
    byte = false,
    post = false,
  ): string =>
    tabSpace +
    `${opcode}${condition || ''}${byte ? 'B' : ''}${
      post ? 'T' : ''
    }${modifier || ''} ${rd}, ${stringify.address(address)}`,
  softwareInterrupt: (comment: string, condition?: string) =>
    tabSpace + `SWI${condition || ''} ${comment}`,
}

// ------------------ UTILITY --------------------

const directive = {
  ascii: (str: string): string => `.ascii "${str}"`,
  bss: '.bss',
  data: '.data',
  global: (...symbol: string[]): string => `.global ${symbol.join(', ')}`,
  immNum: (num: number): string => `#${num}`,
  label: (name: string): string => `${name}:`,
  local: (...symbol: string[]): string => `.local ${symbol.join(', ')}`,
  ltorg: '.ltorg',
  popSection: '.popsection',
  pushSection: (...args: any): string =>
    `.pushsection ${directive.section(args)}`,
  rodata: '.rodata',
  section: (
    name: string,
    flags?: string,
    type?: string,
    entrySize?: number,
    groupName?: string,
    linkage?: 'comdat',
    linkOrderSymbol?: string,
    unique?: string,
    uniqueId?: number,
  ): string =>
    `.section ${name} ` +
    (flags ? `"${flags}" ` : '') +
    (type ? `%${type} ` : '') +
    (entrySize ? `${entrySize} ` : '') +
    (groupName ? `${groupName} ` : '') +
    (linkage ? `${linkage} ` : '') +
    (linkOrderSymbol ? `${linkOrderSymbol} ` : '') +
    (unique && uniqueId ? `${unique} ${uniqueId}` : ''),
  text: '.text\n',
  weak: (...symbol: string[]): string => `.weak ${symbol.join(', ')}`,
}

const stringify = {
  address: (address: ARMAddress): string => {
    let stringified = ''
    if (typeof address === 'string') {
      stringified += address
    } else {
      if (address[0] in Register) {
        stringified += `[${address[0]}]`
      } else {
        const register = address[1]
        if (address[0] === 'pre') {
          stringified += '[' + register + ', '
          if (typeof address[2] === 'string') {
            stringified += address[2]
          } else {
            const shiftType = address[2]
            const shiftRegister = address[3]
            const shiftName = address[4]
            stringified += shiftType ? shiftType : ''
            stringified += shiftRegister
            if (shiftName instanceof Array) {
              stringified += `, ${shiftName.join(' ')}`
            } else {
              stringified += `, ${shiftName}`
            }
          }
          stringified += ']'
        } else {
          stringified += '[' + register + '], '
          if (typeof address[2] === 'string') {
            stringified += address[2]
          } else {
            const shiftType = address[2]
            const shiftRegister = address[3]
            const shiftName = address[4]
            stringified += shiftType ? shiftType : ''
            stringified += shiftRegister
            if (shiftName instanceof Array) {
              stringified += `, ${shiftName.join(' ')}`
            } else {
              stringified += `, ${shiftName}`
            }
          }
        }
      }
    }
    return stringified
  },
  operand: (operand: ARMOperand): string => {
    if (operand instanceof Array) {
      let stringified = ''
      const register = operand[0]
      const shift = operand[1]
      stringified += register
      if (shift instanceof Array) {
        stringified += `, ${shift.join(' ')}`
      } else {
        stringified += `, ${shift}`
      }
      return stringified
    } else {
      return operand
    }
  },
}

export {
  ARMCondition,
  ARMOpcode,
  constructInstruction,
  construct,
  directive,
  Register,
}
