import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

/* 兼容低版本浏览器 */
import "babel-polyfill";

/* 引入normalize.css */
import "normalize.css";

/* 引入element-ui */
import elementUi from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(elementUi);

/* 引入注册moment */
import moment from "moment";
moment.locale("zh-cn");
Vue.prototype.$moment = moment;

/* 引入全局组件注册 */
import "./components";

/* 引入全局filter */
import * as filters from "./filters";
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
