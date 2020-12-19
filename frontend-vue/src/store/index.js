import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/**
 * https://vuex.vuejs.org/ptbr/guide/mutations.html
 *  https://www.youtube.com/watch?v=qq8yJmXys6U
 */

/** 
 *  Mutation Types
 */
export const SET_USER = 'SET_USER'
export const SET_TOKEN = 'SET_TOKEN'

export default new Vuex.Store({
    state: {
        user: {},
        token: '',
        count: 0,
        todos: [
            { id: 1, text: 'Nome 1', done: true },
            { id: 2, text: 'Nome 2', done: false },
            { id: 3, text: 'Nome 3', done: true },
            { id: 4, text: 'Nome 4', done: false }
        ]
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        },

        doneTodosCount(state) {
            return state.todos.filter(todo => todo.done).length
        },

        counter: state => state.count,
        todos: state => state.todos
    },
    /**
     * Exuta dados de forma sincrona, recomendado para alterar o estado da Aplicação
     * 
     * Mutações Devem Ser Síncronas
     *  https://vuex.vuejs.org/ptbr/guide/mutations.html#mutacoes-devem-ser-sincronas
     */
    mutations: {
        [SET_TOKEN](state, token) {
            console.log(token)
            state.token = token
        },
        [SET_USER](state, payload) {
            state.user = payload
        },

        increment: state => state.count++,
        decrement: (state, num) => {
            console.log('decrementAction', num)
            state.count--
        }
    },
    /**
     * Recomendo para buscas do Servidor, API. Dispara acoes asincronas
     */
    actions: {
        // setToken(context, token) {
        //     context.dispatch('SET_TOKEN', token)
        // }

        decrement: context => context.commit('decrement'),
        increment: ({ commit }) => commit('increment'),

        incrementAction: context => context.commit('increment'),

        /** Simulando uma chamada para API  */
        decrementAction: ({ commit }) => {
            // Algoritmo da API

            // Apos o resultado da API, passando um parametro
            setTimeout(() => {
                //
                commit('decrement', 4)
            }, 2000)
        },

        actionDoLogin: ({ commit }, payload) => {
            console.log('payload', payload)
            commit('SET_TOKEN', payload.access_token)
            commit('SET_USER', payload.token_type)
        },

        actionSetUser: ({ commit }, payload) => {
            commit(SET_USER, payload)
        }
    },
    modules: {
    }
})
