/**
 *  使用 * 来标识这是一个 Generator 函数
 *  内部可以通过 yield 暂停代码
 *  通过调用 next 继续执行代码
 */

function * test() {
    let a = 1+2;
    yield 2;
    yield 3;
}
let b = test();
console.log(b.next());  // { value: 2, done: false }
console.log(b.next());  // { value: 3, done: false }
