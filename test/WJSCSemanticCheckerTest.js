const path = require("path");
const child_process = require("child_process");
const recursive = require("recursive-readdir");
const assert = require("assert");
const fs = require("fs");
const sinon = require("sinon");

const antlr4ts = require("antlr4ts");
const { WJSCLexer } = require("../build/grammar/WJSCLexer");
const { WJSCParser } = require("../build/grammar/WJSCParser");

const { WJSCSemanticChecker } = require("../build/WJSCSemanticChecker");
const { WJSCErrorLog } = require("../build/WJSCErrors");
const { WJSCErrorListener } = require("../build/WJSCErrorListener");

/* Instantiate our frontend code */
const errorlog = new WJSCErrorLog();
const checker = new WJSCSemanticChecker(errorlog);
const errorlistener = new WJSCErrorListener(errorlog);

recursive(
  path.resolve("wacc_examples", "valid"),
  ["*.wacc~", "*.in", "*.output"],
  function (error, validFiles) {
    describe("WJSC Frontend", function () {
      describe("Valid files", function () {
        validFiles.forEach(filename => {
          it(`should not produce errors for source file ${path.relative(
            "wacc_examples",
            filename
          )}`, function (done) {
            /* Read the file */
            fs.readFile(filename, "utf8", function (readError, data) {
              errorlog.clear()
              let error
              if (readError) done(readError);
              const parser = new WJSCParser(
                new antlr4ts.CommonTokenStream(
                  new WJSCLexer(new antlr4ts.ANTLRInputStream(data))
                )
              );
              sinon.stub(console, "log")
              parser.addErrorListener(errorlistener);
              try {
                checker.visit(parser.program());
              } catch (parseError) {
                error = parseError
              }
              console.log.restore();
              /* Assert no errors */
              assert(errorlog.numErrors() === 0, errorlog.printErrors());
              if (error) { done(error) } else { done() }
            });
          });
        });
      });
    }
    );
  });
