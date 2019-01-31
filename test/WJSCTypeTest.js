var WJSCType = require('../build/WJSCType')
var assert = require('assert')

describe('Type Check', function () {
  describe('Base Types', function () {
    describe('Integers', function () {
      const type = 'int'
      it('should have base type', function () {
        assert(WJSCType.isBaseType(type))
      })
      it('should not have array type', function () {
        assert(!WJSCType.isArrayType(type))
      })
      it('should not have pair type', function () {
        assert(!WJSCType.isPairType(type))
      })
      it('should compare to itself correctly', function () {
        assert(WJSCType.hasSameType(type, 'int'))
      })
      it('should not compare to strings', function () {
        assert(!WJSCType.hasSameType(type, 'string'))
      })
      it('should not compare to chars', function () {
        assert(!WJSCType.hasSameType(type, 'char'))
      })
      it('should not compare to bools', function () {
        assert(!WJSCType.hasSameType(type, 'bool'))
      })
      it('should not compare to pairs', function () {
        assert(!WJSCType.hasSameType(type, 'pair'))
      })
    })
    describe('Booleans', function () {
      const type = 'bool'
      it('should have base type', function () {
        assert(WJSCType.isBaseType(type))
      })
      it('should not have array type', function () {
        assert(!WJSCType.isArrayType(type))
      })
      it('should not have pair type', function () {
        assert(!WJSCType.isPairType(type))
      })
      it('should compare to itself correctly', function () {
        assert(WJSCType.hasSameType(type, 'bool'))
      })
      it('should not compare to strings', function () {
        assert(!WJSCType.hasSameType(type, 'string'))
      })
      it('should not compare to chars', function () {
        assert(!WJSCType.hasSameType(type, 'char'))
      })
      it('should not compare to ints', function () {
        assert(!WJSCType.hasSameType(type, 'int'))
      })
      it('should not compare to pairs', function () {
        assert(!WJSCType.hasSameType(type, 'pair'))
      })
    })
    describe('Characters', function () {
      const type = 'char'
      it('should have base type', function () {
        assert(WJSCType.isBaseType(type))
      })
      it('should not have array type', function () {
        assert(!WJSCType.isArrayType(type))
      })
      it('should not have pair type', function () {
        assert(!WJSCType.isPairType(type))
      })
      it('should compare to itself correctly', function () {
        assert(WJSCType.hasSameType(type, 'char'))
      })
      it('should not compare to strings', function () {
        assert(!WJSCType.hasSameType(type, 'string'))
      })
      it('should not compare to bools', function () {
        assert(!WJSCType.hasSameType(type, 'bool'))
      })
      it('should not compare to ints', function () {
        assert(!WJSCType.hasSameType(type, 'int'))
      })
      it('should not compare to pairs', function () {
        assert(!WJSCType.hasSameType(type, 'pair'))
      })
    })
    describe('Strings', function () {
      const type = 'string'
      it('should have base type', function () {
        assert(WJSCType.isBaseType(type))
      })
      it('should not have array type', function () {
        assert(!WJSCType.isArrayType(type))
      })
      it('should not have pair type', function () {
        assert(!WJSCType.isPairType(type))
      })
      it('should compare to itself correctly', function () {
        assert(WJSCType.hasSameType(type, 'string'))
      })
      it('should not compare to chars', function () {
        assert(!WJSCType.hasSameType(type, 'char'))
      })
      it('should not compare to bools', function () {
        assert(!WJSCType.hasSameType(type, 'bool'))
      })
      it('should not compare to ints', function () {
        assert(!WJSCType.hasSameType(type, 'int'))
      })
      it('should not compare to pairs', function () {
        assert(!WJSCType.hasSameType(type, 'pair'))
      })
    })
    describe('Invalid Type', function () {
      const type = 'undefined'
      it('should not have base type', function () {
        assert(!WJSCType.isBaseType(type))
      })
      it('should not have array type', function () {
        assert(!WJSCType.isArrayType(type))
      })
      it('should not have pair type', function () {
        assert(!WJSCType.isPairType(type))
      })
      it('should not compare to itself', function () {
        assert(!WJSCType.hasSameType(type, 'undefined'))
      })
    })
  })
  describe('Array types', function () {
    describe('Array of integers', function () {
      const type = { arrayType: 'int' }
      it('should not have base type', function () {
        assert(!WJSCType.isBaseType(type))
      })
      it('should have array type', function () {
        assert(WJSCType.isArrayType(type))
      })
      it('should not have pair type', function () {
        assert(!WJSCType.isPairType(type))
      })
      it('should compare to itself correctly', function () {
        assert(WJSCType.hasSameType(type, type))
      })
      it('should not compare to char arrays', function () {
        assert(!WJSCType.hasSameType(type, { arrayType: 'char' }))
      })
      it('should not compare to bool arrays', function () {
        assert(!WJSCType.hasSameType(type, { arrayType: 'bool' }))
      })
      it('should not compare to string arrays', function () {
        assert(!WJSCType.hasSameType(type, { arrayType: 'string' }))
      })
      it('should not compare to pair arrays', function () {
        assert(!WJSCType.hasSameType(type, { arrayType: 'pair' }))
      })
    })
    describe('Array of booleans', function () {
      const type = { arrayType: 'bool' }
      it('should not have base type', function () {
        assert(!WJSCType.isBaseType(type))
      })
      it('should have array type', function () {
        assert(WJSCType.isArrayType(type))
      })
      it('should not have pair type', function () {
        assert(!WJSCType.isPairType(type))
      })
      it('should compare to itself correctly', function () {
        assert(WJSCType.hasSameType(type, type))
      })
      it('should not compare to char arrays', function () {
        assert(!WJSCType.hasSameType(type, { arrayType: 'char' }))
      })
      it('should not compare to int arrays', function () {
        assert(!WJSCType.hasSameType(type, { arrayType: 'int' }))
      })
      it('should not compare to string arrays', function () {
        assert(!WJSCType.hasSameType(type, { arrayType: 'string' }))
      })
      it('should not compare to pair arrays', function () {
        assert(!WJSCType.hasSameType(type, { arrayType: 'pair' }))
      })
    })
    describe('Array of chars', function () {
      const type = { arrayType: 'char' }
      it('should not have base type', function () {
        assert(!WJSCType.isBaseType(type))
      })
      it('should have array type', function () {
        assert(WJSCType.isArrayType(type))
      })
      it('should not have pair type', function () {
        assert(!WJSCType.isPairType(type))
      })
      it('should compare to itself correctly', function () {
        assert(WJSCType.hasSameType(type, type))
      })
      it('should not compare to bool arrays', function () {
        assert(!WJSCType.hasSameType(type, { arrayType: 'bool' }))
      })
      it('should not compare to int arrays', function () {
        assert(!WJSCType.hasSameType(type, { arrayType: 'int' }))
      })
      it('should not compare to string arrays', function () {
        assert(!WJSCType.hasSameType(type, { arrayType: 'string' }))
      })
      it('should not compare to pair arrays', function () {
        assert(!WJSCType.hasSameType(type, { arrayType: 'pair' }))
      })
    })
    describe('Array of strings', function () {
      const type = { arrayType: 'string' }
      it('should not have base type', function () {
        assert(!WJSCType.isBaseType(type))
      })
      it('should have array type', function () {
        assert(WJSCType.isArrayType(type))
      })
      it('should not have pair type', function () {
        assert(!WJSCType.isPairType(type))
      })
      it('should compare to itself correctly', function () {
        assert(WJSCType.hasSameType(type, type))
      })
      it('should not compare to bool arrays', function () {
        assert(!WJSCType.hasSameType(type, { arrayType: 'bool' }))
      })
      it('should not compare to int arrays', function () {
        assert(!WJSCType.hasSameType(type, { arrayType: 'int' }))
      })
      it('should not compare to char arrays', function () {
        assert(!WJSCType.hasSameType(type, { arrayType: 'char' }))
      })
      it('should not compare to pair arrays', function () {
        assert(!WJSCType.hasSameType(type, { arrayType: 'pair' }))
      })
    })
    describe('Array of pairs', function () {
      const type = { arrayType: 'pair' }
      it('should not have base type', function () {
        assert(!WJSCType.isBaseType(type))
      })
      it('should have array type', function () {
        assert(WJSCType.isArrayType(type))
      })
      it('should not have pair type', function () {
        assert(!WJSCType.isPairType(type))
      })
      it('should compare to itself correctly', function () {
        assert(WJSCType.hasSameType(type, type))
      })
      it('should not compare to bool arrays', function () {
        assert(!WJSCType.hasSameType(type, { arrayType: 'bool' }))
      })
      it('should not compare to int arrays', function () {
        assert(!WJSCType.hasSameType(type, { arrayType: 'int' }))
      })
      it('should not compare to char arrays', function () {
        assert(!WJSCType.hasSameType(type, { arrayType: 'char' }))
      })
      it('should not compare to string arrays', function () {
        assert(!WJSCType.hasSameType(type, { arrayType: 'string' }))
      })
    })
  })
  describe('Complex Array Types', function () {
    describe('Nested Arrays', function () {
      const type = { arrayType: { arrayType: 'int' } }
      it('should be array type', function () {
        assert(WJSCType.isArrayType(type))
      })
      it('should compare to identical type', function () {
        assert(WJSCType.hasSameType(type, type))
      })
    })
  })
})