enum JSAssignmentOperators {
  Assignment = '=',
  AdditionAssignment = '+=',
  SubtractionAssignment = '-=',
  MultiplicationAssignment = '*=',
  DivisionAssignment = '/=',
  RemainderAssignment = '%=',
  LeftShiftAssignment = '<<=',
  RightShiftAssignment = '>>=',
  UnsignedRightShiftAssignment = '>>>=',
  BitwiseAndAssignment = '&=',
  BitwiseXorAssignment = '^=',
  BitwiseOrAssignment = '|=',
}

enum JSComparisonOperators {
  Equal = '==',
  NotEqual = '!=',
  StrictEqual = '===',
  StrictNotEqual = '!==',
  GreaterThan = '>',
  GreaterEqual = '>=',
  LessThan = '<',
  LessEqual = '<=',
}

enum JSArithmeticOperators {
  Addition = '+',
  Subtraction = '-',
  Multiplication = '*',
  Divide = '/',
  Remainder = '%',
  Exponentiation = '**',
}

enum JSUnaryArithmeticOperators {
  Increment = '++',
  Decrement = '--',
  UnaryNegation = '-',
  UnaryPlus = '+',
}

enum JSBitwiseOperators {
  And = '&',
  Or = '|',
  Xor = '^',
  LeftShift = '<<',
  RightShift = '>>',
  UnsignedRightShift = '>>>',
}

enum JSUnaryBitwiseOperators {
  Not = '~',
}

enum JSLogicalOperators {
  And = '&&',
  Or = '||',
}

enum JSUnaryLogicalOperators {
  Not = '!',
}

enum JSDeclarationKeywords {
  var = 'var',
  let = 'let',
  const = 'const',
}

enum JSStatTypes {
  Block,
  Declaration,
  IfElse,
  Sequential,
  While,
  Return,
  Empty,
  Void,
}

enum JSExprTypes {
  Function,
  Terminal,
  Array,
  Pair,
  Binary,
  Assignment,
  Unary,
  Call,
  ArrayElem,
  PairElem,
  Nested,
}

type JSBinaryOperators = JSComparisonOperators | JSArithmeticOperators | JSBitwiseOperators | JSLogicalOperators
type JSUnaryOperators = JSUnaryArithmeticOperators | JSUnaryBitwiseOperators | JSUnaryLogicalOperators

interface JSStatBase {
  type: JSStatTypes
}

interface JSSeqStat extends JSStatBase {
  stat1: JSStat
  stat2: JSStat
}

interface JSDeclaration extends JSStatBase {
  decl: JSDeclarationKeywords
  iden: string
  expr?: JSExpr
}

interface JSBlock extends JSStatBase {
  blck: JSStat
}

interface JSIfElse extends JSStatBase {
  cond: JSExpr
  stat1: JSStat
  stat2: JSStat
}

interface JSWhile extends JSStatBase {
  cond: JSExpr
  body: JSStat
}

interface JSReturn extends JSStatBase {
  expr: JSExpr
}

interface JSVoidStatement extends JSStatBase {
  expr: JSExpr
}

interface JSExprBase {
  type: JSExprTypes
}

interface JSNestedExpr extends JSExprBase {
  expr: JSExpr
}

interface JSFunctionCall extends JSExprBase {
  iden: string
  args: JSExpr[]
}

interface JSTerminalExpr extends JSExprBase {
  value: any
}

interface JSArrayExpr extends JSExprBase {
  values: JSExpr[]
}

interface JSArrayElem extends JSExprBase {
  typeName: 'array' | 'string'
  arr: string
  indx: JSExpr[]
}

interface JSPairElem extends JSExprBase {
  pair: JSExpr
  indx: 0 | 1
}

interface JSPairExpr extends JSExprBase {
  pairValues: [JSExpr, JSExpr]
}

interface JSBinaryExpr extends JSExprBase {
  operator: JSBinaryOperators | JSAssignmentOperators
  expr1: JSExpr
  expr2: JSExpr
}

interface JSAssignment extends JSExprBase {
  lhs: JSExpr
  rhs: JSExpr
}

interface JSUnaryExpr extends JSExprBase {
  operator: JSUnaryOperators
  expr: JSExpr
}

interface JSFunction {
  name: string
  params: string[]
  body: JSStat
}

type JSStat = JSDeclaration | JSBlock | JSSeqStat | JSIfElse | JSWhile | JSReturn | JSStatBase | JSVoidStatement
type JSExpr = JSTerminalExpr | JSBinaryExpr | JSUnaryExpr | JSArrayExpr | JSPairExpr | JSFunctionCall | JSAssignment | JSArrayElem | JSPairElem | JSNestedExpr

