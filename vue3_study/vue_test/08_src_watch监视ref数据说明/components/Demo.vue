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
      let person = ref({
          name: '张三',
          age: 18,
          job: {
              j1:{
                  salary: 20
              }
          }
      })

      watch(sum, (newValue, oldValue) =>{
          console.log('sum change')
      })

      console.log(person)  // RefImpl{......} 中的value为 Proxy
    //   watch(person.value, (newValue, oldValue) => {
    //       console.log('person change',newValue,oldValue)
    //   })

      watch(person, (newValue, oldValue) => {
          console.log('person change',newValue,oldValue)
      },{deep: true})

    return {
      sum,
      msg,
      person
    }
    }
}
</script>

