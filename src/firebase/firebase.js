import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export const firebaseConfig = {
    apiKey: "AIzaSyCTf-YconSYup5xO2HuJI_YhMMnMwUrvSQ",
    authDomain: "farmerbidder.firebaseapp.com",
    databaseURL: "https://farmerbidder.firebaseio.com",
    projectId: "farmerbidder",
    storageBucket: "farmerbidder.appspot.com",
    messagingSenderId: "1062400645819",
    appId: "1:1062400645819:web:61d33fbeca55c5fa61e79e",
    measurementId: "G-JMVMBKQXP9"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;