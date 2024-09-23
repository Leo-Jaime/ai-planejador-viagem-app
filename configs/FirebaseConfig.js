// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd6cal3e9cv4W1UUH6Ln3yLttpkKIaatQ",
  authDomain: "ai-planejador-viagem-app.firebaseapp.com",
  projectId: "ai-planejador-viagem-app",
  storageBucket: "ai-planejador-viagem-app.appspot.com",
  messagingSenderId: "894976271942",
  appId: "1:894976271942:web:0df493d7af08ace8510c47"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
