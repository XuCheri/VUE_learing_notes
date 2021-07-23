/*
 * @Author: your name
 * @Date: 2021-07-23 18:34:58
 * @LastEditTime: 2021-07-23 23:16:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\utils\setTitle.js
 */

var routeTitle = "",
    siteTitle = "";

function setTitle() {
    if (!routeTitle && !siteTitle) {
        document.title = "loading...";
    } else if (routeTitle && !siteTitle) {
        document.title = routeTitle;
    } else if (!routeTitle && siteTitle) {
        document.title = siteTitle;
    } else {
        document.title = `${siteTitle} - ${routeTitle}`
    }
}


export default {
    setRouteTitle(title) {
        routeTitle = title;
        setTitle();
    },
    setSiteTitle(title) {
        siteTitle = title;
        setTitle();
    }
}