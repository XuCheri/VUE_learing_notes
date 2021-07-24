/*
 * @Author: your name
 * @Date: 2021-07-24 16:50:18
 * @LastEditTime: 2021-07-24 17:46:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\webpack.config.js
 */

const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
if (process.env.NODE_ENV === "production") {
    module.exports = {
        devtool: "none",
        plugins: [new BundleAnalyzerPlugin()],
        externals: {
            vue: "Vue",
            vuex: "Vuex",
            "vue-router": "VueRouter",
            axios: "axios",
        }
    }
} else {
    module.exports = {

    }
}