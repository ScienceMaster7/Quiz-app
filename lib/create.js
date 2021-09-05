const newQuestion = document.getElementById("Your-new-Question");
const newAnswer = document.getElementById("your-New-Answer");
const newTags = document.getElementById("your-New-Tags");
const createbutton = document.querySelector(".content__submit-button");
const formElement = document.querySelector(".input-Area");

let cardNumber = 0;

createbutton.addEventListener("click", (event) => {
  event.preventDefault();

  const tags = newTags.value;
  const tagsArray = tags.split(" ");
  const newCardData = {
    question: newQuestion.value,
    answer: newAnswer.value,
    tags: tagsArray,
  };

  const newCardData_Serialized = JSON.stringify(newCardData);
  localStorage.setItem(cardNumber, newCardData_Serialized);

  cardNumber = cardNumber + 1;

  formElement.reset();
});
