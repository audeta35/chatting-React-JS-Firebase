import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyB0JnjW1OTx9tgIr7L2PCdUC_6CF2l0ODk",
  authDomain: "chatting-d59b7.firebaseapp.com",
  databaseURL: "https://chatting-d59b7.firebaseio.com",
  projectId: "chatting-d59b7",
  storageBucket: "chatting-d59b7.appspot.com",
  messagingSenderId: "588002012388",
  appId: "1:588002012388:web:1ec3e9471052cb0d7050f1"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.database();
export default firebase;
