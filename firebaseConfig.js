import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCEUY5XKTB9iJU46MhQNPAdwM-NaBC0UBE",
  authDomain: "mytransitmtl-b49dd.firebaseapp.com",
  projectId: "mytransitmtl-b49dd",
  storageBucket: "mytransitmtl-b49dd.appspot.com",
  messagingSenderId: "480265413009",
  appId: "1:480265413009:web:3d1530a71ffa2cbf79fa30"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

