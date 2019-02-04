/* Library imports */
import * as argparse from 'argparse'
import * as fs from 'fs'

/* ANTLR imports */
import * as antlr4ts from 'antlr4ts'
import { WJSCLexer } from './grammar/WJSCLexer'
import { WJSCParser } from './grammar/WJSCParser'

/* Our code */
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

const args = argp.parseArgs()

fs.readFile(args.src, 'utf8', (err, data) => {
  if (err) { throw err }
  const inputStream = new antlr4ts.ANTLRInputStream(data)
  const lexer = new WJSCLexer(inputStream)
  const tokenStream = new antlr4ts.CommonTokenStream(lexer)
  const parser = new WJSCParser(tokenStream)
  const visitor = new WJSCSemanticChecker()
  visitor.visit(parser.program())
})
