/*
 * @Author: your name
 * @Date: 2021-07-13 17:26:36
 * @LastEditTime: 2021-07-13 21:50:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learning_notes\my-site\my-site\src\directives\loading.js
 */

import loadingUrl from "@/assets/loading.svg"
import styles from "./loading.module.less"

function getLoadingImage(el) {
    return el.querySelector("img[data-role=loading]")
}

function createLoadingImg() {
    const img = document.createElement("img");
    img.dataset.role = "loading";
    img.src = loadingUrl;
    img.className = styles.loading;
    return img;
}




//导出指令的配置对象
export default function (el, binding) {
    const curImg = getLoadingImage(el)
    if (binding.value) {
        if (!curImg) {
            const img = createLoadingImg();
            el.appendChild(img);
        }
    } else {
        if (curImg) {
            curImg.remove();
        }
    }
}