// 暴露一个函数  module.exports = function() {}
// 这种方式不能和module3.js那样，因为会将前面定义地属性和方法覆盖掉

module.exports = function foo() {
    console.log('module2')
}

// 这个会将上面的对象覆盖掉
module.exports = function foo2() {
    console.log('module2 too')
}