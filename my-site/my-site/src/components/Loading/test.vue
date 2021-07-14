<!--
 * @Author: your name
 * @Date: 2021-07-13 16:56:27
 * @LastEditTime: 2021-07-13 17:11:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\components\Loading\test.vue
-->
<template>
  <div style="position: relative">
    <Loading    v-if="isLoading" />
    <button @click="isLoading = !isLoading">切换显示/隐藏</button>
  </div>
</template>

<script>
import Loading from "./";
export default {
  components: {
    Loading,
  },
  data() {
    return {
      isLoading: true,
    };
  },
};
</script>

<style>
</style>