import firebase from "firebase";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBSvFVaZNjUDSAMmdfTvPrIbJgTA504lig",
  authDomain: "schedular-8d61c.firebaseapp.com",
  projectId: "schedular-8d61c",
  storageBucket: "schedular-8d61c.appspot.com",
  messagingSenderId: "877954768726",
  appId: "1:877954768726:web:1f892279c996f8166740f7",
  measurementId: "G-XDYQM703P5"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
