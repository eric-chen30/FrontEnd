<template>
  <div class="app">
    <h3>我是App组件</h3>
    <Child/>
  </div>
</template>


<script>
import Child from './components/Child'
export default {
  name: 'App',
  components:{Child},
}
</script>

<style scoped>
  .app{
    background-color: aqua;
    padding: 10px;
  }
</style>