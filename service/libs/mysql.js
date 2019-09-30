const MySQL = require('../classes/mysql')

module.exports = new MySQL({
  host: process.env.MYSQL_DB_HOST,
  port: process.env.MYSQL_DB_PORT,
  user: process.env.MYSQL_DB_USER,
  password: process.env.MYSQL_DB_PASSWORD,
  database: process.env.MYSQL_DB_NAME,
  connectionLimit: +process.env.MASTER_DB_CONNECTION_LIMIT
})
