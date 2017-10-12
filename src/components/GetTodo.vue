<template>
  <div id="get-todo" class="container">
    <!-- computed is more like value, method is more for action -->
    <input class="form-control"
      :value="newTodo"
      @change="getTodo"
      placeholder="I need to...">

    <!-- After you fill the button, we add to list -->
    <button class="btn btn-primary" @click="addTodo">Add Todo</button>
  </div>
</template>

<script>
export default{
  // Action on UI
  methods: {
    // event happen on button
    getTodo (e) {
      this.$store.dispatch('getTodo', e.target.value)
    },

    addTodo () {
      // this === this component
      // $store === state
      // dispatch

      // get the curr item, and push into internal list
      this.$store.dispatch('addTodo')
      // clean up curr item
      this.$store.dispatch('clearTodo')
    }
  },

  // Use computed with part of state
  computed: {
    newTodo () {
      // this.state.get, curr to do
      return this.$store.getters.newTodo
    }
  }
}
</script>
