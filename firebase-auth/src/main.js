import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

var firebase = require("firebase/app");
require("firebase/auth");
// require("firebase/database");

var config = {
  apiKey: "AIzaSyAseMe72xm1BI7ICtpCfkwpfy9DOmGlvcs",
  authDomain: "fir-crud-6b5ee.firebaseapp.com",
  databaseURL: "https://fir-crud-6b5ee.firebaseio.com",
  projectId: "fir-crud-6b5ee",
  storageBucket: "fir-crud-6b5ee.appspot.com",
  messagingSenderId: "1065038021",
  appId: "1:1065038021:web:75cfd7b38bef850b3e00ac"
};
firebase.initializeApp(config);

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