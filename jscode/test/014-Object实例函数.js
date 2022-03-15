// hasOwnProperty(propertyName)  检查实例对象自身是否有某个属性，不会检查实例对象原型链上的属性
function Cat(name,age){
    this.name = name;
    this.age = age;
}

Cat.prototype.color = 'black';

let cat = new Cat('miao',6);
console.log(cat);
// hasOwnProperty('属性名')
console.log(cat.hasOwnProperty('name'));  // true
console.log(cat.hasOwnProperty('age'));   // true
console.log(cat.hasOwnProperty('color'));  // false

// propertyIsEnumerable(propertyName) 判断指定属性是否为实例对象且是可枚举的
console.log(cat.propertyIsEnumerable('name'));  // true

var arr = [1,2,3];
arr.name = 'Arrary';
console.log(arr.propertyIsEnumerable('name'));    // true
console.log(arr.propertyIsEnumerable('join'));    // false 继承Array
console.log(arr.propertyIsEnumerable('length'));  // 继承自Array
console.log(arr.propertyIsEnumerable('toString')); // 继承 Object


let a = new Cat('jack', 4);
// 设置name属性为不可枚举型         a 为实例对象   属性  
Object.defineProperty(a, 'name', {
    enumerable: false
});

console.log(a.propertyIsEnumerable('name'));   // false  name虽然是实例对象的自身属性，但是不可枚举