// bind 返回一个函数  可通过bind实现柯里化

Function.prototype.myBind = function(context) {
    if(typeof this != 'function') {
        throw new TypeError('Error');
    }
    var _this = this;
    var args = [...arguments].slice(1);
    // 返回一个函数
    return function F() {
        // 因为返回一个函数，我们可以 new F()，进行判断
        // instanceof  可以正确判断对象的类型:内部通过判断对象的原型链中是不是能找到类型的prototype
        if(this instanceof F){
            return new _this(...args, ...arguments);
        }
        return _this.apply(context. args.concat(...arguments));
    }
}