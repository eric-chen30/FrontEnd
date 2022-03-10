// 先定义属性和方法，然后统一通过export {}暴露出去
let data = 'module2 data'

function fun1() {
    console.log('module2 fun1()' + data)
}

function fun2() {
    console.log('module2 fun2()' + data)
}

export {fun1, fun2}