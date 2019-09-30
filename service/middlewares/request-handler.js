const logger = require('../logger.js')

const requestHandler = () => async (ctx, next) => {
  ctx.logger = logger
  await next()
}

module.exports = requestHandler
