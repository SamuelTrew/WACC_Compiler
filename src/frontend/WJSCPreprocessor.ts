import { WJSCAst } from '../util/WJSCAst'

/**
 * The class representing the preprocessor for including different files. It
 * takes a list of files to find and generates a WJSCAst containing all the
 * exported functions of those files.
 */
class WJSCPreprocessor {

  private filenames: string[]

  constructor(filenames: string[]) {
    this.filenames = filenames
  }

}
