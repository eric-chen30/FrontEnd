/**
 * 1.只能与 new 关键字 搭配使用，不能直接调用
 * 2.不存在变量提升
 * 3.在类中声明函数，不要加function关键字
 * 4.类内部的this默认指向的是类的实例，在调用实例函数时，一定要注意this的指向问题
 * 
 * class关键字中使用了严格模式，在严格模式下，this不能指向全局环境，而是指向undefined
 */

class Person4 {
    constructor(name){
        this.name = name
    }

    getName(){
        return this.name
    }
}

const p1 = new Person4('Jack')
// let {getName} = p1
// getName()   // TypeError: Cannot read property 'name' of undefined


// 解决办法
class Person5 {
    constructor(name){
        this.name = name

        // 重新绑定getName函数中this指向当前实例
        this.getName = this.getName.bind(this)
    }

    getName(){
        return this.name
    }
}

const p2 = new Person5('Jack')
let {getName} = p2
var name = getName()   
console.log(name)   // Jack