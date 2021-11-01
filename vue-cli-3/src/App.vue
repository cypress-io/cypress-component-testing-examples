<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p data-test="count">{{count}}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data (){
    return {
      count: 0
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    increment() {
      this.count = count + 1
    }
  }
}
</script>

<style>
#app {
  margin-top: 60px;
}
</style>
