export function noCharacter(cardElement, searchQuery) {
    cardElement.innerHTML = "";
    const ul = document.createElement("ul");
    ul.classList.add("card-container");
    ul.setAttribute("data-js", "card-container");
    ul.innerHTML = `
        <li class="card" style="background-color: #252629">
          <div class="card__content" style="padding: 20px; text-align: center; color: white">
            <p>Sorry!<br><h3 style="line-height: 1;">${searchQuery}</h3> did not yet appear on the show.</p>
          </div>
        </li>`;
    cardElement.append(ul);
}