import { ParserRuleContext } from 'antlr4ts'
import { AbstractParseTreeVisitor, TerminalNode } from 'antlr4ts/tree'
import _ from 'lodash'
import { WJSCLexer } from '../grammar/WJSCLexer'
import {
  ArgListContext,
  ArithmeticOperator2Context,
  ArithmeticOperatorContext,
  ArrayElementContext,
  ArrayLiteralContext,
  ArrayTypeContext,
  AssignLhsContext,
  AssignmentContext,
  AssignRhsContext,
  BaseTypeContext,
  BooleanAndOperatorContext,
  BooleanOrOperatorContext,
  ComparisonOperatorContext,
  ConditionalBlocksContext,
  DeclareContext,
  EqualityOperatorContext,
  ExpressionContext,
  FuncContext,
  IntegerLiteralContext,
  PairElementContext,
  PairElementTypeContext,
  PairTypeContext,
  ParamContext,
  ParamListContext,
  ProgramContext,
  StatementContext,
  StdlibContext,
  TypeContext,
  UnaryOperatorContext,
} from '../grammar/WJSCParser'
import { WJSCParserVisitor } from '../grammar/WJSCParserVisitor'
import {
  WJSCAssignment,
  WJSCAssignRhs,
  WJSCAst,
  WJSCDeclare,
  WJSCExpr,
  WJSCFunction,
  WJSCIdentifier,
  WJSCOperators,
  WJSCParam,
  WJSCParserRules,
  WJSCStatement,
  WJSCTerminal,
} from '../util/WJSCAst'
import { SemError, SynError, WJSCErrorLog } from '../util/WJSCErrors'
import {
  BaseType,
  getFstInPair,
  getSndInPair,
  hasSameType,
  isArrayType,
  isPairType,
  MAX_INT,
  MIN_INT,
  Stdlib,
  TerminalKeywords,
  TerminalOperators,
  TypeName,
} from '../util/WJSCType'
import { WJSCSymbolTable } from './WJSCSymbolTable'

/**
 * Class that represents a semantic checker.
 * Extends the given ANTLR parse tree visitor.
 */
