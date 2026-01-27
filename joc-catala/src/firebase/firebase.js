import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCFYztNxelrlZhPlZaeNeqYSdOuRDUkQCo",
  authDomain: "joc-catala-f5c6a.firebaseapp.com",
  projectId: "joc-catala-f5c6a",
  storageBucket: "joc-catala-f5c6a.firebasestorage.app",
  messagingSenderId: "297591702816",
  appId: "1:297591702816:web:2d5051830798c3c8dec345"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);