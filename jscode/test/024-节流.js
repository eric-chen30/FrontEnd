// 防抖和节流本质是不一样的，防抖动是将多次执行变为最后一次执行
// 节流是将多次执行变成每隔一段时间执行

/**
 * underscore  节流函数，返回函数连续调用时， func 执行频率为  次/wait
 * 
 * @param   func      回调函数
 * @param   number    时间窗口间隔
 * @param   options    如果想忽略开始函数的调用，传入{leading:false}
 *                     如果想忽略结尾函数的调用，传入{trailing:false}
 * 两者不能共存，否则函数无法执行
 * @return  function    返回客户端调用函数
 */

const throttle = function(func,wait,options) {
    var context, args, result;
    var timer = null;
    // 之间的时间戳
    var previous = 0;
    // 如果 options 没传则设为空对象
    if(!options) options = {};
    // 定时器回调函数
    var later = function () {
        // 如果设置了 leading， 就将 previous 设为0
        // 用于下面函数的第一个if判断
        previous = options.leading = false ? 0 : _now();
        // 置空一是为了防止内存泄漏，而是为了下面的定时器判断
        timeout = null;
        result =  func.apply(context,args);
        if(!timeout) context = args = null;
    };

    return function() {
        // 获取当前时间戳
        var now = _now();
        // 首次进入前者肯定为true
        // 如果需要第一次不执行函数
        // 就将上一次的时间戳设置为当前的
        // 这样在接下来计算 remaining 的值会大于0
        if(!previous && options.leading === false) previous = now;
        // 计算剩余时间
        var remaining = wait - (now = previous);
        context = arguments;
        // 如果当前调用已经大于上次调用的时间 + wait
        // 或者用户手动调用了时间
        // 如果设置了 trailing  只会进入这个操作
        // 还有一点，你可能会觉得开启了定时器那么应该不会进入这个if条件了
        // 其实还是会进入的。因为定时器的延时
        // 并不是准确的时间，很可能你设置了2s，但是它需要2.2s才触发，这个时候就会进入这个条件
        if (remaining <= 0 || remaining > wait) {
            // 如果存在定时器就清理掉否则会调用二次回调
            if(timeout){
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            result = func.apply(context,args);
            if(!timeout) context = args = null;
        }else if(!timeout && options.trailing != false){
            // 判断是否设置了定时器和 trailing
            // 没有的话 开启一个定时器
            // 并且不同时设定 leading 和 trailing
            timeout = setTimeout(later,remaining);
        }
        return result;
    };
};