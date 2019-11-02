const question = document.querySelectorAll(".has-tooltip");

for (let i = 0; i < question.length; i++) {
  let answear = question[i].getBoundingClientRect();
  let answearOnQuestion = `<div class="tooltip tooltip_active" style="left:${answear.x}px">${question[i].title}</div>`;

  question[i].addEventListener("click", e => {
    e.preventDefault();
    if (e.target.nextElementSibling.classList.contains("tooltip_active")) {
      e.target.nextElementSibling.remove();
    } else {
      e.target.insertAdjacentHTML("afterEnd", answearOnQuestion);
    }
  });
}
