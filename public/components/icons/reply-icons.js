export const highlightIcon = (questionId, highlighted) => {
  const highlight = document.createElement("i");

  highlight.setAttribute("id", "highlight-icon");
  highlight.setAttribute(
    "class",
    `fa-regular fa-lightbulb ${highlighted ? "on" : "off"}`
  );

  highlight.dataset.questionId = questionId;
  return highlight;
};

export const upvoteIcon = (questionId, upvote) => {
  const upvoteContainer = document.createElement("div");
  const upvoteIcon = document.createElement("i");

  const voteCount = document.createElement("span");
  voteCount.setAttribute("id", "vote-count");
  voteCount.innerText = upvote;
  voteCount.dataset.count = upvote;
  voteCount.dataset.questionId = questionId;

  upvoteContainer.setAttribute("id", "upvote-container");

  upvoteIcon.setAttribute("id", "upvote-icon");
  upvoteIcon.setAttribute("class", "fa-regular fa-hand-point-up");
  upvoteIcon.dataset.questionId = questionId;

  upvoteContainer.append(upvoteIcon, voteCount);

  return upvoteContainer;
};
