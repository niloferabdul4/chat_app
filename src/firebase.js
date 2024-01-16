
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore, serverTimestamp } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD6AxmlNXsjwSgvOeYhj2Ep7MfHwVuDeWs",
  authDomain: "chat-app-2891c.firebaseapp.com",
  projectId: "chat-app-2891c",
  storageBucket: "chat-app-2891c.appspot.com",
  messagingSenderId: "696741587649",
  appId: "1:696741587649:web:6da2223309ef34c7140240",
  measurementId: "G-NH2VHL97Y3"
};
// // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app)
const storage=getStorage(app)
const timestamp=serverTimestamp()

export {app,auth,db,storage,timestamp};



