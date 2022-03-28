var foo = {
    value : 1,
}

console.log(this)   // {} 空对象

function bar() {
    console.log(this.value)
}

/**
 * call 改变this指向
 * 调用函数
 */
bar()           // undefined
bar.call(foo)   // 1   ??? 可不可以理解：这个效果与把 bar 函数放在 foo 对象中生命一样


// 对上面代码进行一个改造
var foo1 = {
    value: 1,
    bar: function() {
        console.log(this.value)   // 这里的 this 指向 foo1
    }
}
foo1.bar()  // 1


/**
 * 模拟call方法
 * 1.将函数设为某个对象的属性/方法
 * 2.通过该对象的属性调用该函数
 * 3.删除该对象上的这个属性
 */

Function.prototype.myCall = function(context) {
    const fn = Symbol('fn')
    context = context || window   // 兼容处理，不传值，默认为window
    context.fn = this   // 将函数挂载到 context 上面
    const args = [...arguments].slice(1)   // 截取  对象后面是否有参数
    const result = context.fn(...args)  // 调用 fn
    delete context.fn
    return result
}


// 测试
function test(arg1, arg2){
    console.log(arg1, arg2)         // 1 2
    console.log(this.a, this.b)     // a b
} 

test.myCall(
    {
        a: 'a',
        b: 'b'
    },
    1,
    2
)