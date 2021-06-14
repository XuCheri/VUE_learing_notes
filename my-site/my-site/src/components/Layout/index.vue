<!--
 * @Author: your name
 * @Date: 2021-06-14 23:32:34
 * @LastEditTime: 2021-06-14 23:45:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\components\Layout\index.vue
-->
<template>
  <div class="layout-container">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="main">
      <slot></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang = "less">
.layout-container {
  width: 100%;
  height: 100%;
  display: flex;
  .left,.right {
    flex: 0 0 auto;
  }
  .main{
      flex: 1 1 auto;
      overflow: hidden;
  }
}
</style>