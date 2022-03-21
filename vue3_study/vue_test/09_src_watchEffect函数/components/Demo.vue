<template>
  <h2>当前的求和为：{{sum}}</h2>
  <button @click="sum++">数量+1</button>
  <h2>当前的信息为：{{msg}}</h2>
  <button @click="msg += '_'">信息+1</button>
  <h2>展示个人信息</h2>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h2>薪资{{person.job.j1.salary}}K</h2>
  <button @click="person.name += '^'">监听姓名</button>
  <button @click="person.age++">监听年龄</button>
  <button @click="person.job.j1.salary++">监听薪水</button>
</template>

<script>
import {ref, watch, reactive,watchEffect} from 'vue'

export default {
    name: 'Demo',

    setup() {
      let sum = ref(0)
      let msg = ref('Hello')
      let person = reactive({
          name: '张三',
          age: 18,
          job: {
              j1:{
                  salary: 20
              }
          }
      })
     
      // 监视  既要指明监视的属性，也要指明监视的回调
    //   watch(sum, (newValue, oldValue) =>{
    //       console.log('sum change')
    //   },{immediate: true})

    // 函数体用到谁就监视谁
    watchEffect(() => {
        const x1 = sum.value
        const x2 = person.job.j1.salary
        console.log('watchEffect指定的回调执行了')
    })

    return {
      sum,
      msg,
      person
    }
    }
}
</script>

