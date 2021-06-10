<!--
 * @Author: your name
 * @Date: 2021-06-10 20:54:00
 * @LastEditTime: 2021-06-10 20:57:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\components\Avatar\test.vue
-->
<template>
  <div>
    <Avatar :src="src" :size="size" />
  </div>
</template>

<script>
import Avatar from "./";

export default {
  data() {
    return {
      src: "https://img1.baidu.com/it/u=3118418006,770648774&fm=26&fmt=auto&gp=0.jpg",
      size: 300,
    };
  },
  components: {
    Avatar,
  },
};
</script>

<style scoped>
</style>