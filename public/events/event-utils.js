export const toggleHighlightIcon = (currentElement) => {
  const isHighlighted = currentElement.classList.contains("on");

  switch (isHighlighted) {
    case true:
      currentElement.classList.remove("on");
      currentElement.classList.add("off");
      currentElement.dataset.highlighted = "false";
      break;
    case false:
      currentElement.classList.remove("off");
      currentElement.classList.add("on");
      currentElement.dataset.highlighted = "true";
      break;
    default:
      return null;
  }

  // TODO: change highlighted property in question db
};

export const handleRoomTransition = (close) => {
  switch (close) {
    case null:
      const questionListContainer = document.getElementById(
        "question-list-container"
      );
      const questionContainer = document.getElementById("question-container");
      const replyContainer = document.getElementById("reply-container");

      const currentQuestionId = localStorage.getItem("currentQuestionId");
      const currentQuestion = document.querySelector(
        `#question-list-container > section[data-question-id="${currentQuestionId}"]`
      );

      currentQuestion.classList.remove("selected");

      replyContainer.classList.add("hidden");
      questionListContainer.classList.remove("translate");
      questionContainer.classList.remove("translate");
      break;
    default:
      return null;
  }
};

export const handleReplySlide = (currentElement) => {
  const questionId = currentElement.dataset.questionId;
  const replyContainer = document.getElementById("reply-container");

  const isHidden = replyContainer.classList.contains("hidden");

  switch (isHidden) {
    case true:
      replyContainer.classList.remove("hidden");
      localStorage.setItem("currentQuestionId", questionId);
      handleQuestionSlide(currentElement);
      break;
    case false:
      handleQuestionSlide(currentElement);
      break;
    default:
      return null;
  }
};

export const handleQuestionSlide = (currentElement) => {
  const questionListContainer = document.getElementById(
    "question-list-container"
  );
  const questionContainer = document.getElementById("question-container");

  const isHidden = questionContainer.classList.contains("translate");

  const currentQuestionId = currentElement.dataset.questionId;
  const currentQuestion = document.querySelector(
    `#question-list-container > section[data-question-id="${currentQuestionId}"]`
  );

  const previousQuestionId = localStorage.getItem("currentQuestionId");
  const previousQuestion = document.querySelector(
    `#question-list-container > section[data-question-id="${previousQuestionId}"]`
  );
  switch (isHidden) {
    case false:
      questionListContainer.classList.add("translate");
      questionContainer.classList.add("translate");
      previousQuestion.classList.remove("selected");
      currentQuestion.classList.add("selected");
      // localStorage.setItem("currentQuestionId", currentQuestionId);
      break;
    case true:
      previousQuestion.classList.remove("selected");
      currentQuestion.classList.add("selected");
      localStorage.setItem("currentQuestionId", currentQuestionId);
      break;
    default:
      return null;
  }
};

export const handleUpvoteCount = (currentElement) => {
  const dataAttribute = `span[data-question-id="${currentElement.dataset.questionId}"]`;
  const span = document.querySelector(`${dataAttribute}`);

  const isDisabled = JSON.parse(currentElement.dataset.disabled);

  switch (isDisabled) {
    case false:
      span.innerText = "1";
      span.dataset.count = Number(span.dataset.count) + 1;
      currentElement.dataset.disabled = true;
      break;
    default:
      return null;
  }
};

export const handleRoomEvents = (e) => {
  const currentElement = e.target;

  switch (currentElement.id) {
    case "reply-button":
      handleReplySlide(currentElement);
      break;
    case "highlight-icon":
      toggleHighlightIcon(currentElement);
      break;
    case "question-card":
    case "question-content":
    case "reply-actions-container":
    case "vote-count":
      handleReplySlide(currentElement);
      break;
    case "upvote-icon":
      handleUpvoteCount(currentElement);
      break;
    default:
      return null;
  }
};
