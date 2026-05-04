import { cardsData } from '../data/data_card.js';
import { Card } from '../components/card.js';

export function main_body_render() {
  const card1 = new Card(
    cardsData[0].title,
    cardsData[0].text,
    cardsData[0].iconUrl,
    cardsData[0].iconArrow
  );

  const card2 = new Card(
    cardsData[1].title,
    cardsData[1].text,
    cardsData[1].iconUrl,
    cardsData[1].iconArrow
  );
  
  const card3 = new Card(
    cardsData[2].title,
    cardsData[2].text,
    cardsData[2].iconUrl,
    cardsData[2].iconArrow
  );
  
  return `
    <main class="main">
      <div class="main__cards--block">
        <div class="main__left">
          <h1>What we do to help our client grow in digital era</h1>
          <div class="main__left--card1">
            ${card1.render()}
          </div>
        </div>
        <div class="main__right">
          <div class="main__right--card2">
            ${card2.render()}
          </div>
          <div class="main__right--card3">
            ${card3.render()}
          </div>
        </div>
      </div>
    </main>
  `;
}