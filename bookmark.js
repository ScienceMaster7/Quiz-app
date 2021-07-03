const bookmark = document.querySelectorAll(".bookmark--position");

for (let i = 0; i < bookmark.length; i++) {
  bookmark[i].addEventListener("click", () => {
    bookmark[i].classList.toggle("bookmark--color--toggled");
  });
}
