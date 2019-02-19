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
  loadMultRegisters = 'LDM',
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
  r14  = 'LR',
  r15  = 'PC',
  cpsr = 'CPSR',
  spsr = 'SPSR',
}
// -------------- REGISTER LABELS  -----------------
const resultReg = Register.r0
const sp = Register.r13
const lr = Register.r14
const pc = Register.r15
const allViableRegs = []
// -------------------------------------------------

type ARMAddress = ARMExpression | ARMAddressPreIndex | ARMAddressPostIndex
type ARMAddressPreIndex =
  | [Register]
  | ['pre', Register, ARMExpression]
  | ['pre', Register, ARMShiftType, Register, ARMShift]
type ARMAddressPostIndex =
  | ['post', Register, ARMExpression]
  | ['post', Register, ARMShiftType, Register, ARMShift]
type ARMExpression = string
type ARMOperand = [Register, ARMShift] | ARMExpression
type ARMShift = [ARMShiftname, Register | ARMExpression] | 'RRX'
type ARMShiftType = '+' | '-'

// Push pop utility
const push = (reglist: Register[]): string[] =>
    reglist.map((reg) => `${ARMOpcode.push} ${reg}`)

const pop = (reglist: Register[]): string[] =>
    reglist.reverse().map((reg) => `${ARMOpcode.pop} ${reg}`)

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
    `${opcode}${condition || ''}${
      set ? 'S' : ''
    } ${rd}, ${rn}, ${stringify.operand(operand)}`,
  branch: (
    expression: ARMExpression,
    condition?: ARMCondition,
    link = false,
  ): string => `B${link ? 'L' : ''}${condition} ${expression}`,
  branchExchange: (rn: Register, condition?: ARMCondition): string =>
    `BX${condition} ${rn}`,
  compareTest: (
    opcode: ARMOpcode,
    rn: Register,
    operand: ARMOperand,
    condition?: ARMCondition,
  ) => `${opcode}${condition || ''} ${rn}, ${stringify.operand(operand)}`,
  move: (
    opcode: ARMOpcode,
    rd: Register,
    operand: ARMOperand,
    condition?: ARMCondition,
    set = false,
  ) =>
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
    `${acc ? 'MLA' : 'MUL'}${condition || ''}${
      set ? 'S' : ''
    } ${rd}, ${rm}, ${rs}` + (acc ? `, ${rn}` : ''),
  singleDataTransfer: (
    opcode: ARMOpcode.load | ARMOpcode.store,
    rd: Register,
    address: ARMAddress,
    condition?: ARMCondition,
    byte = false,
    post = false,
  ): string => `${opcode}${condition || ''}${byte ? 'B' : ''}${post ? 'T' : ''} ${rd}, ${stringify.address(address)}`,
}

// ------------------ UTILITY --------------------

const assemblyHeader = '.text\n\n'
const globalMain = '.global main\n'

const label = (name: string): string =>
    `${name}:`

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

console.log(construct.singleDataTransfer(ARMOpcode.store, Register.r1, ['post', Register.r2, '#1']))

// :( export { assemblyHeader, globalMain, ARMCondition, ARMOpcode, constructInstruction, construct }
