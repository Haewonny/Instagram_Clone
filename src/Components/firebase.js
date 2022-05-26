import firebase from "firebase/compat";

firebase.initializeApp({
  apiKey: "AIzaSyB3bB6WIxy974MtKLDb69Wmarpf30SCSI4",
  authDomain: "instaclone-7cf5b.firebaseapp.com",
  projectId: "instaclone-7cf5b",
  storageBucket: "instaclone-7cf5b.appspot.com",
  messagingSenderId: "644739364796",
  appId: "1:644739364796:web:3b48b85eb587495d401db9",
});

const auth = firebase.auth();
const storage = firebase.storage();

export { storage, auth };
