// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const apiKey = process.env.REACT_APP_APIKEY
const authDomain = process.REACT_APP_AUTHDOMAIN
const projectId = process.env.REACT_APP_PROJECTID
const storageBucket = process.env.REACT_APP_STORAGEBUCKET
const messagingSenderId = process.env.REACT_APP_MESSAGINGSENDERID
const appId = process.env.REACT_APP_APPID

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);