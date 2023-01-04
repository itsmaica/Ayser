import { highlightIcon, upvoteIcon } from "../icons/reply-icons.js";

export const questionListContainer = () => {
  const roomContainer = document.getElementById("room-container");
  const container = document.createElement("div");

  container.setAttribute("id", "question-list-container");

  const questionContent = [
    "Does flex go on the container? Does flex go on the container?Does flex go on the container?Does flex go on the container?Does flex go on the container?",
    "Does flex go on the container?",
    "Does flex go on the container?",
    "Does flex go on the container?",
  ];

  // make a request to get all questions that belong to a particular room here

  // map the question list and call create question with question properties 

  for (let i = 0; i < questionContent.length; i++) {
    const content = questionContent[i];

    const highlighted = false;
    const upvote = 0;
    // replace i with question id
    const question = createQuestion(content, i, highlighted, upvote);
    container.appendChild(question);
  }

  roomContainer.appendChild(container);
};

export const createQuestion = (content, id, highlighted, upvote) => {
  const container = document.createElement("section");
  container.setAttribute("class", "questions");

  const question = document.createElement("h2");
  question.setAttribute("class", "question-content");
  question.dataset.questionId = id;

  question.innerText = content;

  const questionActions = createQuestionActions(id, highlighted, upvote);

  container.append(question, questionActions);

  return container;
};

export const createQuestionActions = (questionId, highlighted, upvote) => {
  const actionContainer = document.createElement("div");
  actionContainer.setAttribute("id", "reply-actions-container");

  const replyButton = document.createElement("button");
  replyButton.setAttribute("id", "reply-button");
  replyButton.setAttribute("class", "submit-buttons");
  replyButton.dataset.questionId = questionId;

  replyButton.innerText = "Reply";

  actionContainer.append(
    highlightIcon(questionId, highlighted),
    upvoteIcon(questionId, upvote),
    replyButton
  );

  return actionContainer;
};

// TODO: fetch questions in question list container
export const getAllQuestions = async () => {
  const response = await fetch("/questions");

  if (response.ok) {
    const data = await response.json();
    return data;
  }
};
