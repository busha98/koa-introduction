const Router = require('koa-router')

const router = new Router()

const healthApi = require('../modules/health/routers')

router.use(healthApi.routes())

module.exports = router

