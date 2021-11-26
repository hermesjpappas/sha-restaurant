import { makeHeader } from './header';
import { makeMain } from './main_el';
import { makeFooter } from './footer';

const content = document.getElementById("content");

content.appendChild(makeHeader());
