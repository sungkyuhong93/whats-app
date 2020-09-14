import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA5tjfMw6li7f2QBD_xpYF8_ToCXZWa3EY",
  authDomain: "whats-app-clone-5c5b6.firebaseapp.com",
  databaseURL: "https://whats-app-clone-5c5b6.firebaseio.com",
  projectId: "whats-app-clone-5c5b6",
  storageBucket: "whats-app-clone-5c5b6.appspot.com",
  messagingSenderId: "1025827850984",
  appId: "1:1025827850984:web:6e8bd04af21af4ef34175d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
