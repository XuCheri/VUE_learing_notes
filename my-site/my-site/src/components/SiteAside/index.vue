<!--
 * @Author: your name
 * @Date: 2021-06-14 00:16:06
 * @LastEditTime: 2021-06-14 23:14:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\components\SiteAside\index.vue
-->
<template>
  <div class="siteAside-container">
    <div class="avatar">
      <Avatar
        src="https://img1.baidu.com/it/u=3118418006,770648774&fm=26&fmt=auto&gp=0.jpg"
        :size="150"
      />
    </div>
    <h1 class="title">Cheri的小窝</h1>
    <Menu />
    <Contact />
    <p class="footer">
      黑ICP备17001719号
    </p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
import "@/styles/global.less";
export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
};
</script>

<style lang ="less" scoped>
@import url("~@/styles/var.less");
.siteAside-container {
  width: 100%;
  height: 100%;
  background: @dark;
  padding: 20px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}
.avatar-container{
  margin: 0 auto;
}
.footer{
  text-align: center;
  font-size: 12px;
}
.title{
  font-size: 1.2em;
  color: #fff;
  text-align: center;
}
</style>