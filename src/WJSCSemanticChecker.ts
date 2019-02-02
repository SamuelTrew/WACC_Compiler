import { Parser, ParserRuleContext } from 'antlr4ts'
import { AbstractParseTreeVisitor, TerminalNode } from 'antlr4ts/tree'
import { WJSCLexer } from './grammar/WJSCLexer'
import {
  ArgListContext, ArrayElementContext,
  ArrayLiteralContext,
  ArrayTypeContext,
  AssignLhsContext, AssignmentContext,
  AssignRhsContext,
  BaseTypeContext,
  ConditionalBlocksContext, ExpressionContext,
  FuncContext, PairElementContext,
  PairElementTypeContext, PairTypeContext, ParamContext, ParamListContext,
  ProgramContext,
  StatementContext,
  TypeContext,
} from './grammar/WJSCParser'
import { WJSCParserVisitor } from './grammar/WJSCParserVisitor'
import { WJSCAst, WJSCTerminal } from './WJSCAst'
import { WJSCErrorLog } from './WJSCErrors'
import { WJSCSymbolTable } from './WJSCSymbolTable'
import { hasSameType, isBaseType } from './WJSCType'

/**
 * A semantic checker which builds an AST as it traverses through the tree
 * returned from the ANTLR4 runtime.
 */
class WJSCSemanticChecker extends AbstractParseTreeVisitor<WJSCAst> implements WJSCParserVisitor<WJSCAst> {

  private errorLog = new WJSCErrorLog()
  private symbolTable = new WJSCSymbolTable(0, undefined, this.errorLog)

  public visitArgList = (ctx: ArgListContext): WJSCAst => {
    // 1. Ensure >1 expression  2. Visit expressions 3. Ensure children not undefined
    const result = this.initWJSCAst(ctx)
    const expressions = ctx.expression()
    if (expressions.length === 0) {
      this.errorLog.log(result, 'incorrect arg no', [1, -1])
    }
    result.children = expressions.map(this.visitExpression)
    result.children.forEach((child, index) => {
      // WARNING: Correct check to ensure array size declaration is an int?
      if (child.type === undefined) {
        this.errorLog.log(result, 'undefined')
      }
    })
    return result
  }

  public visitArrayElement = (ctx: ArrayElementContext): WJSCAst => {
    // 1. Ensure ident is in lookup 2. Visit expressions 3. Ensure expressions evaluate to int
    const result = this.initWJSCAst(ctx)
    const ident = ctx.IDENTIFIER()
    const identType = this.visitTerminal(ident)
    this.symbolTable.checkType(identType)
    const expressions = ctx.expression()
    result.children = expressions.map(this.visitExpression)
    result.children.forEach((child, index) => {
      // WARNING: Correct check to ensure array size declaration is an int?
      hasSameType(child.type, 'int')
    })
    return result
  }

  public visitArrayLiteral = (ctx: ArrayLiteralContext): WJSCAst => {
    // 1. Ensure >1 expression 2. visit expressions 3. Ensure children not undefined
    // 4. Ensure children have same type 5. Ensure child is in lookup
    const result = this.initWJSCAst(ctx)
    const expressions = ctx.expression()
    if (expressions.length === 0) {
      this.errorLog.log(result, 'incorrect arg no', [1, -1])
    } else {
      result.children = expressions.map(this.visitExpression)
      const firstChild = result.children[0]
      result.children.forEach((child, index) => {
        if (child.type === undefined || firstChild.type === undefined) {
          this.errorLog.log(result, 'undefined')
        } else if (!hasSameType(child.type, firstChild.type)) {
          // TODO add new error for array type inconsistency
          this.errorLog.log(result, 'mismatch', firstChild.type)
        } else {
          this.symbolTable.checkType(child)
        }
      })
    }
    return result
  }

  public visitArrayType = (ctx: ArrayTypeContext): WJSCAst => {
    // 1. Ensure type not undefined 2. visit sub type
    const result = this.initWJSCAst(ctx)
    const type = ctx.baseType() || ctx.arrayType() || ctx.pairType()
    if (type === undefined) {
      this.errorLog.log(result, 'undefined')
    } else {
      const typeNode =
        (type instanceof BaseTypeContext) ? this.visitBaseType(type) :
          (type instanceof ArrayTypeContext) ? this.visitArrayType(type) :
            this.visitPairType(type)
      result.children.push(typeNode)
      result.type = {
        arrayType: typeNode.type,
      }
    }
    return result
  }

