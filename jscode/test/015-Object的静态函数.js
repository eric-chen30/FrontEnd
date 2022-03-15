// Object.create()  创建一个指定原型和指定属性的对象
var obj = Object.create({
    name: {
        value: 'tom',
        writable: false,
        enumerable: true,
        configurable: true
    },
    age: {
        value: 22,
        writable: false     // 这里设置为了不可写，但还是修改
    }
});

console.log(obj);           // {}为一个空对象
console.log(obj.name);      // { value: 'tom', writable: true, enumerable: true, configurable: true }
console.log(obj.age);       // { value: 22 }

// 设置值
obj.age = 32;
obj.name = 'jack';

console.log(obj.age);       // 32
console.log(obj.name);      // jack

console.log(obj);   // { age: 32, name: 'jack' }
console.log(obj.hasOwnProperty('name'));   // true
console.log(obj.hasOwnProperty('length'));  // false

// Object.defineProperties()  添加或者修改对象的属性值
var obj2 = {};
Object.defineProperties(obj2,{
    name: {
        value: 'tom',
        writable: false,
        enumerable: true,
        configurable: true
    },
    age: {
        value: 22,
        writable: false     // 这里设置为了不可写，但还是修改
    }
});
console.log(obj2.name, obj2.age);   // tom  22

// Object.getOwnPropertyNames()    获取对象所有实例属性和函数，不包括原型链继承的属性和函数，数据格式为数组
function Cat(name,age){
    this.name = name;
    this.age = age;
}

Cat.prototype.color = 'black';

let cat = new Cat('miao',6);

console.log(Object.getOwnPropertyNames(cat));   //[ 'name', 'age' ]


// Object.keys()   获取对象可枚举的实例属性，不包含原型链继承的属性   与上面的区别：keys()函数只获取可枚举类型的属性
console.log(Object.keys(cat));   // [ 'name', 'age' ]  因为都是可枚举的，所以和上面结果一样