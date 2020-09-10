import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAmWk8m45kgklgcEt2oVHfu2bSeF67n9cg",
    authDomain: "instagram-6406d.firebaseapp.com",
    databaseURL: "https://instagram-6406d.firebaseio.com",
    projectId: "instagram-6406d",
    storageBucket: "instagram-6406d.appspot.com",
    messagingSenderId: "857571348723",
    appId: "1:857571348723:web:6e5f1647de1ee502226786",
    measurementId: "G-J6X9KSRKQZ"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db,auth,storage}