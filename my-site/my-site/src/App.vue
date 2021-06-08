<!--
 * @Author: your name
 * @Date: 2021-06-08 20:42:19
 * @LastEditTime: 2021-06-09 00:20:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\App.vue
-->
<template>
  <div>
    <h1>App组件</h1>
    <Avatar
      src="https://img2.baidu.com/it/u=860747650,3685523174&fm=26&fmt=auto&gp=0.jpg"
      :size="100"
    />
    <Icon type="home" />
    <HelloWorld msg="vue" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue"
import Avatar from "./components/Avatar.vue";
import Icon from "./components/Icon.vue";
export default {
  components: {
    Avatar,
    Icon,
    HelloWorld,
  },
};
</script>

<style>
.iconfont {
  font-size: 32px;
  color: red;
}
</style>