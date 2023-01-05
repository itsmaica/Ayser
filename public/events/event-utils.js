export const toggleHighlightIcon = (currentElement) => {
  const isHighlighted = currentElement.classList.contains("on");

  switch (isHighlighted) {
    case true:
      currentElement.classList.remove("on");
      currentElement.classList.add("off");
      currentElement.dataset.highlighted = "false";
    case false:
      currentElement.classList.remove("off");
      currentElement.classList.add("on");
      currentElement.dataset.highlighted = "true";
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
      handleQuestionSlide(replyContainer);
      break;
    case false:
      replyContainer.classList.add("hidden");
      handleQuestionSlide(replyContainer);
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

  const isHidden = currentElement.classList.contains("hidden");

  switch (isHidden) {
    case true:
      questionListContainer.classList.remove("translate");
      questionContainer.classList.remove("translate");
      break;
    case false:
      questionListContainer.classList.add("translate");
      questionContainer.classList.add("translate");
      break;
    default:
      return null;
  }
};

export const handleUpvoteCount = (currentElement) => {
  const dataAttribute = `span[data-question-id="${currentElement.dataset.questionId}"]`;
  const span = document.querySelector(`${dataAttribute}`);

  const isDisabled = currentElement.dataset.disabled;

  switch (isDisabled) {
    case true:
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
    case "reply-button" || "reply-container":
      handleReplySlide(currentElement);
      break;
    case "highlight-icon":
      toggleHighlightIcon(currentElement);
      break;
    case "upvote-icon":
      handleUpvoteCount(currentElement);
    default:
      return null;
  }
};
