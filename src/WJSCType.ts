import { ErrType } from './WJSCErrors'

type TypeName = BaseType | ArrayType | PairType | ErrType | undefined

enum BaseType {
  Integer = 'int',
  Boolean = 'bool',
  Character = 'char',
  String = 'str',
  Pair = 'pair',
  Any = 'any',
  None = 'none',
}

interface ArrayType {
  arrayType: TypeName
}

interface PairType {
  pairType: [TypeName, TypeName]
}

export type TerminalType = TerminalKeywords
  | TerminalOperators
  | BaseType

enum TerminalKeywords {
  Program = 'program',
  Function = 'func',
  Call = 'call',
  Conditional = 'cond',
  Stdlib = 'stdlib',
  Pair = 'pair',
  Type = 'type',
  Identifier = 'ident',
  Separator = 'separator',
  Accessor = 'accessor',
}

enum TerminalOperators {
  Operator = 'operator',
  Assignment = 'assign',
}

const MIN_INT = - Math.pow(2, 31)
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
  if (!typeA || !typeB) { return false }
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
  isPairType, hasSameType, TerminalKeywords, TerminalOperators,
}
