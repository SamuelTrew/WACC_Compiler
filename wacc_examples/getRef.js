var fetch = require('node-fetch')
var FormData = require('form-data')
var fs = require('fs')
var path = require('path')

var file = fs.openSync(path.resolve('./wacc_examples', 'exitWrap.wacc'))

var form = new FormData()
form.append('testfile', file)
form.append('options[]', '-t')
form.append('stdin', '')

console.log(JSON.stringify(form, null, 2))

const boundary = form.getBoundary()
fetch("https://teaching.doc.ic.ac.uk/wacc_compiler/run.cgi", {
  body: form,
  method: "POST",
}).then(res => {
  return res.ok ?
    res.json() : res.text()
}).then(res => {
  console.log(res)
}).catch(reason => {
  console.error(reason)
})