  public visitAssignLhs = (ctx: AssignLhsContext): WJSCAst => {
    // 1. Ensure either ident, array-elem, pair-elem 2. Visit these elems
    // 3. If ident, ensure ident is in lookup
    const result = this.initWJSCAst(ctx)
    const lhsElems = ctx.IDENTIFIER() || ctx.arrayElement() || ctx.pairElement()
    if (lhsElems === undefined) {
      this.errorLog.log(result, 'undefined')
    } else {
      const lhsNode =
          (lhsElems instanceof TerminalNode ? this.visitTerminal(lhsElems) :
              (lhsElems instanceof ArrayElementContext ? this.visitArrayElement(lhsElems) :
              this.visitPairElement(lhsElems)))
      result.children.push(lhsNode)
      if (lhsElems instanceof TerminalNode) {
        this.symbolTable.checkType(lhsNode)
      }
    }
    return this.initWJSCAst(ctx) // result
  }

  public visitAssignRhs = (ctx: AssignRhsContext): WJSCAst => {
    // 1. Ensure either array-liter, pair-elem, ident, expr(expr only or newpair)
    // 2. If expr, ensure children == 1. Else it is new pair and ensure children == 2
    // 2. Visit these elems 3. If ident, ensure ident is in lookup
    const result = this.initWJSCAst(ctx)
    const rhsElems = ctx.expression() || ctx.arrayLiteral() || ctx.pairElement() || ctx.IDENTIFIER()
    if (rhsElems === undefined) {
      this.errorLog.log(result, 'undefined')
    } else {
      if (ctx.expression() !== undefined) {
        if (!(ctx.NEW_PAIR() !== undefined && ctx.expression().length === 2 ||
            ctx.NEW_PAIR() === undefined && ctx.expression().length === 1)) {
          this.errorLog.log(result, 'undefined') // <- Checks right number of expressions for rhsElems that have it
        } else {
          result.children = rhsElems.map(this.visitExpression)// <- visit children Expressions
          result.children.forEach((child, index) => {
            if (child.type === undefined) {
              this.errorLog.log(result, 'undefined')
            }
          })
        }
      } else {
        const rhsNode =
            (rhsElems instanceof TerminalNode ? this.visitTerminal(rhsElems) :
                (rhsElems instanceof ArrayLiteralContext ? this.visitArrayLiteral(rhsElems) :
                    (rhsElems instanceof PairElementContext ? this.visitPairElement(rhsElems) :
                        undefined))) // <- visit children arrayLiter, pairElem, ident
        if (rhsNode !== undefined) {
          result.children.push(rhsNode)
          if (rhsElems instanceof TerminalNode) {
            this.symbolTable.checkType(rhsNode)
          }
        }
      }
    }
    return result // result
  }

  public visitAssignment = (ctx: AssignmentContext): WJSCAst => {
    // 1. Both lhs and rhs not undefined 2. visit lhs and rhs
    // THIS IS WRONG. Not the actual assignment option
    const result = this.initWJSCAst(ctx)
    const lhs = ctx.assignLhs()
    const rhs = ctx.assignRhs()
    if (lhs === undefined || rhs === undefined) {
      this.errorLog.log(result, 'undefined')
    } else {
      result.children.push(this.visitAssignLhs(lhs))
      result.children.push(this.visitAssignRhs(rhs))
      const ident = lhs.IDENTIFIER()
      if (ident === undefined) {
        this.errorLog.log(result, 'undefined')
      } else {
        // WARNING insert rhs?
        // this.symbolTable.insertSymbol(ident.text, rhs)
      }
    }
    return result
  }

  public visitBaseType = (ctx: BaseTypeContext): WJSCAst => {
    const result = this.initWJSCAst(ctx)
    const stringType = ctx.STRING()
    const intType = ctx.INTEGER()
    const boolType = ctx.BOOLEAN()
    const charType = ctx.CHARACTER()

    if (!(isBaseType(result.type) || isBaseType(stringType) || isBaseType(intType)
      || isBaseType(boolType) || isBaseType(charType) || hasSameType(result.type, 'string')
      || hasSameType(result.type, 'int') || hasSameType('char', result.type) ||
      hasSameType('bool', result.type))) {
      result.error.push('Incorrect type at ' + result.line + ':' + result.column)
    } else if (result.type === undefined) {
      this.errorLog.log(result, 'undefined')
    } else {
      this.symbolTable.checkType(result)
    }

    return result
  }

  public visitConditionalBlocks = (ctx: ConditionalBlocksContext): WJSCAst => {
    // not code: const result = this.initWJSCAst(ctx)
    return this.initWJSCAst(ctx) // result
  }

