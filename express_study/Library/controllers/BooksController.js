var dbConfig = require('../util/dbconfig')

// 根据书的被借次数进行排名
let rankList = (req, res) => {
    let sql = 'select * from book order by lended_count desc'
    let sqlArr = []
    var callBack = (err,data) => {
        if(err){
            res.send({
                code: 400,
                msg: '请求失败'
            })
        }else{
            res.send({
                code: 200,
                msg: '请求成功',
                data: data
            })
        }
    }
    dbConfig.sqlConnect(sql,sqlArr,callBack)
}

// 图书搜索(模糊查询)
let bookSearch = (req, res) => {
    let searchValue = req.body.searchValue
    let sql = 'select * from book where bname=?'
    let sqlArr = [searchValue]
    let callBack = (err, data) => {
        console.log(data)
        if(err){
            res.send({
                code: 400,
                msg: '查询失败'
            })
        }else{
            res.send({
                code: 200,
                msg: '查询成功',
                data: data
            })
        }
    }
    dbConfig.sqlConnect(sql,sqlArr,callBack)
}

// 图书借阅(存在一个BUG：对于相同的书籍收藏有多条记录，没有进行判断)
let lendBook = async (req, res) => {
    let user_id = req.body.user_id
    let bid = req.body.bid
    let sql = 'insert into lend(user_id,bid,lend_time) value(?,?,?)'
    let sqlArr = [user_id,bid,new Date()]
    console.log(new Date())
    console.log((new Date()).valueOf())
    console.log((new Date()).toString())
    let callBack = (err, data) => {
        if(err){
            res.send({
                code: 400,
                msg: '借阅失败'
            })
        }else{
            res.send({
                code: 200,
                msg: '借阅成功',
                data: data
            })
        }
    }
    dbConfig.sqlConnect(sql,sqlArr,callBack)
}

// 图书收藏(存在一个BUG：对于相同的书籍收藏有多条记录，没有进行判断)
let collectBook = (req, res) => {
    let user_id = req.body.user_id
    let bid = req.body.bid
    let sql = 'insert into collect(user_id,bid,collect_time) value(?,?,?)'
    let sqlArr = [user_id,bid,new Date()]
    console.log(new Date())
    console.log((new Date()).valueOf())
    console.log((new Date()).toString())
    let callBack = (err, data) => {
        if(err){
            res.send({
                code: 400,
                msg: '收藏失败'
            })
        }else{
            res.send({
                code: 200,
                msg: '收藏成功',
                data: data
            })
        }
    }
    dbConfig.sqlConnect(sql,sqlArr,callBack)
}

// 获取我的书单中不同的bid
let getCollectBookBid = (user_id) =>{
    let sql = 'select distinct bid from collect where user_id = ?'
    let sqlArr = [user_id]
    return dbConfig.SySqlConnect(sql,sqlArr)
}


// 通过bid获取图书信息
let getBookInfoByBid = (bid) => {
    let sql = 'select * from book where bid=?'
    let sqlArr = [bid]
    return dbConfig.SySqlConnect(sql,sqlArr)
}

// 我的书单
let getCollectBooks = async(req, res) => {
    let user_id = req.body.user_id
    // collectBookBid 为一个对象数组
    let collectBookBid = await getCollectBookBid(user_id)
    let collectBookBidArr = []
    // 获取对象的值也就是bid，依次存放到数组中
    for(var i=0; i<collectBookBid.length; i++){
        collectBookBidArr.push(collectBookBid[i]['bid'])
    }
    // 用来存放查询的数据
    let data = []
    let sql = 'select * from book where bid=?'
    for(var j=0; j<collectBookBidArr.length; j++){
        let bid = collectBookBidArr[j]
        let result = await getBookInfoByBid(bid)
        data.push(result)
    }
    res.send({
        code: 200,
        msg: '获取成功',
        data: data
    })
}

module.exports = {
    rankList,
    bookSearch,
    lendBook,
    collectBook,
    getCollectBooks
}