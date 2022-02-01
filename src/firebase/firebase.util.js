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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


