// 如果参数是表达式，则 eval() 计算表达式。
// 如果参数是一个或多个 JavaScript 语句，则 eval() 执行这些语句。
function sum(arr) {
    // join将数组作为字符串进行返回，默认分隔符是逗号，可以通过传参进行改变
    return eval(arr.join('+'))   // 1+2+3+4
}

console.log(sum([1,2,3,4]))

var arr = [1,2,3,4]
console.log(arr.join())         // 1,2,3,4
console.log(arr.join('+'))      // 1+2+3+4
console.log(arr.join(' '))      // 1 2 3 4
