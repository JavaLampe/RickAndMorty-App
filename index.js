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
let maxPage = 1;
let searchQuery = "";

async function fetchCharacters(searchQuery, page) {
  cardContainer.innerHTML = "";
  try {
    const url = `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    if (!response) {
      console.log("error: ", response.status);
    }
    maxPage = data.info.pages;
    pagination.textContent = `${page} / ${maxPage}`;
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
    fetchCharacters(searchQuery, page); 
  }
})
nextButton.addEventListener('click', () => {
  if (page === maxPage) { return } else {
    page++
    fetchCharacters(searchQuery, page);
  }
});

searchBar.addEventListener('submit', (event) => {
  event.preventDefault();
  searchQuery = event.target.elements.input.value;
  page = 1;
  fetchCharacters(searchQuery, page);
  event.target.reset();
  event.target.elements.input.focus();
});