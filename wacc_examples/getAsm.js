const { execSync } = require('child_process')
const path = require('path')
const fs = require('fs')
const rr = require('recursive-readdir')

const numberRegex = /(?<=^(\d)+\t).*/
const extractAsm = (asm) => {
  let array = asm.split('\n')
  let filtered = array.filter((str) => numberRegex.test(str))
  let cut = filtered.map((str) => numberRegex.exec(str)[0])
  let rejoined = cut.join('\n')
  return rejoined
}

const refCompile = path.resolve('wacc_examples', 'refCompile')
const flags = '-a'

rr(
  path.resolve('wacc_examples', 'valid'),
  ['*.wacc~', '*.in', '*.output'],
  (err, files) => {
    if (err) {
      throw err
    }

    const asmFolder = path.resolve('wacc_examples', 'assembly')
    if (!fs.existsSync(asmFolder)) {
      fs.mkdirSync(asmFolder)
    }

    files.forEach((file) => {
      let asmFile = path.parse(file)
      asmFile.ext = '.asm'
      asmFile.base = asmFile.name + asmFile.ext
      let newDir = path.resolve(
        asmFolder,
        path.relative('wacc_examples', path.format(asmFile)),
      )

      if (!fs.existsSync(path.dirname(newDir))) {
        fs.mkdirSync(path.dirname(newDir), { recursive: true })
      }

      console.log(newDir)
      fs.writeFileSync(
        newDir,
        extractAsm(execSync(`ruby ${refCompile} ${file} ${flags}`).toString()),
      )
    })
  },
)
