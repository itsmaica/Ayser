import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore, collection, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"


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


// const questions = collection(db, 'questions');

// await setDoc(doc(questions, "question"), {
//   name: "First question", post: 'new post'
// })

// await setDoc(doc(questions, "question2"), {
//   name: "Second question", post: '2nd new post'
// })

// const questionRef = doc(db, 'questions', 'question');
// const questionSnap = await getDoc(questionRef);

// console.log(questionSnap.data());
