/**
 * map  生成一个新的数组，遍历原数组，将每个元素拿出来做一些变化后， append 到新数组中
 * flatmap  作用和map几乎相同  但是对于多维数组而言，会将原数组进行降维
 * flatmap = map + flatten
 */
arr1 = [1,2,3].map(item => item**2);
console.log(arr1);      // [ 1, 4, 9 ]

arr2 = [1,2,3].flatMap(item => item**2);
console.log(arr2);      // [ 1, 4, 9 ]

arr3 = [1,[1,2,[1,2]],3].flatMap(item => item**2);
console.log(arr3);      // [ 1, NaN, 9 ]

arr4 = [1,[2],3].flatMap(item => item**2);
console.log(arr4);      // [ 1, 4, 9 ]

// 将一个多维数组进行一个彻底的降维
const flattenDeep = (arr) => 
    Array.isArray(arr) ? arr.reduce((a,b) => [...a,...flattenDeep(b)],[]) : [arr];


let res = flattenDeep([1,[[2],[3,[4]],5]]);
console.log(res);       // [ 1, 2, 3, 4, 5 ]
console.log(Array.isArray([1,[[2],[3,[4]],5]])); // true
console.log(Array.isArray([1,2,3]));            // true
console.log(Array.isArray(1,2));   // false

// reduce 作用是将数组中的值组合起来，最终得到一个值
function a() {
    console.log(1);
}

function b() {
    console.log(2);
}

[a,b].reduce((a,b) => a(b()));  //  2 1


/**
 * 
 * async  await 相比于 直接使用Promise
 * 优势：调用.then方法后代码格式更加整洁清晰
 * 劣势：await 会阻塞代码从而影响性能
 * 
 * proxy 用来定义对象中的操作
 * 可以实现数据绑定和监听
 */

console.log(parseFloat((0.1 + 0.2).toFixed(10)) === 0.3); // true
console.log(0.1 + 0.2 === 0.3); // false
