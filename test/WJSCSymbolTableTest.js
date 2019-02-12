const { WJSCSymbolTable } = require('../build/WJSCSymbolTable')
const assert = require('assert')

describe('Scope', function() {
  let symbolTable = new WJSCSymbolTable(0, undefined)
  describe('Enter Scope', function() {
    let childTable = symbolTable.enterScope()
    it('should increment scope number', function() {
      assert(childTable.getScopeLevel() === 1)
    })
    it('should have set parent level', function() {
      assert(childTable.getParentTable() !== undefined)
      assert(childTable.getParentTable() === symbolTable)
    })
  })
})
