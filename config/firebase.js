// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTTVq0g-6yaO8mDPITeAySuAcAYcv4dRI",
  authDomain: "gamenight-6543f.firebaseapp.com",
  projectId: "gamenight-6543f",
  storageBucket: "gamenight-6543f.appspot.com",
  messagingSenderId: "210684948728",
  appId: "1:210684948728:web:99de22978f037600d94b0d",
  measurementId: "G-B9WZ9HJKTF"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
}
else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };