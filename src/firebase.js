import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDvutfHUuJ27jqekg5Ya8NcP4zeIg_gXK0",
    authDomain: "instagram-clone-5f6c6.firebaseapp.com",
    projectId: "instagram-clone-5f6c6",
    storageBucket: "instagram-clone-5f6c6.appspot.com",
    messagingSenderId: "761912092006",
    appId: "1:761912092006:web:2a5d1a1e0cb5cc926e14a7",
    measurementId: "G-94HST84VG7"
};

export default firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
