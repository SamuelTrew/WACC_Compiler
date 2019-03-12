const assert = require('assert')
const readdir = require('recursive-readdir')
const path = require('path')
const fs = require('fs')
const WJSCCompiler = require('../build/WJSCCompiler')


const checkFile = (filename, done) => {
  fs.readFile(filename, 'utf8', (readerr, data) => {
    if (readerr) { throw readerr }
    /* Instantiate the compiler */
    const compiler = new WJSCCompiler.default(data, true)
    let generated
    generated = compiler.generate()
    assert(generated, 'No code generated')
    done()
  })
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
          it(`should compile source code ${path.relative('wacc_examples', filename)} to JavaScript`, function (done) {
            checkFile(filename, done)
          })
        })
      })
      describe('Array Files', function () {
        testFiles.arrayFiles.forEach((filename) => {
          it(`should compile source code ${path.relative('wacc_examples', filename)} to JavaScript`, function (done) {
            checkFile(filename, done)
          })
        })
      })
      describe('Basic Files', function () {
        testFiles.basicFiles.forEach((filename) => {
          it(`should compile source code ${path.relative('wacc_examples', filename)} to JavaScript`, function (done) {
            checkFile(filename, done)
          })
        })
      })
      describe('Expression Files', function () {
        testFiles.expressionsFiles.forEach((filename) => {
          it(`should compile source code ${path.relative('wacc_examples', filename)} to JavaScript`, function (done) {
            checkFile(filename, done)
          })
        })
      })
      describe('Function Files', function () {
        testFiles.functionFiles.forEach((filename) => {
          it(`should compile source code ${path.relative('wacc_examples', filename)} to JavaScript`, function (done) {
            checkFile(filename, done)
          })
        })
      })
      describe('If Files', function () {
        testFiles.ifFiles.forEach((filename) => {
          it(`should compile source code ${path.relative('wacc_examples', filename)} to JavaScript`, function (done) {
            checkFile(filename, done)
          })
        })
      })
      describe('IO Files', function () {
        testFiles.ioFiles.forEach((filename) => {
          it(`should compile source code ${path.relative('wacc_examples', filename)} to JavaScript`, function (done) {
            checkFile(filename, done)
          })
        })
      })
      describe('Pairs Files', function () {
        testFiles.pairsFiles.forEach((filename) => {
          it(`should compile source code ${path.relative('wacc_examples', filename)} to JavaScript`, function (done) {
            checkFile(filename, done)
          })
        })
      })
      describe('Runtime Error Files', function () {
        testFiles.runtimeErrFiles.forEach((filename) => {
          it(`should compile source code ${path.relative('wacc_examples', filename)} to JavaScript`, function (done) {
            checkFile(filename, done)
          })
        })
      })
      describe('Scope Files', function () {
        testFiles.scopeFiles.forEach((filename) => {
          it(`should compile source code ${path.relative('wacc_examples', filename)} to JavaScript`, function (done) {
            checkFile(filename, done)
          })
        })
      })
      describe('Sequence Files', function () {
        testFiles.sequenceFiles.forEach((filename) => {
          it(`should compile source code ${path.relative('wacc_examples', filename)} to JavaScript`, function (done) {
            checkFile(filename, done)
          })
        })
      })
      describe('Variables Files', function () {
        testFiles.variablesFiles.forEach((filename) => {
          it(`should compile source code ${path.relative('wacc_examples', filename)} to JavaScript`, function (done) {
            checkFile(filename, done)
          })
        })
      })
      describe('While Files', function () {
        testFiles.whileFiles.forEach((filename) => {
          it(`should compile source code ${path.relative('wacc_examples', filename)} to JavaScript`, function (done) {
            checkFile(filename, done)
          })
        })
      })
    })
  }
})