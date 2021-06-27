import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCc2vDA2kOaYASJ2G_SBQBhquJqdTlJ3r0",
  authDomain: "sparta-react-631bc.firebaseapp.com",
  projectId: "sparta-react-631bc",
  storageBucket: "sparta-react-631bc.appspot.com",
  messagingSenderId: "1041785816505",
  appId: "1:1041785816505:web:5c28fafe3de9c5cc3da268",
  measurementId: "G-Y61K0KJT4G",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };
