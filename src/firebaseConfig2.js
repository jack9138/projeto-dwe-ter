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

firebase.initializeApp(firebaseConfig);

export default firebase;