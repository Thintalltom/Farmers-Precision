// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUhqbcpwkagDsP6G7o1DbBVDijDsK5buk",
  authDomain: "farmers-record.firebaseapp.com",
  projectId: "farmers-record",
  storageBucket: "farmers-record.appspot.com",
  messagingSenderId: "162076900524",
  appId: "1:162076900524:web:015b79267ef74c6900f309",
  measurementId: "G-FRLJ39DWJJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
