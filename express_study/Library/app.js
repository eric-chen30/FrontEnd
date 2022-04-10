var express = require('express')
var http = require('http')
var path = require('path')
var indexRouter = require('./routers/index')

var app = express()
var server = http.createServer(app)

app.use('/', indexRouter)

server.listen(3000)


