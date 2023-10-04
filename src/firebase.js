
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCLjvoaOf9OI_qCO61L9mklxAl57-1W1BE",
  authDomain: "chatapp-16985.firebaseapp.com",
  projectId: "chatapp-16985",
  storageBucket: "chatapp-16985.appspot.com",
  messagingSenderId: "991282652899",
  appId: "1:991282652899:web:c7977fb5105b61a231c7d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app)
const storage=getStorage(app)

export {app,auth,db,storage};


