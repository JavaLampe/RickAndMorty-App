import {navButton} from "../nav-button/nav-button.js"

export function createPagination() {
    const nav = document.createElement("nav");
    const span = document.createElement("span");
    const button = navButton(); 
    nav.classList.add("navigation");
    nav.setAttribute("data-js", "navigation");
    span.classList.add("navigation__pagination");
    span.setAttribute("data-js", "pagination");
    nav.append(button[0], span, button[1]);
    return nav
}

