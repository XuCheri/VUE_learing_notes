<!--
 * @Author: your name
 * @Date: 2021-06-10 20:53:54
 * @LastEditTime: 2021-06-10 21:14:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\components\Icon\test.vue
-->
<template>
  <div class="test-container">
    <div class="item" v-for="t in types" :key="t">
      <Icon :type="t" />
      <label>{{ t }}</label>
    </div>
  </div>
</template>

<script>
import Icon,{types} from "./";

export default {
  data() {
    return {
      types,
    };
  },
  components: {
    Icon,
  },
};
</script>

<style scoped lang="less">
.test-container{
    display: flex;
    justify-content: center;
    width: 580px;
    flex-wrap: wrap;
    margin: 30px auto;
    .item{
        margin: 1em;
        text-align: center;
    }
    label{
        display: block;
    }
}
</style>