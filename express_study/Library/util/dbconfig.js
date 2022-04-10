const mysql = require("mysql")
const { sqlConnect } = require("../../apiLearn/util/dbconfig")

module.exports = {
    // 数据库配
    config: {
        host: 'localhost',
        port: '3306',
        user: 'library',
        password: 'root',
        database: 'library'
    },
    // 连接池对象
    sqlConnect:function(sql,sqlArr,callBack){
        var pool = mysql.createPool(this.config)
        pool.getConnection(function(err,conn){
            console.log('123')
            if(err){
                console.log('连接失败')
                return
            }
            conn.query(sql,sqlArr,callBack)
            conn.release()
        })
    },

    // Promise回调
    SySqlConnect:function(sql,sqlArr){
        return new Promise((resolve, reject) => {
            var pool  = mysql.createPool(this.config)
            pool.getConnection(function(err,conn){
                console.log('123')
                if(err){
                    reject(err)
                }else{
                    conn.query(sySql,sqlArr,(err,data) => {
                        if(err){
                            reject(err)
                        }else{
                            resolve(data)
                        }
                        conn.release()
                    })
                }
            })
        }).catch(err => {
            console.log(err)
        })
    }
}