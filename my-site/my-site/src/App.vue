<!--
 * @Author: your name
 * @Date: 2021-06-08 20:42:19
 * @LastEditTime: 2021-06-10 01:38:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\App.vue
-->
<template>
  <div>
    <h1>App组件</h1>
    <Pager
      :current="current"
      :total="total"
      :visibleNumber="10"
      @pageChange="handlePageChange"
    />
  </div>
</template>

<script>
import Pager from "./components/Pager.vue";

export default {
  data() {
    return {
      current: 7,
      total: 300,
    };
  },
  components: {
    Pager,
  },
  methods: {
    handlePageChange(newPage) {
      if (newPage < 1) {
        newPage = 1;
      }
      if (newPage >= this.total) {
        newPage = this.total;
      }
      if(newPage === this.current){
        return;
      }
      this.current = newPage;
    },
  },
};
</script>

<style scoped>
</style>