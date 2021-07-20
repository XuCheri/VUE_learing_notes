/*
 * @Author: your name
 * @Date: 2021-07-20 15:44:30
 * @LastEditTime: 2021-07-20 21:01:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\directives\lazy.js
 */
import eventBus from "@/eventBus";
import defaultGif from "@/assets/default.gif";
import {
    debounce
} from "@/utils";

let imgs = [];

function setImage(img) {
    img.dom.src = defaultGif;
    const clientHeight = document.documentElement.clientHeight;
    const rect = img.dom.getBoundingClientRect();
    const height = rect.height || 150;
    if (rect.top >= -height && rect.top <= clientHeight) {
        const tempImage = new Image();
        tempImage.onload = function () {
            img.dom.src = img.src;
        };
        tempImage.src = img.src;
        imgs = imgs.filter(i => i !== img);
    }
}

function setImages() {
    for (const img of imgs) {
        setImage(img);
    }
}

function handleScroll() {
    setImages();
}

eventBus.$on("mainScroll", debounce(handleScroll, 50))

export default {
    inserted(el, bindings) {
        const img = {
            dom: el,
            src: bindings.value,
        }
        imgs.push(img)
        setImage(img);
    },
    unbind(el) {
        imgs = imgs.filter(img => img.dom !== el);
    }
}