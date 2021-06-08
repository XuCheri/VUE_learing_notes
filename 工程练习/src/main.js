/*
 * @Author: your name
 * @Date: 2021-06-08 17:48:08
 * @LastEditTime: 2021-06-08 20:18:08
 * @LastEditors: Please set LastEditors
 * @Description: 入口模块文件,创建vue实例
 * @FilePath: \VUE_learing_notes\工程练习\src\main.js
 */

import Vue from "./vue.browser.js";
import App from "./App.js"

new Vue({
    render: (h) => h(App),
}).$mount("#app");