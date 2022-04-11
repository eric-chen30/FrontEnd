// router模块

const express = require('require')
const router = express.Router()

// 首页路由
router.get('/', (req,res) => {
    res.send('first page')
})

router.get('/about', (req,res) => {
    res.send('about page')
})

module.exports = router