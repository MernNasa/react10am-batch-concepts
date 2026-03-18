// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDICH5-pOlptkqQ-O0izw6KwAeO-3c_iz4",
  authDomain: "reactfirebase-6c60c.firebaseapp.com",
  projectId: "reactfirebase-6c60c",
  storageBucket: "reactfirebase-6c60c.firebasestorage.app",
  messagingSenderId: "308984415362",
  appId: "1:308984415362:web:9646fcf73da51ff644a09b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db  =getFirestore(app)