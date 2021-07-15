<!--
 * @Author: your name
 * @Date: 2021-06-11 23:39:58
 * @LastEditTime: 2021-07-14 11:04:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\components\Contact\index.vue
-->
<template>
  <ul class="contact-container">
    <li>
      <a href="https://github.com/XuCheri">
        <div class="icon">
          <Icon type="github" />
        </div>
        <span>CheriXu</span>
      </a>
    </li>
    <li>
      <a href="mailto:xucheri@gmail.com">
        <div class="icon">
          <Icon type="mail" />
        </div>
        <span>xucheri@gmail.com</span>
      </a>
    </li>
    <li>
      <a
        href="tencent://message/?Menu=yes&uin=1156429007&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"
      >
        <div class="icon">
          <Icon type="qq" />
        </div>
        <span>1156429007</span>
      </a>
      <div class="pop">
        <img src="../../../assets/qq.jpg" alt="" />
      </div>
    </li>
    <li>
      <a href="">
        <div class="icon">
          <Icon type="weixin" />
        </div>
        <span>XuCheri0404</span>
      </a>
      <div class="pop">
        <img src="../../../assets/vx.jpg" alt="" />
      </div>
    </li>
  </ul>
</template>

<script>
import "@/styles/global.less";
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
};
</script>

<style scoped lang="less">
@import url("~@/styles/var.less");
.contact-container {
  list-style: none;
  padding: 20px;
  margin: 0;
  color: @gray;
  @itemheight: 30px;
  li {
    height: 30px;
    line-height: 30px;
    margin: 14px 0;
    position: relative;
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
  }
  a {
    font-size: 14px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .icon {
    font-size: 26px;
    width: 36px;
    .iconweixin {
      font-size: 32px;
      margin-left: -3px;
    }
  }
  .pop {
    position: absolute;
    left: 0;
    bottom: @itemheight + 5px;
    padding: 10px 15px;
    background: #fff;
    border-radius: 5px;
    transform: scaleY(0);
    transform-origin: center bottom;
    transition: 0.3s;
    img {
      height: 150px;
      width: 150px;
    }
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      width: 8px;
      height: 8px;
      background: #fff;
      bottom: -4px;
    }
  }
}
</style>