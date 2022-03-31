import Vue from "vue";
import App from "./App.vue";
import ElementUI from 'element-ui';
import VueCompositionApi from '@vue/conposition-api' 
import 'element-ui/lib/theme-chalk/index.css';
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(ElementUI);

Vue.use(VueCompositionApi)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
