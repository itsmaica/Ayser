import { createReplyCard } from "../components/replies/reply.js";
import { handleRoomEvents, handleRoomTransition } from "./event-utils.js";
import { postQuestion } from "../components/question-card/index.js";

export const handleLogin = () => {
  const loginButton = document.getElementById("logIn-link");

  loginButton.addEventListener("click", () => {
    // TODO: Authenticate user or student and log them in
    localStorage.setItem("roomId", 1);
    window.location.reload();
  });
};

export const handleLogout = () => {
  const logoutButton = document.getElementById("logout-button");

  logoutButton &&
    logoutButton.addEventListener("click", (e) => {
      e.stopPropagation();
      localStorage.removeItem("roomId");
      window.location.reload();
    });
};

export const handleMenu = () => {
  const menuButton = document.getElementById("menu-icon");

  menuButton &&
    menuButton.addEventListener("click", () => {
      const options = document.getElementById("menu-options");
      const logoutButton = document.getElementById("logout-button");

      if (options.classList.contains("menu-hidden")) {
        options.classList.remove("menu-hidden");
        logoutButton.classList.remove("logout-hidden");
      } else {
        options.classList.add("menu-hidden");
        logoutButton.classList.add("logout-hidden");
      }
    });
};

export const handleCreateQuestion = () => {
  const questionButton = document.getElementById("question-button");

  questionButton &&
    questionButton.addEventListener("click", async () => {
      const name = document.getElementById("name-input").value;
      const question = document.getElementById("question-input").value;

      const questionInputs = document.querySelectorAll(".question-inputs");
      for (const input of questionInputs) input.value = "";

      const newQuestion = await postQuestion({ name, question });
      const questionsContainer = document.getElementById(
        "question-list-container"
      );

      questionsContainer.append(createQuestion(newQuestion));
    });
};

export const handleRoomSlideEffect = () => {
  const roomContainer = document.getElementById("room-container");

  roomContainer &&
    roomContainer.addEventListener("click", (e) => {
      e.stopPropagation();
      const closeRoomEffect = handleRoomEvents(e);
      handleRoomTransition(closeRoomEffect);

      // TODO: fetch room questions (need to optimize this feature, its query heavy)
    });
};

export const handleCreateReply = () => {
  const replySubmit = document.getElementById("reply-submit");
  const questionId = localStorage.getItem("currentQuestionId");

  replySubmit &&
    replySubmit.addEventListener("click", () => {
      const replyInput = document.getElementById("reply-input");

      if (replyInput.value) {
        const replyContainer = document.getElementById("reply-container");

        replyContainer.appendChild(
          createReplyCard(replyInput.value, questionId)
        );
        replyInput.value = "";

        // post to question reply with new reply input value
        // handleRoomTransition(null);
      }
    });
};
