const promise = new Promise((resolve, reject) => {
    console.log("Promise")
    resolve()
})

promise.then(function() {
    console.log('resolved')
})
console.log('Hello')

// 输出结果为   Promise   Hello   resolved
// promise创建后会立即执行，因此会输出 Promise
// resolve()是异步的，回触发then()函数指定的回调函数的执行，因此会先去执行同步代码
// 事件循环（Event Loop）