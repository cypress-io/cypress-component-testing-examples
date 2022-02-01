<template>
  <div class="hello">
    
    <h1>This component reads from and writes to a query param</h1>
    <div>{{ myParam }}</div>

    <button @click="updateQueryParams">updateQueryParams</button>
  </div>
</template>

<script>
export default {
  name: "RouterExample",
  props: {
    msg: String,
  },
  computed: {
    // Current value of myParam
    myParam() {
      return this.$route.query.myParam;
    },
  },
  methods: {
    // Sets a new value
    updateQueryParams() {
      this.$router
        .push({
          name: this.$route.name,
          query: {
            myParam: 'newVal'
          },
        })
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
