import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAseMe72xm1BI7ICtpCfkwpfy9DOmGlvcs",
    authDomain: "fir-crud-6b5ee.firebaseapp.com",
    databaseURL: "https://fir-crud-6b5ee.firebaseio.com",
    projectId: "fir-crud-6b5ee",
    storageBucket: "fir-crud-6b5ee.appspot.com",
    messagingSenderId: "1065038021",
    appId: "1:1065038021:web:75cfd7b38bef850b3e00ac"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

firebaseApp.firestore().settings({})

export default firebaseApp.firestore()