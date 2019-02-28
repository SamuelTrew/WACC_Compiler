const { WJSCErrorLog } = require('../build/util/WJSCErrors')
const { WJSCSymbolTable } = require('../build/frontend/WJSCSymbolTable')
const assert = require('assert')

describe('Scope', function () {
  let errorLog = new WJSCErrorLog()
  const symbolTable = new WJSCSymbolTable(0, undefined, false, errorLog)
  describe('Enter Scope', function () {
    const childTable = symbolTable.enterScope()
    it('should have set parent level', function () {
      assert(childTable.getParentTable() !== undefined)
      assert(childTable.getParentTable() === symbolTable)
    })
  })
  describe('Enter Function Scope', function () {
    const functionName = 'f'
    const childTable = symbolTable.enterFuncScope(functionName)
    it('should have set parent level', function () {
      assert(childTable.getParentTable() !== undefined)
      assert(childTable.getParentTable() === symbolTable)
    })
    it('should store function name', function () {
      assert(childTable.getFunctionName() === functionName)
    })
  })
})
