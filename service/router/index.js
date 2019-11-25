const Router = require('koa-router')

const router = new Router()

const healthApi = require('../modules/health/routers')
const usersApi = require('../modules/users/routers')

router.use(healthApi.routes())
router.use(usersApi.routes())

module.exports = router

