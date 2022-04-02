function ajaxPromise(url){
    const promise = new Promise(function(resolve, reject){
        const handler = function(){
            if(this.readyState !== 4){
                retrun
            }

            if(this.status ===200){
                resolve(this.response)
            }else{
                reject(new Error(this.statusText))
            }
        }

        // 创建对象
        const xhr = new XMLHttpRequest()
        // 请求资源和地址
        xhr.open('GET',url)
        // 处理函数
        xhr.onreadystatechange = handler
        // 设置请求和相应格式
        xhr.setRequestHeader("Accept","application/json")
        xhr.responseType = "json"
        // 发送请求
        xhr.send()
    })
}