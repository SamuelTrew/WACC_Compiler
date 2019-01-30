import { hasSameType, TypeName } from './WJSCType'

export class WJSCSymbolTable {

  private currentScopeLevel: number
  private symboltable: WJSCSymbolTableEntry[]
  private parentLevel: WJSCSymbolTable

  constructor(scopeLevel: number, parentLevel: WJSCSymbolTable) {
    this.currentScopeLevel = scopeLevel
    this.symboltable = []
    this.parentLevel = parentLevel
  }

  public enterScope = (): WJSCSymbolTable => {
    return new WJSCSymbolTable(this.currentScopeLevel++, this)
  }

  // Add an entry to the symbol table
  public insertSymbol = (identifier: string, type: TypeName) => {
    this.symboltable.push({ identifier, type })
  }

  // Check if identifier exitsts in the local scope.
  // If it does performs type check, else return false.
  public localLookup = (identifier: string, type: TypeName): boolean | string => {
    this.symboltable.forEach((entry) => {
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
    return false
  }
}

export interface WJSCSymbolTableEntry {
  identifier: string
  type: TypeName
}
