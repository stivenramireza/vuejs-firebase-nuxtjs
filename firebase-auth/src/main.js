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
  apiKey: "AIzaSyDARb2DmuqWK0NWNFBVsRuVMu8CTOyXXYs",
  authDomain: "crud-udemy.firebaseapp.com",
  databaseURL: "https://crud-udemy.firebaseio.com",
  projectId: "crud-udemy",
  storageBucket: "crud-udemy.appspot.com",
  messagingSenderId: "938509473843"
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




