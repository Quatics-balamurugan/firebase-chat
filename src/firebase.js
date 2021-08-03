import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAFDQtyKEEVph6W2Qwi9EJclkogWbhWd14",
  authDomain: "whatsapp-clone-adb7d.firebaseapp.com",
  projectId: "whatsapp-clone-adb7d",
  storageBucket: "whatsapp-clone-adb7d.appspot.com",
  messagingSenderId: "721303276694",
  appId: "1:721303276694:web:580bb406002c9009f206b7",
  measurementId: "G-68EMBK5MH3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
