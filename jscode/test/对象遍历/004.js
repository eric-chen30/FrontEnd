// Reflect.ownKeys(obj)遍历

var obj ={
    '0': 'a',
    '1': 'b',
    '2': 'c'
}

let keys =Reflect.ownKeys(obj)
console.log(keys)

keys.forEach((key) => {
    console.log(key,obj[key])
})