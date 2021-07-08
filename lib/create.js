const newQuestion = document.getElementById("Your-new-Question");
const newAnswer = document.getElementById("your-New-Answer");
const newTags = document.getElementById("your-New-Tags");
const createbutton = document.querySelector(".content__submit-button");
const formElement = document.querySelector(".input-Area");

let cardNumber = 0;

createbutton.addEventListener("click", (event) => {
  event.preventDefault();

  const newCardData = {
    Question: newQuestion.value,
    Answer: newAnswer.value,
    Tags: newTags.value,
  };
  localStorage.setItem(cardNumber, newCardData);

  cardNumber = cardNumber + 1;

  formElement.reset();
});
