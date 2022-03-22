<template>
    <div class="child">
        <h3>我是Child组件(子):{{childCar.name}}-{{childCar.price}}</h3>
        <Son/>
    </div>
</template>


<script>
import {inject} from 'vue'
import Son from './Son.vue'
export default {
    name: 'Child',
    components: {Son},

    setup() {
    let childCar = inject('car')
    console.log(childCar)

    return {childCar}
    },

    
}

    
</script>

<style scoped>
  .child{
    background-color: tomato;
    padding: 10px;
  }
</style>