// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnkAhdk6cGVpnfVjHsC1OtDarxUqV92Bg",
  authDomain: "hospital-3e88d.firebaseapp.com",
  projectId: "hospital-3e88d",
  storageBucket: "hospital-3e88d.appspot.com",
  messagingSenderId: "846153173667",
  appId: "1:846153173667:web:74a1cdb15f0dde4eb50d16",
  measurementId: "G-PWFP1TY2EP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;