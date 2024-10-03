// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa0a1Q94XnoJTx6n5HzdG6qbJNFpKmRP4",
  authDomain: "blog-website-8c854.firebaseapp.com",
  projectId: "blog-website-8c854",
  storageBucket: "blog-website-8c854.appspot.com",
  messagingSenderId: "1000168815570",
  appId: "1:1000168815570:web:5283dd0a3ad94310f7e60b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firedb=getFirestore(app);
const auth=getAuth(app);
const storage=getStorage(app);
export {firedb,auth,storage}