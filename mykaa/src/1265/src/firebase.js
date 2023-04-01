// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyC2-dgpF6_V2t3Uyof98_HJIpI7LMDRxdE",
  authDomain: "react-authentication-a38e9.firebaseapp.com",
  projectId: "react-authentication-a38e9",
  storageBucket: "react-authentication-a38e9.appspot.com",
  messagingSenderId: "461412935317",
  appId: "1:461412935317:web:86c7f49795be9f076a1d9c",
  measurementId: "G-FHFDHNLFQG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;