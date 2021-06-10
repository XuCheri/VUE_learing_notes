<!--
 * @Author: your name
 * @Date: 2021-06-11 00:47:34
 * @LastEditTime: 2021-06-11 00:55:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\components\Imageloader\index.vue
-->
<template>
  <div class="ImagerLoader-container">
      
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
};
</script>

<style>
</style>