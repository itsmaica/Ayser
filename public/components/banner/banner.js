import { menuContainer } from "../icons/menu-icon.js";

export const banner = () => {
  const bannerContainer = document.createElement("div");

  bannerContainer.setAttribute("id", "banner-container");

  bannerContainer.appendChild(menuContainer());
  document.body.appendChild(bannerContainer);
};
