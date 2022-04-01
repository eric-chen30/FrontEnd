function say(value) {
    console.log(value)
}

function execute(fn, value){
    fn(value)
}

execute(say,"Hello")

// 这种写法不需要先定义函数，直接为第一个参数，也就是匿名函数
execute(function(value){
    console.log(value)
},'Hello')
