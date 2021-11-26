import { makeHome } from "./home";

function makeMain() {

  const main = document.createElement("main");

  const tabLabels = document.createElement("div");
  tabLabels.id = "tab-labels";

  const home = document.createElement("div");
  home.id = "home";
  home.textContent = "home";
  home.classList.add("tab-label");
  home.classList.add("active-h");

  const menu = document.createElement("div");
  menu.id = "menu";
  menu.textContent = "menu";
  menu.classList.add("tab-label");

  const contact = document.createElement("div");
  contact.id = "contact";
  contact.textContent = "contact";
  contact.classList.add("tab-label");

  tabLabels.appendChild(home);
  tabLabels.appendChild(menu);
  tabLabels.appendChild(contact);

  main.appendChild(tabLabels);

  const tab = makeHome();
  tab.id = "tab";
  main.appendChild(tab);

  return main;
}

export { makeMain };
