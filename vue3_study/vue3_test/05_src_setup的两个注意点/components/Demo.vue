<template>
  <h1>一个人的信息</h1>
  <h2>name: {{person.name}}</h2>
  <h2>age: {{person.age}}</h2>
  <button @click="test">测试触发一下Demo组件的Hello事件</button>
</template>

<script>
import {reactive} from 'vue'

export default {
  name: 'Demo',
  props: ['msg', 'school'],
  emits: ['hello'],

// 验证 setup 的生命周期在 beforeCreate 之前 
//   beforeCreate() {
//       console.log('------beforeCreate-----')
//   },

  setup(props,context) {
      // props:   Proxy {msg: 'Hello', school: 'HUBU'}
      // context: {expose: ƒ}
      console.log('----setup----',props,context)   
      console.log(context.slots)   
    let person = reactive({ 
      name: '张三',
      age: 18,
    })

    function test() {
        context.emit('hello',666)
    }

  // 返回一个对象
    return {
      person,
      test
    }
  }
}
</script>

