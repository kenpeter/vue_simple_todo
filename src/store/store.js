// vue
import Vue from 'vue'
// state
import Vuex from 'vuex'

// vue uses state
Vue.use(Vuex)

// We need to have full structure of state
// todo = {body: x, completed: false}
const state = {
	todos: [],
	newTodo: ''
}

// Mutation
const mutations = {
	// External todo, now assign to state
	GET_TODO(state, todo) {
		state.newTodo = todo;
	},

	// add to do means push new_item into todo list
	ADD_TODO(state){
		let obj = {
			// body has content
	  	body: state.newTodo,
			// complete false
	    completed: false
		};

		// array of obj
		state.todos.push(obj);
	},

	EDIT_TODO(state, todo) {
		// From state, get all todos
	  let todos = state.todos;
		// Basically, we remove that todo from list, and working on remaining.
	  todos.splice(todos.indexOf(todo), 1);

		// Now todos get 1 less
	  state.todos = todos;

		// Now curr todo has body
	  state.newTodo = todo.body;
	},

	REMOVE_TODO(state, todo){
		// Get all todos
	  var todos = state.todos;
		// 1 == remove 1
		// todos.indexOf(todo) == index
	  todos.splice(todos.indexOf(todo), 1);
	},

	// toggle completed or not
	COMPLETE_TODO(state, todo){
	 todo.completed = !todo.completed;
	},

	// clear to do === clean curr new to do
	CLEAR_TODO(state){
	 state.newTodo = '';
	}
}

const actions = {
	// {commit} == { commit: commit }, it is argument destruction
	//addTodo({commit}){
  //	commit('ADD_TODO');
	//},
	addTodo(store){
  	let commit = store.commit;
  	commit('ADD_TODO');
	},

	getTodo(store, todo) {
		let commit = store.commit;
		commit('GET_TODO', todo);
	},

	clearTodo(store) {
		let commit = store.commit;
		commit('CLEAR_TODO');
	},

	editTodo(store, todo) {
		let commit = store.commit;
		commit('EDIT_TODO');
	},

	completeTodo(store, todo) {
		let commit = store.commit;
		commit('COMPLETE_TODO', todo);
	},

	removeTodo(store, todo) {
		let commit = store.commit;
		commit('REMOVE_TODO', todo);
	}
}

// Getters becomes keep getting part of state
const getters = {
	// curr item
  newTodo: state => state.newTodo,
  todos: state => state.todos.filter((todo) => { return !todo.completed }),
  completedTodos: state => state.todos.filter((todo) => { return todo.completed })
}

// export vue
// {state: state}
const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})

// export store
export default store
