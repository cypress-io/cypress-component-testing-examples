<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Counter />
    <Datepicker />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Counter from './components/Counter.vue'
import Datepicker from './components/Datepicker.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Counter,
    Datepicker
  }
}
</script>

<style>
#app {
  margin-top: 60px;
}
</style>
