const assert = require('assert')
const child = require('child_process')
const os = require('os')
const readdir = require('recursive-readdir')
const path = require('path')
const fs = require('fs')
const WJSCCompiler = require('../build/WJSCCompiler')

describe('Environment is setup correctly', function () {
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
  if (err) { throw err }
  describe('Code generator', function () {
    files.forEach((filename) => {
      fs.readFile(filename, 'utf8', (readerr, data) => {
        if (readerr) { throw readerr }
        /* Instantiate the compiler */
        const compiler = new WJSCCompiler.default(data)
      })
    })
  })
})