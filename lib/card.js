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

  const textElement = document.createElement("p");
  textElement.textContent = cardData.question;

  const buttonElement = document.createElement("button");
  buttonElement.classList.add("answerButton");
  buttonElement.textContent = "Check Answer";

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

/* Shape of the card elements:
    <section class="quizcard">
        <h2 class="questionTitle">
          card title<i class="fas fa-bookmark bookmark--position"></i>
        </h2>
        <p class="questionText">
          Who is the Greek god of the Sea, horses and earthquakes?
        </p>
        <button class="answerButton">Check Answer</button>
        <section class="tags">
          <div class="tag"># red</div>
          <div class="tag"># green</div>
          <div class="tag"># hello</div>
        </section> */
