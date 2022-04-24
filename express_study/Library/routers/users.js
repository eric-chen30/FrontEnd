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
// 通过用户id获取用户信息
router.post('/getUserInfoById',User.getUserInfoById)
// 设置个性签名
router.post('/setMotto',User.setMotto)
// 设置性别
router.post('/chooseSex',User.chooseSex)
// 设置年龄
router.post('/chooseAge',User.chooseAge)
module.exports = router