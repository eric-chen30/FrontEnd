function sum(arr){
    let result = 0
    arr.forEach(element => {
       result += element 
    });
    return result
}

console.log(sum([1,2,3,4]))

/**
 * forEach(item,index,arr)  按顺序为数组中的每一个元素调用一次该函数
 * 对于没有值得数组元素，不执行forEach方法
 */