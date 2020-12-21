import Vue from 'vue'
import VueResource from 'vue-resource'
import services from './services'
import interceptors from './interceptors'

console.log(interceptors)

/* eslint-disable */

Vue.use(VueResource)

const http = Vue.http
http.options.root = 'http://127.0.0.1:8010/api/'
http.interceptors.push(interceptors)

Object.keys(services).map(service => {
  services[service] = Vue.resource('', {}, services[service])
})

const setBearerToken = token => {
    http.headers.common['Authorization'] = `Bearer ${token}`
}
  
// services.auth.login({ email: 'wagner@gmail.com', password: '123456' }).then(response => {
//     // success callback
//     console.log('sucess', response)
// }, response => {
//     console.log('err', response)
//     // error callback
// })

export { 
    http, 
    services, 
    setBearerToken 
}
