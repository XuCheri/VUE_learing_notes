/*
 * @Author: your name
 * @Date: 2021-06-08 20:19:31
 * @LastEditTime: 2021-06-08 20:20:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\工程练习\components\MyButton.js
 */

var template = `<button @click = "count++">当前点击了{{count}}下</button>`;
export default{
    data() {
        return {
            count: 0,
        };
    },
    template
}