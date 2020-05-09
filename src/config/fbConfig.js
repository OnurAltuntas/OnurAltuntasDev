import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyC7LLsd6qeVPzvNAJU4ZKAW0xaWs22D76o",
    authDomain: "onuraltuntasdev.firebaseapp.com",
    databaseURL: "https://onuraltuntasdev.firebaseio.com",
    projectId: "onuraltuntasdev",
    storageBucket: "onuraltuntasdev.appspot.com",
    messagingSenderId: "210395250670",
    appId: "1:210395250670:web:a831b1348478eb054bd8ff",
    measurementId: "G-CSJ3WLVCXE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  




  export default firebase;