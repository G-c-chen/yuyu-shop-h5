import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'lib-flexible/flexible.js'

import {Sticky, Popup, Lazyload, Image as VanImage} from 'vant';
Vue.use(Sticky);
Vue.use(Popup);
Vue.use(Lazyload);
Vue.use(VanImage);

import "vant/lib/index.css";


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
