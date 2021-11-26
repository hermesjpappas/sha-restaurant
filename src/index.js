import { makeHeader } from './header';
import { makeMain, homeContent, menuContent, contactContent } from './main_el';
import { makeFooter } from './footer';

const content = document.getElementById("content");

content.appendChild(makeHeader());
content.appendChild(makeMain());
// content.appendChild(makeFooter());


const labels = document.querySelectorAll('.tab-label');
const home = document.getElementById("home");
const menu = document.getElementById("menu");
const contact = document.getElementById("contact");
const tab = document.getElementById("tab");

labels.forEach(label => {
    label.addEventListener('click', (e) => {
        // console.log(label.id, "was clicked");
        if(label.id==="home") {
            label.classList.add("active-h");
            menu.classList.remove("active-m");
            contact.classList.remove("active-c");
            tab.innerHTML = homeContent;
            
        }
        else if(label.id==="menu") {
            label.classList.add("active-m");
            home.classList.remove("active-h");
            contact.classList.remove("active-c");
            tab.innerHTML = menuContent;
        }

        else if(label.id==="contact") {
            label.classList.add("active-c");
            home.classList.remove("active-h");
            menu.classList.remove("active-m");
            tab.innerHTML = contactContent;
        }
    });
});
