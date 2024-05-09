import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCCDaYhdRUZVhrzcoeOnuY6ChxH39vClF0",
    authDomain: "netflix-clone-744c5.firebaseapp.com",
    projectId: "netflix-clone-744c5",
    storageBucket: "netflix-clone-744c5.appspot.com",
    messagingSenderId: "967940539225",
    appId: "1:967940539225:web:a2e6f3e4faca30041c4248"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth };
export default db;