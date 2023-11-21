// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBcb3bvhYHSXXIZGaaTa6hUU_Vq3XNWDR0",
    authDomain: "aston-react-project-4fd9c.firebaseapp.com",
    projectId: "aston-react-project-4fd9c",
    storageBucket: "aston-react-project-4fd9c.appspot.com",
    messagingSenderId: "1009523175117",
    appId: "1:1009523175117:web:02deb5d7123275fb230384",
    measurementId: "G-VCBCY3EXZ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);