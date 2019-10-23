"use strict";
const menuLink = document.getElementsByClassName("menu__link");
const menuSub = document.querySelectorAll("ul.menu_sub");

function removeActive() {
  for (let i = 0; i < menuSub.length; i++) {
    menuSub[i].classList.remove("menu_active");
  }
}

for (let i = 0; i < menuLink.length; i++) {
  menuLink[i].onclick = function() {
    const element = menuLink[i].nextElementSibling.classList;

    if (element.contains("menu_active")) {
      removeActive();
      return false;
    }

    if (element.contains("menu_sub")) {
      removeActive();
      element.add("menu_active");
      return false;
    }
  };
}
