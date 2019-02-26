/* Library imports */
import * as argparse from 'argparse'
import * as fs from 'fs'
import * as path from 'path'

/* Our code */
import { ConsoleColors } from './util/Colors'
import { WJSCAst } from './util/WJSCAst'
import WJSCCompiler from './WJSCCompiler'

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
  defaultValue: 'error.log',
  help: 'Path to store error log.',
})

argp.addArgument(['-pe', '--print-errors'], {
  action: 'storeTrue',
  defaultValue: true,
  help: 'Print errors to STDERR',
})

argp.addArgument(['-pa', '--print-ast'], {
  action: 'storeTrue',
  help: 'Print errors to STDERR',
})

argp.addArgument(['-t', '--tree'], {
  action: 'store',
  defaultValue: 'tree.json',
  help: 'Output tree to a file',
})

const args = argp.parseArgs()
const output = args.output || (path.parse(args.src).name + '.s')
const treeout = args.tree
const errors = args.errors
const printErrors = args.print_errors
const printAst = args.print_ast
const info = `[info]`
const warn = `${ConsoleColors.FgRed}[warn]${ConsoleColors.Reset}`

/* Read file and run the callback */
fs.readFile(args.src, 'utf8', (err, data) => {
  if (err) {
    throw err
  }

  /* Instantiate our compiler */
  const compiler = new WJSCCompiler(data)

  /* Allocate the tree, may be undefined */
  let tree: WJSCAst | undefined

  /* Visit the tree */
  try {
    tree = compiler.check()
  } catch (error) {
    compiler.errorLog.runtimeError(error)
  }

  /* Count the number of error */
  const synerrors = compiler.errorLog.numSyntaxErrors()
  const semerrors = compiler.errorLog.numSemanticErrors()
  const numerrors = synerrors + semerrors
  const runerrs = compiler.errorLog.getRuntimeErrors()

  /* Set process exit code */
  if (runerrs.length > 0) {
    process.exitCode = -1
    console.log('Fatal error: ')
    runerrs.forEach((runtimeError: string) => console.log(runtimeError))
    process.exit()
  } else if (synerrors > 0) {
    process.exitCode = 100
  } else if (semerrors > 0) {
    process.exitCode = 200
  }

  if (numerrors === 0) {
    console.log(`  ${ConsoleColors.FgGreen}[OK]${ConsoleColors.Reset} Checking succeeded.`)
  } else {
    console.log(
      `  ${ConsoleColors.FgRed}[NG]${ConsoleColors.Reset} Compilation failed with ` +
      (synerrors > 0 ? `${synerrors} syntax error${synerrors !== 1 ? 's' : ''}` : '') +
      (synerrors > 0 && semerrors > 0 ? ' and ' : '') +
      (semerrors > 0 ? `${semerrors} semantic error${semerrors !== 1 ? 's' : ''}` : ''),
    )
  }

  /* Write the output */
  if (tree) {
    const stringifiedTree = JSON.stringify(tree, null, 2)
    fs.writeFile(treeout, stringifiedTree, (writeErr) => {
      if (writeErr) {
        console.error(`${warn} ${writeErr}`)
      }
      console.log(
        `${ConsoleColors.Dim}${info} ` +
        `Output written to ${treeout}${ConsoleColors.Reset}`,
      )
    })
    if (printAst) {
      console.log('--- AST ---')
      console.log(stringifiedTree + '\n')
    }
  } else {
    console.log(
      `${ConsoleColors.Dim}${info} ` +
      `No output written${ConsoleColors.Reset}`,
    )
  }

  /* Write the errors */
  if (numerrors > 0) {
    fs.writeFile(errors, compiler.errorLog.printErrors(), (writeErr) => {
      if (writeErr) {
        console.error(`${warn} ${writeErr}`)
      }
      console.log(
        `${ConsoleColors.Dim}${info}` +
        ` Errors written to ${errors}${ConsoleColors.Reset}`,
      )
    })
    if (printErrors) {
      console.error('--- ERRORS ---')
      console.error(compiler.errorLog.printErrors() + '\n')
    }
  }

  /* Transpile to Assembly */
  compiler.write(output).then((success) => {
    console.log(
      `${ConsoleColors.Dim}${info} ` +
      `Assembly written to ${output}${ConsoleColors.Reset}`,
    )
  }).catch((reason) => {
    console.error(`${warn} ${reason}`)
  })
})
