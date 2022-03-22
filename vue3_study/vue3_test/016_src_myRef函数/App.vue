<template>
  <input type="text" v-model="keyWord">
  <h3>{{keyWord}}</h3>
</template>

<script>
import {ref,customRef} from 'vue'

export default {
  name: 'App',
  setup() {
    // 自定义Ref----myRef
    function myRef(value,delay) {
      let timer
      return customRef((track, trigger) => {
        return {
          get: function(){
            track()      // 追踪数据value的变化
            return value
          },
          set: function(newValue){
            clearTimeout(timer)
            timer = setTimeout(() => {      
              value = newValue
              // 这里修改完后，需要告诉get再次调用一次
              trigger()   // 通知Vue去重新解析模板
            },delay)
          }
        }
      })
    }
    // let keyWord = ref('hello')   // Vue 提供的ref
    let keyWord = myRef('hello',500)    // 自定义的ref

    return {
      keyWord
    }
  }
}
</script>

