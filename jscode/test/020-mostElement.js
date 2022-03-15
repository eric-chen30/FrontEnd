// 1.利用键值对
function findMostElement(arr){
    if(!arr.length) return;
    if(arr.length ===1) return 1;
    var res = {};

    // 遍历数组
    for(var i =0; i<arr.length;i++){
        if(!res[arr[i]]){
            res[arr[i]] = 1;
        }else{
            res[arr[i]]++;
        }
    }
    // 遍历res
    var keys = Object.keys(res);
    var maxNum = 0,maxEle;
    for(var i=0,l = keys.length;i<l;i++){
        if(res[keys[i]] > maxNum){
            maxNum = res[keys[i]];
            maxEle = keys[i];
        }
    }
    return '出现次数最多的元素为：' + maxEle + ',出现次数为：' + maxNum;
}

var arr = [3,5,6,5,9,8,10,5,7,7,10,10,10,10,10];
// console.log(findMostElement(arr));


// 2.对1的优化
function findMostElement2(arr){
    var h ={};
    var maxNum = 0;
    var maxEle = null;
    for(var i=0; i<arr.length;i++){
        var a = arr[i];
        h[a] === undefined? h[a] =1 :(h[a]++);
        if(h[a] > maxNum){
            maxEle = a;
            maxNum = h[a];
        }
    }
    return '出现次数最多的元素为：' + maxEle + ',出现次数为：' + maxNum;
}
console.log(findMostElement(arr));

var obj = {
    name: 'jack',
    age: 11,
    sex: '男'
};
console.log(Object.keys(obj));  // [ 'name', 'age', 'sex' ]
console.log(obj[0]);    // undefined

var nullObj = {};
nullObj[0] = 1;
nullObj[1] = 2;
nullObj[2] = 3;
console.log(nullObj);   // { '0': 1, '1': 2, '2': 3 }

function count(nullObj){
    var count = 0;
    for(var i=0;i<3;i++){
        if(nullObj[i] !== undefined){
            count ++;
        }
    }
    return count;
}
console.log(count(nullObj));   // 3

// 3.借助Array类型的reduce函数
function findMostElement3(arr){
    var maxEle;
    var maxNum = 1;
    var obj = arr.reduce(function(p,k){
        // 这里p是initialValue = {},k为 index
        p[k] ? p[k]++ : p[k] =1;
        if(p[k] > maxNum){
            maxEle = k;
            maxNum ++;
        }
        return p;
    },{});
    return '出现次数最多的元素为：' + maxEle + ',出现次数为：' + maxNum;
}
console.log(findMostElement3(arr));



