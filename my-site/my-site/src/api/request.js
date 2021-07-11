/*
 * @Author: your name
 * @Date: 2021-07-11 16:05:00
 * @LastEditTime: 2021-07-11 20:50:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\api\request.js
 */
import axios from "axios";
import showMessage from "../utils/showMessage";
const ins = axios.create(); //创建一个axios实例
ins.interceptors.response.use(function (rsp) {
    if (rsp.data.code !== 0) {
        showMessage({
            content: rsp.data.msg,
            type: "error",
            duration: 1500,
        });
        return null;
    }
    return rsp.data.data;
});
export default ins;