import { WJSCAst } from './WJSCAst'
import { WJSCErrorLog } from './WJSCErrors'
import { hasSameType, TypeName } from './WJSCType'

export class WJSCSymbolTable {

  private currentScopeLevel: number
  private symbolTable: WJSCSymbolTableEntry[]
  private parentLevel?: WJSCSymbolTable
  private errorLog: WJSCErrorLog

  constructor(scopeLevel: number, parentLevel: WJSCSymbolTable | undefined, errorLog: WJSCErrorLog) {
    // TODO pass it the error log
    this.currentScopeLevel = scopeLevel
    this.symbolTable = []
    this.parentLevel = parentLevel
    this.errorLog = errorLog
  }

  public enterScope = (): WJSCSymbolTable => {
    return new WJSCSymbolTable(this.currentScopeLevel++, this, this.errorLog)
  }

  // Add an entry to the symbol table
  public insertSymbol = (identifier: string, type: TypeName) => {
    this.symbolTable.push({ identifier, type })
  }

  // Return type of identifier in the local scope or undefined if not found.
  public checkLocalType = (astNode: WJSCAst): TypeName => {
    const identifier = astNode.token
    const type = astNode.type
    this.symbolTable.forEach((entry) => {
      if (entry.identifier === identifier) {
        if (hasSameType(entry.type, type)) {
          return entry.type
        } else {
          this.errorLog.log(astNode, 'mismatch', entry.type)
          return 'mismatch'
        }
      }
    })
    return 'undefined'
  }

  // Return type of identifier in the symbol table or undefined if not found.
  public checkType = (astNode: WJSCAst): TypeName => {
    // Perform checkLocalType and recursive global checkType
    let lookupResult = this.checkLocalType(astNode)
    if (this.parentLevel !== undefined && lookupResult === 'undefined') {
      lookupResult = this.parentLevel.checkType(astNode)
    }
    if (lookupResult === 'undefined') {
      this.errorLog.log(astNode, 'undefined')
    }
    return lookupResult
  }
}

export interface WJSCSymbolTableEntry {
  identifier: string
  type: TypeName
}
