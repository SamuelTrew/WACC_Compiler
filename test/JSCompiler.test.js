const assert = require('assert')
const readdir = require('recursive-readdir')
const path = require('path')
const fs = require('fs')
const WJSCCompiler = require('../build/WJSCCompiler')


const checkFile = (filename, done) => {
  const data = fs.readFileSync(filename, 'utf8')
  const compiler = new WJSCCompiler.default(data, true)
  const generated = compiler.generate()
  assert(generated, 'No code generated')
  done()
  return generated
}

const execCheck = (code, done) => {
  assert(code)
  try {
    eval(code)
    done()
  } catch (runtimeError) {
    done(runtimeError)
  }
}

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
    describe.skip('Code generator', function () {
      describe('Advanced Files', function () {
        testFiles.advancedFiles.forEach((filename) => {
          let code
          it(`should compile source code ${path.relative('wacc_examples', filename)} to JavaScript`, function (done) {
            code = checkFile(filename, done)
          })
          it(`shoud produce runnable code for ${path.relative('wacc_examples', filename)}`, function (done) {
            execCheck(code, done)
          })
        })
      })
      describe('Array Files', function () {
        testFiles.arrayFiles.forEach((filename) => {
          let code
          it(`should compile source code ${path.relative('wacc_examples', filename)} to JavaScript`, function (done) {
            code = checkFile(filename, done)
          })
          it(`shoud produce runnable code for ${path.relative('wacc_examples', filename)}`, function (done) {
            execCheck(code, done)
          })
        })
      })
      describe('Basic Files', function () {
        testFiles.basicFiles.forEach((filename) => {
          let code
          it(`should compile source code ${path.relative('wacc_examples', filename)} to JavaScript`, function (done) {
            code = checkFile(filename, done)
          })
          it(`shoud produce runnable code for ${path.relative('wacc_examples', filename)}`, function (done) {
            execCheck(code, done)
          })
        })
      })
      describe('Expression Files', function () {
        testFiles.expressionsFiles.forEach((filename) => {
          let code
          it(`should compile source code ${path.relative('wacc_examples', filename)} to JavaScript`, function (done) {
            code = checkFile(filename, done)
          })
          it(`shoud produce runnable code for ${path.relative('wacc_examples', filename)}`, function (done) {
            execCheck(code, done)
          })
        })
      })
      describe('Function Files', function () {
        testFiles.functionFiles.forEach((filename) => {
          let code
          it(`should compile source code ${path.relative('wacc_examples', filename)} to JavaScript`, function (done) {
            code = checkFile(filename, done)
          })
          it(`shoud produce runnable code for ${path.relative('wacc_examples', filename)}`, function (done) {
            execCheck(code, done)
          })
        })
      })
      describe('If Files', function () {
        testFiles.ifFiles.forEach((filename) => {
          let code
          it(`should compile source code ${path.relative('wacc_examples', filename)} to JavaScript`, function (done) {
            code = checkFile(filename, done)
          })
          it(`shoud produce runnable code for ${path.relative('wacc_examples', filename)}`, function (done) {
            execCheck(code, done)
          })
        })
      })
      describe('IO Files', function () {
        testFiles.ioFiles.forEach((filename) => {
          let code
          it(`should compile source code ${path.relative('wacc_examples', filename)} to JavaScript`, function (done) {
            code = checkFile(filename, done)
          })
          it(`shoud produce runnable code for ${path.relative('wacc_examples', filename)}`, function (done) {
            execCheck(code, done)
          })
        })
      })
      describe('Pairs Files', function () {
        testFiles.pairsFiles.forEach((filename) => {
          let code
          it(`should compile source code ${path.relative('wacc_examples', filename)} to JavaScript`, function (done) {
            code = checkFile(filename, done)
          })
          it(`shoud produce runnable code for ${path.relative('wacc_examples', filename)}`, function (done) {
            execCheck(code, done)
          })
        })
      })
      describe('Runtime Error Files', function () {
        testFiles.runtimeErrFiles.forEach((filename) => {
          let code
          it(`should compile source code ${path.relative('wacc_examples', filename)} to JavaScript`, function (done) {
            code = checkFile(filename, done)
          })
          it(`shoud produce runnable code for ${path.relative('wacc_examples', filename)}`, function (done) {
            execCheck(code, done)
          })
        })
      })
      describe('Scope Files', function () {
        testFiles.scopeFiles.forEach((filename) => {
          let code
          it(`should compile source code ${path.relative('wacc_examples', filename)} to JavaScript`, function (done) {
            code = checkFile(filename, done)
          })
          it(`shoud produce runnable code for ${path.relative('wacc_examples', filename)}`, function (done) {
            execCheck(code, done)
          })
        })
      })
      describe('Sequence Files', function () {
        testFiles.sequenceFiles.forEach((filename) => {
          let code
          it(`should compile source code ${path.relative('wacc_examples', filename)} to JavaScript`, function (done) {
            code = checkFile(filename, done)
          })
          it(`shoud produce runnable code for ${path.relative('wacc_examples', filename)}`, function (done) {
            execCheck(code, done)
          })
        })
      })
      describe('Variables Files', function () {
        testFiles.variablesFiles.forEach((filename) => {
          let code
          it(`should compile source code ${path.relative('wacc_examples', filename)} to JavaScript`, function (done) {
            code = checkFile(filename, done)
          })
          it(`shoud produce runnable code for ${path.relative('wacc_examples', filename)}`, function (done) {
            execCheck(code, done)
          })
        })
      })
      describe('While Files', function () {
        testFiles.whileFiles.forEach((filename) => {
          let code
          it(`should compile source code ${path.relative('wacc_examples', filename)} to JavaScript`, function (done) {
            code = checkFile(filename, done)
          })
          it(`shoud produce runnable code for ${path.relative('wacc_examples', filename)}`, function (done) {
            execCheck(code, done)
          })
        })
      })
    })
  }
})