//
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCflSKwwAW_ok9WoK1bVvD5eHdXszV4jMM",
  authDomain: "e-clone-b0d01.firebaseapp.com",
  projectId: "e-clone-b0d01",
  storageBucket: "e-clone-b0d01.appspot.com",
  messagingSenderId: "88807032855",
  appId: "1:88807032855:web:5e803e7eb9b0c7b2d87452",
  measurementId: "G-VFYP7LK4BK",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
