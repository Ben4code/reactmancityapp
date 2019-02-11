import firebase from 'firebase/app';
//import 'firebase/app';
import 'firebase/database';


const config = {
    
  };
  export const firebaseApp = firebase.initializeApp(config);
  

  
  const firebaseDB = firebase.database();

  export const firebaseMatches = firebaseDB.ref('matches')

  