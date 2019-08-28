const Router = require('koa-router')

const health = require('../controllers')

const router = new Router({ prefix: '/health' })

router.get('/', health.get)

module.exports = router

