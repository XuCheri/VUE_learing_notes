<!--
 * @Author: your name
 * @Date: 2021-08-02 21:58:24
 * @LastEditTime: 2021-08-04 23:04:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\todo\src\App.vue
-->

<template>
  <div id="app">
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
      <section class="main" v-show="todoRef.length > 0">
        <input
          id="toggle-all"
          class="toggle-all"
          type="checkbox"
          v-model="allDoneRef"
        />
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          <li
            class="todo"
            :class="{
              completed: todo.completed,
              editing: todo === editingTodoRef,
            }"
            v-for="todo in filteredTodosRef"
            :key="todo.id"
          >
            <div class="view">
              <input class="toggle" type="checkbox" v-model="todo.completed" />
              <label @dblclick="editTodo(todo)">{{ todo.title }}</label>
              <button class="destroy" @click="remove(todo)"></button>
            </div>
            <input
              v-model="todo.title"
              class="edit"
              type="text"
              @blur="doneEdit(todo)"
              @keyup.enter="doneEdit(todo)"
              @keyup.escape="cancelEdit(todo)"
            />
          </li>
        </ul>
      </section>
      <footer class="footer" v-show="todoRef.length > 0">
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
          @click="removeCompleted"
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
import useEditTodo from "./composition/useEditTodo";
import useRemoveTodo from "./composition/useRemoveTodo";
export default {
  setup() {
    const { todoRef } = useToDoList();
    return {
      todoRef,
      ...useNewToDo(todoRef),
      ...useFilter(todoRef),
      ...useEditTodo(todoRef),
      ...useRemoveTodo(todoRef),
    };
  },
};
</script>
