<template>
  <div class="son">
      <Dialog/>
      <h3>我是Son组件</h3>
  </div>
</template>


<script>
import Dialog from './Dialog.vue'
export default {
    name: 'Son',
    components: {Dialog}
}
</script>

<style scoped>
  .son{
    background-color: fuchsia;
    padding: 10px;
  }
</style>