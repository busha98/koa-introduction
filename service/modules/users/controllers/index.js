const jwt = require('jsonwebtoken')

const mysql = require('../../../libs/mysql.js')
const { getRandomString, sha512 } = require('../../../helpers/auth.js')
const { insertUser, selectUserByEmail } = require('../repositories/mysql')

const login = async (ctx) => {
  ctx.logger.debug('login start')

  let isValid, jwt_token

  const connection = await mysql.getConnection()
  const { email, password } = ctx.request.body

  try {
    const [{ id, salt, password: hashed_password }] = await selectUserByEmail(connection, { email })
    const hash = sha512(sha512(password, salt), process.env.GLOBAL_SALT)
    isValid = hashed_password === hash
    jwt_token = jwt.sign({ id, email },
      process.env.RSA_PRIVATE_KEY,
      { algorithm: 'RS256', expiresIn: process.env.JWT_EXPIRES_IN }
    )
  } catch(err) {
    ctx.logger.error({ message: 'login error' })
  } finally {
    connection.release()
  }

  if (isValid) {
    ctx.res.ok({ data: { jwt_token } })
  } else {
    ctx.res.badRequest({ message: 'error' })
  }

  ctx.logger.debug({ message: 'login end' })
}

const register = async (ctx) => {
  ctx.logger.debug({ message: 'registration start' })

  let isValid

  const connection = await mysql.getConnection()
  const { email, password } = ctx.request.body

  const salt = getRandomString(32)
  const hashed_password = sha512(sha512(password, salt), process.env.GLOBAL_SALT)

  try {
    await insertUser(connection, { email, salt, password: hashed_password })
    isValid = true
  } catch (err) {
    ctx.logger.error({ message: 'registration error' })
  } finally {
    connection.release()
  }

  if (isValid) {
    ctx.res.ok({ message: 'ok' })
  } else {
    ctx.res.badRequest({ message: 'error' })
  }

  ctx.logger.debug({ message: 'registration end' })
}


module.exports = {
  login,
  register
}
