/**
 * 1.创建 XMLHttpRequest 对象，也就是创建一个异步调用对象
 * 2.创建一个新的 HTTP 请求，并指定该 HTTP 请求的方法、URL以及请求信息
 * 3.设置响应HTTP请求状态变化的函数
 * 4.发送HTTP请求
 * 5.获取异步调用返回的数据
 * 6.使用 JavaScript 和 DOM 实现局部刷新
 */

const SERVER_RUL = '/server'

let xhr = new XMLHttpRequest()

// 第三个参数为 async 指定请求是否为异步方式，某人为true
xhr.open('GET', SERVER_RUL, true)

// 设置请求头信息
xhr.responseText = 'json'
xhr.setRequestHeader('Accept', 'application/json')

// 设置状态监听函数
xhr.onreadystatechange = function() {
    if(this.readyState != 4)  return

    // 请求成功时
    if(this.status ===200){
        handle(this.responseText)
    }else{
        console.error(this.statusText)
    }
}

// 设置请求失败时的监听函数
xhr.onerror = function() {
    console.log(this.statusText)
}

// 发送请求
xhr.send()


// Promise封装
function getJSON(url) {
    // 返回一个 promise 对象
    return new Promise(function (resolve, reject) {
      let xhr = new XMLHttpRequest()
  
      // 新建一个 http 请求， 第三个参数为async，指定请求是否为异步方式，默认为 true。
      xhr.open('GET', url, true)
  
      // 设置状态的监听函数
      xhr.onreadystatechange = function () {
        /*0: 请求未初始化
          1: 服务器连接已建立
          2: 请求已接收
          3: 请求处理中
          4: 请求已完成，且响应已就绪*/
        if (this.readyState !== 4) return
  
        // 当请求成功或失败时，改变 promise 的状态
        /*200: "OK"
          404: 未找到页面*/
        if (this.status === 200) {
          resolve(this.responseText)
        } else {
          reject(new Error(this.statusText))
        }
      }
  
      // 设置响应的数据类型
      xhr.responseType = 'json'
  
      // 设置请求头信息
      xhr.setRequestHeader('Accept', 'application/json')
  
      // 发送 http 请求
      xhr.send(null)
    })
}


function getJSON2(url){
    return new Promise(function (resolve,reject) {
        // 实例化对象
        var xhr = new XMLHttpRequest()
        // 新建一个 http 请求
        xhr.open('GET',rul,true)
        // 监听状态
        xhr.onreadystatechange = function(){
            if(this.readyState !=4) return
            if(this.status == 200){
                resolve(this.responseText)
            }else{
                reject(new Error(this.responseText))
            }
        }
        // 设置响应数据类型、请求头信息
        xhr.responseType = 'json'
        xhr.setRequestHeader('Accept', 'json/appliction')
        // 发送 http 请求
        xhr.send(null)
    })
}