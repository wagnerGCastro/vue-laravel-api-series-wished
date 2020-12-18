<template>
    <div class="about">
        <h1>Vuex Basic</h1>
        <div class="container-fluid">
            <hr/>
            <div class="row">
                <div class="col-md-4">
                    <div style="border: 1px solid #ccc; padding: 10px 0 15px"  class="list-group pl-2 pr2">
                        <h2>Count</h2>
                        <div class="d-flex justify-content-center">
                            <button @click="decrementar" type="button" class=""> - </button>
                            <span style="padding: 0 10px; font-size: 30px"> {{ this.$store.state.count }} </span>
                            <button @click="incrementar"  type="button" class=""> + </button>
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

export default {
    name: 'Home',

    data: function() {
        return {
            todos: this.$store.getters.doneTodos
        }
    },
    components: {
        //
    },
    create: {
        //
    },
    mounted: function() {
        console.log('todos', this.todos)

        // console.log('store ->', this.$store)
        console.log(this.$store.state.count) // -> 1
        this.$store.commit('increment')
        console.log(this.$store.state.count) // -> 1
    },
    computed: {
        doneTodosCount() {
            return this.$store.state.todos.filter(todo => todo.done).length
        }
    },
    methods: {
        incrementar() {
            console.log(this.$store.state.count)
            this.$store.commit('increment')
            console.log(this.$store.state.count)
        },
        decrementar() {
            console.log(this.$store.state.count)
            this.$store.commit('decrement')
            console.log(this.$store.state.count)
        }
    }
}
</script>
