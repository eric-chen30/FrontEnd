import {foo, bar} from './module1'          // 接收分别暴露的两个方法
import {DATA_ARR} from './module1'          // 接收暴露的const变量
import {fun1,fun2} from './module2'         // 接收统一暴露的两个函数
import person from './module3'              // 接收默认的暴露对象，这个对象中包含属性和方法

import $ from 'jquery'

$('body').css('background', 'skyblue')

foo()
bar()
console.log(DATA_ARR);
fun1()
fun2()
person.setName('JACK')
console.log(person.name);