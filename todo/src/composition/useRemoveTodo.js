/*
 * @Author: your name
 * @Date: 2021-08-04 22:55:33
 * @LastEditTime: 2021-08-04 22:59:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\todo\src\composition\useRemoveTodo.js
 */
export default function useRemoveTodo(todoRef) {
    const remove = todo => {
        todoRef.value.splice(todoRef.value.indexOf(todo), 1);
    };
    const removeCompleted = () => {
        todoRef.value = todoRef.value.filter(it => !it.completed);
    }
    return {
        remove,
        removeCompleted,
    }
}