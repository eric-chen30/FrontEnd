/**
 * Generator()函数是ES6提供的一种异步编程解决方案
 * 
 * 从语法上可以理解为一个状态机，函数内部维护多个状态，函数执行的结果返回一个部署了Iterator接口的对象
 * 这个对象可以依次获取Generator()函数内部的每一个状态
 * 
 * 特征：
 *  1.function关键字与函数名之间有一个 *
 *  2.函数内部使用yield关键字来定义不同的内部状态
 */


function * helloWorldGenerator(){
    console.log('start')
    yield 'Hello'
    yield 'World'
}

const hw = helloWorldGenerator()  
// 函数没有直接执行，而是返回一个部署了iterator接口的对象
// 通过调用next()函数，开始从函数头部开始向下执行，直到遇到yield表达式或者return语句才会停止
console.log('测试执行顺序')
console.log(hw.next())      // { value: 'Hello', done: false } 
// 测试执行顺序————>start
console.log(hw.next())      // { value: 'World', done: false } 
console.log(hw.next())      // { value: undefined, done: true }


/**
 * return  yield的表达式 都可以作为next()函数的返回值，但是有区别：
 *  1.return如果没有返回值，那么next()函数返回 {value：'undefined', done: true}
 *    yield 如果没有接表达式  next()函数返回 {value：'undefined', done: false}
 * 
 *  2.Generator函数中可以有多个yield语句，但只能有一个return语句
 *    yield语句本身没有返回值
 */

function * foo(x){
    let y = 3*(yield(x+2))
    let z = yield(y / 4)
    return (x + y + z)
}

let a = foo(5)
console.log(a.next())   // { value: 7, done: false }
console.log(a.next())   // { value: NaN, done: false }  // 不传值  上一轮 yield返回 undefined
console.log(a.next())   // { value: NaN, done: true }

let b = foo(5)
console.log(b.next())   // { value: 7, done: false }
console.log(b.next(8))  // { value: 6, done: false }   // 传入参数8  表示上一轮的返回值为8  也就是上一轮yield表达式返回8
console.log(b.next(9))  // { value: 38, done: true }   // value 表示 yield表达式的结果值


// for...of循环遍历Generator()函数的返回值
/**
 * 对象类型的值默认下不能使用 for...of循环进行遍历的，但是通过Generator()函数可以实现遍历
 */
function * testGenerator(){
    yield 'hello'
    yield 'world'
}

const t = testGenerator()  // 返回一个Iterator迭代对象
for(let key of t){
    console.log(key)   // hello   world
}


function * propGenerator() {
    let propArr = Object.keys(this)
    for(let prop of propArr){
        yield [prop, this[prop]]
    }
}

let obj ={
    name: 'king',
    age: 16
}

obj[Symbol.iterator] = propGenerator
for(let [key,value] of obj){
    console.log(key,value)
    // name king
    // age 16
}