/**
 * 主管理文件
 */
var server = require("./server")
var router = require("./router")
var requestHandlers = require("./requestHandlers")

/**
 * 类似于键值对的方式进行  路由 与 请求处理程序之间的一个映射关系
 * 而 handle 就是存储两者映射关系的对象
 */
var handle = {}
handle["/"] = requestHandlers.start
handle["/start"] = requestHandlers.start
handle["/upload"] = requestHandlers.upload
handle["/show"] = requestHandlers.show

// 把 handle 对象作为第一个参数传递给了 route()函调函数
server.start(router.route,handle)
