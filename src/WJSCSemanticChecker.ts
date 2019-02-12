import { ParserRuleContext } from 'antlr4ts'
import { AbstractParseTreeVisitor, TerminalNode } from 'antlr4ts/tree'
import { WJSCLexer } from './grammar/WJSCLexer'
import {
  ArgListContext,
  ArithmeticOperatorContext,
  ArrayElementContext,
  ArrayLiteralContext,
  ArrayTypeContext,
  AssignLhsContext,
  AssignmentContext,
  AssignRhsContext,
  BaseTypeContext,
  BooleanOperatorContext,
  ComparisonOperatorContext,
  ConditionalBlocksContext,
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
} from './grammar/WJSCParser'
import { WJSCParserVisitor } from './grammar/WJSCParserVisitor'
import {
  WJSCAst,
  WJSCFunction,
  WJSCIdentifier,
  WJSCOperators,
  WJSCParam,
  WJSCParserRules,
  WJSCTerminal,
} from './WJSCAst'
import { SemError, SynError, WJSCErrorLog } from './WJSCErrors'
import { WJSCSymbolTable } from './WJSCSymbolTable'
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
} from './WJSCType'
// WARNING: Results must be pushed in exact order?
// Should error-ridden elems still be pushed on results?
// Result.type?
// CHECK CHILD EXP TYPE NOT CHILD EXP AHHHHHH
/**
 * A semantic checker which builds an AST as it traverses through the tree
 * returned from the ANTLR4 runtime.
 */
