import { WJSCAst } from './WJSCAst'
import { SemError, WJSCErrorLog } from './WJSCErrors'
import { hasSameType, TypeName } from './WJSCType'

export class WJSCSymbolTable {

  private currentScopeLevel: number
  private symbolTable: WJSCSymbolTableEntry[]
  private readonly parentLevel?: WJSCSymbolTable
  private readonly errorLog: WJSCErrorLog

  constructor(scopeLevel: number, parentLevel: WJSCSymbolTable | undefined, errorLog: WJSCErrorLog) {
    this.currentScopeLevel = scopeLevel
    this.symbolTable = []
    this.parentLevel = parentLevel
    this.errorLog = errorLog
  }

  // Create new child symbol table
  public enterScope = (): WJSCSymbolTable => {
    return new WJSCSymbolTable(this.currentScopeLevel++, this, this.errorLog)
  }

<<<<<<< HEAD
  public exitScope = (): WJSCSymbolTable | undefined => {
    if (this.parentLevel !== undefined) {
=======
  // Return the parent symbol table
  public exitScope = (): WJSCSymbolTable => {
    if (this.parentLevel !==  undefined) {
>>>>>>> 9deb7027ec94ccc6f2c1846e988f62e8ff55079d
      return this.parentLevel
    }
    this.errorLog.pushError('Cannot exit from top level scope')
    return this
  }

  // Add an entry to the symbol table
  public insertSymbol = (identifier: string, node: WJSCAst) => {
    this.symbolTable.push({ identifier, node })
  }

  // Lookup the WJSCAst node with the given identifier in the local scope
  public localLookup = (identifier: string): WJSCAst | undefined => {
    this.symbolTable.forEach((entry) => {
      if (entry.identifier === identifier) {
        return entry.node
      }
    })
    return undefined
  }

  // Lookup the WJSCAst node with the given identifier in the local scope and
  // all its parent scopes
  public globalLookup = (identifier: string): WJSCAst | undefined => {
    let result = this.localLookup(identifier)
    if (result === undefined && this.parentLevel !== undefined) {
      result = this.parentLevel.globalLookup(identifier)
    }
    return result
  }

  // Return whether the node given has the same type in the symbol table
  public checkType = (astNode: WJSCAst): boolean => {
    const lookupResult = this.globalLookup(astNode.token)
    if (lookupResult === undefined) {
      this.errorLog.log(astNode, SemError.Undefined)
      return false
    } else {
      const foundType = lookupResult.type
      if (!hasSameType(foundType, astNode.type)) {
        this.errorLog.log(astNode, SemError.Mismatch, foundType)
        return false
      }
    }
    return true
  }
}

export interface WJSCSymbolTableEntry {
  identifier: string
  node: WJSCAst
}
