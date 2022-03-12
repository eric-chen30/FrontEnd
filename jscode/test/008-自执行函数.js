var name = 'eric';

(function add(a,b){
    var song = 'if you';
    console.log(a+b);
    console.log(name);   // 自定义函数内部可以访问全局变量，但是函数外部不可以访问内部变量
})(123,456) 

// console.log(song);   // song is not defined

