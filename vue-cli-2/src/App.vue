<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Counter />
    <Datepicker />
    <Breadstick />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Counter from './components/Counter.vue'
import Datepicker from './components/Datepicker.vue'
import Breadstick from './components/Breadstick.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Counter,
    Datepicker,
    Breadstick
  }
}
</script>

<style>
#app {
  margin-top: 60px;
}
</style>
