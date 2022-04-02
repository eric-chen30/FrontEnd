// Iterator 遍历器  是ES6为不同的数据结构遍历所新增的统一访问接口
/**
 * 1. 为任何部署了 Iterator 接口的数据结构提供统一的访问机制
 * 2. 使得数据结构的成员能够按照某种次序排列
 * 3. 为新的遍历方式 for...of 提供基础
 * 
 * Iterator 接口都会具有一个next()函数，在遍历过程中，依次调用next()函数，返回一个带有value和done属性的对象
 * value：当前遍历到的值
 * done：迭代是否结束   true表示迭代完成  false表示迭代未完成
 * 继续执行next()函数，进入下一轮遍历，直到 done的值为 true
 */

// 使用数组来模拟 Iterator 接口实现
function makeIterator(array) {
    let index = 0
    return {
        next:function() {
            if(index < array.length){
                return {
                    value: array[index++],
                    done: false
                }
            }else {
                return {
                    value: undefined,
                    done: true
                }
            }
        }
    }
}

const arr = ['one', 'two']
const iter = makeIterator(arr)
console.log(iter.next())   // { value: 'one', done: false }
console.log(iter.next())   // { value: 'two', done: false } 
console.log(iter.next())   // { value: undefined, done: true }

