var dbConfig = require('../util/dbconfig')

// 获取全部书籍信息
var getAll = (req, res) => {
    var sql = 'select * from book'
    var sqlArr = []
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

module.exports = {
    getAll
}