// Object.getOwnPropertyNames(obj)

var obj ={
    '0': 'a',
    '1': 'b',
    '2': 'c'
}

let keys = Object.getOwnPropertyNames(obj)
console.log(keys)

keys.forEach((key) =>{
    console.log(key,obj[key])
})