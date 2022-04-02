/**
 * 在字类的constructor构造函数中，需要首先调用super()函数去执行父类的构造函数，再执行字类函数修饰符this
 */

class Animal{
    constructor(type) {
        this.type = type
    }
}

class Cat extends Animal {
    constructor(name,type){
        super(type)
        this.name = name
    }

    getName(){
        return this.name
    }
}

const cat = new Cat('tom','cat')
console.log(cat.type)   // cat
console.log(cat.getName())  // tom


// extends不仅可以继承自定义的类，还可以继承原生的内置构造函数

// 父类的静态函数无法被实例继承，但可以被字类继承，但子类在访问时只能通过自身访问，不能通过实例去访问
class Parent{
    static say(){
        return 'hello'
    }
}

class Child extends Parent{

}

console.log(Child.say())  // hello

// const c = new Child()
// console.log(c.say())    // TypeError: c.say is not a function