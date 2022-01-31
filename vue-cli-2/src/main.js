import Vue from "vue";
import App from "./App.vue";
import "./main.css";

import { BreadstickBakery } from "breadstick";

Vue.use(BreadstickBakery);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
