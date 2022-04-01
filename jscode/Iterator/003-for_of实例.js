const arr = ['one', 'two', 'three']
for(let key of arr) {
    console.log(key)
}



let set = new Set(arr)
for(let key of set){
    console.log(key)
}

let map = new Map()
map.set('name','king')
map.set('age',66)
map.set('address','beijing')
console.log(map)
for(let prop of map) {
    console.log(prop)
}

function foo() {
    for(let arg of arguments) {
        console.log(arg)
    }
}

foo('name','age','adress')


/**
 * 特定函数的返回值使用 for...of循环
 * 对象类型的数据无法直接使用for...of进行遍历，但我们可以借助ES6中的Object对象新增的几个函数来间接地实现for...of循环
 * 
 * Object.entries(): 返回一个遍历器对象，由键、值构成的对象数组
 * Object.keys()： 返回一个遍历器对象，由所有的键构成的数组
 * Object.values()：返回一个遍历器对象，由所有的值构成的数组
 */

const obj = {
    name: 'king',
    age: 66,
    adress: 'shanghai'
}

for(let key of Object.keys(obj)){
    console.log(key)
}

for(let value of Object.values(obj)){
    console.log(value)
}

for(let [key,value] of Object.entries(obj)){
    console.log(key,value)
}