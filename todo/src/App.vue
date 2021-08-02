<!--
 * @Author: your name
 * @Date: 2021-08-02 21:58:24
 * @LastEditTime: 2021-08-02 23:03:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\todo\src\App.vue
-->
<template>
  <div id="app">
    <h1>{{todoRef.length}}</h1>

    <section class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <input
          class="new-todo"
          autofocus=""
          autocomplete="off"
          placeholder="What needs to be done?"
          v-model="newToDoRef"
          @keyup.enter="addToDo"
        />
      </header>
      <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox" />
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          <li class="todo">
            <div class="view">
              <input class="toggle" type="checkbox" />
              <label>学习composition api</label>
              <button class="destroy"></button>
            </div>
            <input class="edit" type="text" />
          </li>
          <li class="todo">
            <div class="view">
              <input class="toggle" type="checkbox" />
              <label>投递50封简历</label>
              <button class="destroy"></button>
            </div>
            <input class="edit" type="text" />
          </li>
          <li class="todo">
            <div class="view">
              <input class="toggle" type="checkbox" />
              <label>上午10:30 参加面试</label>
              <button class="destroy"></button>
            </div>
            <input class="edit" type="text" />
          </li>
        </ul>
      </section>
      <footer class="footer">
        <span class="todo-count">
          <strong>3</strong>
          <span>items left</span>
        </span>
        <ul class="filters">
          <li><a href="#/all" class="selected">All</a></li>
          <li><a href="#/active" class="">Active</a></li>
          <li><a href="#/completed" class="">Completed</a></li>
        </ul>
        <button class="clear-completed" style="display: none">
          Clear completed
        </button>
      </footer>
    </section>
  </div>
</template>

<script>
import useToDoList from "./composition/useToDoList";
import useNewToDo from "./composition/useNewToDo";
export default {
  setup() {
    const { todoRef } = useToDoList();
    return {
      todoRef,
      ...useNewToDo(todoRef),
    };
  },
};
</script>
