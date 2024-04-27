// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA091t7n4d_UsoDE0uQOckIPAD_RYWTmw",
  authDomain: "coffee-710bd.firebaseapp.com",
  projectId: "coffee-710bd",
  storageBucket: "coffee-710bd.appspot.com",
  messagingSenderId: "776720475722",
  appId: "1:776720475722:web:9f88d35ed9c3f1f174e8b3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
