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
  IntegerLiteralContext,
  StdlibContext,
  UnaryOperatorContext,
} from './grammar/WJSCParser'
import { WJSCParserVisitor } from './grammar/WJSCParserVisitor'
import { WJSCAst, WJSCTerminal } from './WJSCAst'
import { SemError, SynError, WJSCErrorLog } from './WJSCErrors'
import { WJSCSymbolTable } from './WJSCSymbolTable'
import { BaseType, hasSameType, isBaseType, TerminalKeywords, TerminalOperators } from './WJSCType'
import { BinaryOperContext } from './grammar/BasicParser';
// WARNING: Results must be pushed in exact order?
// Should error-ridden elems still be pushed on results?
// Result.type?
// CHECK CHILD EXP TYPE NOT CHILD EXP AHHHHHH
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
      this.errorLog.log(result, SemError.IncorrectArgNo, [1, -1])
    }
    result.children = expressions.map(this.visitExpression)
    this.checkChildrenUndefined(result)
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
      hasSameType(child.type, BaseType.Integer)
    })
    return result
  }

  public visitArrayLiteral = (ctx: ArrayLiteralContext): WJSCAst => {
    // 1. Ensure >1 expression 2. visit expressions 3. Ensure children not undefined
    // 4. Ensure children have same type
    const result = this.initWJSCAst(ctx)
    const expressions = ctx.expression()
    if (expressions.length === 0) {
      this.errorLog.log(result, SemError.IncorrectArgNo, [1, -1])
    } else {
      result.children = expressions.map(this.visitExpression)
      const firstChild = result.children[0]
      result.children.forEach((child, index) => {
        if (!child.type || !firstChild.type) {
          this.errorLog.log(result, SemError.Undefined)
        }
        if (!hasSameType(child.type, firstChild.type)) {
          // TODO add new error for array type inconsistency
          this.errorLog.log(result, SemError.Mismatch, firstChild.type)
        }
      })
    }
    return result
  }

  public visitArrayType = (ctx: ArrayTypeContext): WJSCAst => {
    // 1. Ensure type not undefined 2. visit sub type
    const result = this.initWJSCAst(ctx)
    const type = ctx.baseType() || ctx.arrayType() || ctx.pairType()
    if (!type) {
      this.errorLog.log(result, SemError.Undefined)
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
    if (!lhsElems) {
      this.errorLog.log(result, SemError.Undefined)
    } else {
      const lhsNode =
        (lhsElems instanceof TerminalNode ? this.visitTerminal(lhsElems) :
          (lhsElems instanceof ArrayElementContext ? this.visitArrayElement(lhsElems) :
            this.visitPairElement(lhsElems)))
      result.children.push(lhsNode)
      if (lhsElems instanceof TerminalNode) {
        const identType = this.visitTerminal(lhsElems)
        this.symbolTable.checkType(identType)
      }
    }
    return this.initWJSCAst(ctx) // result
  }

  public visitAssignRhs = (ctx: AssignRhsContext): WJSCAst => {
    // 1. Ensure either array-liter, pair-elem, call or expr(expr only or newpair)
    // 2. If call, ensure ident, brackets not undefined. check ident in lookup.
    // 3. If exp alone, ensure childExp not undefined
    // 4. If 2 exps, ensure newpair, brackets, comma not undefined. Ensure childExps not undefined
    // 5. visitThem
    const result = this.initWJSCAst(ctx)
    const possibles = ctx.arrayLiteral() || ctx.pairElement() || ctx.CALL() || ctx.expression()
    if (!possibles) {
      this.errorLog.log(result, SemError.Undefined)
    } else {
      const arrLiter = ctx.arrayLiteral()
      const pairElem = ctx.pairElement()
      const call = ctx.CALL()
      if (arrLiter) {
        result.children.push(this.visitArrayLiteral(arrLiter))
      } else if (pairElem) {
        result.children.push(this.visitPairElement(pairElem))
      } else if (call) {
        result.children.push(this.visitTerminal(call))
        const ident = ctx.IDENTIFIER()
        const lBrack = ctx.LPAREN()
        const rBrack = ctx.RPAREN()
        const argList = ctx.argList()
        if (!ident || !lBrack) {
          this.errorLog.log(result, SemError.Undefined)
        } else {
          const identType = this.visitTerminal(ident)
          this.symbolTable.checkType(identType)
          result.children.push(identType)
          result.children.push(this.visitTerminal(lBrack))
        }
        if (argList) {
          result.children.push(this.visitArgList(argList))
        }
        if (!rBrack) {
          this.errorLog.log(result, SemError.Undefined)
        } else {
          result.children.push(this.visitTerminal(rBrack))
        }
      } else {
        // These are all the children with expr in it
        const expressions = (ctx.expression()).map(this.visitExpression)
        if (expressions.length === 1) {
          if (!expressions[0]) {
            this.errorLog.log(result, SemError.Undefined)
          } else {
            result.children.push(expressions[0])
          }
        } else if (expressions.length === 2) {
          const newpair = ctx.NEW_PAIR()
          const lBrack = ctx.LPAREN()
          const comma = ctx.COMMA()
          const rBrack = ctx.RPAREN()
          if (!newpair || !lBrack || !comma || !rBrack) {
            this.errorLog.log(result, SemError.Undefined)
          } else {
            result.children.push(this.visitTerminal(newpair))
            result.children.push(this.visitTerminal(lBrack))
            if (!expressions[0]) {
              this.errorLog.log(result, SemError.Undefined)
            } else {
              result.children.push(expressions[0])
            }
            result.children.push(this.visitTerminal(comma))
            if (!expressions[1]) {
              this.errorLog.log(result, SemError.Undefined)
            } else {
              result.children.push(expressions[1])
            }
            result.children.push(this.visitTerminal(rBrack))
          }
        } else {
          this.errorLog.log(result, SemError.IncorrectArgNo, [1, 2])
        }
      }
    }
    return result // result
  }

  public visitAssignment = (ctx: AssignmentContext): WJSCAst => {
    // 1. Both lhs and rhs not undefined 2. visit lhs and rhs
    // 3. If an assignment, Add this assignment to the lookup
    // 4. (Check that can be removed later): Ensure ident is in table
    const result = this.initWJSCAst(ctx)
    const lhs = ctx.assignLhs()
    const lhsType = ctx.type()
    const lhsIdent = ctx.IDENTIFIER()
    const rhs = ctx.assignRhs()
    if ((!lhs && (!lhsType || !lhsIdent)) || !rhs) {
      this.errorLog.log(result, SemError.Undefined)
    } else {
      if (lhs) {
        // Reassignment
        result.children.push(this.visitAssignLhs(lhs))
        result.children.push(this.visitAssignRhs(rhs))
      } else if (lhsType && lhsIdent) {
        // Assignment
        result.children.push(this.visitType(lhsType))
        const identType = this.visitTerminal(lhsIdent)
        result.children.push(identType)
        const right = this.visitAssignRhs(rhs)
        result.children.push(right)
        this.symbolTable.insertSymbol(identType.toString(), right)
        // WARNING: Below will eventually be an unnecessary check
        this.symbolTable.checkType(identType)
      }
    }
    return result
  }

  public visitBaseType = (ctx: BaseTypeContext): WJSCAst => {
    // 1. Ensure one of base type 2. visit these types
    const result = this.initWJSCAst(ctx)
    const base = ctx.INTEGER() || ctx.BOOLEAN() || ctx.CHARACTER() || ctx.STRING()
    if (!base) {
      this.errorLog.log(result, SemError.Undefined)
    } else {
      const terminal = this.visitTerminal(base)
      result.children.push(terminal)
    }
    return result
  }

  public visitBinaryOperator = (ctx: BinaryOperContext): WJSCAst => {
    return this.initWJSCAst(ctx)
  }

  public visitConditionalBlocks = (ctx: ConditionalBlocksContext): WJSCAst => {
    // 1. Ensure either ifThenElseFi or whileDoDone 2. if ifThenElseFi check childStat == 2
    // 3. if whileDoDone check childStat == 1 4. visit all children
    // 5. Ensure childStats not undefined
    // 6. Ensure childExps are booleans
    const result = this.initWJSCAst(ctx)
    const ifB = ctx.IF()
    const thenB = ctx.THEN()
    const elseB = ctx.ELSE()
    const fiB = ctx.FI()
    const whileB = ctx.WHILE()
    const doB = ctx.DO()
    const doneB = ctx.DONE()
    const childExp = ctx.expression()
    const childStat = ctx.statement()
    const ifThenElseFi = (ifB) && (thenB) && (elseB) && (fiB)
      && (childExp) && (childStat)
    const whileDoDone = (whileB) && (doB) && (doneB)
      && (childExp) && (childStat)
    if (!ifThenElseFi && !whileDoDone) {
      this.errorLog.log(result, SemError.Undefined)
    } else {
      if (ifThenElseFi && childStat.length !== 2) {
        this.errorLog.log(result, SemError.IncorrectArgNo, [2, 2])
      } else if (whileDoDone && childStat.length !== 1) {
        this.errorLog.log(result, SemError.IncorrectArgNo, [1, 1])
      } else {
        // Visit childExps and childStats, checking 5. and 6.
        // WARNING: Assumes order in which they are pushed to the result does not matter. redo later
        const childExpType = this.visitExpression(childExp)
        if (!hasSameType(childExpType.type, BaseType.Boolean)) {
          this.errorLog.log(result, SemError.Mismatch, BaseType.Boolean)
        }
        childStat.forEach((child, index) => {
          const childStatType = this.visitStatement(child)
          result.children.push(childStatType)
          if (!childStatType) {
            this.errorLog.log(result, SemError.Undefined)
          }
        })
        if ((ifB) && (thenB) && (elseB) && (fiB)) {
          // <- tsLint wont allow ifThen...
          // visiting ifThenElseFi's unique children
          result.children.push(this.visitTerminal(ifB))
          result.children.push(this.visitTerminal(thenB))
          result.children.push(this.visitTerminal(fiB))
        } else if ((whileB) && (doB) && (doneB)) {
          // visiting whileDoDone's unique children
          result.children.push(this.visitTerminal(whileB))
          result.children.push(this.visitTerminal(doB))
          result.children.push(this.visitTerminal(doneB))
        }
      }
    }
    return result
  }

  public visitExpression = (ctx: ExpressionContext): WJSCAst => {
    // 1. Ensure either literals, idents, array-elem, operators or bracket
    // 2. if bracket, ensure both brackets present 3. Ensure ident is in lookup
    // 4. visit childrenExp 5. if Unop or bracket, childExp == 1 6. if BinOp, childExp == 2
    // 5. ensure childExpType are not undefined
    const result = this.initWJSCAst(ctx)
    const intLiterals = ctx.integerLiteral()
    const literals = ctx.BOOLEAN_LITERAL() || ctx.CHARACTER_LITERAL()
      || ctx.STRING_LITERAL() || ctx.PAIR_LITERAL()
    const ident = ctx.IDENTIFIER()
    const arrayElem = ctx.arrayElement()
    const operators = ctx.unaryOperator() || ctx.binaryOperator()
    const bracket = ctx.LPAREN()
    if (!intLiterals && !literals && !ident && !arrayElem && !operators && !bracket) {
      this.errorLog.log(result, SemError.Undefined)
    } else {
      if (literals) {
        result.children.push(this.visitTerminal(literals))
      } else if (ident) {
        const identType = this.visitTerminal(ident)
        this.symbolTable.checkType(identType)
        result.children.push(identType)
      } else if (arrayElem) {
        result.children.push(this.visitArrayElement(arrayElem))
      } else if (operators || bracket) {
        if (bracket) {
          result.children.push(this.visitTerminal(bracket))
          const rBracket = ctx.RPAREN()
          if (!rBracket) {
            this.errorLog.log(result, SemError.Undefined)
          } else {
            result.children.push(this.visitTerminal(rBracket))
          }
        }
        const expressions = ctx.expression()
        if (!expressions) {
          this.errorLog.log(result, SemError.Undefined)
        } else {
          if (ctx.unaryOperator() && expressions.length !== 1) {
            this.errorLog.log(result, SemError.IncorrectArgNo, [1, 1])
          } else if (ctx.binaryOperator() && expressions.length !== 2) {
            this.errorLog.log(result, SemError.IncorrectArgNo, [2, 2])
          }
          const childrenExpType = expressions.map(this.visitExpression)
          childrenExpType.forEach((child, index) => {
            if (!child) {
              this.errorLog.log(result, SemError.Undefined)
            }
            result.children.push(child)
          })
        }
      } else {
        // int literals- cant visit them
      }
    }
    return result
  }

  public visitFunc = (ctx: FuncContext): WJSCAst => {
    // 1. Ensure type, ident, is, stat, end not undefined
    // 2. visit them 3. if paramList is present, visit paramList
    // 4. WARNING: Should we add it to symbolTable?
    const result = this.initWJSCAst(ctx)
    const type = ctx.type()
    const ident = ctx.IDENTIFIER()
    const lBracket = ctx.LPAREN()
    const paramList = ctx.paramList()
    const rBracket = ctx.RPAREN()
    const is = ctx.IS()
    const stat = ctx.statement()
    const end = ctx.END()
    if (!type || !ident || !lBracket || !rBracket ||
      !is || !stat || !end) {
      this.errorLog.log(result, SemError.Undefined)
    } else {
      result.children.push(this.visitType(type))
      const identType = this.visitTerminal(ident)
      this.symbolTable.checkType(identType)
      // TODO Add new function type to symbol table?
      result.children.push(identType)

      // Function's own scope
      this.symbolTable = this.symbolTable.enterScope()
      result.children.push(this.visitTerminal(lBracket))
      if (paramList) {
        result.children.push(this.visitParamList(paramList))
      }
      result.children.push(this.visitTerminal(rBracket))
      result.children.push(this.visitTerminal(is))
      result.children.push(this.visitStatement(stat))
      result.children.push(this.visitTerminal(end))
      this.symbolTable = this.symbolTable.exitScope()
    }
    return result
  }

  public visitPairElement = (ctx: PairElementContext): WJSCAst => {
    // 1. Ensure order and expressions not undefined 2. visit childOrder and childExp
    const result = this.initWJSCAst(ctx)
    const order = ctx.FIRST() || ctx.SECOND()
    const expressions = ctx.expression()
    if (!expressions || !order) {
      this.errorLog.log(result, SemError.Undefined)
    } else {
      result.children.push(this.visitTerminal(order))
      const childExp = this.visitExpression(expressions)
      result.children.push(childExp)
    }
    return result
  }

  public visitPairElementType = (ctx: PairElementTypeContext): WJSCAst => {
    // 1. Ensure either base, array or pair not undefined 2. visit possibilities
    const result = this.initWJSCAst(ctx)
    const possibles = ctx.baseType() || ctx.arrayType() || ctx.PAIR()
    if (!possibles) {
      this.errorLog.log(result, SemError.Undefined)
    } else {
      const possiblesType =
        (possibles instanceof BaseTypeContext) ? this.visitBaseType(possibles) :
          (possibles instanceof ArrayTypeContext) ? this.visitArrayType(possibles) :
            this.visitTerminal(possibles)
      result.children.push(possiblesType)
    }
    return result
  }

  public visitPairType = (ctx: PairTypeContext): WJSCAst => {
    // 1. Ensures 'pair' and pairs not undefined 2. Ensure pairs == 2
    //  3. visit 'pair' and pairs 4. Ensure pairChild not undefined
    const result = this.initWJSCAst(ctx)
    const pair = ctx.PAIR()
    const pairs = ctx.pairElementType()
    if (!pair || !pairs) {
      this.errorLog.log(result, SemError.Undefined)
    } else {
      result.children.push(this.visitTerminal(pair))
      if (pairs.length !== 2) {
        this.errorLog.log(result, SemError.IncorrectArgNo, [2, 2])
      } else {
        pairs.forEach((child, index) => {
          if (!child) {
            this.errorLog.log(result, SemError.Undefined)
          }
          result.children.push(this.visitPairElementType(child))
        })
      }
    }
    return result
  }

  public visitParam = (ctx: ParamContext): WJSCAst => {
    // 1. Ensure type and ident not undefined 2. Ensure ident is in lookup
    const result = this.initWJSCAst(ctx)
    const type = ctx.type()
    const ident = ctx.IDENTIFIER()
    if (!type || !ident) {
      this.errorLog.log(result, SemError.Undefined)
    } else {
      result.children.push(this.visitType(type))
      const identType = this.visitTerminal(ident)
      this.symbolTable.checkType(identType)
      result.children.push(identType)
    }
    return result
  }

  public visitParamList = (ctx: ParamListContext): WJSCAst => {
    // 1. Ensure params not undefined 2. Ensure param >= 1
    // 3. visit params 4. Ensure params not undefined
    const result = this.initWJSCAst(ctx)
    const params = ctx.param()
    if (!params) {
      this.errorLog.log(result, SemError.Undefined)
    } else {
      if (params.length < 1) {
        this.errorLog.log(result, SemError.IncorrectArgNo, [1, -1])
      } else {
        params.forEach((param, index) => {
          if (!param) {
            this.errorLog.log(result, SemError.Undefined)
          }
          result.children.push(this.visitParam(param))
        })
      }
    }
    return result
  }

  public visitProgram = (ctx: ProgramContext): WJSCAst => {
    // 1. Ensure begin, stat and end not undefined 2. visit them
    // 3. If func is present, visit func's list 4. Ensure funcChild not undefined
    const result = this.initWJSCAst(ctx)
    const begin = ctx.BEGIN()
    const functions = ctx.func()
    const stat = ctx.statement()
    const end = ctx.END()
    if (!begin || !stat || !end) {
      this.errorLog.log(result, SemError.Undefined)
    } else {
      result.children.push(this.visitTerminal(begin))
      if (functions) {
        functions.forEach((child, index) => {
          if (!child) {
            this.errorLog.log(result, SemError.Undefined)
          }
          result.children.push(this.visitFunc(child))
        })
      }
      result.children.push(this.visitStatement(stat))
      result.children.push(this.visitTerminal(end))
    }
    return result
  }

  public visitStatement = (ctx: StatementContext): WJSCAst => {
    // 1. Ensure either skip, Assignments, read, singleExp, conditional, begin/end or semicolon
    // not undefined 2. If read, ensures lhs not undefined 3. If singleExp,ensures expr not undefined
    // 4. If begin, ensures stat and end not undefined, and stat == 1
    // 5. If semicolon, ensure stat not undefined, stat == 1
    // 6. visit them
    const result = this.initWJSCAst(ctx)
    const skip = ctx.WSKIP()
    const assignment = ctx.assignment()
    const read = ctx.READ()
    const singleExp = ctx.stdlib()
    const conditionals = ctx.conditionalBlocks()
    const begin = ctx.BEGIN()
    const semicolon = ctx.SEMICOLON()
    if (!result && !skip && !assignment
      && !read && !singleExp && !conditionals && !begin
      && !semicolon) {
      this.errorLog.log(result, SemError.Undefined)
    } else {
      if (skip) {
        result.children.push(this.visitTerminal(skip))
      } else if (assignment) {
        result.children.push(this.visitAssignment(assignment))
      } else if (read) {
        const lhs = ctx.assignLhs()
        if (!lhs) {
          this.errorLog.log(result, SemError.Undefined)
        } else {
          result.children.push(this.visitTerminal(read))
          result.children.push(this.visitAssignLhs(lhs))
        }
      } else if (singleExp) {
        const expression = ctx.expression()
        if (!expression) {
          this.errorLog.log(result, SemError.Undefined)
        } else {
          result.children.push(this.visitExpression(expression))
        }
      } else if (conditionals) {
        result.children.push(this.visitConditionalBlocks(conditionals))
      } else if (begin) {
        const stat = ctx.statement()
        const end = ctx.END()
        if (!stat || !end) {
          this.errorLog.log(result, SemError.Undefined)
        } else {
          if (stat.length !== 1) {
            this.errorLog.log(result, SemError.IncorrectArgNo, [1, 1])
          } else {
            if (!stat[0]) {
              this.errorLog.log(result, SemError.Undefined)
            }
            result.children.push(this.visitStatement(stat[0]))
          }
          result.children.push(this.visitTerminal(end))
        }
      } else if (semicolon) {
        // semicolon
        const stat = ctx.statement()
        if (!stat) {
          this.errorLog.log(result, SemError.Undefined)
        } else {
          if (stat.length !== 2) {
            this.errorLog.log(result, SemError.IncorrectArgNo, [2, 2])
          } else {
            result.children.push(this.visitStatement(stat[0]))
            result.children.push(this.visitTerminal(semicolon))
            result.children.push(this.visitStatement(stat[1]))
          }
        }
      }
    }
    return result
  }

  public visitStdlib = (ctx: StdlibContext): WJSCAst => {
    return this.initWJSCAst(ctx)
  }

  public visitType = (ctx: TypeContext): WJSCAst => {
    // 1. Ensure either base type, array type, pair type not undefined 2. visit types
    const result = this.initWJSCAst(ctx)
    const type = ctx.baseType() || ctx.arrayType() || ctx.pairType()
    if (!type) {
      this.errorLog.log(result, SemError.Undefined)
    } else {
      const childType =
        (type instanceof BaseTypeContext) ? this.visitBaseType(type) :
          (type instanceof ArrayTypeContext) ? this.visitArrayType(type) :
            this.visitPairType(type)
      result.children.push(childType)
    }
    return result
  }

  public visitTerminal = (node: TerminalNode): WJSCTerminal => {
    const terminal = this.initWJSCAst(node) as WJSCTerminal
    const token = node.toString()
    const type = node.symbol.type
    if (WJSCLexer.BEGIN <= type && type <= WJSCLexer.END) {
      terminal.terminalType = TerminalKeywords.Program
    } else if (type === WJSCLexer.IS) {
      terminal.terminalType = TerminalKeywords.Function
    } else if (WJSCLexer.WSKIP <= type && type <= WJSCLexer.PRINTLN) {
      terminal.terminalType = TerminalKeywords.Stdlib
    } else if (WJSCLexer.IF <= type && type <= WJSCLexer.DONE) {
      terminal.terminalType = TerminalKeywords.Conditional
    } else if (type === WJSCLexer.CALL) {
      terminal.terminalType = TerminalKeywords.Call
    } else if (type === WJSCLexer.FIRST || type === WJSCLexer.SECOND) {
      terminal.terminalType = TerminalKeywords.Accessor
    } else if (WJSCLexer.MULTIPLY <= type && type <= WJSCLexer.LOGICAL_OR) {
      terminal.terminalType = TerminalOperators.Binary
    } else if (type === WJSCLexer.ASSIGNMENT) {
      terminal.terminalType = TerminalOperators.Assignment
    } else if (WJSCLexer.LOGICAL_NEGATION <= type && type <= WJSCLexer.CHARACTER_OF) {
      terminal.terminalType = TerminalOperators.Unary
    } else if (type === WJSCLexer.BOOLEAN_LITERAL) {
      terminal.terminalType = terminal.type = BaseType.Boolean
      terminal.value = (token === 'true')
    } else if (type === WJSCLexer.CHARACTER_LITERAL) {
      terminal.terminalType = terminal.type = BaseType.Character
      const charRegexTest
        = /(?<=')([\u0000-\u0021]|[\u0023-\u0026]|[\u0028-\u005b]|[\u005d-\u007f]|\\(0|b|t|n|f|r|'|\\|"))(?=')/
      const char = charRegexTest.exec(token)
      if (char) {
        terminal.value = char[0]
      } else {
        this.errorLog.log(terminal, SynError.IllegalChar)
      }
    } else if (type === WJSCLexer.DIGIT) {
      terminal.terminalType = terminal.type = BaseType.Integer
      terminal.value = Number(token)
    } else if (type === WJSCLexer.PAIR_LITERAL) {
      terminal.terminalType = terminal.type = BaseType.Pair
      terminal.value = null
    } else if (type === WJSCLexer.STRING_LITERAL) {
      terminal.terminalType = terminal.type = BaseType.String
      const strRegexTest
        = /(?<=")([\u0000-\u0021]|[\u0023-\u0026]|[\u0028-\u005b]|[\u005d-\u007f]|\\(0|b|t|n|f|r|'|\\|"))+(?=")/
      const str = strRegexTest.exec(token)
      if (str) {
        terminal.value = str[0]
      } else {
        this.errorLog.log(terminal, SynError.IllegalStr)
      }
    } else if (type === WJSCLexer.IDENTIFIER) {
      terminal.terminalType = TerminalKeywords.Identifier
      terminal.value = token
    }
    return terminal
  }

  public visitUnaryOperator = (ctx: UnaryOperatorContext): WJSCAst => {
    return this.initWJSCAst(ctx)
  }

  protected defaultResult(): WJSCAst {
    return {
      children: [],
      column: -1,
      line: -1,
      startIndex: -1,
      token: 'default',
      type: undefined,
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
      type: undefined,
    }
  }

  private checkChildrenUndefined(result: WJSCAst | WJSCTerminal) {
    result.children.forEach((child, index) => {
      // WARNING: Correct check to ensure array size declaration is an int?
      if (!child.type) {
        this.errorLog.log(result, SemError.Undefined)
      }
    })
  }
}

export { WJSCSemanticChecker }
