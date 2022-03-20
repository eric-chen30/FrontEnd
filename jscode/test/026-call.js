// call 和 apply 都是为了改变 this 的指向，作用相同，但传参方式不同
// 第二个参数：call 接收一个参数列表，apply 接收一个参数数组

// example one
let a = {
    value: 1
};
function getValue(name, age){
    console.log(name);
    console.log(age);
    console.log(this.value);
}
getValue.call(a, 'eck', '24');      // eck 24  1
getValue.apply(a, ['jack', '24']);  // jack 24 1

// 1. 如果不传入第一个参数，默认为 window
// 2. 改变 this 指向，让新的对象可以执行该函数

// 给新对象添加一个函数，然后执行完以后删除
Function.prototype.myCall = function(context) {
    var context = context || window;
    context.fn = this;
    var args = [...arguments].slice(1);
    var result = context.fn(...args);
    delete context.fn;
    return result;
}
