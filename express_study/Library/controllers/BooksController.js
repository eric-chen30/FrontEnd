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

// 我的收藏
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

// 取消收藏
let unSubscribe = (req, res) => {
    let sql = 'delete  from collect where bid=?'
    let bid = req.body.bid
    let sqlArr = [bid]
    let callBack = (err, data) => {
        if(err){
            res.send({
                code: 400,
                msg: err
            })
        }else{
            res.send({
                code: 200,
                msg: '取消成功',
                data: data
            })
        }
    }
    dbConfig.sqlConnect(sql,sqlArr,callBack)
}

// 获取我的借阅中不同的bid
let getLendBookBid = (user_id) =>{
    let sql = 'select distinct bid from lend where user_id = ?'
    let sqlArr = [user_id]
    return dbConfig.SySqlConnect(sql,sqlArr)
}

// 我的借阅
let getLendBooks = async(req, res) => {
    let user_id = req.body.user_id
    // lendBookBid 为一个对象数组
    let lendBookBid = await getLendBookBid(user_id)
    let lendBookBidArr = []
    // 获取对象的值也就是bid，依次存放到数组中
    for(var i=0; i<lendBookBid.length; i++){
        lendBookBidArr.push(lendBookBid[i]['bid'])
    }
    // 用来存放查询的数据
    let data = []
    let sql = 'select * from book where bid=?'
    for(var j=0; j<lendBookBidArr.length; j++){
        let bid = lendBookBidArr[j]
        let result = await getBookInfoByBid(bid)
        data.push(result)
    }
    res.send({
        code: 200,
        msg: '获取成功',
        data: data
    })
}

let deleteLendBookByBid = (bid) => {
    let sql = 'delete from lend where bid=?'
    let sqlArr = [bid]
    return dbConfig.SySqlConnect(sql,sqlArr)
}

// 图书归还(存在BUG，数据删了，return表中没有插入数据，这里需要使用事务)
// result.affectedRows >= 1说明数据进行了删除
// 但是一旦插入失败，那么就需要进行数据回滚
let returnBook = async(req, res) => {
    // 根据bid将lend表中记录删除，然后在return表中添加一条记录
    let bid = req.body.bid
    let result = await deleteLendBookByBid(bid)
    console.log(result)
    console.log(result.affectedRows)
    if(result.affectedRows >= 1){
        // 在 return 表中添加一条记录(这里表明为关键字return  会出现问题)
        // 命名需要注意
        let sql = 'insert into returnBook(user_id,bid,return_time) value (?,?,?)'
        console.log(req)
        let bid = req.body.bid
        let user_id = req.body.user_id
        let sqlArr= [user_id,bid,new Date()]
        console.log(sqlArr)
        let callBack = (err, data) => {
            if(err){
                res.send({
                    code: 400,
                    msg: err,
                })
            }else{
                res.send({
                    code: 200,
                    msg: '归还成功',
                    data: data
                })
            }
        }
        dbConfig.sqlConnect(sql,sqlArr,callBack)
    }else{
        res.send({
            code: 400,
            msg: '操作失败'
        })
    }
}

// 获取我的归还中不同的bid
let getReturnBookBid = (user_id) =>{
    let sql = 'select distinct bid from returnBook where user_id = ?'
    let sqlArr = [user_id]
    return dbConfig.SySqlConnect(sql,sqlArr)
}

// 我的归还
let getReturnBooks = async(req, res) => {
    let user_id = req.body.user_id
    // returnBookBid 为一个对象数组
    let returnBookBid = await getReturnBookBid(user_id)
    let returnBookBidArr = []
    // 获取对象的值也就是bid，依次存放到数组中
    for(var i=0; i<returnBookBid.length; i++){
        returnBookBidArr.push(returnBookBid[i]['bid'])
    }
    // 用来存放查询的数据
    let data = []
    let sql = 'select * from book where bid=?'
    for(var j=0; j<returnBookBidArr.length; j++){
        let bid = returnBookBidArr[j]
        let result = await getBookInfoByBid(bid)
        data.push(result)
    }
    res.send({
        code: 200,
        msg: '获取成功',
        data: data
    })
}


// 通过 bid 获取 tags字段
let getTagsByBid = (bid) => {
    let sql = 'select tag from book where bid=?'
    let sqlArr = [bid]
    // 一定要注意写return  不然没有返回值  都为 undefined（找了好半天。）
    return dbConfig.SySqlConnect(sql,sqlArr)
}

// reduece 统计词频
let wordCount = (arr) => {
    return arr.reduce(function(accumulator, currentValue){
        accumulator[currentValue] ? accumulator[currentValue]++ : accumulator[currentValue] = 1
        return accumulator 
    },{})
}

