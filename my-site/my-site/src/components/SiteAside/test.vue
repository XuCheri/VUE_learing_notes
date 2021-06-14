<!--
 * @Author: your name
 * @Date: 2021-06-14 00:16:13
 * @LastEditTime: 2021-06-14 00:36:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\components\SiteAside\test.vue
-->
<template>
  <div class="test-container">
      <SiteAside />
  </div>
</template>

<script>
import SiteAside from "./"
export default {
    components:{
        SiteAside,
    }
}
</script>

<style>
.test-container{
    width: 250px;
    height: 600px;
    border: 2px solid;
    margin: 0 auto;
}
</style>