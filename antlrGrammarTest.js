var fs = require('fs')
var path = require('path')
var cp = require('child_process')
var rr = require('recursive-readdir')
var events = require('events')

fs.unlinkSync('logfile.log')
var logfile = fs.openSync(path.resolve('logfile.log'), 'a')
fs.writeFileSync(logfile, '===!=== WJSC Grammar Autotester ===!===\n')

/* Get all filenames in the valid folder */
rr(path.resolve('wacc_examples', 'valid'), ["*.wacc~"], (err, files) => {
  const endEmit = new events.EventEmitter()
  let remainingFiles = files.length
  const classpath = path.resolve('antlr_config', 'antlr')
  let errs = 0

  files.forEach((filename) => {
    const currentFile = `Testing file ${path.relative('wacc_examples', filename)}`
    console.log(currentFile)
    fs.appendFileSync(logfile, `${currentFile}\n`)
    try {
      cp.execSync(`cd ${classpath} && grun WJSC program ${filename}`, { encoding: 'utf8', stdio: ['pipe', 'pipe', logfile] })
    } catch (error) {
      console.error(error)
    }
    endEmit.emit('end')
  })

  endEmit.on('end', () => {
    remainingFiles--;
    console.log(remainingFiles)
    if (remainingFiles === 0) {
      fs.appendFileSync(logfile, `\nErrors: ${errs}`)
      fs.close(2)
    }
  })
})