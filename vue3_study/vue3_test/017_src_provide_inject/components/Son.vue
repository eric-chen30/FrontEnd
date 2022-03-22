<template>
  <div class="son">
      <h3>我是Son组件(孙),{{sonCar.name}}--{{sonCar.price}}</h3>
  </div>
</template>


<script>
import { inject } from 'vue';
    export default {
        name: 'Son',

        setup() {
           let sonCar = inject('car')
           return {sonCar}
        }
    }
</script>

<style scoped>
  .son{
    background-color: fuchsia;
    padding: 10px;
  }
</style>