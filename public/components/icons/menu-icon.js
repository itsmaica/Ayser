export const menuIcon = () => {
  const menu = document.createElement("i");

  menu.setAttribute("id", "menu-icon");
  menu.setAttribute("class", "fa fa-bars icons");
  menu.setAttribute("arial-hidden", "true");

  const options = menuOptions();

  menu.appendChild(options);
  return menu;
};

export const menuContainer = () => {
  const container = document.createElement("div");
  const menu = menuIcon();

  container.setAttribute("id", "menu-container");
  
  container.appendChild(menu);
  return container;
};

export const menuOptions = () => {
  const container = document.createElement("div");
  container.setAttribute("id", "menu-options");
  container.setAttribute("class", "menu-hidden");

  const logoutButton = document.createElement("button");
  logoutButton.setAttribute("id", "logout-button");
  logoutButton.setAttribute("class", "logout-hidden");

  logoutButton.innerText = "Logout";

  container.appendChild(logoutButton);
  return container;
};
