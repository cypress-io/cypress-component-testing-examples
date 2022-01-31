<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Counter />
    <Datepicker />
    <Breadstick />
    <Toastification />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Counter from './components/Counter.vue'
import Datepicker from './components/Datepicker.vue'
import Breadstick from './components/Breadstick.vue'
import Toastification from './components/Toastification.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Counter,
    Datepicker,
    Breadstick,
    Toastification
  }
}
</script>

<style>
#app {
  margin-top: 60px;
}
</style>
