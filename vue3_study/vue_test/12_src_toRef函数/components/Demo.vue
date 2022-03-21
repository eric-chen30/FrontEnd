<template>
  <h3>{{person}}</h3>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪资{{job.j1.salary}}K</h2>
  <button @click="name += '^'">监听姓名</button>
  <button @click="age++">监听年龄</button>
  <button @click="job.j1.salary++">监听薪水</button>
</template>

<script>
import {ref,reactive,toRef,toRefs} from 'vue'

export default {
    name: 'Demo',

    setup() {
      let person = reactive({
          name: '张三',
          age: 18,
          job: {
              j1:{
                  salary: 20
              }
          }
      })

    //   const name1 = person.name;
    //   console.log('直接赋值:' , name1)

    //   const name2 = toRef(person, 'name')
    //   console.log('toRef:' , name2)   // ObjectRefImpl

    const personToRefs = toRefs(person)
    console.log(personToRefs)

    return {
      person,

      // 使用 toRefs
      ...toRefs(person)
      
    // 使用 toRef 相当于引用了 person 响应对象，之间存在引用关系
    //   name: toRef(person, 'name'),
    //   age: toRef(person, 'age'),
    //   salary: toRef(person.job.j1, 'salary'),
     
    // 读取了person中的属性 打包成了一个新的ref 与之前的person响应对象没有引用关系了
    //   name: ref(person.name),
    //   age: ref(person.age),
    //   salary: ref(person.job.j1.salary)
    }
    }
}
</script>

