/*
 * @Author: your name
 * @Date: 2021-06-08 20:42:19
 * @LastEditTime: 2021-06-15 15:44:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\main.js
 */
import Vue from 'vue';
import App from './App.vue';
import "./styles/global.less";
import router from "./router"

// Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
