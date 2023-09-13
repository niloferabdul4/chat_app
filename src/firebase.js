
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "@firebase/firestore";
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyDjL4v0aGCTYNNEuORyCcJXJcW-A2W-gq4",
  authDomain: "chatapp-69060.firebaseapp.com",
  projectId: "chatapp-69060",
  storageBucket: "chatapp-69060.appspot.com",
  messagingSenderId: "141253988837",
  appId: "1:141253988837:web:c5e5b0b6236f38597ddf0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app)
const storage=getStorage(app)

export {app,auth,db,storage};