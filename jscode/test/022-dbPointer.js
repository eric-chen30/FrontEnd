/**
 * 双指针问题
 */

// 1.删除有序数组中的重复项
var removeDuplicates = function(nums){
    let i=0, len = nums.length;
    let result = [];
    result.push(nums[0]);
    for(j=i+1;j<len;j++){
        if(nums[i] == nums[j]) continue;
        // ++i后，i立即+1，i++后，i仍然是i，下一次使用时+1
        nums[++i] = nums[j];
        result.push(nums[j]);
    }
    return [i+1,result];
}

console.log(removeDuplicates);
var nums = [1,2,2,3,5];
console.log(removeDuplicates(nums)[0]); // 4
console.log(removeDuplicates(nums)[1]); // [ 1, 2, 3, 5 ]

/**
 * return 返回多个值如何接收
 * 1. 使用数组方式(1)
 * 2. 使用数组方式(2)
 * 3. 将数据封装再json中返回
 * 4. 通过对象的属性访问
 * 
 */
// 数组方式1
function getData(){
    var names = new Array("chen","shuai");
    return names;
}
console.log(getData()[0],getData()[1]);


// 数组方式2
function demo() {
    var aa = 11;
    var bb = 22;
    var cc = 33;
    return [aa,bb,cc];
}
console.log(demo()[0]);
console.log(demo()[1]);
console.log(demo()[2]);

// json方式
function getJsonData(){
    var info = {name: 'jack', age: 11};
    return info;
}
var info = getJsonData();
// var name = info.name;
// var age = info.age;
var name = info['name'];
var age = info['age'];
console.log('姓名:'+ name +'年龄:' + age);

// 4.通过对象获取
function getObjData(a,b){
    var sum, sub;
    return {
        sum: a+b,
        sub: a-b
    }
}

var obj = getObjData(6,2);
console.log('a+b=' + obj.sum + '\n'+ 'a-b=' + obj.sub);