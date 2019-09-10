import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import db from './firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    task: { name: '', id: '' }
  },
  mutations: {
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
    getTasks({ commit }){
      const tasks = []
      db.collection('tasks').get()
      .then(snapshot => {
        snapshot.forEach( doc => {
          let task = doc.data();
          task.id = doc.id
          tasks.push(task)
        })
      })

      commit('setTasks', tasks)
    },
    getTask({ commit }, id){
      db.collection('tasks').doc(id).get()
      .then(doc => {
        let task = doc.data()
        task.id = doc.id
        commit('setTask', task)
      })
    },
    updateTask({ commit }, task){
      db.collection('tasks').doc(task.id).update({
        name: task.name
      })
      .then(() => {
        router.push({ name: 'home' })
      })
    },
    addTask({ commit }, newName){
      db.collection('tasks').add({
        name: newName
      })
      .then(doc => {
        console.log(doc.id)
        router.push({ name: 'home' })
      })
    },
    deleteTask({ commit, dispatch }, id){
      db.collection('tasks').doc(id).delete()
      .then(() => {
        console.log('Task deleted successfuly')
        // dispatch('getTasks')
        commit('deleteTask', id)
      })
    }
  }
})
