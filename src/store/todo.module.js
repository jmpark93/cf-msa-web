import TodoService from '../services/todo.service';

export const todo = {
  namespaced: true,

  state: {
    todos: []
  },

  mutations: {

    GET_ALL(state, todos) {
      state.todos = todos;
    },

    ADD_TODO(state, value) {
      state.todos.push( value );
    },

    REMOVE_TODO(state, todoId) {
      const index = state.todos.findIndex ( todo => {
        return todo.id === todoId;
      } );

      state.todos.splice(index, 1);
    },

    CLEAR_ALL(state) {
      state.todos = [];
    }, 

    UPDATE_TODO(state, value) {
      const index = state.todos.findIndex ( todo => {
        return todo.id === value.id;
      } );

      state.todos[index] = value;
    }

  },

  actions: {
    getAllByUserId( { commit }, uesrID ) {
      return TodoService.getAllByUserId(uesrID).then(
        response => {
          commit('GET_ALL');
          return Promise.resolve(response.data._embedded.todos);
        },
        error => {
          console.log( "getAllByUserId(" + uesrID + ") : " + error );
        }
      );
    },
    
  },

  getters: {
    numberOfComplete: state => {
      return state.todos.filter( todo => todo.checked ).length;
    }
  },

  modules: {
  }
}