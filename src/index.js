import { makeHeader } from './header';
import { makeMain, homeContent, menuContent, contactContent } from './main_el';
import { makeFooter } from './footer';

const content = document.getElementById("content");

content.appendChild(makeHeader());
content.appendChild(makeMain());
// content.appendChild(makeFooter());


