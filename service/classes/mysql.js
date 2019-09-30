const mysql = require('mysql')
const Promise = require('bluebird')

class MySQL {
  constructor(config) {

    this.pool = mysql.createPool(config)
    this.config = config

    Promise.promisifyAll(this.pool)
  }

  async getConnection() {
    try {
      const connection = await this.pool.getConnectionAsync()

      Promise.promisifyAll(connection)

      return connection
    } catch (error) {
      console.log('error')
      throw error
    }
  }

  async end() {
    this.logger.debug('end')

    this.pool.removeAllListeners('error')

    await this.pool.endAsync()
  }
}

module.exports = MySQL

