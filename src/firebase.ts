import firebase from "firebase";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBsn5wJ3WQDxIym9uFc89ZmicksPMVUxrc",
  authDomain: "app-rs-clone.firebaseapp.com",
  projectId: "app-rs-clone",
  storageBucket: "app-rs-clone.appspot.com",
  messagingSenderId: "529242947574",
  appId: "1:529242947574:web:e88756087a40b081a451d7",
});

export const auth = app.auth();
export default app;
