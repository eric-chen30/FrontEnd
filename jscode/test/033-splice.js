let arr = [1,2,3,4,5]

/**
 * splice(index,count,item1,item2...)
 * index：表示从什么位置开始 添加/删除 项目，如果为负数，从末尾开始
 * count：要删除的项目数   如果设置为0 则表示不进行元素删除
 * 后面 item 表示需要添加的元素
 * splice 方法会改变原数组  返回删除的项目
 */

// 从索引为1开始，删除两个元素
console.log(arr.splice(1,2))   // [ 2, 3 ]      返回删除的项目 [2,3]
console.log(arr)               // [ 1, 4, 5 ] 原数组发生了改变

// 现在就是对[1，4，5]进行操作
// 从索引1开始 删除一个项目  添加3个元素
console.log(arr.splice(1,1,6,6,6))  // [ 4 ]  返回删除的元素 4
console.log(arr)        // [ 1, 6, 6, 6, 5 ]