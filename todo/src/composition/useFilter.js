/*
 * @Author: your name
 * @Date: 2021-08-03 21:53:16
 * @LastEditTime: 2021-08-03 22:55:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\todo\src\composition\useFilter.js
 */
import {
    ref,
    onMounted,
    onUnmounted,
    computed,
} from "vue";
import {
    filter
} from "../util/todoStorage";
const validHash = ["all", "active", "completed"];
export default function useFilter(todoRef) {
    const visibilityRef = ref("all");

    const onHashChange = function () {
        const hash = location.hash.replace(/#\/?/, "");
        if (validHash.includes(hash)) {
            visibilityRef.value = hash;
        } else {
            location.hash = "";
            visibilityRef.value = "all";
        }
    };
    onMounted(() => {
        window.addEventListener("hashchange", onHashChange);
    });
    onUnmounted(() => {
        window.removeEventListener("hashchange", onHashChange);
    });

    const filteredTodosRef = computed(() => {
        return filter(todoRef.value, visibilityRef.value);
    });

    const remainingRef = computed(() => {
        return filter(todoRef.value, "active").length;
    });

    const completedRef = computed(() => {
        return filter(todoRef.value, "completed").length;
    })

    return {
        visibilityRef,
        filteredTodosRef,
        remainingRef,
        completedRef,
    }
}