const mysql = require('../../../libs/mysql')

async function get(ctx, next) {
  ctx.logger.debug('get health')

  const connection = await mysql.getConnection()
  let mysqlPing

  try {
    mysqlPing = await connection.pingAsync()
  } catch (error) {
    ctx.logger.error(error, 'mysql ping - failed')
  } finally {
    connection.release()
  }

  ctx.res.ok({ data: { mysqlPing } })

  await next()
}

module.exports = {
  get
}
