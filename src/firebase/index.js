// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

//! import
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8vk8jjkmpAk4khoFzet8ZDa6ypIhnJ3k",
  authDomain: "hi-chat-305d0.firebaseapp.com",
  projectId: "hi-chat-305d0",
  storageBucket: "hi-chat-305d0.firebasestorage.app",
  messagingSenderId: "125510111979",
  appId: "1:125510111979:web:641e955b92663f454b64ae",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//! authentication referansını frontende alma (kurulum)
export const auth = getAuth(app);

//! google sağlayıcısının kurulum
export const provider = new GoogleAuthProvider();

//! veritbanının referansını al (kurulum)
export const db = getFirestore(app);
