<template>
  <h1>一个人的信息</h1>
  <h2>name: {{person.name}}</h2>
  <h2>age: {{person.age}}</h2>
  <h2>工作种类: {{person.job.type}}</h2>
  <h2>工作薪水: {{person.job.salary}}</h2>
  <h2>多层嵌套: {{person.job.a.b.c}}</h2>
  <h2>数组: {{person.hobby}}</h2>
  <button @click="changeInfo">修改信息</button>
  <br>
  <br>
  <button @click="changeHobby">修改爱好</button>
</template>

<script>
import {reactive} from 'vue'

export default {
  name: 'App',
  setup() {
    /**
     * 对于基本数据类型，还是进行了【数据劫持】   使用 setter && getter   【Object.defineProperty】
     * 处理对象数据类型的数据，使用 ES6 中的 Proxy  ——> 对应Vue3中的 【reactive】函数，这个函数当中对Proxy进行了实现和封装
     * 
     * 通过 ref 定义的基本数据类型 都需要通过 【变量名.value】去进行修改   这样写起来就会非常冗余
     * ？？？？怎么解决呢
     * 面向对象的思想，将所有相关的属性封装到对象中，然后 【reactive(这个对象)】 然后直接通过 【对象.属性】去获取和设置值
     */

    // 响应式
    // job 经过ref处理后生成了 RefImpl{........value}
    // 这里 value是一个对象 P         roxy{type: '后端工程师', salary: '45k'}               【job.value获取对象】
    // 使用 reactive 处理后 直接返回  Proxy{type: '后端工程师', salary: '45k'}              【job直接是对象】


    // reactive 处理不了基本类型  只能传入对象
    // let number = reactive(666)

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

  // 返回一个对象
    return {
      person,
      changeInfo,
      changeHobby
    }
  }
}
</script>

