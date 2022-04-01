// var exec = require("child_process").exec
/**
 * 此文件用来定义不同路由的请求处理程序
 * 当然我们也不是不可以直接把请求处理程序嵌入到router.js模块中，但这样写可以使耦合更加松散
 * 便于维护、复用
 */

var querystringify = require("querystringify")
var fs = require("fs")
var formidable = require("formidable")

function start(response){
    console.log("Request handler 'start' was called.")

    var body ='<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" '+
    'content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" enctype="multipart/form-data" '+
    'method="post">'+
    '<input type="file" name="upload">'+
    '<input type="submit" value="Upload file" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"})
    response.write(body)
    response.end()

    // 执行 shell 命令
    // exec()可以执行非常耗时的shell操作而无需迫使我们应用停下来等待该操作
    // exec("find /", 
    //     {timeout: 10000, maxBuffer:20000*1024},
    //     function(error, stdout, stderr){
    //         response.writeHead(200,{"Content-Type":"text/plain"});
    //         response.write(stdout);
    //         response.end();
    // })

    // function sleep(milliSeconds) {
    //     var startTime = new Date().getTime()
    //     while(new Date().getTime() < startTime + milliSeconds);
    // }
    // 当start()被调用的时候，等待10s后才会返回 "Hello Start"
    // 也就是一种【阻塞操作】，那么它会造成什么影响呢？
    // Answer：它会阻塞其他的处理工作
    
    // 造成的结果就是：当我们同时请求 /start 和 /upload时，由于 start()请求处理程序是阻塞操作
    // 因此本应该直接相应的 upload()请求处理程序，需要等待 start()处理完后才能执行
    // sleep(10000)
    // return "Hello Start"
}

/**
 * 当用户提交表单时，触发/upload请求处理程序处理post请求
 */

// function upload(response,postData){
//     console.log("Request handler 'upload' was called.")
//     response.writeHead(200,{"Content-Type":"text/plain"});
//     response.write(querystringify.parse(postData).text);
//     response.end();
// }

// function show(response, postData){
//     console.log("Request handler 'show' was called.")
//     fs.readFile("./images/clipboard3.png", "binary", function(error, file) {
//         if(error){
//             response.writeHead(500,{"Content-Type":"text/plain"})
//             response.write(error +"\n")
//             response.end()
//         }else {
//             response.writeHead(200,{"Content-Type":"image/png"})
//             response.write(file, "binary")
//             response.end()
//         }
//     })
// }

function upload(response, request){
    console.log("Request handler 'upload' was called.")
    var form = new formidable.IncomingForm()
    // 文件上传后的保存路径
    form.uploadDir= './tmp'  
    // 保留原始文件的扩展名
    form.keepExtensions = true
    form.parse(request, function(error, fields, files){
        console.log("parsing done")
        if(error){
            console.log(error)
        }else {
            // 读取文件并重命名
            fs.renameSync(files.upload.filepath,form.uploadDir + "/" + "down.png")
            response.writeHead(200,{"Content-Type":"text/html"});
            response.write("received image:<br/>");
            response.write("<img src='/show' />");
            response.end();
        }
        
    })
    
}

function show(response){
    console.log("Request handler 'show' was called.")
    // 读取重命名后的文件
    fs.readFile("./tmp/down.png", "binary", function(error, file) {
        if(error){
            response.writeHead(500,{"Content-Type":"text/plain"})
            response.write(error +"\n")
            response.end()
        }else {
            response.writeHead(200,{"Content-Type":"image/png"})
            response.write(file, "binary")
            response.end()
        }
    })
}



module.exports = {
    start,
    upload,
    show
}