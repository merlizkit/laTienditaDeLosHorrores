import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7wQjuotX2bwsaH-CwmME2P2C20oYSaYY",
  authDomain: "front-3f7c7.firebaseapp.com",
  projectId: "front-3f7c7",
  storageBucket: "front-3f7c7.appspot.com",
  messagingSenderId: "990183894043",
  appId: "1:990183894043:web:f64cbd90f750b4b5b69cbe",
  measurementId: "G-Q0C02S0T97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
