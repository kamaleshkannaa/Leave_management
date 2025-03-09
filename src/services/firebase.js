import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// 🔹 Replace with your actual Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyBYLY7jojj4hKZccdbQVR8kYB_gIXczTAg",
    authDomain: "sample-project-2d3f7.firebaseapp.com",
    projectId: "sample-project-2d3f7",
    storageBucket: "sample-project-2d3f7.appspot.com",  // ✅ Fixed!
    messagingSenderId: "476451857001",
    appId: "1:476451857001:web:6d9f56a868e833c42638f8",
    measurementId: "G-51DWPKTWRG"
}; 

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
