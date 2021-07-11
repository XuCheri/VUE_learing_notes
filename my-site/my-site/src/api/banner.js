/*
 * @Author: your name
 * @Date: 2021-07-11 20:43:08
 * @LastEditTime: 2021-07-11 20:43:33
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\api\banner.js
 */
import request from "./request";

export async function getBanners() {
  return await request.get("/api/banner");
}
