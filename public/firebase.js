import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"


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

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


