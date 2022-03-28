// 使用replace()只能替换匹配的第一个
var str = '1,2,3'
str = str.replace(',',' ')
console.log(str)   // 1 2,3

// 使用replace() + 正则替换
// 注意：replace的第一个参数就是正则，如果加了单双引号，就变为字符串，不起作用
var str2 = '1,2,3'
str2 = str2.replace(/,/g, ' ')
console.log(str2)   // 1 2 3

// split + join
var str3 = '1,2,3'
// str3 = str3.split(',')  // [ '1', '2', '3' ]\
str3 = str3.split(',').join(' ')   // 1 2 3
console.log(str3)

// 使用replace + RegExp
// RegExp 的两个参数分别为  要替换的字符，匹配模式及
var str4 = '1,2,3'
str4 = str4.replace(RegExp(",","g"), ' ')
console.log(str4)  // 1 2 3

// replaceAll  第一个参数必须为正则表达式，第二个参数为替换的新字符串
// 没有用，直接被弃用，完全可以使用replace替换它

