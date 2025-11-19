import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBPQPMlEYbsp5ibNMSWRFPpgfA4H6fLaRU",
  authDomain: "portfolio-f4130.firebaseapp.com",
  projectId: "portfolio-f4130",
  storageBucket: "portfolio-f4130.firebasestorage.app",
  messagingSenderId: "1053744874544",
  appId: "1:1053744874544:web:13209114cd0ea58d4559f5",
  measurementId: "G-PJBWG37T4S"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);