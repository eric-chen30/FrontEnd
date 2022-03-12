// 将字符串中每个单词的第二个字母变为大写
function toUpper(str1){
    // 将字符串通过空格进行拆分
    var result = "";
    let arr = str1.split(' ');
    // 遍历数组
    for(var i=0;i<arr.length;i++){
        // 如果小于两个字母，直接返回
        if(arr[i].length <2){
            arr[i] = arr[i];
        }else{
            // 将第二个字母改为大写
            arr[i] = arr[i].charAt(0) + arr[i].charAt(1).toUpperCase() + arr[i].substring(2);
        }
        result = result  + arr[i] + ' ';
    }
    console.log(result);
}

toUpper('My name is x');