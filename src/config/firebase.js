
import { initializeApp} from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import { initializeAuth } from 'firebase/auth';

//Aqui vc deve colocar as suas credenciais 
const firebaseConfig = {
  apiKey: "AIzaSyCLINGVt6Xb8rGXEDg2BhLaq0KSXKmdbk4",
  authDomain: "karynneifal523.firebaseapp.com",
  projectId: "karynneifal523",
  storageBucket: "karynneifal523.appspot.com",
  messagingSenderId: "748838360771",
  appId: "1:748838360771:web:ba482319721c0171aa7476",
  measurementId: "G-ERGZ71BHK3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = initializeAuth(app)
export { app, db, auth } 