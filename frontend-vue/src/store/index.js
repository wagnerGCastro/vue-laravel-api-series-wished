import Vue from 'vue'
import Vuex from 'vuex'
import { http } from '@/config/http'

Vue.use(Vuex)

/**
 * https://vuex.vuejs.org/ptbr/guide/mutations.html
 *  https://www.youtube.com/watch?v=qq8yJmXys6U
 * 
 * https://morioh.com/p/4bb19aa8ea3e
 */

/** 
 *  Mutation Types
 */
const SET_USER = 'SET_USER'
const SET_TOKEN = 'SET_TOKEN'
const SET_EXPIRES = 'SET_EXPIRES'

export default new Vuex.Store({
    state: {
        user: {},
        token: '',
        expires: '',
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

        [SET_EXPIRES](state, payload) {
            state.expires = payload
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

        actionDoLogin: ({ dispatch }, payload) => {
            // console.log('actionDoLogin', payload)
            // console.log('http', http)

            return http.post(http.options.root + '/auth/login', payload).then(resp => {
                // console.log(resp.body)
                dispatch('actionSetExpires', resp.body.expires_in)
                dispatch('actionSetToken', resp.body.access_token)
            })
        },

        actionSetUser: ({ commit }, payload) => {
            commit(SET_USER, payload)
        },

        actionSetExpires: ({ commit }, payload) => {
            commit(SET_EXPIRES, payload)
        },

        actionSetToken: ({ commit }, payload) => {
            // storage.setLocalToken(payload)
            // storage.setHeaderToken(payload)
            commit(SET_TOKEN, payload)
        }
    },
    modules: {
    }
})
