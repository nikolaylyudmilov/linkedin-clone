import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDqoeeIcKEg6kkfKqS36U_ktcQUkq3YxBQ",
    authDomain: "linkedin-clone-f8e48.firebaseapp.com",
    projectId: "linkedin-clone-f8e48",
    storageBucket: "linkedin-clone-f8e48.appspot.com",
    messagingSenderId: "38764283677",
    appId: "1:38764283677:web:8761ef168e34414f8c03f4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };