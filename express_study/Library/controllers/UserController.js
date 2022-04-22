var dbConfig = require('../util/dbconfig')

// 通过用户id获取用户详情信息
let getUserInfoById = (user_id) => {
    let sql = 'select * from user'
    let sqlArr = [user_id]
    return dbConfig.SySqlConnect(sql,sqlArr)
}

// 用户登录
let login = (req, res) => {
    // 获取 phone 和 password
    console.log(req.body)
    let phone = req.body.phone
    let password = req.body.password
    // 后端校验格式  密码至少包含 数字和英文 长度为 6-20位
    let phoneReg = /^1[3|4|5|6|7|8]\d{9}$/
    let passwordReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/
    if(phoneReg.test(phone) && passwordReg.test(password)){
        let sql = 'select * from user where phone=? and password=?'
        let sqlArr = [phone, password]
        let callBack = async(err, data) => {
            if(err){
                console.log(err)
                res.send({
                    code: 400,
                    msg: '出错了'
                })
            }else if(data == ''){
                res.send({
                    code: 400,
                    msg: '用户不存在,请先注册'
                })
            }else {
                let user_id = data[0].user_id;
                let result = await getUserInfoById(user_id);
                data[0].userinfo = result[0];
                res.send({
                    code: 200,
                    msg: '登录成功',
                    data: data[0]
                })
            }
        }
        dbConfig.sqlConnect(sql,sqlArr,callBack)
    }else if(!phoneReg.test(phone) && passwordReg.test(password)){
        res.send({
            code: 400,
            msg: '请检查电话是否正确'
        })
    }else if(phoneReg.test(phone) && !passwordReg.test(password)){
        res.send({
            code: 400,
            msg: '密码至少包含数字和字母,长度为6-20位'
        })
    }else {
        res.send({
            code: 400,
            msg: '检查电话密码是否正确'
        })
    }
}

// 创建用户
let register = (req, res) => {
    let user_name = req.body.user_name
    let phone = req.body.phone
    let password = req.body.password
    let stu_number = req.body.stu_number
    let school = req.body.school
    let college = req.body.college
    let marjor = req.body.marjor

    // 后端校验格式  密码至少包含 数字和英文 长度为 6-20位
    let phoneReg = /^1[3|4|5|6|7|8]\d{9}$/
    let passwordReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/
    let stuNumberReg = /^2018\d{11}$/

    if(phoneReg.test(phone) 
        && passwordReg.test(password) 
        && stuNumberReg.test(stu_number)
        && user_name !== ''
        && school !== ''
        && college !== ''
        && marjor !== '')
    {
        let sql = 'insert into user(user_name,phone,password,stu_number,school,college,marjor) value (?,?,?,?,?,?,?)'
        let sqlArr = [user_name,phone,password,stu_number,school,college,marjor]
        let callBack = async(err,data) => {
            if(err){
                res.send({
                    code: 400,
                    msg: err
                })
            }else{
                res.send({
                    code: 200,
                    msg: '创建成功'
                })
            }
        }
        dbConfig.sqlConnect(sql,sqlArr,callBack)
    }else if(!phoneReg.test(phone) || !passwordReg.test(password) || !stuNumberReg.test(stu_number)){
        res.send({
            code: 400,
            msg: '电话、密码或学号存在错误'
        })
    }else{
        res.send({
            code: 400,
            msg: '检查输入'
        })
    }
}

// 忘记密码(设置新密码)
let setNewPassword = async(req, res) => {
    let phone = req.body.phone
    let newPassword = req.body.newPassword

    let sql = 'update user set password =? where phone=?'
    let sqlArr = [newPassword,phone]
    let result = await dbConfig.SySqlConnect(sql,sqlArr)
    console.log(result)
    if(result.affectedRows){
        res.send({
            code: 200,
            msg: '修改密码成功'
        })
    }else{
        res.send({
            code: 400,
            msg: '修改失败'
        })
    }
}

// 修改用户名
let changeName = async(user_id,user_name) => {
    let sql = 'update user set user_name=? where user_id=?'
    let sqlArr = [user_name,user_id]
    let res = await dbConfig.SySqlConnect(sql,sqlArr)
    console.log(res)
    if(res.affectedRows == 1){
        return true
    }else{
        return false
    }
}


module.exports = {
    login,
    register,
    setNewPassword,
    changeName
}