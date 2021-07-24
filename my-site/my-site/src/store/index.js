/*
 * @Author: your name
 * @Date: 2021-07-22 21:34:16
 * @LastEditTime: 2021-07-24 17:25:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\store\index.js
 */
import Vuex from "vuex";
import Vue from "vue";
import banner from "./banner";
import setting from "./setting";
import about from "./about";
import project from "./project";
if (!window.Vuex) {
    Vue.use(Vuex);
}

export default new Vuex.Store({
    modules: {
        banner,
        setting,
        about,
        project,
    },
    strict: true,
})