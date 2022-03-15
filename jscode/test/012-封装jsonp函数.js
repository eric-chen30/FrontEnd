function jsonp(url,jsonpCallback,sucess) {
    // 创建script元素
    let script = document.createElement('script');
    // 给script元素添加属性
    script.src = url;
    script.type = 'text/javascript';
    script.async = true;;
    // 回调函数
    window[jsonpCallback] = function(data){
        sucess && sucess(data);
    }
    document.body.appendChild(script);
}

// jsonp 只支持 get 请求
jsonp(
    "http://xxx",
    "callback",
    function (value) {
        console.log(value);
    }
);