  public visitExpression = (ctx: ExpressionContext): WJSCAst => {
    const result = this.initWJSCAst(ctx)
    const literals = ctx.integerLiteral() || ctx.BOOLEAN_LITERAL() || ctx.CHARACTER_LITERAL()
      || ctx.STRING_LITERAL() || ctx.PAIR_LITERAL()
    const ident = ctx.IDENTIFIER()
    const arrayElem = ctx.arrayElement()
    const operators = ctx.unaryOperator() || ctx.binaryOperator()
    const bracket = ctx.LPAREN()
    if (literals === undefined && ident === undefined && arrayElem === undefined &&
      operators === undefined && bracket === undefined) {
      result.error.push('Expressions are invalid ' + result.line + ':' + result.column)
    } else {
      if (operators !== undefined || bracket !== undefined) {
        if (bracket !== undefined && ctx.RPAREN() === undefined) {
          // Scenario in which there is no ending bracket
          result.error.push('Expression bracketing is invalid ' + result.line + ':' + result.column)
        } else {
          const expressions = ctx.expression()
          expressions.forEach((child, index) => {
            this.visitExpression(child)
          })
        }
      }
      if (arrayElem !== undefined) {
        this.visitArrayElement(arrayElem)
      }
    }
    return result
  }

  public visitFunc = (ctx: FuncContext): WJSCAst => {
    const result = this.initWJSCAst(ctx)

    const type = ctx.type()
    // WARNING: I think you need to check if a function has no undefined parts
    const ident = ctx.IDENTIFIER()
    const paramList = ctx.paramList()
    const stat = ctx.statement()

    const typeNode = this.visitType(type)
    const statNode = this.visitStatement(stat)
    const identNode = this.visitTerminal(ident)
    if (paramList !== undefined) {
      const paramNode = this.visitParamList(paramList)
      if (result.type === undefined || type === undefined) {
        this.errorLog.log(result, 'undefined')
      } else {
        this.symbolTable.checkType(result)
        this.symbolTable.checkType(typeNode)
        this.symbolTable.checkType(statNode)
        this.symbolTable.checkType(paramNode)
        this.symbolTable.checkType(identNode)
      }
    } else {
      result.error.push('Your paramList is undefined at ' + result.line + ':' + result.column)
    }
    return result
  }

  public visitPairElement = (ctx: PairElementContext): WJSCAst => {
    // not code: const result = this.initWJSCAst(ctx)
    return this.initWJSCAst(ctx) // result
  }

  public visitPairElementType = (ctx: PairElementTypeContext): WJSCAst => {
    const result = this.initWJSCAst(ctx)
    const baseType = ctx.baseType()
    const arrayType = ctx.arrayType()
    const pair = ctx.PAIR()

    if (baseType === undefined || arrayType === undefined || pair === undefined) {
      this.errorLog.log(result, 'undefined')
    } else {
      const baseTypeNode = this.visitBaseType(baseType)
      const arrayTypeNode = this.visitArrayType(arrayType)
      const pairTerminalNode = this.visitTerminal(pair)

      this.symbolTable.checkType(baseTypeNode)
      this.symbolTable.checkType(arrayTypeNode)
      this.symbolTable.checkType(pairTerminalNode)
    }
    return result
  }

  public visitPairType = (ctx: PairTypeContext): WJSCAst => {
    const result = this.initWJSCAst(ctx)
    const pairs = ctx.pairElementType()
    pairs.forEach((pair, index) => {
      this.visitPairElementType(pair)
    })
    return result
  }

  public visitParam = (ctx: ParamContext): WJSCAst => {
    const result = this.initWJSCAst(ctx)
    // WARNING: I think you need to check if a function has no undefined parts
    // const ident = ctx.IDENTIFIER()
    const type = ctx.type()
    const typeNode = this.visitType(type)

    // comment: if (type === undefined || result.type === undefined) {
    //   result.error.push('Type is undefined at ' + result.line + ':' + result.column)
    // } else if (!this.symbolTable.checkType(typeNode.token, typeNode.type)) {
    //   result.error.push('Different type from ST at ' + result.line + ':' + result.column)
    // } else if (!hasSameType(typeNode.type, result.type)) {
    //   result.error.push('Incorrect type at ' + result.line + ':' + result.column)
    // }
    return result
  }

  public visitParamList = (ctx: ParamListContext): WJSCAst => {
    const result = this.initWJSCAst(ctx)
    const params = ctx.param()
    params.forEach((param, index) => {
      this.visitParam(param)
    })
    return result
  }

  public visitProgram = (ctx: ProgramContext): WJSCAst => {
    const result = this.initWJSCAst(ctx)
    const functions = ctx.func()
    const stat = ctx.statement()

    if (functions === undefined || stat === undefined) {
      this.errorLog.log(result, 'undefined')
    } else {
      const statNode = this.visitStatement(stat)
      this.symbolTable.checkType(statNode)
      functions.forEach((func, index) => {
        const funcNode = this.visitFunc(func)
        this.symbolTable.checkType(funcNode)
      })
    }
    return result
  }

