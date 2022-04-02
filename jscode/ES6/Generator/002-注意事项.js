// 1.默认情况下不能使用new关键字，Generator()函数并不是构造函数

function * testGenerator(){
    yield 'test'
}

// const tg  = new testGenerator() // testGenerator is not a constructor

// 2.yield表达式会延迟执行,只有调用next()函数时才会去执行
function * testGenerator2() {
    yield 1+2
}
const tg = testGenerator2()  // 生成一个Iterator迭代对象
console.log(tg.next())    // { value: 3, done: false }

// 3.yield表达式只能在Generator函数中调用
// function foo(){
//     yield 'foo'     //SyntaxError: Unexpected string
// }


// 4.yield表达式需要小括号括起来
function * demo(){
    // console.log('Hello' + yield 123)   // 这种写法存在语法错误
    console.log('Hello' + (yield 123))
}

// 5.Generator()函数中的this特殊处理
// 默认情况下，不能使用new关键字生成Generator实例，因此Generator函数中的this是无效的
function * testGenerator3(){
    this.name = 'king'
    console.log(this)  // Object [Generator] { name: 'king' }
    console.log(testGenerator3.prototype)   // Object [Generator] { name: 'king' }
    yield 123
    yield 456
}

// const t = testGenerator3()       // undefined
// 通过call使this指向原型属性
const t = testGenerator3.call(testGenerator3.prototype)     // king
t.next()
console.log(t.name)  

// 6.Generator()函数嵌套使用
function * fn1(){
    yield 'test1'
}
function * fn2(){
    yield 'test2'

    // for(let key of fn1()){
    //     console.log(key)
    // }

    // 调用另一个Generator()函数  使用 yield *
    yield * fn1()

    yield 'test3'
}

let f = fn2()
for(let key of f){
    console.log(key)
}
