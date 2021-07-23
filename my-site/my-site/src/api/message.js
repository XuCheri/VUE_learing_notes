/*
 * @Author: your name
 * @Date: 2021-07-23 22:21:11
 * @LastEditTime: 2021-07-23 22:41:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\api\message.js
 */
import request from "./request";

export async function getMessage(page = 1, limit = 10) {
    return await request.get("/api/message", {
        params: {
            page,
            limit,
        },
    });
};

export async function postMessage(msgInfo) {
    return await request.post("/api/message", msgInfo);
}