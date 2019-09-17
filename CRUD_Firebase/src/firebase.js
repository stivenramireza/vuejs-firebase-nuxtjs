import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

const config = {
    apiKey: "AIzaSyDfi9Y7_bn_WhjABRn-yrJhABBOXzwTDA0",
    authDomain: "crud-firebase-7a5ac.firebaseapp.com",
    databaseURL: "https://crud-firebase-7a5ac.firebaseio.com",
    projectId: "crud-firebase-7a5ac",
    storageBucket: "",
    messagingSenderId: "821366453011",
    appId: "1:821366453011:web:b81f23cec5f164036fe0e6"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(config);

  firebaseApp.firestore().settings({timestampsInSnapshots: true})

  export default firebaseApp.firestore()