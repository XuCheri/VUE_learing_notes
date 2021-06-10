<!--
 * @Author: your name
 * @Date: 2021-06-10 20:45:54
 * @LastEditTime: 2021-06-10 20:46:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\components\Pager\test.vue
-->
<template>
  <div>
    <Pager
      :current="current"
      :total="total"
      :visibleNumber="10"
      @pageChange="handlePageChange"
    />
  </div>
</template>

<script>
import Pager from "./";

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