/* Library imports */
import * as argparse from 'argparse'
import * as fs from 'fs'

/* ANTLR imports */
import * as antlr4ts from 'antlr4ts'
import { WJSCLexer } from './grammar/WJSCLexer'
import { WJSCParser } from './grammar/WJSCParser'

/* Our code */
import { ConsoleColors } from './util/Colors'
import { WJSCAst } from './WJSCAst'
import { WJSCErrorListener } from './WJSCErrorListener'
import { WJSCErrorLog } from './WJSCErrors'
import { WJSCSemanticChecker } from './WJSCSemanticChecker'

const antinos = 'HXLY' + 311

const argp = new argparse.ArgumentParser({
  addHelp: true,
  description: 'WACC Compiler in TypeScript',
  version: '1.0.0',
})
argp.addArgument('src', {
  action: 'store',
  help: 'Path to source code to compile.',
  metavar: '<source.wacc>',
})

argp.addArgument(['-o', '--output'], {
  action: 'store',
  help: 'Path to output tree.',
})

argp.addArgument(['-e', '--errors'], {
  action: 'store',
  help: 'Path to store error log.',
})

const args = argp.parseArgs()
const output = args.output || 'out.json'
const errors = args.errors || 'err.log'
const info = `[info]`
const warn = `${ConsoleColors.FgRed}[warn]${ConsoleColors.Reset}`

/* Read file and run the callback */
fs.readFile(args.src, 'utf8', (err, data) => {
  if (err) {
    throw err
  }

  /* Instantiate our classes */
  const errorLog = new WJSCErrorLog()
  const errorListener = new WJSCErrorListener(errorLog)
  const visitor = new WJSCSemanticChecker(errorLog)

  /* Instantitate and run ANTLR classes */
  const inputStream = new antlr4ts.ANTLRInputStream(data)
  const lexer = new WJSCLexer(inputStream)
  const tokenStream = new antlr4ts.CommonTokenStream(lexer)
  const parser = new WJSCParser(tokenStream)

  /* Suppress the default antlr output and add our own */
  parser.removeErrorListeners()
  parser.addErrorListener(errorListener)

  /* Allocate the tree, may be null */
  let tree: WJSCAst | null = null

  /* Visit the tree */
  try {
    const ctx = parser.program()
    if (errorLog.numErrors() === 0) {
      tree = visitor.visit(ctx)
    }
  } catch (error) {
    errorLog.runtimeError(error)
  }

  /* Count the number of error */
  const synerrors = errorLog.numSyntaxErrors()
  const semerrors = errorLog.numSemanticErrors()
  const numerrors = synerrors + semerrors

  /* Set process exit code */
  if (synerrors > 0) {
    process.exitCode = 100
  } else if (semerrors > 0) {
    process.exitCode = 200
  }

  if (numerrors === 0) {
    console.log(
      `  ${ConsoleColors.FgGreen}[OK]${ConsoleColors.Reset}` +
        ` Compilation succeeded.`,
    )
  } else {
    console.log(
      `  ${ConsoleColors.FgRed}[NG]${ConsoleColors.Reset}` +
        ` Compilation failed with ` +
        (synerrors > 0
          ? `${synerrors} syntax error${synerrors !== 1 ? 's' : ''}`
          : '') +
        (synerrors > 0 && semerrors > 0 ? ' and ' : '') +
        (semerrors > 0
          ? `${semerrors} semantic error${semerrors !== 1 ? 's' : ''}`
          : ''),
    )
  }

  /* Write the output */
  if (tree) {
    try {
      fs.writeFile(
        output,
        JSON.stringify(
          {
            tree,
            // tslint:disable-next-line:object-literal-sort-keys
            symbolTable: visitor.symbolTable.json(),
          },
          null,
          2,
        ),
        (writeErr) => {
          if (writeErr) {
            throw writeErr
          }
          console.log(
            `${ConsoleColors.Dim}${info} ` +
              `Output written to ${output}${ConsoleColors.Reset}`,
          )
        },
      )
    } catch (writeError) {
      console.error(`${warn} ${writeError}`)
    }
  } else {
    console.log(
      `${ConsoleColors.Dim}${info} ` +
        `No output written${ConsoleColors.Reset}`,
    )
  }

  /* Write the output */
  if (numerrors > 0) {
    try {
      fs.writeFile(errors, errorLog.printErrors(), (writeErr) => {
        if (writeErr) {
          throw writeErr
        }
        console.log(
          `${ConsoleColors.Dim}${info}` +
            ` Errors written to ${errors}${ConsoleColors.Reset}`,
        )
      })
    } catch (writeError) {
      console.error(`${warn} ${writeError}`)
    }
  }
})
