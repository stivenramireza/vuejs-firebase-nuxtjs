import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fruits: [
      { name: 'Apple', quantity: 0},
      { name: 'Pear', quantity: 0},
      { name: 'Orange', quantity: 0}
    ]
  },
  mutations: {
    increase(state, index) {
      state.fruits[index].quantity ++
    },
    reset(state){
      state.fruits.forEach( element => {
        element.quantity = 0
      })
    }
  }
})