const statMap = new Map<JSStatTypes, (stat: JSStat) => string>([
  [JSStatTypes.Empty, () => ';'],
  [JSStatTypes.Block, (stat) => `{${stringify.stat((stat as JSBlock).blck)}}`],
  [JSStatTypes.Declaration, (stat) => {
    const { decl, iden, expr } = stat as JSDeclaration
    return `${decl} ${iden}` + (expr ? `=${stringify.expr(expr)}` : '')
  }],
  [JSStatTypes.IfElse, (stat) => {
    const { cond, stat1, stat2 } = stat as JSIfElse
    return `if(${stringify.expr(cond)}){${stringify.stat(stat1)}}else{${stringify.stat(stat2)}}`
  }],
  [JSStatTypes.Sequential, (stat) => {
    const { stat1, stat2 } = stat as JSSeqStat
    return `${stringify.stat(stat1)};${stringify.stat(stat2)}`
  }],
  [JSStatTypes.While, (stat) => {
    const { cond, body } = stat as JSWhile
    return `while(${stringify.expr(cond)}){${stringify.stat(body)}}`
  }],
  [JSStatTypes.Return, (stat) => {
    const { expr } = stat as JSReturn
    return `return(${stringify.expr(expr)})`
  }],
  [JSStatTypes.Void, (stat) => stringify.expr((stat as JSVoidStatement).expr)],
])

const exprMap = new Map<JSExprTypes, (expr: JSExpr) => string>([
  [JSExprTypes.Terminal, (expr) => (expr = expr as JSTerminalExpr, (((typeof expr.value === 'number') && (expr.value < 0)) ? `(${expr.value})` : expr.value ))],
  [JSExprTypes.Binary, (expr) => (expr = expr as JSBinaryExpr, stringify.expr(expr.expr1) + expr.operator + stringify.expr(expr.expr2))],
  [JSExprTypes.Unary, (expr) => (expr = expr as JSUnaryExpr, (expr as JSUnaryExpr).operator + stringify.expr(expr.expr))],
  [JSExprTypes.Pair, (expr) => (expr = expr as JSPairExpr, `[${stringify.expr(expr.pairValues[0])},${stringify.expr(expr.pairValues[1])}]`)],
  [JSExprTypes.Array, (expr) => (expr = expr as JSArrayExpr, `[${expr.values.map(stringify.expr).join()}]`)],
  [JSExprTypes.Call, (expr) => (expr = expr as JSFunctionCall, `${expr.iden}(${expr.args.map(stringify.expr).join()})`)],
  [JSExprTypes.ArrayElem, (expr) => (expr = expr as JSArrayElem, `${expr.arr}[${expr.indx.map(stringify.expr).join('][')}]`)],
  [JSExprTypes.PairElem, (expr) => (expr = expr as JSPairElem, `${stringify.expr(expr.pair)}[${expr.indx}]`)],
  [JSExprTypes.Assignment, (expr) => (expr = expr as JSAssignment, stringify.expr(expr.lhs) + '=' + stringify.expr(expr.rhs))],
  [JSExprTypes.Nested, (expr) => (expr = expr as JSNestedExpr, `(${stringify.expr(expr.expr)})`)],
])

const stringify = Object.freeze({
  expr: (expr: JSExpr): string => (exprMap.get(expr.type) || (() => { throw new TypeError(`unknown expression ${expr.type}`) }))(expr),
  func: (func: JSFunction | null) => func ? `function ${func.name}(${func.params.join(',')}){${stringify.stat(func.body)}}` : '',
  stat: (stat: JSStat): string => (statMap.get(stat.type) || (() => { throw new TypeError(`unknown statement ${stat.type}`) }))(stat),
})

const reservedKeywords = Object.freeze(['break', 'case', 'catch', 'class',
                                        'const', 'continue', 'debugger',
                                        'default', 'delete', 'do', 'else',
                                        'export', 'extends', 'finally', 'for',
                                        'function', 'if', 'import', 'in',
                                        'instanceof', 'new', 'return', 'super',
                                        'switch', 'this', 'throw', 'try',
                                        'typeof', 'var', 'void', 'while',
                                        'with', 'yield', 'enum', 'implements',
                                        'interface', 'let', 'package',
                                        'private', 'protected', 'public',
                                        'static', 'await', 'null', 'true',
                                        'false', 'strrpl'])

export {
  JSStat,
  JSExpr,
  JSFunction,
  JSSeqStat,
  JSDeclaration,
  JSBlock,
  JSIfElse,
  JSWhile,
  JSReturn,
  JSStatTypes,
  JSDeclarationKeywords,
  JSFunctionCall,
  JSPairExpr,
  JSArrayExpr,
  JSVoidStatement,
  JSAssignment,
  JSExprTypes,
  JSTerminalExpr,
  JSArrayElem,
  JSPairElem,
  JSBinaryExpr,
  JSUnaryExpr,
  JSAssignmentOperators,
  JSNestedExpr,
  stringify,
  reservedKeywords,
}
