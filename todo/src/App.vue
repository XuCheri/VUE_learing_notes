<!--
 * @Author: your name
 * @Date: 2021-08-02 21:58:24
 * @LastEditTime: 2021-08-03 22:56:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\todo\src\App.vue
-->
<template>
  <div id="app">
    <h1>{{ todoRef.length }}</h1>

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
          <li
            class="todo"
            :class="{ completed: todo.completed }"
            v-for="todo in filteredTodosRef"
            :key="todo.id"
          >
            <div class="view">
              <input class="toggle" type="checkbox" v-model="todo.completed" />
              <label>{{ todo.title }}</label>
              <button class="destroy"></button>
            </div>
            <input class="edit" type="text" />
          </li>
        </ul>
      </section>
      <footer class="footer">
        <span class="todo-count">
          <strong>{{ remainingRef }}</strong>
          <span>item{{ remainingRef === 1 ? "" : "s" }} left</span>
        </span>
        <ul class="filters">
          <li>
            <a href="#/all" :class="{ selected: visibilityRef === 'all' }"
              >All</a
            >
          </li>
          <li>
            <a href="#/active" :class="{ selected: visibilityRef === 'active' }"
              >Active</a
            >
          </li>
          <li>
            <a
              href="#/completed"
              :class="{ selected: visibilityRef === 'completed' }"
              >Completed</a
            >
          </li>
        </ul>
        <button
          class="clear-completed"
          style="display: none"
          v-show="completedRef > 0"
        >
          Clear completed
        </button>
      </footer>
    </section>
  </div>
</template>

<script>
import useToDoList from "./composition/useToDoList";
import useNewToDo from "./composition/useNewToDo";
import useFilter from "./composition/useFilter";
export default {
  setup() {
    const { todoRef } = useToDoList();
    return {
      todoRef,
      ...useNewToDo(todoRef),
      ...useFilter(todoRef),
    };
  },
};
</script>
