import firebase from 'firebase';

// Config from the firebase Console

const firebaseConfig = {
  apiKey: "AIzaSyDW4hQz75HrwgAzcigkOp6WrM-3E6c-sTg",
  authDomain: "clone-2236a.firebaseapp.com",
  databaseURL: "https://clone-2236a.firebaseio.com",
  projectId: "clone-2236a",
  storageBucket: "clone-2236a.appspot.com",
  messagingSenderId: "1073123883896",
  appId: "1:1073123883896:web:c620da969f228a9f57268d",
  measurementId: "G-X1SFEZ7Z83"
};

// initializing the Firebase App

const firebaseApp = firebase.initializeApp(firebaseConfig);

// initializing the Database

const db = firebaseApp.firestore();

// creating the auth from firebase

const auth = firebase.auth();

// exporting db and auth

export {db, auth};