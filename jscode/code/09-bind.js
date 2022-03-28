/**
 * bind 函数虽然也能改变函数的 this 指向，但函数并不会执行，只会返回一个新的函数
 * 想要执行就得继续调用
 */

var obj = {d:1}
function bar() {
    console.log(this.d)
}
bar.bind(obj)() // 1

Function.prototype.myBind = function(ctx, ...arg1){
    return (...arg2) => {
        return this.call(ctx, ...arg1,...arg2)
    }
}

// test
var obj1 =  {a:1}
function bar(b,c){
    console.log(this.a + b + c)
}
bar.myBind(obj1)(20,30)
bar.myBind(obj1,20,30)()