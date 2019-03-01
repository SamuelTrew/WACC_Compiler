const assert = require('assert')
const eol = require('eol')
const readdir = require('recursive-readdir')
const path = require('path')
const fs = require('fs')
const WJSCCompiler = require('../build/WJSCCompiler')
const diff = require('diff')
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

const getdiff = (difference) => `Diff: ${difference.length} chunks:\n` + 
  difference.reduce((a, b) => a + (b.added ? (b.value.split(os.EOL).map((line, index) => 
    (b.value.split(os.EOL).length === (index - 1)) ? '' : `+ ${line}` 
  ).join(os.EOL)) : (b.removed ? b.value.split(os.EOL).map((line, index) => 
    (b.value.split(os.EOL).length === (index - 1)) ? '' : `- ${line}` 
  ).join(os.EOL) : b.value.split(os.EOL).map((line, index) => 
    (b.value.split(os.EOL).length === (index - 1)) ? '' : `  ${line}` 
  ).join(os.EOL))) + os.EOL, '')

readdir(path.resolve('wacc_examples', 'valid'), ['*.wacc~', '*.in', '*.output'], (err, files) => {
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
              const relativePath = path.relative('wacc_examples', filename)
              const assemblyPath = path.dirname(path.resolve('wacc_examples', 'assembly', relativePath))
              const assemblyFile = path.resolve(assemblyPath, path.parse(relativePath).name) + '.asm'
              fs.readFile(assemblyFile, 'utf8', (asmreaderr, refasm) => {
                if (asmreaderr) { throw asmreaderr }
                const difference = diff.diffLines(eol.auto(refasm), eol.auto(generated), { ignoreCase: true, ignoreWhitespace: true })
                assert(difference.length === 1 & !difference[0].added && !difference[0].removed, getdiff(difference))
                done()
              })
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
              const relativePath = path.relative('wacc_examples', filename)
              const assemblyPath = path.dirname(path.resolve('wacc_examples', 'assembly', relativePath))
              const assemblyFile = path.resolve(assemblyPath, path.parse(relativePath).name) + '.asm'
              fs.readFile(assemblyFile, 'utf8', (asmreaderr, refasm) => {
                if (asmreaderr) { throw asmreaderr }
                const difference = diff.diffLines(eol.auto(refasm), eol.auto(generated), { ignoreCase: true, ignoreWhitespace: true })
                assert(difference.length === 1 & !difference[0].added && !difference[0].removed, getdiff(difference))
                done()
              })
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
              const relativePath = path.relative('wacc_examples', filename)
              const assemblyPath = path.dirname(path.resolve('wacc_examples', 'assembly', relativePath))
              const assemblyFile = path.resolve(assemblyPath, path.parse(relativePath).name) + '.asm'
              fs.readFile(assemblyFile, 'utf8', (asmreaderr, refasm) => {
                if (asmreaderr) { throw asmreaderr }
                const difference = diff.diffLines(eol.auto(refasm), eol.auto(generated), { ignoreCase: true, ignoreWhitespace: true })
                assert(difference.length === 1 & !difference[0].added && !difference[0].removed, getdiff(difference))
                done()
              })
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
              const relativePath = path.relative('wacc_examples', filename)
              const assemblyPath = path.dirname(path.resolve('wacc_examples', 'assembly', relativePath))
              const assemblyFile = path.resolve(assemblyPath, path.parse(relativePath).name) + '.asm'
              fs.readFile(assemblyFile, 'utf8', (asmreaderr, refasm) => {
                if (asmreaderr) { throw asmreaderr }
                const difference = diff.diffLines(eol.auto(refasm), eol.auto(generated), { ignoreCase: true, ignoreWhitespace: true })
                assert(difference.length === 1 & !difference[0].added && !difference[0].removed, getdiff(difference))
                done()
              })
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
              const relativePath = path.relative('wacc_examples', filename)
              const assemblyPath = path.dirname(path.resolve('wacc_examples', 'assembly', relativePath))
              const assemblyFile = path.resolve(assemblyPath, path.parse(relativePath).name) + '.asm'
              fs.readFile(assemblyFile, 'utf8', (asmreaderr, refasm) => {
                if (asmreaderr) { throw asmreaderr }
                const difference = diff.diffLines(eol.auto(refasm), eol.auto(generated), { ignoreCase: true, ignoreWhitespace: true })
                assert(difference.length === 1 & !difference[0].added && !difference[0].removed, getdiff(difference))
                done()
              })
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
              const relativePath = path.relative('wacc_examples', filename)
              const assemblyPath = path.dirname(path.resolve('wacc_examples', 'assembly', relativePath))
              const assemblyFile = path.resolve(assemblyPath, path.parse(relativePath).name) + '.asm'
              fs.readFile(assemblyFile, 'utf8', (asmreaderr, refasm) => {
                if (asmreaderr) { throw asmreaderr }
                const difference = diff.diffLines(eol.auto(refasm), eol.auto(generated), { ignoreCase: true, ignoreWhitespace: true })
                assert(difference.length === 1 & !difference[0].added && !difference[0].removed, getdiff(difference))
                done()
              })
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
              const relativePath = path.relative('wacc_examples', filename)
              const assemblyPath = path.dirname(path.resolve('wacc_examples', 'assembly', relativePath))
              const assemblyFile = path.resolve(assemblyPath, path.parse(relativePath).name) + '.asm'
              fs.readFile(assemblyFile, 'utf8', (asmreaderr, refasm) => {
                if (asmreaderr) { throw asmreaderr }
                const difference = diff.diffLines(eol.auto(refasm), eol.auto(generated), { ignoreCase: true, ignoreWhitespace: true })
                assert(difference.length === 1 & !difference[0].added && !difference[0].removed, getdiff(difference))
                done()
              })
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
              const relativePath = path.relative('wacc_examples', filename)
              const assemblyPath = path.dirname(path.resolve('wacc_examples', 'assembly', relativePath))
              const assemblyFile = path.resolve(assemblyPath, path.parse(relativePath).name) + '.asm'
              fs.readFile(assemblyFile, 'utf8', (asmreaderr, refasm) => {
                if (asmreaderr) { throw asmreaderr }
                const difference = diff.diffLines(eol.auto(refasm), eol.auto(generated), { ignoreCase: true, ignoreWhitespace: true })
                assert(difference.length === 1 & !difference[0].added && !difference[0].removed, getdiff(difference))
                done()
              })
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
              const relativePath = path.relative('wacc_examples', filename)
              const assemblyPath = path.dirname(path.resolve('wacc_examples', 'assembly', relativePath))
              const assemblyFile = path.resolve(assemblyPath, path.parse(relativePath).name) + '.asm'
              fs.readFile(assemblyFile, 'utf8', (asmreaderr, refasm) => {
                if (asmreaderr) { throw asmreaderr }
                const difference = diff.diffLines(eol.auto(refasm), eol.auto(generated), { ignoreCase: true, ignoreWhitespace: true })
                assert(difference.length === 1 & !difference[0].added && !difference[0].removed, getdiff(difference))
                done()
              })
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
              const relativePath = path.relative('wacc_examples', filename)
              const assemblyPath = path.dirname(path.resolve('wacc_examples', 'assembly', relativePath))
              const assemblyFile = path.resolve(assemblyPath, path.parse(relativePath).name) + '.asm'
              fs.readFile(assemblyFile, 'utf8', (asmreaderr, refasm) => {
                if (asmreaderr) { throw asmreaderr }
                const difference = diff.diffLines(eol.auto(refasm), eol.auto(generated), { ignoreCase: true, ignoreWhitespace: true })
                assert(difference.length === 1 & !difference[0].added && !difference[0].removed, getdiff(difference))
                done()
              })
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
              const relativePath = path.relative('wacc_examples', filename)
              const assemblyPath = path.dirname(path.resolve('wacc_examples', 'assembly', relativePath))
              const assemblyFile = path.resolve(assemblyPath, path.parse(relativePath).name) + '.asm'
              fs.readFile(assemblyFile, 'utf8', (asmreaderr, refasm) => {
                if (asmreaderr) { throw asmreaderr }
                const difference = diff.diffLines(eol.auto(refasm), eol.auto(generated), { ignoreCase: true, ignoreWhitespace: true })
                assert(difference.length === 1 & !difference[0].added && !difference[0].removed, getdiff(difference))
                done()
              })
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
              const relativePath = path.relative('wacc_examples', filename)
              const assemblyPath = path.dirname(path.resolve('wacc_examples', 'assembly', relativePath))
              const assemblyFile = path.resolve(assemblyPath, path.parse(relativePath).name) + '.asm'
              fs.readFile(assemblyFile, 'utf8', (asmreaderr, refasm) => {
                if (asmreaderr) { throw asmreaderr }
                const difference = diff.diffLines(eol.auto(refasm), eol.auto(generated), { ignoreCase: true, ignoreWhitespace: true })
                assert(difference.length === 1 & !difference[0].added && !difference[0].removed, getdiff(difference))
                done()
              })
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
              const relativePath = path.relative('wacc_examples', filename)
              const assemblyPath = path.dirname(path.resolve('wacc_examples', 'assembly', relativePath))
              const assemblyFile = path.resolve(assemblyPath, path.parse(relativePath).name) + '.asm'
              fs.readFile(assemblyFile, 'utf8', (asmreaderr, refasm) => {
                if (asmreaderr) { throw asmreaderr }
                const difference = diff.diffLines(eol.auto(refasm), eol.auto(generated), { ignoreCase: true, ignoreWhitespace: true })
                assert(difference.length === 1 & !difference[0].added && !difference[0].removed, getdiff(difference))
                done()
              })
            })
          })
        })
      })
    })
  }
})