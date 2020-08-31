import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCrzuh4ulQwXghD0Oa9qz75YrwW2L600U0",
  authDomain: "twitter-clone-8b0d2.firebaseapp.com",
  databaseURL: "https://twitter-clone-8b0d2.firebaseio.com",
  projectId: "twitter-clone-8b0d2",
  storageBucket: "twitter-clone-8b0d2.appspot.com",
  messagingSenderId: "960907216518",
  appId: "1:960907216518:web:164b540188c80ff272f307",
  measurementId: "G-3G6KBLWLDS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
