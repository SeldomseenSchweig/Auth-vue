// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAu_OhopDDsdHCGJFWFP-l2-RY6nZGKcas",
  authDomain: "vue-firebase-d2b7e.firebaseapp.com",
  projectId: "vue-firebase-d2b7e",
  storageBucket: "vue-firebase-d2b7e.appspot.com",
  messagingSenderId: "129458296129",
  appId: "1:129458296129:web:dd3d23e5fbcbe64ba33dc0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
