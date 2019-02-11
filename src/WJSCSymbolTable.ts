import { WJSCAst } from './WJSCAst'
import { SemError, WJSCErrorLog } from './WJSCErrors'
import { BaseType, hasSameType, TypeName } from './WJSCType'

export class WJSCSymbolTable {

  private functionName?: string
  private currentScopeLevel: number
  private symbolTable: WJSCSymbolTableEntry[]
  private childrenTables: WJSCSymbolTable[]
  private parentLevel?: WJSCSymbolTable
  private isInFunction: boolean
  private readonly errorLog: WJSCErrorLog
  private readonly STDLIB_FUNCTIONS: WJSCSymbolTableEntry[] = [
    {
      identifier: 'free',
      params: [
        BaseType.Pair,
      ],
      type: BaseType.None,
    },
  ]

  constructor(scopeLevel: number,
              parentLevel: WJSCSymbolTable | undefined,
              isInFunction: boolean,
              errorLog: WJSCErrorLog) {
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

  public inFunction = (): boolean => {
    return this.isInFunction
  }

  public getFunctionName = (): string | undefined => {
    return this.functionName
  }

  // Create new child symbol table
  public enterScope = (): WJSCSymbolTable => {
    console.log('Entering scope...')
    const childTable = new WJSCSymbolTable(
      this.currentScopeLevel + 1, this, this.isInFunction, this.errorLog)
    this.childrenTables.push(childTable)
    return childTable
  }

  public enterFuncScope = (functionName: string): WJSCSymbolTable => {
    const childTable = this.enterScope()
    childTable.functionName = functionName
    childTable.isInFunction = true
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
  public insertSymbol = (identifier: string, type: TypeName,
    params?: TypeName[]) => {
    console.log(`Inserting key/value pair ${identifier}:${type}`)
    this.symbolTable.push({ identifier, type, params })
  }

  // Lookup the WJSCAst node with the given identifier in the local scope
  // Return the type if found
  public localLookup = (identifier: string): TypeName => {
    let result
    this.symbolTable.forEach((entry) => {
      if (entry.identifier === identifier) {
        console.log(entry.identifier + ':' + entry.type)
        result = entry.type
      }
    })
    return result
  }

  // Lookup the WJSCAst node with the given identifier in the local scope and
  // all its parent scopes. Return the type if found, undefined otherwise.
  public globalLookup = (identifier: string): TypeName => {
    let result = this.localLookup(identifier)
    if (!result && this.parentLevel !== undefined) {
      console.log('Recursive lookup')
      result = this.parentLevel.globalLookup(identifier)
    }
    return result
  }

  // Return whether the node given has the same type in the symbol table
  public checkType = (astNode: WJSCAst): boolean => {
    const lookupResult = this.globalLookup(astNode.token)
    console.log(`${astNode.token} should have type ${lookupResult},`
      + ` actual type ${astNode.type}.`)
    if (lookupResult === undefined) {
      this.errorLog.nodeLog(astNode, SemError.Undefined)
      return false
    } else {
      if (!hasSameType(lookupResult, astNode.type)) {
        this.errorLog.nodeLog(astNode, SemError.Mismatch, lookupResult)
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
  params?: TypeName[]
}
