import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDls3HD7jB5XNpeJ_xCjT94sFlSBZTGLf0",
  authDomain: "proyectofinalreact-c5c81.firebaseapp.com",
  projectId: "proyectofinalreact-c5c81",
  storageBucket: "proyectofinalreact-c5c81.appspot.com",
  messagingSenderId: "704022862981",
  appId: "1:704022862981:web:b70a352d157f4349abddec"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

