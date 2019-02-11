import { ErrType } from './WJSCErrors'

type TypeName = BaseType | ArrayType | PairType | ErrType | undefined

enum BaseType {
  Integer = 'int',
  Boolean = 'bool',
  Character = 'char',
  String = 'string',
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

// Check if the given types are the same or equivalent.
// 'pair' can be element of a pair and is equivalent to a PairType
const hasSameType = (typeA?: TypeName, typeB?: TypeName): boolean => {
  if (!typeA || !typeB) { return false }
  if (isBaseType(typeA) && isBaseType(typeB)) {
    return typeA === typeB
  } else if (isPairType(typeA)) {
    return hasSameType(typeB, BaseType.Pair)
      || isPairType(typeB)
      && hasSameType(typeA.pairType[0], typeB.pairType[0])
      && hasSameType(typeA.pairType[1], typeB.pairType[1])
  } else if (isPairType(typeB)) {
    return hasSameType(typeA, BaseType.Pair)
      || isPairType(typeA)
      && hasSameType(typeA.pairType[0], typeB.pairType[0])
      && hasSameType(typeA.pairType[1], typeB.pairType[1])
  } else if (isArrayType(typeA) && isArrayType(typeB)) {
    return hasSameType(typeA.arrayType, typeB.arrayType)
  } else {
    return false
  }
}

// Return type of the first element of a pair
const getFstInPair = (pairType: PairType): TypeName => {
  return pairType.pairType[0]
}

// Return type of the second element of a pair
const getSndInPair = (pairType: PairType): TypeName => {
  return pairType.pairType[1]
}

export {
  MAX_INT, MIN_INT, TypeName, BaseType, ArrayType, PairType, isBaseType,
  isArrayType, isPairType, hasSameType, TerminalKeywords, TerminalOperators,
  getFstInPair, getSndInPair,
}
