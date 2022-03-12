// 题目描述：给出一个整数数组，判断数组中是否存在一个数，该数是其中另外两个数之和
// input: [2,3,5,7,8]
// output: true

var arr1 = [2,3,5,7,8];

function isExist(arr1){
    // 得到比较数组
    for(let i=0;i<arr1.length;i++){
        var arr2 = [...arr1];
        arr2.splice(i,1);
    }

    // 第一层遍历，遍历数组中的每个元素
    for (var index = 0; index < arr1.length; index++) {
        // 第二层遍历，将每个元素与剩余其它元素的和进行比较
        for(var j=0;j<arr2.length-1;j++){
            for(var k=1;k<arr2.length;k++){
                let count = arr2[j] + arr2[k];
                if(arr1[index] == count){
                    return true;
                }else{
                    // console.log('false');
                }
            }
        }
        
    }
}

let output = isExist(arr1);
console.log(output);