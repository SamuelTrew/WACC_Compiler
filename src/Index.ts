/* Library imports */
import * as argparse from 'argparse'
import * as fs from 'fs'

/* ANTLR imports */
import * as antlr4ts from 'antlr4ts'
import { WJSCLexer } from './grammar/WJSCLexer'
import { WJSCParser } from './grammar/WJSCParser'

/* Our code */
import { ConsoleColors } from './util/Colors'
import { WJSCErrorListener } from './WJSCErrorListener'
import { WJSCErrorLog } from './WJSCErrors'
import { WJSCSemanticChecker } from './WJSCSemanticChecker'

const argp = new argparse.ArgumentParser({
  addHelp: true,
  description: 'WACC Compiler in TypeScript',
  version: '1.0.0',
})
argp.addArgument(
  'src',
  {
    action: 'store',
    help: 'Path to source code to compile.',
    metavar: '<source.wacc>',
  })

argp.addArgument(
  ['-o', '--output'],
  {
    action: 'store',
    help: 'Path to output tree.',
  })

argp.addArgument(
  ['-e', '--errors'],
  {
    action: 'store',
    help: 'Path to store error log.',
  })

const args = argp.parseArgs()
const output = args.output || 'out.json'
const errors = args.errors || 'err.log'

fs.readFile(args.src, 'utf8', (err, data) => {
  if (err) { throw err }

  /* Instantiate our classes */
  const errorLog = new WJSCErrorLog()
  const errorListener = new WJSCErrorListener(errorLog)
  const visitor = new WJSCSemanticChecker(errorLog)

  /* Instantitate and run ANTLR classes */
  const inputStream = new antlr4ts.ANTLRInputStream(data)
  const lexer = new WJSCLexer(inputStream)
  const tokenStream = new antlr4ts.CommonTokenStream(lexer)
  const parser = new WJSCParser(tokenStream)
  const tree = visitor.visit(parser.program())

  /* Write the output */
  fs.writeFile(output, JSON.stringify({
    tree,
    // tslint:disable-next-line:object-literal-sort-keys
    symbolTable: visitor.symbolTable.json(),
  }, null, 2), (writeErr) => {
    if (writeErr) { throw writeErr }
  })
  fs.writeFile(errors, errorLog.printErrors(), (writeErr) => {
    if (writeErr) { throw writeErr }
  })

  /* Print the compilation status */
  const numerrors = errorLog.numErrors()
  process.exitCode = numerrors
  if (numerrors === 0) {
    console.log(` ${ConsoleColors.FgGreen}✔${ConsoleColors.Reset} Compilation succeeded.`)
    console.log(`   Output written to ${output}`)
  } else {
    console.log(` ${ConsoleColors.FgRed}✘${ConsoleColors.Reset}`
      + ` Compilation failed with ${numerrors} error${numerrors !== 1 ? 's' : ''}.`)
    console.log(`   ${ConsoleColors.Dim}Output written to ${output}`)
    console.log(`   Errors written to ${errors}${ConsoleColors.Reset}`)
  }
})
