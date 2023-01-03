export const replyContainer = () => {
  const roomContainer = document.getElementById("room-container");

  const container = document.createElement("section");
  const replyHeading = document.createElement("h2");

  container.setAttribute("id", "reply-container");
  container.setAttribute("class", "hidden");

  replyHeading.setAttribute("id", "reply-container-heading");
  replyHeading.innerText = "Question Replies";

  container.append(replyHeading, replyInputs());

  const replies = ["Yes you can use flex", "Yup parent container not children"];

  for (const reply of replies) {
    container.append(createReply(reply, 1));
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
  const response = await fetch(`/questions/${questionId}/replies`);

  if (response.ok) {
    const data = await response.json();
    return data;
  }
};
