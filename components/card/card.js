export function createCharacterCard(data) {
    const card = document.createElement("li");
    card.innerHTML = `
    <li class="card">
        <div class="card__image-container">
        <img
            class="card__image"
            src="${data.results.image}"
            alt="${data.results.name}"
        />
        <div class="card__image-gradient"></div>
        </div>
        <div class="card__content">
        <h2 class="card__title">${data.results.name}</h2>
        <dl class="card__info">
            <dt class="card__info-title">Status</dt>
            <dd class="card__info-description">${data.results.status}</dd>
            <dt class="card__info-title">Type</dt>
            <dd class="card__info-description">${data.results.type}</dd>
            <dt class="card__info-title">Occurrences</dt>
            <dd class="card__info-description">${data.results.episode.length}</dd>
        </dl>
        </div>
    </li>`;
    return card
}
