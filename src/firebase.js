// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBciJUBsZlzs8ifJ8JUunIy0TJUrV68Y-4",
  authDomain: "shopping-8ed21.firebaseapp.com",
  projectId: "shopping-8ed21",
  storageBucket: "shopping-8ed21.firebasestorage.app",
  messagingSenderId: "495065428343",
  appId: "1:495065428343:web:e0c8927e4da482044b7172",
  measurementId: "G-296DXKKWZK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();