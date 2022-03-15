// es6中的Set数据结构
function arrayUnique(array){
    return Array.from(new Set(array));
}

var arr = [1,4,5,4,10,1,4,6];
console.log(arrayUnique(arr));   // [ 1, 4, 5, 10, 6 ]

// es6的Map数据结构
function arrayUnique2(array){
    var map = new Map();
    return array.filter(item => !map.has(item) && map.set(item,1));
}

console.log(arrayUnique2(arr));           // [ 1, 4, 5, 10, 6 ]

// 遍历数组
function arrayUnique3(array) {
    var result =[];
    for(var i=0;i<array.length;i++){
        // 如果找不到该元素，那么就将它push到数组中  indexOf用于寻找数组中是否存在某个值，如果存在，返回值的索引,如果不存在，返回-1
        if(result.indexOf(arr[i]) === -1){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(arrayUnique3(arr));