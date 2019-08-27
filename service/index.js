const Koa = require('koa')

const logger = require('./logger.js')
const app = new Koa()

const server = app.listen(3000, () => {
  logger.info({ port: 3000 }, 'App started successfully')
})

server.on('error', (err) => {
  logger.error(err, 'Unhandled exception occurred')
})

module.exports = app
