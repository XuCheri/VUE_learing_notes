/*
 * @Author: your name
 * @Date: 2021-07-18 20:44:59
 * @LastEditTime: 2021-07-23 23:22:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\mixins\mainScroll.js
 */
export default function(refValue) {
    return {
      mounted() {
        this.$bus.$on("setMainScroll", this.handleSetMainScroll);
        this.$refs[refValue].addEventListener("scroll", this.handleMainScroll);
      },
      beforeDestroy() {
        this.$bus.$emit("mainScroll");
        this.$bus.$off("setMainScroll", this.handleSetMainScroll);
        this.$refs[refValue].removeEventListener("scroll", this.handleMainScroll);
      },
      methods: {
        handleSetMainScroll(scrollTop) {
          this.$refs[refValue].scrollTop = scrollTop;
        },
        handleMainScroll() {
          this.$bus.$emit("mainScroll", this.$refs[refValue]);
        },
      },
    };
  }