import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const http = Vue.http

http.options.root = 'http://127.0.0.1:8010/api'

const setBearerToken = token => {
    http.headers.common['Authorization'] = `Bearer ${token}`
}

export default services
export { http, setBearerToken }