/*
 * @Author: your name
 * @Date: 2021-07-13 20:46:20
 * @LastEditTime: 2021-07-13 21:38:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\mixins\fetchData.js
 */
export default function (defaultDataValue = null) {
    return {
        data() {
            return {
                isLoading: true,
                data: defaultDataValue,
            }
        },
        async created() {
            this.data = await this.fetchData();
            this.isLoading = false;
        }
    }
}