// 将http模块返回的对象赋给本地对象http
var http = require("http")
var url = require("url")

// 一个可以工作的http服务器
/**
 * 服务启动文件
 */
// http.createServer(function(req,res) {
//     res.writeHead(200,{"Content-Type": "text/plain"})
//     res.write("Hello World")
//     res.end()
// }).listen(3000)

/**
 * 这里我们给createServer()函数传递了一个回调函数，只有在特定时才会调用
 * 打印结果：Server has started!    Request Received!
 * Request Received! 刷新页面一次就会打印一次（也就是进行一次回调）
 */

function start(route,handle){
    function onRequest(req,res){
        // 过滤掉自动发送 默认图标 的请求
        if(req.url !== "/favicon.ico"){
            // var postData = ""
            // route
            var pathname = url.parse(req.url).pathname
            console.log("Request for "+ pathname +" received.")

            // req.setEncoding("utf-8")
            // req.addListener("data", function(postDataChunk){
            //     postData += postDataChunk
            //     console.log("Received POST data chunk" + postDataChunk)
            // })

            // req.addListener("end", function(){
            //     route(handle, pathname, res,postData)
            // })

            // route(handle,pathname)
            route(handle, pathname, res, req)

            // 只有发生http请求时才会调用该回调函数进行打印,比如刷新页面（事件驱动的回调）
            // console.log('Request Received!')
            // res.writeHead(200,{"Content-Type": "text/plain"})

            // 这里进行了重构,目的是将路由请求处理程序的结果返回到页面上
            // **但是这种方式存在问题：当未来有请求处理程序需要进行非阻塞的操作时，我们应该就"挂"了**
            // var content = route(handle,pathname)
            // res.write(content)
            // res.end()

        }
    }

    http.createServer(onRequest).listen(3000)
    // console.log('Server has started!')
}




// 将文件暴露出去,由index.js主文件去管理
module.exports = {
    start
}
