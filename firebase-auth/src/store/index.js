import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'
import undefined from 'firebase/empty-import'
var firebase = require('firebase/app')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: '',
    error: ''
  },
  mutations: {
    setUser(state, payload){
      state.user = payload
    },
    setError(state, payload){
      state.error = payload
    }
  },
  actions: {
    createUser({commit}, payload){
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(res => {
        console.log(res.user.email)
        console.log(res.user.uid)
        commit('setUser', {email: res.user.email, uid: res.user.uid})
        router.push({name: 'home'})
      })
      .catch(err => {
        console.log(err.message)
        commit('setError', err.message)
      })
    },
    loginUser({commit}, payload){
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(res => {
        console.log(res)
        commit('setUser', {email: res.user.email, uid: res.user.uid})
        router.push({name: 'home'})
      })
      .catch(err => {
        console.log(err)
        commit('setError', err.message) 
      })
    },
    detectUser({commit}, payload){
      if(payload != null){
        commit('setUser', {email: payload.email, uid: payload.uid})
      }else{
        commit('setUser', null)
      }
    },
    logout({commit}){
      firebase.auth().signOut()
      commit('setUser', null)
      router.push({name: 'login'})
    }
  },
  getters: {
    existUser(state){
      if(state.user === null || state.user === '' || state.user === undefined){
        return false
      }else{
        return true
      }
    }
  }
})
