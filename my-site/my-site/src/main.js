/*
 * @Author: your name
 * @Date: 2021-06-08 20:42:19
 * @LastEditTime: 2021-07-18 10:28:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\main.js
 */
import Vue from 'vue';
import App from './App.vue';
import "./styles/global.less";
import router from "./router";
import showMessage from "./utils/showMessage";
import "./mock"
import "./eventBus"
// Vue.config.productionTip = false

Vue.prototype.$showMessage = showMessage;

//注册全局指令
import vLoading from "./directives/loading"
Vue.directive("loading", vLoading);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
