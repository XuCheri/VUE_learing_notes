<!--
 * @Author: your name
 * @Date: 2021-06-08 21:03:57
 * @LastEditTime: 2021-06-09 16:09:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\components\Avatar.vue
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