import { db } from "../firebase.js";
import { collection, addDoc, getDocs, doc, updateDoc, getDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"
// requests
// get all replies by question
export const getQuestionReplies = async (questionId) => {
  const replyCollection = collection(db, `questions/${questionId}/replies`);
  const allReplies = await getDocs(replyCollection);
  return allReplies;
};

// post question to db
export const postQuestion = async ({ name, question }) => {
  const questions = await addDoc(collection(db, "questions"), {
    name: name,
    question: question,
    highlighted: false,
    upvote: 0
  });
  const _question = doc(db, "questions", questions.id);
  const questionDoc = await getDoc(_question);
  console.log(questionDoc)
  return questionDoc
};

// mark question as highlighted
export const highLightQuestion = async (questionId, highlighted) => {
  // TODO: query question db and mark as highlighted
  const data = {
    highlighted: highlighted
  }
  const question = doc(db, "questions", questionId);
  updateDoc(question, data)

};

export const upvoteQuestion = async (questionId, voteCount) => {
  //TODO: increase upvote count
  const data = {
    upvote: voteCount
  }
  const question = doc(db, "questions", questionId);
  updateDoc(question, data)

};

// post reply to db
export const addReply = async (questionId, reply) => {
  // TODO: create reply associated to question by questionId
  const replyCollection = collection(db, `questions/${questionId}/replies`);

};
