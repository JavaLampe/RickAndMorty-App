import {createCharacterCard} from "./components/card/card.js"

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let page = 1;
const searchQuery = "";

async function fetchCharacters(page) {
  cardContainer.innerHTML = "";
  try {
    const url = `https://rickandmortyapi.com/api/character/?page=${page}`;
    const response = await fetch(url);
    const data = await response.json();
    if (!response) {
      console.log("error: ", response.status);
    }
    const maxPages = data.info.pages;
    pagination.textContent = `${page} / ${maxPages}`
    const characters = data.results;
    characters.forEach(function(character) {
      const card = createCharacterCard(character);
      cardContainer.append(card);
    });
  } catch (error) {}
}

prevButton.addEventListener('click', () => {
  if (page === 1) { return } else {
    page--
    fetchCharacters(page); 
  }
})

nextButton.addEventListener('click', () => {
  if (page === 42) { return } else {
    page++
    fetchCharacters(page);
  }
})

fetchCharacters(page)
