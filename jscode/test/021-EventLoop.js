// script start => promise => script end => promise1 => promise2
/**
 * 浏览器的Event Loop:
 *  1. 执行同步代码
 *  2. 执行栈为空的话，查询是否有微任务需要执行
 *  3. 执行所有的微任务
 *  4. 必要的话渲染UI
 *  5. 然后开始下一轮Event Loop，执行宏任务中的异步操作
 */
console.log('script satrt');

setTimeout(function(){
    console.log('setTimeout');
},0);

new Promise((resolve) =>{
    console.log('promise');
    resolve();
}).then(function() {
    console.log('promise1');
}).then(function() {
    console.log('promise2')
});

console.log('script end');