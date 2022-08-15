import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";
import { signInWithPopup } from "firebase/auth";

const config = {
  apiKey: "AIzaSyA-XN_uxjRYZTzZQKD-uIiTxu9TZvhbgPQ",
  authDomain: "value-shop-db.firebaseapp.com",
  projectId: "value-shop-db",
  storageBucket: "value-shop-db.appspot.com",
  messagingSenderId: "964202647244",
  appId: "1:964202647244:web:891f0e4c7f8c47962c3c69",
  measurementId: "G-7LXTM80G3E",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
