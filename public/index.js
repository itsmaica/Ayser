import { createQuestion } from "./components/questions/index.js";
import { createReply } from "./components/replies/reply.js";
import { loadComponents } from "./views/room-page.js";
import { postQuestion } from "./components/question-card/index.js";
import { app, db } from "./firebase.js";

window.addEventListener("DOMContentLoaded", () => {
  loadComponents();

  // question card events
  const questionButton = document.getElementById("question-button");

  questionButton.addEventListener("click", async () => {
    const askersName = document.getElementById("name-input").value;
    const question = document.getElementById("question-input").value;

    const newQuestion = await postQuestion({ askersName, question });

    // create a question card with newQuestion
    createQuestion(newQuestion);
  });

  // icon events
  const highlightIcons = document.querySelectorAll("#highlight-icon");

  highlightIcons.forEach((highlightIcon) => {
    highlightIcon.addEventListener("click", () => {
      if (highlightIcon.className.includes("off")) {
        highlightIcon.classList.remove("off");
        highlightIcon.classList.add("on");
        highlightIcon.dataset.highlighted = "true";
      } else {
        highlightIcon.classList.remove("on");
        highlightIcon.classList.add("off");
        highlightIcon.dataset.highlighted = "false";
      }
    });
  });

  document.body.addEventListener("click", (e) => {
    const questionListContainer = document.getElementById(
      "question-list-container"
    );

    const questionContainer = document.getElementById("question-container");

    const roomContainer = document.getElementById("room-container");

    if (e.target.id === "reply-button" || e.target.id === "reply-container") {
      replyContainer.classList.remove("hidden");

      questionListContainer.classList.add("translate");
      questionContainer.classList.add("translate");
      roomContainer.classList.add("translate");
    } else {
      replyContainer.classList.add("hidden");

      questionListContainer.classList.remove("translate");
      questionContainer.classList.remove("translate");
      roomContainer.classList.add("translate");
    }
  });
  // reply events
  const replyContainer = document.getElementById("reply-container");

  replyContainer.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  const replySubmit = document.getElementById("reply-submit");

  replySubmit.addEventListener("click", () => {
    const replyInput = document.getElementById("reply-input");

    if (replyInput.value) {
      // should get the reply container by question id
      const replyContainer = document.getElementById("reply-container");

      replyContainer.appendChild(createReply(replyInput.value, 1));

      replyInput.value = "";
    }
  });

  const upvoteIcons = document.querySelectorAll("#upvote-icon");
  const upvoteSpans = document.querySelectorAll(`span[data-question-id]`);
  upvoteIcons.forEach((upvoteIcon) => {
    upvoteIcon.addEventListener("click", (e) => {
      e.stopPropagation();
      if (!e.target.dataset.disabled) {
        const upvoteId = e.target.dataset.questionId;

        let spanToUpdate;

        for (const span of upvoteSpans) {
          if (span.dataset.questionId === upvoteId) spanToUpdate = span;
        }

        if (spanToUpdate) {
          spanToUpdate.dataset.questionId = "1";
          spanToUpdate.innerText = "1";
          e.target.dataset.disabled = "true";
        }
      }
    });
  });
});
