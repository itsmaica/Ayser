export const highlightIcon = (questionId) => {
  const highlight = document.createElement("i");

  highlight.setAttribute("id", "highlight-icon");
  highlight.setAttribute("class", "fa-regular fa-lightbulb off");

  highlight.dataset.questionId = questionId;
  return highlight;
};

export const upvoteIcon = (questionId) => {
  const upvoteContainer = document.createElement("div");
  const upvote = document.createElement("i");

  const voteCount = document.createElement("span");
  voteCount.setAttribute("id", "vote-count");
  voteCount.innerText = "0";
  voteCount.dataset.count = "0";
  voteCount.dataset.questionId = questionId;

  upvoteContainer.setAttribute("id", "upvote-container");

  upvote.setAttribute("id", "upvote-icon");
  upvote.setAttribute("class", "fa-regular fa-hand-point-up");
  upvote.dataset.questionId = questionId;

  upvoteContainer.append(upvote, voteCount);

  return upvoteContainer;
};
