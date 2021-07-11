/*
 * @Author: your name
 * @Date: 2021-07-11 08:56:02
 * @LastEditTime: 2021-07-11 16:02:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\utils\showMessage.js
 */
import getComponentRootDom from "./getComponentRootDom";
import Icon from "@/components/Icon";
import styles from "./showMessage.module.less";
/**
 * @description: 
 * @param {String} content    消息内容
 * @param {String} type       消息类型  info error success warn
 * @param {Number} duration   多久消失
 * @param {HTMLElement} container 容器，该消息会显示在容器的正中；如果不传则显示在页面正中 
 * @return {*}
 */
export default function (options = {}) {
    const content = options.content || "";
    const type = options.type || "info";
    const duration = options.duration || 2000;
    const container = options.container || document.body;
    // 创建消息元素
    const div = document.createElement("div");
    const iconDom = getComponentRootDom(Icon, {
        type
    })
    console.log(iconDom);
    div.innerHTML = `<span class = "${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`;

    // 类型样式名
    const typeClassName = styles[`message-${type}`];

    // 设置样式
    div.className = `${styles.message} ${typeClassName}`;

    // 将div加入到容器中

    if (!options.container) {
        if (getComputedStyle(container).position === "static") {
            container.style.position = 'relative';
        }
    }


    container.appendChild(div);

    // 浏览器强行渲染
    div.clientHeight;

    // 回归到正常位置
    div.style.opacity = 1;
    div.style.transform = `translate(-50% -50%)`;


    // 等一段时间消失
    setTimeout(() => {
        div.style.opacity = 0;
        div.style.transform = `translate(-50%,-50%) translateY(-20px)`;
        div.addEventListener("transitionend", function () {
            div.remove();
            options.callback && options.callback();
        }, {
            once: true
        });
    }, duration);

}