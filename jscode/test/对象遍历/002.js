// Object.keys()

var obj ={
    '0': 'a',
    '1': 'b',
    '2': 'c'
}

// 遍历对象的所有键，返回一个数组
let keys = Object.keys(obj)
console.log(keys)

// 通过forEach 去取出数组中的每一项
keys.forEach((key) => {
    console.log(key,obj[key])
})

