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
router.post('/unSubscribe', Book.unSubscribe)

// 我的借阅
router.post('/getLendBooks',Book.getLendBooks)

// 我的收藏
router.post('/getCollectBooks',Book.getCollectBooks)

// 我的归还
router.post('/getReturnBooks',Book.getReturnBooks)

// 图书归还
router.post('/returnBook',Book.returnBook)

// 个性标签
router.post('/getPersonalTags', Book.getPersonalTags)

// 获取推荐图书列表
router.post('/getRecommendBooks', Book.getReconmendBooks)

/**
 * 图书分类
 */

router.post('/getClassBooks', Book.getClassBooks)



module.exports = router