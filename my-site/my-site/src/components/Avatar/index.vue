<!--
 * @Author: your name
 * @Date: 2021-06-10 20:41:56
 * @LastEditTime: 2021-06-10 20:41:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\components\Avatar\index.vue
-->
<template>
  <img
    class="avatar-container"
    :src="src"
    :style="{
      width: size + 'px',
      height: size + 'px',
    }"
  />
</template>
<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
    },
  },
};
</script>
<style scoped>
.avatar-container {
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
</style>