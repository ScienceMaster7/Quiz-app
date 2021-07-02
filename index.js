const question = document.querySelectorAll(".questionText");
const checkAnswerbutton = document.querySelectorAll(".answerButton");
let questiontext = [];
let answers = [
  "Poseidon",
  "Olympus mons",
  "Tungsten",
  "about 2 Meters",
  "Göttingen",
];

for (let k = 0; k < question.length; k++) {
  questiontext.push(question[k].textContent);
}

for (let i = 0; i < checkAnswerbutton.length; i++) {
  checkAnswerbutton[i].addEventListener("click", (event) => {
    event.preventDefault();
    if (checkAnswerbutton[i].textContent === "Check Answer") {
      question[i].textContent = answers[i];
      checkAnswerbutton[i].textContent = "Show Question";
    } else if ((checkAnswerbutton[i].textContent = "Show Question")) {
      question[i].textContent = questiontext[i];
      checkAnswerbutton[i].textContent = "Check Answer";
    }
  });
}
