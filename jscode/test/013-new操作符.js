function Cat(name, age){
    this.name = name;
    this.age = age;
}

Cat.prototype.sayHi = function (){
    console.log('say hi');
}

/**
 * 1.创建一个空对象
 * 2.这个对象的__proto__属性指向构造函数的prototype
 * 3.将Cat函数的this指针指向这个cat变量
 */ 

function New() {
    var obj = {};
    // __proto__  === constructor
    obj.__proto__ = Cat.prototype;
    var res = Cat.apply(obj, arguments);
    console.log(typeof res==='object' ? res:obj);   // Cat { name: 'mini', age: 2 }
    return typeof res === 'object' ? res : obj;;
}

let cat =New ('mini',2);
console.log(cat);
console.log(cat.name);
console.log(cat.age);
console.log(cat.sayHi());

/**
 * 函数有 prototype 属性
 * 对象有 __proto__ 属性   指向创建构造该实例对象的原型
 * 对象可以通过 __proto__ 来寻找不属于该对象的属性，__proto__将对象连接起来组成了原型链
 */
