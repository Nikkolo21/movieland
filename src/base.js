import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDVszS0EM722ddgE0NqiMTj2r4_JSRCnr4",
    authDomain: "movie-land-be2d2.firebaseapp.com",
    databaseURL: "https://movie-land-be2d2.firebaseio.com",
    projectId: "movie-land-be2d2",
    storageBucket: "movie-land-be2d2.appspot.com",
    messagingSenderId: "532417310618",
    appId: "1:532417310618:web:89e393616efd161cfd9423",
    measurementId: "G-FQ2004PJDB"
});

const base = Rebase.createClass(app.database());
const auth = app.auth();

const firestoreDB = app.firestore();

export { base, auth, firestoreDB };