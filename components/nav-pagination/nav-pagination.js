export function createPagination() {
    const nav = document.createElement("nav");
    const buttonPrev = document.createElement("button");
    const buttonNext = document.createElement("button");
    const span = document.createElement("span") 
    nav.classList.add("navigation");
    nav.setAttribute("data-js", "navigation");
    buttonPrev.classList.add("button", "button--prev");
    buttonNext.classList.add("button", "button--next");
    buttonPrev.setAttribute("data-js", "button-prev");
    buttonNext.setAttribute("data-js", "button-next");
    span.classList.add("navigation__pagination");
    span.setAttribute("data-js", "pagination");
    nav.append(buttonPrev, span, buttonNext);
}

