import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

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

  const firebaseMatches = firebaseDB.ref('matches')
  const firebasePromotions = firebaseDB.ref('promotions')


  
  export  {firebase, firebaseMatches, firebasePromotions}

  