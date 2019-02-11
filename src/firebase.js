import firebase from 'firebase/app';
//import 'firebase/app';
import 'firebase/database';


const config = {
    apiKey: "AIzaSyDXuqZ_KFIooZzO3e3jR4fJcLM2IOunHkM",
    authDomain: "mancity-f7095.firebaseapp.com",
    databaseURL: "https://mancity-f7095.firebaseio.com",
    projectId: "mancity-f7095",
    storageBucket: "mancity-f7095.appspot.com",
    messagingSenderId: "1082358457053"
  };
  export const firebaseApp = firebase.initializeApp(config);
  

  
  const firebaseDB = firebase.database();

  export const firebaseMatches = firebaseDB.ref('matches')

  