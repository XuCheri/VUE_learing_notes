<!--
 * @Author: your name
 * @Date: 2021-06-11 00:47:39
 * @LastEditTime: 2021-06-11 15:05:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\components\Imageloader\test.vue
-->
<template>
  <div class="test-container">
      <ImageLoader
      src="https://img1.baidu.com/it/u=3118418006,770648774&fm=26&fmt=auto&gp=0.jpg"
      placeholder="https://img1.baidu.com/it/u=1836487637,1052791322&fm=26&fmt=auto&gp=0.jpg"
      :duration="3000"
      @load="handleLoaded"
       />
  </div>
</template>

<script>
import ImageLoader from "./";
export default {
  components: {
    ImageLoader,
  },
  methods:{
    handleLoaded(){
      console.log("ImageLoader加载完成");
    },
  }
};
</script>

<style scoped>
.test-container{
  width: 500px;
  height: 400px;
  border:2px solid;
  margin: 0 auto;
}
</style>