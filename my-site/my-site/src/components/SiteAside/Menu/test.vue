<!--
 * @Author: your name
 * @Date: 2021-06-12 00:52:34
 * @LastEditTime: 2021-06-13 23:54:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\components\Menu\test.vue
-->
<template>
  <div class="test-container">
    <Menu />
  </div>
</template>

<script>
import Menu from "./";
import "@/styles/global.less";
export default {
  components: { Menu },
};
</script>

<style>
.test-container {
  width: 400px;
  height: 600px;
  border: 2px solid red;
  background: #000;
  margin: 0 auto;
}
</style>