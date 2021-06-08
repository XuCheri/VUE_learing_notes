/*
 * @Author: your name
 * @Date: 2021-06-08 17:53:00
 * @LastEditTime: 2021-06-08 20:22:47
 * @LastEditors: Please set LastEditors
 * @Description: Vue的根组件
 * @FilePath: \VUE_learing_notes\工程练习\src\App.js
 */


import MyButton from "../components/MyButton.js"

const template = `
<div>
<h1>App组件</h1>
<MyButton />
</div>
`;

export default {
    components:{
        MyButton
    },
    template
}