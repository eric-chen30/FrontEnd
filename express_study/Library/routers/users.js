var express = require('express')
var router = express.Router()
var User = require('../controllers/UserController')

// 用户登录
router.post('/login',User.login)
// 用户注册
router.post('/register',User.register)
// 修改密码
router.post('/setNewPassword',User.setNewPassword)
// 修改用户名称
router.post('/changeName',User.changeName)

module.exports = router