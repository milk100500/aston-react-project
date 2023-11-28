// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref } from "firebase/database";
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
    measurementId: "G-VCBCY3EXZ1",
    databaseURL: "https://aston-react-project-4fd9c-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase();
export const dbRef = ref(getDatabase());