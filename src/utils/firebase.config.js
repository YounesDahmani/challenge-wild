import firebase from "firebase/compat/app";
import { getFirestore } from "@firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAS39BBz7AhGtcnD6OfmDpAtoFualF35I4",
  authDomain: "test-tech-wild-9917b.firebaseapp.com",
  projectId: "test-tech-wild-9917b",
  storageBucket: "test-tech-wild-9917b.appspot.com",
  messagingSenderId: "549854848981",
  appId: "1:549854848981:web:cf4bad0d43c948b70c7f5c",
});

export const db = getFirestore();
export default app;
