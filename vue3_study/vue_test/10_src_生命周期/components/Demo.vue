<template>
  <h2>当前的求和为：{{sum}}</h2>
  <button @click="sum++">数量+1</button>
</template>

<script>
import {ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue'

export default {
    name: 'Demo',

    setup() {
        let sum = ref(0)  
        
        // 通过组合式API的形式使用生命周期函数
        onBeforeMount(() => {
            console.log('--------onBeforeMount------')
        })
        onMounted(() => {
            console.log('--------onMounted------')
        })
        onBeforeUpdate(() => {
            console.log('--------onBeforeUpdate------')
        })
        onUpdated(() => {
            console.log('--------onUpdated------')
        })
        onBeforeUnmount(() => {
            console.log('--------onBeforeUnmount------')
        })
        onUnmounted(() => {
            console.log('--------onUnmounted------')
        })

        // return 要放到setup的尾部
        return {sum}

    },

    // #region
    // beforeCreate() {
    //     console.log('---------beforeCreate--------')
    // },
    // created() {
    //     console.log('---------created--------')
    // },
    // beforeMount() {
    //     console.log('---------beforeMount--------')
    // },
    // mounted() {
    //     console.log('---------mounted--------')
    // },
    // beforeUpdate() {
    //     console.log('---------beforeUpdate--------')
    // },
    // updated() {
    //     console.log('---------updated--------')
    // },
    // // beforeDestory  &&  destoryed 在vue3中不生效
    // beforeUnmount() {
    //     console.log('---------beforeUnmount--------')
    // },
    // unmounted() {
    //     console.log('---------unmounted--------')
    // }
    // #endregion
}
</script>

