<!--
 * @Author: your name
 * @Date: 2021-07-13 16:53:10
 * @LastEditTime: 2021-07-13 17:09:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\components\Loading\index.vue
-->
<template>
  <img class="loading-container" src="@/assets/loading.svg" alt="" />
</template>

<script>
export default {};
</script>

<style scoped lang = "less">
@import url("~@/styles/mixin.less");
.loading-container {
  .self-center();
}
</style>