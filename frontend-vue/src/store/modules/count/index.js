import { SET_USER, SET_TOKEN, SET_EXPIRES } from "@/store/mutation-types.js";

export const Auth = {
    namespaced: true,

    state: {
        count: 0,
    },
  
    mutations: {
        increment: state => state.count++,

        decrement: (state, num) => {
            console.log('decrementAction', num)
            state.count--
        }
    },

    getters: {
        counter: state => state.count,
    },
  
    actions: {
        ecrement: context => context.commit('decrement'),
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
    },
  
}