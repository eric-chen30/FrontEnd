<template>
  <h2>{{sum}}</h2>
  <button @click="sum++">sum++</button>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪资{{job.j1.salary}}K</h2>
  <button @click="name += '^'">监听姓名</button>
  <button @click="age++">监听年龄</button>
  <button @click="job.j1.salary++">监听薪水</button>
</template>

<script>
import {ref,reactive,toRefs,readonly,shallowReadonly} from 'vue'

export default {
    name: 'Demo',

    setup() {
      
      let sum = ref(0)
      let person = reactive({
          name: '张三',
          age: 18,
          job: {
              j1:{
                  salary: 20
              }
          }
      })
      
    // 将 person 中的属性设为只读
    //   person = readonly(person)
    
    // 只能将对象最外层属性变为只读
      person=shallowReadonly(person)

    return {
        sum,
      ...toRefs(person),
    }
    }
}
</script>

