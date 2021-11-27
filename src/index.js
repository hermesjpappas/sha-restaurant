import { makeHeader } from "./header";
import { makeMain } from "./main_el";
import { makeHome } from "./home";
import { makeMenu } from "./menu";
import { makeContact } from "./contact";
import { makeFooter } from "./footer";

const content = document.getElementById("content");

// content.appendChild(makeHeader());
// content.appendChild(makeMain());
 //content.appendChild(makeFooter());

const home = document.getElementById("home");
const menu = document.getElementById("menu");
const contact = document.getElementById("contact");
const main = document.querySelector("main");

document.body.addEventListener("click", (e) => {
  if (e.target.classList.contains("tab-label")) {
    // console.log(e.target.id, "was clicked");
    if (e.target.id === "home") {
      e.target.classList.add("active-h");
      menu.classList.remove("active-m");
      contact.classList.remove("active-c");
      main.removeChild(main.childNodes[1]);
      const tab = makeHome();
      tab.id = "tab";
      main.appendChild(tab);
    } 
    
    else if (e.target.id === "menu") {
      e.target.classList.add("active-m");
      home.classList.remove("active-h");
      contact.classList.remove("active-c");
      main.removeChild(main.childNodes[1]);
      const tab = makeMenu();
      tab.id = "tab";
      main.appendChild(tab);
    } 
    
    else if (e.target.id === "contact") {
      e.target.classList.add("active-c");
      home.classList.remove("active-h");
      menu.classList.remove("active-m");
      main.removeChild(main.childNodes[1]);
      const tab = makeContact();
      tab.id = "tab";
      main.appendChild(tab);
    }
  }
});
