const assert = require('assert')
const eol = require('eol')
const readdir = require('recursive-readdir')
const path = require('path')
const fs = require('fs')
const WJSCCompiler = require('../build/WJSCCompiler')
const diff = require('diff')
const { EOL } = require('os')

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

readdir(path.resolve('wacc_examples', 'valid'), ['*.wacc~', '*.in', '*.output'], (err, files) => {
  if (err) {
    throw err
  } else {
    describe('Code generator', function () {
      files.forEach((filename) => {
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
              assert(difference.length === 0, `Diff: ${difference.length} chunks:\n` + difference.reduce((a, b) => {
                return a + (b.added ? (b.value.split(EOL).map(line => `+ ${line}`).join(EOL)) : (b.removed ? b.value.split(EOL).map(line => `- ${line}`).join(EOL) : b.value.split(EOL).map(line => `  ${line}`).join(EOL))) + EOL
              }, ''))
              done()
            })
          })
        })
      })
    })
  }
})