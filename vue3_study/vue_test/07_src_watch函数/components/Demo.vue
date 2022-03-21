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
import {ref, watch, reactive} from 'vue'

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

    // 情况1：监听ref所定义的一个响应式的数据
      watch(sum, (newValue,oldVlue) => {
        console.log('sum变了', newValue,oldVlue)
      },{immediate: true})

    // 情况2：监听ref所定义的多个响应式的数据
      watch([sum,msg], (newValue, oldValue) => {
          console.log('sum,msg变了', newValue, oldValue)
      },{immediate: true})

    // 情况3：监听reactive所定义的响应式对象
    /**
     * 1. 注意：无法正确获取oldValue（监视对象一般获取不到oldValue）
     * 2. 注意：强制开启深度监视(deep配置无效)
     */
      watch(person,  (newValue,oldValue) => {
         console.log('change',newValue,oldValue)
      }, {deep: false})

    // 情况四：监听reactive所定义的响应数据中的某一个属性
      watch(()=>person.age,  (newValue,oldValue) => {
        console.log('age change',newValue,oldValue)
      })

    // 情况五：监听reactive所定义的响应数据中的某些属性
      watch([()=>person.age,() =>person.name],  (newValue,oldValue) => {
        console.log(newValue,oldValue)
      })

    // 特殊情况
      watch(()=>person.job, (newValue,oldValue)=> {
          console.log(newValue,oldValue)
      },{deep: true})  // 此处由于监视的是reactiive定义的对象中的某个属性（对象），所以deep配置有效

    return {
      sum,
      msg,
      person
    }
    }
}
</script>

