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
        <img src="${this.iconUrl}" alt="card icon" class="card__logo--top">
        <div class="card__info">
          <h3>${this.title}</h3>
          <p>${this.text}</p>
          <div class="card__link">
            <a href="#" class="card__link">Learn more </a>
            <img src="${this.iconArrow}" alt="arrow icon" class="arrow__icon">
          </div>
        </div>
      </div>
    `;
  }
}