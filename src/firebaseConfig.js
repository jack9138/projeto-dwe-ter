import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCQg4ee5PVYyl_8iP3BDGrkqG6L49icgV0",
  authDomain: "projeto-pagina-dwe.firebaseapp.com",
  projectId: "projeto-pagina-dwe",
  storageBucket: "projeto-pagina-dwe.appspot.com",
  messagingSenderId: "458648101760",
  appId: "1:458648101760:web:2cd36d4224f61b29d71765"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
firebase.initializeApp(firebaseConfig);

export { app, db, auth };
export default firebase;
