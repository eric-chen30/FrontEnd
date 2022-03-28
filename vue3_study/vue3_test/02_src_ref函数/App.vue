<template>
  <div>
    <h1>一个人的信息</h1>
    <h2>name: {{name}}</h2>
    <h2>age: {{age}}</h2>
    <h2>工作种类: {{job.type}}</h2>
    <h2>工作薪水: {{job.salary}}</h2>
    <button @click="changeInfo">修改信息</button>
  </div>
</template>

<script>
import {ref} from 'vue'

export default {
  name: 'App',
  setup() {
    /**
     * 对于基本数据类型，还是进行了【数据劫持】   使用 setter && getter   【Object.defineProperty】
     * 处理对象数据类型的数据，使用 ES6 中的 Proxy  ——> 对应Vue3中的 【reactive】函数，这个函数当中对Proxy进行了实现和封装
     */

    // 响应式
    // name 经过ref处理后生成了 RefImpl{........value}——>简称引用对象
    let name = ref('张三')
    // age 经过ref处理后生成了 RefImpl{........value}
    let age = ref(18)
    // job 经过ref处理后生成了 RefImpl{........value}
    // 这里 value是一个对象 Proxy{type: '后端工程师', salary: '45k'}
    let job = ref({
      type: '前端工程师',
      salary: '30k'
    })

    function changeInfo() {
      // name = "李四"
      // age = 48
      // 这里的 name、age 已经被封装成对象(引用对象)，向上面这种写法修改了变量值，但是没有实现双向绑定      
      console.log(name,age)
      // 修改
      name.value = "李四"
      age.value = 48
      
      job.value.type = '后端工程师'
      job.value.salary = '45k'
      console.log(name.value,age.value)
      console.log(job.value)          //Proxy{type: '后端工程师', salary: '45k'}
      console.log(job.value.type,job.value.salary)
    }

  // 返回一个对象
    return {
      name,
      age,
      changeInfo,
      job
    }
  }
}
</script>

