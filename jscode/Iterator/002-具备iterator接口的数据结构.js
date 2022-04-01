const obj = {
    name: 'king',
    age: 11
}

// 对象默认不能使用 for...of循环
// for(let key of obj){
//     console.log(key)   // ypeError: obj is not iterable
// }

// 数组能正常使用 for...of循环
const arr = ['one','two']
for(let key of arr) {
    console.log(key)   // one two
}


/**
 * 原生具备 Iterator 接口的数据接口有以下几个
 * - Array
 * - Map
 * - Set
 * - String
 * - 函数的 arguments 对象
 * - NodeList 对象
 * 这些数据结构，可以在不做任何处理的情况下，直接使用for...of循环进行遍历
 * 
 * 如果其他数据结构需要使用 for...of 进行循环遍历，需要为数据结构添加 Iterator 接口，
 * Iterator接口是部署在 Symbol.iterator属性上，它是一个函数，因此我们只需要对特定的数据结构添加上Symbol.iterator属性即可
 */

function Person(name,age) {
    this.name = name
    this.age = age
}

// 在原型上添加 Symbol.iterator属性
Person.prototype[Symbol.iterator] = function() {
    // 设置变量记录遍历的次数
    let count = 0
    // 通过Object.keys()获取实例自身的所有属性
    let propArr = Object.keys(this)
    return {
        next: function() {
            if(count < propArr.length){
                let index = count++
                return {
                    value: propArr[index],
                    done: false
                }
            }else{
                return{
                    value: undefined,
                    done: true
                }
            }
        }
    }
}

const person = new Person('king',11)
for(let key of person){
    console.log(key,person[key])
}