const bookmark = document.querySelectorAll(".bookmark--position");
const quizcards = document.querySelectorAll(".quizcard");
const mainElement = document.querySelector(".content");

for (let i = 0; i < bookmark.length; i++) {
  bookmark[i].addEventListener("click", () => {
    bookmark[i].classList.toggle("bookmark--color--toggled");
    let newQuizCard = quizcards[i];
    mainElement.appendChild(newQuizCard);
  });
}
