type Operation = Arithmetic | Branch | Load | PushPop

interface Instr {
  operation: Operation
}

interface LableInstr extends Instr {
  label: string
}

interface LoadInstr extends Instr {
  Rd: Register
  a_mode2: string
}

interface PushPopInstr extends Instr {
  reglist: Register[]
}

enum Arithmetic {
  Add = 'ADD',
}

enum Branch {
  BranchWithLink = 'BL',
}

enum Load {
  Load = 'LDR',
}

enum PushPop {
  Push = 'PUSH',
  Pop = 'POP',
}

enum Register {
  r0 = 'r0',
  r1 = 'r1',
  r2 = 'r2',
  r3 = 'r3',
  r4 = 'r4',
  r5 = 'r5',
  pc = 'pc',
}

const assemblyHeader = '.text\n\n'

const resultReg = Register.r0

const allRegs
    = Object.keys(Register).map((k) => Register[k as any])

const load = (Rd: Register, aMode2: string): string => {
  return `${Load.Load} ${Rd}, =${aMode2}`
}
