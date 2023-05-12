export function SearchBar() {
  const searchBarContainer = document.createElement("div");
  searchBarContainer.setAttribute("class", "search-bar-container");
  searchBarContainer.setAttribute("data-js", "search-bar-container");

  const form = document.createElement("form");
  form.setAttribute("class", "search-bar");
  form.setAttribute("data-js", "search-bar");

  const input = document.createElement("input");
  input.setAttribute("id", "input");
  input.setAttribute("class", "search-bar__input");
  input.setAttribute("aria-label", "character name");
  input.type = "text";
  input.name = "query";
  input.placeholder = "search characters";

  const btn = document.createElement("button");
  btn.setAttribute("class", "search-bar__button");
  btn.setAttribute("aria-label", "search for character");

  const image = document.createElement("img");
  image.src = "assets/magnifying-glass.png";
  image.setAttribute("class", "search-bar__icon");
  image.alt = "";

  btn.append(image);
  form.append(input, btn);
  searchBarContainer.append(form);

  return searchBarContainer;
}