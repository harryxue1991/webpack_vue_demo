import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        name: "薛辛超"
    },
    mutations: {
        changeName(state,msg) {
            state.name = msg
        }
    }
})

export default store