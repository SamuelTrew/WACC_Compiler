import {WJSCAst} from './WJSCAst'

export class WJSCErrors {

  public pushError = (ast: WJSCAst, message: string) => {
    ast.error.push(message)
  }

}
