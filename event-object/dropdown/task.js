"use strict";

const button = document.getElementsByClassName("dropdown__value");
const dropList = document.getElementsByClassName("dropdown__list");
const dropLink = document.getElementsByClassName("dropdown__link");

function dropOpen() {
  dropList[0].classList.toggle("dropdown__list_active");
}

function changeButton() {
  button[0].textContent = this.textContent;
}

button[0].addEventListener("click", dropOpen);

for (let element of dropLink) {
  element.onclick = function() {
    dropList[0].classList.remove("dropdown__list_active");

    return false;
  };

  element.addEventListener("click", changeButton);
}
