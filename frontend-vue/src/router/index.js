import Vue from 'vue'
import VueRouter from 'vue-router'
import beforeEach from './beforeEach'

import Home from '@/views/Home.vue'
const VuexBasic = () => import(/* webpackChunkName: "about" */ '../views//vuex/VuexBasic.vue')
const Login = () => import(/* webpackChunkName: "login" */ '../views/Login.vue')

Vue.use(VueRouter)

/* eslint-disable */

/**
 * https://tenmilesquare.com/creating-an-authentication-navigation-guard-in-vue/
 * https://css-tricks.com/protecting-vue-routes-with-navigation-guards/
 *  
 */ 

const routes = [
    { path: '/',            name: 'home',       component: Home },
    { path: '/vuex/basic',  name: 'vuex-basic', component: VuexBasic },
    { path: '/login',       name: 'login',      component: Login },
    { path: '/logout',      name: 'logout' }
]

const router = new VueRouter({ routes})

router.beforeEach(beforeEach)

export default router