class WJSCSemanticChecker extends AbstractParseTreeVisitor<WJSCAst>
  implements WJSCParserVisitor<WJSCAst> {
  public errorLog: WJSCErrorLog
  public symbolTable: WJSCSymbolTable
  private tableCounter = 0

  /**
   * Returns a new Semantic Checker instance.
   * @param errorLog The error log to use for logging
   */
  constructor(errorLog: WJSCErrorLog, symbolTable: WJSCSymbolTable) {
    super()
    this.errorLog = errorLog
    this.symbolTable = symbolTable
  }

  public visitArithmeticOperator = (
    ctx: ArithmeticOperatorContext,
  ): WJSCOperators => {
    const result = this.initWJSCAst(
      ctx,
      WJSCParserRules.Operator,
    ) as WJSCOperators
    const operator = (ctx.DIVIDE() ||
      ctx.MULTIPLY() ||
      ctx.MODULO()) as TerminalNode
    result.inputs = [BaseType.Integer]
    result.arrayInput = false
    result.outputs = BaseType.Integer
    result.token = this.visitTerminal(operator).token
    return result
  }

  public visitArithmeticOperator2 = (
    ctx: ArithmeticOperator2Context,
  ): WJSCOperators => {
    const result = this.initWJSCAst(
      ctx,
      WJSCParserRules.Operator,
    ) as WJSCOperators
    const operator = (ctx.MINUS() || ctx.PLUS()) as TerminalNode
    result.inputs = [BaseType.Integer]
    result.arrayInput = false
    result.outputs = BaseType.Integer
    result.token = this.visitTerminal(operator).token
    return result
  }

  public visitArgList = (ctx: ArgListContext): WJSCAst => {
    const result = this.initWJSCAst(ctx, WJSCParserRules.ArgList)
    const expressions = ctx.expression()
    if (expressions.length === 0) {
      this.errorLog.semErr(result, SemError.IncorrectArgNo, [1, -1])
    }
    expressions.forEach((child) => {
      const childStat = this.visitExpression(child)
      this.pushChild(result, childStat)
    })
    return result
  }

  public visitArrayElement = (ctx: ArrayElementContext): WJSCAst => {
    const result = this.initWJSCAst(ctx, WJSCParserRules.ArrayElem)
    const ident = this.visitTerminal(ctx.IDENTIFIER())
    this.symbolTable.checkType(ident)
    this.functionUse(result, ident)
    const expressions = ctx.expression()
    if (expressions.length === 0) {
      this.errorLog.semErr(result, SemError.IncorrectArgNo, [1, -1])
    }
    result.children = expressions.map(this.visitExpression)
    let currElemType = this.symbolTable.lookup(ident.token)
    result.children.forEach((child) => {
      if (!hasSameType(child.type, BaseType.Integer)) {
        this.errorLog.semErr(child, SemError.Mismatch, BaseType.Integer)
      }
      result.children.push(child)
      if (hasSameType(currElemType, BaseType.String)) {
        currElemType = BaseType.Character
      } else if (isArrayType(currElemType)) {
        currElemType = currElemType.arrayType
      } else {
        this.errorLog.semErr(result, SemError.Undefined)
      }
    })
    result.type = currElemType
    return result
  }

  /**
   * Ensures that there are more than 1 expression, commas match expressions,
   * the children not undefined, and that children have same type.
   */
  public visitArrayLiteral = (ctx: ArrayLiteralContext): WJSCAst => {
    const result = this.initWJSCAst(ctx, WJSCParserRules.Array)
    const expressions = ctx.expression()
    if (expressions.length === 0) {
      result.type = {
        arrayType: BaseType.Any,
      }
    } else {
      const comma = ctx.COMMA()
      if (
        expressions.length - 1 !== comma.length &&
        expressions.length - 1 >= comma.length
      ) {
        /* There are less commas than expected for the given number of exprs */
        this.errorLog.semErr(result, SemError.IncorrectArgNo, [
          expressions.length - 1,
          expressions.length - 1,
        ])
      } else if (
        expressions.length - 1 !== comma.length &&
        expressions.length - 1 < comma.length
      ) {
        /* Else if there are less expressions than expected for the given
        number of commas */
        this.errorLog.semErr(result, SemError.IncorrectArgNo, [
          comma.length + 1,
          comma.length + 1,
        ])
      }
      // result.children.push(this.visitTerminal(ctx.LBRACK()))
      const firstChild = this.visitExpression(expressions[0])
      if (!firstChild.type) {
        this.errorLog.semErr(result, SemError.Undefined)
      }
      /* This is the expr that must be present */
      result.children.push(firstChild)
      result.type = {
        arrayType: firstChild.type,
      }
      const length =
        expressions.length - 1 >= comma.length
          ? expressions.length - 1
          : comma.length
      let index = 0
      while (index !== length) {
        if (index < comma.length) {
          const currComma = this.visitTerminal(comma[index])
          // result.children.push(currComma)
        }
        if (index < expressions.length - 1) {
          const childStat = this.visitExpression(expressions[index + 1])
          if (!childStat.type) {
            this.errorLog.semErr(result, SemError.Undefined)
          }
          if (!hasSameType(childStat.type, firstChild.type)) {
            this.errorLog.semErr(result, SemError.Mismatch, firstChild.type)
          }
          result.children.push(childStat)
        }
        index++
      }

      // result.children.push(this.visitTerminal(ctx.RBRACK()))
    }
    return result
  }

  /** Ensure that the type is not undefined. Then visit each element and
   * ensure that it is of the correct type
   */
  public visitArrayType = (ctx: ArrayTypeContext): WJSCAst => {
    const result = this.initWJSCAst(ctx, WJSCParserRules.Array)
    const type = ctx.baseType() || ctx.arrayType() || ctx.pairType()
    result.children.push(this.visitTerminal(ctx.LBRACK()))
    if (!type) {
      this.errorLog.semErr(result, SemError.Undefined)
    } else {
      const arrayNode =
        type instanceof BaseTypeContext
          ? this.visitBaseType(type)
          : type instanceof ArrayTypeContext
            ? this.visitArrayType(type)
            : this.visitPairType(type)
      result.type = {
        arrayType: arrayNode.type,
      }
    }
    result.children.push(this.visitTerminal(ctx.RBRACK()))
    return result
  }

  /** Ensure either identifier, array element or pair element. Visit them ro
   * ensure it's in the symbol table, then ensure correct type.
   */
  public visitAssignLhs = (ctx: AssignLhsContext): WJSCAst => {
    // We need to rewrite the parser rules!
    const result = this.initWJSCAst(ctx, WJSCParserRules.Assignment)
    const lhsElems = ctx.IDENTIFIER() || ctx.arrayElement() || ctx.pairElement()
    if (!lhsElems) {
      this.errorLog.semErr(result, SemError.Undefined)
    } else {
      if (lhsElems instanceof TerminalNode) {
        this.functionUse(result, this.visitTerminal(lhsElems))
      }
      let lhsNode
      if (lhsElems instanceof TerminalNode) {
        // Ident case
        lhsNode = this.visitTerminal(lhsElems)
        result.parserRule = WJSCParserRules.Identifier
      } else if (lhsElems instanceof ArrayElementContext) {
        // Array elem case
        lhsNode = this.visitArrayElement(lhsElems)
        result.parserRule = WJSCParserRules.ArrayElem
      } else {
        // Pair elem case
        lhsNode = this.visitPairElement(lhsElems)
        result.parserRule = WJSCParserRules.PairElem
      }
      this.pushChild(result, lhsNode)
      if (lhsElems instanceof TerminalNode) {
        const type = this.symbolTable.lookup(lhsNode.token)
        if (!type) {
          this.errorLog.semErr(lhsNode, SemError.Undefined)
        }
        result.type = type
      }
    }
    return result
  }

  /** Find if array literal, pair element, call function or new pair. Ensure
   * that types or arguments, etc. hold
   */
  public visitAssignRhs = (ctx: AssignRhsContext): WJSCAssignRhs => {
    const result = this.initWJSCAst(ctx, WJSCParserRules.Assignrhs) as WJSCAssignRhs
    const arrLiter = ctx.arrayLiteral()
    const pairElem = ctx.pairElement()
    const call = ctx.CALL()
    if (arrLiter) {
      result.parserRule = WJSCParserRules.ArrayLiteral
      const visitedArray = this.visitArrayLiteral(arrLiter)
      this.pushChild(result, visitedArray)
      result.arrayLiter = visitedArray
    } else if (pairElem) {
      result.parserRule = WJSCParserRules.PairElem
      const visitedPair = this.visitPairElement(pairElem)
      this.pushChild(result, visitedPair)
      result.pairElem = visitedPair
    } else if (call) {
      result.parserRule = WJSCParserRules.FunctionCall
      /* Function call */
      result.children.push(this.visitTerminal(call))
      const ident = ctx.IDENTIFIER()
      const argList = ctx.argList()
      if (!ident) {
        this.errorLog.semErr(result, SemError.Undefined)
      } else {
        const visitedIdent = this.visitTerminal(ident)
        visitedIdent.type = this.symbolTable.lookup(visitedIdent.value)
        this.pushChild(result, visitedIdent)
        if (argList) {
          const visitedArgList = this.visitArgList(argList)
          result.children.push(visitedArgList)
          const funcType = this.symbolTable.getGlobalEntry(visitedIdent.value)
          /** For each argList, we need to check:
           * 1. They are of appropriate size to what is expected
           * 2. Each of the arguments is of matching type
           */
          if (funcType) {
            const params = funcType.params
            if (params) {
              const args = visitedArgList.children
              if (params.length !== args.length) {
                this.errorLog.semErr(visitedIdent, SemError.IncorrectArgNo, [
                  params.length,
                  params.length,
                ])
              } else {
                visitedArgList.children.forEach((child, i) => {
                  if (!hasSameType(child.type, params[i])) {
                    this.errorLog.semErr(child, SemError.Mismatch, params[i])
                  }
                })
              }
            } else {
              /* This should NEVER happen, implies function not set properly */
              this.errorLog.semErr(result, SemError.Undefined)
            }
          } else {
            /* This should NEVER happen, implies function not there to begin */
            this.errorLog.semErr(result, SemError.Undefined)
          }
        }
      }
    } else {
      /* These are all the children with expr in it */
      const expressions = ctx.expression().map(this.visitExpression)
      if (expressions.length === 1) {
        result.parserRule = WJSCParserRules.Expression
        if (!expressions[0]) {
          this.errorLog.semErr(result, SemError.Undefined)
        } else {
          this.pushChild(result, expressions[0])
          result.expr = expressions[0]
        }
      } else if (expressions.length === 2) {
        result.parserRule = WJSCParserRules.Newpair
        const newpair = ctx.NEW_PAIR()
        if (!newpair) {
          this.errorLog.semErr(result, SemError.Undefined)
        } else {
          const firstElem = expressions[0]
          const secondElem = expressions[1]
          result.expr = firstElem
          result.expr2 = secondElem
          result.children.push(firstElem)
          result.children.push(secondElem)
          result.type = {
            pairType: [firstElem.type, secondElem.type],
          }
        }
      } else {
        this.errorLog.semErr(result, SemError.IncorrectArgNo, [1, 2])
      }
    }
    return result
  }

  public visitAssignment = (ctx: AssignmentContext): WJSCAst => {
    const result
      = this.initWJSCAst(ctx, WJSCParserRules.Assignment) as WJSCAssignment
    const lhs = ctx.assignLhs()
    const rhs = ctx.assignRhs()
    const visitedLhs = this.visitAssignLhs(lhs)
    const visitedRhs = this.visitAssignRhs(rhs)

    if (!hasSameType(visitedLhs.type, visitedRhs.type)) {
      this.errorLog.semErr(visitedRhs, SemError.Mismatch, visitedLhs.type)
    }
    result.lhs = visitedLhs
    result.rhs = visitedRhs
    this.pushChild(result, visitedRhs)

    return result
  }

  public visitDeclare = (ctx: DeclareContext): WJSCDeclare => {
    const result
      = this.initWJSCAst(ctx, WJSCParserRules.Declare) as WJSCDeclare
    const lhsType = ctx.type()
    const lhsIdent = ctx.IDENTIFIER()
    const rhs = ctx.assignRhs()

    /* Assignment */
    const visitedRhs = this.visitAssignRhs(rhs)
    const visitedLhs = this.visitType(lhsType)
    const visitedLhsType = visitedLhs.type
    const visitedIdentifier = this.visitTerminal(lhsIdent)
    /* Check for double declaration */
    const possibleEntry
      = this.symbolTable.getLocalEntry(visitedIdentifier.value)
    if (possibleEntry && !possibleEntry.params) {
      this.errorLog.semErr(visitedIdentifier, SemError.DoubleDeclare)
    }

    visitedIdentifier.type = visitedLhsType
    this.pushChild(result, visitedIdentifier)
    /* Ensure RHS has same type as LHS */
    if (!hasSameType(visitedRhs.type, visitedLhsType)) {
      this.errorLog.semErr(visitedRhs, SemError.Mismatch, visitedLhsType)
    }
    /* Insert type into symbol table */
    this.symbolTable.insertSymbol(visitedIdentifier.value, visitedLhsType)
    result.type = visitedLhsType
    result.identifier = visitedIdentifier.value
    result.rhs = visitedRhs

    this.pushChild(result, visitedRhs)

    return result
  }

  public visitBaseType = (ctx: BaseTypeContext): WJSCAst => {
    const result = this.initWJSCAst(ctx, WJSCParserRules.Type)
    const base =
      ctx.INTEGER() || ctx.BOOLEAN() || ctx.CHARACTER() || ctx.STRING()
    if (!base) {
      this.errorLog.semErr(result, SemError.Undefined)
    } else {
      const terminal = this.visitTerminal(base)
      this.pushChild(result, terminal)
    }
    return result
  }

  /** Find out if IF or WHILE block. Then visit children as necessary */
  public visitConditionalBlocks = (ctx: ConditionalBlocksContext): WJSCStatement => {
    const ifB = ctx.IF()
    const whileB = ctx.WHILE()
    const childExp = ctx.expression()
    const childStat = ctx.statement()
    const result = this.initWJSCAst(
      ctx,
      ifB
        ? WJSCParserRules.ConditionalIf
        : whileB
          ? WJSCParserRules.ConditionalWhile
          : WJSCParserRules.Undefined,
    ) as WJSCStatement
    if (ifB && childStat.length !== 2) {
      this.errorLog.semErr(result, SemError.IncorrectArgNo, [2, 2])
    } else if (whileB && childStat.length !== 1) {
      this.errorLog.semErr(result, SemError.IncorrectArgNo, [1, 1])
    } else {
      const childExpVisited = this.visitExpression(childExp)
      if (!hasSameType(childExpVisited.type, BaseType.Boolean)) {
        this.errorLog.semErr(result, SemError.Mismatch, BaseType.Boolean)
      }
      result.condition = childExpVisited
      this.pushChild(result, childExpVisited)
      if (ifB) {
        // If Condition
        const [trueBranch, falseBranch] = childStat
        /* Ensure that children[0] = true, children[1] = false */
        this.symbolTable = this.symbolTable.enterScope(this.getTableNumber())
        const visitedTrueBranch = this.visitStatement(trueBranch)
        this.symbolTable = this.symbolTable.exitScope()
        visitedTrueBranch.tableNumber = this.tableCounter

        this.symbolTable = this.symbolTable.enterScope(this.getTableNumber())
        const visitedFalseBranch = this.visitStatement(falseBranch)
        this.symbolTable = this.symbolTable.exitScope()
        visitedFalseBranch.tableNumber = this.tableCounter

        this.pushChild(result, visitedTrueBranch, true)
        this.pushChild(result, visitedFalseBranch, true)
        result.trueBranch = visitedTrueBranch
        result.falseBranch = visitedFalseBranch
      } else if (whileB) {
        // While Condition
        this.symbolTable = this.symbolTable.enterScope(this.getTableNumber())
        const visitedTrueBranch = this.visitStatement(childStat[0])
        this.symbolTable = this.symbolTable.exitScope()
        visitedTrueBranch.tableNumber = this.tableCounter

        this.pushChild(result, visitedTrueBranch)
        result.trueBranch = visitedTrueBranch
        if (!visitedTrueBranch) {
          this.errorLog.semErr(result, SemError.Undefined)
        }
      }
    }
    result.type = BaseType.Boolean
    return result
  }

  public visitBooleanAndOperator = (
    ctx: BooleanAndOperatorContext,
  ): WJSCOperators => this.visitBooleanOperator(ctx)

  public visitBooleanOrOperator = (
    ctx: BooleanOrOperatorContext,
  ): WJSCOperators => this.visitBooleanOperator(ctx)

  public visitComparisonOperator = (
    ctx: ComparisonOperatorContext,
  ): WJSCOperators => {
    const result = this.initWJSCAst(
      ctx,
      WJSCParserRules.Operator,
    ) as WJSCOperators
    const operator = (ctx.GREATER_EQUAL() ||
      ctx.GREATER_THAN() ||
      ctx.LESS_EQUAL() ||
      ctx.LESS_THAN()) as TerminalNode
    result.inputs = [BaseType.Integer, BaseType.Character]
    result.arrayInput = false
    result.outputs = BaseType.Boolean
    result.token = this.visitTerminal(operator).token
    return result
  }

  public visitEqualityOperator = (
    ctx: EqualityOperatorContext,
  ): WJSCOperators => {
    const result = this.initWJSCAst(
      ctx,
      WJSCParserRules.Operator,
    ) as WJSCOperators
    const operator = (ctx.EQUALS() || ctx.NEQUALS()) as TerminalNode
    result.inputs = [
      BaseType.Integer,
      BaseType.Character,
      BaseType.Boolean,
      BaseType.String,
      BaseType.Pair,
    ]
    result.arrayInput = true
    result.outputs = BaseType.Boolean
    result.token = this.visitTerminal(operator).token
    return result
  }

  /** Ensure identifier is in lookup, visit childrenExp, uf Unop or bracket,
   * childExp.length == 1, if BinOp, childExp == 2, ensure childExpType are
   * not undefined, visit Types
   */
  public visitExpression = (ctx: ExpressionContext): WJSCExpr => {
    const result = this.initWJSCAst(ctx, WJSCParserRules.Expression) as WJSCExpr
    const intLiterals = ctx.integerLiteral()
    const literals =
      ctx.BOOLEAN_LITERAL() ||
      ctx.CHARACTER_LITERAL() ||
      ctx.STRING_LITERAL() ||
      ctx.PAIR_LITERAL()
    const ident = ctx.IDENTIFIER()
    const arrayElem = ctx.arrayElement()
    const operators =
      ctx.unaryOperator() ||
      ctx.arithmeticOperator() ||
      ctx.arithmeticOperator2() ||
      ctx.comparisonOperator() ||
      ctx.equalityOperator() ||
      ctx.booleanAndOperator() ||
      ctx.booleanOrOperator()
    const bracket = ctx.LPAREN()
    if (
      !intLiterals &&
      !literals &&
      !ident &&
      !arrayElem &&
      !operators &&
      !bracket
    ) {
      this.errorLog.semErr(result, SemError.Undefined)
    } else {
      if (literals) {
        /* literal scenario */
        const terminal = this.visitTerminal(literals)
        this.pushChild(result, terminal)
        result.value = terminal.value
        result.parserRule = terminal.parserRule
      } else if (intLiterals) {
        /* int literal */
        const intValue = this.visitIntegerLiteral(intLiterals)
        this.pushChild(result, intValue)
        result.value = intValue.value
        result.parserRule = intValue.parserRule
      } else if (ident) {
        /* Identifier scenario */
        const visitedTerminal = this.visitTerminal(ident)
        const identType = this.symbolTable.lookup(visitedTerminal.value)
        if (identType) {
          this.pushChild(result, visitedTerminal)
        }
        result.value = visitedTerminal.value
        result.parserRule = visitedTerminal.parserRule
      } else if (arrayElem) {
        /* array elem scenario */
        const visitedArrayElem = this.visitArrayElement(arrayElem)
        this.pushChild(result, visitedArrayElem)
        result.parserRule = visitedArrayElem.parserRule
      } else if (operators || bracket) {
        const expressions = ctx.expression()
        if (bracket) {
          /* Bracket scenario */
          if (expressions.length !== 1) {
            this.errorLog.semErr(result, SemError.IncorrectArgNo, [1, 1])
          } else {
            this.pushChild(result, this.visitExpression(expressions[0]))
          }
        } else {
          /* Operator scenario */
          if (operators instanceof UnaryOperatorContext) {
            if (expressions.length !== 1) {
              this.errorLog.semErr(result, SemError.IncorrectArgNo, [1, 1])
            } else {
              const visitedOp = this.visitUnaryOperator(operators)
              result.children.push(visitedOp)
              const exp1 = this.visitExpression(expressions[0])
              result.children.push(exp1)
              result.type = this.checkOperator(visitedOp, exp1)
            }
          } else if (operators !== undefined) {
            if (expressions.length !== 2) {
              this.errorLog.semErr(result, SemError.IncorrectArgNo, [2, 2])
            } else {
              let visitedOp: WJSCOperators
              if (operators instanceof ArithmeticOperatorContext) {
                visitedOp = this.visitArithmeticOperator(operators)
              } else if (operators instanceof ArithmeticOperator2Context) {
                visitedOp = this.visitArithmeticOperator2(operators)
              } else if (operators instanceof ComparisonOperatorContext) {
                visitedOp = this.visitComparisonOperator(operators)
              } else if (operators instanceof EqualityOperatorContext) {
                visitedOp = this.visitEqualityOperator(operators)
              } else {
                visitedOp = this.visitBooleanOperator(operators)
              }
              visitedOp.parserRule = WJSCParserRules.BinOp
              result.children.push(visitedOp)
              const exp1 = this.visitExpression(expressions[0])
              const exp2 = this.visitExpression(expressions[1])
              result.expr1 = exp1
              result.expr2 = exp2
              result.operator = visitedOp
              result.children.push(exp1)
              result.children.push(exp2)
              result.type = this.checkOperator(visitedOp, exp1, exp2)
            }
          }
        }
      }
    }
    return result
  }

  /** If paramList is defined, visit them. visit type of ident, paramList,
   * statement. insert function to symbol table
   */
  public visitFunc = (ctx: FuncContext): WJSCFunction => {
    const result = this.initWJSCAst(
      ctx,
      WJSCParserRules.Function,
    ) as WJSCFunction
    const visitedType = this.visitType(ctx.type()).type
    const ident = this.visitTerminal(ctx.IDENTIFIER())
    const paramList = ctx.paramList()
    result.identifier = ident.value
    result.type = visitedType
    /* Check types of Params and Statements, enter child scope */
    this.symbolTable = this.symbolTable.enterFuncScope(ident.value, this.getTableNumber())
    if (paramList) {
      const visitedParamList = this.visitParamList(paramList)
      this.pushChild(result, visitedParamList)
    }
    const statements = this.visitStatement(ctx.statement())
    if (!this.containsNeverStatement(statements)) {
      this.errorLog.synErr(
        result.line,
        result.column,
        SynError.NoReturn,
        'statement missing return statement',
      )
    }
    result.body = statements
    /* Exit child scope */
    this.symbolTable = this.symbolTable.exitScope()
    return result
  }

  public visitFuncDec = (ctx: FuncContext): void => {
    const visitedType = this.visitType(ctx.type()).type
    const ident = this.visitTerminal(ctx.IDENTIFIER())
    const paramList = ctx.paramList()
    let paramTypes: TypeName[]
    this.symbolTable = this.symbolTable.enterFuncScope(ident.value, this.getTableNumber())
    if (paramList) {
      const visitedParamList = this.checkParamDoubleDeclaration(paramList)
      paramTypes = visitedParamList.paramTypes
    } else {
      paramTypes = []
    }
    this.symbolTable.insertSymbol(ident.token, visitedType, paramTypes)
    this.symbolTable = this.symbolTable.exitScope()
    /* Double insertion check */
    const possibleEntry = this.symbolTable.getGlobalEntry(ident.value)
    if (possibleEntry && possibleEntry.params) {
      this.errorLog.semErr(ident, SemError.DoubleDeclare)
    } else {
      this.symbolTable.insertSymbol(ident.token, visitedType, paramTypes)
    }
  }

  public functionUse = (result: WJSCAst, ident: WJSCTerminal): void => {
    /* Checks whether or not there is bad function use */
    const entry = this.symbolTable.getGlobalEntry(ident.value)
    if (entry && entry.params) {
      this.errorLog.semErr(result, SemError.BadFunctionUse)
    }
  }

  /** Calculate int val from digit, ensure no overflow/underflow */
  public visitIntegerLiteral = (ctx: IntegerLiteralContext): WJSCTerminal => {
    const result = this.initWJSCAst(
      ctx,
      WJSCParserRules.IntLiteral,
    ) as WJSCTerminal
    const sign = ctx.PLUS() || ctx.MINUS()
    const digits = ctx.DIGIT()
    let value = 0
    digits.forEach((val) => {
      const visited = this.visitTerminal(val)
      value = value * 10 + visited.value
    })
    if (sign) {
      const visited = this.visitTerminal(sign)
      if (visited.token === '-') {
        value *= -1
      }
    }
    result.value = value
    result.type = BaseType.Integer
    if (value > MAX_INT) {
      this.errorLog.synErr(
        result.line,
        result.column,
        SynError.Overflow,
        'Integer Overflow',
      )
    } else if (value < MIN_INT) {
      this.errorLog.synErr(
        result.line,
        result.column,
        SynError.Underflow,
        'Integer Underflow',
      )
    }
    return result
  }

  public visitPairElement = (ctx: PairElementContext): WJSCAst => {
    const result = this.initWJSCAst(ctx, WJSCParserRules.Pair)
    const order = ctx.FIRST() || ctx.SECOND()
    const expression = ctx.expression()
    if (!expression || !order) {
      this.errorLog.semErr(result, SemError.Undefined)
    } else {
      result.children.push(this.visitTerminal(order))
      const visitedExpr = this.visitExpression(expression)
      /* Expression must be of type 'pair' */
      if (!isPairType(visitedExpr.type)) {
        this.errorLog.semErr(visitedExpr, SemError.Mismatch, BaseType.Pair)
      } else if (ctx.FIRST()) {
        result.type = getFstInPair(visitedExpr.type)
      } else if (ctx.SECOND()) {
        result.type = getSndInPair(visitedExpr.type)
      }
      result.children.push(visitedExpr)
    }
    return result
  }

  public visitPairElementType = (ctx: PairElementTypeContext): WJSCAst => {
    const result = this.initWJSCAst(ctx, WJSCParserRules.Pair)
    const possibles = ctx.baseType() || ctx.arrayType() || ctx.PAIR()
    if (!possibles) {
      this.errorLog.semErr(result, SemError.Undefined)
    } else {
      const possiblesType =
        possibles instanceof BaseTypeContext
          ? this.visitBaseType(possibles)
          : possibles instanceof ArrayTypeContext
            ? this.visitArrayType(possibles)
            : this.visitTerminal(possibles)
      this.pushChild(result, possiblesType)
    }
    return result
  }

  public visitPairType = (ctx: PairTypeContext): WJSCAst => {
    const result = this.initWJSCAst(ctx, WJSCParserRules.Pair)
    const pairs = ctx.pairElementType()
    const firstElem = this.visitPairElementType(pairs[0])
    result.children.push(firstElem)
    const secondElem = this.visitPairElementType(pairs[1])
    result.children.push(secondElem)
    result.type = {
      pairType: [firstElem.type, secondElem.type],
    }
    return result
  }

  /** 1. visit types and ident, Ensure ident is in lookup, visit type of types
   * and identifier
   */
  public visitParam = (ctx: ParamContext): WJSCIdentifier => {
    const result = this.initWJSCAst(
      ctx,
      WJSCParserRules.Identifier,
    ) as WJSCIdentifier
    const visitedIdent = this.visitTerminal(ctx.IDENTIFIER())
    result.identifier = visitedIdent.value
    result.type = this.visitType(ctx.type()).type
    this.symbolTable.insertSymbol(result.identifier, result.type)
    return result
  }

  /** Ensure types of parameters are OK */
  public visitParamList = (ctx: ParamListContext): WJSCParam => {
    const result = this.initWJSCAst(ctx, WJSCParserRules.Parameter) as WJSCParam
    const params = ctx.param()
    result.paramTypes = []
    params.forEach((parameter) => {
      const visitedParam = this.visitParam(parameter)
      result.children.push(visitedParam)
      result.paramTypes.push(visitedParam.type)
    })
    return result
  }

  /** visit begin, stat and end
   * If func is present:
   * First visit all the function definitions and saving them
   * Then visit the content of the functions
   */
  public visitProgram = (ctx: ProgramContext): WJSCAst => {
    const result = this.initWJSCAst(ctx, WJSCParserRules.Program)
    const functions = ctx.func()

    // Visit function declarations
    if (functions) {
      result.functions = []
      functions.forEach((child) => {
        this.visitFuncDec(child)
      })
      functions.forEach((child) => {
        result.functions.push(this.visitFunc(child))
      })
    }

    // Visit program body
    const body = this.visitStatement(ctx.statement())
    result.body = body
    result.children.push(body)
    return result
  }

  /** Ensure either skip, Assignments, read, stdlib, conditional,
   * begin/end or semicolon
   * not undefined
   * If read, ensures lhs not undefined 3. If stdlib,
   * ensures expr not undefined
   * If begin, ensures stat and end not undefined, and stat == 1
   * If semicolon, ensure stat not undefined, stat == 1
   * visit them
   * visit types of read LHS, statement in begin/end,
   * statements in semicolon
   */
  public visitStatement = (ctx: StatementContext): WJSCStatement => {
    let result = this.initWJSCAst(ctx, WJSCParserRules.Statement) as WJSCStatement
    const skip = ctx.WSKIP()
    const assignment = ctx.assignment()
    const declare = ctx.declare()
    const read = ctx.READ()
    const stdlib = ctx.stdlib()
    const conditionals = ctx.conditionalBlocks()
    const begin = ctx.BEGIN()
    const semicolon = ctx.SEMICOLON()
    if (
      !result &&
      !skip &&
      !assignment &&
      !read &&
      !stdlib &&
      !conditionals &&
      !begin &&
      !semicolon
    ) {
      this.errorLog.semErr(result, SemError.Undefined)
    } else {
      if (skip) {
        result.children.push(this.visitTerminal(skip))
        result.parserRule = WJSCParserRules.Skip
      } else if (assignment) {
        const visitedAssignment = this.visitAssignment(assignment) as WJSCAssignment
        result.children.push(visitedAssignment)
        result.parserRule = WJSCParserRules.Assignment
        result.assignment = visitedAssignment
      } else if (declare) {
        const visitedDeclare = this.visitDeclare(declare)
        result.children.push(visitedDeclare)
        result.parserRule = WJSCParserRules.Declare
        result.declaration = visitedDeclare
      } else if (read) {
        result.parserRule = WJSCParserRules.Read
        const lhs = ctx.assignLhs()
        if (!lhs) {
          this.errorLog.semErr(result, SemError.Undefined)
        } else {
          const visitLhs = this.visitAssignLhs(lhs)
          if (
            visitLhs.type !== BaseType.Integer &&
            visitLhs.type !== BaseType.Character
          ) {
            this.errorLog.semErr(result, SemError.Mismatch)
          }
          result.children.push(this.visitTerminal(read))
          this.pushChild(result, this.visitAssignLhs(lhs))
        }
      } else if (stdlib) {
        result.parserRule = WJSCParserRules.Stdlib
        const expression = ctx.expression()
        const visitedStdlib = this.visitStdlib(stdlib)
        result.children.push(visitedStdlib)
        if (!expression) {
          this.errorLog.semErr(result, SemError.Undefined)
        } else {
          const visitedExpr = this.visitExpression(expression)
          if (!visitedExpr.type) {
            this.errorLog.semErr(result, SemError.Undefined)
          }
          this.checkStdlibExpressionType(visitedStdlib, visitedExpr)
          result.parserRule = visitedStdlib.parserRule
          result.children.push(visitedExpr)
          result.stdlibExpr = visitedExpr
        }
      } else if (conditionals) {
        result = this.visitConditionalBlocks(conditionals)
      } else if (begin) {
        result.parserRule = WJSCParserRules.Scope
        const stat = ctx.statement()
        const end = ctx.END()
        if (!stat || !end) {
          this.errorLog.semErr(result, SemError.Undefined)
        } else {
          this.symbolTable = this.symbolTable.enterScope(this.getTableNumber())
          result.tableNumber = this.tableCounter
          this.pushChild(result, this.visitStatement(stat[0]))
          this.symbolTable = this.symbolTable.exitScope()
          result.children.push(this.visitTerminal(end))
        }
      } else if (semicolon) {
        // Sequential statement
        result.parserRule = WJSCParserRules.Sequential
        const stat = ctx.statement()
        if (!stat) {
          this.errorLog.semErr(result, SemError.Undefined)
        } else {
          if (stat.length !== 2) {
            this.errorLog.semErr(result, SemError.IncorrectArgNo, [2, 2])
          } else {
            const firstStatement = this.visitStatement(stat[0])
            const lastStatement = this.visitStatement(stat[1])
            this.pushChild(result, firstStatement)
            if (
              this.isReturnStatement(firstStatement) &&
              this.symbolTable.inFunction()
            ) {
              this.errorLog.synErr(
                firstStatement.line,
                firstStatement.column,
                SynError.NoReturn,
                'extraneous statement after return',
              )
            } else {
              result.stat = firstStatement
              result.nextStat = lastStatement
              this.pushChild(result, lastStatement)
            }
          }
        }
      }
    }
    return result
  }

  public visitStdlib = (ctx: StdlibContext): WJSCAst => {
    const result = this.initWJSCAst(ctx, WJSCParserRules.Stdlib)
    const lib =
      ctx.FREE() || ctx.RETURN() || ctx.EXIT() || ctx.PRINT() || ctx.PRINTLN()
    if (!lib) {
      this.errorLog.semErr(result, SemError.Undefined)
    } else {
      switch (lib) {
        case ctx.FREE():
          result.parserRule = WJSCParserRules.Free
          break
        case ctx.RETURN():
          result.parserRule = WJSCParserRules.Return
          break
        case ctx.EXIT():
          result.parserRule = WJSCParserRules.Exit
          break
        case ctx.PRINT():
          result.parserRule = WJSCParserRules.Print
          break
        case ctx.PRINTLN():
          result.parserRule = WJSCParserRules.Println
          break
      }
      result.children.push(this.visitTerminal(lib))
    }
    return result
  }

  public visitType = (ctx: TypeContext): WJSCAst => {
    const result = this.initWJSCAst(ctx, WJSCParserRules.Type)
    const type = ctx.baseType() || ctx.arrayType() || ctx.pairType()
    if (!type) {
      this.errorLog.semErr(result, SemError.Undefined)
    } else {
      const childType =
        type instanceof BaseTypeContext
          ? this.visitBaseType(type)
          : type instanceof ArrayTypeContext
            ? this.visitArrayType(type)
            : this.visitPairType(type)
      this.pushChild(result, childType)
    }
    return result
  }

  public visitTerminal = (node: TerminalNode): WJSCTerminal => {
    const terminal = this.initWJSCAst(
      node,
      WJSCParserRules.Terminal,
    ) as WJSCTerminal
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
      terminal.terminalType = TerminalOperators.Operator
    } else if (type === WJSCLexer.ASSIGNMENT) {
      terminal.terminalType = TerminalOperators.Assignment
    } else if (
      WJSCLexer.LOGICAL_NEGATION <= type &&
      type <= WJSCLexer.CHARACTER_OF
    ) {
      terminal.terminalType = TerminalOperators.Operator
    } else if (type === WJSCLexer.BOOLEAN_LITERAL) {
      terminal.terminalType = terminal.type = BaseType.Boolean
      terminal.parserRule = WJSCParserRules.BoolLiter
      terminal.value = token === 'true'
    } else if (type === WJSCLexer.CHARACTER_LITERAL) {
      terminal.terminalType = terminal.type = BaseType.Character
      terminal.parserRule = WJSCParserRules.CharLiter
      const charRegexTest =
        // tslint:disable-next-line:max-line-length
        /(?<=')([\u0000-\u0021]|[\u0023-\u0026]|[\u0028-\u005b]|[\u005d-\u007f]|\\(0|b|t|n|f|r|'|\\|"))(?=')/
      const char = charRegexTest.exec(token)
      if (char) {
        terminal.value = char[0]
      } else {
        this.errorLog.synErr(
          terminal.line,
          terminal.column,
          SynError.IllegalChar,
          'Illegal Character',
        )
      }
    } else if (type === WJSCLexer.DIGIT) {
      terminal.terminalType = terminal.type = BaseType.Integer
      terminal.value = Number(token)
    } else if (type === WJSCLexer.PAIR_LITERAL) {
      terminal.terminalType = terminal.type = BaseType.Pair
      terminal.parserRule = WJSCParserRules.PairLiter
      terminal.value = null
    } else if (type === WJSCLexer.STRING_LITERAL) {
      terminal.terminalType = terminal.type = BaseType.String
      terminal.parserRule = WJSCParserRules.StringLiter
      const strRegexTest =
        // tslint:disable-next-line:max-line-length
        /(?<=")([\u0000-\u0021]|[\u0023-\u0026]|[\u0028-\u005b]|[\u005d-\u007f]|\\(0|b|t|n|f|r|'|\\|"))+(?=")/
      if (/^""$/.test(token)) {
        terminal.value = ''
      } else {
        const str = strRegexTest.exec(token)
        if (str) {
          terminal.value = str[0]
        } else if (!token) {
          this.errorLog.synErr(
            terminal.line,
            terminal.column,
            SynError.IllegalStr,
            'Illegal String',
          )
        }
      }
    } else if (WJSCLexer.INTEGER <= type && type <= WJSCLexer.PAIR) {
      switch (type) {
        case WJSCLexer.INTEGER:
          terminal.terminalType = terminal.type = BaseType.Integer
          break
        case WJSCLexer.BOOLEAN:
          terminal.terminalType = terminal.type = BaseType.Boolean
          break
        case WJSCLexer.CHARACTER:
          terminal.terminalType = terminal.type = BaseType.Character
          break
        case WJSCLexer.STRING:
          terminal.terminalType = terminal.type = BaseType.String
          break
        case WJSCLexer.PAIR:
          terminal.terminalType = terminal.type = BaseType.Pair
          break
      }
    } else if (type === WJSCLexer.IDENTIFIER) {
      terminal.terminalType = TerminalKeywords.Identifier
      terminal.parserRule = WJSCParserRules.Identifier
      terminal.value = token
      terminal.type = this.symbolTable.lookup(token)
    }
    return terminal
  }

  public visitUnaryOperator = (ctx: UnaryOperatorContext): WJSCOperators => {
    const result = this.initWJSCAst(
      ctx,
      WJSCParserRules.Unop,
    ) as WJSCOperators
    let op
    if (ctx.LOGICAL_NEGATION()) {
      op = ctx.LOGICAL_NEGATION()
      result.inputs = [BaseType.Boolean]
      result.arrayInput = false
      result.outputs = BaseType.Boolean
    } else if (ctx.MINUS()) {
      op = ctx.MINUS()
      result.inputs = [BaseType.Integer]
      result.arrayInput = false
      result.outputs = BaseType.Integer
    } else if (ctx.LENGTH()) {
      op = ctx.LENGTH()
      result.inputs = [BaseType.String]
      result.arrayInput = true
      result.outputs = BaseType.Integer
    } else if (ctx.ORDER_OF()) {
      op = ctx.ORDER_OF()
      result.inputs = [BaseType.Character]
      result.arrayInput = false
      result.outputs = BaseType.Integer
    } else if (ctx.CHARACTER_OF()) {
      op = ctx.CHARACTER_OF()
      result.inputs = [BaseType.Integer]
      result.arrayInput = false
      result.outputs = BaseType.Character
    }
    if (!op) {
      this.errorLog.semErr(result, SemError.Undefined)
    } else {
      result.children.push(this.visitTerminal(op))
    }
    return result
  }

  /** Default result */
  protected defaultResult(): WJSCAst {
    return {
      children: [],
      column: -1,
      functions: [],
      line: -1,
      parserRule: WJSCParserRules.Undefined,
      startIndex: -1,
      token: 'default',
      type: undefined,
    }
  }

  /**
   * Check that operator can take types of @var exp1 and optionally @var exp2,
   * and returns the expected return type if the operation is valid
   * @param op: WJSCOperators
   * @param exp1: WJSCAst
   * @param exp2: WJSCAst?
   */
  private checkOperator = (
    op: WJSCOperators,
    exp1: WJSCAst,
    exp2?: WJSCAst,
  ): TypeName => {
    let outputType
    if (exp2 === undefined) {
      /* Unary operators */
      outputType = this.checkOperatorUnary(op, exp1)
    } else {
      /* Binary operators */
      outputType = this.checkOperatorBinary(op, exp1, exp2)
    }
    return outputType
  }

  private checkOperatorBinary = (
    op: WJSCOperators,
    exp1: WJSCAst,
    exp2: WJSCAst,
  ): TypeName => {
    let outputType
    let matchAnyType = false
    let matchButFaulty = false
    if (op.arrayInput) {
      /* Special check for mismatched array types */
      if (!hasSameType(exp1.type, exp2.type)) {
        this.errorLog.semErr(exp1, SemError.Mismatch, exp2.type)
      } else {
        matchAnyType = true
        outputType = op.outputs
      }
    } else {
      /* check for invalid array inputs */
      let error = false
      if (isArrayType(exp1.type)) {
        this.errorLog.semErr(exp1, SemError.Mismatch, [
          BaseType.Integer,
          BaseType.Character,
        ])
        error = true
      }
      if (isArrayType(exp2.type)) {
        this.errorLog.semErr(exp2, SemError.Mismatch, [
          BaseType.Integer,
          BaseType.Character,
        ])
        error = true
      }
      if (!error) {
        op.inputs.forEach((potInput) => {
          if (potInput === exp1.type && potInput === exp2.type) {
            matchAnyType = true
            outputType = op.outputs
          } else if (
            potInput !== exp1.type &&
            potInput === exp2.type &&
            !matchButFaulty
          ) {
            this.errorLog.semErr(exp1, SemError.Mismatch, potInput)
            matchButFaulty = true
          } else if (
            potInput === exp1.type &&
            potInput !== exp2.type &&
            !matchButFaulty
          ) {
            this.errorLog.semErr(exp2, SemError.Mismatch, potInput)
            matchButFaulty = true
          }
        })
        if (!matchAnyType && !matchButFaulty) {
          /* binOp operator has two arguments of incorrect type */
          this.errorLog.semErr(exp1, SemError.Mismatch, op.inputs)
          this.errorLog.semErr(exp2, SemError.Mismatch, op.inputs)
        }
      }
    }
    return outputType
  }

  private checkOperatorUnary = (op: WJSCOperators, exp1: WJSCAst): TypeName => {
    let matchAnyType = false
    let outputType
    op.inputs.forEach((potInput) => {
      if (potInput === exp1.type) {
        matchAnyType = true
        outputType = op.outputs
      }
    })
    if (op.arrayInput && isArrayType(exp1.type)) {
      matchAnyType = true
      outputType = op.outputs
    }
    if (!matchAnyType) {
      this.errorLog.semErr(exp1, SemError.Mismatch, op.inputs)
    }
    return outputType
  }

  /** Initializes an AST node with default metadata
   * @param ctx context node from ANTLR
   * @param parserRule parser rule that generated it
   * @returns a node for the ast
   */
  private initWJSCAst = (
    ctx: ParserRuleContext | TerminalNode,
    parserRule: WJSCParserRules,
  ): WJSCAst | WJSCTerminal => {
    let charPositionInLine
    let line
    let startIndex
    let text
    if (ctx instanceof ParserRuleContext) {
      ({
        start: { charPositionInLine, line, startIndex },
        text,
      } = ctx)
    } else {
      ({ charPositionInLine, line, startIndex, text } = ctx.symbol)
    }
    return {
      children: [],
      column: charPositionInLine,
      functions: [],
      line,
      parserRule,
      startIndex,
      token: text || '',
      type: undefined,
    }
  }

  /** Pushes a child to result and copies its type
   * @param result the AST to push the child to
   * @param child the childe AST
   * @param unshift optional, tells it to use unshift instead of push
   */
  private pushChild = (result: WJSCAst, child: WJSCAst, unshift = false) => {
    result.type = child.type
    if (unshift) {
      result.children.unshift(child)
    } else {
      result.children.push(child)
    }
  }

  /**
   * Check the type of the standard library function is compatible with its
   * arguments
   * @param visitedStdlib the standard library function AST node
   * @param visitedExpr the argument expression
   */
  private checkStdlibExpressionType = (
    visitedStdlib: WJSCAst,
    visitedExpr: WJSCAst,
  ): void => {
    if (
      visitedStdlib.token === 'free' &&
      !isPairType(visitedExpr.type) &&
      !isArrayType(visitedExpr.type)
    ) {
      /* Free can only be called on pair or array type. */
      this.errorLog.semErr(visitedExpr, SemError.BadStdlibArgs, Stdlib.Free)
    } else if (visitedStdlib.token === 'return') {
      /* Return cannot only be in body of non-main function
       Type of expression must match the return type of the function */
      if (!this.symbolTable.inFunction()) {
        this.errorLog.semErr(visitedStdlib, SemError.BadReturn)
      } else {
        const functionName = this.symbolTable.getFunctionName() || 'main'
        const functionType = this.symbolTable.lookup(functionName)
        if (!hasSameType(functionType, visitedExpr.type)) {
          this.errorLog.semErr(visitedStdlib, SemError.Mismatch, functionType)
        }
      }
    } else if (
      visitedStdlib.token === 'exit' &&
      !hasSameType(visitedExpr.type, BaseType.Integer)
    ) {
      this.errorLog.semErr(visitedExpr, SemError.Mismatch, BaseType.Integer)
    }
  }

  /**
   * Checks that the given AST, assumed to be a statement tree, always ends in
   * a control terminal or `never` statement (meaning the function never
   * continues after).
   * @param ast The AST to check
   */
  private containsNeverStatement = (ast: WJSCAst): boolean => {
    if (this.isReturnStatement(ast) || this.isExitStatement(ast)) {
      return true
    } else {
      let found = false
      if (ast.parserRule === WJSCParserRules.ConditionalIf) {
        const [trueStatement, falseStatement] = ast.children
        found =
          this.containsNeverStatement(trueStatement) &&
          this.containsNeverStatement(falseStatement)
      } else {
        ast.children.forEach((child: WJSCAst) => {
          /* if !found is false, short circuits the forEach */
          if (!found && this.containsNeverStatement(child)) {
            found = true
          }
        })
      }
      return found
    }
  }

  /* Lambda to check if the node is a return statement (shallow) */
  private isReturnStatement = (ast: WJSCAst): boolean =>
    _.find(ast.children, { token: 'return' }) !== undefined

  /* Lambda to check if the node is a exit statement (shallow) */
  private isExitStatement = (ast: WJSCAst): boolean =>
    _.find(ast.children, { token: 'exit' }) !== undefined

  private visitBooleanOperator = (
    ctx: BooleanAndOperatorContext | BooleanOrOperatorContext,
  ): WJSCOperators => {
    const result = this.initWJSCAst(
      ctx,
      WJSCParserRules.Operator,
    ) as WJSCOperators
    let operator
    if (ctx instanceof BooleanAndOperatorContext) {
      operator = ctx.LOGICAL_AND()
    } else {
      operator = ctx.LOGICAL_OR()
    }
    result.inputs = [BaseType.Boolean]
    result.outputs = BaseType.Boolean
    result.token = this.visitTerminal(operator).token
    return result
  }

  /* Visit a param list and check if the params have already been declared. */
  private checkParamDoubleDeclaration = (ctx: ParamListContext): WJSCParam => {
    const result = this.initWJSCAst(ctx, WJSCParserRules.Parameter) as WJSCParam
    const params = ctx.param()
    result.paramTypes = []
    params.forEach((parameter) => {
      const visitedParam = this.checkParam(parameter)
      result.children.push(visitedParam)
      result.paramTypes.push(visitedParam.type)
    })
    return result
  }

  /* Visit a param and check if it has already been declared. */
  private checkParam = (ctx: ParamContext): WJSCIdentifier => {
    const result = this.initWJSCAst(
      ctx,
      WJSCParserRules.Identifier,
    ) as WJSCIdentifier
    const visitedIdent = this.visitTerminal(ctx.IDENTIFIER())
    result.identifier = visitedIdent.value
    result.type = this.visitType(ctx.type()).type
    if (this.symbolTable.getLocalEntry(visitedIdent.value)) {
      this.errorLog.semErr(visitedIdent, SemError.DoubleDeclare)
    }
    this.symbolTable.insertSymbol(result.identifier, result.type)
    return result
  }

  private getTableNumber = (): number => {
    this.tableCounter += 1
    return this.tableCounter
  }
}

export { WJSCSemanticChecker }
