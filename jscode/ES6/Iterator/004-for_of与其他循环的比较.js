/**
 * 这里主要针对数组，对如下几种循环方式进行比较
 * - for...of     与for...in 和 forEach()相比有一些显著的优点：
 *                  1.与for...in语法相同，但遍历数组时，返回的是数组每项的值，而且给数组实例新增的属性不会被遍历出来
 * 
 * - for...in     主要是为了遍历对象设计的，对数组遍历并不友好，存在如下问题：
 *                  1.使用for...in遍历数组时，返回的键是字符串表示的数组的索引，如"0"  "1" "2"，而不是数组项的值
 *                  2.通过手动给数组实例添加的属性，同样会被遍历出来，而事实上我们并不希望额外的属性被遍历出来
 * 
 * - forEach()   主要问题在于无法跳出循环，不支持 break 和 continue 关键字
 *               如果使用了 break 和 continue就会抛出异常，使用 return 会跳过当前循环，但执行后面的循环
 */


const arr = ['one','two','three']
arr.forEach(function(item,index){
    if(index ===1){
        // return item     // 如果此处使用 break 和 continue 关键字就会报错
    }

    console.log(item)   // one three
})

// for...in
arr.name = 'MyArr'
console.log(arr)   // [ 'one', 'two', 'three', name: 'MyArr' ]
for(let key in arr){
    console.log(key, typeof(key),arr[key])  
    // 0 string   one
    // 1 string   two
    // 2 string   three
    // name string MyArr
}

for(let key of arr){
    console.log(key,typeof(key))
    // one string
    // two string
    // three string
}