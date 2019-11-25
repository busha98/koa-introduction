const Router = require('koa-router')

const users = require('../controllers')
const validateEmail = require('../middlewares/validate-email.js')
const validatePassword = require('../middlewares/validate-password.js')

const router = new Router({ prefix: '/users' })

router.post('/login', validateEmail(), validatePassword(), users.login)
router.post('/register', validateEmail(), validatePassword(),  users.register)

module.exports = router

