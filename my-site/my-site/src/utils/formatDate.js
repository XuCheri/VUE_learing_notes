/*
 * @Author: your name
 * @Date: 2021-07-15 22:40:36
 * @LastEditTime: 2021-07-17 16:57:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\utils\formatDate.js
 */
export default function (timestamp, showTime = false) {
    const date = new Date(+timestamp);
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = (date.getDate().toString().padStart(2, "0"));
    let str = `${date.getFullYear()}-${month}-${day}`;
    if (showTime) {
        const hour = date.getHours().toString().padStart(2, "0");
        const minute = date.getMinutes().toString().padStart(2, "0");
        const second = date.getSeconds().toString().padStart(2, "0");
        str += ` ${hour}:${minute}:${second}`;
    }
    return str;
}