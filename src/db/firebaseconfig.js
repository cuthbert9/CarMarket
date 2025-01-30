// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import  {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "carmarket-9c385.firebaseapp.com",
  projectId: "carmarket-9c385",
  storageBucket: "carmarket-9c385.appspot.com",
  messagingSenderId: "111144302855",
  appId: "1:111144302855:web:93ba5035066cb241f4ada2",
  measurementId: "G-141WPGYMZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);