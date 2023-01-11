import { loadComponents } from "./views/room-page.js";
import { loadLandingPageComponents } from "./views/landing-page.js";
import {
  handleCreateQuestion,
  handleCreateReply,
  handleLogout,
  handleMenu,
  handleRoomSlideEffect,
} from "./events/index.js";

window.addEventListener("DOMContentLoaded", () => {
  const roomId = localStorage.getItem("roomId");

  if (!roomId) loadLandingPageComponents();
  else loadComponents();

  // icon events
  handleRoomSlideEffect();
  handleMenu();

  // api events
  handleCreateQuestion();
  handleCreateReply();

  // auth
  handleLogout();
});
