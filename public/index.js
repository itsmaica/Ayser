import { loadComponents } from "./views/room-page.js";
import {
  handleCreateQuestion,
  handleCreateReply,
  handleRoomSlideEffect,
} from "./events/index.js";

window.addEventListener("DOMContentLoaded", () => {
  loadComponents();

  // icon events
  handleRoomSlideEffect();

  // api events
  handleCreateQuestion();
  handleCreateReply();

});
