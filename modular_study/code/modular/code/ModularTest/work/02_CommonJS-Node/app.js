// 将子模块汇集到主模块
let uniq = require('uniq')

let module1 = require('./modules/module1')
let module2 = require('./modules/module2')
let module3 = require('./modules/module3')

module1.foo()   // module1
module2()       // module2 too
module3.foo()   // moudule3
module3.foo2()  // moudule3 too

let result = uniq(module3.arr)
console.log(result)     // [ 1, 2, 30, 5, 7, 8 ]   去重  / 根据第一位数字排序