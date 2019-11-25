const { path } = require('ramda')

const { PASSWORD_REGEXP } = require('../constants/utils.js')
const { BAD_REQUESTS } = require('../constants/errors.js')

const validatePassword = () => async (ctx, next) => {
  ctx.logger.debug({ message: 'validate password' })

  const password = path(['request', 'body', 'password'], ctx)

  if (!PASSWORD_REGEXP.test(password)) {
    return ctx.res.badRequest(BAD_REQUESTS.INVALID_PASSWORD)
  }

  await next()
}

module.exports = validatePassword

