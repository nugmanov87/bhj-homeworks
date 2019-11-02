const caseArea = document.getElementById("task__input");
const caseList = document.getElementById("tasks__list");
const button = document.getElementById("tasks__add");

const writeCase = function() {
  let textCase = caseArea.value;
  return `<div class="task">
    <div class="task__title">
      ${textCase}
    </div>
    <a href="#" class="task__remove">&times;</a>
  </div>`;
};

caseArea.addEventListener("keydown", e => {
  if (e.keyCode === 13 && caseArea.value !== "") {
    e.preventDefault();
    caseList.innerHTML += writeCase();
    caseArea.value = "";
  }
});

caseList.addEventListener("click", e => {
  let target = e.target;
  if (target.classList.contains("task__remove")) {
    target.closest(".task").remove();
  }
});

button.addEventListener("click", e => {
  e.preventDefault();
  if (caseArea.value !== "") {
    caseList.innerHTML += writeCase();
    caseArea.value = "";
  }
});