  public visitStatement = (ctx: StatementContext): WJSCAst => {
    const result = this.initWJSCAst(ctx)
    const skip = ctx.WSKIP()
    // WARNING Missing: FREE, RETURN, EXIT, PRINT, PRINTLN <- Are these STDLIBs?
    const statWithSingleExp = ctx.stdlib()
    // The other assignment format? (<type><ident> = <assign rhs>)
    const assignment = ctx.assignment() || ctx.READ()
    const conditionals = ctx.conditionalBlocks()
    const begin = ctx.BEGIN()
    const semicolon = ctx.SEMICOLON()
    if (skip === undefined && statWithSingleExp === undefined && assignment === undefined
      && conditionals === undefined && begin === undefined && semicolon === undefined) {
      result.error.push('Statement is invalid at ' + result.line + ':' + result.column)
    } else {
      if (statWithSingleExp !== undefined) {
        const singleExp = ctx.expression()
        if (singleExp === undefined) {
          result.error.push('Statement with single Exp has invalid Exp at ' + result.line + ':' + result.column)
        } else {
          this.visitExpression(singleExp)
        }
      }
      if (assignment !== undefined) {
        if (ctx.READ() !== undefined) {
          const lhs = ctx.assignLhs()
          if (lhs === undefined) {
            result.error.push('Invalid Lhs for READ statement at  ' + result.line + ':' + result.column)
          } else {
            this.visitAssignLhs(lhs)
          }
        }
        if (ctx.assignment() !== undefined) {
          const assignments = ctx.assignment()
          if (assignments === undefined) {
            result.error.push('Invalid Assignment in statement at  ' + result.line + ':' + result.column)
          } else {
            this.visitAssignment(assignments)
          }
        }
      }
      if (conditionals !== undefined) {
        const condExp = ctx.expression()
        const childStats = ctx.statement()
        if (condExp === undefined) {
          result.error.push('Statement with cond Exp has invalid Exp at ' + result.line + ':' + result.column)
        } else {
          this.visitExpression(condExp)
        }
        childStats.forEach((child, index) => {
          this.visitStatement(child)
        })
      }
      if (begin !== undefined) {
        // We check to make sure end is there
        if (ctx.END() === undefined) {
          result.error.push('Statement with begin has no end at ' + result.line + ':' + result.column)
        } else {
          const childStats = ctx.statement()
          childStats.forEach((child, index) => {
            this.visitStatement(child)
          })
        }
      }
      if (semicolon !== undefined) {
        const childStats = ctx.statement()
        childStats.forEach((child, index) => {
          this.visitStatement(child)
        })
      }
    }
    return result // result
  }

  public visitType = (ctx: TypeContext): WJSCAst => {
    const result = this.initWJSCAst(ctx)

    let visited
    const type = ctx.baseType() || ctx.arrayType() || ctx.pairType()
    if (type instanceof BaseTypeContext) {
      visited = this.visitBaseType(type)
    } else if (type instanceof ArrayTypeContext) {
      visited = this.visitArrayType(type)
    } else if (type instanceof PairTypeContext) {
      visited = this.visitPairType(type)
    }

    if (visited) {
      result.children.push(visited)
      result.type = visited.type
    } else {
      this.errorLog.log(result, 'undefined')
    }

    return result
  }

  public visitTerminal = (node: TerminalNode): WJSCTerminal => {
    const terminal = this.initWJSCAst(node) as WJSCTerminal
    const token = node.toString()
    const type = node.symbol.type
    if (WJSCLexer.BEGIN <= type && type <= WJSCLexer.END) {
      terminal.terminalType = 'PROGRAM_KEYWORD'
    } else if (type === WJSCLexer.IS) {
      terminal.terminalType = 'FUNCTION_DECL'
    } else if (WJSCLexer.WSKIP <= type && type <= WJSCLexer.PRINTLN) {
      terminal.terminalType = 'STDLIB'
    } else if (WJSCLexer.IF <= type && type <= WJSCLexer.DONE) {
      terminal.terminalType = 'CONDITIONALS'
    }
  }

  protected defaultResult(): WJSCAst {
    return {
      children: [],
      column: -1,
      line: -1,
      startIndex: -1,
      token: 'default',
      type: 'undefined',
    }
  }

  private initWJSCAst = (ctx: ParserRuleContext | TerminalNode): WJSCAst | WJSCTerminal => {
    let charPositionInLine, line, startIndex, text
    if (ctx instanceof ParserRuleContext) {
      ({ charPositionInLine, line, startIndex, text } = ctx.start)
    } else {
      ({ charPositionInLine, line, startIndex, text } = ctx.symbol)
    }
    return {
      children: [],
      column: charPositionInLine,
      line, startIndex,
      token: text || '',
      type: 'undefined',
    }
  }
}

export { WJSCSemanticChecker }
