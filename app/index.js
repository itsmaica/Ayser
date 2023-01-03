
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyDArww1thY3m2J0szEeuVhi2Eeb_YrYf1M",
  authDomain: "hackathon-aa.firebaseapp.com",
  projectId: "hackathon-aa",
  storageBucket: "hackathon-aa.appspot.com",
  messagingSenderId: "15564630310",
  appId: "1:15564630310:web:7a77c60bfca53b33f139e7",
  measurementId: "G-VJ001K91PV",
  databaseURL: "https://hackathon-aa-default-rtdb.firebaseio.com/"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase(app);