// 根据对象value进行排序
let objSortByValue = (obj) => {
    var newKey = Object.keys(obj).sort((k1,k2)=> {return k1 - k2})
    console.log(newKey)
    var newObj = {}
    for(let i=0; i < newKey.length; i++){
        newObj[newKey[i]] = obj[newKey[i]]
    }
    return newObj
}

// 获取个性标签
let getPersonalTags = async(req, res) => {
    let user_id = req.body.user_id
    // 获取收藏和借阅图书的所有标签  转换后变为了字符串而不是数组，不能遍历对象
    let lendResult = await getLendBookBid(user_id) 
    let collectResult = await getCollectBookBid(user_id)
    console.log(lendResult)
    console.log(collectResult)
    let lendBidArr = [] 
    let collectBidArr = []
    for(let i=0; i< lendResult.length; i++){
        lendBidArr.push(lendResult[i]['bid'])
    }
    for(let i=0; i< collectResult.length; i++){
        collectBidArr.push(collectResult[i]['bid'])
    }
    console.log(lendBidArr,collectBidArr)
    // 取收藏图书bid与借阅图书bid的交集  然后将 set{1,5} 转换为 [1,5]
    let unionBid = [...new Set([...lendBidArr,...collectBidArr])]
    console.log(unionBid)
    // 通过bid获取相关的tag集合
    let tags = []
    for(let i=0; i < unionBid.length; i++){
        let tag = await getTagsByBid(unionBid[i])
        tags.push(tag)
    }
    /**
     * [
     *      [ RowDataPacket { tag: '治愈系、孤独' } ],   
     *      [ RowDataPacket { tag: '情感、女性、童年' } ]
     * ]
     */
    console.log(tags)
    // 将所有tag全部提取出来然后统计词频，返回前5个标签
    let tagArr = []
    for(let i=0; i < tags.length; i++){
        tagArr.push(tags[i][0]['tag'])
    }
    /**
     * [
            '治愈系', '孤独',
            '情感',   '女性',
            '童年',   '治愈系',
            '孤独',   '情感'
        ]
     */
    let wordArr = tagArr.join('、').split('、')
    console.log(wordArr)
    // 词频统计 返回数量TOP N
    let wordCountRes = wordCount(wordArr)
    // { '治愈系': 2, '孤独': 2, '情感': 2, '女性': 1, '童年': 1 }
    console.log(wordCountRes)
    // 排序
    let wordCountSortRes = objSortByValue(wordCountRes)
    // 返回前四标签
    let topTags  = Object.keys(wordCountSortRes)
    // JavaScript 中不能使用  0<a<5之类的  需要改为  a>0 && a<5
    if(0 < topTags.length && topTags.length< 6){
        res.send({
            code: 200,
            msg: '个性标签~',
            count: topTags.length,
            data: topTags
        })
    }else if(topTags.length > 6){
        res.send({
            code: 200,
            msg: '个性标签!',
            count: topTags.length,
            data: topTags.slice(0,5)
        })
    }else{
        res.send({
            code: 200,
            msg: '暂时没有个性标签,快去借阅和收藏图书获取吧。',
            data: topTags
        })
    }
}

// 返回图书数量(使用模糊查询，暂时不进行遍历，效率太低了)
// let booksCount = () => {
//     let sql = 'select count(*) from book'
//     let sqlArr = []
//     return dbConfig.SySqlConnect(sql,sqlArr)
// }


// 获取推荐图书列表(推荐那些与个性标签至少有两个相同的图书)
let getReconmendBooks = (req, res) => {
    // 个性标签
    let tags = req.body.tags
    console.log(tags, typeof(tags))
    // 模糊查询
    let sql = 'SELECT * FROM `book` WHERE tag like ? or tag like ? or tag like ? or tag like ? or tag like ?' 
    let sqlArr = []
    for(let i=0; i < tags.length; i++){
        sqlArr.push('%' + tags[i] + '%')
    }
    console.log(sqlArr)
    let callBack = (err,data) => {
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
    // 加个定时器，拖延时间
    setTimeout(function(){console.log('拖延时间')},1000)

    dbConfig.sqlConnect(sql,sqlArr,callBack)
}   


// 图书分类
let getClassBooks = (req, res) => {
    let sql = 'select * from book where type=?'
    let category = req.body.category
    let sqlArr = [category]
    let callBack = (err,data) => {
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


module.exports = {
    rankList,
    bookSearch,
    lendBook,
    collectBook,
    getCollectBooks,
    unSubscribe,
    getLendBooks,
    returnBook,
    getReturnBooks,
    getPersonalTags,
    getReconmendBooks,
    getClassBooks
}