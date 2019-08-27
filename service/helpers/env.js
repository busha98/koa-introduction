const dotenv = require('dotenv')
const { resolve } = require('path')

dotenv.config({ path: resolve(__dirname, '../../.env') })

process.env.TZ = 'UTC'

