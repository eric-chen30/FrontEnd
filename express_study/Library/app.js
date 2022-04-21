// 引入组件库
var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var createError = require('http-errors');

// 引入路由文件
var indexRouter = require('./routers/index')
var usersRouter = require('./routers/users')
var booksRouter = require('./routers/books')
var app = express()

// 创建服务器对象
var http = require('http')
var server = http.createServer(app)

// CORS模块，解决跨域问题
var cors = require('cors')
app.use(cors())

//静态资源
app.use(express.static(path.join(__dirname, 'public')));
// body-parser 解析表单 在post情况下使用
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/books', booksRouter);

server.listen(3000)


