const Koa = require('koa')

const app = new Koa()

const server = app.listen(3000, () => {
  // logger.info({ port: 3000 }, 'App started successfully');
})

server.on('error', (err, ctx) => {
  // logger.error(err, assign({}, ctx, HIDDEN_CTX), 'Unhandled exception occurred');
})

module.exports = app
