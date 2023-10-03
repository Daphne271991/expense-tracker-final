// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtsj0a0c8LRGNB_dCX1HCoS5cR-RG6ApI",
  authDomain: "expense-tracker-ff66e.firebaseapp.com",
  projectId: "expense-tracker-ff66e",
  storageBucket: "expense-tracker-ff66e.appspot.com",
  messagingSenderId: "836489143051",
  appId: "1:836489143051:web:042ac359bc333513eef80e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
