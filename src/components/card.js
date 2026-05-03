export class Card {
  constructor(title, text, iconUrl, iconArrow) {
    this.title = title;
    this.text = text;
    this.iconUrl = iconUrl;
    this.iconArrow = iconArrow;
  }

  render() {
    return `
      <div class="card">
        <img src="${this.iconUrl}" alt="card icon" class="card__icon">
        <div class="card__info">
          <h3 class="card__title">${this.title}</h3>
          <p class="card__text">${this.text}</p>
          <div class="card__link">
            <a href="#" class="card__link">Learn more </a>
            <img src="${this.iconArrow}" alt="arrow icon" class="arrow__icon">
          </div>
        </div>
      </div>
    `;
  }
}