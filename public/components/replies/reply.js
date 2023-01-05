import {
  collection,
  query,
  where,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
import { db } from "../../firebase.js";
import { getQuestionReplies } from "../../api/index.js";

export const replyContainer = async () => {
  const questionId = localStorage.getItem("currentQuestionId");

  console.log("reply container question id", questionId);
  const roomContainer = document.getElementById("room-container");

  const container = document.createElement("section");
  const replyHeading = document.createElement("h2");

  container.setAttribute("id", "reply-container");
  container.setAttribute("class", "hidden");

  replyHeading.setAttribute("id", "reply-container-heading");
  replyHeading.innerText = "Question Replies";

  container.append(replyHeading, replyInputs());

  // const replies = ["Yes you can use flex", "Yup parent container not children"];

  const repliesDoc = await getQuestionReplies(questionId);
  // make request to get all replies by question Id here

  for (const reply of replies) {
    container.append(createReply(reply, questionId));
  }

  roomContainer.appendChild(container);
};

const replyInputs = () => {
  const replyLabel = document.createElement("label");
  const replyInput = document.createElement("input");

  const replyInputContainer = document.createElement("div");
  const submitButton = document.createElement("button");

  replyInputContainer.setAttribute("id", "reply-input-container");

  replyLabel.setAttribute("id", "reply-label");
  replyLabel.setAttribute("class", "reply-inputs");

  replyInput.setAttribute("id", "reply-input");
  replyInput.setAttribute("class", "reply-inputs");
  replyLabel.innerText = "Reply To Question";

  submitButton.setAttribute("id", "reply-submit");
  submitButton.innerText = "Post";

  replyInputContainer.append(replyLabel, replyInput, submitButton);
  return replyInputContainer;
};

export const createReply = (content, questionId) => {
  const container = document.createElement("div");
  const reply = document.createElement("h3");

  // create a reply by making a post to specific question reply route
  // if true create reply below

  container.setAttribute("id", "reply-card");
  container.setAttribute("type", "submit");

  reply.setAttribute("id", "reply-content");
  reply.setAttribute("class", "question-replies");
  reply.dataset.questionId = questionId;

  reply.innerText = content;
  container.appendChild(reply);
  return container;
};

// get all replies by question
export const getQuestionReplies = async (questionId) => {
  const replyCollection = collection(db, `questions/${questionId}/replies`);
  const allReplies = await getDocs(replyCollection);
  return allReplies;
};
