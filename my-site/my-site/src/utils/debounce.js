/*
 * @Author: your name
 * @Date: 2021-07-18 10:31:18
 * @LastEditTime: 2021-07-18 10:38:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\utils\deBounce.js
 */
export default function (fn, duration = 1000) {
    let timer = null;
    return (...args) => {
        clearInterval(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, duration);
    }
}