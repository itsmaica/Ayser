import { db } from "../../firebase.js"
import { getFirestore, collection } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"


export const questionContainer = () => {
  const roomContainer = document.getElementById("room-container");
  const container = document.createElement("div");

  container.setAttribute("id", "question-container");
  // container.setAttribute("class", "room-question-containers");

  const { nameField, questionField, questionButton } = questionInputs();

  container.append(nameField, questionField, questionButton);

  roomContainer.appendChild(container);
};

const questionInputs = () => {
  const nameField = document.createElement("div");
  const nameLabel = document.createElement("label");
  const nameInput = document.createElement("input");

  const questionField = document.createElement("div");
  const questionLabel = document.createElement("label");
  const questionInput = document.createElement("textarea");

  const questionButton = document.createElement("button");

  nameField.setAttribute("class", "input-container");
  questionField.setAttribute("class", "input-container");

  nameLabel.setAttribute("id", "name-label");
  nameLabel.innerText = "Name (optional)";

  nameInput.setAttribute("id", "name-input");
  nameInput.setAttribute("class", "question-inputs");

  questionLabel.setAttribute("id", "question-label");

  questionInput.setAttribute("id", "question-input");
  questionInput.setAttribute("class", "question-inputs");
  questionLabel.innerText = "Ask A Question";

  questionButton.setAttribute("id", "question-button");
  questionButton.setAttribute("class", "submit-buttons");
  questionButton.innerText = "Submit";

  nameField.append(nameLabel, nameInput);
  questionField.append(questionLabel, questionInput);

  return { nameField, questionField, questionButton };
};

// requests
export const postQuestion = async ({ name, question }) => {
  const res = await db.collection('posts')
  .doc('post')
  .set({name: name, question: question})

  console.log("POSTED", res.id);
  console.log(res);
};
