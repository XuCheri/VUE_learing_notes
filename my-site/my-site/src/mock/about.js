/*
 * @Author: your name
 * @Date: 2021-07-23 19:13:30
 * @LastEditTime: 2021-07-23 23:26:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\mock\about.js
 */
import Mock from "mockjs";
Mock.mock("/api/about", "get", {
    code: 0,
    msg: "",
    data: "https://www.strml.net/",
})