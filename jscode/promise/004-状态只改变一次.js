const promise = new Promise((resolve, reject) => {
    try {
        throw new Error('Test')
    } catch (err) {
        reject(err)
    }
})

promise.catch(err => {
    console.log(err)   // Error: Test
})

const promise1 = new Promise((resolve, reject) => {
    null.name;
})
promise1.catch(err =>{
    console.log(err)  // Cannot read property 'name' of null
})


const promise2 = new Promise((resolve, reject) => {
    resolve(1)   // 此时的promise的状态已经从  pending——>fulfilled
    throw new Error('test')  // 不执行异常语句 throw
})

promise2.then(result => {
    console.log(result)   // 1
}).catch(err =>{
    console.log(err)
})