/*
 * @Author: your name
 * @Date: 2021-06-15 15:43:43
 * @LastEditTime: 2021-07-23 18:56:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\router\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import {
  titleControler
} from "@/utils";

Vue.use(VueRouter);



const router = new VueRouter({
  routes,
  mode: "history"
})

router.afterEach((to, from) => {
  if (to.meta.title) {
    titleControler.setRouteTitle(to.meta.title);
  }
})

export default router;