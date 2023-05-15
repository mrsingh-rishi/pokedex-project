// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {collection, getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyB2NFoiyPnI5TRuWlihosiYSqBdqH44Db0",
  authDomain: "pokedex-bcbb7.firebaseapp.com",
  projectId: "pokedex-bcbb7",
  storageBucket: "pokedex-bcbb7.appspot.com",
  messagingSenderId: "180893975040",
  appId: "1:180893975040:web:35e2009d8a0704a6368ee5",
  measurementId: "G-9E18P7EDWJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app); 

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");