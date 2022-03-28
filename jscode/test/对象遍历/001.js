// for...in 循环遍历对象自身和继承的可枚举属性
var obj ={
    '0': 'a',
    '1': 'b',
    '2': 'c'
}

// obj[i]  key-value
for(var i in obj){
    console.log(i,':',obj[i])
}