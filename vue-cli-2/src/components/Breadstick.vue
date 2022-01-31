<template>
  <div id="app">
    <div class="logos">
      <img
        src="https://res.cloudinary.com/xtellar/image/upload/v1573767816/breadstick/breadstick-logo_r6fnan.png"
        width="150px"
      >
    </div>
    <h1>Breadstick</h1>
    <button @click="showNotification" class="btn" data-test="breadstick-button">Show Notification</button>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    this.showNotification();
  },
  methods: {
    showNotification() {
      this.$breadstick.notify("Top right pancakes", {
        position: "top-right"
      });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logos {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logos span {
  font-size: 2rem;
  font-weight: bold;
  margin: auto 20px;
}

img,
.vue {
  width: 150px;
  height: auto;
}

.btn {
  background: #1968ff;
  color: #fff;
  font-weight: 700;
  border-radius: 3px;
  outline: none;
  border: none;
  font-size: 1rem;
  padding: 0.8rem 1rem;
  margin: 0.5rem 0.8rem;
  transition: all 0.2s ease-in-out;
}

.btn:focus {
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.6);
}
</style>
