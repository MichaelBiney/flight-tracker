// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALCPF1uzdRp9YljLsTPU8eFpKrkwsRXx4",
  authDomain: "trial3-f3433.firebaseapp.com",
  projectId: "trial3-f3433",
  storageBucket: "trial3-f3433.appspot.com",
  messagingSenderId: "829738037374",
  appId: "1:829738037374:web:02e8866a9bacdad18f282f",
  measurementId: "G-GSLQ8SW79V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
