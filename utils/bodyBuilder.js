import {Heading} from "../components/heading/Heading.js"
import {NavPagination} from "../components/nav-pagination/nav-pagination.js";
import {SearchBar} from "../components/search-bar/search-bar.js"
import {DefaultCard} from "../components/default-card/default-card.js";

export function bodyBuilder() {
    const headingElement = Heading();
    const mainElement = document.createElement("main");
    const searchBarElement = SearchBar();
    const navPaginationElement = NavPagination();
    const cardElement = DefaultCard();
    mainElement.append(searchBarElement, cardElement);
    document.body.append(headingElement, mainElement, navPaginationElement);
    return cardElement;
}