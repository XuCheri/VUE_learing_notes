<!--
 * @Author: your name
 * @Date: 2021-06-11 23:40:03
 * @LastEditTime: 2021-06-11 23:47:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\components\Contact\test.vue
-->
<template>
  <div class="test-container">
    <Contact />
  </div>
</template>

<script>
import Contact from "./";
export default {
  components: {
    Contact,
  },
};
</script>

<style>
.test-container {
  width: 400px;
  height: 400px;
  border: 1px solid red;
  background: #000;
  padding-top: 200px;
  margin: 0 auto;
}
</style>