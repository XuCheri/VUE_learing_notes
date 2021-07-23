/*
 * @Author: your name
 * @Date: 2021-07-23 20:23:14
 * @LastEditTime: 2021-07-23 20:23:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\api\project.js
 */
import request from "./request";

export async function getProjects() {
    return await request.get("/api/project");
}