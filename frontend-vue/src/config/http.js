import Vue from 'vue'
import VueResource from 'vue-resource'
// import services from '@/services/auth'

Vue.use(VueResource)

const http = Vue.http

http.options.root = 'http://127.0.0.1:8010/api'

/**
 * Services
 * 
 * 
 */
// const services = {
//     login: { method: 'post', url: 'http://127.0.0.1:8010/api/auth/login' },
//     loadSession: { method: 'get', url: 'load-session' }
// }

// MOnta 
// Object.keys(services).map(service => {
//     services[service] = Vue.resource('', {}, services[service])
//     // console.log('services1', services[service])
//     // console.log('resource', Vue.resource('', {}, services[service]))
//     // console.log('services2', services[service])
// })

// console.log('services3', services)

// const setBearerToken = token => {
//     http.headers.common['Authorization'] = `Bearer ${token}`
// }

// export default services
export { http }
