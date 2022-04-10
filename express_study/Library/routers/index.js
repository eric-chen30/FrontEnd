var express = require('express')
var router = express.Router()
var index = require('../controllers/indexController')

router.get('/',index.sayHello)

module.exports = router