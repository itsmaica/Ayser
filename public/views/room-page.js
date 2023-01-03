import { banner } from "../components/banner/banner.js";
import { questionContainer } from "../components/question-card/index.js";
import { questionListContainer } from "../components/questions/index.js";
import { replyContainer } from "../components/replies/reply.js";

const roomContainer = () => {
  const container = document.createElement("div");
  container.setAttribute("id", "room-container");
  document.body.appendChild(container);
};

export const loadComponents = () => {
  banner();
  roomContainer();
  questionContainer();
  questionListContainer();
  replyContainer();
};
