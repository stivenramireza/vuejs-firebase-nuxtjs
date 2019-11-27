import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'
var firebase = require('firebase/app')
import db from '../main'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: '',
    error: '',
    tasks: [],
    task: {
      name: '',
      id: ''
    }
  },
  mutations: {
    setUser(state, payload){
      state.user = payload
    },
    setError(state, payload){
      state.error = payload
    },
    setTasks(state, tasks){
      state.tasks = tasks
    },
    setTask(state, task){
      state.task = task
    },
    deleteTask(state, id){
      state.tasks = state.tasks.filter( doc => {
        return doc.id != id
      })
    }
  },
  actions: {
    createUser({commit}, payload){
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(res => {
        commit('setUser', {email: res.user.email, uid: res.user.uid})

        // Create a collection
        db.collection(res.user.email).add({
          name: 'Task example'
        })
        .then(() => {
          router.push({name: 'home'})
        })
      })
      .catch(err => {
        commit('setError', err.message)
      })
    },
    loginUser({commit}, payload){
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(res => {
        commit('setUser', {email: res.user.email, uid: res.user.uid})
        router.push({name: 'home'})
      })
      .catch(err => {
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
    },
    getTasks({commit}){
      const user = firebase.auth().currentUser
      const tasks = []
      db.collection(user.email).get()
      .then(snapshot => {
        snapshot.forEach( doc => {
          let task = doc.data()
          task.id = doc.id
          tasks.push(task)
        })
      })
      commit('setTasks', tasks)
    },
    getTask({commit}, id){
      const user = firebase.auth().currentUser
      db.collection(user.email).doc(id).get()
      .then(doc => {
        let task = doc.data()
        task.id = doc.id
        commit('setTask', task)
      })
    },
    updateTask({commit}, task){
      const user = firebase.auth().currentUser
      db.collection(user.email).doc(task.id).update({
        name: task.name
      })
      .then(() => {
        router.push({ name: 'home' })
      })
    },
    addTask({commit}, name){
      const user = firebase.auth().currentUser
      db.collection(user.email).add({
        name: name
      })
      .then(doc => {
        router.push({ name: 'home' })
      })
    },
    deleteTask({commit}, id){
      const user = firebase.auth().currentUser
      db.collection(user.email).doc(id).delete()
      .then(() => {
        commit('deleteTask', id)
      })
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
