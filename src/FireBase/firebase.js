// Instead of importing the entire 'firebase/app'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration object remains the same
const firebaseConfig = {
  apiKey: "AIzaSyCdDq080Rq5_uC1kjqslovhDW14FxA_pCY",
  authDomain: "moaj-3dc62.firebaseapp.com",
  projectId: "moaj-3dc62",
  storageBucket: "moaj-3dc62.appspot.com",
  messagingSenderId: "616671518605",
  appId: "1:616671518605:web:1289b68059e7b5938927c4",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


