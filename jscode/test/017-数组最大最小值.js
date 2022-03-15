// 1.通过 prototype 属性扩展 min函数和 max函数
Array.prototype.min = function(){
    var min = this[0];
    var len = this.length;
    for(var i=1;i<len;i++){
        if(this[i] < min){
            min = this[i];
        }
    }
    return min;
};

Array.prototype.max = function(){
    var max = this[0];
    var len = this.length;
    for(var i=1;i<len;i++){
        if(this[i] > max){
            max = this[i];
        }
    }
    return max;
};

arr1 = [2,5,4,6,7];
console.log(arr1.max());
console.log(arr1.min());


// 2.借助Math对象的 min 和 max 函数
Array.max = function(array) {
    return Math.max.apply(Math,array);
};
Array.min = function(array) {
    return Math.min.apply(Math,array);
};
arr2 = [2,4,10,7,5,8,6];
// console.log(Array.max(arr2));
// console.log(Array.min(arr2));

// 3.借助 Array 类型的 reduce 函数
// 最大值
Array.prototype.max = function() {
    return this.reduce(function(preValue,curValue) {
        return preValue > curValue ? preValue : curValue;
    });
};
Array.prototype.min = function() {
    return this.reduce(function(preValue,curValue) {
        return preValue > curValue ? curValue : preValue;
    });
};

arr3 = [2,4,10,7,5,8,6];
// console.log(arr3.max());    // 10
// console.log(arr3.min());    // 2


// 4. 借助 Array 类型的 sort 函数
// 默认的 sort 函数在排序时是按照字母顺序排序的，数字会按照字符串进行处理，因此我们需要自定义排序函数
var arr4 = [2,4,10,7,5,8,6];
var sortFn = function(a,b) {
    return a -b;
}
var newArr4 = arr4.sort(sortFn);    
// console.log(newArr4[0]);        // 2
// console.log(newArr4[newArr4.length-1]); // 10


// 5. 借助ES6的扩展运算符
var arr5 = [2,4,512,43,1,4,66];
// console.log(Math.min(...arr5));     // 1
// console.log(Math.max(...arr5));     // 512