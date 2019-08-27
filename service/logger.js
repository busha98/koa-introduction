const pino = require('pino')
const dateFormat = require('dateformat')

const DATE_FORMAT = 'isoDateTime'

const level = +process.env.LOGGER_LEVEL

const logger = pino({
  messageKey: 'message',
  timestamp: () => `,"time":"${dateFormat(Date.now(), DATE_FORMAT)}"`,
  level
})

module.exports = logger
