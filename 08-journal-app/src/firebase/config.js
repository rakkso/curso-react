// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD1MsBS-hQDtNrmXTnkaHQqdkNCJEwWZo",
  authDomain: "react-curso-5548a.firebaseapp.com",
  projectId: "react-curso-5548a",
  storageBucket: "react-curso-5548a.appspot.com",
  messagingSenderId: "924464420985",
  appId: "1:924464420985:web:0df179e1e46ec8d6ab5ca8"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth ( FirebaseApp);
export const FirebaseDB = getFirestore (FirebaseApp);

