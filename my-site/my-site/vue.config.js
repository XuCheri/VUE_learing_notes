/*
 * @Author: your name
 * @Date: 2021-07-11 15:36:01
 * @LastEditTime: 2021-07-24 16:54:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\vue.config.js
 */
// vue-cli的配置文件
// module.exports = {
//     devServer: {
//       proxy: {
//         "/api": {
//           target: "http://test.my-site.com",
//         },
//       },
//     },
//   };



module.exports = {
    configureWebpack: require("./webpack.config"),
}