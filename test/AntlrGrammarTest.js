const path = require('path')
const child_process = require('child_process')
const recursive = require('recursive-readdir')
const assert = require('assert')
const os = require('os')

/* Test suite to run the ANTLR4 provided test rig on all given programs */
const sep = os.platform() === 'win32' ? ';' : ':'
const classpath = path.resolve('antlr_config', 'antlr')
const antlrLib = path.resolve('lib', 'antlr-4.7-complete.jar')
const grun = `java -cp ".${sep}${antlrLib}" org.antlr.v4.gui.TestRig`

recursive(path.resolve('wacc_examples', 'valid'), [
  '*.wacc~', '*.in', '*.output'
], function (valError, validTestFiles) {
  recursive(path.resolve('wacc_examples', 'invalid', 'syntaxErr'), [
    '*.wacc~', '*.in', '*.output', 'functionJunkAfterReturn.wacc',
    'functionConditionalNoReturn.wacc', 'functionNoReturn.wacc',
    'mutualRecursionNoReturn.wacc', 'bigIntAssignment.wacc'
  ], function (synError, syntaxErrFiles) {
    recursive(path.resolve('wacc_examples', 'invalid', 'semanticErr'), [
      '*.wacc~', '*.in', '*.output'
    ], function (semError, semanticErrTestFiles) {
      describe('ANTLR4 Generated Grammar', function () {
        describe(`lexes and parses valid soujjarce files without error`,
          function () {
            this.slow(1000)
            validTestFiles.forEach((filename) => {
              it(`lexes and parses ${path.relative('wacc_examples', filename)}`,
                function (done) {
                  child_process.exec(`cd ${classpath} && ${grun} WJSC program ${filename}`,
                    function (err, stdout, stderr) {
                      if (err) {
                        assert(false, err)
                      } else {
                        assert(!stderr, stderr)
                      }
                      done()
                    })
                })
            })
          })
        describe(`lexes and parses semantically incorrect source files without error`,
          function () {
            this.slow(1000)
            semanticErrTestFiles.forEach((filename) => {
              it(`lexes and parses ${path.relative('wacc_examples', filename)}`,
                function (done) {
                  child_process.exec(`cd ${classpath} && ${grun} WJSC program ${filename}`,
                    function (err, stdout, stderr) {
                      if (err) {
                        assert(false, err)
                      } else {
                        assert(!stderr, stderr)
                      }
                      done()
                    })
                })
            })
          })
        describe(`lexes and parses syntactically incorrect source files with error`,
          function () {
            this.slow(1000)
            syntaxErrFiles.forEach((filename) => {
              it(`fails to lex or parse ${path.relative('wacc_examples', filename)}`,
                function (done) {
                  child_process.exec(`cd ${classpath} && ${grun} WJSC program ${filename}`,
                    function (err, stdout, stderr) {
                      assert(stderr, 'Did not produce STDERR')
                      done()
                    })
                })
            })
          })
      })
    })
  })
})