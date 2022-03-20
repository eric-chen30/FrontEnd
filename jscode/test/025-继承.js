// ES5中
function Super() {}
Super.prototype.getNumber = function() {
    return 1;
}

function Sub(name,age) {
    this.name = name;
    this.age = age;
}
let s = new Sub('jack',11);
Sub.prototype = Object.create(Super.prototype, {
    constructor : {
        value: Sub,
        enumerable: false,
        writable: true,
        configurable: true
    }
});
console.log(Sub.prototype.getNumber());   // 1


// ES6中
class MyDate extends Date {
    test() {
        return this.getTime();
    }
}
let myDate = new MyDate();
console.log(myDate.test());   // 1647530535617
console.log(new Date().getTime());  // 1647530535618

// 先创建父类实例=》改变实例原先的_proto__转而连接到子类的prototype=》
function MyData() {}
MyData.prototype.test = function(){
    return this.getTime();
}

let d  = new Date();
Object.setPrototypeOf(d, MyData.prototype);
Object.setPrototypeOf(MyData.prototype, Date.prototype);
