<template>
  <div>
    <p data-test="count">Total clicks: {{ count }}</p>
    <button @click="increment">increment</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    count: 0,
  }),

  methods: {
    increment() {
      this.count++
    },
  },
}
</script>