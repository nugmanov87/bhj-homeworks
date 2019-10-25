"use strict";

const menu = document.querySelectorAll(".tab");
const content = document.querySelectorAll(".tab__content");

for (let i = 0; i < menu.length; i++) {
  menu[i].onclick = function() {
    removeMenu();

    menu[i].classList.add("tab_active");

    content[i].classList.add("tab__content_active");
  };
}

function removeMenu() {
  for (let s = 0; s < menu.length; s++) {
    menu[s].classList.remove("tab_active");

    content[s].classList.remove("tab__content_active");
  }
}
