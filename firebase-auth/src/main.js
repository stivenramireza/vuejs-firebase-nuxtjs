import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");

var config = {
  apiKey: "AIzaSyAseMe72xm1BI7ICtpCfkwpfy9DOmGlvcs",
  authDomain: "fir-crud-6b5ee.firebaseapp.com",
  databaseURL: "https://fir-crud-6b5ee.firebaseio.com",
  projectId: "fir-crud-6b5ee",
  storageBucket: "fir-crud-6b5ee.appspot.com",
  messagingSenderId: "1065038021",
  appId: "1:1065038021:web:75cfd7b38bef850b3e00ac"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({})
export default firebaseApp.firestore()

Vue.config.productionTip = false

firebase.auth().onAuthStateChanged((user)=>{
  console.log(user);
  if(user){
    store.dispatch('detectUser',{email: user.email, uid: user.uid})
  }else{
    store.dispatch('detectUser', null)
  }

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
  
})