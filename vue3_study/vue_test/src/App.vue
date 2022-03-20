<template>
  <h1>一个人的信息</h1>
  <h2 v-show="person.name">name: {{person.name}}</h2>
  <h2>age: {{person.age}}</h2>
  <h2 v-show="person.sex">性别: {{person.sex}}</h2>
  <h2>工作种类: {{person.job.type}}</h2>
  <h2>工作薪水: {{person.job.salary}}</h2>
  <h2>多层嵌套: {{person.job.a.b.c}}</h2>
  <h2>数组: {{person.hobby}}</h2>
  <button @click="changeInfo">修改信息</button>
  <br>
  <br>
  <button @click="changeHobby">修改爱好</button>
  <br>
  <br>
  <button @click="addSex">添加sex属性</button>
  <br>
  <br>
  <button @click="deleteName">删除name属性</button>
</template>

<script>
import {reactive} from 'vue'

export default {
  name: 'App',
  setup() {
    let person = reactive({
      name: '张三',
      age: 18,
      job : {
        type: '前端工程师',
        salary: '30k',
        a: {
          b: {
            c: 666
          }
        }
      },
      hobby: ['smoke','drink','tangtou']

    })

    function changeInfo() {
      person.name = "李四"
      person.age = 48
      person.job.type = '后端工程师'
      person.job.salary = '45k'
    }

    function changeHobby(){
      person.hobby[0] = 'study'
      console.log(person.hobby)  // ['study', 'drink', 'tangtou']  修改了，但页面没有渲染
    }

    function addSex() {
      // 相对于Vue2  新增属性是响应式的
      person.sex = '男'
    }

    function deleteName() {
      delete person.name
    }

  // 返回一个对象
    return {
      person,
      changeInfo,
      changeHobby,
      addSex,
      deleteName
    }
  }
}
</script>

