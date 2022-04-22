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



module.exports = {
    rankList,
    bookSearch
}