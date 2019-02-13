type TypeName = BaseType | ArrayType | PairType | undefined

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

export type TerminalType = TerminalKeywords | TerminalOperators | BaseType

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

enum Stdlib {
  Free = 'free',
  Exit = 'exit',
  Print = 'print',
  Println = 'println',
  Fst = 'fst',
  Snd = 'snd',
}

enum TerminalOperators {
  Operator = 'operator',
  Assignment = 'assign',
}

const MIN_INT = -Math.pow(2, 31)
const MAX_INT = -MIN_INT - 1

const isWJSCType = (tname: any): tname is TypeName =>
  isBaseType(tname) || isArrayType(tname) || isPairType(tname)

const isBaseType = (tname: any): tname is BaseType =>
  typeof tname === 'string' &&
  (tname === 'int' ||
    tname === 'bool' ||
    tname === 'char' ||
    tname === 'string' ||
    tname === 'pair' ||
    tname === 'any')

const isArrayType = (tname: any): tname is ArrayType =>
  tname !== undefined && tname.arrayType !== undefined
    && isWJSCType(tname.arrayType)

const isPairType = (tname: any): tname is PairType =>
  tname !== undefined && tname.pairType !== undefined

const hasSameType = (typeA?: TypeName, typeB?: TypeName): boolean => {
  if (!typeA || !typeB) {
    return false
  }
  if (isBaseType(typeA) && isBaseType(typeB)) {
    return typeA === typeB || typeA === BaseType.Any || typeB === BaseType.Any
  } else if (isPairType(typeA)) {
    return (
      hasSameType(typeB, BaseType.Pair) ||
      (isPairType(typeB) &&
        hasSameType(typeA.pairType[0], typeB.pairType[0]) &&
        hasSameType(typeA.pairType[1], typeB.pairType[1]))
    )
  } else if (isPairType(typeB)) {
    return (
      hasSameType(typeA, BaseType.Pair) ||
      (isPairType(typeA) &&
        hasSameType(typeA.pairType[0], typeB.pairType[0]) &&
        hasSameType(typeA.pairType[1], typeB.pairType[1]))
    )
  } else if (isArrayType(typeA) && hasSameType(typeB, BaseType.String)) {
    return typeA.arrayType === BaseType.Character
  } else if (isArrayType(typeB) && hasSameType(typeA, BaseType.String)) {
    return typeB.arrayType === BaseType.Character
  } else if (isArrayType(typeA) && isArrayType(typeB)) {
    return hasSameType(typeA.arrayType, typeB.arrayType)
  } else {
    return false
  }
}

const getFstInPair = (pairType: PairType): TypeName => {
  return pairType.pairType[0]
}

const getSndInPair = (pairType: PairType): TypeName => {
  return pairType.pairType[1]
}

export {
  MAX_INT,
  MIN_INT,
  TypeName,
  BaseType,
  ArrayType,
  PairType,
  isBaseType,
  isArrayType,
  isPairType,
  hasSameType,
  TerminalKeywords,
  TerminalOperators,
  getFstInPair,
  getSndInPair,
  Stdlib,
}
