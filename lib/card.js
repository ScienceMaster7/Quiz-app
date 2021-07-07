/* Shape of the parameter structure:
    id: 7,
    question: "How can you add a comment in a JavaScript?",
    answer: "//This is a comment",
    isBookmarked: false,
    tags: ["Javascript", "general"], */

export function createCardComponents(cardData) {
  const sectionElement = document.createElement("section");
  sectionElement.classList.add("quizcard");

  const bookmarkIcon = document.createElement("i");
  bookmarkIcon.classList.add("fas");
  bookmarkIcon.classList.add("fa-bookmark");
  bookmarkIcon.classList.add("bookmark--position");
  bookmarkIcon.addEventListener("click", () => {
    bookmarkIcon.classList.toggle("bookmark--color--toggled");
  });

  const textElement = document.createElement("p");
  textElement.textContent = cardData.question;

  const buttonElement = document.createElement("button");
  buttonElement.classList.add("answerButton");
  buttonElement.textContent = "Check Answer";
  buttonElement.addEventListener("click", () => {
    if (textElement.textContent === cardData.question) {
      textElement.textContent = cardData.answer;
      buttonElement.textContent = "Show Question";
    } else if (textElement.textContent === cardData.answer) {
      textElement.textContent = cardData.question;
      buttonElement.textContent = "Check Answer";
    }
  });

  const tagSectionElement = document.createElement("section");
  tagSectionElement.classList.add("tags");

  cardData.tags.forEach((tag) => {
    const tagElement = document.createElement("div");
    tagElement.textContent = tag;
    tagElement.classList.add("tag");
    tagSectionElement.append(tagElement);
  });

  sectionElement.append(bookmarkIcon);
  sectionElement.append(textElement);
  sectionElement.append(buttonElement);
  sectionElement.append(tagSectionElement);

  return sectionElement;
}
