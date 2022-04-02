const promise = new Promise((resolve, reject) => {
    resolve(1)
})

promise.then(result => {
    console.log(result)   // 1
    return 2
}).then(result => {
    console.log(result)    // 2
    return 3
}).then(result => {
    console.log(result)   // 3
    return 4
}).then(result => {
    console.log(result)   // 4
    return 5
}).then(result => {
    console.log(result)   // 5
    return 6
})