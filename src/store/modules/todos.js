import axios from 'axios';

const state = {
    todos: []
};


const getters = {
    allTodos: (state) => {
        return state.todos
    }
};


const actions = {
    async fetchTodos({commit}) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        commit('setTodos', response.data);
    },

    async deleteTodos({commit}, id) {
        await axios.delete('https://jsonplaceholder.typicode.com/todos/${id}');
        commit('removeTodos',id);
    },

    async addTodo({commit}, title) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {title: title, completed: false});
        commit('addTodo', response.data);
    }
}

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    removeTodos: (state, id) => state.todos = state.todos.filter(todo => todo.id !==  id),
    addTodo: (state, newTodo) => state.todos.unshift(newTodo)
};

export default {
    state, getters, actions, mutations
}