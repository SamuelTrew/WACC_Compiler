import { WJSCAst } from '../util/WJSCAst'
import { SemError, WJSCErrorLog } from '../util/WJSCErrors'
import { hasSameType, TypeName } from '../util/WJSCType'

export class WJSCSymbolTable {
  private symbolTable: WJSCSymbolTableEntry[]
  private childrenTables: WJSCSymbolTable[]
  private isInFunction: boolean
  private readonly currentScopeLevel: number
  private readonly errorLog: WJSCErrorLog
  private functionName?: string
  private parentLevel?: WJSCSymbolTable

  constructor(
    scopeLevel: number,
    parentLevel: WJSCSymbolTable | undefined,
    isInFunction: boolean,
    errorLog: WJSCErrorLog,
  ) {
    this.currentScopeLevel = scopeLevel
    this.symbolTable = []
    this.childrenTables = []
    this.parentLevel = parentLevel
    this.isInFunction = isInFunction
    this.errorLog = errorLog
  }

  public getScopeLevel = (): number => {
    return this.currentScopeLevel
  }

  public getParentTable = (): WJSCSymbolTable | undefined => {
    return this.parentLevel
  }

  // Return if this table is inside a function declaration
  public inFunction = (): boolean => {
    return this.isInFunction
  }

  // Return the name of function declaration containing this table
  public getFunctionName = (): string | undefined => {
    let functionName = this.functionName
    if (!functionName && this.parentLevel) {
      functionName = this.parentLevel.getFunctionName()
    }
    return functionName
  }

  // Create new child symbol table
  public enterScope = (): WJSCSymbolTable => {
    const childTable = new WJSCSymbolTable(
      this.currentScopeLevel + 1,
      this,
      this.isInFunction,
      this.errorLog,
    )
    this.childrenTables.push(childTable)
    return childTable
  }

  // Create new child symbol table and store function name
  public enterFuncScope = (functionName: string): WJSCSymbolTable => {
    const childTable = this.enterScope()
    childTable.functionName = functionName
    childTable.isInFunction = true
    return childTable
  }

  // Return the parent symbol table
  public exitScope = (): WJSCSymbolTable => {
    if (this.parentLevel !== undefined) {
      return this.parentLevel
    }
    this.errorLog.runtimeError(new Error('Cannot exit from top level scope'))
    return this
  }

  // Add an entry to the symbol table with optional function params
  public insertSymbol = (
    identifier: string,
    type: TypeName,
    params?: TypeName[],
  ) => {
    this.symbolTable.push({ identifier, type, params })
  }

  // Return the type of entry with given identifier if found
  public lookup = (identifier: string): TypeName => {
    let result
    const entry = this.getGlobalEntry(identifier)
    if (entry) {
      result = entry.type
    }
    return result
  }

  // Return table entry with the given identifier in the local scope
  public getLocalEntry = (identifier: string):
      WJSCSymbolTableEntry | undefined => {
    let result
    this.symbolTable.forEach((entry) => {
      if (entry.identifier === identifier) {
        result = entry
      }
    })
    return result
  }

  // Return table entry with the given identifier in the global scope
  public getGlobalEntry = (identifier: string):
      WJSCSymbolTableEntry | undefined => {
    let result = this.getLocalEntry(identifier)
    if (!result && this.parentLevel) {
      result = this.parentLevel.getGlobalEntry(identifier)
    }
    return result
  }

  // Return whether the node given has the same type in the symbol table
  public checkType = (astNode: WJSCAst): boolean => {
    const lookupResult = this.lookup(astNode.token)
    if (lookupResult === undefined) {
      this.errorLog.semErr(astNode, SemError.Undefined)
      return false
    } else {
      if (!hasSameType(lookupResult, astNode.type)) {
        this.errorLog.semErr(astNode, SemError.Mismatch, lookupResult)
        return false
      }
    }
    return true
  }

  // Decircularize the symbol table for printing
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
  params?: TypeName[]
}
