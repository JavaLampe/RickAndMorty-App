export function navButton() {
    const buttonPrev = document.createElement("button");
    const buttonNext = document.createElement("button");
    buttonPrev.classList.add("button", "button--prev");
    buttonNext.classList.add("button", "button--next");
    buttonPrev.setAttribute("data-js", "button-prev");
    buttonNext.setAttribute("data-js", "button-next");
    return [buttonPrev, buttonNext]
}