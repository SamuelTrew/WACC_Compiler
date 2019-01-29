type TypeName = BaseType | ArrayType | PairType
type BaseType = 'int' | 'bool' | 'char' | 'string' | 'pair'

interface ArrayType {
  arrayType: TypeName
}

interface PairType {
  pairType: [TypeName, TypeName]
}

class WJSCType {

  public static isBaseType = (tname: any): tname is BaseType =>
    typeof tname === 'string' && (
      tname === 'int'
      || tname === 'bool'
      || tname === 'char'
      || tname === 'string'
      || tname === 'pair'
    )

  public static isArrayType = (tname: any): tname is ArrayType =>
    tname.arrayType !== undefined && WJSCType.isBaseType(tname.arrayType)

  public static isPairType = (tname: any): tname is PairType =>
    tname.pairType !== undefined
    && WJSCType.isBaseType(tname.pairType[0])
    && WJSCType.isBaseType(tname.pairType[1])

  public static hasSameType = (typeA: TypeName, typeB: TypeName): boolean => {
    if (WJSCType.isBaseType(typeA)) {
      return WJSCType.isBaseType(typeB) && typeA === typeB
    } else if (WJSCType.isArrayType(typeA)) {
      return WJSCType.isArrayType(typeB) && typeA.arrayType === typeB.arrayType
    } else if (WJSCType.isPairType(typeA)) {
      return WJSCType.isPairType(typeB)
        && typeA.pairType[0] === typeB.pairType[0]
        && typeA.pairType[1] === typeB.pairType[1]
    } else {
      return false
    }
  }

}

export { TypeName, BaseType, PairType, WJSCType }
