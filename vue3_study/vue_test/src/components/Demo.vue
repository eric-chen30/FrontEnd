<template>
  <h2>{{sum}}</h2>
  <button @click="sum++">sum++</button>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪资{{job.j1.salary}}K</h2>
  <button @click="name += '^'">监听姓名</button>
  <button @click="age++">监听年龄</button>
  <button @click="job.j1.salary++">监听薪水</button>
  <br>
  <br>
  <button @click="showRawPerson">非响应式原生对象</button>
  <br>
  <br>
  <button @click="addCar">添加车</button>
  <button @click="person.car.name += '!'">改车名</button>
  <button @click="person.car.price++">改价格</button>
  <h3 v-show="person.car">{{person.car}}</h3>
</template>

<script>
import {ref,reactive,toRefs,toRaw,markRaw} from 'vue'

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
      
      // toRaw只能处理 reactive 处理的数据,处理后将响应对象转换为普通对象
      // 对普通对象的操作，不会引起页面刷新
      function showRawPerson() {
          const p = toRaw(person)
          console.log(p)
      }

      function addCar() {
          // 添加的属性也是影响式的
          let car = {name:'奔驰', price: 40}
        //   person.car = car

        // car 通过 markRwa进行处理后，car中的属性不再是响应式的
        // 数据在改变，但是不是响应的，因此无法捕获进行页面渲染
        person.car = markRaw(car)
      }

    return {
      sum,
      person,
      ...toRefs(person),
      showRawPerson,
      addCar
    }
    }
}
</script>

