<!--
 * @Author: your name
 * @Date: 2021-06-12 00:52:28
 * @LastEditTime: 2021-06-14 00:14:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\components\Menu\index.vue
-->
<template>
  <nav class="menu-container">
    <a
      v-for="item in items"
      :key="item.link"
      :href="item.link"
      :class="{
        selected: isSelected(item),
      }"
    >
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{ item.title }}</span>
    </a>
  </nav>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        {
          link: "/",
          title: "首页",
          icon: "home",
        },
        {
          link: "/blog",
          title: "文章",
          icon: "blog",
          startWith: true,
        },
        {
          link: "/about",
          title: "关于我",
          icon: "about",
        },
        {
          link: "/project",
          title: "项目&效果",
          icon: "code",
        },
        {
          link: "/message",
          title: "留言板",
          icon: "chat",
        },
      ],
    };
  },
  methods: {
    isSelected(item) {
      var link = item.link.toLowerCase();
      var curPathname = location.pathname.toLowerCase();
      return item.startWith ? curPathname.startsWith(link) : curPathname === link;
    },
  },
};
</script>

<style lang="less" scoped>
@import url("~@/styles/var.less");
.menu-container {
  color: @gray;
  margin: 24px 0;
  a {
    padding: 0 50px;
    display: flex;
    align-items: center;
    height: 45px;
    .icon {
      width: 24px;
    }
    &:hover {
      color: #fff;
    }
    &.selected {
      background: #2d2d2d;
    }
  }
}
</style>