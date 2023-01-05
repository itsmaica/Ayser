import { createQuestion } from "./components/questions/index.js";
import { createReply } from "./components/replies/reply.js";
import { loadComponents } from "./views/room-page.js";

import { replyContainer as repliesContainer } from "../components/replies/reply.js";

import { app, db } from "./firebase.js";
import { postQuestion } from "./api/index.js";

window.addEventListener("DOMContentLoaded", () => {
  loadComponents();

  // question card events
  const questionButton = document.getElementById("question-button");

  questionButton.addEventListener("click", async () => {
    const name = document.getElementById("name-input").value;
    const question = document.getElementById("question-input").value;

    const questionInputs = document.querySelectorAll(".question-inputs");
    for (const input of questionInputs) input.value = "";

    const newQuestion = await postQuestion({ name, question });
    // create a question card with newQuestion

    const questionsContainer = document.getElementById(
      "question-list-container"
    );

    questionsContainer.append(createQuestion(newQuestion));
  });

  // icon events

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

      localStorage.setItem("currentQuestionId", e.target.dataset.questionId);
      repliesContainer();
    } else if (e.target.id === "highlight-icon") {
      if (e.target.className.includes("off")) {
        e.target.classList.remove("off");
        e.target.classList.add("on");
        e.target.dataset.highlighted = "true";
      } else {
        e.target.classList.remove("on");
        e.target.classList.add("off");
        e.target.dataset.highlighted = "false";
      }
    } else if (e.target.id === "upvote-icon" && !e.target.dataset.disabled) {
      e.target.dataset.disabled = "true";

      const upvoteSpans = document.querySelectorAll("span[data-question-id]");

      let spanToUpdate;

      for (const span of upvoteSpans) {
        if (span.dataset.questionId === e.target.dataset.questionId) {
          spanToUpdate = span;
        }
        if (spanToUpdate) {
          spanToUpdate.dataset.questionId = "1";
          spanToUpdate.innerText = "1";
          break;
        }
      }
    } else {
      replyContainer.classList.add("hidden");

      questionListContainer.classList.remove("translate");
      questionContainer.classList.remove("translate");
      roomContainer.classList.add("translate");
    }
  });
  // reply events
  // const replyContainer = document.getElementById("reply-container");

  // replyContainer.addEventListener("click", (e) => {
  //   e.stopPropagation();
  // });

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
});
