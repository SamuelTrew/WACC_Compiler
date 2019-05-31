const assert = require('assert')
const readdir = require('recursive-readdir')
const path = require('path')
const fs = require('fs')
const WJSCCompiler = require('../build/WJSCCompiler')
const child = require('child_process')
const os = require('os')

describe.skip('Environment is setup correctly', function () {
  it('should be linux/darwin', function () {
    assert(os.type() === 'Linux' || os.type() === 'Darwin', os.type())
  })
  it('should have arm-linux-gnueabi-gcc', function (done) {
    const which = child.spawn('which', ['arm-linux-gnueabi-gcc'])
    which.on('error', (err) => {
      assert(false, 'Which execution failure: ' + err)
      done()
    })
    which.on('exit', (code, signal) => {
      assert(code === 0, signal)
      done()
    })
  })
  it('should have qemu-arm', function (done) {
    const which = child.spawn('which', ['qemu-arm'])
    which.on('error', (err) => {
      assert(false, 'Which execution failure: ' + err)
      done()
    })
    which.on('exit', (code, signal) => {
      assert(code === 0, signal)
      done()
    })
  })
})

readdir(path.resolve('wacc_examples', 'valid'), ['*.wacc~', '*.in', '*.output',
  '**/importBasicSpecific.wacc', '**/defineBasic.wacc', '**/ticTacToe/*.wacc'
], (err, files) => {
  if (err) {
    throw err
  } else {
    const testFiles = {
      advancedFiles: files.filter((filename) => /advanced/.test(filename)),
      arrayFiles: files.filter((filename) => /array/.test(filename)),
      basicFiles: files.filter((filename) => /basic/.test(filename)),
      expressionsFiles: files.filter((filename) => /expressions/.test(filename)),
      functionFiles: files.filter((filename) => /function/.test(filename)),
      ifFiles: files.filter((filename) => /if/.test(filename)),
      ioFiles: files.filter((filename) => /IO/.test(filename)),
      pairsFiles: files.filter((filename) => /pairs/.test(filename)),
      runtimeErrFiles: files.filter((filename) => /runtimeErr/.test(filename)),
      scopeFiles: files.filter((filename) => /scope/.test(filename)),
      sequenceFiles: files.filter((filename) => /sequence/.test(filename)),
      variablesFiles: files.filter((filename) => /variables/.test(filename)),
      whileFiles: files.filter((filename) => /while/.test(filename))
    }
    describe('Code generator', function () {
      describe('Advanced Files', function () {
        testFiles.advancedFiles.forEach((filename) => {
          it(`should compile source code ${path.relative('wacc_examples', filename)} to assembly`, function (done) {
            fs.readFile(filename, 'utf8', (readerr, data) => {
              if (readerr) { throw readerr }
              /* Instantiate the compiler */
              const compiler = new WJSCCompiler.default(data)
              const generated = compiler.generate()
              assert(generated)
              done()
            })
          })
        })
      })
      describe('Array Files', function () {
        testFiles.arrayFiles.forEach((filename) => {
          it(`should compile source code ${path.relative('wacc_examples', filename)} to assembly`, function (done) {
            fs.readFile(filename, 'utf8', (readerr, data) => {
              if (readerr) { throw readerr }
              /* Instantiate the compiler */
              const compiler = new WJSCCompiler.default(data)
              const generated = compiler.generate()
              assert(generated)
              done()
            })
          })
        })
      })
      describe('Basic Files', function () {
        testFiles.basicFiles.forEach((filename) => {
          it(`should compile source code ${path.relative('wacc_examples', filename)} to assembly`, function (done) {
            fs.readFile(filename, 'utf8', (readerr, data) => {
              if (readerr) { throw readerr }
              /* Instantiate the compiler */
              const compiler = new WJSCCompiler.default(data)
              const generated = compiler.generate()
              assert(generated)
              done()
            })
          })
        })
      })
      describe('Expression Files', function () {
        testFiles.expressionsFiles.forEach((filename) => {
          it(`should compile source code ${path.relative('wacc_examples', filename)} to assembly`, function (done) {
            fs.readFile(filename, 'utf8', (readerr, data) => {
              if (readerr) { throw readerr }
              /* Instantiate the compiler */
              const compiler = new WJSCCompiler.default(data)
              const generated = compiler.generate()
              assert(generated)
              done()
            })
          })
        })
      })
      describe('Function Files', function () {
        testFiles.functionFiles.forEach((filename) => {
          it(`should compile source code ${path.relative('wacc_examples', filename)} to assembly`, function (done) {
            fs.readFile(filename, 'utf8', (readerr, data) => {
              if (readerr) { throw readerr }
              /* Instantiate the compiler */
              const compiler = new WJSCCompiler.default(data)
              const generated = compiler.generate()
              assert(generated)
              done()
            })
          })
        })
      })
      describe('If Files', function () {
        testFiles.ifFiles.forEach((filename) => {
          it(`should compile source code ${path.relative('wacc_examples', filename)} to assembly`, function (done) {
            fs.readFile(filename, 'utf8', (readerr, data) => {
              if (readerr) { throw readerr }
              /* Instantiate the compiler */
              const compiler = new WJSCCompiler.default(data)
              const generated = compiler.generate()
              assert(generated)
              done()
            })
          })
        })
      })
      describe('IO Files', function () {
        testFiles.ioFiles.forEach((filename) => {
          it(`should compile source code ${path.relative('wacc_examples', filename)} to assembly`, function (done) {
            fs.readFile(filename, 'utf8', (readerr, data) => {
              if (readerr) { throw readerr }
              /* Instantiate the compiler */
              const compiler = new WJSCCompiler.default(data)
              const generated = compiler.generate()
              assert(generated)
              done()
            })
          })
        })
      })
      describe('Pairs Files', function () {
        testFiles.pairsFiles.forEach((filename) => {
          it(`should compile source code ${path.relative('wacc_examples', filename)} to assembly`, function (done) {
            fs.readFile(filename, 'utf8', (readerr, data) => {
              if (readerr) { throw readerr }
              /* Instantiate the compiler */
              const compiler = new WJSCCompiler.default(data)
              const generated = compiler.generate()
              assert(generated)
              done()
            })
          })
        })
      })
      describe('Runtime Error Files', function () {
        testFiles.runtimeErrFiles.forEach((filename) => {
          it(`should compile source code ${path.relative('wacc_examples', filename)} to assembly`, function (done) {
            fs.readFile(filename, 'utf8', (readerr, data) => {
              if (readerr) { throw readerr }
              /* Instantiate the compiler */
              const compiler = new WJSCCompiler.default(data)
              const generated = compiler.generate()
              assert(generated)
              done()
            })
          })
        })
      })
      describe('Scope Files', function () {
        testFiles.scopeFiles.forEach((filename) => {
          it(`should compile source code ${path.relative('wacc_examples', filename)} to assembly`, function (done) {
            fs.readFile(filename, 'utf8', (readerr, data) => {
              if (readerr) { throw readerr }
              /* Instantiate the compiler */
              const compiler = new WJSCCompiler.default(data)
              const generated = compiler.generate()
              assert(generated)
              done()
            })
          })
        })
      })
      describe('Sequence Files', function () {
        testFiles.sequenceFiles.forEach((filename) => {
          it(`should compile source code ${path.relative('wacc_examples', filename)} to assembly`, function (done) {
            fs.readFile(filename, 'utf8', (readerr, data) => {
              if (readerr) { throw readerr }
              /* Instantiate the compiler */
              const compiler = new WJSCCompiler.default(data)
              const generated = compiler.generate()
              assert(generated)
              done()
            })
          })
        })
      })
      describe('Variables Files', function () {
        testFiles.variablesFiles.forEach((filename) => {
          it(`should compile source code ${path.relative('wacc_examples', filename)} to assembly`, function (done) {
            fs.readFile(filename, 'utf8', (readerr, data) => {
              if (readerr) { throw readerr }
              /* Instantiate the compiler */
              const compiler = new WJSCCompiler.default(data)
              const generated = compiler.generate()
              assert(generated)
              done()
            })
          })
        })
      })
      describe('While Files', function () {
        testFiles.whileFiles.forEach((filename) => {
          it(`should compile source code ${path.relative('wacc_examples', filename)} to assembly`, function (done) {
            fs.readFile(filename, 'utf8', (readerr, data) => {
              if (readerr) { throw readerr }
              /* Instantiate the compiler */
              const compiler = new WJSCCompiler.default(data)
              const generated = compiler.generate()
              assert(generated)
              done()
            })
          })
        })
      })
    })
  }
})
