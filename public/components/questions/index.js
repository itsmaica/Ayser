import { highlightIcon, upvoteIcon } from "../icons/reply-icons.js";
import { db } from "../../firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"

export const questionListContainer = async () => {
  const roomContainer = document.getElementById("room-container");
  const container = document.createElement("div");

  container.setAttribute("id", "question-list-container");

  let currId = 0;
  const questions = collection(db, 'questions');
  const allQuestions = await getDocs(questions);
  allQuestions.forEach((doc) => {
    const document = doc.data();
    const content = createQuestion(document.question, currId);
    currId++;
    console.log(content.question);
    container.append(content);
  })

  roomContainer.appendChild(container);
};

export const createQuestion = (content, id) => {
  const container = document.createElement("section");
  container.setAttribute("class", "questions");

  const actionContainer = document.createElement("div");
  actionContainer.setAttribute("id", "reply-actions-container");

  const question = document.createElement("h2");
  question.setAttribute("class", "question-content");
  question.dataset.questionId = id;

  question.innerText = content;

  const replyButton = document.createElement("button");
  replyButton.setAttribute("id", "reply-button");
  replyButton.setAttribute("class", "submit-buttons");
  replyButton.dataset.questionId = id;

  replyButton.innerText = "Reply";

  actionContainer.append(replyButton, highlightIcon(id), upvoteIcon(id));
  container.append(question, actionContainer);

  return container;
};

// TODO: fetch questions in question list container
export const getAllQuestions = async () => {
  // const response = await fetch("/questions");

  // if (response.ok) {
  //   const data = await response.json();
  //   return data;
  // }
  const questions = collection(db, 'questions');

  const allQuestions = await getDocs(questions)
  allQuestions.forEach((doc) => {
    console.log(doc.data());
  })
};
