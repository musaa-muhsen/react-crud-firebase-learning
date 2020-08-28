 import firebase from 'firebase'

 // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD04liZDQt-hfxfbM-yz5Ekpd2mXNtxMQg",
    authDomain: "cowards-movies-v1-54e4f.firebaseapp.com",
    databaseURL: "https://cowards-movies-v1-54e4f.firebaseio.com",
    projectId: "cowards-movies-v1-54e4f",
    storageBucket: "cowards-movies-v1-54e4f.appspot.com",
    messagingSenderId: "1087728040091",
    appId: "1:1087728040091:web:d672cd00709266daa3ee3e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase