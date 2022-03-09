// exports.xxx = value   这种暴露方式的优点：可以不断地往exports对象上添加属性和方法

exports.foo = function(){
    console.log('moudule3')
}

exports.foo2 = function() {
    console.log('moudule3 too')
}

exports.arr = [1,2,5,8,7,30]