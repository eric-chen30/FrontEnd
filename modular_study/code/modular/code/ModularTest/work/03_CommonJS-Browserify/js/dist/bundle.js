(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){


let module1 = require('./module1.js')
let module2 = require('./module2.js')
let module3 = require('./module3.js')

module1.foo()   // module1
module2()       // module2 too
module3.foo()   // moudule3
module3.foo2()  // moudule3 too

// 注：上个例子是使用node命令执行app.js  这里我们要在html浏览器上展示，因此安装了broserify依赖，没有依赖浏览器无法识别require
// 通过 broserify js/src/app.js -o js/dist/bundle.js        进行打包   
},{"./module1.js":2,"./module2.js":3,"./module3.js":4}],2:[function(require,module,exports){
// module.exports = value    暴露一个对象

module.exports = {
    msg : 'module1',
    foo() {
        console.log(this.msg)
    }
}

},{}],3:[function(require,module,exports){
// 暴露一个函数  module.exports = function() {}
// 这种方式不能和module3.js那样，因为会将前面定义地属性和方法覆盖掉

module.exports = function foo() {
    console.log('module2')
}

// 这个会将上面的对象覆盖掉
module.exports = function foo2() {
    console.log('module2 too')
}
},{}],4:[function(require,module,exports){
// exports.xxx = value   这种暴露方式的优点：可以不断地往exports对象上添加属性和方法

exports.foo = function(){
    console.log('moudule3')
}

exports.foo2 = function() {
    console.log('moudule3 too')
}

exports.arr = [1,2,5,8,7,30]
},{}]},{},[1]);
