/*
 * @Author: your name
 * @Date: 2021-06-15 15:43:43
 * @LastEditTime: 2021-06-15 16:17:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\router\index.js
 */
import Vue from "vue"
import VueRouter from "vue-router";
import routes from "./routes"

Vue.use(VueRouter);



const router = new VueRouter({
  routes,
  mode:"history"
})

export default router;