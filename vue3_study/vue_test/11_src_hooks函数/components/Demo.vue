<template>
  <h2>当前的求和为：{{sum}}</h2>
  <button @click="sum++">数量+1</button>
  <hr>
  <h2>当前点击时鼠标的坐标为</h2> 
  <h2>x:{{point.x}}</h2>  
  <h2>y:{{point.y}}</h2>   
</template>

<script>
import {ref} from 'vue'
import usePoint from '../hooks/usePoint'
export default {
    name: 'Demo',

    setup() {
        let sum = ref(0)  
       let point = usePoint()
    
        return {
            sum,
            point
        }

    },

}
</script>

