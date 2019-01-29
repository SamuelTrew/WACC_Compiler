import { typename } from './WJSCAst'
import { WJSCSymbolTableEntry } from './WJSCSymbolTableEntry'

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

  public insertSymbol = (identifier: string, type: typename) => {
    this.symboltable.push({ identifier, type })
  }

  public localLookup = (identifier: string, type: typename): boolean => {
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
