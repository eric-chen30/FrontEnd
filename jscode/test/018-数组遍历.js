var arr = [11,22,33];

// 1.原始for循环
for (var i = 0; i < arr.length; i++) {
    console.log(arr [i]);
}

// 2.forEach()
arr.forEach(function(element,index,array){
    console.log(element);
});

// 3.map()
var arrayOfSquares = arr.map(function(element){
    return element ** 2;
})
console.log(arrayOfSquares);        // [ 121, 484, 1089 ]

// 4.filter()

// 5.some()函数与every()函数的相似之处在都用于数组遍历的过程中，判断数组是否有满足条件的元素，满足返回true，不满足返回false
function isBigEnough(element,index,array){
    return element > 4;
}

var passed1 = [1,2,3,4].some(isBigEnough);  // false
var passed2 = [1,2,3,4,5].some(isBigEnough); // true
console.log(passed1,passed2);

var passed3 = [1,2,3,4].every(isBigEnough); // false
var passed4 = [5,6].every(isBigEnough); // true
console.log(passed3,passed4);

// 6.reduce()函数


// 7.find()函数   用于数组遍历过程中，找到第一个满足条件的元素值并返回    如果都不满足条件，就返回 undefined
console.log([1,2,3,4].find(value => value > 4));     // undefined
console.log([1,2,3,4,5].find(value => value > 4));   // 5