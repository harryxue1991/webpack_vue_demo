import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        name: "薛辛超",
        like: [
            {"id": "1",'Fruit': "apple"},
            {"id": "2",'Fruit': "banner"},
            {"id": "3",'Fruit': "origin"}
        ]
    },
    mutations: {
        changeName(state,msg) {
            state.name = msg
        }
    },
    getters: {
        doneLike: (state) => (id) => {
            return state.like.find(todo => todo.id == id)
        }
    }
})

export default store