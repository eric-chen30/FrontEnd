<template>
  <h3>{{person}}</h3>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪资{{job.j1.salary}}K</h2>
  <button @click="name += '^'">监听姓名</button>
  <button @click="age++">监听年龄</button>
  <button @click="job.j1.salary++">监听薪水</button>
  <br>
  <br>
  <button @click="x++">基本类型x+1</button>
  <h2>{{x}}</h2>
  <br>
  <br>
  <button @click="y = {count:666}">直接替换对象</button>
  <h2>{{y.count}}</h2>
</template>

<script>
import {ref,reactive,toRef,toRefs,shallowReactive,shallowRef} from 'vue'

export default {
    name: 'Demo',

    setup() {
      
      // shallowReactive  只考虑对象第一层数据的响应式
      // shallowRef       只能处理基本数据类型的响应式，不进行对象的响应式处理

      let person = shallowReactive({
          name: '张三',
          age: 18,
          job: {
              j1:{
                  salary: 20
              }
          }
      })

      let x = shallowRef(0)
      console.log(x)

      let y = shallowRef({
          count: 0
      })

      console.log(y)   // value: Object

    return {
      person,
      // 使用 toRefs
      ...toRefs(person),
      x,
      y
    }
    }
}
</script>

