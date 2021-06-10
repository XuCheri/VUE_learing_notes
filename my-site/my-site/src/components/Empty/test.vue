<!--
 * @Author: your name
 * @Date: 2021-06-11 00:11:55
 * @LastEditTime: 2021-06-11 00:46:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\components\Empty\test.vue
-->
<template>
  <div class="test-container">
      <Empty  />
  </div>
</template>

<script>
import Empty from "../Empty/"
export default {
    components:{
        Empty
    }
}
</script>

<style>
.test-container{
    width: 300px;
    height: 300px;
    border:1px black solid;
    left: 200px;
    position: relative;
}
</style>