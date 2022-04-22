var express = require('express')
var router = express.Router()
var Book = require('../controllers/BooksController')

// 根据书的被借次数进行排名
router.get('/rankList', Book.rankList)

// 图书搜索
router.post('/bookSearch', Book.bookSearch)


module.exports = router