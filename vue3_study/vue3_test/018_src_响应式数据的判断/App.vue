<template>
    <h3>我是App组件</h3>
</template>


<script>
import {ref,reactive, readonly,isRef,isReactive,isReadonly,isProxy} from 'vue'
export default {
    name: 'App',
    setup() {
     let car = reactive({
       name: '奔驰',
       price: '40w'
     })
     let sum = ref(0)
     let car2 = readonly(car)
     
     console.log(isRef(sum))
     console.log(isReactive(car))
     console.log(isReactive(car2))
     console.log(isProxy(car))    // 检查一个对象是否是由 reactive or readonly 方法创建的代理
     console.log(isProxy(car2))

     return {}
    }
}
</script>