const texts = document.querySelectorAll(".rotator__case");
const firstText = texts.item(0);
const lastText = texts.item(texts.length - 1);

function changeText() {
  const textActive = document.querySelector(".rotator__case_active");
  const nextTextActive = textActive.nextElementSibling;

  if (nextTextActive == null) {
    firstText.classList.add("rotator__case_active");
    lastText.classList.remove("rotator__case_active");
  } else {
    textActive.classList.remove("rotator__case_active");
    nextTextActive.classList.add("rotator__case_active");
  }
}

setInterval(changeText, 1000);
