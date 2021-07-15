<!--
 * @Author: your name
 * @Date: 2021-07-14 12:21:20
 * @LastEditTime: 2021-07-14 13:17:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\views\Blog\components\RightList-test.vue
-->
<template>
  <RightList :list="list" @select="handleSelect" />
</template>

<script>
import RightList from "./RightList.vue";
export default {
  components: {
    RightList,
  },
  data() {
    return {
      list: [
        {
          name: "a",
          isSelect: false,
        },
        {
          name: "b",
          isSelect: false,
        },
        {
          name: "c",
          isSelect: true,
          children: [
            { name: "c-1", isSelect: false },
            {
              name: "c-2",
              isSelect: false,
              children: [
                { name: "c-2-1", isSelect: false },
                { name: "c-2-2", isSelect: false },
                { name: "c-2-3", isSelect: false },
                { name: "c-2-4", isSelect: false },
              ],
            },
            { name: "c-3", isSelect: false },
            { name: "c-4", isSelect: false },
          ],
        },
        {
          name: "d",
          isSelect: false,
        },
      ],
    };
  },
  methods:{
      handleSelect(item){
          console.log(item);
      }
  }
};
</script>

<style>
</style>