import bodyParser = require('body-parser')
import cors = require('cors')
import express, { Response } from 'express'
import { ConsoleColors as Color } from '../util/Colors'
import WJSCCompiler from '../WJSCCompiler'
const app = express()
const port = process.env.PORT

const info = `${Color.Dim}[info]${Color.Reset}`

app.use(bodyParser.json())
app.use(cors())
app.use(express.static('public'))

app.post('/compile', (req, res) => {
  console.log(`${info} Compile request`)
  const compileReq = req.body
  if (checkRequestBody(compileReq, res)) {
    const compiler = new WJSCCompiler(compileReq.code, '/', compileReq.target === 'js', { minify: compileReq.optimize || false })
    try {
      const result = compiler.generate()
      res.json({
        code: result,
      })
    } catch (err) {
      const errors = compiler.errorLog.printErrors()
      res.status(500)
      res.json({
        error: errors,
      })
    }
  }
})

app.listen(port, () => console.log(`${info} WJSC Server listening on https://localhost:${port}`))

const checkRequestBody = (body: any, res: Response): body is CompileRequest => {
  if (!body.target || !body.code) {
    res.status(400)
    res.send({
      error: 'Malformed request',
    } as CompileNGResponse)
    return false
  }
  if (!(body.target === 'arm' || body.target === 'js')) {
    res.status(400)
    res.send({
      error: 'Invalid target language',
    } as CompileNGResponse)
    return false
  }
  if (typeof body.code !== 'string') {
    res.status(400)
    res.send({
      error: 'Invalid body code',
    } as CompileNGResponse)
    return false
  }
  return true
}

interface CompileRequest {
  target: 'arm' | 'js'
  code: string
  optimize: boolean
}

interface CompileOKResponse {
  code: string
}

interface CompileNGResponse {
  error: string
}
