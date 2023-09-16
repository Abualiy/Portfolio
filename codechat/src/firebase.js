import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB9w0_QF49K8ndy7Pt4LJMWB4BHh0a9nB8",
    authDomain: "codechat-6054a.firebaseapp.com",
    projectId: "codechat-6054a",
    storageBucket: "codechat-6054a.appspot.com",
    messagingSenderId: "188995821302",
    appId: "1:188995821302:web:84f7f946d962728fc4d6d7",
    measurementId: "G-WV0R9Z0789"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();