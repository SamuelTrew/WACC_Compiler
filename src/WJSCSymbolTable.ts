import { hasSameType, TypeName } from './WJSCType'

export class WJSCSymbolTable {

  private currentScopeLevel: number
  private symbolTable: WJSCSymbolTableEntry[]
  private parentLevel?: WJSCSymbolTable

  constructor(scopeLevel: number, parentLevel: WJSCSymbolTable | undefined) {
    this.currentScopeLevel = scopeLevel
    this.symbolTable = []
    this.parentLevel = parentLevel
  }

  public enterScope = (): WJSCSymbolTable => {
    return new WJSCSymbolTable(this.currentScopeLevel++, this)
  }

  // Add an entry to the symbol table
  public insertSymbol = (identifier: string, type: TypeName) => {
    this.symbolTable.push({ identifier, type })
  }

  // Check if identifier exists in the local scope.
  // If it does performs type check, else return false.
  public localLookup = (identifier: string, type: TypeName): boolean | string => {
    this.symbolTable.forEach((entry) => {
      if (entry.identifier === identifier) {
        return hasSameType(entry.type, type) ||
           'expression has type: ' + type + ', expected: ' + entry.type
      }
    })
    return false
  }

  // Check if identifier exists in symbol table.
  // If it does performs type check, else return false.
  public lookup = (identifier: string, type: TypeName): boolean | string => {
    // Perform localLookup and recursive global lookup
    const lookupResult = this.localLookup(identifier, type)
    if (typeof lookupResult === 'boolean') {
      if (lookupResult === true) {
        return true
      } else if (this.parentLevel) {
        this.parentLevel.lookup(identifier, type)
      }
    } else {
      return lookupResult
    }
    return false
  }
}

export interface WJSCSymbolTableEntry {
  identifier: string
  type: TypeName
}
