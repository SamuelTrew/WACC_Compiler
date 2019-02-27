import { WJSCAst } from '../util/WJSCAst'
import { SemError, WJSCErrorLog } from '../util/WJSCErrors'
import { hasSameType, TypeName } from '../util/WJSCType'

export class WJSCSymbolTable {
  private symbolTable: Map<string, WJSCSymbolTableValue>
  private childrenTables: WJSCSymbolTable[]
  private isInFunction: boolean
  private readonly tableNumber: number
  private readonly errorLog: WJSCErrorLog
  private functionName?: string
  private parentLevel?: WJSCSymbolTable

  constructor(scopeLevel: number, parentLevel: WJSCSymbolTable | undefined, isInFunction: boolean, errorLog: WJSCErrorLog) {
    this.tableNumber = scopeLevel
    this.symbolTable = new Map()
    this.childrenTables = []
    this.parentLevel = parentLevel
    this.isInFunction = isInFunction
    this.errorLog = errorLog
  }

  public getTableNumber = (): number => this.tableNumber

  public getParentTable = (): WJSCSymbolTable | undefined => this.parentLevel

  // Return if this table is inside a function declaration
  public inFunction = (): boolean => this.isInFunction

  // Return the name of function declaration containing this table
  public getFunctionName = (): string | undefined => this.functionName || (this.parentLevel ? this.parentLevel.getFunctionName() : undefined)

  // Create new child symbol table
  public enterScope = (tableNumber: number): WJSCSymbolTable => {
    const childTable = new WJSCSymbolTable(tableNumber, this, this.isInFunction, this.errorLog)
    this.childrenTables.push(childTable)
    return childTable
  }

  // Create new child symbol table and store function name
  public enterFuncScope = (functionName: string, tableNumber: number): WJSCSymbolTable => {
    const childTable = this.enterScope(tableNumber)
    childTable.functionName = functionName
    childTable.isInFunction = true
    return childTable
  }

  // Return the parent symbol table
  public exitScope = (): WJSCSymbolTable => (this.parentLevel || (this.errorLog.runtimeError(new Error('Cannot exit from top level scope')), this))

  // Add an entry to the symbol table with optional function params
  public insertSymbol = (identifier: string, type: TypeName, params?: TypeName[]) => this.symbolTable.set(identifier, { type, params })

  // Return the type of entry with given identifier if found
  public lookup = (identifier: string): TypeName => (this.getGlobalEntry(identifier) || { type: undefined }).type

  // Return table entry with the given identifier in the local scope
  public getLocalEntry = (identifier: string): WJSCSymbolTableValue | undefined => this.symbolTable.get(identifier)

  // Return table entry with the given identifier in the global scope
  public getGlobalEntry = (identifier: string): WJSCSymbolTableValue | undefined => this.getLocalEntry(identifier) || (this.parentLevel || { getGlobalEntry: (_: string): undefined => undefined }).getGlobalEntry(identifier)

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

  // Store stack pointer offset of id
  public setVarMemAddr(id: string, offset: number) {
    const entry = this.getGlobalEntry(id)
    if (entry) {
      entry.spOffset = offset
    } else {
      console.log(`Can't set variable memory address`)
    }
  }

  // Get stack pointer offset of id
  public getVarMemAddr(id: string): number {
    const entry = this.getGlobalEntry(id)
    if (entry && entry.spOffset) {
      return entry.spOffset
    } else {
      console.log(`Can't get variable memory address`)
    }
    return -10000
  }

  // Decircularize the symbol table for printing
  public clearParentDependencies = () => {
    this.parentLevel = undefined
    this.childrenTables.forEach((table) => table.clearParentDependencies())
  }

  public json = (): object => (this.clearParentDependencies(), this)
}

export interface WJSCSymbolTableValue {
  type: TypeName
  spOffset?: number
  params?: TypeName[]
}
