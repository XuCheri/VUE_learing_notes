/*
 * @Author: your name
 * @Date: 2021-07-23 19:08:36
 * @LastEditTime: 2021-07-23 19:09:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\api\about.js
 */
import request from "./request";

export async function getAbout() {
    return await request.get("/api/about");
}