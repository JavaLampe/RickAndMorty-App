export function Heading() {
    const headingElement = document.createElement("h1");
    headingElement.classList.add("title");
    headingElement.textContent = "Rick and More";
    return headingElement;
}