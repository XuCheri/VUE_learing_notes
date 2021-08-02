/*
 * @Author: your name
 * @Date: 2021-08-02 22:33:30
 * @LastEditTime: 2021-08-02 22:41:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\todo\src\composition\useToDoList.js
 */
import { ref, watchEffect } from "vue";
import * as todoStorage from "../util/todoStorage";
export default function useToDoList() {
    const todoRef = ref(todoStorage.fetch());
    watchEffect(() => {
      todoStorage.save(todoRef.value);
    });
    return {
      todoRef,
    };
}