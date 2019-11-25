import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

var firebase = require("firebase/app");

// Add additional services that you want to use
require("firebase/auth");
// require("firebase/database");
// require("firebase/firestore");
// require("firebase/messaging");
// require("firebase/functions");

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
    store.dispatch('detectarUsuario',{email: user.email, uid: user.uid})
  }else{
    store.dispatch('detectarUsuario', null)
  }

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
  
})




