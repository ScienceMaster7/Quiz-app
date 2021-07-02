const newQuestion = document.getElementById("Your-new-Question");
const newAnswer = document.getElementById("your-New-Answer");
const newTags = document.getElementById("your-New-Tags");
const submitbutton = document.querySelector(".content__submit-button");
const formElement = document.querySelector(".input-Area");

submitbutton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Question: " + newQuestion.value);
  console.log("Answer: " + newAnswer.value);
  console.log("Tag's: " + newTags.value);
  formElement.reset();
});
