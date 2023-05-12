import { Card } from "../components/card/card.js";
import { noCharacter } from "./noCharacter.js";

export async function fetchCharacters(cardElement, searchQuery, page) {
    try {
        const url = `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`;
        const response = await fetch(url);
        const data = await response.json();
        if (!response) {
            console.log("error: ", response.status);
        };
        const characters = data.results;
        if(characters === undefined) {noCharacter(cardElement, searchQuery); return};
        cardElement.innerHTML = "";
        characters.forEach((character) => {
            const card = Card(character);
            cardElement.append(card);
        }); 
        return data.info.pages;
    } catch (error) {console.log(error)}
};

