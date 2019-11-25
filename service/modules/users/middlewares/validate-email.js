const { isEmail } = require('validator')
const { path } = require('ramda')

const { BAD_REQUESTS } = require('../constants/errors.js')

const validateEmail = () => async (ctx, next) => {
  ctx.logger.debug({ message: 'validate email' })

  const email = path(['request', 'body', 'email'], ctx)

  if (!isEmail(email)) {
    return ctx.res.badRequest(BAD_REQUESTS.INVALID_EMAIL)
  }

  await next()
}

module.exports = validateEmail

