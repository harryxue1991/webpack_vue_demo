import 'styles/main.scss';

import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'

import routers from './routers'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: routers
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})