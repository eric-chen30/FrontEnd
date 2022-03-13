/*
	INPUT: 输入一个数字，可能包含小数、负数
    OUTPUT：输出一个字符串，没隔三位使用逗号分隔
*/

function paddingNum(num) {
    // 将传入的数字转化为字符串  -987654.3
    let str = num.toString();
    // 字符串以长度3为基准进行切断
    let index = str.length % 3;
    let strStart = str.slice(0,index);
    let strEnd = str.slice(index);
    // 定义一个空数组，用来装处理好的字符串
    const arr =[];
    for(let i=0;i< strEnd.length;i +=3){
        // 往空数组里面装
        arr.push(strEnd.slice(i, i+3));
    }
    // 判断index是否为0，如果为0返回假，不是0返回真
    if(index){
        arr.unshift(strStart);
    }
    // 把数组转化为字符串
    console.log(arr.join())
}

paddingNum(-987654.3);