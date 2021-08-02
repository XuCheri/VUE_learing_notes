/*
 * @Author: your name
 * @Date: 2021-08-02 22:44:38
 * @LastEditTime: 2021-08-02 23:06:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\todo\src\composition\useNewToDo.js
 */
import {
    ref
} from "vue";
import {
    generateId
} from "../util/todoStorage";
export default function useNewToDo(todoRef) {
    const newToDoRef = ref("");
    const addToDo = () => {
        const value = newToDoRef.value && newToDoRef.value.trim();
        if (!value) {
            return;
        }
        const todo = {
            title: value,
            completed: false,
            id: generateId(),
        }
        todoRef.value.push(todo);
        newToDoRef.value = "";
    }
    return {
        newToDoRef,
        addToDo
    }
}