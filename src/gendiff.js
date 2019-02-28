const ArgumentParser = require('argparse').ArgumentParser
const path = require('path')
const fs = require('fs')
const jsdiff = require('diff')
const os = require('os')
const eol = require('eol')

const WJSCCompiler = require('../build/WJSCCompiler').default
const { ConsoleColors } = require('../build/util/Colors')

const parser = new ArgumentParser({
  version: '1.0.69',
  addHelp: true,
  description: 'For a selected wacc file, compare our generated assembly with the reference compiler'
})

parser.addArgument('src', {
  action: 'store',
  help: 'Path to source code to compile.',
  metavar: '<source.wacc>',
})

const args = parser.parseArgs()
const srcfile = path.resolve(args.src)
const compiler = new WJSCCompiler(fs.readFileSync(srcfile, 'utf8'))
const gencode = compiler.generate()
const asmfile = path.resolve('wacc_examples', 'assembly', path.dirname(path.relative('wacc_examples', args.src)), path.parse(args.src).name + '.asm')
const refcode = fs.readFileSync(asmfile, 'utf8')
const diff = jsdiff.diffTrimmedLines(eol.auto(refcode), eol.auto(gencode), { ignoreCase: true })
diff.forEach((change) => {
  if (change.added) {
    change.value.split(os.EOL).forEach((line, index) => {
      if (index !== change.value.split(os.EOL).length - 1)
        console.log(`${ConsoleColors.FgGreen} + ${line}${ConsoleColors.Reset}`)
    })
  } else if (change.removed) {
    change.value.split(os.EOL).forEach((line, index) => {
      if (index !== change.value.split(os.EOL).length - 1)
        console.log(`${ConsoleColors.FgRed} - ${line}${ConsoleColors.Reset}`)
    })
  } else {
    change.value.split(os.EOL).forEach((line, index) => {
      if (index !== change.value.split(os.EOL).length - 1)
        console.log(`${ConsoleColors.Dim}   ${line}${ConsoleColors.Reset}`)
    })
  }
})
