<!--
 * @Author: your name
 * @Date: 2021-06-15 15:21:15
 * @LastEditTime: 2021-07-11 23:40:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\views\Home\index.vue
-->
<template>
  <div class="home-container" ref="container">
    <ul class="carousel-container" :style="{ marginTop }">
      <li v-for="item in banners" :key="item.id">
        <Carouselitem />
      </li>
    </ul>
    <div v-show="index >= 1" class="icon icon-up" @click="switchTo(index - 1)">
      <Icon type="arrowUp" />
    </div>
    <div
      v-show="index < banners.length - 1"
      class="icon icon-down"
      @click="switchTo(index + 1)"
    >
      <Icon type="arrowDown" />
    </div>
    <ul class="indicator">
      <li
        @click="switchTo(i)"
        :class="{
          active: i === index,
        }"
        v-for="(item, i) in banners"
        :key="item.id"
      ></li>
    </ul>
  </div>
</template>

<script>
import Carouselitem from "./Carouselitem";
import { getBanners } from "@/api/banner";
import Icon from "@/components/Icon";

export default {
  components: {
    Carouselitem,
    Icon,
  },
  data() {
    return {
      banners: [],
      index: 0, //当前显示的是第几张轮播
      containerHeight: 0, //整个容器的高度
    };
  },
  async created() {
    this.banners = await getBanners();
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
  },
  methods: {
    //切换轮播图
    switchTo(i) {
      this.index = i;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }
  overflow: hidden;
}

.carousel-container {
  width: 100%;
  height: 100%;
  li {
    width: 100%;
    height: 100%;
  }
  transition: 500ms;
}
.icon {
  cursor: pointer;
  .self-center();
  font-size: 30px;
  transform: translateX(-50%);
  color: @gray;
  @gap: 25px;
  &.icon-up {
    top: @gap;
    animation: jump-up 2s infinite;
  }
  &.icon-down {
    top: auto;
    bottom: @gap;
    animation: jump-down 2s infinite;
  }
  @jump: 5px;
  @keyframes jump-up {
    0% {
      transform: translate(-50%, @jump);
    }
    50% {
      transform: translate(-50%, -@jump);
    }
    100% {
      transform: translate(-50%, @jump);
    }
  }
  @keyframes jump-down {
    0% {
      transform: translate(-50%, -@jump);
    }
    50% {
      transform: translate(-50%, @jump);
    }
    100% {
      transform: translate(-50%, -@jump);
    }
  }
}
.indicator {
  .self-center();
  transform: translateY(-50%);
  left: auto;
  right: 20px;
  li {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: @words;
    cursor: pointer;
    margin-bottom: 10px;
    border: 1px solid #fff;
    box-sizing: border-box;
    transition: 0.5s;
    &.active {
      background: #fff;
    }
  }
}
</style>