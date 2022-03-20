/**
 * 防抖：防止函数多次调用
 * 
 */

// 袖珍版防抖函数
// func 是用户传入需要的防抖的函数  wait是等待事件
const debounce = (func,wait=50) => {
    // 设置一个缓存定时器
    let timer = 0;
    // 这里返回的函数就是每次用户调用的防抖函数
    // 如果已经设定过定时器就对上一次的定时器进行一个清空
    // 开始一个新的定时器，延迟执行用户执行的参数 
    return function(...args) {
        if(timer) clearTimeout(timer);
        timer = setTimeout(() =>{
            func.apply(this, args);
        },wait);
    };
};

/**
 * 上述定义的防抖函数肯定是有缺陷的，一般防抖都是由immediate选项，表示是否立即调用
 * 比如，用户进行输入搜索时，输入完成后调用查询接口。此时使用延迟执行的防抖函数
 * 但是，有些时候我们需要快速给到反馈，就需要 立即执行 的防抖函数
 */

// 带有 立即执行 选项的防抖函数
// 获取时间戳
function now() {
    return +new Date();
}

/**
 * 防抖函数，返回函数连续调用时，空闲时间必须大于等于wait，func才会执行
 * @param    func  防抖函数
 * @param    wait  时间窗口的间隔
 * @param    immediate   为boolean类型，true时，立即调用函数
 * @return    返回客户调用函数
 */

function debounce(func,wait=50,immediate=true) {
    let timer,context,args;
    // 延迟执行函数
    const later = () => setTimeout(() =>{
        // 延迟函数执行完毕，清空缓存定时器序号
        timer = null;
        // 延迟执行的情况下，函数会在延迟函数中执行
        // 使用之前的缓存的参数和上下文
        // 如果运行下面这个判断代码快，也就是immediate为false，表示函数延迟执行
        if(!immediate) {
            func.apply(context,args);
            context = args = null;
        }
    },wait);

    // 这里返回的函数是每次实际调用的函数
    return function(...params){
        // 如果没有创建延迟函数later，就创建一个
        if(!timer) {
            timer = later();
            // 如果是立即执行，调用函数
            // 否则缓存参数和上下文
            if(immediate){
                func.apply(this,params);
            }else {
                context = this;
                args = params;
            }
            // 如果已经有延迟执行函数，调用的时候清除源来的并重新设定一个
            // 这样做延迟函数会重新计时
        }else {
            clearTimeout(timer);
            timer = later();
        }
    };
}

/**
 * 总结：
 * 如果函数是立即执行的，立即调用，如果函数是延迟执行的，就缓存上下文和参数。放到延迟函数中去执行
 * 一旦开始一个定时器，只要我定时器还在，每次点击都会重新计时
 * 一旦点累了。定时器时间到了。定时器重置为null，就可以再次点击
 */