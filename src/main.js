import 'styles/main.scss'
import 'element-ui/lib/theme-chalk/index.css'

import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'

import VueRouter from 'vue-router'

import routers from './routers'
import store from './store/index.js'

Vue.use(VueRouter);
Vue.use(ElementUI);

const router = new VueRouter({
    mode: 'history',
    routes: routers
})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})