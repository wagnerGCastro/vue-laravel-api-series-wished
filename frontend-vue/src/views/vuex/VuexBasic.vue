<template>
    <div class="about">
        <h1>Vuex Basic</h1>
        <div class="container-fluid">
            <hr/>
            <div class="row">
                <div class="col-md-4">
                    <div style="border: 1px solid #ccc; padding: 10px 0 15px"  class="list-group pl-2 pr2">
                        <h2>Count Methods </h2>
                        <div class="d-flex justify-content-center">
                            <button @click="decrementar" type="button" class=""> - </button>
                            <span style="padding: 0 10px; font-size: 30px"> {{ this.counter }} </span>
                            <button @click="incrementar"  type="button" class=""> + </button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div style="border: 1px solid #ccc; padding: 10px 0 15px"  class="list-group pl-2 pr2">
                        <h2>Count mapMutations</h2>
                        <div class="d-flex justify-content-center">
                            <button @click="decrement" type="button" class=""> - </button>
                            <span style="padding: 0 10px; font-size: 30px"> {{ this.counter }} </span>
                            <button @click="increment"  type="button" class=""> + </button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div style="border: 1px solid #ccc; padding: 10px 0 15px"  class="list-group pl-2 pr2">
                        <h2>Count mapAcions</h2>
                        <div class="d-flex justify-content-center">
                            <button @click="decrementAction" type="button" class=""> - </button>
                            <span style="padding: 0 10px; font-size: 30px"> {{ this.counter }} </span>
                            <button @click="incrementAction"  type="button" class=""> + </button>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div class="row">
                <div class="col-md-4">
                    <div class="list-group pl-2 pr2">
                        <h2>Todo</h2>
                        <button type="button" class="list-group-item list-group-item-action active">
                            Todos Done (total: {{ this.doneTodosCount}})
                        </button>
                        <ul class="list-group">
                            <li v-for="(t, i) in todos" v-bind:key="i" class="list-group-item disabled">
                                {{ t.text  }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// mapActions
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

/* eslint-disable */
export default {
    name: 'VuexBasic',

    data: function() {
        return {
            // todos: this.$store.getters['todo/doneTodos']
        }
    },
    components: {
        //
    },
    create: {
        //
    },
    mounted: function() {
        console.log('store ->', this.$store)
        console.log('todos', this.todos)
        console.log('getters ->', this.$store.getters)
        console.log('state ->', this.$store.state)
        console.log('store ->', this.$store.getters['todo/doneTodos'])
        console.log('[state]-todo/todos ->', this.$store.state.todo.todos)
    },
    computed: {
        /** 
         * Recuperar Getters, MapActions ... com "namespaced:true"
         * https://stackoverflow.com/questions/48400324/how-to-use-vuex-namespaced-getters-with-arguments
         * https://stackoverflow.com/questions/47327388/vue-js-2-vuex-how-to-call-getters-from-modules-that-has-attribute-namespacedt
         * https://stackoverflow.com/questions/55927452/vuex-dynamic-namespaces-in-binding-helpers-mapstate
         */


        // Esta funçào foi subistituido pela debaixo  ...mapGetters
        // doneTodosCount() {
        //     return this.$store.state.todos.filter(todo => todo.done).length
        // },

        ...mapState({
            // todos (state) {
            //     // console.log(state.todo.todos)
            //     return state.todo.todos
            // },

            todos: (state) =>  state.todo.todos 
        }),

        ...mapGetters({
            counter: 'count/counter',
            doneTodos: 'todo/doneTodos',
            doneTodosCount: 'todo/doneTodosCount'
        })
    },
    methods: {
        /** Estas funcoes foram substituidas pelas debaixo */
        incrementar() {
            this.$store.commit('count/increment')
        },
        decrementar() {
            this.$store.commit('count/decrement')
        },

        ...mapMutations({
            decrement: 'count/decrement',
            increment: 'count/increment'
        }),

        ...mapActions({
            decrementAction: 'count/decrementAction',
            incrementAction: 'count/incrementAction'
        })
    }
}
</script>
