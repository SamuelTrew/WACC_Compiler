import { TypeName } from './WJSCType'

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

  public insertSymbol = (identifier: string, type: TypeName) => {
    this.symboltable.push({ identifier, type })
  }

  public localLookup = (identifier: string, type: TypeName): boolean => {
    this.symboltable.forEach((entry) => {
      if (entry.identifier === identifier) {
        if (entry.type === type) {
          return true
        } else {
          // Push type error to error log
          return false
        }
      }
    })
    return false
  }
}

export interface WJSCSymbolTableEntry {
  identifier: string
  type: TypeName
}
