type TypeName = BaseType | ArrayType | PairType | ErrorType | undefined
type BaseType = 'int' | 'bool' | 'char' | 'string' | 'pair'
type ErrorType = 'undefined' | 'mismatch' | 'incorrect arg no'

interface ArrayType {
  arrayType: TypeName
}

interface PairType {
  pairType: [TypeName, TypeName]
}

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
  TypeName, BaseType, PairType, isBaseType,
  isArrayType, isPairType, hasSameType,
}
