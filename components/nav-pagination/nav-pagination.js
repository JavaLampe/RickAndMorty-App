import {NavButton} from "../nav-button/nav-button.js"

export function NavPagination() {
    const nav = document.createElement("nav");
    const span = document.createElement("span");
    const button = NavButton(); 
    nav.classList.add("navigation");
    nav.setAttribute("data-js", "navigation");
    span.classList.add("navigation__pagination");
    span.setAttribute("data-js", "pagination");
    span.textContent = "1 / 1";
    nav.append(button[0], span, button[1]);
    return nav
};

