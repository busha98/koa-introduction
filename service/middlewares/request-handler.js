const logger = require('../logger.js')

const requestHandler = () => (ctx, next) => {
  ctx.logger = logger
  next()
}

module.exports = requestHandler
