require('./helpers/env.js')
require('./helpers/promise.js')

const Koa = require('koa')

const cors = require('koa-cors')
const helmet = require('koa-helmet')
// const bodyParser = require('koa-bodyparser')

const logger = require('./logger.js')
const router = require('./router')
const requestHandler = require('./middlewares/request-handler')

const app = new Koa()

const APP_PORT = process.env.APP_PORT

app.use(
  cors({
    origin: '*',
    allowMethods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH']
  })
)
app.use(requestHandler())
app.use(helmet())

app.use(router.routes())

const server = app.listen(APP_PORT, () => {
  logger.info(
    {
      port: APP_PORT,
      endpoints: router.stack.map(({ methods, path }) => ({ methods: methods.join(','), path }))
    },
    'App started successfully'
  )
})

server.on('error', (err) => {
  logger.error(err, 'Unhandled exception occurred')
})

module.exports = app
