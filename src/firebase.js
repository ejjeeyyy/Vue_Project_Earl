// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database'

import { getAuth } from 'firebase/auth'
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyX-9L3BQSFLHRw15HOQ27Eb_XyAgVTiE",
  authDomain: "vueproject-c6c48.firebaseapp.com",
  databaseURL: "https://vueproject-c6c48-default-rtdb.firebaseio.com",
  projectId: "vueproject-c6c48",
  storageBucket: "vueproject-c6c48.appspot.com",
  messagingSenderId: "62721318737",
  appId: "1:62721318737:web:e5efb36bf126bfdff03d70",
  measurementId: "G-C5CBFLY28K"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const auth = getAuth();

export { app, auth, database }