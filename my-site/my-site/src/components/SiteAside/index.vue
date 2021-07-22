<!--
 * @Author: your name
 * @Date: 2021-06-14 00:16:06
 * @LastEditTime: 2021-07-22 22:58:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\components\SiteAside\index.vue
-->
<template>
  <div class="siteAside-container" v-if="data">
      <Avatar :src="data.avatar" :size="150" />
      <h1 class="title">{{ data.siteTitle }}</h1>
      <Menu />
      <Contact v-if="data" />
      <p v-if="data" class="footer">{{ data.icp }}</p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
import "@/styles/global.less";
import { mapState } from "vuex";
export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
  computed: mapState("setting", ["data"]),
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
.avatar-container {
  margin: 0 auto;
}
.footer {
  text-align: center;
  font-size: 12px;
}
.title {
  font-size: 1.2em;
  color: #fff;
  text-align: center;
}
</style>