<!--
 * @Author: your name
 * @Date: 2021-06-14 23:32:38
 * @LastEditTime: 2021-06-14 23:47:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\components\Layout\test.vue
-->
<template>
  <div class="test-container">
      <Layout>
          <template #left>
              <div class="left">
                  左边栏区域，宽度适应内容，隐藏溢出
              </div>
          </template>
          <template>
              <div class="main">
                  主区域，宽度占满剩余空间，溢出隐藏
              </div>
          </template>
          <template #right>
              <div class="right">
                  右边栏区域，宽度适应内容，隐藏溢出
              </div>
          </template>

      </Layout>
  </div>
</template>

<script>
import Layout from "./"
export default {
    components:{
        Layout,
    }
}
</script>

<style scoped>
.test-container{
    width: 1000px;
    height: 600px;
    border: 2px solid;
    margin: 0 auto;
}
.left{
    width: 200px;
    height: 100%;
    background: lightcoral;
}
.main{
    width: 100%;
    height: 100%;
    background: lightgreen;
}
.right{
    width: 150px;
    height: 100%;
    background: lightblue;
}
</style>