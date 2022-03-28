var arr = [1,2,3,4]

function sum(arr){
    let count = 0
    for(var i=0; i < arr.length; i++){
        count = count + arr[i]
    }
    return count
}

var result = sum(arr)
console.log(result)