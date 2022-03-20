Function.prototype.myApply = function(context) {
    var k= context || window;
    context.fn = this;

    var result;
    // 需要判断是否存储第二个参数，如果存在就要将第二个参数展开
    if(arguments[1]){
        result = context.fn(...arguments[1]);
    }else{
        result = context.fn();

    }

    delete context.fn;
    return result;
}