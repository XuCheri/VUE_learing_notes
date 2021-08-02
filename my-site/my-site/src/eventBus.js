/*
 * @Author: your name
 * @Date: 2021-07-18 08:55:24
 * @LastEditTime: 2021-07-31 16:40:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\eventBus.js
 */

// const listeners = {};

// //事件总线
// export default {
//     //监听某一个事件
//     $on(eventName, handler) {
//         if (!listeners[eventName]) {
//             listeners[eventName] = new Set();
//         }
//         listeners[eventName].add(handler);
//     },
//     //取消监听
//     $off(eventName, handler) {
//         if (!listeners[eventName]) {
//             return;
//         }
//         listeners[eventName].delete(handler);
//     },
//     //触发事件
//     $emit(eventName, ...args) {
//         if (!listeners[eventName]) {
//             return;
//         };
//         for (const handler of listeners[eventName]) {
//             handler(...args);
//         }
//     }
// }

import Vue from "vue";
const app = new Vue({});
Vue.prototype.$bus = app;
export default app;