class WJSCSemanticChecker extends AbstractParseTreeVisitor<WJSCAst>
  implements WJSCParserVisitor<WJSCAst> {
  public errorLog: WJSCErrorLog
  public symbolTable: WJSCSymbolTable

  constructor(errorLog: WJSCErrorLog) {
    super()
    this.errorLog = errorLog
    this.symbolTable = new WJSCSymbolTable(0, undefined, false, errorLog)
  }

  public visitArithmeticOperator = (ctx: ArithmeticOperatorContext):
      WJSCOperators => {
    const result = this.initWJSCAst(ctx) as WJSCOperators
    result.parserRule = WJSCParserRules.Operator
    const operator =
      ctx.MINUS() ||
      ctx.PLUS() ||
      ctx.DIVIDE() ||
      ctx.MULTIPLY() ||
      ctx.MODULO()
    if (operator) {
      result.inputs = [BaseType.Integer]
      result.arrayInput = false
      result.outputs = BaseType.Integer
      result.token = operator.toString()
    }
    return result
  }

  public visitArgList = (ctx: ArgListContext): WJSCAst => {
    // 1. Ensure >1 expression 2. Visit expressions 3. Take type of childExps
    const result = this.initWJSCAst(ctx)
    result.parserRule = WJSCParserRules.ArgList
    const expressions = ctx.expression()
    if (expressions.length === 0) {
      this.errorLog.semErr(result, SemError.IncorrectArgNo, [1, -1])
    }
    expressions.forEach((child, index) => {
      const childStat = this.visitExpression(child)
      this.pushChild(result, childStat)
    })
    return result
  }

  public visitArrayElement = (ctx: ArrayElementContext): WJSCAst => {
    // 1. Ensure ident is in lookup
    // 2. Ensure >1 expression
    // 3. Visit expressions
    // 4. Ensure expressions evaluate to int
    // 5. Take type of childExps
    const result = this.initWJSCAst(ctx)
    result.parserRule = WJSCParserRules.Array
    const ident = this.visitTerminal(ctx.IDENTIFIER())
    this.symbolTable.checkType(ident)
    const entry = this.symbolTable.getGlobalEntry(ident.value)
    if (entry && entry.params) {
      this.errorLog.semErr(result, SemError.BadFunctionUse)
    }
    const expressions = ctx.expression()
    if (expressions.length === 0) {
      this.errorLog.semErr(result, SemError.IncorrectArgNo, [1, -1])
    }
    result.children = expressions.map(this.visitExpression)
    let currElemType = this.symbolTable.globalLookup(ident.token)
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

  public visitArrayLiteral = (ctx: ArrayLiteralContext): WJSCAst => {
    // 1. Ensure >1 expression 2. Ensure commas == expression - 1
    // 2. visit Lbrack, expressions, comma, expression, comma... rBrack
    // 3. Ensure children not undefined
    // 4. Ensure children have same type 5. Take type of childExps
    const result = this.initWJSCAst(ctx)
    result.parserRule = WJSCParserRules.Array
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
        // ^ There are less commas than expected for the given number of exprs
        this.errorLog.semErr(result, SemError.IncorrectArgNo, [
          expressions.length - 1,
          expressions.length - 1,
        ])
      } else if (
        expressions.length - 1 !== comma.length &&
        expressions.length - 1 < comma.length
      ) {
        // ^ Else if there are less expressions than expected for the given
        // number of commas
        this.errorLog.semErr(result, SemError.IncorrectArgNo, [
          comma.length + 1,
          comma.length + 1,
        ])
      }
      result.children.push(this.visitTerminal(ctx.LBRACK()))
      const firstChild = this.visitExpression(expressions[0])
      if (!firstChild.type) {
        this.errorLog.semErr(result, SemError.Undefined)
      }
      // This is the expr that must be present
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
          result.children.push(currComma)
        }
        if (index < expressions.length - 1) {
          const childStat = this.visitExpression(expressions[index + 1])
          if (!childStat.type) {
            this.errorLog.semErr(result, SemError.Undefined)
          }
          if (!hasSameType(childStat.type, firstChild.type)) {
            this.errorLog.semErr(result, SemError.Mismatch, firstChild.type)
          }
          // result.children.push(result, childStat)
          result.children.push(childStat)
        }
        index++
      }

      result.children.push(this.visitTerminal(ctx.RBRACK()))
    }
    return result
  }

  public visitArrayType = (ctx: ArrayTypeContext): WJSCAst => {
    // 1. Ensure type not undefined
    // 2. visit sub type and brackets
    // 3. take type of Type
    const result = this.initWJSCAst(ctx)
    result.parserRule = WJSCParserRules.Array
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

  public visitAssignLhs = (ctx: AssignLhsContext): WJSCAst => {
    // 1. Ensure either ident, array-elem, pair-elem 2. Visit these elems
    // 3. If ident, ensure ident is in lookup 4. Take type of lhsNode
    const result = this.initWJSCAst(ctx)
    result.parserRule = WJSCParserRules.Assignment
    const lhsElems = ctx.IDENTIFIER() || ctx.arrayElement() || ctx.pairElement()
    if (!lhsElems) {
      this.errorLog.semErr(result, SemError.Undefined)
    } else {
      if (lhsElems instanceof TerminalNode) {
        const ident = this.visitTerminal(lhsElems)
        const entry = this.symbolTable.getGlobalEntry(ident.value)
        if (entry && entry.params) {
          this.errorLog.semErr(result, SemError.BadFunctionUse)
        }
      }
      const lhsNode =
        lhsElems instanceof TerminalNode
          ? this.visitTerminal(lhsElems)
          : lhsElems instanceof ArrayElementContext
          ? this.visitArrayElement(lhsElems)
          : this.visitPairElement(lhsElems)
      this.pushChild(result, lhsNode)

      // Check identifier already declared
      if (lhsElems instanceof TerminalNode) {
        const type = this.symbolTable.globalLookup(lhsNode.token)
        if (!type) {
          this.errorLog.semErr(lhsNode, SemError.Undefined)
        }
        result.type = type
      }
    }
    return result
  }

  public visitAssignRhs = (ctx: AssignRhsContext): WJSCAst => {
    // 1. Ensure either array-liter, pair-elem, call expr only or newpair
    // 2. If call, ensure ident, brackets not undefined. check ident in lookup.
    // 3. If exp alone, ensure childExp not undefined
    // 4. If 2 exps, ensure newpair, brackets, comma not undefined.
    // Ensure childExps not undefined
    // 5. visitThem 6. Take type of possibles
    // WARNING: ENSURE ARG LIST MATCHES PARAM LIST
    const result = this.initWJSCAst(ctx)
    result.parserRule = WJSCParserRules.Assignment
    const possibles =
      ctx.arrayLiteral() || ctx.pairElement() || ctx.CALL() || ctx.expression()
    if (!possibles) {
      this.errorLog.semErr(result, SemError.Undefined)
    } else {
      const arrLiter = ctx.arrayLiteral()
      const pairElem = ctx.pairElement()
      const call = ctx.CALL()
      if (arrLiter) {
        const visitedArray = this.visitArrayLiteral(arrLiter)
        this.pushChild(result, visitedArray)
      } else if (pairElem) {
        const visitedPair = this.visitPairElement(pairElem)
        this.pushChild(result, visitedPair)
      } else if (call) {
        // Function call
        result.children.push(this.visitTerminal(call))
        const ident = ctx.IDENTIFIER()
        const argList = ctx.argList()
        if (!ident) {
          this.errorLog.semErr(result, SemError.Undefined)
        } else {
          const visitedIdent = this.visitTerminal(ident)
          visitedIdent.type = this.symbolTable.globalLookup(visitedIdent.value)
          this.pushChild(result, visitedIdent)
          if (argList) {
            // TODO Check args are of the right type
            const visitedArgList = this.visitArgList(argList)
            result.children.push(visitedArgList)
            const funcType = this.symbolTable.getGlobalEntry(visitedIdent.value)
            if (funcType) {
              const params = funcType.params
              if (params) {
                visitedArgList.children.forEach((child, i) => {
                  if (!hasSameType(child.type, params[i])) {
                    this.errorLog.semErr(child, SemError.Mismatch, params[i])
                  }
                })
              }
            }
          }
        }
      } else {
        // These are all the children with expr in it
        const expressions = ctx.expression().map(this.visitExpression)
        if (expressions.length === 1) {
          if (!expressions[0]) {
            this.errorLog.semErr(result, SemError.Undefined)
          } else {
            this.pushChild(result, expressions[0])
          }
        } else if (expressions.length === 2) {
          // New pair assignment
          const newpair = ctx.NEW_PAIR()
          if (!newpair) {
            this.errorLog.semErr(result, SemError.Undefined)
          } else {
            const firstElem = expressions[0]
            const secondElem = expressions[1]
            if (!firstElem) {
              this.errorLog.semErr(result, SemError.Undefined)
            } else {
              // TODO if identifier must have been declared
              result.children.push(firstElem)
            }
            if (!secondElem) {
              this.errorLog.semErr(result, SemError.Undefined)
            } else {
              // TODO if identifier must have been declared
              result.children.push(secondElem)
            }
            result.type = {
              pairType: [firstElem.type, secondElem.type],
            }
          }
        } else {
          this.errorLog.semErr(result, SemError.IncorrectArgNo, [1, 2])
        }
      }
    }
    return result // result
  }

  public visitAssignment = (ctx: AssignmentContext): WJSCAst => {
    // 1. Both lhs and rhs not undefined
    // 2. visit lhs and rhs
    // 3. If an assignment, Add this assignment to the lookup
    // 4. (Check that can be removed later): Ensure ident is in table
    // 5. visit types of lhs and rhs 6. Ensure lhs and rhs have the same types
    const result = this.initWJSCAst(ctx)
    result.parserRule = WJSCParserRules.Assignment
    const lhs = ctx.assignLhs()
    const lhsType = ctx.type()
    const lhsIdent = ctx.IDENTIFIER()
    const rhs = ctx.assignRhs()
    if ((!lhs && (!lhsType || !lhsIdent)) || !rhs) {
      this.errorLog.semErr(result, SemError.Undefined)
    } else {
      const visitedRhs = this.visitAssignRhs(rhs)
      if (lhs) {
        // Reassignment
        const visitedLhs = this.visitAssignLhs(lhs)
        if (!hasSameType(visitedLhs.type, visitedRhs.type)) {
          this.errorLog.semErr(visitedRhs, SemError.Mismatch, visitedLhs.type)
        }
      } else if (lhsType && lhsIdent) {
        // Assignment
        const visitedLhsType = this.visitType(lhsType).type
        const visitedIdentifier = this.visitTerminal(lhsIdent)
        // Check for double declaration
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
      }
      this.pushChild(result, visitedRhs)
    }
    return result
  }

  public visitBaseType = (ctx: BaseTypeContext): WJSCAst => {
    // 1. Ensure one of base type 2. visit these types 3. visit types of types
    const result = this.initWJSCAst(ctx)
    result.parserRule = WJSCParserRules.Type
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

  public visitConditionalBlocks = (ctx: ConditionalBlocksContext): WJSCAst => {
    // 1. Ensure either ifThenElseFi or whileDoDone
    // 2. if ifThenElseFi check childStat == 2
    // 3. if whileDoDone check childStat == 1
    // 4. visit all children
    // 5. Ensure childStats not undefined
    // 6. Ensure childExps are booleans
    // 7. visit types of childStats and childExps
    // 8. set type of conditional to boolean
    const result = this.initWJSCAst(ctx)
    result.parserRule = WJSCParserRules.Conditional
    const ifB = ctx.IF()
    const thenB = ctx.THEN()
    const elseB = ctx.ELSE()
    const fiB = ctx.FI()
    const whileB = ctx.WHILE()
    const doB = ctx.DO()
    const doneB = ctx.DONE()
    const childExp = ctx.expression()
    const childStat = ctx.statement()
    const ifThenElseFi = ifB && thenB && elseB && fiB && childExp && childStat
    const whileDoDone = whileB && doB && doneB && childExp && childStat
    if (!ifThenElseFi && !whileDoDone) {
      this.errorLog.semErr(result, SemError.Undefined)
    } else {
      if (ifThenElseFi && childStat.length !== 2) {
        this.errorLog.semErr(result, SemError.IncorrectArgNo, [2, 2])
      } else if (whileDoDone && childStat.length !== 1) {
        this.errorLog.semErr(result, SemError.IncorrectArgNo, [1, 1])
      } else {
        // Visit childExps and childStats, checking 5. and 6.
        // WARNING: Assumes order in which they are pushed to the result does
        // not matter. redo later
        const childExpType = this.visitExpression(childExp)
        if (!hasSameType(childExpType.type, BaseType.Boolean)) {
          this.errorLog.semErr(result, SemError.Mismatch, BaseType.Boolean)
        }
        this.pushChild(result, childExpType)
        childStat.forEach((child, index) => {
          const childStatType = this.visitStatement(child)
          this.pushChild(result, childStatType)
          if (!childStatType) {
            this.errorLog.semErr(result, SemError.Undefined)
          }
        })
        if (ifB && thenB && elseB && fiB) {
          // <- tsLint wont allow ifThen...
          // visiting ifThenElseFi's unique children
          result.children.push(this.visitTerminal(ifB))
          result.children.push(this.visitTerminal(thenB))
          result.children.push(this.visitTerminal(fiB))
        } else if (whileB && doB && doneB) {
          // visiting whileDoDone's unique children
          result.children.push(this.visitTerminal(whileB))
          result.children.push(this.visitTerminal(doB))
          result.children.push(this.visitTerminal(doneB))
        }
      }
    }
    result.type = BaseType.Boolean
    return result
  }

  public visitBooleanOperator = (ctx: BooleanOperatorContext):
      WJSCOperators => {
    const result = this.initWJSCAst(ctx) as WJSCOperators
    result.parserRule = WJSCParserRules.Operator
    const operator = ctx.LOGICAL_AND() || ctx.LOGICAL_OR()
    if (operator) {
      result.token = operator.toString()
      result.inputs = [BaseType.Boolean]
      result.outputs = BaseType.Boolean
    }
    return result
  }

  public visitComparisonOperator = (ctx: ComparisonOperatorContext):
      WJSCOperators => {
    const result = this.initWJSCAst(ctx) as WJSCOperators
    result.parserRule = WJSCParserRules.Operator
    const operator =
      ctx.EQUALS() ||
      ctx.GREATER_EQUAL() ||
      ctx.LESS_EQUAL() ||
      ctx.LESS_THAN() ||
      ctx.NEQUALS()
    if (operator) {
      if (ctx.EQUALS() || ctx.NEQUALS()) {
        result.inputs = [BaseType.Integer, BaseType.Character, BaseType.Boolean,
                         BaseType.String, BaseType.Pair]
        result.arrayInput = true
      } else {
        result.inputs = [BaseType.Integer, BaseType.Character]
        result.arrayInput = false
      }
      result.outputs = BaseType.Boolean
      result.token = operator.toString()
    }
    return result
  }

  public visitExpression = (ctx: ExpressionContext): WJSCAst => {
    // 1. Ensure either literals, idents, array-elem, operators or bracket
    // 2. if bracket, ensure both brackets present 3. Ensure ident is in lookup
    // 4. visit childrenExp
    // 5. if Unop or bracket, childExp == 1
    // 6. if BinOp, childExp == 2
    // 7. ensure childExpType are not undefined
    // 8. visit Types
    const result = this.initWJSCAst(ctx)
    result.parserRule = WJSCParserRules.Expression
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
      ctx.comparisonOperator() ||
      ctx.booleanOperator()
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
        // literal scenario
        const terminal = this.visitTerminal(literals)
        this.pushChild(result, terminal)
      } else if (intLiterals) {
        // int literal scenario
        const intValue = this.visitIntegerLiteral(intLiterals)
        this.pushChild(result, intValue)
      } else if (ident) {
        // Ident scenario
        const visitedTerminal = this.visitTerminal(ident)
        const identType = this.symbolTable.globalLookup(visitedTerminal.value)
        if (identType) {
          this.pushChild(result, visitedTerminal)
        }
      } else if (arrayElem) {
        // array elem scenario
        this.pushChild(result, this.visitArrayElement(arrayElem))
      } else if (operators || bracket) {
        const expressions = ctx.expression()
        if (bracket) {
          // Bracket scenario
          result.children.push(this.visitTerminal(bracket))
          if (expressions.length !== 1) {
            this.errorLog.semErr(result, SemError.IncorrectArgNo, [1, 1])
          } else {
            this.pushChild(result, this.visitExpression(expressions[0]))
          }
          const rBracket = ctx.RPAREN()
          if (!rBracket) {
            this.errorLog.semErr(result, SemError.Undefined)
          } else {
            result.children.push(this.visitTerminal(rBracket))
          }
        } else {
          // Operator scenario
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
              } else if (operators instanceof BooleanOperatorContext) {
                visitedOp = this.visitBooleanOperator(operators)
              } else {
                visitedOp = this.visitComparisonOperator(operators)
              }
              result.children.push(visitedOp)
              const exp1 = this.visitExpression(expressions[0])
              const exp2 = this.visitExpression(expressions[1])
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

  public visitFunc = (ctx: FuncContext): WJSCFunction => {
    // 1. visit everything
    // 2. Ensure ident is in lookup
    // 3. If paramList is defined, visit them
    // 4. visit type of ident, paramList, statement
    // 5. insert function to symbol table
    const result = this.initWJSCAst(ctx) as WJSCFunction
    result.parserRule = WJSCParserRules.Function
    const visitedType = this.visitType(ctx.type()).type
    const ident = this.visitTerminal(ctx.IDENTIFIER())
    const paramList = ctx.paramList()
    result.identifier = ident.value
    result.type = visitedType
    // Check types of Params and Statements
    let paramsTypes: TypeName[]
    // Enter child scope
    this.symbolTable = this.symbolTable.enterFuncScope(ident.value)
    if (paramList) {
      const visitedParamList = this.visitParamList(paramList)
      paramsTypes = visitedParamList.paramTypes
      this.pushChild(result, visitedParamList)
    } else {
      paramsTypes = []
    }
    // Insert inside for recursive call check
    this.symbolTable.insertSymbol(ident.token, visitedType, paramsTypes)
    const statements = this.visitStatement(ctx.statement())
    if (!this.containsReturnStatement(statements)) {
      this.errorLog.synErr(
        result.line,
        result.column,
        SynError.NoReturn,
        'statement missing return statement',
      )
    }
    result.children.push(statements)
    // Exit child scope
    this.symbolTable = this.symbolTable.exitScope()

    const possibleEntry = this.symbolTable.getGlobalEntry(ident.value)
    if (possibleEntry && possibleEntry.params) {
      this.errorLog.semErr(ident, SemError.DoubleDeclare)
    } else {
      this.symbolTable.insertSymbol(ident.token, visitedType, paramsTypes)
    }

    return result
  }

  public visitIntegerLiteral = (ctx: IntegerLiteralContext): WJSCTerminal => {
    // 1. Ensure sign not undefined
    // 2, Calculate int val from digit
    // 3. Ensure no overflows in val
    const result = this.initWJSCAst(ctx) as WJSCTerminal
    result.parserRule = WJSCParserRules.Literal
    const sign = ctx.PLUS() || ctx.MINUS()
    const digits = ctx.DIGIT()
    // Calculate integer value from string of digits
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
    // 1. Ensure order and expressions not undefined
    // 2. visit childOrder and childExp
    // 3. visitType of childExp
    // Expression must be of type 'pair'
    const result = this.initWJSCAst(ctx)
    result.parserRule = WJSCParserRules.Pair
    const order = ctx.FIRST() || ctx.SECOND()
    const expression = ctx.expression()
    if (!expression || !order) {
      this.errorLog.semErr(result, SemError.Undefined)
    } else {
      result.children.push(this.visitTerminal(order))
      const visitedExpr = this.visitExpression(expression)
      // Expression must be of type 'pair'
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
    // 1. Ensure either base, array or pair not undefined
    // 2. visit possibilities
    // 3. visit type of possibilities
    const result = this.initWJSCAst(ctx)
    result.parserRule = WJSCParserRules.Pair
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
    // 1. visit 'pair', brackets, pairs, comma
    // 2. visitTypes of pairElemTypes
    // BRACKETS
    const result = this.initWJSCAst(ctx)
    result.parserRule = WJSCParserRules.Pair
    const pairs = ctx.pairElementType()
    result.children.push(this.visitTerminal(ctx.PAIR()))
    result.children.push(this.visitTerminal(ctx.LPAREN()))
    result.children.push(this.visitTerminal(ctx.COMMA()))
    result.children.push(this.visitTerminal(ctx.RPAREN()))

    const firstElem = this.visitPairElementType(pairs[0])
    result.children.push(firstElem)
    const secondElem = this.visitPairElementType(pairs[1])
    result.children.push(secondElem)

    result.type = {
      pairType: [firstElem.type, secondElem.type],
    }
    return result
  }

  public visitParam = (ctx: ParamContext): WJSCIdentifier => {
    // 1. visit types and ident
    // 2. Ensure ident is in lookup
    // 3. visit type of types and ident
    const result = this.initWJSCAst(ctx) as WJSCIdentifier
    result.parserRule = WJSCParserRules.Parameter
    const visitedType = this.visitType(ctx.type())
    const visitedIdent = this.visitTerminal(ctx.IDENTIFIER())
    result.identifier = visitedIdent.value
    visitedIdent.type = visitedType.type
    result.type = visitedType.type
    this.symbolTable.insertSymbol(result.identifier, visitedIdent.type)
    return result
  }

  public visitParamList = (ctx: ParamListContext): WJSCParam => {
    // 1. visit params 2. visit type of params
    const result = this.initWJSCAst(ctx) as WJSCParam
    result.paramTypes = []
    result.parserRule = WJSCParserRules.Parameter
    const params = ctx.param()
    params.forEach((parameter) => {
      const visitedParam = this.visitParam(parameter)
      result.children.push(visitedParam)
      result.paramTypes.push(visitedParam.type)
    })
    return result
  }

  public visitProgram = (ctx: ProgramContext): WJSCAst => {
    /** visit begin, stat and end
     * If func is present, visit func's list
     */
    const result = this.initWJSCAst(ctx)
    result.parserRule = WJSCParserRules.Program
    const functions = ctx.func()
    result.children.push(this.visitTerminal(ctx.BEGIN()))
    if (functions) {
      functions.forEach((child) => {
        result.children.push(this.visitFunc(child))
      })
    }
    result.children.push(this.visitStatement(ctx.statement()))
    result.children.push(this.visitTerminal(ctx.END()))
    return result
  }

  public visitStatement = (ctx: StatementContext): WJSCAst => {
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
    const result = this.initWJSCAst(ctx)
    result.parserRule = WJSCParserRules.Statement
    const skip = ctx.WSKIP()
    const assignment = ctx.assignment()
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
      } else if (assignment) {
        result.children.push(this.visitAssignment(assignment))
      } else if (read) {
        const lhs = ctx.assignLhs()
        if (!lhs) {
          this.errorLog.semErr(result, SemError.Undefined)
        } else {
          result.children.push(this.visitTerminal(read))
          this.pushChild(result, this.visitAssignLhs(lhs))
        }
      } else if (stdlib) {
        const expression = ctx.expression()
        const visitedStdlib = this.visitStdlib(stdlib)
        result.children.push(visitedStdlib)
        if (!expression) {
          this.errorLog.semErr(result, SemError.Undefined)
        } else {
          const visitedExpr = this.visitExpression(expression)
          // Check stdLib function argument types
          this.checkStdlibExpressionType(visitedStdlib, visitedExpr)
          result.children.push(visitedExpr)
        }
      } else if (conditionals) {
        // result.children.push(this.visitConditionalBlocks(conditionals))
        this.pushChild(result, this.visitConditionalBlocks(conditionals))
      } else if (begin) {
        const stat = ctx.statement()
        const end = ctx.END()
        if (!stat || !end) {
          this.errorLog.semErr(result, SemError.Undefined)
        } else {
          if (stat.length !== 1) {
            this.errorLog.semErr(result, SemError.IncorrectArgNo, [1, 1])
          } else {
            if (!stat[0]) {
              this.errorLog.semErr(result, SemError.Undefined)
            }
            this.symbolTable = this.symbolTable.enterScope()
            this.pushChild(result, this.visitStatement(stat[0]))
            this.symbolTable = this.symbolTable.exitScope()
          }
          result.children.push(this.visitTerminal(end))
        }
      } else if (semicolon) {
        // semicolon
        const stat = ctx.statement()
        if (!stat) {
          this.errorLog.semErr(result, SemError.Undefined)
        } else {
          if (stat.length !== 2) {
            this.errorLog.semErr(result, SemError.IncorrectArgNo, [2, 2])
          } else {
            this.pushChild(result, this.visitStatement(stat[0]))
            result.children.push(this.visitTerminal(semicolon))
            this.pushChild(result, this.visitStatement(stat[1]))
          }
        }
      }
    }
    return result
  }

  public visitStdlib = (ctx: StdlibContext): WJSCAst => {
    const result = this.initWJSCAst(ctx)
    const lib =
      ctx.FREE() || ctx.RETURN() || ctx.EXIT() || ctx.PRINT() || ctx.PRINTLN()
    if (!lib) {
      this.errorLog.semErr(result, SemError.Undefined)
    } else {
      result.children.push(this.visitTerminal(lib))
    }
    return result
  }

  public visitType = (ctx: TypeContext): WJSCAst => {
    const result = this.initWJSCAst(ctx)
    result.parserRule = WJSCParserRules.Type
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
    const terminal = this.initWJSCAst(node) as WJSCTerminal
    terminal.parserRule = WJSCParserRules.Terminal
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
      terminal.value = token === 'true'
    } else if (type === WJSCLexer.CHARACTER_LITERAL) {
      terminal.terminalType = terminal.type = BaseType.Character
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
      terminal.value = null
    } else if (type === WJSCLexer.STRING_LITERAL) {
      terminal.terminalType = terminal.type = BaseType.String
      const strRegexTest =
        // tslint:disable-next-line:max-line-length
        /(?<=")([\u0000-\u0021]|[\u0023-\u0026]|[\u0028-\u005b]|[\u005d-\u007f]|\\(0|b|t|n|f|r|'|\\|"))+(?=")/
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
      terminal.value = token
      terminal.type = this.symbolTable.globalLookup(token)
    }
    return terminal
  }

  public visitUnaryOperator = (ctx: UnaryOperatorContext): WJSCOperators => {
    // 1. Ensure either of ops not undefined 2. visit ops
    const result = this.initWJSCAst(ctx) as WJSCOperators
    result.parserRule = WJSCParserRules.Operator
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

  protected defaultResult(): WJSCAst {
    return {
      children: [],
      column: -1,
      line: -1,
      parserRule: WJSCParserRules.Undefined,
      startIndex: -1,
      token: 'default',
      type: undefined,
    }
  }

  private checkOperator = (op: WJSCOperators, exp1: WJSCAst, exp2?: WJSCAst,
  ): TypeName => {
    let outputType
    let matchAnyType = false
    if (exp2 === undefined) {
      // unOp
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
    } else {
      // binOp
      let matchButFaulty = false
      if (op.arrayInput) {
        // Special check for mismatched array types
        if (!hasSameType(exp1.type, exp2.type)) {
          this.errorLog.semErr(exp1, SemError.Mismatch, exp2.type)
        } else {
          matchAnyType = true
          outputType = op.outputs
        }
      } else {
        op.inputs.forEach((potInput) => {
          if (potInput === exp1.type && potInput === exp2.type) {
            matchAnyType = true
            outputType = op.outputs
          } else if (potInput !== exp1.type && potInput === exp2.type
              && !matchButFaulty) {
            this.errorLog.semErr(exp1, SemError.Mismatch, potInput)
            matchButFaulty = true
          } else if (potInput === exp1.type && potInput !== exp2.type
          && !matchButFaulty) {
            this.errorLog.semErr(exp2, SemError.Mismatch, potInput)
            matchButFaulty = true
          }
        })
        if (!matchAnyType && !matchButFaulty) {
          // binOp operator has two arguments of incorrect type
          this.errorLog.semErr(exp1, SemError.Mismatch, op.inputs)
          this.errorLog.semErr(exp2, SemError.Mismatch, op.inputs)
        }
      }
    }
    return outputType
  }

  private initWJSCAst = (
    ctx: ParserRuleContext | TerminalNode,
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
      line,
      parserRule: WJSCParserRules.Undefined,
      startIndex,
      token: text || '',
      type: undefined,
    }
  }

  /* Pushes a child to result and copies its type */
  private pushChild = (result: WJSCAst, child: WJSCAst) => {
    // TODO: PushChild must find type of child if child is an ident
    result.type = child.type
    result.children.push(child)
  }

  // Check the expressions given to stdlib functions free, return, exit, print
  // and println are of the correct type
  private checkStdlibExpressionType = (
    visitedStdlib: WJSCAst,
    visitedExpr: WJSCAst,
  ): void => {
    if (visitedStdlib.token === 'free' &&
      !isPairType(visitedExpr.type) &&
      !isArrayType(visitedExpr.type)) {
      // Free can only be called on pair or array type.
      console.log('Is pair type: ' + isPairType(visitedExpr.type))
      this.errorLog.semErr(visitedExpr, SemError.BadStdlibArgs, Stdlib.Free)
    } else if (visitedStdlib.token === 'return') {
      // Return cannot only be in body of non-main function
      // Type of expression must match the return type of the function
      if (!this.symbolTable.inFunction()) {
        this.errorLog.semErr(visitedStdlib, SemError.BadReturn)
      } else {
        const functionName = this.symbolTable.getFunctionName() || 'main'
        const functionType = this.symbolTable.globalLookup(functionName)
        if (!hasSameType(functionType, visitedExpr.type)) {
          this.errorLog.semErr(visitedStdlib, SemError.Mismatch, functionType)
        }
      }
    } else if (visitedStdlib.token === 'exit' &&
        !hasSameType(visitedExpr.type, BaseType.Integer)) {
      // Exit must return exit code of type 'int'
      this.errorLog.semErr(visitedExpr, SemError.Mismatch, BaseType.Integer)
    }
  }

  private containsReturnStatement = (ast: WJSCAst): boolean => {
    if (ast.token === 'return') {
      return true
    } else {
      let found = false
      ast.children.forEach((child: WJSCAst) => {
        if (!found && this.containsReturnStatement(child)) {
          found = true
        }
      })
      return found
    }
  }
}

export { WJSCSemanticChecker }
