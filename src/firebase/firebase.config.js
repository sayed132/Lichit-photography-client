// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHfQ3X7sPzBTX1MzOV_6liHcdwSLWJrvc",
  authDomain: "rst-digital.firebaseapp.com",
  projectId: "rst-digital",
  storageBucket: "rst-digital.appspot.com",
  messagingSenderId: "45443894689",
  appId: "1:45443894689:web:5477b20037fcc082270fe0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;