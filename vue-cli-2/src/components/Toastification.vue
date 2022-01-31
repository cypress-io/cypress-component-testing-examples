<template>
  <div id="app">
    <h1>Toastification</h1>
    <button @click="showToastification" class="btn" data-test="toastification-button">Show Toastification</button>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    showToastification() {
      this.$toast("I'm a toast!", {
        position: "top-right",
        timeout: 5000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        closeButton: "button",
        icon: true,
        rtl: false
      });
    }
  }
};
</script>

