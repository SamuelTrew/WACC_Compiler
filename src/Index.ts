/* Library imports */
import * as argparse from 'argparse'
import { auto as autoEol } from 'eol'
import * as fs from 'fs'
import { EOL } from 'os'
import * as path from 'path'

/* Our code */
import { ConsoleColors } from './util/Colors'
import WJSCCompiler from './WJSCCompiler'

const antinos = 'HXLY' + 311
const indent = '       '

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

argp.addArgument(['-ps', '--print-asm'], {
  action: 'storeTrue',
  help: 'Print assembly',
})

argp.addArgument(['-t', '--tree'], {
  action: 'store',
  help: 'Output tree to a file',
})

argp.addArgument(['--debug'], {
  action: 'storeTrue',
  help: 'Activate debugging superpowers',
})

const args = argp.parseArgs()
const output = path.resolve(args.output || (path.parse(args.src).name + '.s'))
const treeout = args.tree
const errout = path.resolve(args.errors)
const printErrors = args.print_errors
const printAst = args.print_ast
const printAsm = args.print_asm
const info = (information: string) => console.log(`${ConsoleColors.Dim}[info] ${information}${ConsoleColors.Reset}`)
const warn = (warning: string) => console.error(`${ConsoleColors.FgRed}[warn] ${warning}${ConsoleColors.Reset}`)

/* Read file and run the callback */
fs.readFile(args.src, 'utf8', (err, data) => {
  if (err) {
    warn('Error reading file: ' + err.message)
    if (args.debug) {
      console.error('Stack trace: ')
      console.error(err.stack)
    }
  }

  /* Instantiate our compiler */
  const compiler = new WJSCCompiler(data)
  let tree
  let asm
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
    asm = compiler.generate()

    if (tree && treeout) {
      writeOut(path.resolve(treeout), JSON.stringify(tree, null, 2), 'AST', printAst ? 'log' : undefined).catch((error) => {
        warn(error)
      })
    }

    if (asm) {
      writeOut(output, asm, 'ASM', printAsm ? 'log' : undefined).catch((error) => {
        warn(error)
      })
    }

  } else {
    console.log(
      `  ${ConsoleColors.FgRed}[NG]${ConsoleColors.Reset} Compilation failed with ` +
      (synerrors > 0 ? `${synerrors} syntax error${synerrors !== 1 ? 's' : ''}` : '') +
      (synerrors > 0 && semerrors > 0 ? ' and ' : '') +
      (semerrors > 0 ? `${semerrors} semantic error${semerrors !== 1 ? 's' : ''}` : ''),
    )
    writeOut(errout, compiler.errorLog.printErrors(), 'Errors', printErrors ? 'error' : undefined).catch((error) => {
      warn(error)
    })
  }

})

const writeOut = (pathname: string | number | Buffer | URL, data: string, name: string, copyout?: 'log' | 'error'): Promise<void> => new Promise((resolve, reject) => {
  if (copyout) {
    console[copyout](`${indent}--- ${name} ---`)
    console[copyout](indent + (autoEol(data)).split(EOL).join(EOL + indent))
    console[copyout](`${indent}----${[...name].map(() => '-').join('')}----`)
  }
  fs.writeFile(pathname, data, (err) => {
    if (err) {
      warn(err.message)
      info('No output written')
      reject(err)
    } else {
      info(`${name} written to ${pathname}`)
      resolve()
    }
  })
})
