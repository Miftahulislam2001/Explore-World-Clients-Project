// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQzN5JwqH2aVMDEVWvHU6Ut3p5MpMsDUs",
  authDomain: "explore-world-tour.firebaseapp.com",
  projectId: "explore-world-tour",
  storageBucket: "explore-world-tour.appspot.com",
  messagingSenderId: "1079125643316",
  appId: "1:1079125643316:web:9537af76fcedb813367a61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;