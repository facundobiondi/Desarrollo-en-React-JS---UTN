// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwB4NPNglOKVCdeeQo16cPJwaods-lylE",
  authDomain: "utn-react-auth-cc654.firebaseapp.com",
  projectId: "utn-react-auth-cc654",
  storageBucket: "utn-react-auth-cc654.appspot.com",
  messagingSenderId: "457350724633",
  appId: "1:457350724633:web:4ff6eb6ea50bfc5cf7fe88",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Auth persistence set to local storage");
  })
  .catch((err) => {
    console.error("Error setting local storage", err);
  });
