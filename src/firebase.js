
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore, serverTimestamp } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBz22y2BQE5lP0bj7u3ylrPWmTK-LRsLb8",
  authDomain: "chatapp-a3fe9.firebaseapp.com",
  projectId: "chatapp-a3fe9",
  storageBucket: "chatapp-a3fe9.appspot.com",
  messagingSenderId: "205104832329",
  appId: "1:205104832329:web:6ae4d616f0e0efd4730498"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app)
const storage=getStorage(app)
const timestamp=serverTimestamp()

export {app,auth,db,storage,timestamp};


