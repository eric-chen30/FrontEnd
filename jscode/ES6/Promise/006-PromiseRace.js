// Promise.race([p1,p2])   promise的状态与最先执行完的promise实例的状态相同且返回值将会成为p的回调函数的参数
const p1 = ajaxPromise('/testUrl')

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('request timeout')), 5000)
})

// 如果p1在规定时间内返回了数据，那么p就可以通过then()函数可以接收p1的返回值
// 如果超时，就会执行p2，抛出异常

const p = Promise.race([p1,p2])
p.then(res => {
    console.log(res)
})
.catch(e => {
    console.log(e)
})