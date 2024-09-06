// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "house-estate-c2203.firebaseapp.com",
    projectId: "house-estate-c2203",
    storageBucket: "house-estate-c2203.appspot.com",
    messagingSenderId: "892676061610",
    appId: "1:892676061610:web:bc1e8140ba6f9c509dd3d3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);