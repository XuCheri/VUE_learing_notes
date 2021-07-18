/*
 * @Author: your name
 * @Date: 2021-07-18 20:44:59
 * @LastEditTime: 2021-07-18 20:59:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\mixins\mainScroll.js
 */
export default function (refValue) {
    return {
        mounted() {
            this.$refs[refValue].addEventListener("scroll", this.handleScroll);
            this.$bus.$on("setMainScroll", this.handleSetMainScroll);
        },
        beforeDestroy() {
            this.$bus.$emit("mainScroll");
            this.$refs[`${refValue}`].removeEventListener("scroll", this.handleScroll);
            this.$bus.$off("setMainScroll", this.handleSetMainScroll);
        },
        methods: {
            handleSetMainScroll(scrollTop) {
                this.$refs[refValue].scrollTop = scrollTop;
            },
            handleScroll() {
                this.$bus.$emit("mainScroll", this.$refs[refValue]);
            },
        }
    }
}