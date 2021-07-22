/*
 * @Author: your name
 * @Date: 2021-07-22 20:42:24
 * @LastEditTime: 2021-07-22 23:02:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\mock\setting.js
 */
import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
    code: 0,
    msg: "",
    data: {
        avatar: "https://mms0.baidu.com/it/u=1835340977,3111630190&fm=11&gp=0.jpg&fmt=auto",
        siteTitle: "Cherixu的小窝",
        github: "https://github.com/XuCheri",
        qq: "1156429007",
        qqQrCode: "../assets/qq.jpg",
        weixin: "XuCheri0404",
        weixinQrCode: "../assets/vx.jpg",
        mail: "xucheri@gmail.com",
        icp: "黑ICP备17001719号",
        githubName: "XuCheri",
        favicon: "https://mms0.baidu.com/it/u=1835340977,3111630190&fm=11&gp=0.jpg&fmt=auto",
    }
})