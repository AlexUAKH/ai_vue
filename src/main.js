import Vue from "vue";
import App from "./App.vue";
import router from "./router";

//import css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/css/component-custom-switch.css";
import "./assets/css/style.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
