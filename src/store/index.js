import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import second from './second'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        second
    },
    state: {
        name: "薛辛超",
        like: [
            {"id": "1",'Fruit': "apple"},
            {"id": "2",'Fruit': "banner"},
            {"id": "3",'Fruit': "origin"}
        ],
        person: {}
    },
    mutations: {
        changeName(state,msg) {
            state.name = msg
        },
        changeperson(state,msg) {
            state.person = msg
        }
    },
    getters: {
        doneLike: (state) => (id) => {
            return state.like.find(todo => todo.id == id)
        }
    },
    actions: {
        // .then((response) => {
        //     return new Promise(function(res, rej) {
        //         setTimeout(() =>{
        //             res(response)
        //          },1000)
        //     });
        // })
        getMsg({ commit }) {
            axios({
                method: 'get',
                url: 'src/json/person.json'
            }).then((res) =>{
                commit('changeperson',res.data)
            })
        }
    }
})

export default store