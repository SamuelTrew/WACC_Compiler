import { WJSCAst } from './WJSCAst'
import { WJSCErrorLog } from './WJSCErrors'
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
    if (this.parentLevel !==  undefined) {
      return this.parentLevel
    }
    this.errorLog.pushError('Cannot exit from top level scope')
  }

  // Add an entry to the symbol table
  public insertSymbol = (identifier: string, node: WJSCAst) => {
    this.symbolTable.push({ identifier, node })
  }

  // Return type of identifier in the local scope or undefined if not found.
  public checkLocalType = (astNode: WJSCAst): TypeName => {
    const identifier = astNode.token
    const givenType = astNode.type
    this.symbolTable.forEach((entry) => {
      if (entry.identifier === identifier) {
        const foundType = entry.node.type
        if (hasSameType(foundType, givenType)) {
          return givenType
        } else {
          this.errorLog.log(astNode, 'mismatch', foundType)
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
  node: WJSCAst
}
