type TypeName = BaseType | ArrayType | PairType | ErrorType | undefined
type BaseType = 'int' | 'bool' | 'char' | 'string' | 'pair'
type ErrorType = 'undefined' | 'mismatch' | 'incorrect arg no'

export type WJSCTerminalType = Keywords
  | Operators
  | Literals
  | 'TYPE_IDENTIFIER'
  | 'IDENTIFIER'
  | 'FUNCTION_CALL'
  | 'SEPARATOR'
type Keywords = 'PROGRAM_KEYWORD'
  | 'FUNCTION_DECL'
  | 'CONDITIONALS'
  | 'STDLIB'
  | 'PAIR_ACCESSOR'
type Operators = 'UNARY_OPERATOR' | 'BINARY_OPERATOR' | 'ASSIGNMENT_OPERATOR'
type Literals = 'INT_LITERAL'
  | 'CHAR_LITERAL'
  | 'BOOL_LITERAL'
  | 'STRING_LITERAL'
  | 'PAIR_LITERAL'

interface ArrayType {
  arrayType: TypeName
}

interface PairType {
  pairType: [TypeName, TypeName]
}

// tslint:disable-next-line:no-bitwise
const MIN_INT = - (1 << 31)
const MAX_INT = (- MIN_INT) - 1

const isWJSCType = (tname: any): tname is TypeName =>
  isBaseType(tname) || isArrayType(tname) || isPairType(tname)

const isBaseType = (tname: any): tname is BaseType =>
  typeof tname === 'string' && (
    tname === 'int'
    || tname === 'bool'
    || tname === 'char'
    || tname === 'string'
    || tname === 'pair'
  )

const isArrayType = (tname: any): tname is ArrayType =>
  tname.arrayType !== undefined && isWJSCType(tname.arrayType)

const isPairType = (tname: any): tname is PairType =>
  tname.pairType !== undefined
  && isBaseType(tname.pairType[0])
  && isBaseType(tname.pairType[1])

const hasSameType = (typeA?: TypeName, typeB?: TypeName): boolean => {
  if (isBaseType(typeA)) {
    return isBaseType(typeB) && typeA === typeB
  } else if (isArrayType(typeA)) {
    return isArrayType(typeB) && typeA.arrayType === typeB.arrayType
  } else if (isPairType(typeA)) {
    return isPairType(typeB)
      && typeA.pairType[0] === typeB.pairType[0]
      && typeA.pairType[1] === typeB.pairType[1]
  } else {
    return false
  }
}

export {
  MAX_INT, MIN_INT, TypeName, BaseType, PairType, isBaseType, isArrayType,
  isPairType, hasSameType,
}
