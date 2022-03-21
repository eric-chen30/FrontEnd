<template>
  <Demo @hello="showHelloMsg" msg="Hello" school="HUBU">
    <template v-slot:aaa>
      <span>slot</span>
    </template>
    <template v-slot:bbb>
      <span>slot</span>
    </template>
  </Demo>
</template>

<script>
import  Demo  from './components/Demo'

export default {
  name: 'App',
  components: {Demo},

  setup() {
    function showHelloMsg(value) {
      alert(`你好呀,你触发了Hello事件,我收到的参数是：${value}`)
    }

    return {
      showHelloMsg
    }
  }
}
</script>

