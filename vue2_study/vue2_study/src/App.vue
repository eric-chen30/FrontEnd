<template>
  <div>
    <h1>这里是Vue2</h1>
    <h2 v-show="person.name">姓名: {{person.name}}</h2>
    <h2>年龄: {{person.age}}</h2>
    <h2 v-show="person.sex">姓名: {{person.sex}}</h2>
    <h2>{{person.hobby}}</h2>
    <button @click="addSex">添加sex属性</button>
    <button @click="deleteName">删除name属性</button>
    <button @click="updateHobby">修改hobby的第一项</button>
  </div>
</template>

<script>
// import Vue from 'vue'

export default {
  name: 'App',

  data() {
    return {
      person: {
        name: '张三',
        age: 18,
        hobby: ['study', 'sleep', 'eat']
      }
    }
  },

  methods: {
    addSex() {
      // console.log(this.person.sex)  // undefined
      // this.person.sex = '女'
      // console.log(this.person.sex)  // 有值，但是没有渲染

      this.$set(this.person, 'sex', '女')
      // Vue.set(this.person, 'sex', '女')    // 这种方式也可以，但是需要引入 Vue 组件
    },
    deleteName() {
      // console.log(this.person.name)  // 张三
      // delete this.person.name        // 数据改变，页面不更新  defineProperty检测不到,其中包含get和set获取和设置，对于新增和删除无法检测
      // console.log(this.person.name)  // undefined

      this.$delete(this.person, 'name')
      // Vue.delete(this.person, 'name')
    },
    updateHobby() {
      // this.person.hobby[0] = '逛街'
      this.$set(this.person.hobby, 0, '逛街')
      // this.person.hobby.splice(0, 1, '逛街')  // 调用数组的方法也可以

    }
  }
}
</script>
