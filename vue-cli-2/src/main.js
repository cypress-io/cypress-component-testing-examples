import Vue from "vue";
import App from "./App.vue";
import "./main.css";

import { BreadstickBakery } from "breadstick";

Vue.use(BreadstickBakery);

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const options = {
  // You can set your default options here
};

Vue.use(Toast, options);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
