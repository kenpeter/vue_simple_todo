<template>
  <div id="app" class="container">
    <!-- all complete-->
    <CompletedTodos></CompletedTodos>
    <!-- new to do -->
    <GetTodo></GetTodo>
    <!-- current to do list -->
    <CurrentTodos></CurrentTodos>
  </div>
</template>

<script>
import GetTodo from './components/GetTodo.vue'
import CurrentTodos from './components/CurrentTodos.vue'
import CompletedTodos from './components/CompletedTodos.vue'

export default {
  // import, component, assign
  components: {
    GetTodo,
    CurrentTodos,
    CompletedTodos
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
