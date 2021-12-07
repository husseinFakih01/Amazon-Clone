// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBymysnHPUxBzJsbNHlGLDtr9vLMA3F5TQ",
  authDomain: "clone-81e1a.firebaseapp.com",
  projectId: "clone-81e1a",
  storageBucket: "clone-81e1a.appspot.com",
  messagingSenderId: "312154873174",
  appId: "1:312154873174:web:da341bbb8a022dd4b34af7",
  measurementId: "G-XWJB388T8Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
