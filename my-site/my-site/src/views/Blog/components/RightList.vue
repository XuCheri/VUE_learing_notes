<!--
 * @Author: your name
 * @Date: 2021-07-14 12:08:28
 * @LastEditTime: 2021-07-16 00:05:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\views\Blog\components\RightList.vue
-->
<template>
  <ul class="right-list-container">
    <li v-for="(item, i) in list" :key="i">
      <span @click="handleClick(item)" :class="{ active: item.isSelect }">{{
        item.name
      }}</span>
      <span
        @click="handleClick(item)"
        v-if="item.aside"
        class="aside"
        :class="{ active: item.isSelect }"
        >{{ item.aside }}</span
      >
      <RightList :list="item.children" @select="handleClick" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "RightList",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleClick(item) {
      if (!item.isSelect) {
        this.$emit("select", item);
      }
    },
  },
};
</script>

<style scoped lang = "less">
@import url("~@/styles/var.less");
.right-list-container {
  list-style: none;
  padding: 0;
  .right-list-container {
    margin-left: 1em;
  }
  li {
    min-height: 40px;
    line-height: 40px;
    cursor: pointer;
    font-size: 14px;
    .active {
      color: @warn;
      font-weight: bold;
    }
  }
  .aside {
    font-size: 12px;
    margin-left: 1em;
    color: @gray;
  }
}
</style>