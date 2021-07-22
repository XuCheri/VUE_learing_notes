/*
 * @Author: your name
 * @Date: 2021-07-22 20:40:08
 * @LastEditTime: 2021-07-22 20:41:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\api\setting.js
 */
import request from "./request";

export async function getSetting() {
    return await request.get("/api/setting");
}