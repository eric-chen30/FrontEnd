// slice方法返回包含选中元素的新数组，不对原数组产生影响
let arr = [1,2,3,4,5]
console.log(arr.slice(1))  // [ 2, 3, 4, 5 ]
console.log(arr.slice(2))   // [ 3, 4, 5 ]
console.log(arr.slice(2,3))  // [ 3 ]
console.log(arr.slice(2,5))  // [ 3, 4, 5 ]
console.log(arr)   // [ 1, 2, 3, 4, 5 ]