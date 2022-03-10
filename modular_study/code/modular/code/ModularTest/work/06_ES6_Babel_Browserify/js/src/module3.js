// 默认暴露，暴露一个对象，通过对象去调用属性和方法
export default {
    name: 'Tome',
    setName: function (name) {
        this.name = name
    }
}

/*
    ES6模块化
     1. 分别暴露属性和方法                      
     2. 定义属性和方法，然后放在对象里统一暴露
     3. 默认暴露  export default {}             一个js文件中只允许有一个export default{}


     CommonJS模块化
     1. module.exports = {}                         暴露一个对象，这里的exports可以理解为一个对象
     2. module.exports = function foo() {}          这里的exports看作module对象上的一个属性或方法，不能有两个module.exports 因为后者会将前者覆盖
     3. exports.foo = function() {}  
        exports.foo2 = function() {}                这种方式可以看作是不断地往exports对象上加属性和方法

    传统方式：
    1. 全局function方式
        全局被污染，容易引起命名冲突
    2. namespace模式——>对对象进行简单的封装
        优点：减少了全局变量    缺点：数据不是私有的，外界可以进行改变，因此是不安全的
    3. IIFE模式——>匿名函数自调用        立即调用函数表达式
        优点：数据是私有的，外部只能通过暴露的方法操作      问题：如何引入依赖的模块？
    
    当一个页面需要引入多个js文件时：
        1. 文件之间存在依赖关系不好管理，由于文件之间的依赖导致js文件顺序不能交换，一旦交换，页面容易崩溃
        2. js文件过多，请求就会增多，会导致页面的响应时间增长，用户体验感差
        3. 依赖之间的关系很模糊


*/ 