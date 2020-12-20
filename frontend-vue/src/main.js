import Vue from 'vue'

import 'bootstrap/scss/bootstrap.scss'

// import $ from 'jquery'
// import 'bootstrap/js/src/util'
// import 'bootstrap/js/src/alert'
// import 'bootstrap/js/src/dropdown'
// import 'bootstrap/js/src/tab'

import 'bootstrap/dist/js/bootstrap'

// window.$ = window.jQuery = window.jquery = require('jquery')
// console.log('jquery -> ', $)
// console.log('jquery -> ', jQuery.fn.jquery)
// console.log(jQuery().jquery)

import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

console.log('jquery -> ', jQuery.fn.jquery)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
