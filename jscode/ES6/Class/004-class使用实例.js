class VersionedArray{
    constructor(){
        // 所有的历史提交值
        this.arr = []
        // 初始状态为空的二维数组
        this.history = [[]]
    }

    commit(){
        // 每次commit时，先执行slice()函数获取一次，然后添加到history二维数组中
        this.history.push(this.arr.slice())
    }
    revert(){
        // 执行revert()函数时，会将距离最近的一次commit，新增的但是没有commit的内容全部清空
        // 返回上一次commit状态
        this.arr.splice(0, this.arr.length, ...this.history[this.history.length-1])
    }
}

let x = new VersionedArray()

x.arr.push(1)
x.arr.push(2)
console.log(x.arr)  // [1,2]
console.log(x.history) // [[]]
x.commit()
console.log(x.history)  // [ [], [ 1, 2 ] ]

x.arr.push(3)
console.log(x.arr)  // [1,2,3]
x.commit()
console.log(x.history)  // [ [], [ 1, 2 ], [ 1, 2, 3 ] ]

x.arr.push(4)
console.log(x.arr)  // [ 1, 2, 3, 4 ]
x.revert()
console.log(x.arr) // [ 1, 2, 3 ]