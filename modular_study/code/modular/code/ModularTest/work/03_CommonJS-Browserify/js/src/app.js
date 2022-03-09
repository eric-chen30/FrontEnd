

let module1 = require('./module1.js')
let module2 = require('./module2.js')
let module3 = require('./module3.js')

module1.foo()   // module1
module2()       // module2 too
module3.foo()   // moudule3
module3.foo2()  // moudule3 too

// 注：上个例子是使用node命令执行app.js  这里我们要在html浏览器上展示，因此安装了broserify依赖，没有依赖浏览器无法识别require
// 通过 browserify js/src/app.js -o js/dist/bundle.js        进行打包   