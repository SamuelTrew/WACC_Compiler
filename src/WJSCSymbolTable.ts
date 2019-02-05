import { WJSCAst } from './WJSCAst'
import { SemError, WJSCErrorLog } from './WJSCErrors'
import { hasSameType, TypeName } from './WJSCType'

export class WJSCSymbolTable {

  private currentScopeLevel: number
  private symbolTable: WJSCSymbolTableEntry[]
  private childrenTables: WJSCSymbolTable[]
  private parentLevel?: WJSCSymbolTable
  private readonly errorLog: WJSCErrorLog

  constructor(scopeLevel: number, parentLevel: WJSCSymbolTable | undefined, errorLog: WJSCErrorLog) {
    this.currentScopeLevel = scopeLevel
    this.symbolTable = []
    this.childrenTables = []
    this.parentLevel = parentLevel
    this.errorLog = errorLog
  }

  // Create new child symbol table
  public enterScope = (): WJSCSymbolTable => {
    console.log('Entering scope...')
    const childTable = new WJSCSymbolTable(this.currentScopeLevel++, this, this.errorLog)
    this.childrenTables.push(childTable)
    return childTable
  }

  // Return the parent symbol table
  public exitScope = (): WJSCSymbolTable => {
    console.log('Exiting scope...')
    if (this.parentLevel !== undefined) {
      return this.parentLevel
    }
    this.errorLog.pushError('Cannot exit from top level scope')
    return this
  }

  // Add an entry to the symbol table
  public insertSymbol = (identifier: string, type: TypeName) => {
    console.log(`Inserting key/value pair ${identifier}:${type}`)
    this.symbolTable.push({ identifier, type })
  }

  // Lookup the WJSCAst node with the given identifier in the local scope
  public localLookup = (identifier: string): TypeName | undefined => {
    this.symbolTable.forEach((entry) => {
      if (entry.identifier === identifier) {
        return entry.type
      }
    })
    return undefined
  }

  // Lookup the WJSCAst node with the given identifier in the local scope and
  // all its parent scopes
  public globalLookup = (identifier: string): TypeName | undefined => {
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
      if (!hasSameType(lookupResult, astNode.type)) {
        this.errorLog.log(astNode, SemError.Mismatch, lookupResult)
        return false
      }
    }
    return true
  }

  public clearParentDependencies = () => {
    this.parentLevel = undefined
    this.childrenTables.forEach((table) => table.clearParentDependencies())
  }

  public json = (): object => {
    this.clearParentDependencies()
    return this
  }
}

export interface WJSCSymbolTableEntry {
  identifier: string
  type: TypeName
}
