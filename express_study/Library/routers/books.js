var express = require('express')
var router = express.Router()
var Book = require('../controllers/BooksController')

// 根据书的被借次数进行排名
router.get('/rankList', Book.rankList)

// 图书搜索
router.post('/bookSearch', Book.bookSearch)

// 图书借阅
router.post('/lendBook', Book.lendBook)


// 图书收藏
router.post('/collectBook', Book.collectBook)

// 取消收藏


// 我的借阅


// 我的书单
router.post('/getCollectBooks',Book.getCollectBooks)




module.exports = router