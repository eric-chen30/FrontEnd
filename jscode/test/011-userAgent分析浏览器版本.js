/*
	input： Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:92.0) Gecko/20100101 Firefox/100.1
    output：100.1   版本号
*/


var UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:92.0) Gecko/20100101 Firefox/100.1';
// 正则表达式提取 firefox浏览器类型  和  版本
// console.log(UA.match(/firefox\/[\d.]+/gi)[0]);                              // Firefox/100.1
console.log(UA.match(/firefox\/[\d.]+/gi)[0].match(/[\d]+[.]+[\d]/)[0]);    // 100.1
