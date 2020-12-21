<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/vuex/basic">Vue</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/logout">Logout</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
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

console.log('jquery -> ', jQuery.fn.jquery)

export default {
    name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
