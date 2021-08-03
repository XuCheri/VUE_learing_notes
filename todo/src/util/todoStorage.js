/*
 * @Author: your name
 * @Date: 2021-08-02 22:07:59
 * @LastEditTime: 2021-08-03 22:43:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\todo\src\util\todoStorage.js
 */
const LOCAL_KEY = "todomvc";

/**
 * @description:生成任务的唯一编号，时间戳+4位随机数 
 * @param {*}
 * @return {*}
 */
export function generateId() {
    return Date.now() + Math.random().toString(16).substring(2, 4);
}

/**
 * @description: 获取目前所有的任务
 * @param {*}
 * @return {*}
 */
export function fetch() {
    const result = localStorage.getItem(LOCAL_KEY)
    if (result) {
        return JSON.parse(result);
    }
    return [];
}

/**
 * @description: 保存所有任务
 * @param {*} todos任务列表
 * @return {*}
 */
export function save(todos) {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(todos));
}


export function filter(todos, visibility = "all") {
    if (visibility === "all") {
        return todos;
    } else if (visibility === "active") {
        return todos.filter((it) => !it.completed);
    } else if (visibility === "completed") {
        return todos.filter((it) => it.completed);
    }
    throw new Error("invalid visibility value");
}