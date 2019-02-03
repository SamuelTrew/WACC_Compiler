import { WJSCAst } from './WJSCAst'
import { SemError, WJSCErrorLog } from './WJSCErrors'
import { hasSameType, TypeName } from './WJSCType'

export class WJSCSymbolTable {

  private currentScopeLevel: number
  private symbolTable: WJSCSymbolTableEntry[]
  private parentLevel?: WJSCSymbolTable
  private errorLog: WJSCErrorLog

  constructor(scopeLevel: number, parentLevel: WJSCSymbolTable | undefined, errorLog: WJSCErrorLog) {
    this.currentScopeLevel = scopeLevel
    this.symbolTable = []
    this.parentLevel = parentLevel
    this.errorLog = errorLog
  }

  public enterScope = (): WJSCSymbolTable => {
    return new WJSCSymbolTable(this.currentScopeLevel++, this, this.errorLog)
  }

  public exitScope = (): WJSCSymbolTable | undefined => {
    if (this.parentLevel !== undefined) {
      return this.parentLevel
    }
    this.errorLog.pushError('Cannot exit from top level scope')
  }

  // Add an entry to the symbol table
  public insertSymbol = (identifier: string, node: WJSCAst) => {
    this.symbolTable.push({ identifier, node })
  }

  public globalLookup = (identifier: string): WJSCAst | undefined => {
    let result = this.localLookup(identifier)
    if (result === undefined && this.parentLevel !== undefined) {
      result = this.parentLevel.globalLookup(identifier)
    }
    return result
  }

  // Return type of identifier in the symbol table or undefined if not found.
  public checkType = (astNode: WJSCAst): boolean => {
    // Perform checkLocalType and recursive global checkType
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

  private localLookup = (identifier: string): WJSCAst | undefined => {
    this.symbolTable.forEach((entry) => {
      if (entry.identifier === identifier) {
        return entry.node
      }
    })
    return undefined
  }
}

export interface WJSCSymbolTableEntry {
  identifier: string
  node: WJSCAst
}
