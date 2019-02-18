type Operation = Arithmetic | Branch | Load | PushPop

interface Instr {
  operation: Operation
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
  lr = 'lr',
}

const assemblyHeader = '.text\n\n'
const globalMain = '.global main\n.main:\n'

const resultReg = Register.r0

const allRegs
    = Object.keys(Register).map((k) => Register[k as any])

const label = (name: string): string =>
    `${name}:`

const load = (Rd: Register, aMode2: string): string =>
    `${Load.Load} ${Rd}, =${aMode2}`

const push = (reglist: Register[]): string[] =>
    reglist.map((reg) => `${PushPop.Push} ${reg}`)

const pop = (reglist: Register[]): string[] =>
    reglist.reverse().map((reg) => `${PushPop.Pop} ${reg}`)
