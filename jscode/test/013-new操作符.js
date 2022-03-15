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
