import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
  },
  actions: {
    getTasks({commit}){
      db.collection('tasks').get()
      .then(snapshot => {
        snapshot.forEach( doc => {
          console.log(doc.id)
          console.log(doc.data())
        })
      })
    }
  },
  modules: {
  }
})
