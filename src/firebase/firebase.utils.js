import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAecrl1SJmR0dzEBEr0iKBrbY38bhufTcY",
    authDomain: "ecommerce-framework-db.firebaseapp.com",
    databaseURL: "https://ecommerce-framework-db.firebaseio.com",
    projectId: "ecommerce-framework-db",
    storageBucket: "ecommerce-framework-db.appspot.com",
    messagingSenderId: "259282047255",
    appId: "1:259282047255:web:1422b54dedb2d7b23d2752",
    measurementId: "G-H95BJS09D9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;