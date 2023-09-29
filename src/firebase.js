
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "@firebase/firestore";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAml7xz2cYAfUKq6PXU5ZDrtVUaNOyKDVs",
  authDomain: "chatapp-89f88.firebaseapp.com",
  projectId: "chatapp-89f88",
  storageBucket: "chatapp-89f88.appspot.com",
  messagingSenderId: "1038033351995",
  appId: "1:1038033351995:web:5469f2888233399ec3b31e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app)
const storage=getStorage(app)

export {app,auth,db,storage};


