const express = require('express')
const { nextTick } = require('process')
// 创建一个express应用
const app = express()

// 路由处理函数
app.get('/', (req,res) => {
    res.send('Hello World')
    // res.json()      发送JSON响应
    // res.sendFile()  发送文件
})

app.listen(3000, ()=> {
    console.log('启动服务')
})

// 响应任何HTTP方法调用,一般用于中间处理程序
// app.all('/select',(req,res) => {
//     console.log('...')
//     next()     // 控制权传递给下一个处理器
// })

