const question = document.querySelectorAll(".has-tooltip");

for (let i = 0; i < question.length; i++) {
  let answear = question[i].getBoundingClientRect();
  let answearOnQuestion = `<div class="tooltip tooltip_active" style="left:${answear.x}px">${question[i].title}</div>`;

  question[i].addEventListener("click", e => {
    e.preventDefault();
    let title = e.target.getAttribute("title");

    if (e.target.classList.contains("tooltip_active")) {
      title.remove();
    } else {
      e.target.insertAdjacentHTML("afterEnd", answearOnQuestion);
    }
  });
}
