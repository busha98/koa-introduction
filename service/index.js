require('./helpers/env.js')

const Koa = require('koa')

const logger = require('./logger.js')

const app = new Koa()

const APP_PORT = process.env.APP_PORT

const server = app.listen(APP_PORT, () => {
  logger.info({ port: APP_PORT }, 'App started successfully')
})

server.on('error', (err) => {
  logger.error(err, 'Unhandled exception occurred')
})

module.exports = app
