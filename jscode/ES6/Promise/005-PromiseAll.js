// promise.all([p1,p2,p3])
// 只有p1,p2,p3状态全部变为fulfilled成功状态，p的状态才为fulfilled

const p1 = new Promise((resolve,reject) => {
    resolve('sucess')
}).then(result =>{
    return result
})

const p2 = new Promise((resolve,reject) => {
    throw new Error('Test')
}).then(result =>{
    return result
}).catch(e => {
    return e
})

Promise.all([p1,p2])   
.then(result =>{
    console.log(result)
}).catch(e => {
    console.log(e)
})