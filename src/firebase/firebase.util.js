import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBGvz8g_-p24Y3W9uRdihhslVPEvhOBGqo",
  authDomain: "crwn-db-535fd.firebaseapp.com",
  projectId: "crwn-db-535fd",
  storageBucket: "crwn-db-535fd.appspot.com",
  messagingSenderId: "546268834350",
  appId: "1:546268834350:web:87ded8281fdab3ee400dbf",
  measurementId: "G-YK56RGWG50"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
 
  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(error){
      console.log("Error while creating user", error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


