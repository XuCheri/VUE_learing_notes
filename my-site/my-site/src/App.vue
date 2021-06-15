<!--
 * @Author: your name
 * @Date: 2021-06-08 20:42:19
 * @LastEditTime: 2021-06-15 15:37:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\App.vue
-->
<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      <template>
        <Router-view />  
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./components/Layout";
import SiteAside from "./components/SiteAside";
export default {
  components: {
    Layout,
    SiteAside,
  },
};
</script>

<style scoped lang="less">
@import url("~@/styles/mixin.less");
.app-container {
  .self-fill(fixed);
}
.aside{
  width: 250px;
  height: 100%;
}
</style>