
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAsOwEyt07HPJWGtpsJF2XlZzoNktjPtV8",
  authDomain: "tiktok-jornada-de63e.firebaseapp.com",
  projectId: "tiktok-jornada-de63e",
  storageBucket: "tiktok-jornada-de63e.appspot.com",
  messagingSenderId: "999205677719",
  appId: "1:999205677719:web:d7ec3995f7f52ff345d7d2"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db