<template>
  <div id="current-todos" class="container">
    <!-- v if, if todos.len, todos.len -->
    <h3 v-if="todos.length > 0">Current: {{todos.length}}</h3>
      <ul class="list-group">
        <!-- v for item in item -->
        <li class="list-group-item" v-for="todo in todos">
          <!-- single todo -->
          {{todo.body}}

          <div class="btn-group">
            <!-- edit to do -->
            <button type="button" @click="edit(todo)" class="btn btn-default btn-sm">
              <span class="glyphicon glyphicon-edit"></span> Edit
            </button>

            <!-- done a todo -->
            <button type="button" @click="complete(todo)" class="btn btn-default btn-sm">
              <span class="glyphicon glyphicon-ok-circle"></span> Complete
            </button>

            <!-- remove a todo -->
            <button type="button" @click="remove(todo)" class="btn btn-default btn-sm">
              <span class="glyphicon glyphicon-remove-circle"></span> Remove
            </button>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default{
  methods: {
    // Click button, then call internal method, the fire
    edit (todo) {
      // this.state.fire(action, payload)
      this.$store.dispatch('editTodo', todo)
    },

    complete (todo) {
      // Basically, we fire something, with all necessary data, to help
      // completing todo
      this.$store.dispatch('completeTodo', todo)
    },

    // Remove
    remove (todo) {
      this.$store.dispatch('removeTodo', todo)
    }
  },

  computed: {
    // So we use a func like data, todos, not todos()
    todos () {
      // Get part of state
      return this.$store.getters.todos
    }
  }
}
</script>

<style>
    .btn-group{
        float: right;
    }
</style>
