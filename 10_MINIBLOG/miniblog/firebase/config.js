// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9nrnvkhV_SX5L5T4NLGbxUArJf99AVx4",
  authDomain: "miniblog-413a6.firebaseapp.com",
  projectId: "miniblog-413a6",
  storageBucket: "miniblog-413a6.firebasestorage.app",
  messagingSenderId: "105706036615",
  appId: "1:105706036615:web:590d641776eb200d538722"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };