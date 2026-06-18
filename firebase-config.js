// Firebase SDK Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDaR1WM_-huO4NZmM9Sz25QBl3F692RiBk",
  authDomain: "shivam-biolink.firebaseapp.com",
  projectId: "shivam-biolink",
  storageBucket: "shivam-biolink.appspot.com",
  messagingSenderId: "152235659434",
  appId: "1:152235659434:web:536d3306f97b24ed1140d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services
const auth = getAuth(app);
const db = getFirestore(app);

// Export
export { auth, db };
