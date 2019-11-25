const mysql = require('../../../libs/mysql.js')
const { getRandomString, sha512 } = require('../../../helpers/auth.js')
const { insertUser, selectUserByEmail } = require('../repositories/mysql')

const login = async (ctx) => {
  ctx.logger.debug('login')

  let isValid

  const connection = await mysql.getConnection()
  const { email, password } = ctx.request.body

  try {
    const [{ salt, password: hashed_password }] = await selectUserByEmail(connection, { email })
    const hash = sha512(sha512(password, salt), process.env.GLOBAL_SALT)
    isValid = hashed_password === hash
  } catch(err) {
    ctx.logger.error({ message: 'login error' })
  } finally {
    connection.release()
  }

  if (isValid) {
    ctx.res.ok({ message: 'ok' })
  } else {
    ctx.res.badRequest({ message: 'error' })
  }
}

const register = async (ctx) => {
  ctx.logger.debug({ message: 'registration' })

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
}


module.exports = {
  login,
  register
}
