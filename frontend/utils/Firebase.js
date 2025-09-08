import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "smartlms-29d7f.firebaseapp.com",
  projectId: "smartlms-29d7f",
  storageBucket: "smartlms-29d7f.firebasestorage.app",
  messagingSenderId: "770608192302",
  appId: "1:770608192302:web:4606880df5336fe0fe78bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}
