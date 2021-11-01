<script>
export default {
  template: `
    <div>
      <button @click="count++">Increment</button>
      <p>Total clicks: {{ count }}</p>
    </div>
  `,
  data() {
    return { count: 0 }
  }
}
</script>