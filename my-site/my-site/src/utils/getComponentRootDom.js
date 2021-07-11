/*
 * @Author: your name
 * @Date: 2021-07-11 09:19:37
 * @LastEditTime: 2021-07-11 09:20:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\utils\getComponentRootDom.js
 */

import Vue from "vue";
/**
    获取某个组件渲染的Dom根元素
  */
export default function (comp, props) {
    const vm = new Vue({
        render: h => h(comp, {
            props
        })
    })
    vm.$mount();
    return vm.$el;
}