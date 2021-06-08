<!--
 * @Author: your name
 * @Date: 2021-06-08 23:46:41
 * @LastEditTime: 2021-06-09 00:09:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\components\icon.vue
-->
<template>
  <i class="iconfont" :class="fontClass"></i>
</template>

<script>
const classMap = {
  home: "iconzhuye",
  success: "iconzhengque",
  error: "iconcuowu",
  close: "iconguanbi",
  warn: "iconjinggao",
  info: "iconxinxi",
  blog: "iconblog",
  code: "iconcode",
  about: "iconset_about_hov",
  weixin: "iconweixin",
  mail: "iconemail",
  github: "icongithub",
  qq: "iconsign_qq",
  arrowUp: "iconiconfonticonfonti2copy",
  arrowDown: "iconiconfonticonfonti2",
  empty: "iconempty",
  chat: "iconliuyan",
};
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed:{
      fontClass(){
          return classMap[this.type];
      }
  }
};
</script>

<style>
@import "//at.alicdn.com/t/font_2164449_nalfgtq7il.css";
</style>