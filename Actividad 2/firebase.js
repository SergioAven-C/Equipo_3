import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCOKIdvGOVjACaZfvs8PJkTmkYG9b43Buk",
  authDomain: "veterinaria-1496e.firebaseapp.com",
  projectId: "veterinaria-1496e",
  storageBucket: "veterinaria-1496e.firebasestorage.app",
  messagingSenderId: "225229833685",
  appId: "1:225229833685:web:bd4791ba2e7d49d015695c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);