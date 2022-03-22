<template>
  <div class="app">
    <h3>我是App组件</h3>
    <Suspence>
      <!-- 需要展示的组件 -->
      <template v-slot:default>
        <Child/>
      </template>
      <!-- 默认展示组件 -->
      <template v-slot:fallback>
        <h3>稍等,加载中.......</h3>
      </template>
    </Suspence>
  </div>
</template>


<script>
  // import Child from './components/Child'   // 静态引入  需要等最慢的组件渲染完后同时渲染
  import {defineAsyncComponent} from 'vue'    // 异步引入  先渲染完的组件先显示
  const Child = defineAsyncComponent(() => 
    import('./components/Child')
  )
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