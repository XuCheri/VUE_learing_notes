/*
 * @Author: your name
 * @Date: 2021-08-04 21:39:05
 * @LastEditTime: 2021-08-04 22:29:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit 
 * @FilePath: \VUE_learing_notes\todo\src\composition\useEditTodo.js
 */

import {
    ref,
    computed,
} from 'vue';

export default function useEditTodo(todoRef) {
    const editingTodoRef = ref(null);
    let originTitle = null;
    const editTodo = (todo) => {
        originTitle = todo.title;
        editingTodoRef.value = todo;
    }
    const doneEdit = (todo) => {
        editingTodoRef.value = null;
        const title = todo.title.trim();
        if (title) {
            todo.title = title;
        }else{
            todoRef.value.splice(todoRef.value.indexOf(todo),1);
        }
    }
    const cancelEdit = (todo) => {
        editingTodoRef.value = null;
        todo.title = originTitle;
    }
    const allDoneRef = computed({
        get() {
            return todoRef.value.filter(it => !it.completed).length === 0;
        },
        set(checked) {
            todoRef.value.forEach(todo => {
                todo.completed = checked;
            });
        }
    })
    return {
        editingTodoRef,
        editTodo,
        doneEdit,
        cancelEdit,
        allDoneRef,
    }
}