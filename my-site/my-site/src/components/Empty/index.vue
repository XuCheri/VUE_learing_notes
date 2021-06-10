<!--
 * @Author: your name
 * @Date: 2021-06-11 00:07:48
 * @LastEditTime: 2021-06-11 00:46:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\components\Empty\Empty.vue
-->
<template>
  <div class="empty-container">
    <Icon type="empty" />
    <p>{{ text }}</p>
  </div>
</template>

<script>
import Icon from "../Icon/";
export default {
  props: {
    text: {
      type: String,
      default: "无数据",
    },
  },
  components: {
    Icon,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";
.empty-container {
  .self-center();
  color: @gray;
  text-align: center;
  .icon-container {
    font-size: 72px;
  }
}
</style>