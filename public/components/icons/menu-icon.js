export const menuIcon = () => {
  const menu = document.createElement("i");

  menu.setAttribute("id", "menu-icon");
  menu.setAttribute("class", "fa fa-bars icons");
  menu.setAttribute("arial-hidden", "true");

  return menu;
};

export const menuContainer = () => {
  const container = document.createElement("div");
  const menu = menuIcon();

  container.setAttribute("id", "menu-container");

  container.appendChild(menu);
  return container;
};
