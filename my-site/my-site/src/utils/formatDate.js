/*
 * @Author: your name
 * @Date: 2021-07-15 22:40:36
 * @LastEditTime: 2021-07-15 22:55:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\utils\formatDate.js
 */
export default function (timestamp) {
    const date = new Date(+timestamp);
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = (date.getDate().toString().padStart(2, "0"));
    return `${date.getFullYear()}-${month}-${day}`;
}