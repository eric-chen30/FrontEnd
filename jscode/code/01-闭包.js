// 循环里面嵌套一个自调用函数
for (var i = 0; i < 5; i++) {
    (function bibao(j) {
        setTimeout(() => {
            console.log(j)
        }, j*1000)
    })(i)
}

// 0 1 2 3 4
// for(let i = 0; i < 5; i++){
//     setTimeout(()=> {
//         console.log(i)
//     },i*1000)
// }

// 5 5 5 5 5
// for(var i = 0; i < 5; i++){
//     setTimeout(()=> {
//         console.log(i)
//     },i*1000)
// }

// 最简单的闭包     上面为异步代码  所以输出台会先输出3
function sum(a){
    return function(b){
        return a + b
    }
}

let res = sum(1)(2)
console.log(res)