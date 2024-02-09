// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2dOFOS111YZ-zibekBsrxJ4qLus0lhPE",
  authDomain: "recipe-maker-423a7.firebaseapp.com",
  projectId: "recipe-maker-423a7",
  storageBucket: "recipe-maker-423a7.appspot.com",
  messagingSenderId: "329579428591",
  appId: "1:329579428591:web:0dab792c312ef090c5b91a",
  measurementId: "G-MBQB6QSXC6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);