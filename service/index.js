require('./helpers/env.js')

const Koa = require('koa')

const logger = require('./logger.js')
const router = require('./router')
const requestHandler = require('./middlewares/request-handler')

const app = new Koa()

const APP_PORT = process.env.APP_PORT

app.use(requestHandler())

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
