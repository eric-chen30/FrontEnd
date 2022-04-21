var dbConfig = require('../util/dbconfig')

// 获取全部书籍信息
var getAll = (req, res) => {
    var sql = 'select * from book'
    var sqlArr = []
    var callBack = (err,data) => {
        if(err){
            console.log('连接错误')
        }else{
            res.send({
                data: data
            })
        }
    }
    dbConfig.sqlConnect(sql,sqlArr,callBack)
}

module.exports = {
    getAll
}