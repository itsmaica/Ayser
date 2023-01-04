import { menuContainer } from "../icons/menu-icon.js";

export const banner = () => {
  const bannerContainer = document.createElement("div");
  bannerContainer.setAttribute("id", "banner-container");

  const bannerHeading = document.createElement("h1");
  bannerHeading.setAttribute("id", "banner-heading");

  bannerHeading.innerText = "AYSR";
  bannerContainer.append(bannerHeading, menuContainer());

  document.body.appendChild(bannerContainer);
};
