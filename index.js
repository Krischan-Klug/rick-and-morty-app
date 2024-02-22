import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";

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
const maxPage = 1;
const page = 1;
const searchQuery = "";

//FOR RENDER!!!!
/*
const card = CharacterCard("", "Henrik", "Dead", "human", "45");
cardContainer.append(card); */

async function fetchCharacters() {
  const url = "https://rickandmortyapi.com/api/character";
  const response = await fetch(url);
  const json = await response.json();
  /* console.log(json.results); */
  return json.results;
}

const characterData = await fetchCharacters();
/* console.log(characterData); */

cardContainer.innerHTML = "";

characterData.forEach((character) => {
  const newCard = CharacterCard(
    character.image,
    character.name,
    character.status,
    character.type,
    character.episode.length
  );
  console.log(newCard);

  cardContainer.append(newCard);
});
