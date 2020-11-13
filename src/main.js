import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueFilterDateFormat from "vue-filter-date-format";
import { ValidationProvider, extend, ValidationObserver } from "vee-validate";
import { required } from "vee-validate/dist/rules";
import "./registerServiceWorker";
Vue.use(VueFilterDateFormat);
Vue.use(BootstrapVue);
extend("required", required);
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
Vue.config.productionTip = false;
new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount("#app");
