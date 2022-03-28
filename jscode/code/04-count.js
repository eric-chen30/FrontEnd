// 每次调用count()自动+1
var count = (function () {
    var a = 0
    return function() {
        console.log(++a)
    }
})()

count()
count()
count()
count()