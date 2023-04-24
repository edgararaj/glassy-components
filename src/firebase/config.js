// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAo4URUB9kUdlIEXZrCCCO5zJALVqy1uNI",

  authDomain: "nice-champion-377014.firebaseapp.com",

  projectId: "nice-champion-377014",

  storageBucket: "nice-champion-377014.appspot.com",

  messagingSenderId: "727372327048",

  appId: "1:727372327048:web:61a541273584dc8878973d",

  measurementId: "G-SMRSBTJ1C6"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

//const analytics = getAnalytics(app);

export default app;