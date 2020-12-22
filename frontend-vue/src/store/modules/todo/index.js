export const todo = {
    namespaced: true,

    state: {
        todos: [
            { id: 1, text: 'Nome 1', done: true },
            { id: 2, text: 'Nome 2', done: false },
            { id: 3, text: 'Nome 3', done: true },
            { id: 4, text: 'Nome 4', done: false }
        ]
    },

    mutations: {
        //
    },

    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        },

        doneTodosCount(state) {
            return state.todos.filter(todo => todo.done).length
        }
    },

    actions: {
        //
    }
}
