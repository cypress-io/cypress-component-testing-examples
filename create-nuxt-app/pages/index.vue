<template>
  <div>
    <Counter />
    <Tutorial />
  </div>
</template>

<script>
import Tutorial from '../components/Tutorial.vue'
import Counter from '../components/Counter.vue'

export default {
  components: {
    Counter,
    Tutorial
  }
}
</script>
