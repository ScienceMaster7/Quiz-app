const question = document.querySelector(".questionText");
const questiontext = question.textContent;
const checkAnswerbutton = document.querySelector(".answerButton");

checkAnswerbutton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(checkAnswerbutton.textContent);
  if (checkAnswerbutton.textContent === "Check Answer") {
    question.textContent = "Poseidon";
    checkAnswerbutton.textContent = "Show Question";
  } else if ((checkAnswerbutton.textContent = "Show Question")) {
    question.textContent = questiontext;
    checkAnswerbutton.textContent = "Check Answer";
  }
});
