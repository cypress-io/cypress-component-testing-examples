<template>
  <div>
    <button @click="increment">Increment</button>
    <p>Total clicks: {{ count }}</p>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const increment = () => ++count.value

    return { count, increment }
  }
}
</script>