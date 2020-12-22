import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import { auth } from './modules/auth'
import { count } from './modules/count'
import { todo } from './modules/todo'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth,
        count,
        todo
    }
})
