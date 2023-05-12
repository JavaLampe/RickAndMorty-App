import { fetchCharacters } from "./fetchCharacters.js";

export function eventBuilder (cardElement) {
    const pagination = document.querySelector("nav span");
    const form = document.querySelector("form");
    const navButtons = document.querySelectorAll("nav button");
    let page = 1;
    let maxPage = 1;
    let search = "";

    navButtons[0].addEventListener('click', () => {
        if (page === 1) { return } else {
            page--
            fetchCharacters(cardElement, search, page)
            .then((data) => {
                maxPage = data;
                pagination.textContent = `${page} / ${maxPage}`;
            });
        };
    })

    navButtons[1].addEventListener('click', () => {
        if (page === maxPage) { return } else {
            page++
            fetchCharacters(cardElement, search, page)
            .then((data) => {
                maxPage = data;
                pagination.textContent = `${page} / ${maxPage}`;
            });
        }; 
    })
    
    form.addEventListener('submit', (e) =>  {
        e.preventDefault();
        search = e.target.elements.input.value;
        page = 1;
        fetchCharacters(cardElement, search, page)
            .then((data) => {
                maxPage = data;
                pagination.textContent = `${page} / ${maxPage}`;
            });          
        e.target.reset();
        e.target.elements.input.focus();
    })
}


        