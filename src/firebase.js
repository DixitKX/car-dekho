// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTb690-zoTFxWeRTTQOZHwx4rWXxgDNR8",
  authDomain: "car-dekho-6eba9.firebaseapp.com",
  projectId: "car-dekho-6eba9",
  storageBucket: "car-dekho-6eba9.firebasestorage.app",
  messagingSenderId: "935742884768",
  appId: "1:935742884768:web:4e8b2017e042234ac5b2c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };