<template>
  <div class="hello">
    <h1>{{ myParam }}</h1>
    <button @click="updateQueryParams">updateQueryParams</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  computed: {
    myParam() {
      return this.$route.query.myParam;
    },
  },
  methods: {
    // QUESTION: I want to prove that this function is called by stubbing it. I need to prevent the this.$router call, because it doesn't exist in a component test. 
    //  Or I need to know the right way of injecting it in a component test
    updateQueryParams() {
      this.$router
        .push({
          name: this.$route.name,
          query: {
            myParam: 'b'
          },
        })
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
