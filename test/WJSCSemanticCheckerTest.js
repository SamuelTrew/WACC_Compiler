const path = require('path')
const recursive = require('recursive-readdir')
const assert = require('assert')
const fs = require('fs')
const sinon = require('sinon')

const WJSCCompiler = require('../build/WJSCCompiler')

recursive(
  path.resolve('wacc_examples', 'valid'),
  ['*.wacc~', '*.in', '*.output'],
  function(validError, validFiles) {
    if (validError) throw validError
    recursive(
      path.resolve('wacc_examples', 'invalid', 'semanticErr'),
      ['*.wacc~', '*.in', '*.output'],
      function(semErrError, semanticErrFiles) {
        if (semErrError) throw validError
        recursive(
          path.resolve('wacc_examples', 'invalid', 'syntaxErr'),
          ['*.wacc~', '*.in', '*.output'],
          function(synErrError, syntaxErrFiles) {
            if (synErrError) throw synErrError
            describe('WJSC Frontend', function() {
              describe('Valid files', function() {
                validFiles.forEach((filename) => {
                  it(`should not produce errors for source file ${path.relative(
                    'wacc_examples',
                    filename,
                  )}`, function(done) {
                    /* Read the file */
                    fs.readFile(filename, 'utf8', function(readError, data) {
                      if (readError) throw readError
                      const compiler = new WJSCCompiler.default(data)
                      sinon.stub(console, 'log')
                      compiler.check()
                      console.log.restore()
                      /* Assert no errors */
                      assert(
                        compiler.errorLog.numErrors() === 0,
                        compiler.errorLog.printErrors(),
                      )
                      done()
                    })
                  })
                })
              })
              describe('Semantically invalid files', function() {
                semanticErrFiles.forEach((filename) => {
                  it(`should produce errors for source file ${path.relative(
                    'wacc_examples',
                    filename,
                  )}`, function(done) {
                    /* Read the file */
                    fs.readFile(filename, 'utf8', function(readError, data) {
                      if (readError) throw readError
                      const compiler = new WJSCCompiler.default(data)
                      sinon.stub(console, 'log')
                      compiler.check()
                      console.log.restore()
                      /* Assert no errors */
                      assert(
                        compiler.errorLog.numErrors() > 0,
                        'No errors produced',
                      )
                      done()
                    })
                  })
                })
              })
              describe('Syntactically invalid files', function() {
                syntaxErrFiles.forEach((filename) => {
                  it(`should produce errors for source file ${path.relative(
                    'wacc_examples',
                    filename,
                  )}`, function(done) {
                    /* Read the file */
                    fs.readFile(filename, 'utf8', function(readError, data) {
                      if (readError) throw readError
                      const compiler = new WJSCCompiler.default(data)
                      sinon.stub(console, 'log')
                      compiler.check()
                      console.log.restore()
                      /* Assert no errors */
                      assert(
                        compiler.errorLog.numErrors() > 0,
                        'No errors produced',
                      )
                      done()
                    })
                  })
                })
              })
            })
          },
        )
      },
    )
  },
)
