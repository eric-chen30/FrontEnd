/**
 * 静态函数和属性通过 【static】关键字进行修饰，只能通过类进行访问，实例对象无法进行访问
 * 
 * 静态函数中的 this 指向的类本身，而不是类的实例，也正是因为静态函数和实例函数中的this是隔离的
 * 所有同一个类中可以存在函数名相同的静态函数和实例函数
 */

class Animal{
    constructor(name,age){
        this.name = name
        this.age = age
    }

    color = 'black'
    static hobby = 'Jump'

    test(){
        console.log('我是原型函数')
    }

    static test(){
        console.log('我是静态原型函数')
    }
}

const cat = new Animal('cat',2)
console.log(cat.color)   // black
console.log(cat.hobby)   // undefined
cat.test()              // 我是原型函数
// cat.test1()             // TypeError: cat.test1 is not a function

console.log(Animal.hobby)       // Jump
Animal.test()    // 我是静态原型函数