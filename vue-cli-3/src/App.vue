<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Counter />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Counter from './components/Counter.vue'

export default {
  name: 'App',
  data (){
    return {
      count: 0
    }
  },
  components: {
    HelloWorld,
    Counter
  }
}
</script>

<style>
#app {
  margin-top: 60px;
}
</style>
