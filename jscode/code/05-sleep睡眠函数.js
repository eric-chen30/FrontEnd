// 方法1：ES5的方式实现
function sleep1(fn, time) {
    // 判断传入的第一个参数是不是函数
    if(typeof fn == 'function'){
        setTimeout(fn,time)
    }
}

sleep1(()=> {console.log(111)},1000)


// 方法2：使用Promise方法实现
const sleep2 = (time) => {
    return new Promise((resolve) => {
        setTimeout(resolve,time)
    })
}
sleep2(2000).then(() => {
    console.log(222)
})


// 方法3：利用async
function sleep3(time) {
    return new Promise((resolve) => {
        setTimeout(resolve,time)
    })
}

async function init() {
    var temp = await sleep3(2000)
    console.log(333)
}

init()