import { createCardComponents } from "./card.js";
import { data } from "./db.js";

const cards = data.map((cardData) => {
  const cardComponents = createCardComponents(cardData);
  return cardComponents;
});

const contentElement = document.querySelector(".content");

cards.forEach((card) => {
  contentElement.append(card);
});
