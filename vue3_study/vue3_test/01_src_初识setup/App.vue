<template>
  <div>
    <h1>一个人的信息</h1>
    <h1>name: {{name}}</h1>
    <h1>age: {{age}}</h1>
    <button @click="sayHello">Vue3-说话</button>
    <br>
    <br>
    <button @click="sayWelcome">Vue2说话</button>
    <br>
    <br>
    <button @click="test2">Vue2中的方法去访问vue3中定义的数据和方法</button>
    <br>
    <br>
    <button @click="test3">Vue3中的setup()去访问vue2中定义的数据和方法</button>
  </div>
</template>

<script>
// import {h} from 'vue'

export default {
  name: 'App',

  // vue2写法   return {} 一个对象，因此都是以键值对的形式进行数据定义
  data() {
    return {
      sex: '男'
    }
  },

  methods: {
    sayWelcome() {
      alert('欢迎')
    },

    test2() {
      console.log(this.sex)
      console.log(this.name)
      console.log(this.age)
      console.log(this.sayHello)
    }
  },

  // vue3写法
  setup() {
    let name = '张三'
    let age = 18

    function sayHello() {
      alert(`我叫${name},我${age}岁了！`)
    }

    function test3() {
      console.log(name)
      console.log(age)
      console.log(sayHello)
      console.log(this.sex)   // undefined  无法访问到vue2方式中的数据、方法
    }

  // 返回一个对象
    return {
      name,
      age,
      sayHello,
      test3
    }

  // 返回一个函数（渲染函数）
  // return () => {return h('h1', '尚硅谷')}
  }
}
</script>

