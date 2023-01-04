import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"
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
  });
};

// mark question as highlighted
export const highLightQuestion = async (questionId, highlighted) => {
  // TODO: query question db and mark as highlighted
};

export const upvoteQuestion = async (questionId, voteCount) => {
  //TODO: increase upvote count
};

// post reply to db
export const addReply = async (questionId, reply) => {
  // TODO: create reply associated to question by questionId
  const replyCollection = collection(db, `questions/${questionId}/replies`);

};
