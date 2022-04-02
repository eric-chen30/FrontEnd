/**
 * 传统的JS只有对象的概念，没有类的概念
 * 1.不管ES5/ES6想要生成实例对象，必须通过【new】关键字
 * 2.ES5中，【构造函数】中定义实例属性，在【prototype原型】上添加原型属性和函数
 * 3.ES6中，使用【class】定义类的名称，然后在类的【constructor】构造函数中定义实例属性，原型属性在class内部直接声明赋值
 *   原型函数的声明与构造函数处于同一层级，并且省略了function关键字
 */

// ES5
function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.publicCount = 1
Person.prototype.getName = function(){
    return this.name
}

const p1 = new Person('king','16')
console.log(p1.getName())


// ES6
class Person2 {
    // 原型属性
    publicCount = 1

    //实例属性
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    // 原型函数
    getName(){
        return this.name
    }
}

const p2 = new Person2('jack','36')
console.log(p2.getName())

// class本质还是一个函数，只不过是函数的另外一种写法
console.log(typeof Person2)  // function

// ES6将prototype相关操作封装在了class中，避免我们直接去使用prototype属性
console.log(p2.getName === Person2.prototype.getName)  // true